import React from 'react'

import './AboutMe.css'
import { IoMdMail  } from 'react-icons/io'
import { AiFillHtml5, AiOutlineCloudDownload } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import { FiFigma  } from 'react-icons/fi'
import { FaReact  } from 'react-icons/fa'
import { DiCss3  } from 'react-icons/di'
import { SiWebpack  } from 'react-icons/si'
import photo from '@images/photo.jpg'
import certificate from '@images/diploma-frontend-developer-2019_page-0001.jpg'

function AboutMe() {

    return(
        <section className='aboutMeContainer'>
            <div className="aboutMeContainer--AboutMeContent">
                <div className="AboutMeContent--title content--title">
                    <h2>Sobre mi</h2>
                    <div className="AboutMeContent--title__options">
                        <div className="option optionSkills">
                            <p>Habilidades</p>
                        </div>
                        <div className="option optionProfile optionActive">
                            <p>Perfil</p>
                        </div>
                        <div className="option optionCertificate">
                            <p>Certificados</p>
                        </div>
                    </div>
                </div>
                <div className="AboutMeContent--perfilContainer">
                    <div className="perfilContainer--perfil">
                        <p>Desarrollador Frontend especializándome en React JS. Creación y desarrollo de productos digitales innovadores centrados en los usuarios. Estudiante de Platzi 💚</p>
                        <div className="perfilContainer--contact">
                            <a className='header--menu__contact' href="#">Contáctame <i> <IoMdMail/> </i></a>
                            <a className='header--menu__contact downlandCV' href="#">Descargar CV <i> <AiOutlineCloudDownload/> </i></a>
                        </div>
                    </div>
                    {/* Dar none */}
                    <div className="perfilContainer--skills perfilContainer--list none">
                        <ul>
                            <li><p><i><AiFillHtml5 /></i> HTML</p></li>
                            <li><p><i><DiCss3 /></i> CSS</p></li>
                            <li><p><i><IoLogoJavascript /></i> JavaScript</p></li>
                            <li><p><i><FaReact /></i> React.js</p></li>
                            <li><p><i><SiWebpack /></i> Webpack</p></li>
                            <li><p><i><FiFigma /></i> Figma</p></li>
                        </ul>
                    </div>
                    {/* Dar none */}
                    <div className="perfilContainer--certificates perfilContainer--list none">
                        <ul>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 1</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 2</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 3</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 4</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 5</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 6</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 7</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 8</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 9</a></li>
                            </div>
                            <div className="curse">
                                <li><a href="#">Curso Desarrollo 10</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="aboutMeContainer--photo">
                <img className='' src={photo} alt="Photo of Josue Martinez is a Frontend developer" />
                <img className='none' src={certificate} alt="Photo of Josue Martinez is a Frontend developer" />
            </div>
        </section>
    )
}

export { AboutMe }