import './App.css';
import Home from './pages/HomePage/home';
import { Routes, Route } from 'react-router-dom';
import PageBody from './layouts/pageBody/PageBody';
import Phone from './pages/phones/Phone';
import Pc from './pages/PcandTablet/Pc';
import Aboutus from './pages/Aboutus/Aboutus';
import ContactUs from './pages/Contact_us/Contact_us';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<PageBody />}></Route>
          <Route path='pc' element={<Pc />}></Route>
          <Route path='phones' element={<Phone />}></Route>
          <Route path='about_us' element={<Aboutus />}></Route>
          <Route path='Contact_us' element={<ContactUs />}></Route>
          
        </Route>
      
      </Routes>
      
    </div>
  );
}

export default App;
