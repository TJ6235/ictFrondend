import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import FilesToDisplay from './components/FilesToDisplay'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='files' element={<FilesToDisplay/>}/>
      </Routes>
    </>
  )
}

export default App
