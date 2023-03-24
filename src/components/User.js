// import React,{useState} from 'react'

// function User() {
//   let [users,setUsers]=useState([])
//   return (
//     <div>
//         <div className="card" style={{width: "25rem"}}>
//           <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" class="card-img-top" alt="..."/>
//             <div class="card-body">
//                 <h5 class="card-title">Card 1</h5>
//                 <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquam esse accusamus dolores, expedita ab praesentium voluptatem cupiditate earum quis?</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default User

// useLocation hook is used to get via state property sent from user-list page
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

export default function User() {
  /* useLocation() contains {
    state: {},
    hash: "",
    key: "",
    pathname: "",
    search: ""
  } */

  let { state } = useLocation();
  console.log(useLocation());

  // states for modal

  const [showModal, setShowModal] = useState(false);
  const [modifyToScreen, setModifyToScreen] = useState(state);

  const navigate = useNavigate();

  // for opening and closing on model
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  // edit user

  const editUser = () => {
    openModal();

    // set already put data to input fields, this uses name property of react-hook-form

    setValue("name", state.name);
    setValue("email", state.email);
    setValue("dob", state.dob);
    setValue("image", state.image);

    // set values to input field
  };

  // save user
  const saveUser = async () => {
    closeModal();
    let modifiedUser = getValues();

    modifiedUser.id = state.id;

    console.log("modified user: ", modifiedUser);

    // make http put req

    let res = await axios.put(
      `http://localhost:4000/users/${modifiedUser.id}`,
      modifiedUser
    );

    // logging the object
    console.log(res);

    // setting the data to screen

    setModifyToScreen(res.data);
  };

  const goToUserList = () => {
    navigate("/users-list");
  };

  const deleteUser = async (id) => {
    let res = await axios.delete(`http://localhost:4000/users/${id}`);
    console.log("Deleted object: ", res);
    goToUserList();
  };

  return (
    <div>
      <br/>
      <div style={{display:"flex",gap:"0px",justifyContent:"end"}}>
      <p className="display-4 text-center"><b style={{color:"skyblue",marginRight:"375px"}}>User Details</b></p>
      <button className="btn btn-secondary" onClick={()=>navigate('/users-list')} style={{width:"120px",height:"40px",marginTop:"20px",marginRight:"5%"}}>Go to Users</button>
      </div>
      <hr style={{color:"white"}}></hr>
      <br/>
      <div className="text-dark">
        <div className="card mx-auto p-3 w-25" style={{boxShadow:"5px 5px 20px black",backgroundColor:"light"}}>
          <img
            className="card-img-top"
            src={state.image}
            alt="Card image cap"
          />
          <br/>
          <div className="card-body col">
            <h5 className="card-title text-start"><b><i>User Id : </i></b> <b><i style={{color:"#6fa8dc"}}>{modifyToScreen.id}</i></b></h5>
            <h5 className="card-title text-start"><b><i>Name : </i></b> <b><i style={{color:"#6fa8dc"}}>{modifyToScreen.name}</i></b></h5>
            <h5 className="card-title text-start"><b><i>Email : </i></b><b><i style={{color:"#6fa8dc"}}>{modifyToScreen.email}</i></b></h5>
            <h5 className="card-title text-start"><b><i>Date of birth : </i></b><b><i style={{color:"#6fa8dc"}}>{modifyToScreen.dob}</i></b></h5>
            <br/>
            <button className="btn btn-dark float-start" onClick={editUser}>
              Edit
            </button>
            <button
              className="btn btn-danger float-end"
              onClick={() => deleteUser(modifyToScreen.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* modal for edit */}

      {/* backdrop = static avoids closing modal when click done anywhere except close */}
      <Modal show={showModal} onHide={closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* use edit form */}
          <form className="p-3 text-light bg-dark" style={{borderRadius:"10px"}}>
            {/* register your input into the hook by invoking the "register" function */}

            <div className="col">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                {...register("name", {
                  required: true,
                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.name && (
                <span className="text-danger">Name is required</span>
              )}
            </div>
              <br/>
            <div className="col   ">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                {...register("email", {
                  required: true,
                  // pattern: {
                  //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //   message: "Invalid email address!",
                  // },
                })}
              />

              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-danger">Email is required</span>
              )}
            </div>
            <br/>
            <div className="  col  ">
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                className="form-control"
                {...register("dob", { required: true })}
              />

              {/* errors will return when field validation fails  */}
              {errors.dob && (
                <span className="text-danger">DOB is required</span>
              )}
            </div>
            <br/>
            <div className="  col  ">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                className="form-control"
                {...register("image", { required: true })}
                disabled="true"
              />

              {/* errors will return when field validation fails  */}
              {errors.image && (
                <span className="text-danger">Image URL is required</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={saveUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}