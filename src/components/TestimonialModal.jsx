import React from "react";

export default function TestimonialModal({ item, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          ✕
        </button>

        {item.type === "video" ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title="Testimonial"
            allowFullScreen
          />
        ) : (
          <>
            <h3>{item.name}</h3>
            <p className="role">{item.role}</p>
            <p>{item.fullText}</p>
          </>
        )}
      </div>
    </div>
  );
}
