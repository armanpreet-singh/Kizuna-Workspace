
const links = [
  { label: "Features", href: "#features" },
  { label: "Why Kizuna", href: "#why-kizuna" },
  { label: "Preview", href: "#preview" },
  { label: "Testimonials", href: "#testimonials" },
];

const NavLinks = ({ mobile = false, onClose }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (onClose) onClose();
  };

  if (mobile) {
    return (
      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-1">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
