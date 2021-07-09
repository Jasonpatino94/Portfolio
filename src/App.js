import './App.css';
import NavBar from './components/NavBar';
import Name from './components/Name';
import Title from './components/Title';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Name />
      <Title />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
