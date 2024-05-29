import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked " +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLwClick = () => {
    // console.log("Uppercase was clicked " +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleRevStrClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("String Reversed", "success");
  };

  const handleCamClick = () => {
    let newText = text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Cammel Case", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is spoken", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  //logic for inverse/reverce string
  //   const handleinverseclick = () => {
  //     console.log("inverse click is triggered");
  //     let newtext = "";
  //     for (let i = text.length - 1; i >= 0; i--) {
  //       newtext += text[i];
  //     }
  //     setText(newtext);
  //   };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLwClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCamClick}>
          Convert To Cammel case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRevStrClick}>
          Reverse the String
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={speak}>
          Speak
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.replace(/\s+/g, "").length}</b>{" "}
          Characters
        </p>
        {/* <p>
          <b>{text.trim() === "" ? 0 : text.match(/\S+/g).length}</b>
          words and <b>{text.replace(/\s+/g, "").length}</b> characters
        </p> */}
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read time
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview!"}
        </p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
