import { useEffect } from "react";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Service from "./components/services/Service";
import Skill from "./components/skills/Skill";

function App() {
  useEffect(() => {
    const onScroll = (event) => {
      const header = document.getElementById("header");
      console.log("this: ,", window.pageYOffset);
      if (window.pageYOffset >= 50) header.classList.add("scroll__header");
      else header.classList.remove("scroll__header");
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="portfolio__app">
      <Header />
      <Home />
      <About />
      <Skill />
      <Service />
    </div>
  );
}

export default App;
