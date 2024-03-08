import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ullam odit officia fugiat magnam, sunt ratione
            sapiente vero possimus quidem libero. Amet, vel. Enim, quis suscipit
            odio, cupiditate itaque expedita saepe officiis, ipsum similique
            sapiente vero adipisci esse. Consectetur, nihil!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser " className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
