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
    <header className="max-w-[1400px] mx-auto text-white py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Helicopter />
        <span className="text-2xl font-base">Khurizah Innovation</span>
      </div>

      <ul className="flex gap-8">
        {links.map((link) => (
          <NavLink to={link.to} className="text-lg hover:text-blue-100">
            {link.text}
          </NavLink>
        ))}
      </ul>

      <button className="bg-white text-blue-800 rounded-2xl px-4 py-2 hover:text-blue-900 hover:bg-blue-100 transition">
        Sign Up
      </button>
    </header>
  );
}
