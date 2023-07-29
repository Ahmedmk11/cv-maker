import React from 'react'
import PropTypes from 'prop-types'
import UlLink from './UlLink.jsx'
import { Link } from 'react-router-dom'

function Header(props) {
    const { isSelected } = props
    const { isSelected1, isSelected2, isSelected3 } = isSelected

    return (
        <header>
            <div>
                <div className="header-items">
                    <h1>
                        <Link className="header" to={`/home`}>
                            Resumio
                        </Link>
                    </h1>
                </div>
                <div className="header-items">
                    <ul>
                        <UlLink page={'Home'} isSelected={isSelected1} />
                        <UlLink page={'Create CV'} isSelected={isSelected2} />
                        <UlLink page={'Templates'} isSelected={isSelected3} />
                    </ul>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    isSelected: PropTypes.object,
}

export default Header
