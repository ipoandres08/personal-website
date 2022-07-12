import {Posts} from './posts.types';
import {axios} from 'libs/http/axios';
import {Tweet} from './tweets.types';

export const posts = {
    getPosts: (): Promise<{data: Posts[]}> => axios.get(`/posts`),
    getPost: (id:string): Promise<{data: Posts}> => axios.get(`/posts/${id}`),

    getTweets: (id:string): Promise<{data: { data: Tweet[] }}> => axios.get(`/posts/tweets/${id}`),
    //getPost: (id:string) => axios.get(`https://alexmatei.tech/api/post/${id}`)
}