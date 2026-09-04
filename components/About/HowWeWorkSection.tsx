"use client";

import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "LISTEN",
    description: "We understand before we recommend.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 sm:h-10 sm:w-10"
      >
        <path
          d="M32 48V27"
          stroke="#0B2A52"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 27C32 19.268 38.268 13 46 13V25C46 32.732 39.732 39 32 39"
          stroke="#0B2A52"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 25C19.0294 25 15 29.0294 15 34C15 38.9706 19.0294 43 24 43H32"
          stroke="#B79A72"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 18C16.5 20 14 23.5 13.5 27.5"
          stroke="#B79A72"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "QUESTION",
    description: "We challenge assumptions.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 sm:h-10 sm:w-10"
      >
        <path
          d="M17 18H47C50.866 18 54 21.134 54 25V39C54 42.866 50.866 46 47 46H30L20 53V46H17C13.134 46 10 42.866 10 39V25C10 21.134 13.134 18 17 18Z"
          stroke="#0B2A52"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M27 29.5C27.5 26.8 29.6 25 32.5 25C35.7 25 38 27 38 29.8C38 32.1 36.7 33.5 34.4 34.7C32.5 35.7 32 36.8 32 38"
          stroke="#0B2A52"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="32" cy="42" r="1.5" fill="#B79A72" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "CHALLENGE",
    description: "We look for the opportunity others miss.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 sm:h-10 sm:w-10"
      >
        <circle
          cx="28"
          cy="28"
          r="14"
          stroke="#0B2A52"
          strokeWidth="2"
        />
        <path
          d="M38 38L51 51"
          stroke="#B79A72"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="28"
          cy="28"
          r="8"
          stroke="#B79A72"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "BUILD",
    description: "We turn thinking into action.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 sm:h-10 sm:w-10"
      >
        <path
          d="M32 10L50 20V42L32 52L14 42V20L32 10Z"
          stroke="#0B2A52"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14 20L32 30L50 20"
          stroke="#B79A72"
          strokeWidth="2"
        />
        <path
          d="M32 30V52"
          stroke="#0B2A52"
          strokeWidth="2"
        />
        <path
          d="M23 15L41 25"
          stroke="#B79A72"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "LEARN",
    description: "We use results to make the next move smarter.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 sm:h-10 sm:w-10"
      >
        <path
          d="M48 23C43.5 16.5 36 13 28.5 14C20 15.1 13.5 21.5 12.2 30"
          stroke="#0B2A52"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 21V30H21"
          stroke="#B79A72"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 41C20.5 47.5 28 51 35.5 50C44 48.9 50.5 42.5 51.8 34"
          stroke="#0B2A52"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M52 43V34H43"
          stroke="#B79A72"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* ================= HEADER ================= */}
        <div
          className="max-w-[950px] transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0px)"
              : "translateY(45px)",
          }}
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span
              className="h-px w-8 origin-left bg-[#B79A72] transition-transform duration-[900ms] ease-out"
              style={{
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              }}
            />

            <span
              className="text-xs tracking-[0.18em] text-[#B79A72] transition-all duration-[900ms] delay-150 ease-out sm:text-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0px)"
                  : "translateX(-15px)",
              }}
            >
              HOW WE WORK
            </span>
          </div>

         <h2
  className="
    max-w-[1000px]
    text-[clamp(39px,11vw,52px)]
    leading-[1.08]
    tracking-[-0.035em]
    text-[#0B2A52]
    sm:text-[clamp(44px,7vw,58px)]
    lg:text-[clamp(45px,4.5vw,58px)]
    xl:text-[clamp(48px,3.2vw,66px)]
    2xl:text-[clamp(68px,3.8vw,86px)]
  "
>
  Good Work Happens
  <br />

  <span className="relative inline-block">
    When People Think Together.

    <span
      className="
        absolute
        -bottom-3
        left-0
        h-[3px]
        w-16
        origin-left
        bg-[#B79A72]
        transition-transform
        duration-[1000ms]
        delay-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        sm:-bottom-4
        sm:w-20
      "
      style={{
        transform: isVisible ? "scaleX(1)" : "scaleX(0)",
      }}
    />
  </span>
</h2>
        </div>

        {/* ================= PROCESS ================= */}
        <div
          className="relative mt-16 sm:mt-20 lg:mt-24"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Desktop Connecting Line */}
          <div
            className="absolute left-[8%] right-[8%] top-[58px] hidden h-px origin-left bg-[#B79A72]/40 transition-transform duration-[1400ms] delay-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block"
            style={{
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            }}
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-center text-center transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0px)"
                    : "translateY(65px)",
                  transitionDelay: `${600 + index * 150}ms`,
                }}
              >
                {/* ================= CIRCLE ================= */}
                <div
                  className="relative z-10 flex h-[116px] w-[116px] items-center justify-center rounded-full border border-[#0B2A52]/10 bg-white shadow-[0_10px_35px_rgba(11,42,82,0.06)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#B79A72]/50 group-hover:shadow-[0_18px_45px_rgba(11,42,82,0.10)] sm:h-[128px] sm:w-[128px]"
                  style={{
                    transform: isVisible
                      ? "translateX(0px)"
                      : "translateX(80px)",
                    transition:
                      "transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 1000ms ease",
                    transitionDelay: `${700 + index * 160}ms`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {/* Outer Glow Ring */}
                  <span
                    className="pointer-events-none absolute inset-[-8px] rounded-full border border-[#B79A72]/10 transition-all duration-700 group-hover:inset-[-12px] group-hover:border-[#B79A72]/25"
                  />

                  {/* Gold Arc */}
                  <span
                    className={`absolute inset-[-1px] rounded-full border-t-2 border-[#B79A72] transition-transform duration-700 ${
                      index % 2 === 0
                        ? "rotate-[35deg] group-hover:rotate-[120deg]"
                        : "-rotate-[35deg] group-hover:rotate-[-120deg]"
                    }`}
                  />

                  {/* Inner Circle */}
                  <span
                    className="absolute inset-[9px] rounded-full border border-[#0B2A52]/5 transition-all duration-700 group-hover:inset-[6px] group-hover:border-[#B79A72]/15"
                  />

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                {/* ================= NUMBER ================= */}
                <div
                  className="mt-5 text-xs font-semibold tracking-[0.16em] text-[#B79A72] transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(20px)",
                    transitionDelay: `${1000 + index * 160}ms`,
                  }}
                >
                  {step.number}
                </div>

                {/* ================= TITLE ================= */}
                <h3
                  className="mt-2 text-base font-bold tracking-[0.08em] text-[#0B2A52] transition-all duration-700 ease-out sm:text-lg"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(20px)",
                    transitionDelay: `${1100 + index * 160}ms`,
                  }}
                >
                  {step.title}
                </h3>

                {/* ================= DIVIDER ================= */}
                <span
                  className="my-3 h-[2px] w-7 origin-center bg-[#B79A72] transition-all duration-700 ease-out group-hover:w-11"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                    transitionDelay: `${1200 + index * 160}ms`,
                  }}
                />

                {/* ================= DESCRIPTION ================= */}
                <p
                  className="max-w-[190px] text-sm leading-6 text-[#0B2A52]/70 transition-all duration-700 ease-out sm:text-[15px]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(20px)",
                    transitionDelay: `${1250 + index * 160}ms`,
                  }}
                >
                  {step.description}
                </p>

                {/* ================= DESKTOP ARROW ================= */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-[calc(100%-4px)] top-[51px] z-20 hidden transition-all duration-700 ease-out lg:block"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0px)"
                        : "translateX(-25px)",
                      transitionDelay: `${1150 + index * 160}ms`,
                    }}
                  >
                    <svg
                      width="42"
                      height="16"
                      viewBox="0 0 42 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H37"
                        stroke="#B79A72"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M32 3L37 8L32 13"
                        stroke="#B79A72"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* ================= MOBILE CONNECTOR ================= */}
                {index < steps.length - 1 && (
                  <div
                    className="mt-8 flex h-8 flex-col items-center sm:hidden"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0px)"
                        : "translateY(-10px)",
                      transition:
                        "all 700ms cubic-bezier(0.22,1,0.36,1)",
                      transitionDelay: `${1300 + index * 160}ms`,
                    }}
                  >
                    <span className="h-full w-px bg-[#B79A72]/40" />

                    <span className="-mt-1 h-2 w-2 rotate-45 border-r border-b border-[#B79A72]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div
          className="mt-16 border-t border-[#0B2A52]/10 pt-8 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-20 sm:pt-10 lg:mt-24 lg:flex lg:items-end lg:justify-between"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0px)"
              : "translateY(45px)",
            transitionDelay: "1500ms",
          }}
        >
          <p className="max-w-[600px] text-base leading-7 text-[#0B2A52]/65 sm:text-lg">
            The best work doesn't happen when one person has all the answers.
            It happens when the right people keep asking better questions
            together.
          </p>

          <div className="mt-6 flex items-center gap-3 lg:mt-0">
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B79A72] opacity-40"
                style={{
                  animationDuration: "2.5s",
                }}
              />

              <span className="relative h-2 w-2 rounded-full bg-[#B79A72]" />
            </span>

            <span className="text-xs font-semibold tracking-[0.16em] text-[#0B2A52]">
              THINK TOGETHER. BUILD BETTER.
            </span>
          </div>
        </div>
      </div>

      {/* ================= BACKGROUND DETAILS ================= */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-[#B79A72]/10 transition-all duration-[1800ms] ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1) translateX(0px)"
            : "scale(0.7) translateX(-40px)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full border border-[#0B2A52]/5 transition-all duration-[2200ms] ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1) translateX(0px)"
            : "scale(0.7) translateX(-50px)",
          transitionDelay: "300ms",
        }}
      />
    </section>
  );
}