import React from 'react'
import { useNavigate } from 'react-router-dom';
import './BigThumbnail.scss';

interface Props{
    data: {
        id: number;
        converUrl: string;
        title: string;
    }
}
export const BigThumbnail: React.FC<Props> = ({data}) => {
    const navigate = useNavigate();
    const goToPostPage = () => {
        //navigate(`/blog/${data.id}`);
    }
    return (
        <div className='big-thumbnail' onClick={()=> goToPostPage()}>
            <img 
                src={data?.converUrl? data.converUrl: ''} 
                className='big-thumbnail__cover-container'
                alt='Blog Post Photo'
                />
            <div className='big-thumbnail__title'>{data.title}</div>
        </div>
    )
}
