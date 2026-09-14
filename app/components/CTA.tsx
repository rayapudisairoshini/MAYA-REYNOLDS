import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="bg-[#719388] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[3px] text-white/80">
            Take the first step
          </p>

          <h2 className="mt-8 font-serif text-6xl font-light leading-tight text-white md:text-7xl">
            Choose yourself.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            If you're ready to slow down, reconnect, and do the deeper work, I'd be glad to explore whether therapy is the right fit for you.
          </p>

          <Link href="/schedule" className="mt-9 inline-flex rounded-full bg-white px-8 py-5 text-base font-semibold text-[#52766a] transition hover:bg-[#f1f3ee]">
            Schedule a consultation
          </Link>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-10 backdrop-blur-sm md:p-11">
          <h3 className="text-2xl font-semibold text-white">
            Dr. Maya Reynolds, PsyD
          </h3>

          <div className="mt-8 space-y-6 text-lg leading-8 text-white/75">
            <div>
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>

            <div>
              <p>drmayareynolds@counselling.com</p>
              <p>(555) 555-5555</p>
            </div>

            <p>Monday-Friday · 9am-6pm</p>
          </div>
        </div>

      </div>
    </section>
  );
}