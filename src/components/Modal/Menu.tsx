import React from 'react';

const items = ['File', 'Edit', 'View', 'Go', 'Favorites', 'Help']
const Menu = () => {
    return (
        <div className='modal_menu'>
            {items.map((item, index) => (
                <div key={index} className='modal_menu_item'>{item}</div>
            ))}
        </div>
    );
};

export default Menu;