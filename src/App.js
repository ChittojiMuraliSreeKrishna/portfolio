import './App.css';
import Header from './Header.js';
import Intro from './Intro.js';
import Footer from './Footer.js';
import Aboutme from './Aboutme.js';
import College from './College.js';
import Personal from './Personal.js';
import Certificate from './Certificate.js';
import Moreprojects from './Moreprojects.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <College />
      <Certificate />
      <Aboutme />
      <Personal />
      <Moreprojects />
      <Footer />
    </div>
  );
}

export default App;
