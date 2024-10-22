import React from 'react'

const Shortcut = ({icon, label}: {icon: any, label: string}) => {
    return (
        <div className='shortcut'>
            <img src={icon} alt={label}/>
            <div className='shortcut_label'>{label}</div>
        </div>
    )
}

export default Shortcut