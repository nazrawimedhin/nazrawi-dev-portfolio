"use client";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { DiPhotoshop } from "react-icons/di";
import { FaCss3, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandAdobeXd, TbBrandBulma, TbCircleLetterC } from "react-icons/tb";

export default function Skills() {
  const languages = [
    {
      name: "Typescript",
      value: "100%",
      icon: <BsTypescript />,
    },
    {
      name: "Javascript",
      value: "100%",
      icon: <BsJavascript />,
    },
    {
      name: "HTML5",
      value: "100%",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      value: "100%",
      icon: <FaCss3 />,
    },
  ];

  const libraries = [
    {
      name: "React",
      value: "100%",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      value: "100%",
      icon: <RiNextjsLine />,
    },
    {
      name: "Tailwind CSS",
      value: "100%",
      icon: <RiTailwindCssLine />,
    },
    {
      name: "Bulma",
      value: "100%",
      icon: <TbBrandBulma />,
    },
  ];

  const design_tools = [
    {
      name: "Figma",
      value: "100%",
      icon: <FaFigma />,
    },
    {
      name: "Photoshop",
      value: "100%",
      icon: <DiPhotoshop />,
    },
    {
      name: "XD",
      value: "100%",
      icon: <TbBrandAdobeXd />,
    },
    {
      name: "Canva",
      value: "100%",
      icon: <TbCircleLetterC />,
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-15">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Top label */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-white"></div>
            <div className="w-4 h-[2px] bg-white"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <p className="text-gray-400 uppercase text-sm tracking-widest">
              Expertise
            </p>
          </div>

          <h2 className="text-4xl md:text-4xl font-bold text-green-400">
            My Skills
          </h2>

          <h3 className="text-lg font-semibold text-gray-200">
            Crafting Seamless Experiences: Front-End Mastery in React, Next.js,
            and More!
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I excel in building dynamic user interfaces using React's
            component-based architecture.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I'm proficient in API integration, state management, and optimizing
            performance through code splitting.
          </p>

          <button className="px-6 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition">
            Hire Me
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">
          <div>
            <p className="pt-12 font-bold text-green-400">Languages</p>
            <div className="text-white py-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 place-items-center">
                  {languages.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Circle */}
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        {/* Orange Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-green-400"></div>

                        {/* Inner Circle */}
                        <div className="w-7 h-7 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                          {/* Icon */}
                          <div className="text-2xl text-gray-400 group-hover:text-white transition">
                            {skill.icon}
                          </div>
                        </div>
                      </div>

                      {/* Label */}
                      <p className="text-1xl text-gray-400 font-semibold mt-1">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-bold text-green-400">Libraries</p>
            <div className="text-white py-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 place-items-center">
                  {libraries.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Circle */}
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        {/* Orange Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-green-400"></div>

                        {/* Inner Circle */}
                        <div className="w-7 h-7 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                          {/* Icon */}
                          <div className="text-2xl text-gray-400 group-hover:text-white transition">
                            {skill.icon}
                          </div>
                        </div>
                      </div>

                      {/* Label */}
                      <p className="text-1xl text-gray-400 font-semibold mt-1">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-bold text-green-400">Design Tools</p>
            <div className="text-white py-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 place-items-center">
                  {design_tools.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Circle */}
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        {/* Orange Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-green-400"></div>

                        {/* Inner Circle */}
                        <div className="w-7 h-7 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                          {/* Icon */}
                          <div className="text-2xl text-gray-400 group-hover:text-white transition">
                            {skill.icon}
                          </div>
                        </div>
                      </div>

                      {/* Label */}
                      <p className="text-1xl text-gray-400 font-semibold mt-1">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
