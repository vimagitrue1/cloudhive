import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './base/HeaderComponent';
import FooterComponent from './base/FooterComponent';
import LoginComponent from './Authentication/LoginComponet';

function App() {
  return (
    <Router>
    <div className="App">
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
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
