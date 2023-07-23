import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UlLink(props) {
    const { page, isSelected } = props
    const classN = isSelected ? 'selected' : 'default-link'
    let dest = page
    if (page === 'Create CV') {
        dest = 'CreateCV/Personal-Details'
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
