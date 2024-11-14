import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import { addFileApi } from '../services/allApi';



function AddFiles() {

const [fileDetails,setProjectDetails] = useState({
  name:"",
  price:"",
  fileImg:""
})
console.log(fileDetails);

const [preview,setPreview]=useState("")

  const [show, setShow] = useState(false);
  const handleClose = () =>{ setShow(false);
    handleClose1()
  } 
  const handleShow = () => setShow(true);
  const handleFile=(e)=>{
  setProjectDetails({...fileDetails,fileImg:e.target.files[0]})
  }

  useEffect(()=>{
    if(fileDetails.fileImg){
      setPreview(URL.createObjectURL(fileDetails.fileImg))
    }
  },[fileDetails.fileImg])

  const handleClose1=()=>{
    setProjectDetails({
      name:"",
      price:"",
      fileImg:""
    })
    setPreview("")
  }

  const handleAdd = async()=>{
    const {name,price,fileImg} = fileDetails
    if(!name || !price || !fileImg){
      toast.info("Please Fill the From Completely")
    }else{
      const reqBody = new FormData()
      // we use a method called append() to add data to the object
      reqBody.append("name",name)
      reqBody.append("price",price)
      reqBody.append("fileimage",fileImg)

      const token = sessionStorage.getItem("token")

    if(token){
     const reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await addFileApi(reqBody,reqHeader)
      console.log(result);

      if(result.status==200){
        toast.success("file added successfully")
        handleClose()
      }else{
        toast.error("something went Wrong")
        handleClose()
      }
    }
    }
  }

  return (

    <>
    <button style={{marginLeft:'350px'}} onClick={handleShow} className='btn btn-success w-50 text-center'>Add File</button>
    <Modal size='lg' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-light'>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
             <label htmlFor="projectimage"> 
              <input style={{display:'none'}} type="file" id='projectimage'  onChange={(e)=>handleFile(e)} />
              <img src={preview?preview:"https://cdn-icons-png.flaticon.com/512/680/680266.png"} alt="" className='w-100'/>
              </label>
            </div>
            <div className="col-md-6 mt-3">
               <div className="mb-3">
                <input onChange={(e)=>setProjectDetails({...fileDetails,name:e.target.value})} value={fileDetails.name} type="text" name= "" id=""  placeholder='name' className='form-control'/>
               </div>
               <div className="mb-3">
               <input onChange={(e)=>setProjectDetails({...fileDetails,price:e.target.value})} value={fileDetails.price} type="text" name= "" id=""  placeholder='price' className='form-control'/>
               </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            Calcel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
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
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  )
}

export default AddFiles