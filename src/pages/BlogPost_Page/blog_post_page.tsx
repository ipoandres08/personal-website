import React, { useEffect, useState } from 'react';
import { Layout } from 'ui/organisms/Layout/Layout';
import './blog_post_page.scss';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { PostAction } from './atoms/PostAction/PostAction';
import env from '@beam-australia/react-env';
import { useLocation, useParams} from 'react-router-dom';
import { posts as postsHttp} from 'libs/http/posts/posts';
import { Posts } from 'libs/http/posts/posts.types';

export const BlogPostPage = () => {
    const [post, setPost] = useState<Posts>();
    const [copied, setCopied] = useState(false);
    const location = useLocation();
    const {id} = useParams<{id:string}>();
    useEffect(()=>{
        const getPost = async()=> {
            const {data} = await postsHttp.getPost(id!);
            setPost(data);
        }
        getPost();
    },[id])
    const onCopyLink = (): void => {
        navigator.clipboard.writeText(`${env('WEBSITE_URL')}${location.pathname}`);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
          }, 2000);
    }
    const getPostDate = (): string => {
        if(post?.createdAt){
            const date = new Date(post.createdAt);
            const year = new Intl.DateTimeFormat('en',{year: 'numeric'}).format(date);
            const month = new Intl.DateTimeFormat('en',{month: 'short'}).format(date);
            const day = new Intl.DateTimeFormat('en',{day: '2-digit'}).format(date);

            return `${month} ${day}, ${year}`;
        }
        return '';
    }
    return (
    <>
        <Layout>
            <div className='blog-post'>
                {post && <>
                    <img src={post.coverUrl} className='blog-post__cover' alt='Blog Cover'/>
                    <div className='blog-post__title'>{post.title}</div>
                    <div className='blog-post__date'>{getPostDate()}</div>
                    <div className='blog-post__post' dangerouslySetInnerHTML={{__html: post.text}}></div>
                    <div className='blog-post__post-actions'>
                        <div className='blog-post__post-actions__socials'>
                            <TwitterShareButton className='react-share' url={`${env('WEBSITE_URL')}`}>
                                <PostAction iconType='small-twitter' message='Tweet'/>
                            </TwitterShareButton>
                            <FacebookShareButton className='react-share' url={`${env('WEBSITE_URL')}`}>
                                <PostAction  iconType='small-facebook' message='Facebook'/>
                            </FacebookShareButton>
                            <PostAction iconType='copy' message={`${copied? "Copied":"Copy Link"}`} onClick={onCopyLink}/>
                        </div>
                    </div>
                </>}
            </div>
        </Layout>
    </>
  )
}
