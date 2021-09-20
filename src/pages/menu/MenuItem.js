import React from 'react';

const MenuItem = ({title}) => {
    return (
        <div className='border-b cursor-pointer'>
            <h4 className='pb-5 text-lg font-semibold text-gray-600 ml-2'>{title}</h4>
        </div>
    )
}

export default MenuItem;
