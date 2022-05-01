import React from 'react'
import '../Styles/home.css';
import sign from '../Images/Welcome.png';


function Home_Page() {
  
  return (
    <div>
      <div className='container'>
        <img id='sign' src={sign}/>
        <h1>To play: </h1>
        <p>Select a game from the navigation above.</p>
      </div>
    </div>
  )
}

export default Home_Page