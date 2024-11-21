import React from 'react'
import './leftnav.css'

function LeftNav({ items }){
    return (
        <div className='left-nav'>
            {items.map((item, index) => (
                <li
                    key={index}
                    className='pushable'
                    data-modal={item.modal}
                    onClick={() => console.log(`opened ${item.text}`)}
                >
                    {item.text}
                </li>
            ))}
        </div>
    )
}

export default LeftNav