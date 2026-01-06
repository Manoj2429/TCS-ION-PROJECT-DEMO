import React from "react";
import "./TestimonialsSection.css";

// Import male user photos
import boy1 from "../assets/Steve.jpg";
import boy2 from "../assets/mike.jpg";
import boy3 from "../assets/jim.jpg";
import boy4 from "../assets/dustin.jpg";
import boy5 from "../assets/Will.JPG";
const testimonials = [
  {
    name: "Nara Hari",
    company: "Java Developer – Entry Level",
    text: "AIVQT exposed my weak areas in Java and aptitude. After fixing them, I cleared two technical interviews within a month.",
    img: boy1,
  },
  {
    name: "Dhanush",
    company: "Final Year B.Tech Student",
    text: "The AIVQT report helped me understand where I was failing. The feedback was more useful than mock tests. assessment was well structured and the feedback was very helpful.",
    img: boy2,
  },
  {
    name: "Manikesh",
    company: "Fresher – Full Stack Track",
    text: "The AIVQT certificate improved my profile visibility and helped me get shortlisted for interviews.",
    img: boy3,
  },
  {
    name: "Manoj",
    company: "Computer Science Graduate",
    text: "The platform helped me get a job at a top software company.",
    img: boy4,
  },
  {
    name: "Rohit",
    company: "Graduate – Software Testing Track",
    text: "The AIVQT helped me identify my gaps in logical reasoning and core concepts. I corrected them before interviews and felt more confident.",
    img: boy5,
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section">
      {/* LEFT BLUE BOX */}
      <div className="testimonial-left">
        <h1>1K+</h1>
        <p>
          AIVQT candidates assessed Trusted by <strong>60+ hiring partners</strong>{" "}
        </p>
      </div>

      {/* RIGHT SCROLLABLE TIMELINE */}
      <div className="testimonial-right">
        {testimonials.map((t, i) => (
          <div className="testimonial-item" key={i}>
            <div className="testimonial-img">
              <img src={t.img} alt={t.name} />
            </div>
            <div className="testimonial-text">
              <h4>
                {t.name} <span>({t.company})</span>
              </h4>
              <p>{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
