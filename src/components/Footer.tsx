import React from 'react'
import Pusk from "../img/icon/Pusk";
import Start from "../img/icon/Start";
import Lang from "../img/icon/Lang";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='start'>
                <Pusk/>
                <Start/>
            </div>
            <div className='footer_time'>
                <Lang/>
                <div className='footer_time_text'>perfect : timing</div>
            </div>
        </div>
    )
}

export default Footer