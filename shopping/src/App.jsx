import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Contact from './assets/components/Contact';
import Signup from './assets/components/Signup';
import About from './assets/components/About';
import Signin from './assets/components/Signin';
import Dashboard from './user/Dashboard';
import PrivateRoute from './assets/components/Private';
import ForgotPassword from './assets/components/ForgotPassword';
import AdminDashboard from './admin/AdminDashboard';
import AdminRoute from './assets/components/Adminroute';
import Createcategory from './admin/Createcategory';
import Createproduct from './admin/Createproduct';
import Users from './admin/Users';
import Orders from './user/Orders';
import Profile from './user/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />

          {/* Private Routes for Users */}
          <Route path="Dashboard" element={<PrivateRoute />}>
            <Route path='user' element={<Dashboard />} />
            <Route path='user/Orders' element={<Orders />} />
            <Route path='user/Profile' element={<Profile />} />
          </Route>

          {/* Admin Routes */}
          <Route path='Dashboard' element={<AdminRoute />}>
            <Route path='admin' element={<AdminDashboard />} />
            <Route path='admin/Createcategory' element={<Createcategory />} />
            <Route path='admin/Createproduct' element={<Createproduct />} />
            <Route path='admin/Users' element={<Users />} />
          </Route>

          {/* Authentication and Miscellaneous Routes */}
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
