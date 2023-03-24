import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              My name is Ryan Salah and I'm a full-stack developer, graphic
              designer, and educational coach.
            </p>
          </div>
          <div>
            <p>
              I have over 7 years of experience in the industry and I'm
              passionate about creating engaging digital experiences for
              clients. My skills include HTML, CSS, JavaScript, React, Node.js,
              and graphic design. As an educational coach, I also have a deep
              understanding of how people learn and how to create effective
              educational experiences. Check out my portfolio to see some
              examples of my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
