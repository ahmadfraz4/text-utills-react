import { useState } from "react";
import Handling from "./components/Handling";
import Navbar from "./components/Navbar";
import Alerts from "./components/Alerts";
// import AboutPage from "./components/AboutPage";

function MyApp() {
  // console.clear();
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);
  let [show, setShow] = useState(false);
  let [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
    transition: ".3s",
  });
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  let alertInHandle = (value) => {
    setShow(value);
  };

  let nullify = (val) => {
    setShow(val);
  };

  let DarkBody = () => {
    if (mode === "dark") {
      showAlert(" The Light mode is Enabled", "success");
      setMode("light");
      setShow(true);
      document.body.style.backgroundColor = "White";
      document.title = "Text-Utils Light";
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else if (mode === "light") {
      showAlert(" The Dark mode is Enabled", "success");
      setMode("dark");

      setShow(true);

      document.body.style.backgroundColor = "#1a4758";
      setStyle({
        color: "white",
        backgroundColor: "#1a4758",
      });
    }
  };

  return (
    <div className="">
      <Navbar mode={mode} DarkBody={DarkBody} myHandletoShow={alertInHandle} />
      <Alerts mode={show} sendNull={nullify} alertMsg={alert} />

      {/* we can use only path but exact path is best idea */}

      <Handling
        myMode={mode}
        myHandletoShow={alertInHandle}
        alertMsg={showAlert}
        styling={myStyle}
        DarkBody2={DarkBody}
      />
    </div>
  );
}

export default MyApp;
