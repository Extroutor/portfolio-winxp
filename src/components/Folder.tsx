import React from 'react'
import FolderIcon from "../img/icon/FolderIcon"

const Folder = ({label, onClickHandler}: {label: string, onClickHandler?: () => void}) => {
    return (
        <div className='shortcut' onDoubleClick={onClickHandler}>
            <FolderIcon/>
            <div className='shortcut_label'>{label}</div>
        </div>
    )
}

export default Folder