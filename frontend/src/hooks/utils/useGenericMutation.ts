import Cookies from 'js-cookie';
import { useMutation } from 'react-query';
import { ApiKeys, StorageKeys, apiUri } from '~/configs';
import { useNotifications } from '~/providers';
import { HttpMethod } from '~/types';

const sharedHeaders = {
  'Content-Type': 'application/json;charset=utf-8',
};


export const useGenericMutation = (
  resource : ApiKeys,
  method : HttpMethod = HttpMethod.POST,
  withAuth : boolean = true,
  host : string = apiUri,
  options = {},
  configs = {}
) => {
  const { notify } = useNotifications();

  const getHeaders = (withAuth: boolean) => withAuth ?  { authorization: `Bearer ${Cookies.get(StorageKeys.token)}` ,...sharedHeaders } : {...sharedHeaders}
  const headers = new Headers({...getHeaders(withAuth)});
  

  
  let tempRes : Response | null = null;

  return (urlParams = '', queryParams = '') =>
    useMutation(
      async data => {
        const response = await fetch(
          `${host}${resource}${urlParams}${queryParams}`,
          {
            method,
            headers,
            body: JSON.stringify(data),
            ...options,
          }
        );
        if (!response.ok) {
          tempRes = await response.json();
          throw new Error(`${response.status}`);
        }
        return await response.json();
      },
      {
        ...configs,
        onError: async (error) => {
          let errorMessage = 'An error occurred';
          if (tempRes) {
            const errorData = await tempRes.json();
            errorMessage = errorData.message || errorMessage;
          }
          notify('error', errorMessage);
        },
      }
    );
};
