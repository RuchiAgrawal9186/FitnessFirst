import './App.css';
import MainRoutes from './Pages/MainRoutes';
import Footer from './components/Footer';
// import Footer from './components/Footer';
// import Login from './components/Login';
import Navbar from './components/Navbar';
// import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='mt-[4%]'>
      <MainRoutes/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
