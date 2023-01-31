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
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/projects/:projectDetails' element={<ProjectDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
