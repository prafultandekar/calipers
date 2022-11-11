import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Man from './Pages/Man';
import AllRoutes from './Pages/AllRoutes';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
