import logo from './logo.svg';
import './App.css';
import NavBar from './Components/nav-bar/NavBar';
import AboutMe from './Components/home-components/about-me/AboutMe';
import Services from './Components/home-components/services/Services';
import Projects from './Components/home-components/projects/Projects';
import Resume from './Components/home-components/resume/Resume';
import Contact from './Components/home-components/contact/Contact';
import Footer from './Components/footer/Footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
