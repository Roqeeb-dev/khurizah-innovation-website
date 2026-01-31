import type { ElementType } from "react";
import Pill from "./Pill";
import {
  Clock,
  Wrench,
  BadgeCheck,
  UserCheck,
  Lightbulb,
  Briefcase,
  Users,
  TrendingUp,
} from "lucide-react";

interface Reason {
  icon: ElementType;
  title: string;
  description: string;
  color: string;
}

export default function WhyUs() {
  const reasons: Reason[] = [
    {
      icon: Clock,
      title: "Flexible Learning Schedule",
      description:
        "Learn at your own pace with schedules designed to fit around your daily commitments, without compromising quality.",
      color: "blue",
    },
    {
      icon: Wrench,
      title: "Hands-on Practical Training",
      description:
        "Work on real projects and tools that mirror real industry challenges, helping you build confidence and mastery.",
      color: "emerald",
    },
    {
      icon: BadgeCheck,
      title: "Industry-Recognized Certification",
      description:
        "Earn certificates that validate your skills and improve your chances with employers and clients.",
      color: "purple",
    },
    {
      icon: UserCheck,
      title: "Personalized Mentorship",
      description:
        "Receive one-on-one guidance and feedback tailored to your strengths, pace, and career goals.",
      color: "amber",
    },
    {
      icon: Briefcase,
      title: "Career-Focused Programs",
      description:
        "Our programs are designed with employability in mind, preparing you for real opportunities after training.",
      color: "rose",
    },
    {
      icon: Users,
      title: "Supportive Learning Community",
      description:
        "Join a community of learners, mentors, and professionals who grow, collaborate, and succeed together.",
      color: "cyan",
    },
    {
      icon: TrendingUp,
      title: "Skill Growth & Empowerment",
      description:
        "We empower you with practical, future-ready skills that help you grow personally and professionally.",
      color: "indigo",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven Learning",
      description:
        "We encourage creativity, critical thinking, and innovation — not just theory, but problem-solving.",
      color: "lime",
    },
  ];

  const colorStyles: Record<
    string,
    { bg: string; text: string; iconBg: string }
  > = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      iconBg: "bg-blue-100",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      iconBg: "bg-emerald-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      iconBg: "bg-purple-100",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      iconBg: "bg-amber-100",
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-700",
      iconBg: "bg-rose-100",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-700",
      iconBg: "bg-cyan-100",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      iconBg: "bg-indigo-100",
    },
    lime: {
      bg: "bg-lime-50",
      text: "text-lime-700",
      iconBg: "bg-lime-100",
    },
  };

  return (
    <main className="bg-cyan-100 min-h-[50vh] py-10">
      <section className="flex flex-col items-center py-12 px-6 text-center">
        {/* Pill / Badge */}
        <Pill message="Why Us" icon={Lightbulb} />

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-gray-900">
          Why Choose Khurizah Innovation?
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed">
          We're committed to providing the best learning experience with proven
          results
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-16 py-10">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          const styles = colorStyles[reason.color];

          return (
            <div key={index} className="bg-white p-5 rounded-lg">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className={`
              ${styles.iconBg}
              ${styles.text}
              w-12 h-12
              rounded-xl
              flex items-center justify-center
              shrink-0
            `}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {reason.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-gray-600 max-w-[90%]">
                {reason.description}
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
