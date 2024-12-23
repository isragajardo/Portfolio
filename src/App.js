

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';

import Header  from './pages/header';
import About from './pages/About';
import Experience from './pages/experience'
import Certificates from './pages/certificates';
import FooterContact from './pages/FooterContact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Certificates />
      <FooterContact />
     </div>
  );
}

export default App;
