import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Userdata from './UserData'

function App() {
  return (
    <>
       <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route exact path="/UserData" element={<Userdata />}></Route>

          {/* <Route path="/EditUser/:id" element={<EditUser/>}></Route> */}

          <Route path="*" element={<Home />}></Route>

        </Routes>
      </Router>

    </>
  )
}

export default App