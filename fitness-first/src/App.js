import { useSelector } from 'react-redux';
import './App.css';
import MainRoutes from './Pages/MainRoutes';
import Footer from './components/Footer';
// import Footer from './components/Footer';
// import Login from './components/Login';
import Navbar from './components/Navbar';
import AdminNavbar from './components/User/AdminNavbar';
// import { Link } from 'react-router-dom';



function App() {
  const adminAuth= useSelector(state=> state.authReducer.isAuthAdmin)
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
