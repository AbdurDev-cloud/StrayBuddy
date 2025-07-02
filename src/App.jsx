import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Report from './pages/Report.jsx';
import About from './pages/About.jsx';
import MapPage from './pages/MapPage.jsx';
import Signup from "./pages/Signup.jsx";
import Login from './pages/Login.jsx';
import LoginSignup from './pages/LoginSignup';



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginSignup />} />
      

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
