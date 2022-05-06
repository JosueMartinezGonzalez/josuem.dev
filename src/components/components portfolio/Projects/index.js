import React from 'react'

import './Projects.css'

import { BiLinkExternal  } from 'react-icons/bi'
import first_project from '@images/images/project_1.webp'
import second_project from '@images/images/project_2.webp'
import third_project from '@images/images/project_3.webp'
import fourth_project from '@images/images/project_4.webp'


function Projects() {
    return(
        <section className='projectsContainer' name="projectsPosition">
            <div className="projectTitle content--title">
                <h2>Portfolio</h2>
            </div>
            <div className="projectsContent">
                <div className="project">
                    <img src={first_project} alt="Imagen de proyecto del desarrollador Josue Martinez" />
                    <div className="project--description">
                        <h2>My web site</h2>
                        <p>React, CSS, Github</p>
                        <div className="project--description__buttons">
                            <a className='header--menu__contact' href="https://josuem.dev">
                            Go <i> <BiLinkExternal/> </i></a>
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
                        <h2>Landing Page</h2>
                        <p>HTML, CSS, GitHub Pages</p>
                        <div className="project--description__buttons">
                            <a className='header--menu__contact' href="https://josuemartinezgonzalez.github.io/Agency-Landing-Page/" target="_blank">Go <i> <BiLinkExternal/> </i></a>
                            <a className='header--menu__contact' href="https://github.com/JosueMartinezGonzalez/Agency-Landing-Page" target="_blank">GitHub <i> <BiLinkExternal/> </i></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={third_project} alt="Imagen de proyecto del desarrollador Josue Martinez" />
                    <div className="project--description">
                        <h2>Rick y Morty Web</h2>
                        <p>JavaScript Vanilla, CSS, GitHub Pages</p>
                        <div className="project--description__buttons">
                            <a className='header--menu__contact' href="https://josuemartinezgonzalez.github.io/Rick-Y-Morty-SPA/" target="_blank">Go <i> <BiLinkExternal/> </i></a>
                            <a className='header--menu__contact' href="https://github.com/JosueMartinezGonzalez/Rick-Y-Morty-SPA" target="_blank">GitHub <i> <BiLinkExternal/> </i></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={fourth_project} alt="Imagen de proyecto del desarrollador Josue Martinez" />
                    <div className="project--description">
                        <h2>Freebie Page</h2>
                        <p>HTML, CSS, GitHub Pages</p>
                        <div className="project--description__buttons">
                            <a className='header--menu__contact' href="https://josuemartinezgonzalez.github.io/Frebbie/" target="_blank">Go <i> <BiLinkExternal/> </i></a>
                            <a className='header--menu__contact' href="https://github.com/JosueMartinezGonzalez/Frebbie" target="_blank">GitHub <i> <BiLinkExternal/> </i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Projects }
