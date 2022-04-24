import React from 'react'

import './Header.css'

import { IoMdMail  } from 'react-icons/io'
import logo from '@images/logo.png'

function Header() {
    return(
        <header>
            <div className="headerContainer">
                <div className="headerContainer--logoContainer">
                <a href="https://josuem.dev">
                    <img
                        className='headerContainer--logoContainer__logo'
                        src={logo}
                        alt="Logo de Josue Martinez, es DEVJAMG entre signos de mayor y menor" />
                </a>
                </div>
                <div className="headerContainer--menu">
                    <nav>
                        <ul>
                            <li>
                                <a className='menu__option' href="#">Sobre mi</a>
                            </li>
                            <li>
                                <a className='menu__option' href="#">Portafolio</a>
                            </li>
                            <li>
                                    <a className='header--menu__contact' href="mailto:contact@josuem.dev">Contáctame <i> <IoMdMail/> </i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export { Header }