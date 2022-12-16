import { Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Content</p>
      <Footer />
    </div>
  );
}

export default App;
