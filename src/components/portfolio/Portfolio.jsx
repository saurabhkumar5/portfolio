import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={IMG1} alt="" />
              </div>
              <h3>Developed and launched a highly-rated movie app  with review and Rating stars, leveraging expertise in front-end and back-end development, API integration, and full responsive.</h3>
              <div className="portfolio_item-cta">
                <a href="https://github.com/saurabhkumar5/moonflix-movie-app" className="btn" target="_blank">
                  GitHub
                </a>
                <a
                  href="https://moonflixx.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href="https://hub.docker.com/repository/docker/saurabhkumar93/moonflix/general"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Docker Image
                </a>
              </div>
            </article>
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={IMG2} alt="" />
              </div>
              <h3>Desi Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods.</h3>
              <div className="portfolio_item-cta">
                <a href="https://github.com/saurabhkumar5/mern-estate" className="btn" target="_blank">
                  GitHub
                </a>
                {/* <a
                  href="https://moonflixx.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Docker Image
                </a> */}
              </div>
            </article>
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={IMG3} alt="" />
              </div>
              <h3>This dynamic app offers a seamless shopping experience with all features. This is a fully responsive web app</h3>
              <div className="portfolio_item-cta">
                <a href="https://github.com/saurabhkumar5/mern-ecommerce" className="btn" target="_blank">
                  GitHub
                </a>
                {/* <a
                  href="https://moonflixx.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Docker Image
                </a> */}
              </div>
            </article>
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={IMG4} alt="" />
              </div>
              <h3>An online web application to get weather updates with a responsive front-end.User can find temperature, humidity, pressure, time, date and wind speed of any city on globe by searching the name</h3>
              <div className="portfolio_item-cta">
                <a href="https://github.com/saurabhkumar5/weather-app" className="btn" target="_blank">
                  GitHub
                </a>
                <a
                  href="https://weather-app-mu-snowy.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href="https://hub.docker.com/repository/docker/saurabhkumar93/weather_app/general"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Docker Image
                </a>
              </div>
            </article>
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={IMG5} alt="" />
              </div>
              <h3>Netflix clone with user interface</h3>
              <div className="portfolio_item-cta">
                <a href="https://github.com/saurabhkumar5/netflix_clone/tree/master" className="btn" target="_blank">
                  GitHub
                </a>
                {/* <a
                  href="https://moonflixx.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Docker Image
                </a> */}
              </div>
            </article>
      </div>
    </section>
  );
};

export default Portfolio;
