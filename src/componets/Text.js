import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const myhandle = () => {
    console.log("Clicked")
    let newtext = text.toUpperCase();
    setText(newtext)

  }

  const down = () => {
    console.log("Clicked")
    let newtext1 = text.toLowerCase();
    setText(newtext1)

  }


  const handleOnChange = (event) => {
    console.log("Thats Onchange");
    setText(event.target.value);
  }

  const end = () => {
    console.log("Clicked");
    setText("");
  }

  return (
    <div>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={myhandle}>UpperCase</button>
      <button className="btn btn-danger m-1" onClick={down}>LowerCase</button>
      <button className="btn btn-dark m-1" onClick={end}>Clear</button>

      <div className="container my-3">
        <h2>{text.split(" ").length} words and {text.length} characters.</h2>

      </div>
    </div>
  );
}
