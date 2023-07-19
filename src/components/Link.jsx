import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../styles/components.css'

function UlLink(props) {
    const { page, isSelected } = props
    const classN = isSelected ? 'selected' : 'not-selected'
    let dest = page
    if (page === 'Create CV') {
        dest = 'CreateCV'
    }

    return (
        <li className={classN}>
            <Link to={`/${dest}`}>{page}</Link>
        </li>
    )
}

UlLink.propTypes = {
    page: PropTypes.string,
    isSelected: PropTypes.bool
}

UlLink.defaultProps = {
    page: 'Home',
    isSelected: false
}

export default UlLink
