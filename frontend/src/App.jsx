import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from './pages/Home/index'
import About from './pages/About/index'
import Detail from './pages/Detail/index'
import Basket from './pages/Basket/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Profile from './pages/Profile/index'
import "./assets/reset.scss"
import AdminPanel from "./pages/AdminPanel";
import PrivateRoute from "./routes/PrivateRoute";
import UserAdminPanel from "./pages/UsersAdminPanel";
import ProductsAdminPanel from "./pages/ProductsAdminPanel";


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<PrivateRoute roles={[ 'admin']} />}>
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/userAdminPanel" element={<UserAdminPanel/>}/>
            <Route path="/productAdminPanel" element={<ProductsAdminPanel/>}/>
          </Route>
          <Route element={<PrivateRoute roles={['user', 'admin']} />}>
            <Route path="/profile" element={<Profile/>} />
          </Route>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
