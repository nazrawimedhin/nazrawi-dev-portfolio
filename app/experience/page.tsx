"use client";

import Image from "next/image";
import { FaBriefcase, FaBookOpen } from "react-icons/fa";

export default function Experience() {
  const timeline = [
    {
      date: "June 2024 - July 2025",
      title: "Website Developer / Ethio Robotics",
      description:
        "Designed and implemented responsive user interfaces using React.JS and Next.JS.",
      icon: <FaBriefcase />,
      color: "bg-green-400",
      textColor: "text-green-400",
    },
    {
      date: "May 2023 - Oct 2023",
      title: "Front-End Developer / Perago Systems",
      description:
        "Developed interactive web applications and integrated RESTful APIs to display dynamic data on web pages.",
      icon: <FaBriefcase />,
      color: "bg-green-400",
      textColor: "text-green-400",
    },
    {
      date: "Sept 2022 - June 2023",
      title: "Front-End Mentor / GDSC - AASTU",
      description:
        "Mentored junior developers by providing guidance on Front-End Development best practices and problem solving techniques.",
      icon: <FaBookOpen />,
      color: "bg-green-400",
      textColor: "text-green-400",
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-white"></div>
            <div className="w-4 h-[2px] bg-white"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>

            <p className="uppercase tracking-widest text-sm text-gray-400">
              Employment & Education
            </p>
          </div>

          <h2 className="text-4xl md:text-4xl font-bold text-green-400">
            My Experience Journey
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto">
          {/* LEFT IMAGE */}
          <div className="relative md:w-[400] md:h-[500] w-[300] h-[400] rounded-xl shadow-2xl justify-center items-center overflow-hidden mx-auto">
            <Image
              src="/assets/resume.png"
              alt="resume"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4.75 top-0 bottom-0 w-[3px] bg-white/80"></div>

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-24">
                  {/* ICON */}
                  <div
                    className={`absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-2xl text-white ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  {/* DATE */}
                  <h4 className={`text-sm font-bold mb-2 ${item.textColor}`}>
                    {item.date}
                  </h4>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold mb-6 leading-snug">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 leading-relaxed text-md">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
