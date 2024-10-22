import React from 'react'
import {openMainModal} from "../store/reducer";
import {useDispatch} from "react-redux";

const Folder = ({label}: {label: string}) => {
    const dispatch = useDispatch()
    const onFolderOpen = () => dispatch(openMainModal(true))

    return (
        <div className='shortcut' onDoubleClick={onFolderOpen}>
            <img src={require('./../img/icon/folder.png')} alt={label}/>
            <div className='shortcut_label'>{label}</div>
        </div>
    )
}

export default Folder