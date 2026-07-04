function HowToFindUs() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface-container-low">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-container-max mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="font-headline-md text-headline-md text-trust-navy">
            How to Find Us
          </h2>
          <div className="w-20 h-1 bg-action-blue rounded-full"></div>
          <p className="font-body-lg text-body-md text-on-surface-variant leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget velit nulla. Phasellus vitae dui eleifend leo ultrices
            consequat quis vitae lorem. Vivamus quis sapien felis. Sed nec
            turpis a diam luctus tempor. Praesent in laoreet enim. Donec iaculis
            sagittis turpis ac lobortis.
          </p>
          <div className="flex items-start gap-3 mt-2">
            <span className="material-symbols-outlined text-action-blue mt-1">
              location_on
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              19 Marsden Rd, Kallangur
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-action-blue mt-1">
              local_parking
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              Street parking available for all guests. <br />
              Strictly no onsite parking.
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
            <img
              alt="Watertower Bible Church Building"
              className="w-full h-full object-cover"
              src="home/pexels-jm-sena-247861576-35824577.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToFindUs;
