import { ArrowRight, Phone, Mail, Check } from "lucide-react";

export default function CTA() {
  const advantages: { title: string; text: string }[] = [
    {
      title: "No Prerequisites",
      text: "Start learning regardless of your background or experience level",
    },
    {
      title: "Lifetime Access",
      text: "Get lifetime access to course materials and updates",
    },
    {
      title: "Certificate of Completion",
      text: "Earn a recognized certificate to boost your career prospects",
    },
    {
      title: "Job Placement Support",
      text: "Get help with job search, resume, and interview preparation",
    },
  ];

  return (
    <main id="contact" className="bg-white py-16 sm:py-20 px-5 sm:px-8">
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-3xl shadow-xl p-8 sm:p-10 lg:p-14 flex flex-col lg:flex-row gap-10 lg:gap-12 text-white">
        {/* Left */}
        <article className="lg:max-w-[50%] space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Ready to Transform <br className="hidden sm:block" /> Your Future?
          </h1>

          <p className="text-base sm:text-lg text-blue-100">
            Join hundreds of successful graduates who started their journey with
            us. Your dream career is just one step away.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition w-full sm:w-auto">
              Enroll Today <ArrowRight size={18} />
            </button>

            <button className="flex items-center justify-center gap-2 border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition w-full sm:w-auto">
              Talk to Us
            </button>
          </div>

          {/* Divider */}
          <hr className="border-white/20 my-6 sm:my-8" />

          {/* Contact */}
          <div className="space-y-4 text-blue-100 text-sm sm:text-base">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Phone size={18} />
              <span>0815 0445 8351</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Mail size={18} />
              <span>khurizahinnovation@gmail.com</span>
            </div>
          </div>
        </article>

        {/* Right */}
        <article className="lg:max-w-[50%] space-y-4 sm:space-y-6">
          {advantages.map((ad) => (
            <section
              key={ad.title}
              className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
            >
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 shrink-0">
                <Check size={18} />
              </div>

              <div>
                <p className="font-semibold">{ad.title}</p>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {ad.text}
                </p>
              </div>
            </section>
          ))}
        </article>
      </section>
    </main>
  );
}
