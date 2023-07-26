import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import backPicAct from '../assets/images/icons/back.svg'
import backPicDeAct from '../assets/images/icons/backGray.svg'

import CCVPersonal from '../components/CCVPersonal.jsx'
import CCVExperience from '../components/CCVExperience.jsx'
import CCVTemplate from '../components/CCVTemplate.jsx'

function CreateCV(props) {
    const [count, setCount] = useState(0)
    const { stage } = props
    const navigate = useNavigate()

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    useEffect(() => {
        if (count === 0) {
            document.getElementById('back-btn').src = backPicDeAct
            document.getElementById('back-btn').classList.add('no-hover')
            navigate('/CreateCV/Personal-Details')
        } else if (count === 1) {
            document.getElementById('back-btn').src = backPicAct
            document.getElementById('back-btn').classList.remove('no-hover')
            navigate('/CreateCV/Experience-and-Education')
        } else if (count === 2) {
            navigate('/CreateCV/Template')
        } else if (count === 3) {
            navigate('/')
        }
    }, [count, navigate])

    const nextClick = () => {
        if (count <= 2) {
            setCount(count + 1)
        }
    }

    const prevClick = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: true,
                    isSelected3: false,
                }}
            />
            <img
                id="back-btn"
                src={backPicDeAct}
                alt="Back button for the form"
                onClick={prevClick}
            />
            <div id="createcv-body">
                {(() => {
                    if (stage === '0') {
                        return <CCVPersonal />
                    } else if (stage === '1') {
                        return <CCVExperience />
                    } else {
                        return <CCVTemplate />
                    }
                })()}
                <Button
                    name={count === 2 ? 'Finish' : 'Next Step'}
                    onClick={nextClick}
                />
            </div>
            <Footer />
        </>
    )
}

CreateCV.propTypes = {
    stage: PropTypes.string,
}

CreateCV.defaultProps = {
    stage: '0',
}

export default CreateCV
