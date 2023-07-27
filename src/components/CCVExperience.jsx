import React from 'react'
import { useState , useEffect , useCallback} from 'react'
import Progress from '../components/Progress.jsx'
import Button from '../components/Button.jsx'
import { useForm } from 'react-hook-form';

function CCVExperience() {
    const { register, handleSubmit, errors } = useForm();
    const [flagW, setFlagW] = useState(0)
    const [flagS, setFlagS] = useState(0)
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
        uni: '',
        degree: '',
        major: '',
        startDateSchool: '',
        endDateSchool: '',
        scity: '',
        scountry: '',
        descSchool: '',
    })

    const saveWork = (event) => {
        event.preventDefault()
        setFlagW(0)
        setJobs([...jobs, jobData])
    }
    
    const saveSchool = (event) => {
        event.preventDefault()
        setFlagS(0)
        setSchools([...schools, schoolData])
    }

    const addWork = useCallback((event) => {
        event.preventDefault()
        setFlagW(1)
        setButton1(<Button id="done-button-1" classN="plus" name='Done' type='submit' />)
    }, [])
    
    
    const addSchool = useCallback((event) => {
        event.preventDefault()
        setFlagS(1)
        setButton2(<Button id="done-button-2" classN="plus" name='Done' type='submit' />)
    }, [])

    function handleChange(event) {
        const { name, value } = event.target;
        setJobData({ ...jobData, [name]: value });
    }

    function handleSchoolChange(event) {
        const { name, value } = event.target;
        setSchoolData({ ...schoolData, [name]: value });
    }
    
    const [button1, setButton1] = useState(<Button classN="plus" name='Add Work Experience' click={addWork} />)    
    const [button2, setButton2] = useState(<Button classN="plus" name='Add School' click={addSchool} />)    

    useEffect(() => {
        console.log(jobs)
        console.log(schools)
    }, [jobs, schools])

    useEffect(() => {
        if (flagW === 1) {
            document.getElementById('workField').hidden = false
        } else if (flagW === 0) {
            document.getElementById('workField').hidden = true
            setButton1(<Button classN="plus" name='Add Work Experience' click={addWork} />)
        }
    }, [flagW, addWork])

    useEffect(() => {
        if (flagS === 1) {
            document.getElementById('schoolField').hidden = false
        } else if (flagS === 0) {
            document.getElementById('schoolField').hidden = true
            setButton2(<Button classN="plus" name='Add School' click={addSchool} />)
        }
    }, [flagS, addSchool])

    return (
        <>
            <Progress progress={'1'} />
            <h1>Experience & Education</h1>
            <div className="form">
                <form onSubmit={handleSubmit(saveWork)}>
                    <legend className='first-legend'>
                        <span className="number">1</span>Work Experience
                    </legend>
                    <fieldset id='workField' className="field" hidden>
                        <hr />
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            id="companyName"
                            type="text"
                            name="cname"
                            placeholder="Company" 
                            value={jobData.cname}
                            onChange={handleChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.cname && <p>Company name is required</p>}
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            id="jobTitle"
                            type="text"
                            name="jtitle"
                            placeholder="Software Engineer" 
                            value={jobData.jtitle}
                            onChange={handleChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.jtitle && <p>Company name is required</p>}
                        <label htmlFor="sDate">Start Date</label>
                        <input
                            id="sDate"
                            type="date"
                            name="startDate" 
                            value={jobData.startDate}
                            onChange={handleChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.startDate && <p>Company name is required</p>}
                        <label htmlFor="eDate">End Date</label>
                        <input
                            id="eDate" 
                            type="date" 
                            name="endDate" 
                            value={jobData.endDate}
                            onChange={handleChange} 
                            ref={register({ required: true })}
                            
                        />
                        {errors.endDate && <p>Company name is required</p>}
                        <label htmlFor="wcity">City</label>
                        <input
                            id="wcity"
                            type="text"
                            name="wcity"
                            placeholder="Cairo" 
                            value={jobData.wcity}
                            onChange={handleChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.wcity && <p>Company name is required</p>}
                        <label htmlFor="wcountry">Country</label>
                        <input
                            id="wcountry"
                            type="text"
                            name="wcountry"
                            placeholder="Egypt" 
                            value={jobData.wcountry}
                            onChange={handleChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.wcountry && <p>Company name is required</p>}
                        <label htmlFor="role">Description</label>
                        <textarea
                            id="role"
                            placeholder="What did you do?"
                            name='desc' 
                            value={jobData.desc}
                            onChange={handleChange}
                            ref={register({ required: true })}>
                        </textarea>
                        {errors.desc && <p>Company name is required</p>}
                    </fieldset>
                    {button1}  
                </form>

                <form onSubmit={handleSubmit(saveSchool)}>
                    <legend>
                        <span className="number">2</span>Education
                    </legend>
                    <fieldset id='schoolField' className="field" hidden>
                        <hr />
                        <label htmlFor="uni">University Name</label>
                        <input
                            id="uni"
                            type="text"
                            name="uni"
                            placeholder="German University in Cairo" 
                            value={schoolData.uni}
                            onChange={handleSchoolChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.uni && <p>Company name is required</p>}
                        <label htmlFor="degree">Degree</label>
                        <input
                            id="degree"
                            type="text"
                            name="degree"
                            placeholder="Bachelor of Science" 
                            value={schoolData.degree}
                            onChange={handleSchoolChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.degree && <p>Company name is required</p>}
                        <label htmlFor="major">Major</label>
                        <input 
                            id="major"
                            type="text"
                            name="major" 
                            placeholder='Computer Science'
                            value={schoolData.major}
                            onChange={handleSchoolChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.major && <p>Company name is required</p>}
                        <label htmlFor="sDateSchool">Start Date</label>
                        <input 
                            id="sDateSchool"
                            type="date"
                            name="startDateSchool"
                            value={schoolData.startDate}
                            onChange={handleSchoolChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.startDateSchool && <p>Company name is required</p>}
                        <label htmlFor="eDateSchool">End Date</label>
                        <input 
                            id="eDateSchool" 
                            type="date" 
                            name="endDateSchool"
                            value={schoolData.endDateSchool}
                            onChange={handleSchoolChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.endDateSchool && <p>Company name is required</p>}
                        <label htmlFor="scity">City</label>
                        <input
                            id="scity"
                            type="text"
                            name="scity"
                            placeholder="Cairo" 
                            value={schoolData.scity}
                            onChange={handleSchoolChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.scity && <p>Company name is required</p>}
                        <label htmlFor="scountry">Country</label>
                        <input
                            id="scountry"
                            type="text"
                            name="scountry"
                            placeholder="Egypt" 
                            value={schoolData.scountry}
                            onChange={handleSchoolChange}
                            ref={register({ required: true })}
                            
                        />
                        {errors.scountry && <p>Company name is required</p>}
                        <label htmlFor="roleSchool">Description</label>
                        <textarea
                            id="roleSchool"
                            placeholder="Anymore relevant information?"
                            name='descSchool' 
                            value={schoolData.descSchool}
                            onChange={handleSchoolChange}
                            ref={register({ required: true })}>
                        </textarea>
                        {errors.descSchool && <p>Company name is required</p>}
                    </fieldset>
                    {button2}
                </form>
            </div>
        </>
    )
}

export default CCVExperience
