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
import Shop from './assets/components/Shop';
import ShopDetails from './assets/components/ShopDetails';
import ShoppingCart from './assets/components/ShoppingCart';
import Blog from './assets/components/Blog';
import BlogDetails from './assets/components/BlogDetails';
import Checkout from './assets/components/Checkout';
import Products from './admin/Products';
import Createdeal from './admin/createDeal';
import Updateproduct from './admin/Updateproduct';
import Search from './assets/components/Search';
import Cartitems from './assets/components/Cartitems';
import Heartitems from './assets/components/heartitems';
import SingleProduct from './assets/components/SignleProduct';
import FAQs from './assets/components/FAQs';
import Categories from './admin/Categories';
import DealWeek from './assets/components/DealWeek';
import Deals from './admin/Deals';
import RetunExchange from './assets/components/RetunExchange';
import Accessories from './assets/components/Accessories';
import Shoes from './assets/components/Shoes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cartitems />} />
          <Route path='/Heart' element={<Heartitems />} />


          <Route path='/Search' element={<Search />} />
          <Route path='/FAQs' element={<FAQs/>} />


          <Route path='/Shop' element={<Shop />} />
          <Route path='/ShopDetails' element={<ShopDetails />} />
          <Route path='/ShoppingCart' element={<ShoppingCart/>} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/BlogDetails' element={<BlogDetails/>} />
          <Route path='/Checkout' element={<Checkout/>} />

          <Route path='/getsingleproduct/:id' element={<SingleProduct/>} />

          <Route path='/Retun&Exchange' element={<RetunExchange/>} />
          <Route path='/Accessories' element={<Accessories/>} />
          <Route path='/Shoes' element={<Shoes/>} />
          <Route path='/DealWeek' element={<DealWeek/>} />






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
            <Route path='admin/Updateproduct/:slug' element={<Updateproduct />} />
            <Route path='admin/Category' element={<Categories />} />
            <Route path='admin/Deals' element={<Deals />} />
            <Route path='admin/Products' element={<Products />} />
            <Route path='admin/Createdeal' element={<Createdeal/>} />

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
