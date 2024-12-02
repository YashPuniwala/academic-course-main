import { getDatabase, ref, push, set } from "firebase/database";

const createCourse = async (courseData) => {
  const db = getDatabase();

  try {
    // Reference to the courses node, now no longer user-specific
    const coursesRef = ref(db, "courses");
    const newCourseRef = push(coursesRef); // Create a unique course ID under the generic courses node

    const timestamp = Date.now();

    await set(newCourseRef, {
      ...courseData,
      timestamp,
    });

    alert("Course created successfully!");
  } catch (error) {
    console.error("Error creating course:", error);
    alert("Failed to create course");
  }
};

export default createCourse;
