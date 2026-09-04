"use client";

import React, { useEffect, useRef, useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Nandini",
    role: "Co-Founder / Strategy",
    description: "Turns complicated problems into clear directions.",
    image: "/images/team/nandini.jpg",
  },
  {
    name: "Aman",
    role: "Growth",
    description: "Finds the numbers behind the opportunity.",
    image: "/images/team/aman.jpg",
  },
  {
    name: "Riya",
    role: "Creative",
    description: "Turns ideas into things people remember.",
    image: "/images/team/riya.jpg",
  },
  {
    name: "Kunal",
    role: "Performance",
    description: "Tests, learns and keeps pushing the numbers.",
    image: "/images/team/kunal.jpg",
  },
];

export default function ThePeople() {
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
        threshold: 0.12,
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
          className="relative z-10 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0px)"
              : "translateY(45px)",
          }}
        >
          {/* Section Label */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span
              className="h-px w-8 origin-left bg-[#B79A72] transition-transform duration-[900ms] ease-out"
              style={{
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              }}
            />

            <span
              className="text-xs tracking-[0.18em] text-[#B79A72] transition-all duration-[900ms] ease-out sm:text-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0px)"
                  : "translateX(-15px)",
                transitionDelay: "150ms",
              }}
            >
              THE PEOPLE
            </span>
          </div>

          {/* Heading */}
         <h2
  className="
    relative
    max-w-[1100px]
    text-[clamp(39px,11vw,52px)]
    leading-[1.05]
    tracking-[-0.04em]
    text-[#0B2A52]
    sm:text-[clamp(42px,7vw,58px)]
    md:text-[clamp(44px,5vw,62px)]
    lg:text-[clamp(50px,4vw,72px)]
    xl:text-[clamp(56px,3.5vw,78px)]
    2xl:text-[clamp(64px,3.2vw,86px)]
  "
>
  The People Behind SHARPRAYS

  {/* Gold Dot */}
  <span
    className="
      absolute
      -right-4
      bottom-1
      h-2
      w-2
      rounded-full
      bg-[#B79A72]
      transition-all
      duration-[1000ms]
      ease-[cubic-bezier(0.22,1,0.36,1)]
      sm:-right-6
      sm:h-3
      sm:w-3
    "
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? "scale(1) translateX(0px)"
        : "scale(0) translateX(20px)",
      transitionDelay: "500ms",
    }}
  />
</h2>

          {/* Supporting Text */}
          <div
            className="mt-5 flex items-center gap-4 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0px)"
                : "translateY(25px)",
              transitionDelay: "450ms",
            }}
          >
            <span
              className="h-[2px] w-10 origin-left bg-[#B79A72] transition-transform duration-[700ms] ease-out"
              style={{
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                transitionDelay: "650ms",
              }}
            />

            <p className="text-base leading-7 text-[#0B2A52]/65 sm:text-lg">
              Different skills. One obsession: making the work matter.
            </p>
          </div>
        </div>

        {/* ================= TEAM GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-[2px] border border-[#0B2A52]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#B79A72]/50 hover:shadow-[0_25px_60px_rgba(11,42,82,0.10)]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0px) translateY(0px)"
                  : "translateX(90px) translateY(35px)",
                transition:
                  "opacity 900ms ease, transform 1000ms cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: `${700 + index * 180}ms`,
              }}
            >
              {/* ================= IMAGE AREA ================= */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-[#F5F5F3]">

                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden">

                  {/* Navy Block */}
                  <div
                    className={`absolute bottom-0 h-[43%] w-[82%] bg-[#0B2A52]/95 transition-transform duration-700 group-hover:translate-x-2 ${
                      index % 2 === 0 ? "left-0" : "right-0"
                    }`}
                    style={{
                      transform: isVisible
                        ? "translateX(0px)"
                        : index % 2 === 0
                        ? "translateX(-100px)"
                        : "translateX(100px)",
                      transition:
                        "transform 1100ms cubic-bezier(0.22,1,0.36,1)",
                      transitionDelay: `${850 + index * 180}ms`,
                    }}
                  />

                  {/* Gold Circle */}
                  <div
                    className={`absolute bottom-[27%] h-24 w-24 rounded-full bg-[#B79A72]/80 transition-transform duration-700 group-hover:scale-110 sm:h-28 sm:w-28 ${
                      index % 2 === 0 ? "-left-10" : "-right-10"
                    }`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "scale(1)"
                        : "scale(0.2)",
                      transition:
                        "opacity 800ms ease, transform 1000ms cubic-bezier(0.22,1,0.36,1)",
                      transitionDelay: `${950 + index * 180}ms`,
                    }}
                  />

                  {/* Dot Pattern */}
                  <div
                    className={`absolute top-8 grid grid-cols-3 gap-2 transition-all duration-700 ${
                      index % 2 === 0 ? "right-7" : "left-7"
                    }`}
                    style={{
                      opacity: isVisible ? 0.7 : 0,
                      transform: isVisible
                        ? "translateX(0px)"
                        : index % 2 === 0
                        ? "translateX(25px)"
                        : "translateX(-25px)",
                      transitionDelay: `${1000 + index * 180}ms`,
                    }}
                  >
                    {Array.from({ length: 18 }).map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className="h-1 w-1 rounded-full bg-[#B79A72]"
                      />
                    ))}
                  </div>

                  {/* Decorative Line */}
                  <div
                    className="absolute left-6 top-7 h-px w-16 origin-left bg-[#B79A72]/60 transition-all duration-500 group-hover:w-24"
                    style={{
                      transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                      transitionDelay: `${1100 + index * 180}ms`,
                    }}
                  />
                </div>

                {/* ================= REAL TEAM IMAGE ================= */}
                <div
                  className="absolute inset-x-[8%] bottom-0 top-[8%] flex items-end justify-center transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px) scale(1)"
                      : "translateY(50px) scale(0.96)",
                    transitionDelay: `${1050 + index * 180}ms`,
                  }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="relative z-10 h-full w-full object-contain object-bottom grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#0B2A52]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span
                  className="absolute bottom-4 right-5 z-30 text-xs font-semibold tracking-[0.15em] text-white/70 transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(15px)",
                    transitionDelay: `${1250 + index * 180}ms`,
                  }}
                >
                  0{index + 1}
                </span>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="relative p-6 sm:p-7">

                {/* Name */}
                <h3
                  className="text-[25px] font-semibold tracking-[-0.025em] text-[#0B2A52] transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(20px)",
                    transitionDelay: `${1250 + index * 180}ms`,
                  }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="mt-1 text-sm font-semibold tracking-[0.02em] text-[#B79A72] transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(15px)",
                    transitionDelay: `${1320 + index * 180}ms`,
                  }}
                >
                  {member.role}
                </p>

                {/* Divider */}
                <div
                  className="my-5 h-px w-full bg-[#0B2A52]/10 transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "scaleX(1)"
                      : "scaleX(0)",
                    transformOrigin: "left",
                    transitionDelay: `${1380 + index * 180}ms`,
                  }}
                >
                  <div className="h-full w-8 bg-[#B79A72] transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Description */}
                <p
                  className="max-w-[240px] text-sm leading-6 text-[#0B2A52]/70 transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(18px)",
                    transitionDelay: `${1430 + index * 180}ms`,
                  }}
                >
                  {member.description}
                </p>

                {/* Bottom Arrow */}
                <div
                  className="mt-7 flex items-center justify-between transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(15px)",
                    transitionDelay: `${1490 + index * 180}ms`,
                  }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B2A52]/35">
                    SHARPRAYS
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B79A72]/60 transition-all duration-500 group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-500 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M3 7.5H11.5"
                        stroke="#B79A72"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8.5 4.5L11.5 7.5L8.5 10.5"
                        stroke="#B79A72"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div
          className="mt-12 border-t border-[#0B2A52]/10 pt-7 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-16 sm:flex sm:items-end sm:justify-between sm:pt-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0px)"
              : "translateY(40px)",
            transitionDelay: "1700ms",
          }}
        >
          <p className="max-w-[620px] text-sm leading-6 text-[#0B2A52]/55 sm:text-base">
            Different perspectives. Different strengths. One team working
            toward the same thing — making the work matter.
          </p>

          <div className="mt-5 flex items-center gap-3 sm:mt-0">
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B79A72] opacity-40"
                style={{
                  animationDuration: "2.5s",
                }}
              />
              <span className="relative h-2 w-2 rounded-full bg-[#B79A72]" />
            </span>

            <span className="text-[10px] font-semibold tracking-[0.18em] text-[#0B2A52] sm:text-xs">
              PEOPLE MAKE THE DIFFERENCE.
            </span>
          </div>
        </div>
      </div>

      {/* ================= DECORATIVE BACKGROUND ================= */}
      <div
        className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full border border-[#B79A72]/10 transition-all duration-[1800ms] ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1) translateX(0px)"
            : "scale(0.75) translateX(50px)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full border border-[#0B2A52]/5 transition-all duration-[2000ms] ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1) translateX(0px)"
            : "scale(0.75) translateX(60px)",
          transitionDelay: "250ms",
        }}
      />
    </section>
  );
}