import React from 'react'
import Book from "../img/icon/Book";
import Lang from "../img/icon/Lang";
import Shortcut from "./Shortcut";
import Folder from "./Folder";
import Modal from "./Modal/Modal";

const Desctop = () => {
    return (
        <div className='desctop'>
            <Shortcut icon={<Book/>} label='Hello, World'/>
            <Folder label='ctrlX'/>
            <Modal/>
        </div>
    )
}

export default Desctop