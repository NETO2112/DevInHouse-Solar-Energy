import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Unidades from './pages/Unidades';
import Menu from './components/Menu';
import GlobalContainer from './components/ContainerGlobal';
import Register from './pages/Register';
import Generation from './pages/Generation';
import Dashboard from './pages/Dashboard';

import "react-datepicker/dist/react-datepicker.css";

function App() {

  const location = useLocation();

  return (
    <GlobalContainer>
      {location.pathname !== "/" && <Menu />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/geracoes" element={<Generation />} />
        <Route path="/unidades/cadastro" element={<Register />} />
        <Route path="/unidades/edit/:id" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </GlobalContainer>
  );
}

export default App;