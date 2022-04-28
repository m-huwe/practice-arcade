import React from 'react'
import '../Styles/Header.css';
import logo from '../Images/Logo_Alt.png';
import logoText from '../Images/Logo_Text.png';


function Header() {



return (
    <header class='header'>
      <div class='logo'>
        <img id='logo_img' src={logo} ></img>
        <img id='logo_text' src={logoText}></img>
      </div>
      <nav>
          
      </nav>
    </header>
  )
}

export default Header