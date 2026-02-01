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
    <main className="bg-white min-h-[50vh] p-10 text-white">
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-700 p-12 rounded-2xl flex items-center space-x-4">
        {/* left section */}
        <article className="max-w-[50%]">
          <h1>Ready to transform your future?</h1>
          <p>
            Join hundreds of successful graduates who started their journey with
            us. Your dream career is just one step away.
          </p>
          <div>
            <button>
              <span>Enroll today</span> <ArrowRight />
            </button>
            <button>Talk to us</button>
          </div>

          {/* divider line */}
          <hr />

          {/* Contact info */}
          <div>
            <Phone />
            <span>08012345678</span>
          </div>
          <div>
            <Mail />
            <span>khurizahinnovation@gmail.com</span>
          </div>
        </article>

        {/* right section */}
        <article>
          {advantages.map((ad) => {
            return (
              <section className="flex items-center space-x-2 p-4 rounded-md border my-5">
                <div>
                  <Check />
                </div>
                <div>
                  <p>{ad.title}</p>
                  <p>{ad.text}</p>
                </div>
              </section>
            );
          })}
        </article>
      </section>
    </main>
  );
}
