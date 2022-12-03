import React from 'react'
import './Menuitem.css';

const Menuitem = ({title}) => {
  return (
    <div className='menuitem'>
            <h4> {title} </h4>
    </div>
  )
}

export default Menuitem