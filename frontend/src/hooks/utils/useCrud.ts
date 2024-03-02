import { ApiKeys } from '~/configs';
import { useFetch } from './useFetch';
import { useGenericMutation } from './useGenericMutation';
import { HttpMethod } from '~/types';

export const useCrud = (crudKey : ApiKeys, fetchConfig = [], mutationConfig = []) => {
  const add = useGenericMutation(crudKey, HttpMethod.POST, ...mutationConfig);
  const edit = useGenericMutation(crudKey, HttpMethod.PATCH, ...mutationConfig);
  const remove = useGenericMutation(crudKey, HttpMethod.DELETE, ...mutationConfig);
  const get = useFetch(crudKey, ...fetchConfig);

  return { add, edit, remove, get };
};
