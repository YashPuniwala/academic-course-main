import { getDatabase, ref, push, set } from "firebase/database";

const createCourse = async (courseData, currentUser) => {
  const db = getDatabase();

  if (!currentUser) {
    alert("You must be logged in to create a course");
    return;
  }

  try {
    // Reference to the courses node for the logged-in user
    const userCoursesRef = ref(db, `courses/${currentUser.uid}`);
    const newCourseRef = push(userCoursesRef); // Create a unique course ID under the user's node

    const timestamp = Date.now();

    await set(newCourseRef, {
      ...courseData,
      createdBy: currentUser.uid, // Associate course with the logged-in user
      timestamp,
    });

    alert("Course created successfully!");
  } catch (error) {
    console.error("Error creating course:", error);
    alert("Failed to create course");
  }
};

export default createCourse;
