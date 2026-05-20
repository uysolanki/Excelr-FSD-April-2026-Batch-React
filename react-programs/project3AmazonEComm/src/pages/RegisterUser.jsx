import React, { useState } from 'react'
import './RegisterUser.css'
const RegisterUser = () => {

    const eye='/myimages/eye.png'
    const hide_eye='/myimages/hide_eye.png'
    const u1={
        'username':"",
        'password':""
    }
    const [user,setUser]=useState(u1)
    const [flag,setFlag]=useState(true)

    function toggleFlag()
    {
        setFlag(!flag)
    }
    function handleSubmit(event)
    {
        event.preventDefault()
        saveUser() 
    }

    function handleChange(event)
    {
        const {name,value}=event.target
        setUser(prev=>({...prev,[name]:value}))
    }
    console.log(user)
    async function saveUser() 
    {
        try
           {
                const response=await fetch('http://localhost:8087/registerUser',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(user)
            })

            if(response.ok)
                alert ('User added successfully')
            else
                alert ('Error in adding User')
        }
        catch(error)
        {
           console.log(error)
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit}> 
            <div>
                <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={user.username}
                />
            </div>

            <div>
                <input
                type={flag?"text":"password"}
                id="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                />
               {
                flag?
                <img className='show-hide' src={eye} onClick={toggleFlag}/> : 
                <img className='show-hide'src={hide_eye} onClick={toggleFlag}/>
               }
            </div>

            <div>
                <button type="submit"> Add User </button>
            </div>

    </form>
    </>
  )
}

export default RegisterUser