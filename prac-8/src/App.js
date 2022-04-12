import React from 'react'
import UserRegister from './Components/UserRegister'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Private from './Layout/Private'
import NotFound from './Layout/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/signup" element={<UserRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
