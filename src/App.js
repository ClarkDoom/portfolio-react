import './App.css';
import { Routes, Route } from 'react-router';
import ReactGA from 'react-ga';


// components
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {

  ReactGA.initialize('G-X8ERPGSYKZ')
  ReactGA.pageview(window.location.pathname + window.location.search);

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
