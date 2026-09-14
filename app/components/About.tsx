export default function About() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden bg-[#f8f7f3] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#e5ded4]" />
          <div className="relative overflow-hidden rounded-[1.5rem_9rem_1.5rem_9rem]">
            <img src="/images/Dr. Maya Reynolds.png" alt="Dr. Maya Reynolds" className="h-[560px] w-full object-cover transition duration-500 hover:scale-105 md:h-[620px]"/>
          </div>
          <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white px-6 py-4 shadow-lg">
            <p className="font-serif text-lg text-[#26332b]">Santa Monica, CA </p>
            <p className="mt-1 text-xs uppercase tracking-[2px] text-[#647b6b]">Licensed Clinical Psychologist</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">Meet Dr. Maya Reynolds, PsyD</p>

          <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[#26332b] md:text-6xl">Warm, grounded, and collaborative.</h2>
          <div className="mt-7 max-w-xl space-y-5 text-lg leading-8 text-[#26332b]/70">
            <p>I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults navigating anxiety, trauma, burnout, and high internal pressure.</p>

            <p>My work is evidence-based and trauma-informed, integrating CBT, EMDR, mindfulness-based practices, and body-oriented techniques to support both emotional insight and nervous-system regulation.</p>

            <p>I believe therapy works best when you feel respected, understood, and actively involved. Sessions are structured enough to feel supportive while leaving room for reflection and depth.</p>
          </div>
          <a href="#cta" className="mt-9 inline-flex items-center rounded-full bg-[#26332b] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#647b6b] hover:shadow-lg">
            Let's talk
            <span className="ml-2">→</span>
          </a>
          <p className="mt-5 text-sm text-[#26332b]/50">In-person in Santa Monica · Secure telehealth across California</p>
        </div>

      </div>
    </section>
  );
}