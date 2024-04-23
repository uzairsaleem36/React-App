import "./App.css";
import Navbar from "./componets/Navbar"
import TextForm from "./componets/Text";
import React, { useState } from "react";
import Alert from "./componets/Alert";

function App() {

  const [mode, setMode] = useState('light')



  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor="#042743"
    }

    else{
      setMode ('light')
      document.body.style.backgroundColor="white"
    }
  }

  return (
    <>
      <Navbar title="U App" mode={mode} toggleMode={toggleMode} />
      <Alert alert="This alert is for testing purposes. You can discard it. Thank you."/>
      <div className="container my-5">
        <TextForm heading="Type your Message" mode={mode} />
      </div>
    </>

  );
}

export default App;
