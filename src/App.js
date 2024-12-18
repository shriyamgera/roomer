import { Provider, useDispatch } from "react-redux";
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
import { useEffect } from "react";
import api from "./config/api";
import { setAuthenticated } from "./store/features/UserSlice";
import PrivateComponent from "./components/PrivateComponent";

function App() {

  function Validate() {
  const dispatch = useDispatch()

    const validateToken = async()=>{

        try {
            const apiData = await fetch (api.validateToken, {
                headers:{
                    'authorization': localStorage.getItem('token')
                }
            })
            const res = await apiData.json()
            if(res?.success){
                dispatch(setAuthenticated(true))
            }else{
                dispatch(setAuthenticated(false))
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
      const token = localStorage.getItem('token')
      if(token){
          validateToken()
      }else{
          dispatch(setAuthenticated(false))
      }
  }, [])
}

  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
      <Validate/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<PrivateComponent element={<Profile/>}/>}/>
            <Route path='/wishlist' element={<PrivateComponent element={<Wishlist/>}/>}/>
            <Route path='/details/:id' element={<PrivateComponent element={<AccommodationDetails/>}/>}/>
        </Routes>
      </BrowserRouter>
   </Provider>
  );
}

export default App;
