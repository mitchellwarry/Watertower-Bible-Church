import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FAQs from "../components/FAQs";
import CTAForm from "../components/CTAForm";
import HowToFindUs from "../components/HowToFindUs";
import LatestSermons from "../components/LatestSermons";
import LeadershipTeam from "../components/LeadershipTeam";
import { heroContent } from "../data/heroContent";
import { faqContent } from "../data/faqContent";

const sundayTimeline = [
  {
    time: "8:30 AM",
    title: "Doors Open",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
    icon: "door_open",
  },
  {
    time: "9:00 AM",
    title: "Service Starts",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icon: "schedule",
  },
  {
    time: "9:10 AM",
    title: "Singing",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    icon: "music_note",
  },
  {
    time: "10:00 AM",
    title: "Sermon",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
    icon: "menu_book",
  },
  {
    time: "11:00 AM",
    title: "Closing Singing",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    icon: "music_note",
  },
  {
    time: "11:10 AM",
    title: "Morning Tea & Coffee",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
    icon: "coffee",
  },
];

function NewHere() {
  return (
    <>
      <HeroSection {...heroContent.newHere} />
      {/* New to Church Section */}
      <section className="bg-surface py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md text-trust-navy mb-stack-sm">
              New to Church, or Just New to Us?
            </h2>
            <div className="w-20 h-1 bg-action-blue rounded-full mx-auto mb-4" />
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  menu_book
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-3">
                Bible-Centered
              </h3>
              <p className="text-on-surface-variant text-body-md font-body-md">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  favorite
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-3">
                Warm Welcome
              </h3>
              <p className="text-on-surface-variant text-body-md font-body-md">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center text-tertiary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  diversity_3
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-3">
                Genuine Community
              </h3>
              <p className="text-on-surface-variant text-body-md font-body-md">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Sunday Timeline Section */}
      <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-trust-navy mb-stack-sm">
              A Typical Sunday
            </h2>
            <div className="w-20 h-1 bg-action-blue rounded-full mx-auto mb-4" />
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Not sure what to expect? Here's how our Sunday morning gathering
              unfolds from start to finish.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-surface-variant md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-4">
              {sundayTimeline.map((item, index) => (
                <div
                  key={item.time}
                  className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-1.5 md:left-1/2 md:top-1/2 w-4 h-4 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-primary ring-4 ring-background z-10" />

                  {/* Content card */}
                  <div
                    className={`relative w-full pl-16 md:w-1/2 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    {/* Connector line to the dot */}
                    <div
                      className={`hidden md:block absolute top-1/2 w-12 h-0.5 bg-surface-variant -translate-y-1/2 ${
                        index % 2 === 0 ? "right-0" : "left-0"
                      }`}
                    />
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(30,41,59,0.05)] border border-surface-variant">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-2xl">
                          {item.icon}
                        </span>
                        <span className="font-label-md text-label-md text-primary">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-1">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant text-body-md font-body-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadershipTeam />

      {/* Kids & Youth Split Section */}
      <section className="bg-surface py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(30,41,59,0.1)]">
              <img
                alt="Children laughing and playing"
                className="w-full h-full object-cover"
                src={`${import.meta.env.BASE_URL}home/pexels-prolificpeople-30388491.jpg`}
              />
            </div>
          </div>
          <div className="order-1 md:order-2 pl-0 md:pl-8">
            <span className="inline-flex items-center gap-2 text-primary font-label-md text-label-md mb-4">
              <span className="material-symbols-outlined">child_care</span>{" "}
              Families
            </span>
            <h2 className="font-headline-md text-headline-md text-trust-navy mb-3">
              Watertower Kids.
            </h2>
            <div className="w-20 h-1 bg-action-blue rounded-full mb-4" />
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              We run a full Kids Program during our Sunday service for children
              ages 0-11. All our volunteers are fully checked and passionate
              about helping young people learn about Jesus in a fun, safe
              environment.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-action-blue mt-0.5">
                  check_circle
                </span>
                <div>
                  <strong className="text-trust-navy font-label-md text-label-md block">
                    Creche (Ages 0-3)
                  </strong>
                  <span className="text-on-surface-variant text-sm">
                    A safe space for little ones to play during the sermon.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-action-blue mt-0.5">
                  check_circle
                </span>
                <div>
                  <strong className="text-trust-navy font-label-md text-label-md block">
                    Sunday Club (Ages 4-11)
                  </strong>
                  <span className="text-on-surface-variant text-sm">
                    Games, crafts, and Bible stories tailored to their age.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <LatestSermons />

      {/* Get to Know Us Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[380px] md:min-h-[440px] flex items-center justify-center">
          <img
            alt="Watertower Bible Church community"
            className="absolute inset-0 w-full h-full object-cover"
            src={`${import.meta.env.BASE_URL}home/Local-Church-Forster-Tuncurry-14.jpg`}
          />
          <div className="absolute inset-0 bg-trust-navy/45" />
          <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 py-16 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-headline-md text-headline-md text-on-primary">
                Get to Know Us
              </h2>
              <div className="w-20 h-1 bg-action-blue rounded-full" />
            </div>
            <p className="font-body-lg text-body-md text-surface-container-high leading-relaxed">
              Whatever your background or stage of faith, we'd love for you to
              get to know our story, what we believe, and the people who call
              this church home.
            </p>
            <Link
              className="inline-flex items-center gap-2 text-on-primary hover:text-action-blue font-label-md text-label-md transition-colors"
              to="/about"
            >
              Learn More About Us
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <HowToFindUs />

      <FAQs
        faqs={faqContent.newHere}
        heading="Common Questions"
        description="A few practical details to help you prepare for your first visit."
      />

      <CTAForm />
    </>
  );
}

export default NewHere;
