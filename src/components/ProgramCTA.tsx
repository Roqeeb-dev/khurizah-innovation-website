import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ProgramCTA() {
  const features: { title: string; text: string }[] = [
    { title: "Flexible Learning", text: "Study at your own pace" },
    { title: "Expert Support", text: "Get help when you need it" },
    { title: "Practical Outcome", text: "Build real portfolio projects" },
  ];

  return (
    <main className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[120px]" />

      <section className="relative max-w-5xl mx-auto px-5 sm:px-8 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-3xl shadow-xl p-12 sm:p-16 text-white text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
          Ready to Start Your Learning Journey?
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-blue-100 mt-5 mb-10 max-w-3xl mx-auto">
          Join a community of learners transforming their careers through
          practical, industry-relevant skills and mentorship from industry
          experts.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <section
              key={index}
              className="relative group p-6 rounded-3xl bg-white/10 backdrop-blur-md shadow-lg flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
            >
              {/* gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/10 group-hover:to-indigo-600/20 transition" />

              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white/20 rounded-full shadow-md">
                  <CheckCircle2 size={26} className="text-white" />
                </div>

                <p className="font-semibold text-lg mb-1">{feature.title}</p>
                <p className="text-blue-100 text-sm sm:text-base">
                  {feature.text}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Buttons */}
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
