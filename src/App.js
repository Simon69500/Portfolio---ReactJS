import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Service from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Mentions from './pages/mentions';

function App() {
  return (
    <div className="App">
      {/* Routes pour la navigation menu */}
      <Routes>
        <Route path='/' element={<Home/>}>HOME</Route>
        <Route path='/Service' element={<Service/>}>SERVICES</Route>
        <Route path='/Portfolio' element={<Portfolio/>}>PORTFOLIO</Route>
        <Route path='/Contact' element={<Contact/>}>CONTACT</Route>
        <Route path='Mentions' element={<Mentions/>}>MENTIONS LEGALES</Route>
      </Routes>

    </div>

  );
}

export default App;
