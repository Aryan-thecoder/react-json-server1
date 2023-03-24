import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function HomeCard() {
  return (
    <div className='home-cards mt-3'>
        <div className="card border-dark" style={{width: "20rem",boxShadow:"5px 5px 25px black"}}>
            <img src="https://cdn.cdnlogo.com/logos/r/85/react.svg" class="card-img-top" alt="..."/>
            <div class="card-body bg-dark text-white" >
                <h2 class="card-title" style={{color:"skyblue"}}>ReactJS</h2>
                <br/>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores id quaerat, distinctio accusamus reiciendis.</p>
                <button className='btn mt-3' style={{backgroundColor:"skyblue"}}>Go to React</button>
                <br/>
                <br/>
            </div>
        </div>
        <div className="card border-dark" style={{width: "20rem",boxShadow:"5px 5px 25px black"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" class="card-img-top" alt="..."/>
            <div class="card-body bg-dark text-white">
                <h2 class="card-title text-danger">AngularJS</h2>
                <br/>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores id quaerat, distinctio accusamus reiciendis.</p>
                <button className='btn mt-3' style={{backgroundColor:"skyblue"}}>Go to Angular</button>
            </div>
        </div>
        <div className="card border-dark" style={{width: "20rem",boxShadow:"5px 5px 25px black"}}>
            <img src="https://vuejs.org/images/logo.png" class="card-img-top" alt="..."/>
            <div class="card-body bg-dark text-white">
                <h2 class="card-title text-success">VueJS</h2>
                <br/>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores id quaerat, distinctio accusamus reiciendis.</p>
                <button className='btn mt-3' style={{backgroundColor:"skyblue"}}>Go to Vue</button>
            </div>
        </div>
    </div>
  )
}

export default HomeCard