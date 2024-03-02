import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import { ApiKeys, StorageKeys, apiUri } from '~/configs';

const sharedHeaders = {
  'Content-Type': 'application/json;charset=utf-8',
};


export const useFetch = (
  resource : ApiKeys,
  withAuth : boolean = true,
  host : string = apiUri,
  configs = {}
) => {

  const getHeaders = (withAuth: boolean) => withAuth ?  { authorization: `Bearer ${Cookies.get(StorageKeys.token)}` ,...sharedHeaders } : {...sharedHeaders}
  const headers = new Headers({...getHeaders(withAuth)});
  
  let tempRes : Response | null = null;

  return (urlParams = '', queryParams = '') =>
    useQuery(
      `${resource}${urlParams}${queryParams}`,
      async () => {
        let res = await fetch(`${host}${resource}${urlParams}${queryParams}`, {
          headers,
        });

        if (!res.ok) {
          tempRes = await res.json();
          throw new Error(`${res.status}`);
        }
        return res.json();
      },
      { ...configs }
    );
};
