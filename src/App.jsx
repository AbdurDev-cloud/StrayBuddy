import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Report from './pages/Report';
import About from './pages/About';
import MapPage from './pages/MapPage';
import LoginSignup from './pages/LoginSignup';
import GuestProfile from "./pages/GuestProfile";
import { ToastContainer } from 'react-toastify';

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
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/GuestProfile" element={<GuestProfile />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </main>
      <Footer />

     
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
