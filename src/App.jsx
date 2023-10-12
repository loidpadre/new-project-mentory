import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home/Home'
import Detail from './Detail/Detail'
import { PokemonPage } from './Pokemon'
import { PokemonDatail } from './Pokemon/detail'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<PokemonPage/>} />
        <Route path='/pokemon/:name' element={<PokemonDatail/>} />
        <Route path='/users' element={<Home />} />
        <Route path='/users/:id' element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App
