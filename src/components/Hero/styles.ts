import styled from "styled-components";

export const Container = styled.section`
  /* Faz o container ocupar a tela inteira e centraliza os itens no eixo X e Y */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem; /* Aumentado de 4rem para 6rem */
  padding: 3rem; /* Aumentado de 2rem para 3rem */
  background: rgba(0, 0, 0, 0); /* Ajuste a cor de fundo se quiser */

  /* Área do formulário de login */
  .login-form {
    max-width: 600px; /* Aumentado de 500px para 600px */
    width: 100%;

    & > p {
      font-size: 2rem; /* Aumentado de 1.8rem para 2rem */
    }

    h1 {
      font-size: 5rem; /* Aumentado de 4rem para 5rem */
      margin-bottom: 1.2rem; /* Leve ajuste */
    }

    /* Exemplo de estilização dos campos de texto e labels */
    label {
      display: block;
      margin: 1.2rem 0 0.5rem;
      font-weight: bold;
      font-size: 1.2rem; /* Aumentei para combinar com o "zoom" */
    }

    input {
      width: 100%;
      padding: 1.2rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1.2rem; /* Aumentado */
    }

    button {
      margin-top: 1.2rem;
      padding: 1.2rem 7rem; /* Aumentado um pouquinho */
      background-color: var(--green);
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.3rem; /* Aumentado */
      cursor: pointer;
      transition: filter 0.2s;
    }

    button:hover {
      filter: brightness(0.9);
    }
  }

  /* Área da imagem */
  .login-image {
    max-width: 600px; /* Aumentado de 500px para 600px */
    width: 100%;

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  }

  /* Ícones de redes sociais */
  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem; /* Aumentado */
    padding-top: 3rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  /* Ajustes de responsividade */
  @media (max-width: 960px) {
    flex-direction: column; /* Coloca form e imagem em colunas */
    text-align: center;

    .login-form {
      h1 {
        font-size: 4rem; /* Leve redução no mobile */
      }
    }

    .login-image {
      display: block;
      margin-top: 2rem;
    }
  }

  @media (max-width: 600px) {
    .login-form {
      h1 {
        font-size: 3rem;
      }
      & > p {
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 480px) {
    gap: 2rem;
    padding: 1rem;

    .login-form {
      h1 {
        font-size: 2.4rem;
      }
    }
  }
`;
