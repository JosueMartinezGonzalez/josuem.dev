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
                <p className='writer'> <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'React Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
            </div>
            <div className="welcomeContainer--socialsContainer">
                <div className="welcomeContainer--socialsContainer__socials">
                    <p><a href='#'><i> <AiFillGithub /> </i></a></p>
                    <p><a href='#'><i> <BsLinkedin /> </i></a></p>
                    <p><a href='#'><i> <AiFillTwitterCircle /> </i></a></p>
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