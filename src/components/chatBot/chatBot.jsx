import React, { useState, useRef, useEffect } from "react";
import Fuse from "fuse.js";
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
  FaRobot,
  FaTimes,
  FaComment,
} from "react-icons/fa";
import {Link} from "react-router-dom"

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm here to help you find courses. Write only name of the course!",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const courses = [
    {
      title: "Introducing to Software Engineering",
      link: "/courses",
      icon: <FaLaptopCode />,
      video: "https://videos.pexels.com/video-files/1494295/1494295-hd_1920_1080_24fps.mp4",
    },
    {
      title: "Enhancing Adobe Photoshop CC 2020 Skills",
      link: "/courses",
      icon: <FaImage />,
      video: "https://videos.pexels.com/video-files/854918/854918-sd_640_360_30fps.mp4",
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      link: "/courses",
      icon: <FaChalkboardTeacher />,
      video: "https://videos.pexels.com/video-files/3116737/3116737-sd_640_360_25fps.mp4",
    },
    {
      title: "Mastering Python for Data Science",
      link: "/courses",
      icon: <FaPython />,
      video: "https://videos.pexels.com/video-files/7944931/7944931-sd_960_506_25fps.mp4",
    },
    {
      title: "Complete Digital Marketing Strategy",
      link: "/courses",
      icon: <FaBullhorn />,
      video: "https://videos.pexels.com/video-files/8036702/8036702-sd_960_506_25fps.mp4",
    },
    {
      title: "Advanced Machine Learning Algorithms",
      link: "/courses",
      icon: <FaBrain />,
      video: "https://videos.pexels.com/video-files/8731997/8731997-sd_960_506_25fps.mp4",
    },
    {
      title: "Mobile App Development with React Native",
      link: "/courses",
      icon: <FaMobileAlt />,
      video: "https://videos.pexels.com/video-files/4836402/4836402-sd_640_360_25fps.mp4",
    },
    {
      title: "UI/UX Design Fundamentals",
      link: "/courses",
      icon: <FaPencilRuler />,
      video: "https://videos.pexels.com/video-files/4836402/4836402-sd_640_360_25fps.mp4",
    },
    {
      title: "Introduction to Cloud Computing",
      link: "/courses",
      icon: <FaCloud />,
      video: "https://videos.pexels.com/video-files/4836402/4836402-sd_640_360_25fps.mp4",
    },
  ];

 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fuse = new Fuse(courses, {
  keys: ["title"], // We are searching within the 'title' key
  threshold: 0.3, // Adjusting the threshold for better precision
  includeScore: true,
  ignoreLocation: false, // Ensure that matches are relevant to the word position
  useExtendedSearch: true, // Enable extended search features for better matching
});

const handleSend = () => {
  if (!userInput.trim()) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Please type something to search for a course.",
      },
    ]);
    return;
  }

  setMessages((prev) => [...prev, { sender: "user", text: userInput }]);

  // Perform the dynamic search with the user input
  const results = fuse.search(userInput);  // Searching based on the input

  setTimeout(() => {
    if (results.length > 0) {
      const courseMessages = results.map((result) => ({
        sender: "bot",
        text: (
          <div className="flex flex-col items-start bg-gray-100 rounded-lg p-3 space-y-3">
            <div className="flex items-center bg-gray-100 rounded-lg p-3 space-x-3">
              <div className="text-2xl text-blue-600 bg-blue-100 p-2 rounded-full">
                {result.item.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{result.item.title}</h3>
              </div>

              <Link
                to={result.item.link}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm 
                  hover:bg-blue-600 transition-colors flex items-center space-x-1"
                rel="noopener noreferrer"
              >
                <span>Learn More</span>
              </Link>
            </div>

            {/* Course Video */}
            <div className="relative w-full max-w-md bg-gray-200 rounded-lg p-3">
              <video
                className="w-full h-auto rounded-lg"
                controls
                onClick={(e) => e.target.requestFullscreen()}
              >
                <source src={result.item.video} type="video/mp4" autoFocus />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ),
      }));
      setMessages((prev) => [...prev, ...courseMessages]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I couldn't find any courses related to your query.",
        },
      ]);
    }
  }, 500);

  setUserInput(""); // Clear input field
};

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 flex">
      {/* Chat Toggle Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 z-50"
        >
          <FaComment />
        </button>
      )}

      {/* Sidebar Chat Window */}
      <div
        className={`transform transition-transform duration-300 ease-in-out
          ${isChatOpen ? "translate-x-0" : "translate-x-full"}
          fixed inset-y-0 right-0 
          w-full md:w-1/2 lg:w-1/3 
          bg-white shadow-2xl 
          flex flex-col
        `}
      >
        {/* Chat Header */}
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaRobot className="text-2xl" />
            <h2 className="text-lg font-semibold">Course Finder</h2>
          </div>
          <button
            onClick={() => setIsChatOpen(false)}
            className="hover:bg-blue-600 p-2 rounded-full"
          >
            <FaTimes />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-grow overflow-y-auto p-4 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`${
                  message.sender === "bot"
                    ? "bg-gray-200 text-black"
                    : "bg-blue-500 text-white"
                } px-4 py-4 rounded-lg max-w-[90%]`}
              >
                {typeof message.text === "string" ? message.text : message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-gray-50 flex items-center space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for a course..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
