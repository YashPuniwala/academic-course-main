import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import DynamicHero from "../components/dynamicHero";
import CreateCourseForm from "../components/coursesComponents/createCourseForm";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all courses when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      const db = getDatabase();
      const coursesRef = ref(db, "courses"); // Reference to the "courses" node

      onValue(
        coursesRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();

            // Transform data into an array for rendering
            const coursesArray = [];
            Object.keys(data).forEach((userId) => {
              const userCourses = data[userId];
              Object.keys(userCourses).forEach((courseId) => {
                coursesArray.push({ id: courseId, ...userCourses[courseId] });
              });
            });

            setCourses(coursesArray);
          } else {
            setCourses([]); // No courses found
          }

          setLoading(false);
        },
        (error) => {
          console.error("Error fetching courses:", error);
          setLoading(false);
        }
      );
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="Explore Our Courses"
        description="Choose from a wide range of courses designed to help you achieve your learning goals. Blind texts."
        image="https://images.unsplash.com/photo-1554412663-7b99cf315535?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Create Course Form */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Create a New Course</h1>
        <CreateCourseForm />
      </div>

      {/* Display All Courses */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">All Courses</h2>
        {loading ? (
          <p>Loading courses...</p>
        ) : courses.length === 0 ? (
          <p>No courses available.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <li key={course.id} className="p-4 border rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Courses;
