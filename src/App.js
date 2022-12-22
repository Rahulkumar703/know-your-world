import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home-page';
import Country from './Pages/Countries-page';
import Error404 from './Pages/Error404-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:countryName' element={<Country />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
