function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-inverse-surface text-secondary dark:text-secondary-fixed font-body-md text-body-md full-width bg-surface-container-low dark:bg-inverse-surface flat no shadows">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg py-section-padding-desktop px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-headline-sm text-headline-sm text-trust-navy dark:text-surface-bright">
            Watertower Bible Church
          </span>
          <p className="text-on-surface-variant text-sm mt-4">
            © 2026 Watertower Bible Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
