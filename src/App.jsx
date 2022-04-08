import { useState } from 'react'
import './App.css'
import {Form1} from "./components/Form1"
import {Form2} from "./components/Form2"
import {Users} from "./components/Users"
import {Routes, Route} from "react-router-dom"
import {Home} from "./components/Home"


function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} ></Route>
        <Route path="/registration/one" element={<Form1 />} ></Route>
        <Route path="/registration/two" element={<Form2 />} ></Route>
        <Route path="/users" element={<Users />} ></Route>
      </Routes>
    </div>
  )
}

export default App
