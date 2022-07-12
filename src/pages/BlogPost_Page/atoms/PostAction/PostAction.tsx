import React from 'react';
import { Icon } from 'resources/icons/icons';
import './PostAction.scss';

interface Props{
    iconType: string;
    message: string;
    onClick?: ()=> void;
}

export const PostAction: React.FC<Props> = ({iconType, message, onClick}) => {
  return (
    <div className='post-action' onClick={onClick}>
        <Icon className='post-action__icon' type={iconType}/>
        <div>{message}</div>
    </div>
  )
}
