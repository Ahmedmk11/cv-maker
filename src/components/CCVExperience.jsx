import React from 'react'
import { useState , useEffect , useCallback} from 'react'
import Progress from '../components/Progress.jsx'
import Button from '../components/Button.jsx'
import { useForm } from 'react-hook-form';

function CCVExperience() {
    const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm();
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

    return <>
        <Progress progress={'1'} />
        <h1>Experience & Education</h1>
        <div className="form">
            <form onSubmit={handleSubmit1(saveWork)}>
                <legend className='first-legend'>
                    <span className="number">1</span>Work Experience
                </legend>
                <fieldset id='workField' className="field" hidden>
                    <hr />
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        id="companyName"
                        type="text"
                        name='cname'
                        {...register1('cname', { required: true })}
                        style={{ marginBottom: errors1.cname ? '0' : '28px' }}
                        placeholder="Company"
                        value={jobData.cname}
                        onChange={handleChange} />
                    {errors1 && errors1.cname && <p className="error-message">Company name is required</p>}
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        id="jobTitle"
                        type="text"
                        name='jtitle'
                        {...register1('jtitle', { required: true })}
                        style={{ marginBottom: errors1.jtitle ? '0' : '28px' }}
                        placeholder="Software Engineer"
                        value={jobData.jtitle}
                        onChange={handleChange} />
                    {errors1 && errors1.jtitle && <p className="error-message">Job title is required</p>}
                    <label htmlFor="sDate">Start Date</label>
                    <input
                        id="sDate"
                        type="date"
                        name='startDate'
                        {...register1('startDate', { required: true })}
                        style={{ marginBottom: errors1.startDate ? '0' : '28px' }}
                        value={jobData.startDate}
                        onChange={handleChange} />
                    {errors1 && errors1.startDate && <p className="error-message">Start date is required</p>}
                    <label htmlFor="eDate">End Date</label>
                    <input
                        id="eDate"
                        type="date"
                        name='endDate'
                        value={jobData.endDate}
                        onChange={handleChange} />
                    <label htmlFor="wcity">City</label>
                    <input
                        id="wcity"
                        type="text"
                        name='wcity'
                        {...register1('wcity', { required: true })}
                        style={{ marginBottom: errors1.wcity ? '0' : '28px' }}
                        placeholder="Cairo"
                        value={jobData.wcity}
                        onChange={handleChange} />
                    {errors1 && errors1.wcity && <p className="error-message">City is required</p>}
                    <label htmlFor="wcountry">Country</label>
                    <input
                        id="wcountry"
                        type="text"
                        name='wcountry'
                        {...register1('wcountry', { required: true })}
                        style={{ marginBottom: errors1.wcountry ? '0' : '28px' }}
                        placeholder="Egypt"
                        value={jobData.wcountry}
                        onChange={handleChange} />
                    {errors1 && errors1.wcountry && <p className="error-message">Country is required</p>}
                    <label htmlFor="role">Description</label>
                    <textarea
                        id="role"
                        placeholder="What did you do?"
                        name='desc'
                        value={jobData.desc}
                        onChange={handleChange}>
                    </textarea>
                </fieldset>
                {button1}
            </form>

            <form onSubmit={handleSubmit2(saveSchool)}>
                <legend>
                    <span className="number">2</span>Education
                </legend>
                <fieldset id='schoolField' className="field" hidden>
                    <hr />
                    <label htmlFor="uni">University Name</label>
                    <input
                        id="uni"
                        type="text"
                        name='uni'
                        {...register2('uni', { required: true })}
                        style={{ marginBottom: errors2.uni ? '0' : '28px' }}
                        placeholder="German University in Cairo"
                        value={schoolData.uni}
                        onChange={handleSchoolChange} />
                    {errors2 && errors2.uni && <p className="error-message">School name is required</p>}
                    <label htmlFor="degree">Degree</label>
                    <input
                        id="degree"
                        type="text"
                        name='degree'
                        {...register2('degree', { required: true })}
                        style={{ marginBottom: errors2.degree ? '0' : '28px' }}
                        placeholder="Bachelor of Science"
                        value={schoolData.degree}
                        onChange={handleSchoolChange} />
                    {errors2 && errors2.degree && <p className="error-message">Degree is required</p>}
                    <label htmlFor="major">Major</label>
                    <input
                        id="major"
                        type="text"
                        name='major'
                        {...register2('major', { required: true })}
                        style={{ marginBottom: errors2.major ? '0' : '28px' }}
                        placeholder='Computer Science'
                        value={schoolData.major}
                        onChange={handleSchoolChange} />
                    {errors2 && errors2.major && <p className="error-message">Major is required</p>}
                    <label htmlFor="sDateSchool">Start Date</label>
                    <input
                        id="sDateSchool"
                        type="date"
                        name='startDateSchool'
                        {...register2('startDateSchool', { required: true })}
                        style={{ marginBottom: errors2.startDateSchool ? '0' : '28px' }}
                        value={schoolData.startDate}
                        onChange={handleSchoolChange} />
                    {errors2 && errors2.startDateSchool && <p className="error-message">Start date is required</p>}
                    <label htmlFor="eDateSchool">End Date</label>
                    <input
                        id="eDateSchool"
                        type="date"
                        name='endDateSchool'
                        value={schoolData.endDateSchool}
                        onChange={handleSchoolChange} />
                    <label htmlFor="scity">City</label>
                    <input
                        id="scity"
                        type="text"
                        name='scity'
                        {...register2('scity', { required: true })}
                        style={{ marginBottom: errors2.scity ? '0' : '28px' }}
                        placeholder="Cairo"
                        value={schoolData.scity}
                        onChange={handleSchoolChange} />
                    {errors2 && errors2.scity && <p className="error-message">City is required</p>}
                    <label htmlFor="scountry">Country</label>
                    <input
                        id="scountry"
                        type="text"
                        name='scountry'
                        {...register2('scountry', { required: true })}
                        style={{ marginBottom: errors2.scountry ? '0' : '28px' }}
                        placeholder="Egypt"
                        value={schoolData.scountry}
                        onChange={handleSchoolChange} />
                    {errors2 && errors2.scountry && <p className="error-message">Country is required</p>}
                    <label htmlFor="roleSchool">Description</label>
                    <textarea
                        id="roleSchool"
                        name='descSchool'
                        placeholder="Anymore relevant information?"
                        value={schoolData.descSchool}
                        onChange={handleSchoolChange}>
                    </textarea>
                </fieldset>
                {button2}
            </form>
        </div>
    </>;
}

export default CCVExperience
