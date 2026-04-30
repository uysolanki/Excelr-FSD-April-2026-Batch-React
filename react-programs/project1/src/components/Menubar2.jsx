import React from 'react'
import menus from '../data/items.js'
import './Menubar.css'
const Menubar2 = () => {
 // const menus=['File','Edit','View','Selection']
  return (
    <div>
        <ol className='menubar'>
          {menus.map(
            (item,index)=><li key={index}>{item}</li>
          )}
        </ol>
    </div>
  )
}

export default Menubar2