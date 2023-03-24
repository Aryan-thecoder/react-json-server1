import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'

function Register() {
  let navigate = useNavigate()
  let [err,setErr] = useState("")
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goToUserList=()=>{
    navigate('/users-list')
  }

  const onSubmit = async(userObj) => {
      try{
        console.log(userObj);
        let res = await axios.post('http://localhost:4000/users',userObj)
        console.log(res)
        if(res.status===201)
        {
          setErr("")
          navigate('/users-list')
        }
    }catch(err){
      setErr(err.message)
    }
  }


  return (
    <div>
      <br/>
      <br/>
      <br/>
      <center>
      <div className='registerContainer' style={{width:"400px",boxShadow:"10px 10px 25px black"}}>
      <br/>
      <br/>
      <h1 className='text-dark'>Register</h1>
      <p className='text-danger fs-1'>{err}</p>
      <form className='w-75 text-start text-white'>
          <div className='mt-5'>
            {/* <label htmlFor="name">Name</label> */}
            <input type="text" {...register('name',{required:true})} id='name' placeholder='Name' className='form-control border-dark' style={{boxShadow:"1px 1px 2px black"}}/>
            {errors.name?.type==='required' && <p className="text-danger">*Name required</p>}
          </div>
          <div className='mt-5'>
            {/* <label htmlFor="email">Email</label> */}
            <input type="text" {...register('email',{required:true})} id='email' placeholder='Email' className='form-control border-dark' style={{boxShadow:"1px 1px 2px black"}}/>
            {errors.email?.type==='required' && <p className="text-danger">*Email required</p>}
          </div>
          <div className='mt-5'>
            {/* <label htmlFor="dob">Date of Birth</label> */}
            <input type="date" {...register('dob',{required:true})} id='dob' placeholder='Date of Birth' className='form-control border-dark' style={{boxShadow:"1px 1px 2px black"}}/>
            {errors.dob?.type==='required' && <p className="text-danger">*Date of Birth required</p>}
          </div>
          <div className='mt-5'>
            {/* <label htmlFor="image">Profile Image URL</label> */}
            <input type="text" {...register('image',{required:true})} id='image' placeholder='Profile Image URL' className='form-control border-dark' style={{boxShadow:"1px 1px 2px black"}}/>
            {errors.image?.type==='required' && <p className="text-danger">*Profile Photo required</p>}
          </div>
          <br/>
          <button type='submit' className='btn mt-3 mb-2 btn-dark' onClick={handleSubmit(onSubmit)}>Register</button>
          <button type='submit' className='btn btn-white mt-3 mb-2 float-end border-dark' onClick={goToUserList}>Users List</button>
      </form>
      <br/>
      <br/>
      </div>
      </center>
        <br/>
        <br/>
    </div>
  )
}

export default Register
