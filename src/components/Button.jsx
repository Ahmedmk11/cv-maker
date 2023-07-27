import React from 'react'
import PropTypes from 'prop-types'
import plusIcn from '../assets/images/icons/plus.svg'

function Button(props) {
    const { name, classN, click } = props
    return (
        <button className={classN} onClick={click}>
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
}

Button.defaultProps = {
    name: 'Click me!',
    classN: 'default-btn',
    click: () => {
        console.log('I am clicked!')
    },
}

export default Button
