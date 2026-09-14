export default function Specialities() {
  const Specialties = [
    {
      name: "Anxiety & Panic",
      image: "/images/anxiety-panic.jpg",
      description:
        "When worry, racing thoughts, or physical tension keep you on edge, therapy can help you understand what is driving the anxiety and develop practical ways to feel more grounded.",
    },
    {
      name: "Trauma & EMDR Therapy",
      image: "/images/trauma.jpg",
      description:
        "Trauma work is paced carefully, with an emphasis on safety and stabilization. Together, we can process difficult experiences while building a greater sense of regulation and control.",
    },
    {
      name: "Burnout & Perfectionism",
      image: "/images/burnout-perfectionism.jpg",
      description:
        "For professionals, entrepreneurs, and high-achievers, therapy can create space to slow down, reconnect with yourself, and build more sustainable ways of living and working.",
    },
    {
      name: "Chronic Stress",
      image: "/images/chronic-stress.jpg",
      description:
        "If stress has become a constant part of your life, therapy can help you understand its impact and develop healthier ways to respond to pressure.",
    },
  ];

  return (
    <section id="specialities" className="scroll-mt-24 bg-[#f1f3ee] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">
            Specialties
          </p>
          <h2 className="mt-4 font-serif text-5xl font-light leading-tight text-[#26332b] md:text-6xl">
            Support for what you're carrying.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#26332b]/65">
            Therapy can help you understand what is weighing on you and develop healthier ways to move forward.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Specialties.map((specialty) => (
            <article key={specialty.name} className="group flex h-full flex-col overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="overflow-hidden">
                <img src={specialty.image} alt={`${specialty.name} therapy`} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"/>
              </div>
              <div className="flex flex-1 flex-col p-7">

                <h3 className="font-serif text-3xl font-light leading-tight text-[#26332b]">
                  {specialty.name}
                </h3>

                <p className="mt-5 text-base leading-8 text-[#26332b]/65">
                  {specialty.description}
                </p>
                <a href="#cta" className="mt-auto pt-8 text-sm font-semibold text-[#647b6b] transition-colors hover:text-[#26332b]">
                  Start a conversation →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}