import { Provider } from "react-redux";
import {store} from './store/store'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./screens/Profile";
import Wishlist from "./screens/Wishlist";
import AccommodationDetails from "./screens/AccommodationDetails";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/details/:id' element={<AccommodationDetails/>}/>
        </Routes>
      </BrowserRouter>
   </Provider>
  );
}

export default App;
