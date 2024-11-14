import React, { useState } from "react";
import "../App.css";
import { registerApi } from "../services/allapi";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';




function Register() {
    const navigate = useNavigate()

    const [userDetails,setuserDetails]=useState({
        email:'',
        password:''
    })

    const handleRegister = async(e)=>{
     e.preventDefault()
     const {email,password} = userDetails
     if( !email || !password){
        toast.info("please fill the form completely")
     }else{
        const result =  await registerApi(userDetails)
        console.log(result);
        if(result.status==200){
            toast.success('Registration successfull !')
            setuserDetails({
            email:'',
            password:''
            })
            navigate('/')
        }else{
            toast.error('something went wrong')
            setuserDetails({
                email:'',
                password:''
                })
        }
     }
      }

      console.log(userDetails);

  return (
    <div>
        <div>
      <div
  id="registerMain_wrapper"
  className="d-flex align-items-center justify-content-center mt-5"
  style={{
    height: "80vh", 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    margin: '0 auto', 
    padding: '20px' 
  }}
>
  <div id="registerSecondary" className="row bg-dark w-75 shadow" style={{ borderRadius: '10px' }}>
    <div className="col-sm-12 col-md-6 bg-secondary">
      <div className="d-flex align-items-center justify-content-center mt-4 flex-column">
        <h3 className="fw-bold text-light">
          ict<span className="text-success">G</span>lobal
        </h3>
      </div>
    
    </div>
    <div className="col-sm-12 col-md-6">
      <div className="d-flex align-items-center justify-content-center mt-4">
        <h3 className="fw-bold text-light">Register Here</h3>
      </div>
      <div  className="d-flex align-items-center justify-content-center mt-4">
        <form  className="form-controls w-75">
          <div className="mb-3">
            <input onChange={(e)=>setuserDetails({...userDetails,email:e.target.value})} value={userDetails.email} type="text" className="form-control" placeholder="email" required />
          </div>
          <div className="mb-3">
            <input  onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})} value={userDetails.password} type="password" className="form-control" placeholder="password" required />
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <button type="button" onClick={handleRegister} style={{width:'120px',height:'50px'}} className="btn btn-outline-success">Register</button>
          </div> 
        </form>
      </div>
    </div>
  </div> 
</div>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
    </div>
  )
}

export default Register