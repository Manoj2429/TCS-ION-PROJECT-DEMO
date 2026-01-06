import AchieverCard from "./AchieverCard";
import achieversData from "../data/achieversData";
import "./Achievers.css";

const AchieversSection = () => {
  return (
    <section className="achievers-section">
      <h2>Some of Our Achievers</h2>
      <p className="subtitle">
        All India Virtual Qualifier Test (AIVQT) helps you prove your skills
        to Top Corporates
      </p>

      <div className="scroll-slider">
        {achieversData.map((item, i) => (
          <AchieverCard key={i} data={item} />
        ))}
      </div>
    </section>
  );
};

export default AchieversSection;
