"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#0f172a] text-white  min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-6">
          <Image
            className="w-40 h-auto pb-15"
            src="/assets/profile-icon-2-no-bg.png"
            width={45}
            height={45}
            alt="Profile"
          />

          {/* Small heading */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-10 h-[2px] bg-white"></div>
            <div className="w-4 h-[2px] bg-white"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <p className="text-gray-300 font-medium">Welcome to my portfolio</p>
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold">Nazrawi Munea</h1>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed">
            A Front-End Web Developer with good knowledge of web technologies
            and a decent amount of experience in developing web applications.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-gray-200 text-black rounded-md hover:bg-white transition">
              About Me
            </button>

            <button className="px-6 py-3 bg-green-500 rounded-md hover:bg-green-600 transition">
              Hire Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div>
          <div className="flex space-x-12 pb-8">
            <Link href="/about" className="text-green-600 font-semibold">
              About
            </Link>
            <Link href="/projects" className="text-green-600 font-semibold">
              Projects
            </Link>
            <Link href="/skills" className="text-green-600 font-semibold">
              Skills
            </Link>
            <Link href="/contact" className="text-green-600 font-semibold">
              Contact
            </Link>
          </div>

          <div className="relative flex items-center justify-center gap-8 mt-8">
            {/* Profile Image */}
            <div className="relative w-80 h-80 overflow-hidden">
              <Image
                src="/assets/profile.png"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>

            {/* Social Icons */}
            <div className="absolute right-[-90px] flex flex-col gap-6">
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaGithub />} />
              <SocialIcon icon={<FaTwitter />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Social Button */
function SocialIcon({ icon }) {
  return (
    <div className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition cursor-pointer">
      {icon}
    </div>
  );
}
