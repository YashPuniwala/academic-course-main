import React, { useState } from "react";
import createCourse from "../../components/coursesComponents/createCourse";
import { useAuth } from "../../contexts/authContext";

const CreateCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { currentUser } = useAuth(); // Access currentUser here

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill out all fields");
      return;
    }

    if (!currentUser) {
      alert("You must be logged in to create a course");
      return;
    }

    const courseData = { title, description };
    await createCourse(courseData, currentUser); // Pass currentUser to the function
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm text-gray-600 font-bold">Course Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
          placeholder="Enter course title"
        />
      </div>
      <div>
        <label className="text-sm text-gray-600 font-bold">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
          placeholder="Enter course description"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl rounded-lg transition duration-300"
      >
        Create Course
      </button>
    </form>
  );
};

export default CreateCourseForm;
