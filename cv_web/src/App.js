import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Info from './components/pages/Info'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/information" element={<Info />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
