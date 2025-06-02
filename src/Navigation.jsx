import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/services';
import './navigation.css'

function Navigation() {
            function myFunction() {
                console.log('hello');
  var x = document.getElementById("navbar");
  if (x.className === "headnav") {
    x.className += " responsive";
  } else {
    x.className = "headnav";
  }
}

    return (
        
        <BrowserRouter>
            <div class="headnav" id="navbar">
                <a href="#home" class="click"><Link to='/'>Home</Link></a>
                 <a href="#services" class="menu"><Link to='/Services'>Services</Link></a>
                <a href="#contact" class="menu"> <Link to='/Contact'>Contact</Link></a>
                <a href="#about" class="menu"> <Link to='/about'>About</Link></a>
                <button class="icon" onClick={myFunction}>Menu</button>
            </div>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Services' element={<Services/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </BrowserRouter>
    
        
    );
}

export default Navigation;