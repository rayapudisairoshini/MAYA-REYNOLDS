import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#3B332C]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Link href="#top" className="font-serif text-3xl font-light text-[#3B332C] transition hover:text-[#8B735F]">
              Dr. Maya Reynolds
            </Link>

            <p className="mt-2 text-sm text-[#3B332C]/60">
              PsyD · Licensed Clinical Psychologist
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#3B332C]/60">
              A warm, grounded space for adults navigating anxiety, trauma, burnout, and the pressure of doing it all.
            </p>

          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[2px] text-[#8B735F]">
              Navigate
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#about" className="text-[#3B332C]/65 transition hover:text-[#3B332C]">
                  About
                </a>
              </li>

              <li>
                <a href="#specialities" className="text-[#3B332C]/65 transition hover:text-[#3B332C]">
                  Specialties
                </a>
              </li>

              <li>
                <a href="#methods" className="text-[#3B332C]/65 transition hover:text-[#3B332C]">
                  Methods
                </a>
              </li>

              <li>
                <a href="#office" className="text-[#3B332C]/65 transition hover:text-[#3B332C]">
                  Our Office
                </a>
              </li>

              <li>
                <a href="#faqs" className="text-[#3B332C]/65 transition hover:text-[#3B332C]">
                  FAQs
                </a>
              </li>

              <li>
                <Link href="/schedule" className="text-[#3B332C]/65 transition hover:text-[#3B332C]">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[2px] text-[#8B735F]">
              Contact
            </p>

            <div className="mt-5 space-y-5 text-sm leading-7 text-[#3B332C]/65">

              <div>
                <p>123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
              </div>

              <div>
                <a href="mailto:drmayareynolds@counselling.com" className="transition hover:text-[#3B332C]">
                  drmayareynolds@counselling.com
                </a>

                <p className="mt-1">(555) 555-5555</p>
              </div>

              <p>
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>

            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-[#3B332C]/15 " />

        <div className=" flex flex-col gap-4 text-xs text-[#3B332C]/45 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD.
          </p>

          <p>
            Serving Santa Monica & California
          </p>

        </div>
      </div>
    </footer>
  );
}