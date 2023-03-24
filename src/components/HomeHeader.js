import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeHeader() {
  let navigate = useNavigate()
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <center>
      <div class="jumbotron text-dark p-5">
        <h1 class="display-4"><b>Hello, world!</b></h1>
        <hr></hr>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisq facilis sunt beatae totam tenetur am, labore dolorum nemo iure magni ducimus similique qui a perferendis ipsa, sunPariatur sint alias temporibus, incidunt at, dolores magni enim quo mollitia sed, ipsam ex sequi voluptatum laborum id inventore quos itaque unde maxime minima excepturi magnam atque illo! Officiis in facere assumenda corrupti culpa autem dolorem, at, libero distinctio incidunt doloribus consequuntur voluptatem quam totam eveniet quaerat? Voluptatum.</p>
        <br/>
        <div className='homePageButton'>
          <button className='btn btn-dark' onClick={()=>navigate('/register')}>Register Now</button>
        </div>
      </div>
      </center>
    </div>
  )
}

export default HomeHeader