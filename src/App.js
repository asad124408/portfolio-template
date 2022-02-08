import { useEffect } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Service from "./components/services/Service";
import Skill from "./components/skills/Skill";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/Work/Work";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    const onScroll = (event) => {
      const header = document.getElementById("header");
      if (window.pageYOffset >= 50) header.classList.add("scroll__header");
      else header.classList.remove("scroll__header");
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div data-theme={theme}>
      <div className="portfolio__app">
        <Header theme={theme} switchTheme={switchTheme} />

        <Home />
        <About />
        <Skill />
        <Service />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
