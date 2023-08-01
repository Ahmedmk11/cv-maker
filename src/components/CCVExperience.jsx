/* eslint-disable indent */

import React, {
    useState,
    useEffect,
    useCallback,
    useContext,
    useLayoutEffect,
    useRef,
} from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button.jsx'
import Section from './Section.jsx'
import DataContext from './DataContext.jsx'

function CCVExperience() {
    const { handleSubmit: handleSubmit1, reset: reset1 } = useForm()
    const { handleSubmit: handleSubmit2, reset: reset2 } = useForm()
    const { handleSubmit: handleSubmit3 } = useForm()
    const [isEdit, setIsEdit] = useState(false)
    const [flagW, setFlagW] = useState(0)
    const [flagS, setFlagS] = useState(0)
    const [flagC, setFlagC] = useState(0)
    const { jobs, setJobs, schools, setSchools, skills, setSkills } =
        useContext(DataContext)
    const [jobData, setJobData] = useState({
        jobid: '',
        cname: '',
        jtitle: '',
        startDate: '',
        endDate: '',
        wcity: '',
        wcountry: '',
        desc: '',
    })
    const [schoolData, setSchoolData] = useState({
        schoolid: '',
        uni: '',
        degree: '',
        major: '',
        startDateSchool: '',
        endDateSchool: '',
        scity: '',
        scountry: '',
        descSchool: '',
    })
    const [skillsData, setSkillsData] = useState({
        skillid: '',
        certificates: '',
        skills: '',
        courses: '',
        interests: '',
        references: '',
        languages: '',
    })

    const saveWork = () => {
        console.log('jobData', jobData)
        if (!isEdit) {
            const newJobData = {
                ...jobData,
                jobid: jobs.length,
            }
            setJobs((prevJobs) => {
                const updatedJobs = [...prevJobs, newJobData]
                localStorage.setItem('jobs', JSON.stringify(updatedJobs))
                return updatedJobs
            })
            setJobData({
                jobid: '',
                cname: '',
                jtitle: '',
                startDate: '',
                endDate: '',
                wcity: '',
                wcountry: '',
                desc: '',
            })
            reset1()
        } else {
            setJobs((prevJobs) => {
                const updatedJobs = prevJobs.map((job) =>
                    job.jobid === jobData.jobid ? jobData : job
                )
                localStorage.setItem('jobs', JSON.stringify(updatedJobs))
                return updatedJobs
            })
        }
        setIsEdit(false)
        setFlagW(0)
    }

    const saveSchool = () => {
        if (!isEdit) {
            const newSchoolData = {
                ...schoolData,
                schoolid: schools.length,
            }
            setSchools((prevSchools) => {
                const updatedSchools = [...prevSchools, newSchoolData]
                localStorage.setItem('schools', JSON.stringify(updatedSchools))
                return updatedSchools
            })
            setSchoolData({
                schoolid: '',
                uni: '',
                degree: '',
                major: '',
                startDateSchool: '',
                endDateSchool: '',
                scity: '',
                scountry: '',
                descSchool: '',
            })
            reset2()
        } else {
            setSchools((prevSchools) => {
                const updatedSchools = prevSchools.map((school) =>
                    school.schoolid === schoolData.schoolid
                        ? schoolData
                        : school
                )
                localStorage.setItem('schools', JSON.stringify(updatedSchools))
                return updatedSchools
            })
        }
        setIsEdit(false)
        setFlagS(0)
    }

    const saveSkills = () => {
        setSkills([skillsData])
        setFlagC(-1)
        localStorage.setItem('skillsData', JSON.stringify(skillsData))
    }
    const addWork = useCallback((event) => {
        event.preventDefault()
        setFlagW(1)
        setButton1(
            <Button
                id="done-button-1"
                classN="plus"
                name="Done"
                type="submit"
            />
        )
    }, [])
    const addSchool = useCallback((event) => {
        event.preventDefault()
        setFlagS(1)
        setButton2(
            <Button
                id="done-button-2"
                classN="plus"
                name="Done"
                type="submit"
            />
        )
    }, [])
    const addSkill = useCallback((event) => {
        event.preventDefault()
        setFlagC(1)
        setButton3(
            <Button
                id="done-button-3"
                classN="plus"
                name="Done"
                type="submit"
            />
        )
    }, [])
    const cancelJob = (event) => {
        setJobData({
            jobid: '',
            cname: '',
            jtitle: '',
            startDate: '',
            endDate: '',
            wcity: '',
            wcountry: '',
            desc: '',
        })
        reset1()
        event.preventDefault()
        setFlagW(0)
    }
    const cancelSchool = (event) => {
        setSchoolData({
            schoolid: '',
            uni: '',
            degree: '',
            major: '',
            startDateSchool: '',
            endDateSchool: '',
            scity: '',
            scountry: '',
            descSchool: '',
        })
        reset2()
        event.preventDefault()
        setFlagS(0)
    }
    const cancelSkills = (event) => {
        event.preventDefault()
        setFlagC(-1)
    }
    function handleChange(event) {
        event.target.setCustomValidity('')
        const { name, value } = event.target
        setJobData({ ...jobData, [name]: value })
    }
    function handleSchoolChange(event) {
        event.target.setCustomValidity('')
        const { name, value } = event.target
        setSchoolData({ ...schoolData, [name]: value })
    }
    function handleSkillChange(event) {
        event.target.setCustomValidity('')
        const { name, value } = event.target
        setSkillsData({ ...skillsData, [name]: value })
    }

    const [button1, setButton1] = useState(
        <Button classN="plus" name="Add Work Experience" click={addWork} />
    )
    const [button2, setButton2] = useState(
        <Button classN="plus" name="Add School" click={addSchool} />
    )
    const [button3, setButton3] = useState(
        <Button
            classN="plus"
            name="Add Skills and Certifications"
            click={addSkill}
        />
    )

    useEffect(() => {
        const savedJobs = JSON.parse(localStorage.getItem('jobs'))
        console.log('savedJobs', savedJobs)
        if (savedJobs) {
            setJobs(savedJobs)
        }
    }, [setJobs])
    useEffect(() => {
        const savedSchools = JSON.parse(localStorage.getItem('schools'))
        if (savedSchools) {
            setSchools(savedSchools)
        }
    }, [setSchools])
    useEffect(() => {
        const savedSkillsData = JSON.parse(localStorage.getItem('skillsData'))
        if (savedSkillsData) {
            setSkillsData(savedSkillsData)
            setSkills([savedSkillsData])
        }
    }, [setSkills])

    useEffect(() => {
        if (flagW === 1) {
            document.getElementById('workField').hidden = false
        } else if (flagW === 0) {
            document.getElementById('workField').hidden = true
            setButton1(
                <Button
                    classN="plus"
                    name="Add Work Experience"
                    click={addWork}
                />
            )
        }
    }, [flagW, addWork])

    useEffect(() => {
        if (flagS === 1) {
            document.getElementById('schoolField').hidden = false
        } else if (flagS === 0) {
            document.getElementById('schoolField').hidden = true
            setButton2(
                <Button classN="plus" name="Add School" click={addSchool} />
            )
        }
    }, [flagS, addSchool])

    useEffect(() => {
        if (flagC === 1) {
            document.getElementById('skillsField').hidden = false
        } else if (flagC === 0) {
            document.getElementById('skillsField').hidden = true
            setButton3(
                <Button
                    classN="plus"
                    name="Add Skills and Certifications"
                    click={addSkill}
                />
            )
        } else if (flagC === -1) {
            document.getElementById('skillsField').hidden = true
            setButton3(
                <Button
                    classN="plus"
                    name="Edit Skills and Certifications"
                    click={addSkill}
                />
            )
        }
    }, [flagC, addSkill])

    useEffect(() => {
        console.log(jobs)
        console.log(schools)
        console.log(skills)
    }, [jobs, schools, skills])

    function handleInputChange(event) {
        var input = event.target
        var inputValue = input.value
        var modifiedValue = inputValue.replace(/(\s+|,+)/g, ',').trim()
        input.value = modifiedValue
    }

    function deleteSection(event) {
        event.preventDefault()
        const id = event.target.parentElement.parentElement.id
        const type = id.split('-')[0]
        const index = id.split('-')[1]
        switch (type) {
            case 'job': {
                const newJobs = jobs.filter((job, i) => i !== parseInt(index))
                setJobs(newJobs)
                break
            }
            case 'school': {
                const newSchools = schools.filter(
                    (school, i) => i !== parseInt(index)
                )
                setSchools(newSchools)
                break
            }
            case 'skill': {
                const newSkills = skills.filter(
                    (skill, i) => i !== parseInt(index)
                )
                setSkills(newSkills)
                break
            }
        }
    }

    const editSection = (event) => {
        event.preventDefault()
        setIsEdit(true)
        const id = event.target.parentElement.parentElement.id
        const type = id.split('-')[0]
        const index = id.split('-')[1]
        switch (type) {
            case 'job': {
                const job = jobs[index]
                setJobData({
                    jobid: job.jobid,
                    cname: job.cname,
                    jtitle: job.jtitle,
                    startDate: job.startDate,
                    endDate: job.endDate,
                    wcity: job.wcity,
                    wcountry: job.wcountry,
                    desc: job.desc,
                })
                setFlagW(1)
                setButton1(<Button classN="plus" name="Done" isSubmit={true} />)
                break
            }
            case 'school': {
                const school = schools[index]
                setSchoolData({
                    schoolid: school.schoolid,
                    uni: school.uni,
                    degree: school.degree,
                    major: school.major,
                    startDateSchool: school.startDateSchool,
                    endDateSchool: school.endDateSchool,
                    scity: school.scity,
                    scountry: school.scountry,
                    descSchool: school.descSchool,
                })
                setFlagS(1)
                setButton2(<Button classN="plus" name="Done" isSubmit={true} />)
                break
            }
            case 'skill': {
                const skill = skills[0]
                setSkillsData({
                    skillid: skill.skillid,
                    certificates: skill.certificates,
                    skills: skill.skills,
                    courses: skill.courses,
                    interests: skill.interests,
                    references: skill.references,
                    languages: skill.languages,
                })
                setFlagC(1)
                setButton3(<Button classN="plus" name="Done" isSubmit={true} />)
                break
            }
        }
    }

    const scrollY = useRef(window.scrollY)

    useLayoutEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useLayoutEffect(() => {
        window.scrollTo(0, scrollY.current)
    })

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit1(saveWork)}>
                    <legend className="first-legend">
                        <span className="number">1</span>Work Experience
                        <hr />
                    </legend>
                    <div className="sections">
                        {jobs.map((job, index) => (
                            <>
                                <Section
                                    key={`job-${index}`}
                                    type="work"
                                    id={`job-${index}`}
                                    deleteSection={deleteSection}
                                    editSection={editSection}
                                    data={{
                                        name: job.cname,
                                        start: job.startDate,
                                        end: job.endDate,
                                    }}
                                />
                            </>
                        ))}
                    </div>
                    <fieldset id="workField" className="field" hidden>
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            id="companyName"
                            type="text"
                            name="cname"
                            required
                            placeholder="Company"
                            value={jobData.cname}
                            onChange={handleChange}
                        />
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            id="jobTitle"
                            type="text"
                            name="jtitle"
                            required
                            placeholder="Software Engineer"
                            value={jobData.jtitle}
                            onChange={handleChange}
                        />
                        <label htmlFor="sDate">Start Date</label>
                        <input
                            id="sDate"
                            type="date"
                            name="startDate"
                            required
                            value={jobData.startDate}
                            onChange={handleChange}
                        />
                        <label htmlFor="eDate">End Date</label>
                        <input
                            id="eDate"
                            type="date"
                            name="endDate"
                            value={jobData.endDate}
                            onChange={handleChange}
                        />
                        <label htmlFor="wcity">City</label>
                        <input
                            id="wcity"
                            type="text"
                            name="wcity"
                            required
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid city name'
                                )
                            }
                            pattern="[A-Za-z]+"
                            placeholder="Cairo"
                            value={jobData.wcity}
                            onChange={handleChange}
                        />
                        <label htmlFor="wcountry">Country</label>
                        <input
                            id="wcountry"
                            type="text"
                            name="wcountry"
                            required
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid country name'
                                )
                            }
                            pattern="[A-Za-z]+"
                            placeholder="Egypt"
                            value={jobData.wcountry}
                            onChange={handleChange}
                        />
                        <label htmlFor="role">Description</label>
                        <textarea
                            id="role"
                            placeholder="What did you do?"
                            name="desc"
                            value={jobData.desc}
                            onChange={handleChange}
                        ></textarea>
                    </fieldset>
                    {button1}
                    {button1.props.name === 'Done' && (
                        <Button classN="plus" name="Cancel" click={cancelJob} />
                    )}
                </form>

                <form onSubmit={handleSubmit2(saveSchool)}>
                    <legend>
                        <span className="number">2</span>Education
                        <hr />
                    </legend>
                    <div className="sections">
                        {schools.map((school, index) => (
                            <>
                                <Section
                                    key={`school-${index}`}
                                    type="education"
                                    id={`school-${index}`}
                                    deleteSection={deleteSection}
                                    editSection={editSection}
                                    data={{
                                        name: school.uni,
                                        start: school.startDateSchool,
                                        end: school.endDateSchool,
                                    }}
                                />
                            </>
                        ))}
                    </div>
                    <fieldset id="schoolField" className="field" hidden>
                        <label htmlFor="uni">University Name</label>
                        <input
                            id="uni"
                            type="text"
                            name="uni"
                            required
                            placeholder="German University in Cairo"
                            value={schoolData.uni}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="degree">Degree</label>
                        <input
                            id="degree"
                            type="text"
                            name="degree"
                            required
                            placeholder="Bachelor of Science"
                            value={schoolData.degree}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="major">Major</label>
                        <input
                            id="major"
                            type="text"
                            name="major"
                            required
                            placeholder="Computer Science"
                            value={schoolData.major}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="startDateSchool">Start Date</label>
                        <input
                            id="startDateSchool"
                            type="date"
                            name="startDateSchool"
                            required
                            value={schoolData.startDateSchool}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="endDateSchool">End Date</label>
                        <input
                            id="endDateSchool"
                            type="date"
                            name="endDateSchool"
                            required
                            value={schoolData.endDateSchool}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="scity">City</label>
                        <input
                            id="scity"
                            type="text"
                            name="scity"
                            placeholder="Cairo"
                            required
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid city name'
                                )
                            }
                            pattern="[A-Za-z]+"
                            value={schoolData.scity}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="scountry">Country</label>
                        <input
                            id="scountry"
                            type="text"
                            name="scountry"
                            placeholder="Egypt"
                            required
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid country name'
                                )
                            }
                            pattern="[A-Za-z]+"
                            value={schoolData.scountry}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="roleSchool">Description</label>
                        <textarea
                            id="roleSchool"
                            name="descSchool"
                            placeholder="Anymore relevant information?"
                            value={schoolData.descSchool}
                            onChange={handleSchoolChange}
                        ></textarea>
                    </fieldset>
                    {button2}
                    {button2.props.name === 'Done' && (
                        <Button
                            classN="plus"
                            name="Cancel"
                            click={cancelSchool}
                        />
                    )}
                </form>

                <form onSubmit={handleSubmit3(saveSkills)}>
                    <legend>
                        <span className="number">3</span>Skills & Certifications
                        <hr />
                    </legend>
                    <div className="sections">
                        {skills.length > 0 && (
                            <Section
                                key={`skill-0`}
                                type="skills"
                                id={`skill-0`}
                                deleteSection={deleteSection}
                                editSection={editSection}
                                data={{
                                    certificates: skills[0]?.certificates
                                        ? skills[0].certificates
                                              .split(',')
                                              .map((item) => item.trim())
                                        : [],
                                    skills: skills[0]?.skills
                                        ? skills[0].skills
                                              .split(',')
                                              .map((item) => item.trim())
                                        : [],
                                    courses: skills[0]?.courses
                                        ? skills[0].courses
                                              .split(',')
                                              .map((item) => item.trim())
                                        : [],
                                    interests: skills[0]?.interests
                                        ? skills[0].interests
                                              .split(',')
                                              .map((item) => item.trim())
                                        : [],
                                    references: skills[0]?.references
                                        ? skills[0].references
                                              .split(',')
                                              .map((item) => item.trim())
                                        : [],
                                    languages: skills[0]?.languages
                                        ? skills[0].languages
                                              .split(',')
                                              .map((item) => item.trim())
                                        : [],
                                }}
                            />
                        )}
                    </div>
                    <fieldset id="skillsField" className="field" hidden>
                        <label htmlFor="certificates">Certifications</label>
                        <textarea
                            onInput={handleInputChange}
                            id="certificates"
                            name="certificates"
                            placeholder="Any certifications?"
                            value={skillsData.certificates}
                            onChange={handleSkillChange}
                        ></textarea>
                        <label htmlFor="skills">Skills</label>
                        <textarea
                            onInput={handleInputChange}
                            id="skills"
                            name="skills"
                            placeholder="Any skills?"
                            value={skillsData.skills}
                            onChange={handleSkillChange}
                        ></textarea>
                        <label htmlFor="courses">Courses</label>
                        <textarea
                            onInput={handleInputChange}
                            id="courses"
                            name="courses"
                            placeholder="Any courses?"
                            value={skillsData.courses}
                            onChange={handleSkillChange}
                        ></textarea>
                        <label htmlFor="interests">Interests</label>
                        <textarea
                            onInput={handleInputChange}
                            id="interests"
                            name="interests"
                            placeholder="Any interests?"
                            value={skillsData.interests}
                            onChange={handleSkillChange}
                        ></textarea>
                        <label htmlFor="languages">Languages</label>
                        <textarea
                            onInput={handleInputChange}
                            id="languages"
                            name="languages"
                            placeholder="Any languages?"
                            value={skillsData.languages}
                            onChange={handleSkillChange}
                        ></textarea>
                        <label htmlFor="references">References</label>
                        <textarea
                            onInput={handleInputChange}
                            id="references"
                            name="references"
                            placeholder="Any references?"
                            value={skillsData.references}
                            onChange={handleSkillChange}
                        ></textarea>
                    </fieldset>
                    {button3}
                    {button3.props.name === 'Done' && (
                        <Button
                            classN="plus"
                            name="Cancel"
                            click={cancelSkills}
                        />
                    )}
                </form>
            </div>
        </>
    )
}

export default CCVExperience
