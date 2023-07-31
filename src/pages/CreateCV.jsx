import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Progress from '../components/Progress.jsx'
import backPicAct from '../assets/images/icons/back.svg'
import backPicDeAct from '../assets/images/icons/backGray.svg'

import CCVPersonal from '../components/CCVPersonal.jsx'
import CCVExperience from '../components/CCVExperience.jsx'
import CCVTemplate from '../components/CCVTemplate.jsx'

import DataContext from '../components/DataContext.jsx'
import Export from './Export.jsx'

function CreateCV(props) {
    const [count, setCount] = useState(0)
    const [personalInfo, setPersonalInfo] = useState({})
    const [experienceInfo, setexperienceInfo] = useState({})
    const [template, setTemplate] = useState('')
    const [jobs, setJobs] = useState([])
    const [schools, setSchools] = useState([])
    const [skills, setSkills] = useState([])
    const { stage } = props
    const navigate = useNavigate()

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    document.getElementById('circle0') &&
        document.getElementById('circle0').addEventListener('click', () => {
            setCount(0)
        })
    document.getElementById('circle1') &&
        document.getElementById('circle1').addEventListener('click', () => {
            setCount(1)
        })
    document.getElementById('circle2') &&
        document.getElementById('circle2').addEventListener('click', () => {
            setCount(2)
        })

    useEffect(() => {
        if (count === 0) {
            document.getElementById('back-btn').src = backPicDeAct
            document.getElementById('back-btn').classList.add('no-hover')
            document.getElementById('previous-p').classList.add('no-hover')
            navigate('/create/personal-details')
        } else if (count === 1) {
            document.getElementById('back-btn').src = backPicAct
            document.getElementById('back-btn').classList.remove('no-hover')
            document.getElementById('previous-p').classList.remove('no-hover')
            navigate('/create/experience-and-education')
        } else if (count === 2) {
            navigate('/create/template')
        } else if (count === 3) {
            navigate('/export')
        }
    }, [count, navigate])

    const nextClick = () => {
        if (count === 0) {
            setPersonalInfo({
                fname: document.getElementById('fname').value,
                lname: document.getElementById('lname').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                city: document.getElementById('city').value,
                country: document.getElementById('country').value,
                linkedin: document.getElementById('linkedin').value,
                website: document.getElementById('website').value,
            })
        }
        if (count === 1) {
            setexperienceInfo({
                jobs: jobs,
                schools: schools,
                skills: skills,
            })
        }

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
        <DataContext.Provider
            value={{
                jobs,
                setJobs,
                schools,
                setSchools,
                skills,
                setSkills,
                template,
                setTemplate,
            }}
        >
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
                        return (
                            <>
                                <h1>Personal Details</h1>
                                <Progress progress={'0'} />
                                <CCVPersonal />
                            </>
                        )
                    } else if (stage === '1') {
                        return (
                            <>
                                <h1>Experience and Education</h1>
                                <Progress progress={'1'} />
                                <CCVExperience />
                            </>
                        )
                    } else if (stage === '2') {
                        return (
                            <>
                                <h1>Templates</h1>
                                <Progress progress={'2'} />
                                <CCVTemplate />
                            </>
                        )
                    } else {
                        return (
                            <>
                                <Export
                                    personal={personalInfo}
                                    experience={experienceInfo}
                                    template={template}
                                />
                            </>
                        )
                    }
                })()}
                <Button
                    name={count === 2 ? 'Finish' : 'Next Step   \u203A'}
                    click={nextClick}
                />
                <p id="previous-p" onClick={prevClick}>
                    &#8249; Previous Step
                </p>
            </div>
            <Footer />
        </DataContext.Provider>
    )
}

CreateCV.propTypes = {
    stage: PropTypes.string,
}

CreateCV.defaultProps = {
    stage: '0',
}

export default CreateCV
