import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const UpperCase = () => {
    console.log("Clicked")
    let newtext = text.toUpperCase();
    setText(newtext)

  }

  const LowerCase = () => {
    console.log("Clicked")
    let newtext1 = text.toLowerCase();
    setText(newtext1)

  }


  const handleOnChange = (event) => {
    console.log("Thats Onchange");
    setText(event.target.value);
  }

  const ClearText = () => {
    console.log("Clicked");
    setText("");
  }

  const CopyText = () => {
    let text = document.getElementById("mybox").value
    navigator.clipboard.writeText(text);
  };
  

  // const handlePaste = () => {
  //   let t = document.getElementById("mybox")
  //   navigator.clipboard.readText().then((t) => {
  //   });

  // }
  return (
    <div>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary" onClick={UpperCase}>UpperCase</button>
      <button className="btn btn-danger m-1" onClick={LowerCase}>LowerCase</button>
      <button className="btn btn-success m-1" onClick={ClearText}>Clear Text</button>
      <button className="btn btn-dark m-1" onClick={CopyText}>Copy</button>
      {/* <button className="btn btn-dark m-1" style={{ float: "right" }} onClick={handlePaste}>Paste</button> */}


      <div className="container my-3">
        <h2>{text.split(" ").length} words and {text.length} characters.</h2>
      </div>
    </div>
  );
}

