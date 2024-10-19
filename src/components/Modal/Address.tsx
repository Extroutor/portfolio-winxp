import React from 'react';
import FolderMini from "../../img/icon/FolderMini";
import Button from "../Button";
import ArrowBottom from "../../img/icon/ArrowBottom";

const Address = () => {
    return (
        <div className='address'>
            <div>Address</div>
            <div className='address_input'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px'
                }}>
                    <FolderMini/>
                    <div>ctrlX</div>
                </div>
                <Button icon={<ArrowBottom/>}/>

            </div>
        </div>
    );
};

export default Address;