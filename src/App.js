import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleModeHandler = () => {
    //console.log("called togglke")
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#1a0000"
      showAlert("Dark mode enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "#FFFFFF"
      showAlert("Dark mode disbled", "danger")
    }
  }


  return (
    <>
      <Router>

        <Navbar title="Textilities" mode={mode} toggleMode={toggleModeHandler} />
        <Alert alert={alert}></Alert>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Routes>
                <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} toggleMode={toggleModeHandler} ></TextForm>}/>
                <Route exact path="/about" element={<About mode={mode} />}/>
              </Routes>
            </div>
          </div>
        </div>

      </Router>
    </>

  );
}

export default App;
