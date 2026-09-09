"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  Sparkles,
  Eye,
  Zap,
  Target,
} from "lucide-react";

type JourneyItem = {
  title: string;
  small: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

const journey: JourneyItem[] = [
  {
    title: "SEE",
    small: "GET DISCOVERED",
    description:
      "Reach the right audience with content and creative direction designed to make your brand easier to notice.",
    image: "/services/social/social1.png",
    icon: Eye,
  },
  {
    title: "STOP",
    small: "EARN ATTENTION",
    description:
      "Use relevant ideas, strong creative and clear messaging to give people a reason to stop scrolling.",
    image: "/services/social/social2.png",
    icon: Zap,
  },
  {
    title: "CARE",
    small: "CREATE RELEVANCE",
    description:
      "Show your audience that your brand understands their interests, challenges or aspirations.",
    image: "/services/social/social3.png",
    icon: Heart,
  },
  {
    title: "ENGAGE",
    small: "BUILD CONNECTION",
    description:
      "Encourage conversations, responses, shares, saves, messages and other meaningful interactions.",
    image: "/services/social/social4.png",
    icon: MessageCircle,
  },
  {
    title: "REMEMBER",
    small: "BUILD BRAND RECOGNITION",
    description:
      "Create consistency across your ideas, language and visual identity so your brand becomes easier to recognize.",
    image: "/services/social/social5.png",
    icon: Sparkles,
  },
  {
    title: "ACT",
    small: "SUPPORT BUSINESS ACTION",
    description:
      "Give attention somewhere useful to go — whether that means an enquiry, website visit, conversation, signup or purchase.",
    image: "/services/social/social6.png",
    icon: Target,
  },
];

export default function SocialMediaMarketingBigIdea() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  /* ------------------------------------------------------------
     SCROLL REVEAL
  ------------------------------------------------------------ */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* ------------------------------------------------------------
     AUTO CHANGE
  ------------------------------------------------------------ */

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setActive((current) =>
        current === journey.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* =========================================================
          SOFT BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-200px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#B79A72]/[0.035] blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#0B2A52]/[0.025] blur-[120px]" />
      </div>

      {/* =========================================================
          MAIN
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
        {/* =======================================================
            TOP EDITORIAL INTRO
        ======================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}

          <div
            className={`transition-all duration-[1200ms] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#B79A72]" />

              <span className="text-[9px] tracking-[0.28em] text-[#B79A72] sm:text-[10px]">
                HOW STRATEGIC SOCIAL MEDIA WORKS
              </span>
            </div>

            <p className="mt-6 max-w-[320px] text-[11px] leading-5 text-[#0B2A52]/35">
              STRONG SOCIAL MEDIA CONTENT SHOULD HELP MOVE
              <br />
              YOUR AUDIENCE THROUGH A NATURAL JOURNEY.
            </p>
          </div>

          {/* RIGHT */}

          <div
            className={`max-w-[760px] transition-all delay-150 duration-[1200ms] lg:ml-auto ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-[2rem] font-medium leading-[1.12] tracking-[-0.035em] sm:text-[2.4rem] md:text-[2.75rem] lg:text-[3rem]">
              From First Impression to{" "}
              <span className="text-[#B79A72]">
                Meaningful Action.
              </span>
            </h2>

            <p className="mt-3 text-[1.05rem] font-medium text-[#0B2A52]/65 sm:text-[1.2rem]">
              Strong social media content should help move your audience
              through a natural journey.
            </p>
          </div>
        </div>

        {/* =======================================================
            LARGE INTERACTIVE EXPERIENCE
        ======================================================== */}

        <div
          className={`mt-16 transition-all delay-300 duration-[1400ms] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* =====================================================
              DESKTOP PANELS
          ====================================================== */}

          <div className="hidden h-[560px] gap-2 lg:flex">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === active;

              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`group relative overflow-hidden rounded-[26px] text-left transition-all duration-700 ${
                    isActive ? "flex-[4]" : "flex-1"
                  }`}
                >
                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ${
                      isActive
                        ? "scale-100"
                        : "scale-[1.08] grayscale-[25%]"
                    }`}
                  />

                  {/* DARK OVERLAY */}

                  <div
                    className={`absolute inset-0 transition-all duration-700 ${
                      isActive
                        ? "bg-gradient-to-t from-[#0B2A52]/90 via-[#0B2A52]/15 to-transparent"
                        : "bg-[#0B2A52]/45 group-hover:bg-[#0B2A52]/30"
                    }`}
                  />

                  {/* GOLD LINE */}

                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-[#B79A72] transition-all duration-700 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />

                  {/* =================================================
                      COLLAPSED STATE
                  ================================================= */}

                  <div
                    className={`absolute left-5 top-5 transition-all duration-500 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md">
                      <Icon size={14} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div
                    className={`absolute bottom-7 left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap transition-all duration-500 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-white/80">
                      {item.title}
                    </span>
                  </div>

                  {/* =================================================
                      ACTIVE CONTENT
                  ================================================= */}

                  <div
                    className={`absolute inset-x-0 bottom-0 p-7 transition-all duration-700 xl:p-9 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="flex items-end justify-between gap-8">
                      <div className="max-w-[520px]">
                        <div className="mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                            <Icon size={13} strokeWidth={1.5} />
                          </span>

                          <span className="text-[8px] font-semibold tracking-[0.24em] text-white/65">
                            {item.small}
                          </span>
                        </div>

                        <h3 className="text-[2.2rem] font-medium tracking-[-0.04em] text-white sm:text-[2.6rem]">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-[480px] text-[12px] leading-6 text-white/65 sm:text-[13px]">
                          {item.description}
                        </p>
                      </div>

                      <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-transform duration-500 group-hover:translate-x-1 sm:flex">
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =====================================================
              MOBILE EXPERIENCE
          ====================================================== */}

          <div className="lg:hidden">
            {/* IMAGE */}

            <div className="relative h-[430px] overflow-hidden rounded-[25px]">
              <img
                key={journey[active].image}
                src={journey[active].image}
                alt={journey[active].title}
                className="h-full w-full object-cover transition-all duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/90 via-[#0B2A52]/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                    {(() => {
                      const Icon = journey[active].icon;

                      return <Icon size={14} strokeWidth={1.5} />;
                    })()}
                  </span>

                  <span className="text-[8px] font-semibold tracking-[0.23em] text-white/60">
                    {journey[active].small}
                  </span>
                </div>

                <h3 className="mt-4 text-[2rem] font-medium text-white">
                  {journey[active].title}
                </h3>

                <p className="mt-2 max-w-[500px] text-[12px] leading-6 text-white/65">
                  {journey[active].description}
                </p>
              </div>
            </div>

            {/* MOBILE NAV */}

            <div className="mt-4 grid grid-cols-6 gap-1">
              {journey.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`relative h-12 overflow-hidden rounded-xl transition-all duration-500 ${
                    active === index ? "bg-[#0B2A52]" : "bg-[#F5F2EC]"
                  }`}
                >
                  <span
                    className={`text-[8px] font-semibold tracking-[0.12em] ${
                      active === index
                        ? "text-white"
                        : "text-[#0B2A52]/35"
                    }`}
                  >
                    {item.title}
                  </span>

                  {active === index && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B79A72]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            JOURNEY SUMMARY
        ======================================================== */}

        <div
          className={`mt-16 grid items-center gap-8 border-t border-[#0B2A52]/[0.08] pt-8 transition-all delay-400 duration-[1200ms] sm:grid-cols-[1fr_auto] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {/* MESSAGE */}

          <div>
            <p className="text-[8px] font-semibold tracking-[0.25em] text-[#B79A72]">
              THE AUDIENCE JOURNEY
            </p>

            <p className="mt-3 max-w-[680px] text-[13px] leading-6 text-[#0B2A52]/50 sm:text-[14px]">
              From getting discovered to supporting meaningful business
              action, every stage gives your audience a reason to move closer
              to your brand.
            </p>
          </div>

          {/* MINI JOURNEY */}

          <div className="flex items-center gap-2">
            {journey.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === active
                    ? "w-10 bg-[#B79A72]"
                    : "w-4 bg-[#0B2A52]/10 hover:bg-[#0B2A52]/25"
                }`}
                aria-label={`Show ${item.title}`}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            FINAL JOURNEY LINE
        ======================================================== */}

        <div
          className={`mx-auto mt-20 max-w-[900px] text-center transition-all delay-500 duration-[1200ms] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-[9px] font-semibold tracking-[0.28em] text-[#B79A72]">
            SEE · STOP · CARE · ENGAGE · REMEMBER · ACT
          </p>

          <h3 className="mt-5 text-[1.55rem] font-medium leading-[1.25] tracking-[-0.025em] text-[#0B2A52] sm:text-[1.8rem]">
            From first impression to{" "}
            <span className="text-[#B79A72]">
              meaningful action.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}