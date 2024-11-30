import React from "react";
import DynamicHero from "../components/dynamicHero";

const BlogCard = ({ image, author, date, comments, title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <div className="relative">
        <img
          src={image}
          alt="Blog Post"
          className="w-full h-48 md:h-52 object-cover"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between space-x-2 mb-6">
          <span className="text-xs text-teal-600">{author}</span>
          <span className="text-xs text-teal-600">{date}</span>
          <span className="text-xs text-teal-600">{comments} COMMENTS</span>
        </div>
        <h2 className="text-lg md:text-lg font-medium mb-2 hover:text-teal-600 cursor-pointer">
          {title}
        </h2>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const blogPosts = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661436185717-f779de991178?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
    author: "ADMIN",
    date: "JAN. 18, 2021",
    comments: 3,
    title: "Build your Dream Software & Engineering Career",
    content:
      "A small river named Duden flows by their place and supplies it with the necessary regelalia.",
  },
  {
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg",
    author: "ADMIN",
    date: "APR. 25, 2022",
    comments: 5,
    title: "Build your Dream Software & Engineering Career",
    content:
      "A small river named Duden flows by their place and supplies it with the necessary regelalia.",
  },
  {
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg",
    author: "USER",
    date: "MAY. 15, 2022",
    comments: 10,
    title: "Build your Dream Software & Engineering Career",
    content:
      "A small river named Duden flows by their place and supplies it with the necessary regelalia.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "EDITOR",
    date: "JUL. 10, 2023",
    comments: 7,
    title: "How to Start a Successful Blog in 2023",
    content:
      "Learn the steps to create and grow your blog while attracting readers and building a community.",
  },
  {
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
    author: "ADMIN",
    date: "FEB. 5, 2023",
    comments: 2,
    title: "Mastering the Art of Remote Work",
    content:
      "Discover tips and tools to stay productive and connected while working from home.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    author: "GUEST",
    date: "MAR. 3, 2023",
    comments: 4,
    title: "Top Trends in Software Development",
    content:
      "Explore the latest trends and technologies shaping the future of software development.",
  },
  {
    image: "https://images.pexels.com/photos/3771090/pexels-photo-3771090.jpeg",
    author: "ADMIN",
    date: "AUG. 20, 2023",
    comments: 6,
    title: "Boost Your Creativity with Simple Techniques",
    content:
      "Unlock your creative potential with exercises and methods to think outside the box.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    author: "TEAM",
    date: "OCT. 1, 2023",
    comments: 8,
    title: "The Importance of Team Collaboration in Projects",
    content:
      "Discover why teamwork is essential for project success and how to foster effective collaboration.",
  },
  {
    image: "https://images.pexels.com/photos/3568544/pexels-photo-3568544.jpeg",
    author: "ADMIN",
    date: "NOV. 15, 2023",
    comments: 9,
    title: "Understanding the Basics of Machine Learning",
    content:
      "A beginner-friendly guide to understanding the principles and applications of machine learning.",
  },
];

const Blogs = () => {
  return (
    <div>
      <DynamicHero
        title="Discover Inspiring Stories & Insights"
        description="Explore our latest blog posts, packed with tips, stories, and insights to spark your creativity and keep you informed."
        image="https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="bg-gray-50 py-10 md:py-16 px-4 md:px-8 sm:px-24">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              author={post.author}
              date={post.date}
              comments={post.comments}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
