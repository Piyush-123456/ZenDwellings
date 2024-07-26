import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import About from './pages/About';
import Signin from './pages/Signin'
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './components/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search'
const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/sign-in' element={<Signin></Signin>} />
        <Route path='/sign-up' element={<Signup></Signup>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/listing/:listingId' element={< Listing></Listing>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App