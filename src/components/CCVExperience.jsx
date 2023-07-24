import React from 'react'
import Progress from '../components/Progress.jsx'

function CCVExperience() {
    return (
        <>
            <Progress progress={'1'} />
            <h1>Experience & Education</h1>
            <div className="form-personal">
                <form>
                    <fieldset>
                        <legend><span className="number">1</span>Work Experience</legend>
                        <label htmlFor="companyName">Company Name</label>
                        <input id='companyName' type="text" name="cname" placeholder="Company" />
                        <label htmlFor="jobTitle">Job Title</label>
                        <input id='jobTitle' type="text" name="jtitle" placeholder="Software Engineer" />
                        <label htmlFor="sDate">Start Date</label>
                        <input id='sDate' type="date" name="startDate" />
                        <label htmlFor="eDate">End Date</label>
                        <input id='eDate' type="date" name="endDate" />
                        <label htmlFor="wcity">City</label>
                        <input id='wcity' type="text" name="wcity" placeholder="Cairo" />
                        <label htmlFor="wcountry">Country</label>
                        <input id='wcountry' type="text" name="wcountry" placeholder="Egypt" />
                        <label htmlFor="role">Description</label>
                        <textarea id='role' placeholder='What did you do?'></textarea>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default CCVExperience
