import axios from 'axios';
import { API } from '@/config/api';
import { useQuery } from 'react-query';
import { QUERY_KEY } from '@/config/query';
import { Post } from '@/entities/post.entity';

const getPosts = async (): Promise<Post[]> =>
	axios.get(API.post.get).then(res => res.data);

export const usePosts = () => useQuery(QUERY_KEY.POSTS.ALL, getPosts);
