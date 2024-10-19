import React from 'react'
import FolderIcon from "../img/icon/FolderIcon"

const Folder = ({label}: {label: string}) => {
    return (
        <div className='shortcut'>
            <FolderIcon/>
            <div className='shortcut_label'>{label}</div>
        </div>
    )
}

export default Folder