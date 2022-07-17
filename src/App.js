import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // component imports
import Navbar from "./components/NavBar";
// styling imports
import "./App.css";
import Properties from "./components/Properties";
import AddProperty from "./components/AddProperty";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/properties" element={<Properties />} />
          <Route exact path="/add-property" element={<AddProperty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
