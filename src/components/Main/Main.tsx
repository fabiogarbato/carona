import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Login } from "../Hero/Login";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 120, // distância para "estourar"
                duration: 1,
                opacity: 0.4,
                size: 20, // tamanho ao passar o mouse
              },
              push: {
                quantity: 2, // quantas partículas são adicionadas ao clicar
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              enable: true,
              speed: 0.3, // bem lento para ficar discreto
              outModes: {
                default: "out",
              },
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 15, // menos partículas para ficar mais sutil
            },
            opacity: {
              value: 0.6, // translúcido
            },
            shape: {
              type: "character",
              character: {
                // Emojis que remetem a trânsito / carona
                value: ["🚗", "🚕", "🚙", "🏍", "🛵", "🚲"],
                font: "Verdana",
                style: "",
                weight: "400",
              },
            },
            size: {
              value: 14,
              random: true,
              animation: {
                enable: false, // se quiser pulsar no tamanho, mude para true
                speed: 3,
                minimumValue: 10,
              },
            },
          },
          background: {
            color: "#0a0a0a", // Fundo escuro
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Login />
      {/* <About />
      <Project />
      <Contact /> */}
    </Container>
  );
}
