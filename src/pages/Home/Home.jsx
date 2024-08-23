import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import hero_banner from "../../assets/banner.jpg";
import hero_text from "../../assets/banner-text.png";
import { Icon } from "@iconify/react";
import TitleCards from "../../components/titleCards/TitleCards";
import { fetchNowPlaying, fetchTopRated, fetchUpcoming, fetchPopular } from "../../api/movies";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        <img className="banner" src={hero_banner} alt="" />
        <div className="hero-caption">
          <img className="hero-text" src={hero_text} alt="" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-buttons">
            <button className="play-button">
              <Icon icon="hugeicons:play" width="24" height="24" />
              Play
            </button>
            <button className="info-button">
              <Icon icon="octicon:info-24" width="24" height="24" />
              More Info
            </button>
          </div>
        </div>
      </div>

      <div className="more-cards">
        <TitleCards title="Popular on Netflix" fetchFunction={fetchNowPlaying} queryKey="nowPlaying" />
        <TitleCards title="Blockbuster Movies" fetchFunction={fetchTopRated} queryKey="topRated" />
        <TitleCards title="Only on Netflix" fetchFunction={fetchPopular} queryKey="popular" />
        <TitleCards title="Upcoming Movies" fetchFunction={fetchUpcoming} queryKey="upcoming" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
