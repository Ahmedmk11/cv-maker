import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components'

function Button(props) {
    const { children, className, onClick } = props
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    children: 'Click me!',
    className: 'default-btn',
    onClick: () => {
        console.log('I am clicked!')
    },
}

export default Button
