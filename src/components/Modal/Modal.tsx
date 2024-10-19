import React from 'react'
import TitleBar from "./TitleBar"
import Menu from "./Menu"
import Divider from "./Divider"
import Address from "./Address"
import Content from "./Content"
import Footer from "./Footer"

const Modal = ({isOpenModal, onCloseModalHandler}: { isOpenModal: boolean, onCloseModalHandler: any }) => {
    return (
        <>
            {isOpenModal &&
                <div className='modal'>
                    <TitleBar onCloseModalHandler={onCloseModalHandler}/>
                    <Menu/>
                    <Divider/>
                    <Address/>
                    <Content/>
                    <Footer/>
                </div>
            }
        </>

    )
}

export default Modal