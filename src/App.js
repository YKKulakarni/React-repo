import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Text from "./component/Text";
// import Timer from "./component/Timer";
import { Route, Routes } from "react-router-dom";
import About from "./component/About";
import NavScrollExample from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      {/* <h1>Enter your text</h1> */}
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Text />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
