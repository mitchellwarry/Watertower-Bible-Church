import HeroSection from "../components/HeroSection";
import LatestSermons from "../components/LatestSermons";
import LeadershipTeam from "../components/LeadershipTeam";
import HowToFindUs from "../components/HowToFindUs";
import FAQs from "../components/FAQs";
import CTAForm from "../components/CTAForm";

function Home() {
  return (
    <>
      <HeroSection />

      {/* Who We Are Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <div className="w-full lg:w-6/12 relative z-10">
            <div className="bg-surface-container-high dark:bg-inverse-surface p-8 md:p-12 rounded-2xl shadow-xl border border-surface-variant">
              <div className="space-y-4 mb-8">
                <h2 className="font-headline-md text-headline-md text-on-surface dark:text-surface-bright">
                  Who We Are
                </h2>
                <div className="w-20 h-1 bg-action-blue rounded-full" />
              </div>
              <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-md shrink-0">
                      <span className="material-symbols-outlined">groups</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface-bright">
                      Rooted in Grace
                    </h4>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    We are a community that prioritises love and acceptance
                    above all else, ensuring everyone feels welcome from the
                    moment they walk in.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-md shrink-0">
                      <span className="material-symbols-outlined">church</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface-bright">
                      Centered on Christ
                    </h4>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    Everything we do—from our worship to our community
                    outreach—is guided by our commitment to follow the teachings
                    and example of Christ.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-md shrink-0">
                      <span className="material-symbols-outlined">
                        volunteer_activism
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface-bright">
                      Driven by Purpose
                    </h4>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    We believe we are called to be a light in our city, actively
                    serving our neighbors and growing together in faith and
                    action.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 relative z-0 lg:-ml-24">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2">
              <img
                alt="Church community gathering"
                className="w-full h-full object-cover"
                src="home/pexels-jacemillerphotography-9322688.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Watertower Kids Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto my-6 md:my-0">
        <div className="flex flex-col md:flex-row items-center gap-stack-lg">
          <div className="flex-1 order-2 md:order-1">
            <img
              alt="Watertower Kids"
              className="rounded-xl shadow-lg w-full object-cover aspect-[4/3] md:aspect-video"
              src="home/pexels-prolificpeople-30388491.jpg"
            />
          </div>
          <div className="flex-1 order-1 md:order-2 flex flex-col gap-6">
            <div>
              <h2 className="font-headline-md text-headline-md text-trust-navy mb-4">
                Watertower Kids
              </h2>
              <p className="font-body-lg text-body-md text-on-surface-variant leading-relaxed">
                While you enjoy the service, your kids have their own fun, safe
                environment. Our programs run at the same time as our main
                gatherings, so parents know exactly where to take their little
                ones when they arrive.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-action-blue">
                  verified_user
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Safe, secure environment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-action-blue">
                  face
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Age-appropriate learning and fun activities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-action-blue">
                  groups
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Background-checked & licensed, volunteers
                </span>
              </li>
            </ul>
            <div>
              <a
                className="inline-flex bg-trust-navy text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <LeadershipTeam />
      <LatestSermons />
      <HowToFindUs />
      <FAQs />
      <CTAForm />
    </>
  );
}

export default Home;
