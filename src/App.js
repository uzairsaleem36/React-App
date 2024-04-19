// import logo from './logo.svg';
// import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar"
import TextForm from "./componets/Text";
import React, { useState } from "react";

function App() {

  const [mode, setMode] = useState('dark')

  return (
    <>
      <Navbar title="U App" mode={mode} />

      <div className="container my-5">
        <TextForm heading="Type your Message" />
      </div>
    </>

  );
}

export default App;
