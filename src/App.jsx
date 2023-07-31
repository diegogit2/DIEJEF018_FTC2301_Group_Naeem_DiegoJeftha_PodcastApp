import './App.css'
import Navbar from "./components/Navbar"
import PodcastList from "./components/PodcastList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Success from './components/Success'
import LoginPage from './components/LoginPage'
import Success from './components/Success'


function App() {


  return (
    <div>
      <Navbar />
      <PodcastList />

      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<Success />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
