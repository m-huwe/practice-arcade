import './App.css';
import logo from './Images/Logo_Alt.png';
import logoText from './Images/Logo_Text.png';

function App() {
  return (
    <div>
      <header class='header'>
        <div class='logo'>
          <img id='logo_img' src={logo} ></img>
          <img id='logo_text' src ={logoText}></img>
        </div>
      </header>

    </div>
  );
}

export default App;
