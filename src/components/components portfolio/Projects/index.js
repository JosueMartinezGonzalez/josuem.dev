import React from 'react'

import './Projects.css'

import { BiLinkExternal  } from 'react-icons/bi'
import first_project from '@images/images/project_1.png'
import second_project from '@images/images/project_2.png'
import third_project from '@images/images/project_3.png'
import fourth_project from '@images/images/project_4.png'

function Projects() {
    return(
        <section className='projectsContainer'>
            <div className="projectTitle content--title">
                <h2>Portafolio</h2>
            </div>
            <div className="projectsContent">
                <div className="project">
                    <img src={first_project} alt="Imagen de proyecto del desarrollador Josue Martinez" />
                    <div className="project--description">
                        <h2>Mi pagina web</h2>
                        <p>React, css, GitHub Pages</p>
                        <div className="project--description__buttons">
                            <a
                            className='header--menu__contact'
                            href="https://josuem.dev"
                            target="_blank">
                            Ir <i> <BiLinkExternal/> </i></a>
                            <a
                            className='header--menu__contact'
                            href="https://github.com/JosueMartinezGonzalez/josuem.dev"
                            target="_blank">
                            GitHub <i> <BiLinkExternal/> </i></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={second_project} alt="Imagen de proyecto del desarrollador Josue Martinez" />
                    <div className="project--description">
                        <h2>Agency Landing Page</h2>
                        <p>React, css, GitHub Pages</p>
                        <div className="project--description__buttons">
                            <a className='header--menu__contact' href="/agency-landing-page">Ir <i> <BiLinkExternal/> </i></a>
                            <a className='header--menu__contact' href="https://github.com/JosueMartinezGonzalez/josuem.dev/tree/master/src/pages/agencyLandingPage" target="_blank">GitHub <i> <BiLinkExternal/> </i></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={third_project} alt="Imagen de proyecto del desarrollador Josue Martinez" />
                    <div className="project--description">
                        <h2>Rick y Morty Web</h2>
                        <p>React, css, GitHub Pages</p>
                        <div className="project--description__buttons">
                            <a className='header--menu__contact' href="#">Ir <i> <BiLinkExternal/> </i></a>
                            <a className='header--menu__contact' href="#" target="_blank">GitHub <i> <BiLinkExternal/> </i></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={fourth_project} alt="Imagen de proyecto del desarrollador Josue Martinez" />
                    <div className="project--description">
                        <h2>Freebie Page</h2>
                        <p>React, css, GitHub Pages</p>
                        <div className="project--description__buttons">
                            <a className='header--menu__contact' href="/freebie">Ir <i> <BiLinkExternal/> </i></a>
                            <a className='header--menu__contact' href="https://github.com/JosueMartinezGonzalez/josuem.dev/tree/master/src/pages/freebie" target="_blank">GitHub <i> <BiLinkExternal/> </i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Projects }