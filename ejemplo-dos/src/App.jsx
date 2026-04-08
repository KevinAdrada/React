//import React from 'react'
import "./App.css";
//import los componentes
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Footer from "./componentes/footer";

//componente que organiza la estructura de la pagina
const App = () => {
  return (
    <>
      {/* cargo el contenido de los componentes */}
      <Navbar />
      <Home/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
