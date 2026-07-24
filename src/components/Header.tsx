import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-200"
    : "text-on-surface-variant dark:text-outline-variant hover:text-action-blue transition-colors duration-200";

const mobileNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-primary font-bold text-2xl"
    : "text-on-surface-variant dark:text-outline-variant hover:text-action-blue transition-colors duration-200 text-2xl";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-surface dark:bg-surface text-primary dark:text-primary-fixed font-label-md text-label-md docked full-width top-0 bg-surface dark:bg-surface flat no shadows w-full z-50 sticky transition-all duration-300 border-b border-surface-variant">
      <div className="relative z-50 flex md:grid md:grid-cols-[1fr_auto_1fr] justify-between items-center w-full px-gutter md:px-16 h-20 bg-surface dark:bg-surface">
        <div className="flex items-center gap-4">
          <img
            alt="Watertower Bible Church Logo"
            className="h-10 w-10 object-contain rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8bL4ym2YaRrzlAN5B6-EkmS34D3ZDhNV1gbl5cHNt7FYLwsvwvYE3vqHiWIBQVsQ2iGTlFSeEO_Qz4S-XFjC7M28F-G1wZg2x7b3xCJxd9wK9h5GOrz6Wf-M1tRpFcblT7VBuH-7ryu_n0cs8bt3Qrkav3tn_y04ncXywpKaftspx1aW-BB-9nmNsHi3-wyRPYIAifqkR0BetvA_6LUXGi6xkYVMHzcVLaeg-rS3t_RgY--zvxuMQAJLjpN0MTSo2ofgzfw8IZrWH"
          />
          <span className="text-[clamp(1rem,0.95rem+0.15vw,1.1rem)] 2xl:text-[1.25rem] font-bold text-trust-navy dark:text-surface-bright">
            Watertower Bible Church
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center justify-self-center">
          <NavLink className={navLinkClassName} to="/" end>
            Home
          </NavLink>
          <NavLink className={navLinkClassName} to="/new-here">
            Visit Us
          </NavLink>
          <NavLink className={navLinkClassName} to="/about">
            About
          </NavLink>
          <NavLink className={navLinkClassName} to="/contact-us">
            Contact
          </NavLink>
        </nav>
        <form
          className="hidden md:flex items-center gap-2 justify-self-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="hidden 2xl:inline-flex material-symbols-outlined text-trust-navy text-[22px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              person
            </span>
            <input
              aria-label="Username"
              className="w-28 2xl:w-40 bg-surface border border-outline-variant rounded-full px-3 py-2 text-xs 2xl:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
              name="username"
              placeholder="Username"
              type="text"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="hidden 2xl:inline-flex material-symbols-outlined text-trust-navy text-[22px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <input
              aria-label="Password"
              className="w-28 2xl:w-40 bg-surface border border-outline-variant rounded-full px-3 py-2 text-xs 2xl:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <button
            className="bg-action-blue text-on-primary px-4 py-2 rounded-full font-label-md text-xs 2xl:text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-trust-navy z-50"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"FILL" 0' }}
          >
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div
        className={`fixed top-20 left-0 right-0 z-40 h-[calc(100vh-5rem)] w-full bg-surface dark:bg-surface md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-8 h-full">
          <NavLink
            className={mobileNavLinkClassName}
            to="/"
            end
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={mobileNavLinkClassName}
            to="/new-here"
            onClick={() => setIsMenuOpen(false)}
          >
            Visit Us
          </NavLink>
          <NavLink
            className={mobileNavLinkClassName}
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={mobileNavLinkClassName}
            to="/contact-us"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <a
            className="inline-flex bg-action-blue text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Members Portal
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
