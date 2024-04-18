import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App h-full">
      <Navbar/>
      <Home/>
      <BrowserRouter>
      <Routes>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
