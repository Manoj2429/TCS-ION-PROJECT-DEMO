import Carousel from "./Carousel";
import "./NqtSection.css";

const NqtSection = () => {
  return (
    <section className="tcsNqtCertified">
      <div className="container">
        <h2>
          Over 1 Lakh AIVQT certified candidates are living their dreams
        </h2>
        <p>You too can work with Top Corporates like</p>

        <Carousel />

        <div className="btn-wrap">
          <a href="#variant" className="primary-btn fixed-btn">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default NqtSection;
