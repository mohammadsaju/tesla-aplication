import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
            <div id='menu' className='fixed top-0 right-0 bottom-0 bg-white w-72 pt-20 px-8 pb-16 overflow-y-scroll flex flex-col gap-9 z-10 transition'>
                <MenuItem title='existing inventory' />
                <MenuItem title='used inventory' />
                <MenuItem title='trade-in' />
                <MenuItem title='cybertruck' />
                <MenuItem title='roadster' />
                <MenuItem title='semi' />
                <MenuItem title='charging' />
                <MenuItem title='powerwall' />
                <MenuItem title='commercial solar' />
                <MenuItem title='test drive' />
                <MenuItem title='find us' />
                <MenuItem title='support' />
                <MenuItem title='united states' />
            </div>
    )
}

export default Menu;
