import React from 'react'
import FullFolder from "../../img/icon/FullFolder"
import Button from "../Button";
import RollUp from "../../img/icon/RollUp";
import Close from "../../img/icon/Close";

const TitleBar = () => {
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
                <Button icon={<RollUp/>}/>
                <Button icon={<FullFolder/>}/>
                <Button icon={<Close/>}/>
            </div>
        </div>
    )
}

export default TitleBar