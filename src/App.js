import logo from './logo.svg'
import './App.scss'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Layout from './Components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
      </Routes>
    </>
  )
}

export default App
