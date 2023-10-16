import './App.css'
import Header from './components/Header';
import Welcome from './components/Welcome';
import Quote from './components/Quote';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Quote />
      <About />
      <Education />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
