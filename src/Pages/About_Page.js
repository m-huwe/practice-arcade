import React from 'react'
import '../Styles/about.css';
import gameRoom from '../Images/gameRoom.png';

function About_Page() {

  return (
    <div className="parent">
      <div className="div1">
        <h2>- Social -</h2>
      </div>
      <div className="div2">
        <h2>- About -</h2>
        <p>Practice Arcade was designed by Miranda Huwe. This project was conceptualized to practice my HTML, CSS, JS, and React skills. It was inspired by the neon color pallet, the 80's, arcade games, and my love for design. </p>
        <img className='image' src={gameRoom}/>
        <p>Thanks for visiting and I hope you enjoy the site!</p>
      </div>
      <div className="div3">
        <h2>- Contact -</h2>
      </div>
    </div>
  )
}

export default About_Page