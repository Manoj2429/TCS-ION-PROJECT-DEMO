import React from "react";

export default function TestimonialCard({ item, openModal }) {
  return (
    <div className="testimonial-card">
      {item.type === "video" ? (
        <div className="video-card" onClick={openModal}>
          <img src={item.image} alt={item.name} />
          <span className="play-btn">▶</span>
        </div>
      ) : (
        <div className="text-card">
          <p>
            “{item.truncated}”
            <span className="read-more" onClick={openModal}>
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
  );
}
