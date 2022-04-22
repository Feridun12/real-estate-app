import React from "react";
import { Routes, Route } from "react-router-dom"; // component imports
import Navbar from "./components/NavBar";
// styling imports
import "./App.css";
import Properties from "./components/Properties";
import AddProperty from "./components/AddProperty";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/properties" element={Properties} />
        <Route exact path="/add-property" element={AddProperty} />
      </Routes>
    </div>
  );
}

export default App;
