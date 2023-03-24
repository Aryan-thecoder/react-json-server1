import React from 'react'
import {NavLink} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <div>
        <ul class="nav justify-content-end bg-dark p-3">
          <li class="nav-item me-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" width={"45px"} />
          </li>
          <li class="nav-item me-5">
            <NavLink className={({isActive})=>isActive?"active nav-link":"inactive nav-link"} to="/">
              Home
            </NavLink>
          </li>
          <li class="nav-item me-5">
          <NavLink className={({isActive})=>isActive?"active nav-link":"inactive nav-link"} to="/register">
              Register
            </NavLink>
          </li>
          <li class="nav-item me-5">
          <NavLink className={({isActive})=>isActive?"active nav-link":"inactive nav-link"} to="/contact-us">
              ContactUs
            </NavLink>
          </li>
          <li class="nav-item me-5">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                More Options
              </Dropdown.Toggle>
              <Dropdown.Menu variant='dark'>
                <Dropdown.Item href="/users-list">Users List</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
    </div>
  )
}

export default Header
