"use client";

import { useState } from "react";
export default function SchedulePage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f8f7f3] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">
            Schedule a consultation
          </p>
          <h1 className="mt-4 font-serif text-5xl font-light text-[#26332b] md:text-6xl">
            Let's take the first step.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#26332b]/65">
            Please share a few details about yourself and what you're looking for support with. Dr. Reynolds will review your information and get back to you.
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-sm md:p-12"> 
            <div>
              <label htmlFor="name"  className="mb-2 block text-sm font-semibold text-[#26332b]">
                Full Name
              </label>
              <input id="name" name="name" type="text" required placeholder="Your full name" className="w-full rounded-lg border border-[#26332b]/20 px-4 py-3 outline-none transition focus:border-[#647b6b]"/>
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#26332b]">
                Email Address
              </label>

              <input id="email" name="email" type="email" required placeholder="you@example.com"
                className="w-full rounded-lg border border-[#26332b]/20 px-4 py-3 outline-none transition focus:border-[#647b6b]"
              />
            </div>


            {/* Phone */}
            <div className="mt-6">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-[#26332b]"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                className="w-full rounded-lg border border-[#26332b]/20 px-4 py-3 outline-none transition focus:border-[#647b6b]"
              />
            </div>


            {/* Preferred Contact */}
            <div className="mt-6">
              <label
                htmlFor="contact"
                className="mb-2 block text-sm font-semibold text-[#26332b]"
              >
                Preferred Contact Method
              </label>

              <select
                id="contact"
                name="contact"
                className="w-full rounded-lg border border-[#26332b]/20 bg-white px-4 py-3 outline-none focus:border-[#647b6b]"
              >
                <option value="">Select one</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>


            {/* What brings you here */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#26332b]"
              >
                What brings you to therapy?
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us a little about what you'd like support with..."
                className="w-full resize-none rounded-lg border border-[#26332b]/20 px-4 py-3 outline-none transition focus:border-[#647b6b]"
              />
            </div>


            {/* Therapy Preference */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-[#26332b]">
                Preferred Session Type
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="session"
                    value="in-person"
                  />
                  <span>In-person</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="session"
                    value="telehealth"
                  />
                  <span>Telehealth</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="session"
                    value="either"
                  />
                  <span>Either</span>
                </label>

              </div>
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-[#647b6b] px-7 py-4 text-sm font-bold uppercase tracking-[2px] text-white transition hover:bg-[#526659]"
            >
              Request a Consultation
            </button>

            <p className="mt-5 text-center text-xs leading-5 text-[#26332b]/50">
              Please do not include highly sensitive or emergency information
              in this form.
            </p>

          </form>
        ) : (

          /* Success Message */
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <h2 className="font-serif text-4xl font-light text-[#26332b]">
              Thank you.
            </h2>

            <p className="mx-auto mt-5 max-w-lg leading-7 text-[#26332b]/65">
              Your consultation request has been received. Dr. Reynolds will
              review your information and follow up with you.
            </p>

            <a
              href="/"
              className="mt-8 inline-block rounded-full bg-[#647b6b] px-7 py-4 text-sm font-bold uppercase tracking-[2px] text-white"
            >
              Back to Home
            </a>
          </div>

        )}

      </div>

    </main>
  );
}