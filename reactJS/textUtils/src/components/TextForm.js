import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Uppercase btn clicked" + text);
        // const newText = text.toUpperCase();
        setText(text.toUpperCase());
    }
    const handleLwClick = () => {
        console.log("lowercase btn clicked" + text);
        // const newText = text.toUpperCase();
        setText(text.toLowerCase());
    }
    const clearText = () => {
        console.log("clear text btn clicked");
        setText("");
    }
    const handleItalicClick = () => {
        console.log("handleItalicClick btn clicked");
        setText(text);
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
  return (
    <>
        <div className="container my-3">
            <h1>Enter your text:</h1>
            <div class="input-group my-3">
                <span class="input-group-text">{props.textarea}</span>
                <textarea class="form-control" aria-label="With textarea" value={text} onChange={handleOnChange}></textarea>
                
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleItalicClick}>Italic Text</button>
        </div>
        <div className="container my-3">
            <h1>text summary</h1>{}
            <p>{text.split(" ").length} words and {text.length}</p>
        </div>
    </>
  )
}
