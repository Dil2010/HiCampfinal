import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import NucampLogo from './app/assets/img/logo.png';
// import CampsiteList from './features/campsites/CampsiteList';
// import { CAMPSITES } from './app/shared/CAMPSITES';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
// import CampsitesList from './features/campsites/CampsiteList';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice'
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';



function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="App">       
            <Header/>  
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
            </Routes>            
            <Footer/>
    </div>
  );
}

export default App;
