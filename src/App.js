import './App.css';
import React from 'react';
import { useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home/Home';

import VrApp from './pages/VrApp/VrApp';
import MobileApp from './pages/MobileApp/MobileApp';
import GameDev from './pages/GameDev/GameDev';
import DedicatedDev from './pages/DedicatedDev/DedicatedDev';
import SdkDev from './pages/SdkDev/SdkDev';
import SdkModeling from './pages/SdkModeling/SdkModeling';
import ArApp from './pages/ArApp/ArApp';

import Android from './pages/Android/Android';
import Ios from './pages/Ios/Ios';
import Unity from './pages/Unity/Unity'; 

import Products from './pages/Products/Products';
import Portfolio from './pages/Portfolio/Portfolio';
import AboutUs from './pages/AboutUs/AboutUs';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';
import Popup from './components/Popup/Popup';
import ContactForm from './components/ContanctForm/ContactForm';
import ContactUs from './pages/ContactUs/ContactUs';
import Team from './pages/Team/Team';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MobileMenu from './components/MobileMenu/MobileMenu';
import NotFound from './pages/NotFound/NotFound';

const AppContext = React.createContext(); 

const App = () => {
    
    const [isVisibleCF, setVisibleCF] = useState(false);
    const [isVisibleMM, setVisibleMM] = useState(false);

    useEffect(() => {
        console.log(isVisibleCF)
    }, [isVisibleCF])

    const location = useLocation()

    useEffect(() => {
        window.scroll(0,0)
    }, [location])


	return (
        <AppContext.Provider value={{isVisibleCF, setVisibleCF, isVisibleMM, setVisibleMM}}>
            <MobileMenu active={isVisibleMM} setActive={setVisibleMM}/>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/services/vr" element={<VrApp />} />
                    <Route path="/services/mobile-app" element={<MobileApp />} />
                    <Route path="/services/game-development" element={<GameDev />} />
                    <Route path="/services/dedicated-dev" element={<DedicatedDev />} />
                    <Route path="/services/sdk-dev" element={<SdkDev />} />
                    <Route path="/services/sdk-modeling" element={<SdkModeling />} />
                    <Route path="/services/ar-app" element={<ArApp />} />

                    <Route path="/technologies/android" element={<Android />} />
                    <Route path="/technologies/ios" element={<Ios />} />
                    <Route path="/technologies/unity" element={<Unity />} />

                    <Route path="/products" element={<Products />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/article/:id/" element={<Article />} />
                    <Route path="/about-us/contact-us" element={<ContactUs />} />
                    <Route path="/about-us/team" element={<Team />} />
                    <Route path="*" element={<NotFound /> } />

                </Routes>
                
            <Popup active={isVisibleCF} setActive={setVisibleCF}>
                <ContactForm />
            </Popup>
            
            <ScrollToTop />
        </AppContext.Provider>	
	)
}

export {AppContext}
export default App;
