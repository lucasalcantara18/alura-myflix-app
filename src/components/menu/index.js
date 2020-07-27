import React from 'react';

import Logo from '../../assets/img/Logo.png';
import './menu.css';
import ButtonLink from './components/button';
import Button from '../../components/button'
const Menu = () => {

    return (
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="AluraFlix logo" srcset="" onClick={(evt) => {evt.preventDefault()}}/>
            </a>


            {/* <ButtonLink className='ButtonLink' href="/" name="Novo Video" /> */}
            <Button>
                Novo Video
            </Button>
        </nav>
    );

}

export default Menu;