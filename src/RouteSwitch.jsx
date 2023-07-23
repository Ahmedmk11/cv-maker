import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import CreateCV from './pages/CreateCV.jsx'
import Templates from './pages/Templates.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import About from './pages/About.jsx'
import Terms from './pages/Terms.jsx'
import Support from './pages/Support.jsx'

const RouteSwitch = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/CreateCV">
                <Route path="Personal-Details" element={<CreateCV stage={'0'} />} />
                <Route path="Experience-and-Education" element={<CreateCV stage={'1'} />} />
                <Route path="Template" element={<CreateCV stage={'2'} />} />
            </Route>
            <Route path="/Templates" element={<Templates />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/About" element={<About />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Support" element={<Support />} />
        </Routes>
    )
}

export default RouteSwitch
