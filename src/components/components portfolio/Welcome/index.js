import React from 'react'
import Typewriter from 'typewriter-effect';

import './Welcome.css'
import { BsLinkedin  } from 'react-icons/bs'
import { FaArrowCircleDown  } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillGithub  } from 'react-icons/ai'

function Welcome() {
    return(
        <section className='welcomeContainer'>
            <div className="welcomeContainer--welcome">
                <h2>¡Hola! Yo soy,</h2>
                <h1>Josue Martinez</h1>
                <div className='writer'> <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'React Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="welcomeContainer--socialsContainer">
                <div className="welcomeContainer--socialsContainer__socials">
                    <p><a href='https://github.com/JosueMartinezGonzalez' target="_blank"><i> <AiFillGithub /> </i></a></p>
                    <p><a href='https://www.linkedin.com/in/josue-armando-martinez-gonzalez-7a3277174/' target="_blank"><i> <BsLinkedin /> </i></a></p>
                    <p><a href='https://twitter.com/devjamg' target="_blank"><i> <AiFillTwitterCircle /> </i></a></p>
                </div>
                <div className="welcomeContainer--socialsContainer__socials">
                    <p className='colors'><a href='#'></a></p>
                    <p className='colors'><a href='#'></a></p>
                    <p className='colors'><a href='#'></a></p>
                </div>
                <div className="welcomeContainer--socialsContainer__socials">
                    <p className='colors'><a href='#'></a></p>
                    <p><a href='#aboutMe'><i> <FaArrowCircleDown className='rowDown' /> </i></a></p>
                    <p className='colors'><a href='#'></a></p>
                </div>
            </div>
        </section>
    )
}

export { Welcome }