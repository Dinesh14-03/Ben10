import './App.css' 
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Video from './Video'
import Character from './Characters'

function App() {
  return (
    <Routes>
       <Route path='/' element={<Landing/>}></Route>
       <Route path='/vid' element={<Video/>}></Route>
       <Route path='/char' element={<Character/>}></Route>
    </Routes>
  )
}

export default App