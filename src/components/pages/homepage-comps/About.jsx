import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            About me
          </h2>
        </div>

        <p className="mb-4 py-6">
          I'm a Frontend Engineer based out of India with 5+ years of experience
          focused on creating beautiful, functional, and scalable web
          applications. I like to experiment with new technologies and I'm
          always open to exploring new ideas. Skilled in technologies like
          React, Redux, Javascript, HTML5/CSS3, Sass, Bootstrap. Also have good
          amount of experience working in technologies like - Golang, Android,
          Python, Java, MySQL, MongoDB, RabbitMQ, and REST API Development.
        </p>

        <p>
          Currently, I'm working with AlphaSense as a Senior Software Engineer.
          Prevously, I have worked with Dell Technologies (Isilon). I have did
          my Bachelors in Computer Science from Delhi University and Masters
          from IIIT, Delhi.
        </p>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
