import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './global.css'

import { Portfolio } from '../pages/portfolio/Portfolio'
import { Freebie } from '../pages/freebie/Freebie'
import { AgencyLP } from '../pages/agencyLandingPage/AgencyLP'
import { NotFount } from '../pages/NotFound'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Portfolio />} />
                <Route exact path="/freebie" element={<Freebie />} />
                <Route exact path="/agency-landing-page" element={<AgencyLP />} />
                <Route element={<NotFount />} />
            </Routes>
        </BrowserRouter>
    )
}

export {App}