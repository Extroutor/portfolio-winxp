import React, {useState} from 'react'
import Book from "../img/icon/Book";
import Lang from "../img/icon/Lang";
import Shortcut from "./Shortcut";
import Folder from "./Folder";
import Modal from "./Modal/Modal";

const Desctop = () => {
    const [isOpenModal, setIsModal] = useState(false)

    const onFolderOpen = () => setIsModal(true)
    const onFolderClose = () => setIsModal(false)

    return (
        <div className='desctop'>
            <Shortcut icon={<Book/>} label='Hello, World'/>
            <Folder label='ctrlX' onClickHandler={onFolderOpen}/>
            <Modal isOpenModal={isOpenModal} onCloseModalHandler={onFolderClose}/>
        </div>
    )
}

export default Desctop