/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'

function Section(props) {
    const { type , data } = props
    let content = ''
    switch (type) {
        case 'work': {
            let name = data.name
            let start = data.start
            let end = data.end
            content = (
                <div className='section'>
                    <p><strong>{name}</strong></p>
                    <p>{end === '' ? start : `${start} - ${end}`}</p>
                </div>
            )
            break
        }
        case 'education': {
            let name = data.name
            let start = data.start
            let end = data.end
            content = (
                <div className='section'>
                    <p><strong>{name}</strong></p>
                    <p>{end === '' ? start : `${start} - ${end}`}</p>
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
                <div className='section'>
                    {certificates.length > 0 && <p><strong>Certificates:</strong> {certificates.join(', ')}</p>}
                    {skills.length > 0 && <p><strong>Skills:</strong> {skills.join(', ')}</p>}
                    {courses.length > 0 && <p><strong>Courses:</strong> {courses.join(', ')}</p>}
                    {languages.length > 0 && <p><strong>Languages:</strong> {languages.join(', ')}</p>}
                    {interests.length > 0 && <p><strong>Interests:</strong> {interests.join(', ')}</p>}
                    {references.length > 0 && <p><strong>References:</strong> {references.join(', ')}</p>}
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
    data: PropTypes.object
}

Section.defaultProps = {
    type: '',
    data: {}
}

export default Section
