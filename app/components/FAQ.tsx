"use client";

import { useState } from "react";

const faqs = [
  [
    "Do you offer in-person or online therapy?",
    "Yes. Dr. Reynolds offers in-person sessions from her Santa Monica office as well as secure telehealth sessions for clients located throughout California.",
  ],
  [
    "What types of issues do you specialize in?",
    "Her practice focuses on anxiety, panic, trauma, professional burnout, perfectionism, chronic stress, and the effects of high-pressure living.",
  ],
  [
    "What is your approach to therapy?",
    "Her approach is warm, collaborative, and grounded. Sessions integrate evidence-based methods including CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
  ],
  [
    "Is therapy right for me?",
    "If you are functioning on the outside but feel exhausted, anxious, stuck in overthinking, or weighed down by past experiences, an initial consultation can help you decide whether the practice is a good fit.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="bg-[#f1f3ee] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.75fr_1.25fr] md:px-10">

        {/* FAQ Heading */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">
            FAQs
          </p>

          <h2 className="mt-4 font-serif text-5xl font-light leading-tight text-[#26332b] md:text-6xl">
            Questions are welcome.
          </h2>
        </div>


        {/* FAQ Questions */}
        <div className="divide-y divide-[#26332b]/15 border-y border-[#26332b]/15">

          {faqs.map((faq, index) => (
            <div key={faq[0]}>

              {/* Question Button */}
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between py-6 text-left text-lg font-semibold text-[#26332b]"
              >
                <span>{faq[0]}</span>

                <span className="ml-5 text-2xl font-normal">
                  {open === index ? "−" : "+"}
                </span>
              </button>


              {/* Answer */}
              {open === index && (
                <p className="pb-7 pr-10 leading-7 text-[#26332b]/65">
                  {faq[1]}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}