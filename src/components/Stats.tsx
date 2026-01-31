export default function Stats() {
  const stats: { label: string; count: string; hint?: string }[] = [
    {
      label: "Learners Trained",
      count: "50+",
      hint: "Across tech & vocational skills",
    },
    {
      label: "Client Projects",
      count: "20+",
      hint: "Delivered for businesses & individuals",
    },
    {
      label: "Skill Programs",
      count: "12+",
      hint: "Career-focused and service-backed",
    },
    {
      label: "Year of Impact",
      count: "1+",
      hint: "Building skills and solutions",
    },
  ];
  return (
    <section className="max-w-5xl mx-auto mt-10 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 py-14 shadow-xl">
      {stats.map(({ count, label }, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center text-white gap-2 transition hover:-translate-y-1 hover:opacity-95"
        >
          <p className="text-4xl md:text-5xl font-semibold tracking-tight">
            {count}
          </p>

          <span className="w-8 h-[2px] bg-white/40 rounded-full" />

          <p className="text-sm md:text-base text-white/80 leading-snug">
            {label}
          </p>
        </div>
      ))}
    </section>
  );
}
