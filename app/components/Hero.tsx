export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f8f7f3]">

      <div className="mx-auto grid min-h-[580px] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">
            Anxiety & trauma therapy · Santa Monica, CA
          </p>
          <h1 className="max-w-xl font-serif text-6xl font-light leading-[0.98] text-[#26332b] md:text-8xl">
             Feel more like yourself again.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#26332b]/70">
            Warm, evidence-based therapy for adults navigating anxiety, trauma, burnout, and the pressure of doing it all.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
                <a href="/schedule" className="rounded-full bg-[#26332b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#647b6b]">
                  Schedule a free consultation
                </a>
                <a href="#approach" className="rounded-full border border-[#26332b]/20 px-7 py-4 text-sm font-semibold text-[#26332b] transition hover:border-[#26332b]">
                Explore my approach
                </a>
          </div>
          <p className="mt-7 text-sm text-[#26332b]/50">
            In-person in Santa Monica · Secure telehealth across California</p>
        </div>
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#e5ded4]/80" />
          <img src="/images/hero.avif" alt="Calm therapy-inspired space" className="relative h-[570px] w-full rounded-[12rem_12rem_1.5rem_1.5rem] object-cover shadow-xl"/>
          <div className="absolute -bottom-5 -left-5 max-w-xs rounded-2xl bg-white p-5 shadow-lg">
            <p className="font-serif text-xl text-[#26332b]">A place to slow down, reconnect, and heal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}