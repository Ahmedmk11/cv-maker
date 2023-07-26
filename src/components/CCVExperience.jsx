import React from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Progress from '../components/Progress.jsx'
import Button from '../components/Button.jsx'
import Field from '../components/Field.jsx'

function CCVExperience() {
    const [fields, setFields] = useState([])

    const addWork = (event) => {
        event.preventDefault()
        let id = uuidv4()
        setFields([...fields, <Field key={id} type="work" />])
    }

    return (
        <>
            <Progress progress={'1'} />
            <h1>Experience & Education</h1>
            <div className="form">
                <form id="myForm">
                    <legend>
                        <span className="number">1</span>Work Experience
                    </legend>
                    {fields.map((field, index) => (
                        <div key={index}>{field}</div>
                    ))}
                    <Button
                        classN="plus"
                        name={'Add Work Experience'}
                        onClick={addWork}
                    />
                </form>
            </div>
        </>
    )
}

export default CCVExperience
