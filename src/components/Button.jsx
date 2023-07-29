import React from 'react'
import PropTypes from 'prop-types'
import plusIcn from '../assets/images/icons/plus.svg'

function Button(props) {
    const { name, classN, click, isSubmit } = props
    return (
        <button className={classN} onClick={click} type={isSubmit ? 'submit' : undefined}>
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
    click: PropTypes.func,
    isSubmit: PropTypes.bool,
}

Button.defaultProps = {
    name: 'Click me!',
    classN: 'default-btn',
    click: () => {
        console.log('I am clicked!')
    },
    isSubmit: false,
}

export default Button
