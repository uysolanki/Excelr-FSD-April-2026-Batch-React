import React, { useState } from 'react'
import './RegisterUser.css'
import userValidationRules from '../validations/UserValidation.js'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const LoginUser = () => {
    const navigate = useNavigate()
    const eye='/myimages/eye.png'
    const hide_eye='/myimages/hide_eye.png'
    const u1={
        'username':"",
        'password':""
    }
   
    const [flag,setFlag]=useState(true)

    function toggleFlag()
    {
        setFlag(!flag)
    }


    async function loginUser() 
    {
        try {
            await axios.post("http://localhost:8087/login",values)
           .then(result=>{
            console.log(result)
            if(result.data==="success")
            {
                alert('login successfull')
                navigate("/")
            }
            else if(result.data==="no user")
            {
                alert(`User with userame ${values.username} does not exist`)
                navigate("/login")
            }
            else
            {
                alert('Incorrect Password')
                navigate("/login")
            }
           })
        }
        catch (error) {
            console.log(error)
        }
    }

     const{
            errors,
            values,
            touched,
            handleBlur,
            handleSubmit,
            handleChange
        } = useFormik({
            initialValues:u1,
            validationSchema:userValidationRules,
            onSubmit:function()
            {
                loginUser()
            },
        }
        )
  return (
    <>
    <form onSubmit={handleSubmit}> 
            <div>
                <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                />
               {errors.username && touched.username && (<p className='text-danger'>{errors.username}</p>)}
            </div>

            <div>
                <input
                type={flag?"text":"password"}
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                />
               {errors.password && touched.password && (<p className='text-danger'>{errors.password}</p>)}
               {
                flag?
                <img className='show-hide' src={eye} onClick={toggleFlag}/> : 
                <img className='show-hide'src={hide_eye} onClick={toggleFlag}/>
               }
            </div>

            <div>
                <button type="submit"> Login </button>
            </div>

    </form>
    </>
  )
}

export default LoginUser