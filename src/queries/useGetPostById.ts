import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../api';

const useGetPostById = (postId: string) => {
  const fetcher = async () => {
    const { data } = await getPostById(postId);
    return data;
  };

  return useQuery({
    queryKey: ['getPostListById', postId],
    queryFn: fetcher,
    enabled: !!postId,
  });
};

export default useGetPostById;
