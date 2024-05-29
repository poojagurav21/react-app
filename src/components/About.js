import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
let myStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
 
}
  //const [btntext, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container " >
      <h3 className="my-3" style={ {color:props.mode==='dark'?'white':'#042743'}}>About Us</h3>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This App gives you a way to analyze your text quickly and
              efficiently. You can convert your text to Uppercase, Lowercase,
              remove extra spaces, and even convert it to Cammel Case. You can
              also listen to the text using the Speak button. You can also copy
              the text to the clipboard using the Copy Text button. Be it word
              count, character count, or even the time it will take to read the
              text, this app has got you covered. You can also enable dark mode
              to make it easier on the eyes. Enjoy using our text utility app.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This app is a free character counter tool that provides instant
              character count & word count statistics for a given text. Text
              character counter is a great tool for anyone who needs to count
              the number of words & characters in their text. This can be useful
              in many situations, including when you are writing an essay,
              report, paper, or any other text-based project. It is also useful
              when writing headlines, titles, or any other text where character
              limits are important.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>{" "}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in Facebook, Blog, books, Word document, excel
              document, pdf document, essays, etc. This word counter software is
              extremely easy to use. Simply paste the text you want to count
              characters/words for in the text area and click the "Count
              characters" button. This will give you the character count with
              spaces and without spaces.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} className="btn btn-primary">
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
