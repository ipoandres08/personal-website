import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SmallThumbnail.scss';

interface Props{
  data: {
      id: number;
      converUrl: string;
      title: string;
  }
}
export const SmallThumbnail: React.FC<Props> = ({data}) => {
  const navigate = useNavigate();
  const goToPostPage = () => {
      navigate(`/blog/${data.id}`);
  }
  return (
      <div className='small-thumbnail' onClick={()=> goToPostPage()}>
          <div className='small-thumbnail__title'>{data.title}</div>
          <img 
              src={data?.converUrl? data.converUrl: ''} 
              className='small-thumbnail__cover-container'
              alt='Blog Post Photo'
              />
      </div>
  )
}
