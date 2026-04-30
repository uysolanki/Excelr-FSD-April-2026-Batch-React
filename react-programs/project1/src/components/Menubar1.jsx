import React from 'react'
import './Menubar.css'
const Menubar1 = () => {
  const menus=['File','Edit','View','Selection']
  return (
    <div>
        <ol className='menubar'>
          {menus.map(
            (item)=><li>{item}</li>
          )}
        </ol>
    </div>
  )
}

export default Menubar1