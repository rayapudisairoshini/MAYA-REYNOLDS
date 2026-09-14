const methods = [
  {
    title: "Cognitive Behavioral Therapy",
    shortTitle: "CBT",
    description:
      "CBT helps you recognize patterns in your thoughts, emotions, and behaviors and develop healthier ways of responding to life's challenges.",
    image: "/images/CBT.jpg",
  },
  {
    title: "EMDR",
    shortTitle: "EMDR",
    description:
      "EMDR is a structured, trauma-focused approach that can help process difficult experiences and reduce the emotional impact of distressing memories.",
    image: "/images/EMDR.jpg",
  },
  {
    title: "Mindfulness-Based Practices",
    shortTitle: "Mindfulness",
    description:
      "Mindfulness practices encourage greater awareness of thoughts, emotions, and physical sensations while developing a more grounded relationship with the present moment.",
    image: "/images/Mindfulness.jpg",
  },
  {
    title: "Body-Oriented Techniques",
    shortTitle: "Body-Oriented",
    description:
      "Body-oriented techniques explore the connection between emotional experiences and physical sensations, helping you develop greater awareness and regulation.",
    image: "/images/somatic.jpg",
  },
];

export default function Methods() {
  return (
    <section id="methods" className="overflow-hidden bg-[#f8f7f3] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">


        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">
            Methods
          </p>

          <h2 className="mt-4 font-serif text-5xl font-light leading-tight text-[#26332b] md:text-6xl">
            An approach grounded in evidence and compassion.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#26332b]/65">
            Dr. Reynolds integrates evidence-based approaches based on each
            client&apos;s individual needs, experiences, and goals.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">

          {methods.map((method) => (
            <article key={method.title} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="overflow-hidden">
                <img src={method.image} alt={`${method.title} therapy`} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"/>
              </div>

              <div className="p-8">

                <p className="text-xs font-medium uppercase tracking-[2px] text-[#647b6b]">
                  {method.shortTitle}
                </p>

                <h3 className="mt-3 font-serif text-3xl font-light text-[#26332b]">
                  {method.title}
                </h3>

                <p className="mt-4 leading-7 text-[#26332b]/65">
                  {method.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}