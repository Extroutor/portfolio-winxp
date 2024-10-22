import React from 'react'
import FullFolder from "../../img/icon/FullFolder"
import Button from "../Button";
import RollUp from "../../img/icon/RollUp";
import Close from "../../img/icon/Close";
import FullWindow from "../../img/icon/FullWindow";
import {openMainModal} from "../../store/reducer";
import {useDispatch} from "react-redux";

const TitleBar = () => {
    const dispatch = useDispatch()
    const onFolderClose = () => dispatch(openMainModal(false))

    return (
        <div className='modal_titleBar'>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}>
                <FullFolder/>
                <div style={{
                    color: '#fff',
                    fontSize: '12px',
                }}>ctrlX
                </div>
            </div>
            <div style={{
                display: 'flex',
                gap: '2px'
            }}>
                <Button icon={<RollUp/>} styleProps={{ alignItems: 'flex-end', paddingBottom: '3px'}}/>
                <Button icon={<FullWindow/>}/>
                <Button icon={<Close/>} onClickHandler={onFolderClose}/>
            </div>
        </div>
    )
}

export default TitleBar