import React, {ReactElement} from 'react'

const Shortcut = ({icon, label}: {icon: ReactElement, label: string}) => {
    return (
        <div className='shortcut'>
            {icon}
            <div className='shortcut_label'>{label}</div>
        </div>
    )
}

export default Shortcut