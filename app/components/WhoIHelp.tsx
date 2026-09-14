const groups = [
  {
    number: "01",
    title: "High-achieving professionals",
    body: "You're capable and self-aware, yet quietly exhausted - managing constant worry, tension, or a sense that something feels off, even when life looks fine on the outside.",
  },
  {
    number: "02",
    title: "Adults carrying past trauma",
    body: "Whether from a single event or long-standing patterns, we work at a careful pace with an emphasis on safety, stabilization, and helping your nervous system feel regulated again.",
  },
  {
    number: "03",
    title: "Entrepreneurs & creatives",
    body: "Burnout, perfectionism, and high internal pressure can leave you disconnected from yourself after years of pushing through. Therapy becomes a place to slow down and reconnect.",
  },
];

export default function WhoIHelp() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 bg-[#e9eee8] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="grid gap-8  md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">
              Who I work with
            </p>
          </div>

          <div>
            <h2 className="font-serif text-5xl font-light leading-tight text-[#26332b] md:text-6xl">
              If any of this sounds familiar, you're not alone.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#26332b]/65">
              Therapy can be a space to step out of survival mode, understand
              what you're experiencing, and begin moving through life with
              greater clarity and ease.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.number}
              className="group flex min-h-[390px] flex-col rounded-3xl border border-[#26332b]/10 bg-[#f8f7f3] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-9"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-[2px] text-[#647b6b]">
                  {group.number}
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-16 font-serif text-3xl font-light leading-tight text-[#26332b]">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-base leading-8 text-[#26332b]/65">
                {group.body}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 ">
          <p className="max-w-3xl font-serif text-2xl font-light leading-relaxed text-[#26332b]/80 md:text-3xl">
            You don't have to wait until things become overwhelming before
            asking for support.
          </p>
        </div>
      </div>
    </section>
  );
}