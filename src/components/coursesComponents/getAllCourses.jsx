import React from "react";
import {
  FaBrain,
  FaBullhorn,
  FaChalkboardTeacher,
  FaCloud,
  FaImage,
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaPython,
} from "react-icons/fa";

const courses = [
  {
    title: "Introducing to Software Engineering",
    instructor: "John Smith",
    rating: 5.0,
    lectures: 50,
    duration: "190 hrs",
    price: "$100 All Course / $15 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaLaptopCode />, // Using a laptop code icon
  },
  {
    title: "Enhancing Adobe Photoshop CC 2020 Skills",
    instructor: "Ram Gurung",
    rating: 5.0,
    lectures: 30,
    duration: "125 hrs",
    price: "$200 All Course / $25 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaImage />, // Using an image icon
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    instructor: "Saroj Nepal",
    rating: 5.0,
    lectures: 50,
    duration: "50 hrs",
    price: "$50 All Course / $5 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaChalkboardTeacher />, // Using a chalkboard teacher icon
  },
  {
    title: "Mastering Python for Data Science",
    instructor: "Jane Doe",
    rating: 4.8,
    lectures: 40,
    duration: "120 hrs",
    price: "$150 All Course / $20 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaPython />, // Using a python icon
  },
  {
    title: "Complete Digital Marketing Strategy",
    instructor: "Mike Taylor",
    rating: 4.9,
    lectures: 60,
    duration: "100 hrs",
    price: "$180 All Course / $18 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaBullhorn />, // Using a bullhorn (marketing) icon
  },
  {
    title: "Advanced Machine Learning Algorithms",
    instructor: "Sara Lee",
    rating: 5.0,
    lectures: 70,
    duration: "150 hrs",
    price: "$250 All Course / $30 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaBrain />, // Using a brain (machine learning) icon
  },
  {
    title: "Mobile App Development with React Native",
    instructor: "Alex Harris",
    rating: 4.7,
    lectures: 45,
    duration: "110 hrs",
    price: "$120 All Course / $15 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaMobileAlt />, // Using a mobile icon
  },
  {
    title: "UI/UX Design Fundamentals",
    instructor: "Olivia Brown",
    rating: 4.8,
    lectures: 40,
    duration: "80 hrs",
    price: "$90 All Course / $12 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaPencilRuler />, // Using a pencil ruler (design) icon
  },
  {
    title: "Introduction to Cloud Computing",
    instructor: "David Wilson",
    rating: 4.6,
    lectures: 50,
    duration: "130 hrs",
    price: "$160 All Course / $20 per month",
    enrollLink: "ENROLL NOW !",
    icon: <FaCloud />, // Using a cloud icon
  },
];

const coursesCategory = [
  { title: "UI/UX Design Courses", courses: 25, icon: "💻" },
  { title: "Art & Design", courses: 25, icon: "🎨" },
  { title: "Computer Science", courses: 10, icon: "🧪" },
  { title: "History & Archeologic", courses: 15, icon: "📜" },
  { title: "Software Engineering", courses: 30, icon: "🖥️" },
  { title: "Information Software", courses: 60, icon: "📊" },
  { title: "Health & Fitness", courses: 10, icon: "🏋️‍♀️" },
  { title: "Marketing", courses: 30, icon: "📢" },
  { title: "Graphic Design", courses: 80, icon: "✏️" },
  { title: "Music", courses: 120, icon: "🎶" },
  { title: "Business Administration", courses: 17, icon: "💼" },
  { title: "Web Management", courses: 17, icon: "🌐" },
];

const GetAllCourses = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Courses</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Course Content */}
              <div className="px-6 py-4 flex flex-col justify-between flex-1">
                {/* Title and Icon */}
                <div className="flex items-center">
                  <div className="text-teal-500 text-3xl mr-3">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {course.title}
                  </h3>
                </div>
                <p className="mt-2 text-gray-500">by {course.instructor}</p>
                <div className="flex items-center mt-4">
                  <svg
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-gray-500">
                    {course.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex flex-col mt-4 space-y-2">
                  <p className="text-sm text-gray-500">
                    {course.lectures} lectures ({course.duration})
                  </p>
                  <p className="text-lg font-semibold text-teal-500">
                    {course.price}
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mt-4 "
                >
                  {course.enrollLink}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-teal-500 text-lg uppercase font-bold">Courses</h2>
          <h1 className="text-4xl font-bold text-gray-900">
            Browse Our Online Courses
          </h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {coursesCategory.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-teal-500 hover:text-white hover:scale-105"
            >
              <div className="text-teal-500 text-4xl mb-4 transition-colors duration-300">
                {course.icon}
              </div>
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p className="mt-2">{course.courses} Courses</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetAllCourses;
