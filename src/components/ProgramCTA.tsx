import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ProgramCTA() {
  const features: { title: string; text: string }[] = [
    { title: "Flexible Learning", text: "Study at your own pace" },
    { title: "Expert Support", text: "Get help when you need it" },
    { title: "Practical Outcome", text: "Build real portfolio projects" },
  ];

  return (
    <main className="bg-white py-20 text-center">
      <section className="max-w-4xl mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-3xl shadow-xl p-14 text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Ready to Start Your Learning Journey?
        </h1>

        {/* Description */}
        <p className="text-lg text-blue-100 px-6 md:px-0 mt-5 mb-8 max-w-2xl mx-auto">
          Join a community of learners transforming their careers through
          practical, industry-relevant skills.
        </p>

        {/* Features */}
        <article className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => (
            <section
              key={feature.title}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-transform transform hover:-translate-y-1 shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 mb-4 flex items-center justify-center bg-white/20 rounded-full">
                <CheckCircle2 size={24} className="text-white" />
              </div>

              <div>
                <p className="font-semibold text-lg mb-1">{feature.title}</p>
                <p className="text-blue-100 text-sm">{feature.text}</p>
              </div>
            </section>
          ))}
        </article>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1">
            Enroll Now <ArrowRight size={20} />
          </button>

          <button className="flex items-center gap-2 border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition transform hover:-translate-y-1">
            Talk to an Advisor
          </button>
        </div>
      </section>
    </main>
  );
}
