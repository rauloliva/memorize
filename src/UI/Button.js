import React from 'react'
import Icon from './Icon'

const Button = ({ text, icon }) => {
    icon = icon ? <Icon iconName={ icon } /> : null
    
    return (
        <button className='button'>
            { text }
            { icon }
        </button>
    )
}
    

export default Button