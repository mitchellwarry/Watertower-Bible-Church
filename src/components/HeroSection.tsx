import { Link } from "react-router-dom";

interface HeroSectionProps {
  variant: "home" | "about";
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
  scheduleTime: string;
  locationValue: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

function HeroSection({
  variant,
  imageSrc,
  imageAlt,
  title,
  description,
  scheduleTime,
  locationValue,
  cta,
  secondaryCta,
}: HeroSectionProps) {
  const isHome = variant === "home";

  return (
    <section className="relative w-full h-[60vh] md:h-[50vh] mb-28 flex items-center justify-center bg-on-surface text-on-primary">
      {isHome ? (
        <>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 z-0 w-full h-full object-cover object-[center_65%]"
          />
          <div className="absolute inset-0 z-[5] bg-on-surface/55" />
        </>
      ) : imageSrc ? (
        <div
          role="img"
          aria-label={imageAlt}
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-on-surface" />
      )}
      <div className="relative z-10 text-center px-gutter max-w-3xl mx-auto flex flex-col items-center gap-stack-lg pt-16 pb-24 md:pt-0 md:pb-0">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg">
          {title.split("\n").map((line, index, lines) => (
            <span
              key={index}
              className={index > 0 ? "text-action-blue" : undefined}
            >
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="font-body-lg text-body-lg max-w-2xl text-surface-container-high">
          {description}
        </p>
        {cta && (
          <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
            <a
              className="bg-action-blue text-on-primary w-56 text-center px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity shadow-lg"
              href={cta.href}
            >
              {cta.label}
            </a>
            {secondaryCta && (
              <Link
                className="bg-white text-trust-navy w-56 text-center px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity shadow-lg"
                to={secondaryCta.href}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
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
            <p className="font-label-md text-label-md tracking-wide font-semibold text-on-surface-variant">
              Sundays
            </p>
            <p className="font-headline-sm text-headline-sm font-semibold">
              {scheduleTime}
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
            <p className="font-label-md text-label-md tracking-wide font-semibold text-on-surface-variant">
              Gathering At
            </p>
            <p className="font-headline-sm text-[clamp(1rem,0.913rem+0.4348vw,1.25rem)] font-semibold">
              {locationValue}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
