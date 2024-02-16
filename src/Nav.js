import React, { useEffect, useState } from 'react';
import "./Nav.css";


function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  if (window.scrollY > 100 ) {
    handleShow(true);
  }
  else {
    handleShow(false);
  }
}

useEffect(()=>{
  window.addEventListener('scroll', transitionNavBar);
  return() => window.removeEventListener("scroll",transitionNavBar)
}, []);

  return (
    <div className={`nav  ${show && "nav-black"}`}>
      <div className='nav-contents'>
        <img
        className='nav-logo'
        src='https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png'
        alt='logo'
        />

        <img
        className='nav-user-logo'
        src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'
        alt='user'
        />
      </div>
    </div>
  )
}

export default Nav;

