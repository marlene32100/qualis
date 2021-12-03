import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Intro />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
