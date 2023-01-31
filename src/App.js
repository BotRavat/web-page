import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/service_page/Service';
import Navbar from './Navbar';
import {Routes,Route, Navigate} from 'react-router-dom';
import WebDevelopment from './components/services/web_development/WebDevelopment';
import AndroidDevelopment from './components/services/android_development/AndroidDevelopment';
import SoftwareDevelopment from './components/services/software_development/SoftwareDevelopment';
import Marketing from './components/services/marketing/Marketing';


function App() {
  return( <> 
  <div  >
     <Navbar/>
  <Routes>
    <Route path='/' element=<Home/> />
    <Route path='/service' element=<Service/> />
    <Route path='/contact' element=<Contact/> />
    <Route path='/about' element=<About/> />
    <Route path='/webdevelopment' element=<WebDevelopment/> />
    <Route path='/androiddevelopment' element=<AndroidDevelopment/> />
    <Route path='/softwaredevelopment' element=<SoftwareDevelopment/> />
    <Route path='/marketing' element=<Marketing/> />
    <Route path='*' element=<Navigate to='/' /> />
    
  </Routes>

  </div>
    
  
  </>);
}


export default App;
