function ContactUs() {
  return (
    <section className="px-gutter max-w-container-max mx-auto flex items-center min-h-[calc(100vh-5rem)] py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg lg:gap-12 w-full">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(30,41,59,0.05)] border border-surface-variant">
          <h2 className="font-headline-md text-headline-md text-trust-navy mb-stack-lg">
            Send Us A Message
          </h2>
          <form action="#" className="space-y-6" method="POST">
            {/* Name Field */}
            <div>
              <label
                className="block font-label-md text-label-md text-trust-navy mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
              />
            </div>
            {/* Phone Field */}
            <div>
              <label
                className="block font-label-md text-label-md text-trust-navy mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                id="phone"
                name="phone"
                placeholder="04XX XXX XXX"
                type="tel"
              />
            </div>
            {/* Email Field */}
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
            {/* Message Field */}
            <div>
              <label
                className="block font-label-md text-label-md text-trust-navy mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                id="message"
                name="message"
                placeholder="How can we help you?"
                rows={5}
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              className="w-full md:w-auto bg-action-blue text-on-primary font-label-md text-label-md px-8 py-3 rounded-lg hover:bg-primary transition-colors flex items-center justify-center gap-2"
              type="submit"
            >
              <span className="">Send Message</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
        {/* Info Column (Address, Times, Map) */}
        <div className="lg:col-span-5 flex flex-col gap-stack-lg">
          {/* Contact Details Card */}
          <div className="bg-surface-container-low p-8 rounded-xl">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-action-blue text-2xl md:text-3xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  location_on
                </span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-1">
                    Visit Us
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    19 Marsden Rd, Kallangur, 4503
                  </p>
                </div>
              </div>
              {/* Service Times */}
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-action-blue text-2xl md:text-3xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  schedule
                </span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-1">
                    Service Times
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Sundays at 9:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="flex-1 min-h-64 bg-surface-variant rounded-xl overflow-hidden relative shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
            <iframe
              title="Map to 19 Marsden Rd, Kallangur"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=19+Marsden+Rd,+Kallangur,+QLD+4503,+Australia&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
