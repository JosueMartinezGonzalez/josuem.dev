import React from 'react'
import { Link } from 'react-scroll'

import './Header.css'

import { IoMdMail  } from 'react-icons/io'
import logo from '@images/images/logo.png'

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
                                <Link className='menu__option' smooth={true} to="aboutMePosition">About Me</Link>
                            </li>
                            <li>
                                <Link className='menu__option' smooth={true} to="projectsPosition">Portfolio</Link>
                            </li>
                            <li>
                                    <a className='header--menu__contact' href="mailto:contact@josuem.dev">Contact Me <i> <IoMdMail/> </i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export { Header }