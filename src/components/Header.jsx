import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../styles/components'

function Header(props) {
    const { selected } = props
    return (
        <header>
            <div>
                <h1>
                    Resumio
                </h1>
            </div>
            <div>
                <li>
                    <ul className={selected === '0' ? 'selected' : 'not-selected'}>
                        <Link to="../pages/Home.jsx">Home</Link>
                    </ul>
                    <ul className={selected === '1' ? 'selected' : 'not-selected'}>
                        <Link to="../pages/Templates.jsx">Templates</Link>
                    </ul>
                    <ul className={selected === '2' ? 'selected' : 'not-selected'}>
                        <Link to="../pages/CreateCV.jsx">Create CV</Link>
                    </ul>
                </li>
            </div>
        </header>
    )
}

Header.propTypes = {
    selected: PropTypes.string,
}

Header.defaultProps = {
    selected: '0',
}

export default Header
