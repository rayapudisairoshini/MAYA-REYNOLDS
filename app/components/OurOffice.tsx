export default function OurOffice() {
  return (
    <section
      id="office"
      className="overflow-hidden bg-white px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">
            Our Office
          </p>

          <h2 className="mt-4 font-serif text-5xl font-light leading-tight text-[#26332b] md:text-6xl">
            A calm space for meaningful work.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#26332b]/65">
            My Santa Monica office is intentionally quiet, private, and
            uncluttered - with natural light and comfortable seating designed
            to help you feel at ease from the moment you arrive.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-[1.35fr_0.65fr]">
          <img
            src="/images/office1.jpeg"
            alt="Bookshelf and lounge seating in the therapy office"
            className="h-[520px] w-full rounded-3xl object-cover"
          />

          <div className="grid gap-5">
            <img
              src="/images/office2.jpeg"
              alt="Comfortable seating area in the therapy office"
              className="h-[250px] w-full rounded-3xl object-cover"
            />

            <div className="rounded-3xl bg-[#e9eee8] p-8">
              <p className="text-sm font-medium uppercase tracking-[3px] text-[#647b6b]">
                Santa Monica, California
              </p>

              <p className="mt-3 font-serif text-3xl font-light text-[#26332b]">
                123th Street 45 W
              </p>

              <p className="mt-3 leading-7 text-[#26332b]/65">
                In-person sessions are available here, with secure telehealth
                appointments for clients throughout California.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}