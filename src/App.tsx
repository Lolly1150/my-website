import "./styles/App.scss";
import Logo from "./components/Logo";
import { BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import A from "./components/A";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";
function App() {
  const customInit = async (engine: Engine) => {
    await loadFull(engine);
  };
  const options = {
    particles: {
      number: {
        value: 130,
        density: {
          enable: true,
          value_area: 700,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: true,
          speed: 10,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 4.0,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 5,
        random: true,
        straight: true,
        //out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  const handlerClick = () => {
    new Audio("/rick.mp3").play();
  };
  return (
    <>
      <Particles options={options} init={customInit} />
      <Logo />
      <Text tag="h1">Lolly</Text>
      <Text tag="p" className="bio">
        <img
          draggable="false"
          className="emoji"
          alt="🇮🇹"
          src="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f1ee-1f1f9.png"
          onClick={() => handlerClick()}
        />{" "}
        Hello! I'm Lolly, I love coding in javascript, typescript and react.
      </Text>
      <div className="icon-div">
        <div className="github-div">
          <A href="https://github.com/lolly1150">
            <BsGithub className="github-icon" />
          </A>
        </div>
        <div className="discord-div">
          <A href="https://discord.com/users/820726341976588340">
            <FaDiscord className="discord-icon" />
          </A>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
