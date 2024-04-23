// import logo from './logo.svg';
// import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar"
import TextForm from "./componets/Text";
import React, { useState } from "react";

function App() {

  const [mode, setMode] = useState('light')



  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor="gray"
    }

    else{
      setMode ('light')
      document.body.style.backgroundColor="white"
    }
  }

  return (
    <>
      <Navbar title="U App" mode={mode} toggleMode={toggleMode} />

      <div className="container my-5">
        <TextForm heading="Type your Message" />
      </div>
    </>

  );
}

export default App;
