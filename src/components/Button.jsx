import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const { name, classN, onClick } = props
    return (
        <button className={classN} onClick={onClick}>
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
