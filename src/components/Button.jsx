import React from 'react'
import PropTypes from 'prop-types'
import plusIcn from '../assets/images/icons/plus.svg'

function Button(props) {
    const { name, classN, onClick } = props
    return (
        <button className={classN} onClick={onClick}>
            {classN === 'plus' ? (
                <img id="plus-icn" src={plusIcn} alt="plus icon"></img>
            ) : null}
            {name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    classN: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    name: 'Click me!',
    classN: 'default-btn',
    onClick: () => {
        console.log('I am clicked!')
    },
}

export default Button
