import { useMenu } from 'hooks/useMenu';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon } from 'resources/icons/icons';
import env from '@beam-australia/react-env';
import './Footer.scss';

export const Footer = () => {
    const menu = useMenu();
    const navigate = useNavigate()
    const goToPage = (route: string): void => {
        navigate(route);
    }
    return (
    <div className='footer'>
        <div className='footer__menu'>
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
        <div className='footer__socials'>
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
  )
}
