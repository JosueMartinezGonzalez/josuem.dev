import React from 'react'

import { Welcome } from '../Welcome';
import { AboutMe } from '../AboutMe';
import { Projects } from '../Projects';

import './Main.css'

function Main() {
    return(
        <main>
            <Welcome></Welcome>
            <AboutMe></AboutMe>
            <Projects></Projects>
        </main>
    )
}

export { Main }