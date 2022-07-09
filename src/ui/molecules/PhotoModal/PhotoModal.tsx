import React from 'react'
import { createPortal } from 'react-dom'
import './PhotoModal.scss';

interface Props{
    setVisibility: (state :boolean) => void;
    photo: string;
}

export const PhotoModal: React.FC<Props> = ({photo, setVisibility}):React.ReactPortal | null => {
  const modalRoot = document.getElementById('modal')
    return modalRoot?createPortal( 
      <>  
        <div className='modal-bg' onClick={()=> setVisibility(false)} />
        <img className='modal-photo' src={photo} onClick={()=>setVisibility(false)}/>
      </>
    ,modalRoot)
    :null;
}
