import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../Images/Logo_Alt.png';
import logoText from '../Images/Logo_Text.png';


function Header() {



  return (
    <div>
      <header className='header'>
        <img className='logo' id='logo_img' src={logo} ></img>
        <img className='logo' id='logo_text' src={logoText}></img>
      </header>
      <nav className='nav'>
        <Link to='/'>Home</Link> | {' '}
        <Link to='/game1'>Game 1</Link> | {' '}
        <Link to='/game2'>Game 2</Link> | {' '}
        <Link to='/game3'>Game 3</Link> | {' '}
        <Link to='/about'>About</Link>
      </nav>
    </div>
  )
}

export default Header