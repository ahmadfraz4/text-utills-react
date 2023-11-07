import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Handling({ myMode, styling, alertMsg, myHandletoShow }) {
  const [text, setText] = useState("");
  const [condition, setCondition] = useState(false);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  let [paint, setPaint] = useState("#000000");
  let [bgIze, setBgIze] = useState("white");
  const [mySize, setSize] = useState(17);
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [dis, setDis] = useState(true);
  const [see, setSee] = useState(false);
  const [copytxt, setCopy] = useState(false);

  const capitalizeWords = (sentence) => {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
  };
  
  const changingText = (e) => {
    const updatedText = e.target.value;
    setText(updatedText);

    if (updatedText === "") {
      alertMsg("Enter the Text First ", "danger");
    } else {
      let convertedText = updatedText;
      if (lower) {
        convertedText = convertedText.toLowerCase();
        alertMsg("The text is converted to lowercase", "success");
        setText((s) => {
          return s + " ";
        });
      } else if (upper) {
        convertedText = convertedText.toUpperCase();
        alertMsg("The text is converted to uppercase", "success");
        setText((s) => {
          return s + " ";
        });
      } else if (condition) {
        convertedText = capitalizeWords(convertedText);
        alertMsg("The text is capitalized", "success");
        setText((s) => {
          return s + " ";
        });
      }

      setText(convertedText);
      setDis(false);
    }
  };
  const upperClass = () => {
    if (text === "") {
      alertMsg("Enter the Text first", "danger");
    } else {
      alertMsg("The text converted to uppercase", "success");
    }
    setText((s) => {
      return s.toUpperCase();
    });
    myHandletoShow(true);
    setUpper(true);
    setLower(false);
    setCondition(false);
  };
  const lowerClass = () => {
    if (text === "") {
      alertMsg("Enter the Text first", "danger");
    } else {
      alertMsg("The text converted to lowercase", "success");
    }
    setText((s) => {
      return s.toLowerCase();
    });
    myHandletoShow(true);
    setLower(true);
    setUpper(false);
    setCondition(false);
  };
  const Caps = () => {
    if (text === "") {
      alertMsg("Enter the Text first", "danger");
    } else {
      alertMsg("The text is capitalized", "success");
    }
    setText((s) => {
      return capitalizeWords(s);
    });
    myHandletoShow(true);
    setCondition(true);
    setLower(false);
    setUpper(false);
  };
  let colorize = (c) => {
    setPaint(c.target.value);
  };
  let myBg = (m) => {
    setBgIze(m.target.value);
    // return (m.value = (setBgIze(m.target.value)))
  };
  useEffect(() => {
    if (myMode === "dark") {
     
      setPaint("#ffffff");
      setBgIze("#1A444D");
    } else if (myMode === "light") {
      setPaint("#000000");
      setBgIze("#ffffff");

    }
  }, [myMode]);
  const sizer = (f) => {
    setSize(f.target.value);
  };
  
  const Speak = () => {
    alertMsg("The text is being spoken", "success");
    myHandletoShow(true);
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const finding = (f) => {
    setFind(f.target.value);
  };

  const replacing = (r) => {
    setReplace(r.target.value);
  };

  const findReplace = () => {
    setText((t) => {
      // replacing find's value whith replace value
      return t.replace(find, replace);
    });
    alertMsg("The text is replaced", "success");
    myHandletoShow(true);
  };

  const showPop = () => {
    setSee((prevState) => !prevState);
  };

  const copy = () => {
    if (text !== "") {
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1500);
      return navigator.clipboard.writeText(text);
    }
  };
  let removeSpaces = () => {
    setText(() => {
      return text.split(/\s+|\n/).filter((element) => {
        return element !== "";
      }).join(" ");
    });
  };
  
  return (
    <div>
      <div className="main">
        <div
          style={styling}
          className="container position-relative pt-5 d-flex justify-content-around flex-column align-items-center"
        >
          <div className="mt-3">
            <h2>Text Manipulation And Utilities</h2>
            {see && (
              <section
                className={`my-3 position-absolute pos card bg-${
                  myMode === "light" ? "white" : "black"
                } border border-2 px-3 py-2 d-flex flex-column align-items-center rounded-1 fw-bold`}
              >
                <div className="position-relative w-100 ">
                  <button
                    onClick={showPop}
                    className="btn btn-danger position-absolute r-90"
                  >
                    x
                  </button>
                </div>
                <label htmlFor="">Find</label>

                <input
                  type="text"
                  onChange={finding}
                  className="ms-2"
                  value={find}
                />
                <br />
                <label className="mt-2">Replace</label>
                <input
                  type="text"
                  onChange={replacing}
                  className="ms-2"
                  value={replace}
                />
                <button
                  onClick={findReplace}
                  disabled={dis}
                  className={`btn btn-${
                    myMode === "light" ? "dark" : "secondary"
                  } mt-2 `}
                >
                  Replace
                </button>
              </section>
            )}
          </div>
          <div className="mt-3 col-12 text-center d-flex flex-column align-items-center position-relative">
            {copytxt && (
              <div className="position-absolute copy-msg ">
                Text copied to clipboard
              </div>
            )}
            <div className="py-3 col-12 d-flex align-items-center flex-sm-row flex-column justify-content-around">
              <div className="d-flex align-items-center justify-content-center">
                <div className="me-2 fs-5">Change size</div>
                <input
                  type="number"
                  onChange={sizer}
                  defaultValue="16"
                  style={{
                    background: "transparent",
                    color: myMode === "light" ? "#000000" : "#ffffff",
                  }}
                  className="myNum"
                />
              </div>
              <div className="my-1 d-flex align-items-center justify-content-center position-relative">
                <div className="me-2 fs-5">Change color</div>
                <input
                  type="color"
                  onChange={colorize}
                  value={paint}
                />
              </div>
              <div className="mb-1 d-flex align-items-center justify-content-center ">
                <div className="me-md-4 me-sm-2 me-1 fs-5">Change Background</div>
                <input
                  type="color"
                  onChange={myBg}
                  value={bgIze}
                />
              </div>
              <button
                onClick={showPop}
                disabled={dis}
                className="mx-0 my-1 btn btn-primary"
              >
                Find & Replace
              </button>
            </div>
            <textarea
              id="myTextArea"
              value={text}
              autoFocus
              onChange={changingText}
              style={{
                color: paint,
                fontSize: `${mySize}px`,
                backgroundColor: bgIze,
                height: "50vh",
                width: "100%",
                padding: "5px 10px",
              }}
              placeholder="Text is here"
            ></textarea>
          </div>
          <section
            style={styling}
            className="btnSection flex-wrap col-12 d-flex justify-content-evenly py-4"
          >
            <div
              onClick={upperClass}
              className={`my-1 btn btn-outline-danger fw-semibold ${upper ? "active" : ""}`}
            >
              toUpperCase
            </div>
            <div
              onClick={lowerClass}
              className={`my-1 btn btn-outline-success fw-semibold ${
                lower ? "active" : ""
              }`}
            >
              toLowerCase
            </div>
            <div
              onClick={Caps}
              className={`my-1 btn btn-outline-primary fw-semibold ${
                condition ? "active" : ""
              }`}
            >
              Capitalize
            </div>
            <div onClick={copy} className="my-1 btn btn-outline-info fw-semibold">
              Copy
            </div>
            <div onClick={Speak} className="my-1 btn btn-outline-danger fw-semibold">
              Speak
            </div>
            <div onClick={removeSpaces} className="my-1 btn btn-secondary fw-semibold">
              Remove Extra Spaces
            </div>
          </section>
          <section
            style={styling}
            className="numSection col-9 d-flex justify-content-evenly py-4"
          >
            <div>
              There are {text.split(" ").filter(Boolean).length} words and{" "}
              {text.replace(/\s/g, "").length} characters
            </div>
            <div>
              A user can read it in{" "}
              {(text.split(" ").length * 0.008).toFixed(2)} minutes
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

Handling.propTypes = {
  myMode: PropTypes.string.isRequired,
  styling: PropTypes.object.isRequired,
  alertMsg: PropTypes.func.isRequired,
  myHandletoShow: PropTypes.func.isRequired,
};

export default Handling;
