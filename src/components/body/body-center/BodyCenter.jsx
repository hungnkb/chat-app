import React from 'react'
import NavbarCenter from './Navbar-Center'
import ChatBox from './ChatBox'
import './BodyCenter.style.css';

function BodyCenter() {
  return (
    <>
    <NavbarCenter/>
    <div id='body-center' style={{backgroundColor: '#F3F6F3'}}>
      <ChatBox/>
    </div>
    </>
  )
}

export default BodyCenter