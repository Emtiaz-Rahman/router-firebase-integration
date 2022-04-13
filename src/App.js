

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Regester from './components/Regester/Regester';
import RequireAuth from './components/RequireAuth/RequireAuth';





function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/regester' element={<Regester></Regester>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>



      </Routes>

    </div >
  );
}

export default App;
