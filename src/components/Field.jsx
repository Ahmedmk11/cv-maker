import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
    const { type } = props

    const chooseType = () => {
        switch (type) {
            case 'work':
                return (
                    <fieldset className="field">
                        <hr />
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            id="companyName"
                            type="text"
                            name="cname"
                            placeholder="Company"
                        />
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            id="jobTitle"
                            type="text"
                            name="jtitle"
                            placeholder="Software Engineer"
                        />
                        <label htmlFor="sDate">Start Date</label>
                        <input id="sDate" type="date" name="startDate" />
                        <label htmlFor="eDate">End Date</label>
                        <input id="eDate" type="date" name="endDate" />
                        <label htmlFor="wcity">City</label>
                        <input
                            id="wcity"
                            type="text"
                            name="wcity"
                            placeholder="Cairo"
                        />
                        <label htmlFor="wcountry">Country</label>
                        <input
                            id="wcountry"
                            type="text"
                            name="wcountry"
                            placeholder="Egypt"
                        />
                        <label htmlFor="role">Description</label>
                        <textarea
                            id="role"
                            placeholder="What did you do?"
                        ></textarea>
                    </fieldset>
                )
            case 'Education':
                return <h2>test</h2>
            default:
                return
        }
    }
    return chooseType()
}

Field.propTypes = {
    type: PropTypes.string,
}

Field.defaultProps = {
    type: 'work',
}

export default Field
