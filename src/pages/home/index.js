import "./styles.css";
import CustomButton from "./components/custom-button";
import img1 from "../../images/icon-blue.png";
import img2 from "../../images/icon-orange.png";
import img3 from "../../images/icon-green.png";
import img4 from "../../images/icon-yellow.png";
import design from "../../images/design.jpg";
import animatedGIF from "../../images/animated-gif.gif";

export default function Home() {
  return (
    <div className="home-container">
      <article className="article-container">
        <div className="container inner-container">
          <div className="card">
            <h1>Todo o suporte que você precisa</h1>
            <p>Deixe o desafio conosco</p>
            <h3> </h3>
            <button className="simulate-btn">Faça seu orçamento grátis</button>
          </div>
        </div>
      </article>
      <main>
        <aside className="info-cards">
          <div className="container">
            <form className="mini-cards">
              <CustomButton
                classname="mini-card first-card"
                title="Faça uma simulação"
                imageSrc={img1}
              />
              <CustomButton
                classname="mini-card second-card"
                title="Parceiros"
                imageSrc={img2}
              />
              <CustomButton
                classname="mini-card third-card"
                title="Informações básicas"
                imageSrc={img3}
              />
              <CustomButton
                classname="mini-card fourth-card"
                title="Entre em contato"
                imageSrc={img4}
              />
            </form>
          </div>
        </aside>
        <article className="container">
          <a
            href=""
            // target="_blank"
            rel="noopener noreferrer"
            className="article-image">
            <img src={design} alt="design" />
          </a>
          <div className="banner-container">
            <h2>
              Todas as informações que sua empresa precisa
              <span> de forma mais simples</span>
            </h2>
            <img
              className="animated-banner"
              src={animatedGIF}
              alt="Todas as informações que sua empresa precisa de forma mais simples"
            />
            <h2 id="bottom-banner-text">
              ...e na palma da <span>sua mão</span>
            </h2>
          </div>
        </article>
      </main>
    </div>
  );
}
