// import logo from './logo.svg';
// import './App.css';
// import Login from './login';
// import Registration from './registration';
// import HomePage from './homepage';
// import Register from './register';
import Register from './pages/registration';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
// import axios from 'axios';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainpage';

function App() {
  return (
    <div>
      {/* <Link path='/login'><button>Login</button></Link> */}
      <BrowserRouter>
      <Routes>
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/' element={<MainPage />}></Route>
      <Route exact path='/login' element={<LoginPage />}/>
      </Routes>
      </BrowserRouter>
      {/* <Registration /> */}
    </div>
  );
}

export default App;
