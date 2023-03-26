
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
          <Header />
          <Banner />
          <Nav active='home'/>
        </div>
      } />
      <Route path='/about' element={
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
          <Header />
          <About />
          <Nav active='about'/>
        </div>
      } />
      <Route path='/work' element={
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden '>
          <Header />
          <Work />
          <Nav active='work' />
        </div>
      } />
      <Route path='/services' element={
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden '>
          <Header />
          <Services />
          <Nav active='services' />
        </div>
      } />
      <Route path='/contact' element={
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden '>
          <Header />
          <Contact />
          <Nav active='contact' />
        </div>
      } />
    </Routes>
  </BrowserRouter>
}
