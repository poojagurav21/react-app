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
    }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

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
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-3" onClick={handleLwClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> Characters</p>
        <p><b>{0.008*text.split(" ").length}</b> Minutes read time</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
