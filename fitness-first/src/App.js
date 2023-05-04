import './App.css';
import MainRoutes from './Pages/MainRoutes';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      delete this when you will have created a navbar
      <div>
      <Link style={{margin:"30px"}} to ='/'>home</Link>
      <Link style={{margin:"30px"}} to ='/products'>Products</Link>
      <Link style={{margin:"30px"}} to ='/signAndLogin'>SignUpLogin</Link>
      </div>
   
      {/* <Login/> */}
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
