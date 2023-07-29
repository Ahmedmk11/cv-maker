import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UlLink(props) {
    const { page, isSelected } = props
    const classN = isSelected ? 'selected' : 'default-link'
    let dest = page.toLowerCase()
    if (page === 'Create CV') {
        dest = 'create/personal-details'
    }
    return (
        <li className={classN}>
            <Link to={`/${dest}`}>{page}</Link>
        </li>
    )
}

UlLink.propTypes = {
    page: PropTypes.string,
    isSelected: PropTypes.bool,
}

UlLink.defaultProps = {
    page: 'Home',
    isSelected: false,
}

export default UlLink
