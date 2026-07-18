import { useEffect } from "react";
import { X } from "lucide-react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Button from "../ui/Button";

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10 shadow-xl">
        <div className="flex items-center justify-between px-4 py-4">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="px-4 py-4 border-t border-gray-100 dark:border-white/5">
          <NavLinks mobile onClose={onClose} />
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#"
              className="w-full text-center px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={onClose}
            >
              Sign in
            </a>
            <Button variant="primary" size="sm" className="w-full justify-center">
              Get started free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
