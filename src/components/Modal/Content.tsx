import React from 'react';
import Shortcut from "../Shortcut";
import Folder from "../Folder";

const Content = () => {
    return (
        <div className='modal_content'>
            <Shortcut icon={require('./../../img/icon/notebook.png')} label='project ctrlX'/>
            <Folder label='materials research'/>
            <Folder label='materials vis. concept'/>
            <Folder label='materials research'/>
            <Folder label='materials website'/>
            <Folder label='materials docs, SMM'/>
        </div>
    );
};

export default Content;