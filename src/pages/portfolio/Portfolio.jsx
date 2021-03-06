import React from 'react'

import { Header } from '../../components/components portfolio/Header/index'
import { Main } from '../../components/components portfolio/Main/index'
import { Footer } from '../../components/components portfolio/Footer/index'

import './Portfolio.css'
import './responsive/PortfolioLaptop.css'
import './responsive/PortfolioTablet.css'
import './responsive/PortfolioMobile.css'

function Portfolio() {
    return(
        <div style={{background: "linear-gradient(135deg, var(--red) 0%, var(--purple) 50%, var(--dark-green) 100%)"}}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export { Portfolio }