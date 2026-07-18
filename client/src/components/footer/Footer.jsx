
import Logo from "../navigation/Logo";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const footerLinks = {
  Product: ["Features", "Changelog", "Roadmap", "Pricing", "Security", "Status"],
  Company: ["About", "Blog", "Careers", "Press", "Partners", "Contact"],
  Developers: ["API Reference", "Documentation", "SDKs", "Webhooks", "CLI", "Open Source"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "DPA", "GDPR"],
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              The modern collaboration platform built for teams that value speed, clarity, and
              communication.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://github.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-violet-500 border border-white/10 hover:border-violet-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-violet-500 border border-white/10 hover:border-violet-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="https://x.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-violet-500 border border-white/10 hover:border-violet-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaXTwitter size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Kizuna, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
