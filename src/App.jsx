import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Services from './components/Services';
import Fotter from './components/Fotter';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
// Layout for Home Page
function HomeLayout() {
  return (
    
    <>
      <Navbar />
      <Content />
      <WhyUs />
      <Gallery/>
      <Fotter />
    </>

  );
}

// Layout for About Page
function AboutLayout() {
  return (
    <>
      <Navbar />
      <About />
      <Fotter />
    </>
  );
}

// Layout for Services Page (optional)
function ServicesLayout() {
  return (
    <>
      <Navbar />
      <Services />
      <Fotter />
    </>
  );
}

function ContactLayout() {
  return (
    <>
      <Navbar />
      <Contact />
      <Fotter />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />
  },
  {
    path: "/about",
    element: <AboutLayout />
  },
  {
    path: "/service",
    element: <ServicesLayout />
  },
  {
    path: "/contact",
    element: <ContactLayout />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


