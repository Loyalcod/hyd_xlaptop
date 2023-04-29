import './App.css';
import ManuBar from './layouts/MenuBar/ManuBar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<ManuBar/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
