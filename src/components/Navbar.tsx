import { NavLink } from "react-router-dom";
import { Helicopter } from "lucide-react";

interface Link {
  text: string;
  to: string;
}

export default function Navbar() {
  const links: Link[] = [
    { text: "Programs", to: "/programs" },
    { text: "About", to: "/about" },
    { text: "Testimonials", to: "/testimonials" },
    { text: "Contact", to: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-50 max-w-[1400px] mx-auto text-white py-5 px-6 flex items-center justify-between backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="flex items-center gap-2 group">
        <Helicopter className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
        <span className="text-2xl font-semibold tracking-tight">
          Khurizah Innovation
        </span>
      </div>

      <ul className="flex gap-8">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `
          text-lg font-medium transition-colors duration-300
          ${isActive ? "text-blue-200" : "text-white/80 hover:text-white"}
          `
            }
          >
            {link.text}
          </NavLink>
        ))}
      </ul>

      <button className="bg-white text-blue-900 rounded-2xl px-6 py-2.5 font-medium shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300">
        Sign Up
      </button>
    </header>
  );
}
