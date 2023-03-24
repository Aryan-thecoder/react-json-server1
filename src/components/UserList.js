import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UserList() {
  let navigate = useNavigate()
  let [users,setUsers]=useState([])
  let [loaded,setLoaded]=useState(Boolean)
    const getData = async() =>{
        let result=await axios.get("http://localhost:4000/users")
        setUsers(result.data)
        setLoaded(1)
    }
    useEffect(()=>{
        getData()
    },[])
    const showSpinner = () => {
      return (
        <div>
          <div class="spinner-border" role="status" style={{color:"white"}}></div>
        </div>
      );
    }; 
  if(users.length!==0 && loaded===1)
  {
    return (
      <div>
        {/* {showSpinner()} */}
        <br/>
        <br/>
      <p className='display-3 text-black text-center mb-54'><b style={{color:"skyblue"}}>Users</b></p>
      <hr style={{color:"white"}}></hr>
      <br/>
      <br/>
      <div className='userListCard'>
        <ul>
        {users.map((userObj) => (
          <li className="card text-center" style={{backgroundColor:"#ededf7",boxShadow:"5px 5px 20px black"}}>
            <div className='card-image'>
              <img src={userObj.image} class="card-img-top" alt="..."/>
            </div>
              <div class="card-body">
                  <h3 class="card-title">{userObj.name}</h3>
                  <h5 class="card-text mb-4">{userObj.email}</h5>
                  <button className='btn mb-3 text-dark border-dark' style={{backgroundColor:"#6fa8dc"}} onClick={()=>navigate(`/user/${userObj.id}`, { state: userObj })}>Profile</button>
              </div>
          </li>
          ))}
        </ul>
      </div> 
    </div>
    )
  }
  else if(loaded===0){
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <img src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png" style={{borderRadius:"20px",width:"40%"}}></img>
          <p className='display-1 text-light text-center mt-5'><b>No Users Found!</b></p>
      </div>
    )
  }
  else{
    
  }
}

export default UserList
