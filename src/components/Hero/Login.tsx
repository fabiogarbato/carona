import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";

export function Login() {
  return (
    <Container id="login">
      {/* Formulário de Login */}
      <div className="login-form">
        <ScrollAnimation animateIn="fadeInUp">
          <h1>Bem-vindo de volta!</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <p>Faça seu login para continuar</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <form>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Digite seu email" />

            <label htmlFor="password">Senha</label>
            <input id="password" type="password" placeholder="Digite sua senha" />

            <button type="submit">Entrar</button>
          </form>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/fábio-garbato-046316196/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>

            <a
              href="https://t.me/CodeVinayak"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

    </Container>
  );
}
