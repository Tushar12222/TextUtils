
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");

    }
  }
  return (
    <>
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
            
          
          {/* <Route exact path="/" element={<TextForm heading="Enter the text below to analyze:" mode={mode} showAlert={showAlert}/>}/> */}
          <TextForm heading="Enter the text below to analyze:" mode={mode} showAlert={showAlert}/>
            
          
{/* </Routes> */}

</div>
{/* </Router> */}
    

    </>
  );
}

export default App;
