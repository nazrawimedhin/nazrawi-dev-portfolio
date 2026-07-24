import Link from "next/link";

export default function Footer() {
    return (
        <footer className="justify-items-center bg-linear-to-r from-[#111827] to-[#1b2433] text-white">
            <h2 className="py-10 text-4xl font-extrabold text-green-400">
                Nazrawi
            </h2>

            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Solutions */}
                    <div className="text-center">
                        <h3 className="mb-8 text-2xl font-bold">Solutions</h3>

                        <ul className="space-y-5 text-gray-400 text-md">
                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Scalability &amp; Efficiency
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Supported by Experts
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Performance &amp; Security
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="text-center">

                        <h3 className="mb-8 text-2xl font-bold">Resources</h3>

                        <ul className="space-y-5 text-gray-400 text-md">
                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Blogs
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Researches
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    I'm a Client
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Career */}
                    <div className="text-center">
                        <h3 className="mb-8 text-2xl font-bold">Career</h3>

                        <ul className="space-y-5 text-gray-400 text-md">
                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Experiences
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Education
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Skill Sets
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center">
                        <h3 className="mb-8 text-2xl font-bold">Contact</h3>

                        <ul className="space-y-5 text-gray-400 text-md">
                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    (713)-412-7219
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    nazrawimedhin1@gmail.com
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="hover:text-green-400 transition">
                                    Seattle, WA
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Divider */}
                <div className="mt-5 border-t border-white/10 py-5 text-center text-gray-500">
                    © {new Date().getFullYear()} Nazrawi. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
