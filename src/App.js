import { Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Art from './pages/Art';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import './App.css';
import GalleryDetailPage from './pages/GalleryDetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='art' element={<Art />} />
        <Route path='art/:artworkId' element={<GalleryDetailPage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
