import { ApiKeys, apiUri } from '~/configs';
import { HttpMethod } from '~/types';
import { useFetch, useGenericMutation } from '../';

export const useAuth = () => {
  const login = useGenericMutation( ApiKeys.login, HttpMethod.POST , false);
  const me = useFetch(ApiKeys.me, true, apiUri, {
    retry: 1,
    refetchOnWindowFocus: false,
  });
  

  return {
  login,
    me,
  };
  
};
