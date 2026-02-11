import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, link: "" },
    { icon: Twitter, link: "" },
    { icon: Instagram, link: "" },
    { icon: Linkedin, link: "" },
  ];

  const quickLinks = [
    { text: "Our Programs", link: "programs" },
    { text: "About Us", link: "about" },
    { text: "Testimonials", link: "testimonials" },
  ];

  const programs = [
    { title: "Web Development", link: "web-development" },
    { title: "Catering", link: "catering" },
    { title: "Fashion Designing", link: "fashion-design" },
    { title: "Graphics Design", link: "graphics-design" },
    { title: "Podcasting", link: "podcasting" },
    { title: "Real Estate", link: "real-estate" },
    { title: "Auto Khurizah", link: "auto-khurizah" },
    { title: "Data Analytics", link: "data-analytics" },
    { title: "Ghost Writing", link: "ghost-writing" },
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-slate-900 to-blue-950 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="text-center sm:text-left px-2 sm:px-0">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <span className="text-blue-500 text-2xl">✦</span>
              <h2 className="text-white text-xl font-semibold">
                Khurizah Innovation
              </h2>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Empowering you through skills and innovation. Transform your
              future with our world-class training programs.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              {socialLinks.map((obj, i) => {
                const Icon = obj.icon;
                return (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 hover:bg-blue-600 transition cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left px-2 sm:px-0">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-2 text-sm">
              {quickLinks.map((obj, i) => (
                <li
                  key={i}
                  className="py-1 hover:text-white transition cursor-pointer"
                >
                  <a href={`#${obj.link}`}>{obj.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center sm:text-left px-2 sm:px-0">
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-3 sm:space-y-2 text-sm">
              {programs.map((program, i) => (
                <li
                  key={i}
                  className="py-1 hover:text-white transition cursor-pointer"
                >
                  <Link to={`/program/${program.link}`}>{program.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left px-2 sm:px-0">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <span>
                  Plot 101B, Post Service Housing Estate, Ojo, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+234 8150458351</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>info@khurizahinnovation.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 my-14" />

        {/* Newsletter */}
        <div className="text-center max-w-2xl mx-auto px-2 sm:px-0">
          <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
            Stay Updated
          </h3>
          <p className="text-sm mb-6">
            Subscribe to our newsletter for the latest updates and exclusive
            offers
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-xl sm:rounded-full bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="w-full sm:w-auto px-8 py-3 rounded-xl sm:rounded-full bg-blue-600 hover:bg-blue-700 text-white transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left text-sm text-gray-400">
          <p>© 2026 Khurizah Innovation. All rights reserved.</p>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
