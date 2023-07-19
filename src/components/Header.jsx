import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components.css'
import UlLink from './Link.jsx';

function Header(props) {
    const { isSelected } = props
    const { isSelected1, isSelected2, isSelected3 } = isSelected

    return (
        <header>
            <div>
                <h1>
                    Resumio
                </h1>
            </div>
            <div>
                <ul>
                    <UlLink page={'Home'} isSelected={isSelected1} />
                    <UlLink page={'Create CV'} isSelected={isSelected2} />
                    <UlLink page={'Templates'} isSelected={isSelected3} />
                </ul>
            </div>
        </header>
    )
}

Header.propTypes = {
    isSelected: PropTypes.object
}

export default Header
