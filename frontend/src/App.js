// import logo from './logo.svg';
// import './App.css';
// import Login from './login';
// import Registration from './registration';
// <<<<<<< HEAD

import Artist from './components/artistpage/artist';

import {BrowserRouter,Route,Routes } from 'react-router-dom';
// import axios from 'axios';
import A1 from './Artists/A1';

// import HomePage from './homepage';
// import Register from './register';
import Register from './components/register/register';
// import {BrowserRouter,Route,Routes } from 'react-router-dom';
// import axios from 'axios';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainpage';
import User from './components/userpage/user';

function App() {
  return (
    <div>
      {/* <Link path='/login'><button>Login</button></Link> */}
      <BrowserRouter>
      <Routes>
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/' element={<MainPage />}></Route>
      <Route exact path='/login' element={<LoginPage />}/>
      <Route exact path='/artist' element={<Artist />} />
      
      <Route exact path='/user' element={<User />} />
      </Routes>
      </BrowserRouter>
      {/* <Registration /> */}
    </div>
  );
}




export default App;
