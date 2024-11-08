import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Home from './home';
import About from './about';
import Services from './services';
import Stats from './stats';
import Portfolio from './portfolio';
import Testimonials from './testimonials';
import reportWebVitals from './reportWebVitals';
import Blog from './blog';
import Contact from './contact';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Services />
    <Stats />
    <Portfolio />
    <Testimonials />
    <Blog />
    <Contact />
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
