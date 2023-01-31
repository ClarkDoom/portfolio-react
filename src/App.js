import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router';

// components
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/Resume' element={<Resume />}/>
      </Routes>
    </div>
  );
}

export default App;
