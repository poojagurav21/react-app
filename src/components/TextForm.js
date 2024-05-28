import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " +text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLwClick = () => {
    // console.log("Uppercase was clicked " +text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleRevStrClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleCamClick = () => {
    let newText = text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
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
      <div className="container">
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control border-dark"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLwClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCamClick}>
          Convert To Cammel case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRevStrClick}>
          Reverse the String
        </button>
        <button className="btn btn-primary mx-2" onClick={speak} >
          Speak
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >
          Remove Extra Spaces
        </button>
        <button className="btn btn-warning mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
          Characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes read time
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
