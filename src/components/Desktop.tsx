import React from 'react'
import Shortcut from "./Shortcut"
import Folder from "./Folder"
import Modal from "./Modal/Modal"

const Desktop = () => {
    return (
        <div className='desctop'>
            <Shortcut icon={require('./../img/icon/book.png')} label='Hello, World'/>
            <Folder label='ctrlX'/>
            <Modal/>
        </div>
    )
}

export default Desktop