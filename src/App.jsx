import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-background">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
