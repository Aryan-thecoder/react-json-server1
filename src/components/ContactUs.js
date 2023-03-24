import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

function ContactUs() {
  let [err,setErr] = useState("")
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (userObj) => {
    try{
      console.log(userObj);
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
      <div className='registerContainer' style={{width:"700px",boxShadow:"10px 10px 25px black"}}>
      <br/>
      <br/>
      <h1 className='text-dark'>Contact Us</h1>
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
            <input type="text" {...register('desc',{required:true})} id='desc' placeholder='Description' className='form-control border-dark' style={{boxShadow:"1px 1px 2px black"}}/>
            {errors.desc?.type==='required' && <p className="text-danger">*Description required</p>}
          </div>
          <br/>
          <center>
          <button type='submit' className='btn mt-3 mb-2 btn-dark' onClick={handleSubmit(onSubmit)}>Submit</button>
          </center>
      </form>
      <br/>
      <br/>
      </div>
      </center>
    </div>
  )
}

export default ContactUs