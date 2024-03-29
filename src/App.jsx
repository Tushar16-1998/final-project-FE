import './App.css'
import SignUp from './components/SignUp'
import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainPage from './pages/MainPage'
import ListForm from './components/ListForm'
import ReqForm from './components/ReqForm';
import DetailsPage from './components/DetailsPage';
import Navbar from './components/NavBar';
import About from './components/About';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/listform" element={<ListForm />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/reqform" element={<ReqForm />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
