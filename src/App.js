import React from "react";

import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import About from "./pages/About";
import Work from "./pages/Work";
import Nav from "./components/Nav";
//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
