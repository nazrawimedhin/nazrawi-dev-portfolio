"use client";

import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [active, setActive] = useState("All");

  const categories = ["All", "Web Apps", "UI/UX"];

  const projects = [
    {
      title: "Dashboard App",
      category: "Web Apps",
      image: "/assets/project-1.png",
    },
    {
      title: "CRM System",
      category: "Web Apps",
      image: "/assets/project-2.png",
    },
    {
      title: "Real Estate UI",
      category: "UI/UX",
      image: "/assets/project-3.png",
    },
    {
      title: "Landing Page",
      category: "UI/UX",
      image: "/assets/project-4.png",
    },
  ];

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="bg-[#0f172a] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-white"></div>
              <div className="w-4 h-[2px] bg-white"></div>
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <p className="text-gray-400 uppercase text-sm tracking-widest">
                Projects
              </p>
            </div>

            <h2 className="text-4xl md:text-4xl font-bold text-green-400">
              My Creative Works
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-6 text-gray-400 text-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`hover:text-white transition ${
                  active === cat ? "text-white" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
