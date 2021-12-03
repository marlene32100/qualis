import "./App.css";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="app">
      <header>
        <Topbar />
      </header>

      <div className="sections">
        <Intro />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
