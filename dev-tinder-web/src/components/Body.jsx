import React, { useEffect } from 'react'
import NavBar from './NavBar'
// Body.js
import { Outlet, useFetcher, useNavigate } from "react-router-dom";
import Footer from './Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

function Body() {
const dispatch=useDispatch();
const navigate=useNavigate();
const userData=useSelector((store)=>store.user);

const fetchLoggedInUser = async () => {
  if (userData) return;  // If user is already fetched, no need to make the request

  try {
    const res = await axios.get(BASE_URL + "/profile/view", {
      withCredentials: true,  // Ensure credentials are sent
    });

    dispatch(addUser(res.data));  // Dispatch the user data to Redux store
  } catch (err) {
    if (err.response && err.response.status === 401) {
      navigate("/login");  // Redirect to login if unauthorized
    } else {
      console.error("An error occurred while fetching the logged-in user", err);
    }
  }
};



//it will happen when 1st time load the component

useEffect(() => {
  fetchLoggedInUser();
}, [userData]);

  return (
    <div>
      <NavBar/>

      {/* Render child routes here */}
      <Outlet />

      <Footer/>
    </div>
  );
}

export default Body;
