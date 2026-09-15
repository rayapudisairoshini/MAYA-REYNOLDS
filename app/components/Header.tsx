"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  ["About", "/#about"],
  ["Specialties", "/#specialities"],
  ["Methods", "/#methods"],
  ["Our Office", "/#office"],
  ["FAQs", "/#faqs"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#26332b]/10 bg-[#f8f7f3]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl text-[#647b6b]"
          >
            Dr. Maya Reynolds

            <span className="block font-sans text-[11px] font-normal tracking-wide text-[#26332b]/60">
              PsyD · Santa Monica, CA
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(([name, link]) => (
              <a
                key={link}
                href={link}
                className="text-sm text-[#26332b]/80 transition-colors hover:text-[#647b6b]"
              >
                {name}
              </a>
            ))}

            <Link
              href="/schedule"
              className="ml-2 inline-flex items-center rounded-full bg-[#647b6b] px-5 py-2.5 text-sm text-white transition-colors hover:bg-[#26332b]"
            >
              Book a Consultation
            </Link>
          </nav>

          <button
            className="p-2 text-[#26332b] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-4 pb-6 md:hidden">
            {navLinks.map(([name, link]) => (
              <a
                key={link}
                href={link}
                onClick={() => setOpen(false)}
                className="text-base text-[#26332b]/80"
              >
                {name}
              </a>
            ))}

            <Link
              href="/schedule"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[#647b6b] px-5 py-3 text-sm text-white"
            >
              Book a Consultation
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}