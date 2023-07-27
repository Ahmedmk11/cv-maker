import React from 'react'
import { useState ,useEffect} from 'react'
import Progress from '../components/Progress.jsx'
import Button from '../components/Button.jsx'

function CCVExperience() {
    const [jobs, setJobs] = useState([])
    const [schools, setSchools] = useState([])
    const [jobData, setJobData] = useState({
        cname: '',
        jtitle: '',
        startDate: '',
        endDate: '',
        wcity: '',
        wcountry: '',
        desc: '',
    })
    const [schoolData, setSchoolData] = useState({
        degree: '',
        uni: '',
        major: '',
        startDateSchool: '',
        endDateSchool: '',
        scity: '',
        scountry: '',
        descSchool: '',
    })


    const saveWork = (event) => {
        event.preventDefault()
        setJobs(...jobs, jobData)
    }
    
    const saveSchool = (event) => {
        event.preventDefault()
        setSchools(...schools, schoolData)
    }

    const addWork = (event) => {
        event.preventDefault()
        setButton1(<Button id="done-button-1" classN="plus" name='Done' type='submit' />)
    }
    
    const addSchool = (event) => {
        event.preventDefault()
        setButton2(<Button id="done-button-2" classN="plus" name='Done' type='submit' />)
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setJobData({ ...jobData, [name]: value });
    }

    function handleSchoolChange(event) {
        const { name, value } = event.target;
        setSchoolData({ ...schoolData, [name]: value });
    }
    
    const [button1, setButton1] = useState(<Button classN="plus" name='Add Work Experience' onClick={addWork} />)    
    const [button2, setButton2] = useState(<Button classN="plus" name='Add School' onClick={addSchool} />)    

    useEffect(() => {
        console.log(jobs)
    }, [jobs])

    return (
        <>
            <Progress progress={'1'} />
            <h1>Experience & Education</h1>
            <div className="form">
                <form onSubmit={saveWork}>
                    <legend>
                        <span className="number">1</span>Work Experience
                    </legend>
                    <fieldset className="field">
                        <hr />
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            id="companyName"
                            type="text"
                            name="cname"
                            placeholder="Company" 
                            value={jobData.cname}
                            onChange={handleChange}
                        />
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            id="jobTitle"
                            type="text"
                            name="jtitle"
                            placeholder="Software Engineer" 
                            value={jobData.jtitle}
                            onChange={handleChange}
                        />
                        <label htmlFor="sDate">Start Date</label>
                        <input 
                            id="sDate"
                            type="date"
                            name="startDate" 
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
                            placeholder="Cairo" 
                            value={jobData.wcity}
                            onChange={handleChange}
                        />
                        <label htmlFor="wcountry">Country</label>
                        <input
                            id="wcountry"
                            type="text"
                            name="wcountry"
                            placeholder="Egypt" 
                            value={jobData.wcountry}
                            onChange={handleChange}
                        />
                        <label htmlFor="role">Description</label>
                        <textarea
                            id="role"
                            placeholder="What did you do?"
                            name='desc' 
                            value={jobData.desc}
                            onChange={handleChange}
                        ></textarea>
                    </fieldset>
                    {button1}  
                </form>

                <form onSubmit={saveSchool}>
                    <legend>
                        <span className="number">2</span>Education
                    </legend>
                    <fieldset className="field">
                        <hr />
                        <label htmlFor="uni">University Name</label>
                        <input
                            id="uni"
                            type="text"
                            name="uni"
                            placeholder="German University in Cairo" 
                            value={schoolData.uni}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="degree">Degree</label>
                        <input
                            id="degree"
                            type="text"
                            name="degree"
                            placeholder="Bachelor of Science" 
                            value={schoolData.degree}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="major">Major</label>
                        <input 
                            id="major"
                            type="text"
                            name="major" 
                            placeholder='Computer Science'
                            value={schoolData.major}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="sDateSchool">Start Date</label>
                        <input 
                            id="sDateSchool"
                            type="date"
                            name="startDateSchool"
                            value={schoolData.startDate}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="eDateSchool">End Date</label>
                        <input 
                            id="eDateSchool" 
                            type="date" 
                            name="endDateSchool"
                            value={schoolData.endDateSchool}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="scity">City</label>
                        <input
                            id="scity"
                            type="text"
                            name="scity"
                            placeholder="Cairo" 
                            value={schoolData.scity}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="scountry">Country</label>
                        <input
                            id="scountry"
                            type="text"
                            name="scountry"
                            placeholder="Egypt" 
                            value={schoolData.scountry}
                            onChange={handleSchoolChange}
                        />
                        <label htmlFor="roleSchool">Description</label>
                        <textarea
                            id="roleSchool"
                            placeholder="Anymore relevant information?"
                            name='descSchool' 
                            value={schoolData.descSchool}
                            onChange={handleSchoolChange}
                        ></textarea>
                    </fieldset>
                    {button2}
                </form>
            </div>
        </>
    )
}

export default CCVExperience
