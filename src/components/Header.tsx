function Header() {
  return (
    <header className="bg-surface dark:bg-surface text-primary dark:text-primary-fixed font-label-md text-label-md docked full-width top-0 bg-surface dark:bg-surface flat no shadows w-full z-50 sticky transition-all duration-300 border-b border-surface-variant">
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <div className="flex items-center gap-4">
          <img
            alt="Watertower Bible Church Logo"
            className="h-10 w-10 object-contain rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8bL4ym2YaRrzlAN5B6-EkmS34D3ZDhNV1gbl5cHNt7FYLwsvwvYE3vqHiWIBQVsQ2iGTlFSeEO_Qz4S-XFjC7M28F-G1wZg2x7b3xCJxd9wK9h5GOrz6Wf-M1tRpFcblT7VBuH-7ryu_n0cs8bt3Qrkav3tn_y04ncXywpKaftspx1aW-BB-9nmNsHi3-wyRPYIAifqkR0BetvA_6LUXGi6xkYVMHzcVLaeg-rS3t_RgY--zvxuMQAJLjpN0MTSo2ofgzfw8IZrWH"
          />
          <span className="text-[clamp(1rem,1vw+0.75rem,1.25rem)] font-bold text-trust-navy dark:text-surface-bright">
            Watertower Bible Church
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="text-primary font-bold border-b-2 border-primary pb-1 Active: opacity-80 transition-opacity hover:text-action-blue transition-colors duration-200"
            href="#"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant hover:text-action-blue transition-colors duration-200"
            href="#"
          >
            New Here?
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant hover:text-action-blue transition-colors duration-200"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant hover:text-action-blue transition-colors duration-200"
            href="#"
          >
            Contact
          </a>
        </nav>
        <a
          className="hidden md:inline-flex bg-action-blue text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity"
          href="#"
        >
          Members Area
        </a>
        <button className="md:hidden text-trust-navy">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"FILL" 0' }}
          >
            menu
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
