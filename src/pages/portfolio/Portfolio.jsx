import React from 'react'

import { Header } from '../../components/components portfolio/Header/index'
import { Main } from '../../components/components portfolio/Main/index'

function Portfolio() {
    return(
        <div style={{background: "linear-gradient(135deg, var(--red) 0%, var(--purple) 50%, var(--dark-green) 100%)"}}>
            <Header />
            <Main />
        </div>
    )
}

export { Portfolio }