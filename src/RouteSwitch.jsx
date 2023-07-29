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
            <Route path="/home" element={<Home />} />
            <Route path="/create">
                <Route
                    path="personal-details"
                    element={<CreateCV stage={'0'} />}
                />
                <Route
                    path="experience-and-education"
                    element={<CreateCV stage={'1'} />}
                />
                <Route path="template" element={<CreateCV stage={'2'} />} />
            </Route>
            <Route path="/templates" element={<Templates />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
        </Routes>
    )
}

export default RouteSwitch
