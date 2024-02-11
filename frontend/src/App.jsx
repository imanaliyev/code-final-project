import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from './pages/Home/index'
import About from './pages/About/index'
import Detail from './pages/Detail/index'
import Basket from './pages/Basket/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import "./assets/reset.scss"


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
