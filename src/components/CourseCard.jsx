import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <a href={course.link}>Offered by: {course.offeredBy}</a>
    </div>
  );
}
