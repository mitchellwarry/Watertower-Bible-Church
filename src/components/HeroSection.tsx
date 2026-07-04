function HeroSection() {
  return (
    <section className="relative w-full md:h-[50vh] flex items-center justify-center bg-trust-navy text-on-primary mb-28">
      <img
        src={`${import.meta.env.BASE_URL}home/cq5dam.web.1280.1280.jpeg`}
        alt="A wide, sweeping photograph of a welcoming church community gathering in a bright, modern sanctuary filled with natural light. The aesthetic is clean, warm, and corporate-chic, featuring soft lighting and a modern, minimalist interior that feels inviting and fresh. Groups of diverse people are interacting joyfully, reflecting a trustworthy and radiant community atmosphere. The overall mood is open, engaging, and professional."
        className="absolute inset-0 z-0 w-full h-full object-cover object-[center_65%]"
      />
      <div className="absolute inset-0 z-[5] bg-black/45" />
      <div className="relative z-10 text-center px-gutter max-w-3xl mx-auto flex flex-col items-center gap-stack-lg pt-16 pb-24 md:pt-0 md:pb-0">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg">
          Welcome to Watertower
        </h1>
        <p className="font-body-lg text-body-lg max-w-2xl text-surface-container-high">
          A community-focused, trustworthy space where you can come as you are.
          Join us this Sunday.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
          <a
            className="bg-action-blue text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity shadow-lg"
            href="#"
          >
            New Here?
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 top-full -translate-y-1/2 md:top-auto md:-bottom-12 md:translate-y-0 transform -translate-x-1/2 w-11/12 max-w-4xl bg-surface rounded-xl shadow-xl p-3 md:p-6 flex flex-col md:flex-row justify-around items-center gap-4 md:gap-6 z-20">
        <div className="flex items-center gap-4 text-trust-navy">
          <span
            className="material-symbols-outlined text-action-blue text-2xl md:text-3xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            schedule
          </span>
          <div>
            <p className="font-label-md text-xs tracking-wide font-semibold text-on-surface-variant md:text-label-md">
              Sundays
            </p>
            <p className="font-headline-sm text-xl font-semibold md:text-headline-sm">
              9:00 AM
            </p>
          </div>
        </div>
        <div className="hidden md:block w-px h-12 bg-surface-variant" />
        <div className="flex items-center gap-4 text-trust-navy">
          <span
            className="material-symbols-outlined text-action-blue text-2xl md:text-3xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            location_on
          </span>
          <div>
            <p className="font-label-md text-xs tracking-wide font-semibold text-on-surface-variant md:text-label-md">
              Gathering At
            </p>
            <p className="font-headline-sm text-base font-semibold md:text-xl">
              19 Marsden Rd, Kallangur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
