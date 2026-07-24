import { FaCode, FaPencilRuler, FaMobileAlt, FaSearch } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Front-End Development",
      desc: "I bring website designs to life and ensure that they function seamlessly across various devices and browsers.",
      icon: <FaCode />,
    },
    {
      title: "Design to code",
      desc: "I translate design concepts into interactive user interfaces, refining typography, color schemes, and layouts.",
      icon: <FaPencilRuler />,
    },
    {
      title: "Responsive Design",
      desc: "I craft responsive websites that adapt smoothly to different screen sizes and devices.",
      icon: <FaMobileAlt />,
    },
    {
      title: "SEO",
      desc: "I integrate SEO best practices into development to improve visibility and drive organic traffic.",
      icon: <FaSearch />,
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-white"></div>
            <div className="w-4 h-[2px] bg-white"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <p className="text-gray-400 uppercase tracking-widest text-sm">
              My Services
            </p>
          </div>

          <h2 className="text-4xl md:text-4xl font-bold text-green-400">
            What Can I Do Best?
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative bg-black p-8 pt-14 rounded-lg hover:translate-y-[-5px] transition duration-300"
            >
              {/* ICON */}
              <div className="absolute -top-8 left-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl text-white shadow-lg">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              {/* SMALL LINE */}
              <div className="w-8 h-[3px] bg-green-400 mb-4"></div>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
