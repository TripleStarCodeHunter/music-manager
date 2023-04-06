// import logo from './logo.svg';
import './App.css';
import Login from './login';
// import Registration from './registration';
import HomePage from './homepage';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
// import axios from 'axios';

function App() {
  return (
    <div>
      <Login />
      <BrowserRouter>
      <Routes>
        
      
      <Route path='/homepage' element={<HomePage />} />
      </Routes>
      </BrowserRouter>
      {/* <Registration /> */}
    </div>
  );
}

export default App;
