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
    <main className="bg-white py-20">
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-3xl shadow-xl p-14 flex flex-col lg:flex-row gap-12 text-white">
        {/* left section */}
        <article className="lg:max-w-[50%] space-y-6">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Ready to Transform <br /> Your Future?
          </h1>

          <p className="text-lg text-blue-100">
            Join hundreds of successful graduates who started their journey with
            us. Your dream career is just one step away.
          </p>

          {/* buttons */}
          <div className="flex items-center gap-4 pt-2">
            <button className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition">
              Enroll Today <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition">
              Talk to Us
            </button>
          </div>

          {/* divider */}
          <hr className="border-white/20 my-8" />

          {/* contact info */}
          <div className="space-y-4 text-blue-100">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>0801 234 5678</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>khurizahinnovation@gmail.com</span>
            </div>
          </div>
        </article>

        {/* right section */}
        <article className="lg:max-w-[50%] space-y-6">
          {advantages.map((ad) => (
            <section
              key={ad.title}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                <Check size={18} />
              </div>

              <div>
                <p className="font-semibold">{ad.title}</p>
                <p className="text-blue-100 text-sm">{ad.text}</p>
              </div>
            </section>
          ))}
        </article>
      </section>
    </main>
  );
}
