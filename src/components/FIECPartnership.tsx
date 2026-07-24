function FIECPartnership() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-warm-gray border-t border-surface-variant/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-surface p-8 rounded-xl shadow-[0_4px_20px_rgba(30,41,59,0.05)] border border-surface-variant/50 flex items-center justify-center h-64">
              <div className="text-center">
                <h3 className="font-display-lg text-display-lg text-trust-navy mb-2">
                  FIEC
                </h3>
                <p className="font-label-md text-label-md text-secondary tracking-widest uppercase">
                  Affiliated Church
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-3">
              <h2 className="font-headline-md text-headline-md text-trust-navy">
                Our Affiliation
              </h2>
              <div className="w-20 h-1 bg-action-blue rounded-full" />
            </div>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam.
            </p>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">
                  check_circle
                </span>
                <span className="text-on-surface-variant">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">
                  check_circle
                </span>
                <span className="text-on-surface-variant">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">
                  check_circle
                </span>
                <span className="text-on-surface-variant">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
            </ul>
            <a
              className="inline-flex items-center gap-2 text-action-blue hover:text-primary font-label-md text-label-md transition-colors mt-4"
              href="https://www.fiec.org.au/"
            >
              Learn more about FIEC
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FIECPartnership;
