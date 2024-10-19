import React from 'react'
import Book from "../img/icon/Book";
import Lang from "../img/icon/Lang";
import Shortcut from "./Shortcut";

const Desctop = () => {
    return (
        <div className='desctop'>
            <Shortcut icon={<Book/>} label='Hello, World'/>
            <Shortcut icon={<Book/>} label='Hello, World'/>
            <Shortcut icon={<Book/>} label='Hello, World'/>
            <Shortcut icon={<Book/>} label='Hello, World'/>
        </div>
    )
}

export default Desctop