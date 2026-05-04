import React from 'react'
import './LandingPage.css'
import Button2 from './Button2'
import { RiLoginCircleFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import Container from './Container';
const LandingPage = () => {
  return (
    <>
    <Button2 text="login" icon={<RiLoginCircleFill />}/>
    <Button2 text="logout" icon={<IoMdLogOut />}/>

    <Container>
        <button>Click Me</button>
        <span>Register Soon</span>
    </Container>
    </>
  )
}

export default LandingPage