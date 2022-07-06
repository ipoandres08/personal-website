import React from 'react';
import './Navbar.scss';
import { useMenu } from 'hooks/useMenu';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'resources/icons/icons';
import env from '@beam-australia/react-env';

export const Navbar = () => {
    const menu = useMenu();
    const navigate = useNavigate()
    const goToPage = (route: string): void => {
        navigate(route);
    }
    return (
    <>
        <div className='navbar'>
            <div className='navbar__title'>Andres Iporre</div>
            <div className='navbar__socials'> 
                <a href={env("LINKEDIN_URL")} target="_blank" rel="noopener noreferrer">
                    <Icon type='linkedin'></Icon>
                </a>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <Icon type='facebook'></Icon>
                </a>
                <a href={env("INSTAGRAM_URL")} target="_blank" rel="noopener noreferrer">
                    <Icon type='instagram'></Icon>
                </a>
                <a href={env("GITHUB_URL")} target="_blank" rel="noopener noreferrer">
                    <Icon type='github'></Icon>
                </a>
            </div>
        </div>
        <div className='menu'>  
            {
                menu.map((item) => 
                    <span className={`menu__item${item.active? '--active' : ''}`} 
                        key={item.route}
                        onClick={() => goToPage(item.route)}
                    >
                        {item.label}
                    </span>
                )
            }
        </div>
    </>
  )
}
