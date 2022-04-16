import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Photo from "../../images/men.jpeg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { init } from "ityped";

import "./home.scss";

function Home() {
  const animatedTextRef = useRef();
  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__title">Hero coder</h1>
          <p className="sub__title">
            <span ref={animatedTextRef}></span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            officia, rem omnis adipisci alias ipsum reiciendis quaerat quidem ut
            modi repellat magni natus quis doloribus aliquid unde ullam quod
            delectus nobis asperiores dolores ad. Ab eum, dolores atque autem
            beatae officia. Ab perspiciatis consequatur non nemo accusamus optio
            magni adipisci!
          </p>
          <ul className="home__links">
            <li>
              <a
                href="https://fb.com"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaFacebook className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaGithub className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaLinkedin className="home__icon" />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="home__cta">
            {" "}
            Hire me
          </Link>
        </div>
        <div className="home__right">
          <img src={Photo} alt="hero coder" />
        </div>
      </div>
    </section>
  );
}

export default Home;
