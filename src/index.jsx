import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css'
import Home from "./pages/Home"
import About from "./pages/About"
import "./server"
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'

function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">#VANLIFE</Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path='/vans/:id' element={<VanDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />)
