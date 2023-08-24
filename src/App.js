import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import textBanner from './data/banner/Banner'
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner data={textBanner}></Banner>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
