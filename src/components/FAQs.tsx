import { useState } from "react";
import type { Faq } from "../data/faqContent";

interface FAQsProps {
  faqs: Faq[];
  heading?: string;
  description?: string;
}

function FAQs({ faqs, heading = "Frequently Asked Questions", description }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col items-center gap-4 text-center mb-stack-lg">
          <h2 className="font-headline-md text-headline-md text-trust-navy">
            {heading}
          </h2>
          {description ? (
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              {description}
            </p>
          ) : (
            <div className="w-20 h-1 bg-action-blue rounded-full" />
          )}
        </div>
        <div className="max-w-3xl mx-auto flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-b border-surface-variant"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-headline-sm text-body-lg font-medium text-on-surface">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-action-blue shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-body-md text-body-md text-on-surface-variant pb-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
