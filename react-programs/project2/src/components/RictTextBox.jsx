import React from 'react'
import './RictTextBox.css'

const RictTextBox = () => {
  return (
    <div className="parent-container">
        <div className='left-section'>
            <textarea rows="20" cols="40"></textarea>
        </div>
        <div className='right-section'>
            <h3>Preview</h3>
        </div>
    </div>
  )
}

export default RictTextBox