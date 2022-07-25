import React from "react";
import { Routes, Route } from "react-router-dom";
import { Aside, Sidebar,Navbar,  } from "./components";
import { Error, Home } from "./routes";

function App() {
  return (
    <div className="app">
      <Aside/>
      <main className="main">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </main>
      <Sidebar/>
    </div>
  );
}

export default App;
