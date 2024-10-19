import React from 'react';

const Divider = () => {
    return (
        <>
            <div style={{
                backgroundColor: 'rgba(128, 128, 128, 1)',
                width: 'calc(100% - 4px)',
                margin: '0 auto',
                height: '1px',
            }}></div>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: 'calc(100% - 4px)',
                margin: '0 auto',
                height: '1px',
            }}></div>
        </>
    );
};

export default Divider;