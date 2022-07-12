import React, { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import { Layout } from 'ui/organisms/Layout/Layout'
import { BigThumbnail } from './atoms/BigThumbnail/BigThumbnail'
import { SmallThumbnail } from './atoms/SmallThumbnail/SmallThumbnail'
import './BlogPage.scss';
import { posts as postsHttp} from 'libs/http/posts/posts'
import { Posts } from 'libs/http/posts/posts.types'
import { Tweet } from 'libs/http/posts/tweets.types'

export const BlogPage = () => {
  const avatar = require('../../resources/avatar.jpg');
  const [posts, setPosts] = useState<Posts[]>();
  const [tweets, setTweets] = useState<{data: Tweet[]}>();
  
  useEffect(()=>{
    const getData = async() => {
      const {data} = await postsHttp.getPosts();
      setPosts(data);
     };
     getData();
  }, []);

  useEffect(()=>{
    const getTweets = async () => {
      const {data} = await postsHttp.getTweets('1002292598151831552');
      setTweets(data);
    };
    getTweets();
  },[])

  return (
    <Layout>
        <div className='blog'>
          <div className='blog__posts'>
            {posts && posts.length !== 0?(
              <>
                <BigThumbnail data={{id: posts[0].id, converUrl:posts[0].coverUrl, title:posts[0].title}}/>
                  <div className='blog__posts__posts-grid'>
                    {posts.length>1 && posts.slice(1).map((item)=>(
                      <SmallThumbnail  
                        data={{id:item.id, converUrl: item.coverUrl, title:item.title}}
                        key={item.id}
                      />
                    ))} 
                  </div>
              </>
              ):(<p>Currently no Posts</p>)
            }
          </div>
          <div className='blog__twitter-posts'>
            <div className='blog__twitter-posts__title'>Recent Tweets</div>    
            <div className='blog__twitter-posts__tweets'>
              {tweets && tweets.data.slice(0,5).map((item)=>(
                <div className='post' key={item.id}>
                  <a href={env('TWITTER_URL')} target="_blank" rel="noopener noreferrer">
                    <div className='header'>
                      <img src={avatar} className='header__avatar' alt='my avatar'/>
                      <div className='header__name'>Andres Iporre</div>
                    </div>
                  </a>
                  <a href={env('TWITTER_URL')} target="_blank" rel="noopener noreferrer">
                    <div className='post-text'>{item.text}</div>
                  </a>
                </div>
              ))}
              
            </div>
          </div>
        </div>
    </Layout>
  )
}
