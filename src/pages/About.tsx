import HeroSection from "../components/HeroSection";
import FAQs from "../components/FAQs";
import CTAForm from "../components/CTAForm";
import LeadershipTeam from "../components/LeadershipTeam";
import { heroContent } from "../data/heroContent";
import { faqContent } from "../data/faqContent";
import HowToFindUs from "../components/HowToFindUs";
import FIECPartnership from "../components/FIECPartnership";

function About() {
  return (
    <>
      <HeroSection {...heroContent.about} />

      {/* What We Believe (Bento Grid) */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-trust-navy mb-stack-sm">
              What We Believe
            </h2>
            <div className="w-20 h-1 bg-action-blue rounded-full mb-4 mx-auto" />
            <p className="text-on-surface-variant font-body-md text-body-md max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-8 rounded-xl shadow-[0_4px_20px_rgba(30,41,59,0.05)] border border-surface-variant/50 hover:shadow-[0_8px_30px_rgba(30,41,59,0.1)] transition-shadow">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined icon-fill">
                  menu_book
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-4">
                Lorem Ipsum
              </h3>
              <div className="w-12 h-1 bg-action-blue rounded-full mb-4" />
              <p className="text-on-surface-variant">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat duis aute irure
                dolor in reprehenderit.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl shadow-[0_4px_20px_rgba(30,41,59,0.05)] border border-surface-variant/50 hover:shadow-[0_8px_30px_rgba(30,41,59,0.1)] transition-shadow">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined icon-fill">
                  lightbulb
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-4">
                Lorem Ipsum
              </h3>
              <div className="w-12 h-1 bg-action-blue rounded-full mb-4" />
              <p className="text-on-surface-variant">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum sed ut
                perspiciatis unde omnis iste natus.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl shadow-[0_4px_20px_rgba(30,41,59,0.05)] border border-surface-variant/50 hover:shadow-[0_8px_30px_rgba(30,41,59,0.1)] transition-shadow">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined icon-fill">
                  favorite
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-trust-navy mb-4">
                Loren Ipsum
              </h3>
              <div className="w-12 h-1 bg-action-blue rounded-full mb-4" />
              <p className="text-on-surface-variant">
                Error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Bio Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-warm-gray">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-5/12">
              <div className="relative rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(30,41,59,0.1)] aspect-[4/5] bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-outline text-6xl">
                  person
                </span>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <span className="inline-block px-3 py-1 bg-surface-container-highest text-secondary rounded-full font-label-md text-label-md mb-4">
                Lead Pastor
              </span>
              <h2 className="font-headline-md text-headline-md text-trust-navy mb-stack-sm">
                Meet Pastor Sam
              </h2>
              <div className="w-20 h-1 bg-action-blue rounded-full mb-4" />
              <div className="space-y-4 text-on-surface-variant font-body-md text-body-md">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadershipTeam />

      {/* Our History Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-5/12">
              <div className="relative rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(30,41,59,0.1)] aspect-[4/5] bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-outline text-6xl">
                  history_edu
                </span>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <h2 className="font-headline-md text-headline-md text-trust-navy mb-stack-sm">
                Watertower History
              </h2>
              <div className="w-20 h-1 bg-action-blue rounded-full mb-4" />
              <div className="space-y-4 text-on-surface-variant font-body-md text-body-md mb-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
                <p>
                  Ut aliquip ex ea commodo consequat duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    flag
                  </span>
                  <div>
                    <strong className="text-trust-navy font-label-md text-label-md block">
                      2015 — Lorem Ipsum
                    </strong>
                    <span className="text-on-surface-variant text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod tempor.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    flag
                  </span>
                  <div>
                    <strong className="text-trust-navy font-label-md text-label-md block">
                      2018 — Lorem Ipsum
                    </strong>
                    <span className="text-on-surface-variant text-sm">
                      Ut labore et dolore magna aliqua ut enim ad minim veniam
                      quis nostrud exercitation.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    flag
                  </span>
                  <div>
                    <strong className="text-trust-navy font-label-md text-label-md block">
                      2021 — Lorem Ipsum
                    </strong>
                    <span className="text-on-surface-variant text-sm">
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat
                      duis aute irure dolor.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    flag
                  </span>
                  <div>
                    <strong className="text-trust-navy font-label-md text-label-md block">
                      2023 — Lorem Ipsum
                    </strong>
                    <span className="text-on-surface-variant text-sm">
                      Reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur excepteur sint occaecat.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FIECPartnership />

      <HowToFindUs />

      <FAQs
        faqs={faqContent.about}
        heading="Common Questions"
        description="A few practical details to help you prepare for your first visit."
      />

      <CTAForm />
    </>
  );
}

export default About;
