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
import Particles from "react-tsparticles";

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
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
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
    <>
      <Particles
        style={{ zIndex: 0 }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          //   background: {
          //     color: {
          //       value: "#0d47a1",
          //     },
          //   },
          fpsLimit: 75,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FEDE00",
            },
            links: {
              color: "#FEDE00",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div data-theme={theme} style={{ zIndex: 100, background: "white" }}>
        <div className="portfolio__app">
          <div>
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
      </div>
    </>
  );
}

export default App;
