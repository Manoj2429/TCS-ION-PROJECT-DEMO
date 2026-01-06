import React from "react";
import courses from "../data/coursesData";
import CourseCard from "./CourseCard";
import "../styles/relatedCourses.css";

export default function RelatedCourses() {
  return (
    <section className="related-courses-section">
      <h2>Related Courses</h2>
      <div className="courses-wrapper">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
