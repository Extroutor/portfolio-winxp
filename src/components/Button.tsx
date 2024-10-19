import React from 'react'

const Button = ({icon, styleProps, onClickHandler}: {icon: any, styleProps?: any, onClickHandler?: any}) => {
    return (
        <div className='button' style={styleProps} onClick={onClickHandler}>
            {icon}
        </div>
    )
}

export default Button