// import logo from './logo.svg';
import './App.css';
import Login from './login';
// import Registration from './registration';


import HomePage from './homepage';
import Artist from './Artist';
import Register from './register';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
// import axios from 'axios';
import A1 from './Artists/A1';

function App() {
  return (
    <div>
      {/* <Link path='/login'><button>Login</button></Link> */}
      <BrowserRouter>
      <Routes>
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/' element={<HomePage />}></Route>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/artist' element={<Artist />} />
      <Route  path='/artist/:id' element={<A1 />} />
      </Routes>
      </BrowserRouter>
      {/* <Registration /> */}
    </div>
  );
}

export default App;
