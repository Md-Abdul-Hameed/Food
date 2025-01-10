import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          Welcome to <span className="font-semibold">My Food Ordering App</span>
          , a project created to{" "}
          <span className="italic">showcase my skills in React</span>. My goal
          is to demonstrate my front-end development skills. In this project, I
          have implemented several optimization strategies, including lazy
          loading (code splitting), progressive image loading, and more.
        </p>

        <div className="text-center">
          <p className="text-base text-gray-800 font-semibold">
            Thank you for exploring this project{" "}
            <span className="italic">[Your Project Name]</span>.
          </p>
          <p className="text-base text-gray-700">
            I look forward to any feedback or opportunities to collaborate and
            further refine my skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
