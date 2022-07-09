import React from 'react'
import env from '@beam-australia/react-env'
import { Layout } from 'ui/organisms/Layout/Layout'
import { BigThumbnail } from './atoms/BigThumbnail/BigThumbnail'
import { SmallThumbnail } from './atoms/SmallThumbnail/SmallThumbnail'
import './BlogPage.scss'

export const BlogPage = () => {
  const avatar = require('../../resources/avatar.jpg');
  return (
    <Layout>
        <div className='blog'>
          <div className='blog__posts'>
            <BigThumbnail data={{id:1, converUrl:'',title:'First Blog'}}/>
            <div className='blog__posts__posts-grid'>
              <SmallThumbnail  data={{id:2, converUrl:'',title:'Second Blog'}}/>
              <SmallThumbnail  data={{id:3, converUrl:'',title:'Third Blog'}}/>
              <SmallThumbnail  data={{id:4  , converUrl:'',title:'Four Blog'}}/>
            </div>
          </div>
          <div className='blog__twitter-posts'>
            <div className='blog__twitter-posts__title'>Recent Tweets</div>    
            <div className='blog__twitter-posts__tweets'>
              <div className='post'>
                <a href={env('TWITTER_URL')} target="_blank" rel="noopener noreferrer">
                  <div className='header'>
                    <img src={avatar} className='header__avatar' alt='my avatar'/>
                    <div className='header__name'>Andres</div>
                  </div>
                </a>
                <a href={env('TWITTER_URL')} target="_blank" rel="noopener noreferrer">
                  <div className='post-text'>This is a Example Post</div>
                </a>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
