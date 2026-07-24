function CTAForm() {
  return (
    <section
      className="bg-trust-navy py-section-padding-mobile md:py-section-padding-desktop relative overflow-hidden"
      id="get-in-touch"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="text-surface flex flex-col justify-center">
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-6">
            Let us know you're coming.
          </h2>
          <p className="font-body-lg text-body-lg text-surface-dim mb-8 max-w-md">
            Visiting a new place can be daunting. Fill out the form, and someone
            from our welcome team will meet you at the door, show you around,
            and save you a seat.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-surface-bright">
                  schedule
                </span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-surface-bright">
                  Sundays at 9:00 AM
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-surface-bright">
                  location_on
                </span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-surface-bright">
                  19 Marsden Rd, Kallangur
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-2xl">
          <form action="#" className="space-y-6" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block font-label-md text-label-md text-trust-navy mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block font-label-md text-label-md text-trust-navy mb-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className="block font-label-md text-label-md text-trust-navy mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                id="email"
                name="email"
                placeholder="name@example.com.au"
                type="email"
              />
            </div>
            <div>
              <label
                className="block font-label-md text-label-md text-trust-navy mb-2"
                htmlFor="date"
              >
                When are you planning to visit?
              </label>
              <input
                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-trust-navy focus:border-transparent transition-shadow"
                id="date"
                name="date"
                type="date"
              />
            </div>
            <div className="flex items-start gap-3 mt-4">
              <input
                className="mt-1 w-5 h-5 rounded border-outline-variant bg-surface accent-trust-navy focus:ring-trust-navy"
                id="kids"
                type="checkbox"
              />
              <label className="text-sm text-on-surface-variant" htmlFor="kids">
                I will be bringing children who might join the Kids Program.
              </label>
            </div>
            <div>
              <label
                className="block font-label-md text-label-md text-trust-navy mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-trust-navy focus:border-transparent transition-shadow resize-none"
                id="message"
                name="message"
                placeholder="Anything you'd like us to know before you visit?"
                rows={4}
              />
            </div>
            <button
              className="w-full bg-action-blue hover:bg-primary text-on-primary font-label-md text-label-md py-4 rounded-lg transition-colors duration-200 mt-4 shadow-lg shadow-action-blue/20"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTAForm;
