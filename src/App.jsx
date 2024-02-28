import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Hero/>}/>
        <Route path="*" element="errorr"/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
