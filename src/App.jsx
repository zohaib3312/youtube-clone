import React, { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Video from "./Pages/Videos/Video"

function App() {
  const [sidebar,setsidebar]= useState(true);

  return (
    <>
       
<Navbar  setsidebar={setsidebar} />

<Routes>
  <Route path="/" element={<Home  sidebar={sidebar}  />} /> 
  <Route path="/video/:categoryId/:video" element={<Video />} /> 
</Routes>

    </>
  )
}

export default App
