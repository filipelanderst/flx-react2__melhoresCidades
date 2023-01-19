import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Londres from './pages/Londres';
import Paris from './pages/Paris';
import NovaIorque from './pages/NovaIorque';
import Toquio from './pages/Toquio';
import Dubai from './pages/Dubai';
import Barcelona from './pages/Barcelona';
import Roma from './pages/Roma';
import Madrid from './pages/Madrid';
import Singapura from './pages/Singapura';
import Amsterda from './pages/Amsterda';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App '>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Londres' element={<Londres />} />
          <Route path='/Paris' element={<Paris />} />
          <Route path='/NovaIorque' element={<NovaIorque />} />
          <Route path='/Toquio' element={<Toquio />} />
          <Route path='/Dubai' element={<Dubai />} />
          <Route path='/Barcelona' element={<Barcelona />} />
          <Route path='/Roma' element={<Roma />} />
          <Route path='/Madrid' element={<Madrid />} />
          <Route path='/Singapura' element={<Singapura />} />
          <Route path='/Amsterda' element={<Amsterda />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
