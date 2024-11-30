import React from "react";
import GetAllCourses from "../components/coursesComponents/getAllCourses";
import DynamicHero from "../components/dynamicHero";

const Courses = () => {
  return (
    <div>
      {/* <CoursesHero /> */}
      <DynamicHero
        title="Explore Our Courses"
        description="Choose from a wide range of courses designed to help you achieve your learning goals. Blind texts."
        image="https://images.unsplash.com/photo-1554412663-7b99cf315535?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <GetAllCourses />
    </div>
  );
};

export default Courses;
