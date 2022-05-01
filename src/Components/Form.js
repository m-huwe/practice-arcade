import React from 'react'
import '../Styles/form.css';

function Form() {
  return (
    <div>
      <p>Questions, comments, concerns?</p>
      <form>
        <input id='first' type='text' placeholder='First Name'></input>
        <input id='last' type='text' placeholder='Last Name'></input><br />
        <input id='email' type='email' placeholder='Email'></input><br />
        <textarea id='text' placeholder='Comments...' ></textarea><br />
        <div id='radio'>
          <span>Did you enjoy this site?</span><br /><br />
          <input type='radio' id='like' name='poll' value='yes'></input>
          <label for='like'>Yes, this is awesome!</label>
          <input type='radio' id='dislike' name='poll' value='no'></input>
          <label for='dislike'>No, needs some work.</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form