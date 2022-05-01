import React from 'react'
import '../Styles/about.css';
import gameRoom from '../Images/gameRoom.png';
import github from '../Images/GitHub.png';
import insta from '../Images/Insta.png';
import linkedin from '../Images/LinkedIn.png';
import Form from '../Components/Form';

function About_Page() {

  return (
    <div className="parent">
      <div className="div1">
        <h2>- Social -</h2>
        <div className='social'><img src={github}/></div>
        <div className='social'><img src={linkedin}/></div>
        <div className='social'><img src={insta}/></div>
      </div>
      <div className="div2">
        <h2>- About -</h2>
        <p>Practice Arcade was designed by Miranda Huwe. This project was conceptualized to practice my HTML, CSS, JS, and React skills. It was inspired by the neon color pallet, the 80's, arcade games, and my love for design. </p>
        <img className='image' src={gameRoom}/>
        <p>Thanks for visiting and I hope you enjoy the site!</p>
      </div>
      <div className="div3">
        <h2>- Contact -</h2>
        <Form/>
      </div>
    </div>
  )
}

export default About_Page