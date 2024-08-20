import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './base/HeaderComponent';
import FooterComponent from './base/FooterComponent';
import LoginComponent from './Authentication/LoginComponet';
import GoogleMapComponent from './offices/googlemaps';
import SearchLocationInput from './offices/serachLocation';
import HomeComponent from './offices/home';
function App() {


  return (
    <Router>
    <div className="App">
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/googleMap" element={<GoogleMapComponent />} />
          <Route path="/search" element={<SearchLocationInput />} />
          <Route path="/home" element={<HomeComponent/>}/>
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </main>
      <FooterComponent />
    </div>
  </Router>
  );
}

export default App;
