import { NavLink } from "react-router-dom";

const footerLinkClassName =
  "text-on-surface-variant dark:text-outline-variant hover:text-action-blue transition-colors duration-200";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low dark:bg-inverse-surface text-secondary dark:text-secondary-fixed font-body-md text-body-md full-width flat no shadows">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg py-section-padding-desktop px-gutter max-w-container-max mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              alt="Watertower Bible Church Logo"
              className="h-10 w-10 object-contain rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8bL4ym2YaRrzlAN5B6-EkmS34D3ZDhNV1gbl5cHNt7FYLwsvwvYE3vqHiWIBQVsQ2iGTlFSeEO_Qz4S-XFjC7M28F-G1wZg2x7b3xCJxd9wK9h5GOrz6Wf-M1tRpFcblT7VBuH-7ryu_n0cs8bt3Qrkav3tn_y04ncXywpKaftspx1aW-BB-9nmNsHi3-wyRPYIAifqkR0BetvA_6LUXGi6xkYVMHzcVLaeg-rS3t_RgY--zvxuMQAJLjpN0MTSo2ofgzfw8IZrWH"
            />
            <span className="font-headline-sm text-headline-sm text-trust-navy dark:text-surface-bright">
              Watertower Bible Church
            </span>
          </div>
          <p className="text-on-surface-variant text-[clamp(0.8125rem,0.7908rem+0.1087vw,0.875rem)] max-w-xs">
            A community gathered around Jesus in Kallangur. Come as you are.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a
              aria-label="Watertower Bible Church on Facebook"
              className="flex items-center justify-center h-9 w-9 rounded-full bg-surface-container-high dark:bg-surface-variant/20 text-trust-navy dark:text-surface-bright hover:bg-action-blue hover:text-on-primary transition-colors duration-200"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-[18px] w-[18px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
              </svg>
            </a>
            <a
              aria-label="Watertower Bible Church on Instagram"
              className="flex items-center justify-center h-9 w-9 rounded-full bg-surface-container-high dark:bg-surface-variant/20 text-trust-navy dark:text-surface-bright hover:bg-action-blue hover:text-on-primary transition-colors duration-200"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect height="20" rx="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <path d="M17.5 6.5h.01" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <span className="font-headline-sm text-headline-sm text-trust-navy dark:text-surface-bright">
            Quick Links
          </span>
          <nav className="flex flex-col gap-3">
            <NavLink className={footerLinkClassName} to="/" end>
              Home
            </NavLink>
            <NavLink className={footerLinkClassName} to="/new-here">
              Visit Us
            </NavLink>
            <NavLink className={footerLinkClassName} to="/about">
              About
            </NavLink>
            <NavLink className={footerLinkClassName} to="/contact-us">
              Contact
            </NavLink>
            <NavLink className={footerLinkClassName} to="/members-portal">
              Members Portal
            </NavLink>
          </nav>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <span className="font-headline-sm text-headline-sm text-trust-navy dark:text-surface-bright">
            Legal
          </span>
          <nav className="flex flex-col gap-3">
            <NavLink className={footerLinkClassName} to="/privacy-policy">
              Privacy Policy
            </NavLink>
            <NavLink className={footerLinkClassName} to="/terms-of-service">
              Terms of Service
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="border-t border-outline-variant/60">
        <div className="max-w-container-max mx-auto px-gutter py-6">
          <p className="text-on-surface-variant text-[clamp(0.8125rem,0.7908rem+0.1087vw,0.875rem)] text-center">
            © {year} Watertower Bible Church. All rights reserved. Built by MKW
            Design.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
