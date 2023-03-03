import './App.css';
import { Routes, Route } from 'react-router';



// components
import Home from './pages/Home';
import NavBar from './components/NavBar';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-7MR4KGM2F9"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

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
