import { events } from "../data/eventsContent";

function Events() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto">
      <div className="flex flex-col items-center gap-3 mb-stack-lg">
        <h2 className="font-headline-md text-headline-md text-trust-navy text-center">
          Upcoming Events
        </h2>
        <div className="w-20 h-1 bg-action-blue rounded-full" />
      </div>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {events.map((event) => (
          <div
            key={event.title}
            className="flex flex-col sm:flex-row gap-6 bg-surface rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(30,41,59,0.05)] border border-surface-variant/50 p-6"
          >
            <div className="w-full h-72 sm:w-96 sm:h-auto sm:min-h-80 shrink-0 rounded-lg bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-8xl">
                {event.icon}
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:justify-center">
              <h3 className="font-headline-sm text-headline-sm text-trust-navy">
                {event.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-secondary font-label-md text-label-md">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    event
                  </span>
                  {event.dateLabel}
                </span>
                {event.timeLabel && (
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      schedule
                    </span>
                    {event.timeLabel}
                  </span>
                )}
              </div>
              <p className="text-on-surface-variant font-body-md text-body-md">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
