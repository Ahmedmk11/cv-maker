/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import editIcn from '../assets/images/icons/edit.svg'
import deleteIcn from '../assets/images/icons/delete.svg'

function Section(props) {
    const { type , data, deleteSection, editSection, id, key } = props

    const dateConverter = (rawDate) => {
        let dateParts = rawDate.split("-")
        let year = dateParts[0]
        let month = parseInt(dateParts[1])
        let monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        return monthNames[month - 1] + " " + year
    }

    let content = ''
    switch (type) {
        case 'work': {
            let name = data.name
            let start = dateConverter(data.start)
            let end = (data.end === '') ? 'undefined' : dateConverter(data.end)
            content = (
                <div className='section' id={id} key={key}>
                    <div className="section-top">
                        <p><strong>{name}</strong></p>
                        <p>{end == 'undefined' ? start : `${start} - ${end}`}</p>
                    </div>
                    <div className='section-icons'>
                        <img src={editIcn} alt="edit icon" onClick={editSection} />
                        <img src={deleteIcn} alt="delete icon" onClick={deleteSection} />
                    </div>
                </div>
            )
            break
        }
        case 'education': {
            let name = data.name
            let start = dateConverter(data.start)
            let end = (data.end === '') ? 'undefined' : dateConverter(data.end)
            content = (
                <div className='section' id={id} key={key}>
                    <div className="section-top">
                        <p><strong>{name}</strong></p>
                        <p>{end === 'undefined' ? start : `${start} - ${end}`}</p>
                    </div>
                    <div className='section-icons'>
                        <img src={editIcn} alt="edit icon" onClick={editSection} />
                        <img src={deleteIcn} alt="delete icon" onClick={deleteSection} />
                    </div>
                </div>
            )
            break
        }        
        case 'skills': {
            let certificates = data.certificates
            let skills = data.skills
            let courses = data.courses
            let interests = data.interests
            let references = data.references
            let languages = data.languages
            content = (
                <div className='section' id={id} key={key}>
                    <div className="section-top">
                        {certificates.length > 0 && <p><strong>Certificates:</strong> {certificates.join(', ')}</p>}
                        {skills.length > 0 && <p><strong>Skills:</strong> {skills.join(', ')}</p>}
                        {courses.length > 0 && <p><strong>Courses:</strong> {courses.join(', ')}</p>}
                        {languages.length > 0 && <p><strong>Languages:</strong> {languages.join(', ')}</p>}
                        {interests.length > 0 && <p><strong>Interests:</strong> {interests.join(', ')}</p>}
                        {references.length > 0 && <p><strong>References:</strong> {references.join(', ')}</p>}
                    </div>
                    <div className='section-icons'>
                        <img src={editIcn} alt="edit icon" onClick={editSection}/>
                        <img src={deleteIcn} alt="delete icon" onClick={deleteSection} />
                    </div>
                </div>
            )
            break
        }
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}

Section.propTypes = {
    type: PropTypes.string,
    data: PropTypes.object,
    deleteSection: PropTypes.func.isRequired,
    editSection: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
}

Section.defaultProps = {
    type: '',
    data: {}
}

export default Section
