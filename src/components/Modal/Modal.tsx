import React from 'react'
import TitleBar from "./TitleBar"
import Menu from "./Menu"
import Divider from "./Divider"
import Address from "./Address"
import Content from "./Content"
import Footer from "./Footer"
import {useSelector} from "react-redux";

const Modal = () => {
    const mainModal = useSelector((state: any) => state.ui.mainModal)
    return (
        <>
            {mainModal &&
                <div className='modal'>
                    <TitleBar/>
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