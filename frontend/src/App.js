import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import Recomendaciones from './pages/Recomendaciones';
import Historial from './pages/Historial';
import Busqueda from './pages/Busqueda';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/recomendaciones" element={<Recomendaciones />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
