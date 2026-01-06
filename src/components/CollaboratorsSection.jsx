import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  getStudentVideos,
  getStudentTexts,
  getCorporateTestimonials
} from "../data/testimonialsData";

import "../styles/CollaboratorsSection.css";

// ------------------- Custom Arrows -------------------
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    →
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    ←
  </div>
);

export default function CollaboratorsSection() {
  const [activeTab, setActiveTab] = useState("students");
  const [modalData, setModalData] = useState(null);

  const studentsData = [...getStudentVideos(), ...getStudentTexts()];
  const corporateData = getCorporateTestimonials();

  const dataToRender =
    activeTab === "students" ? studentsData : corporateData;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true, // ensure default arrows are off
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="collaborators-section">
      <h2>Hear from Our Community</h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "students" ? "active" : ""}
          onClick={() => setActiveTab("students")}
        >
          Students
        </button>
        <button
          className={activeTab === "corporate" ? "active" : ""}
          onClick={() => setActiveTab("corporate")}
        >
          Corporates
        </button>
      </div>

      {/* Slider */}
      <Slider {...sliderSettings}>
        {dataToRender.map((item) => (
          <div key={item.id} className="testimonial-card">
            {item.type === "video" ? (
              <div className="video-card" onClick={() => setModalData(item)}>
                <img
                  src={item.image || "https://via.placeholder.com/300x200"}
                  alt={item.name}
                />
                <span className="play-btn">▶</span>
              </div>
            ) : (
              <div className="text-card">
                <p>
                  “{item.truncated}”
                  <span
                    className="read-more"
                    onClick={() => setModalData(item)}
                  >
                    Read more
                  </span>
                </p>
              </div>
            )}

            <div className="user-info">
              <h4>{item.name}</h4>
              <p>{item.role}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalData(null)}>
              ✕
            </button>

            {modalData.type === "video" ? (
              <iframe
                src={`https://www.youtube.com/embed/${modalData.videoId}`}
                title="Testimonial"
                allowFullScreen
              />
            ) : (
              <>
                <h3>{modalData.name}</h3>
                <p className="role">{modalData.role}</p>
                <p>{modalData.fullText}</p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
