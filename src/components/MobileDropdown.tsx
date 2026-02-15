import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

interface NavLink {
  text: string;
  to: string;
}

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileDropdown({
  isOpen,
  onClose,
  links,
}: DropdownProps) {
  if (!isOpen) return null;
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      />

      {/* Sidebar */}
      <aside className="fixed top-0 right-0 h-screen w-[75%] max-w-sm bg-blue-900 text-white z-50 p-6 flex flex-col animate-slideIn">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold">Menu</h2>
          <X className="cursor-pointer hover:opacity-80" onClick={onClose} />
        </div>

        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              onClick={onClose}
              className="text-lg font-medium text-white/80 hover:text-white transition"
            >
              {link.text}
            </a>
          ))}

          <button
            onClick={() => navigate("/get-started")}
            className="bg-white text-blue-900 rounded-2xl px-6 py-2.5 font-medium shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300"
          >
            Get Started
          </button>
        </nav>
      </aside>
    </>
  );
}
