import React from 'react';
import Shortcut from "../Shortcut";
import NoteBook from "../../img/icon/NoteBook";
import Folder from "../Folder";

const Content = () => {
    return (
        <div className='modal_content'>
            <Shortcut icon={<NoteBook/>} label='project ctrlX'/>
            <Folder label='materials research'/>
            <Folder label='materials vis. concept'/>
            <Folder label='materials research'/>
            <Folder label='materials website'/>
            <Folder label='materials docs, SMM'/>
        </div>
    );
};

export default Content;