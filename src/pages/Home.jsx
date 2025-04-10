// Home.jsx – Enhanced Visuals with Icon-Based Skills and Improved Typography
import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/images/profile-pic.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiAdobephotoshop, SiJquery } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 className="text-orange-500 w-8 h-8" />, label: 'HTML5' },
  { icon: <FaCss3Alt className="text-indigo-500 w-8 h-8" />, label: 'CSS3' },
  { icon: <FaJs className="text-yellow-400 w-8 h-8" />, label: 'JavaScript' },
  { icon: <FaReact className="text-cyan-400 w-8 h-8" />, label: 'React' },
  { icon: <SiJquery className="text-indigo-400 w-8 h-8" />, label: 'jQuery' },
  { icon: <FaBootstrap className="text-purple-500 w-8 h-8" />, label: 'Bootstrap' },
  { icon: <SiTailwindcss className="text-teal-400 w-8 h-8" />, label: 'Tailwind CSS' },
  { icon: <SiAdobephotoshop className="text-indigo-700 w-8 h-8" />, label: 'Photoshop' },
  { icon: <FaGitAlt className="text-red-500 w-8 h-8" />, label: 'Git' },
];

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 md:px-20 bg-gradient-to-tr from-purple-100 via-white to-indigo-100 dark:from-gray-600 dark:via-gray-800 dark:to-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">
          <div className="text-center md:text-left flex-1 space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight dark:text-white">
              Hi, I'm <span className="text-indigo-700 dark:text-indigo-400">Pradeep Parkhande</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-indigo-800 dark:text-indigo-300">
              Front-End Engineering Manager / UI Developer
            </p>
            <p className="text-gray-700 dark:text-white max-w-2xl">
              Crafting UI magic with over 15 years of experience in HTML, CSS, jQuery, and React. Precision, performance, and perfect pixels are my daily mantra.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md inline-block">View Projects</Link>
              <a href="/Resume_PradeepParkhande.pdf" target="_blank" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-gray-800 px-6 py-3 rounded-full inline-block">Download Resume</a>
            </div>
          </div>
          <div className="w-full max-w-[320px] flex justify-end">
            <img src={profilePic} alt="Pradeep" className="w-[220px] h-auto object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 md:px-20 bg-white text-center space-y-6 dark:bg-gray-600">
        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-white">With over 15 years of UI development experience, I blend creativity with code to build seamless, responsive, and user-friendly web interfaces. My focus is performance, accessibility, and elegant design systems.</p>
        <Link to="/about-us" className="inline-block mt-4 text-indigo-600 font-semibold underline dark:text-indigo-400">Know More</Link>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center space-y-8 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md text-left hover:shadow-xl transition duration-300 border-t-4 border-indigo-400 dark:bg-gray-600">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Future Generali – Insurance UI</h3>
            <p className="text-gray-600 mt-2 dark:text-gray-300">Built responsive, jQuery-integrated UI for seamless insurance policy flows. Mobile-optimized and performance-tuned for real users.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-left hover:shadow-xl transition duration-300 border-t-4 border-indigo-400 dark:bg-gray-600">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">HDFC Bank Website</h3>
            <p className="text-gray-600 mt-2 dark:text-gray-300">Developed W3C-compliant templates with jQuery calculators and cross-browser compatibility. Delivered enterprise-grade front-end systems.</p>
          </div>
        </div>
        <Link to="/projects" className="inline-block mt-4 text-indigo-600 font-semibold underline">View All Projects</Link>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-6 md:px-20 bg-white text-center space-y-8 dark:bg-gray-600">
        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skills.map(({ icon, label }) => (
            <div key={label} className="relative group">
              <div className="bg-gray-100 border border-gray-300 rounded-full p-4 shadow-md hover:shadow-xl transition transform hover:scale-110">
                {icon}
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-indigo-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {label}
              </div>
            </div>
          ))}
        </div>
        <Link to="/skills" className="inline-block mt-4 text-indigo-600 font-semibold underline dark:text-indigo-400">Explore Skills</Link>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-100 via-white to-purple-100 text-center space-y-6 dark:from-gray-600 dark:via-gray-800 dark:to-gray-800">
        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300">Let's Connect</h2>
        <p className="text-gray-700 dark:text-gray-300">Want to collaborate or have something in mind? I'm always open to great ideas and new opportunities.</p>
        <Link to="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md">Contact Me</Link>
      </section>
    </div>
  );
};

export default Home;
