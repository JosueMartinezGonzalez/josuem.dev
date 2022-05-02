import React, { useState } from 'react'

import './AboutMe.css'

import { IoMdMail  } from 'react-icons/io'
import { AiFillHtml5, AiOutlineCloudDownload } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import { FiFigma  } from 'react-icons/fi'
import { FaReact  } from 'react-icons/fa'
import { DiCss3  } from 'react-icons/di'
import { SiWebpack  } from 'react-icons/si'
import photo from '@images/images/photo.jpg'
import certificateA from '@images/images/diploma-3.jpg'
import certificateB from '@images/images/diploma-4.jpg'
import certificateC from '@images/images/diploma-5.jpg'
import certificateD from '@images/images/diploma-6.jpg'
import certificateE from '@images/images/diploma-7.jpg'
import certificateF from '@images/images/diploma-8.jpg'
import certificateG from '@images/images/diploma-9.jpg'
import CV_JosueMartinez from '@pdf/CV-Josue-Martinez.pdf'


function AboutMe() {

    const [menu, setMenu] = useState(
        {
            skills: "option",
            profile: "optionActive",
            certificates: "option",
            skillsContent: " none",
            profileContent: " ",
            certificatesContent: " none",
        }
        );
        const [certi, setCerti] = useState(
            {
            imageUrl: photo
        }
    )

    const handleClick = (option) => {
        if(option === 'skills') {
            setMenu(
                {
                    skills: "optionActive",
                    profile: "option",
                    certificates: "option",
                    skillsContent: "",
                    profileContent: " none",
                    certificatesContent: " none",
                }
            )
        } else if (option === 'profile') {
            setMenu(
                {
                    skills: "option",
                    profile: "optionActive",
                    certificates: "option",
                    skillsContent: " none",
                    profileContent: "",
                    certificatesContent: " none",
                }
            )
        } else if (option === 'certificates') {
            setMenu(
                {
                    skills: "option",
                    profile: "option",
                    certificates: "optionActive",
                    skillsContent: " none",
                    profileContent: " none",
                    certificatesContent: "",
                }
            )
        }
    }
    console.clear()
    const handleMouseOve = (certificateUrl) => {
        setCerti(
            {
                imageUrl: certificateUrl
            }
        )
    }
    const handleMouseLeave = () => {
        setCerti(
            {
                imageUrl: photo
            }
        )
    }


    return(
        <section className='aboutMeContainer'>
            <div className="aboutMeContainer--AboutMeContent">
                <div className="AboutMeContent--title content--title">
                    <h2>Sobre mi</h2>
                    <div className="AboutMeContent--title__options">
                        <div onClick={() => {handleClick('skills')}} className={menu.skills}>
                            <p>Habilidades</p>
                        </div>
                        <div onClick={() => {handleClick('profile')}} className={menu.profile}>
                            <p>Perfil</p>
                        </div>
                        <div onClick={() => {handleClick('certificates')}} className={menu.certificates}>
                            <p>Certificados</p>
                        </div>
                    </div>
                </div>
                <div className="AboutMeContent--perfilContainer">
                    <div className={'perfilContainer--perfil perfilContainer--list'+ menu.profileContent}>
                        <p>Desarrollador Frontend especializándome en React JS. Creación y desarrollo de productos digitales innovadores centrados en los usuarios. Estudiante de Platzi 💚</p>
                        <div className="perfilContainer--contact">
                            <a className='header--menu__contact' href="mailto:contact@josuem.dev">Contáctame <i> <IoMdMail/> </i></a>
                            <a className='header--menu__contact downlandCV' download="CV Josue Martinez" href={CV_JosueMartinez}>Descargar CV <i> <AiOutlineCloudDownload/> </i></a>
                        </div>
                    </div>
                    {/* Dar none */}
                    <div className={'perfilContainer--skills perfilContainer--list'+ menu.skillsContent}>
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
                    <div className={'perfilContainer--certificates perfilContainer--list'+ menu.certificatesContent}>
                        <ul>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateA)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank">
                                    <img src={certificateA} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateA)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank" rel="noopener noreferrer">
                                    <img src={certificateA} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateA)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank" rel="noopener noreferrer">
                                    <img src={certificateA} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateB)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank" rel="noopener noreferrer">
                                    <img src={certificateB} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateC)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank" rel="noopener noreferrer">
                                    <img src={certificateC} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateD)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank" rel="noopener noreferrer">
                                    <img src={certificateD} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateE)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank" rel="noopener noreferrer">
                                    <img src={certificateE} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateF)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank" rel="noopener noreferrer">
                                    <img src={certificateF} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                            <div onMouseLeave={() => {handleMouseLeave()}} onMouseOver={() => {handleMouseOve(certificateG)}} className="curse">
                                <a href="https://platzi.com/p/JosueM/" target="_blank" rel="noopener noreferrer">
                                    <img src={certificateG} alt="certificado de Josue Martinez" />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="aboutMeContainer--photo">
                <img className='photoProfile' src={certi.imageUrl} alt="Photo of Josue Martinez is a Frontend developer" />
            </div>
        </section>
    )
}

export { AboutMe }