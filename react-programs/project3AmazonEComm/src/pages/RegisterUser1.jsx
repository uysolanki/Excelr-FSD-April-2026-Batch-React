import React, { useState } from 'react'
import './RegisterUser.css'
import userValidationRules from '../validations/UserValidation.js'
import { useFormik } from 'formik';

const RegisterUser1 = () => {

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


    async function saveUser() 
    {
        try
           {
                const response=await fetch('http://localhost:8087/registerUser',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(values)
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
                saveUser()
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
                <button type="submit"> Add User </button>
            </div>

    </form>
    </>
  )
}

export default RegisterUser1