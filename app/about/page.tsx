export default function About() {
  const stats = [
    { label: "Happy Clients", value: "11+" },
    { label: "Projects Done", value: "13+" },
    { label: "Projects Progress", value: "4+" },
    { label: "Working Hours", value: "6K+" },
  ];

  return (
    <section className="relative bg-[#0f172a] text-white py-10 overflow-hidden">
      {/* Heading */}
      <div className="justify-items-center">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <h3 className="uppercase text-md tracking-widest text-gray-400">
            About Me
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24 justify-center">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-2 gap-12 relative">
          {/* Card */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              <div className="w-40 h-40 bg-black rounded-full flex items-center justify-center text-center">
                <h3 className="font-semibold text-xl">{stat.label}</h3>
              </div>
              <span className="absolute -top-2 left-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-md font-medium">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-lg space-y-6">
          <div>
            <h2 className="text-4xl font-bold leading-snug text-green-400">
              Fullstack developer and
            </h2>
            <h2 className="text-4xl font-bold leading-snug text-green-400">
              AWS Engineer
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            I take the time to deeply understand my clients' requirements and
            always deliver projects on time.
          </p>

          {/* Button */}
          <button className="px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
