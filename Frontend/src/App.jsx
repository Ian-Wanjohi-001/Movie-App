import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Footer from './components/Appfooter';
import TheatersPage from './pages/TheatersPage';
import RateMoviePage from './pages/RateMoviePage';
import './App.css'

function App() {


  return (
    <div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/theaters" element={<TheatersPage/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/rate-movie" element={<RateMoviePage/>} />
     </Routes>
      <Footer/> 
    </div>
  )
}

export default App
