import './App.css';
import { Routes, Route } from 'react-router';

// components
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/about' element={<About />}/> */}
        {/* <Route path='/contact' element={<Contact />}/> */}
        {/* <Route path='/projects' element={<Projects />}/> */}
      </Routes>
    </div>
  );
}

export default App;
