import './App.css';
import MainRoutes from './Pages/MainRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
