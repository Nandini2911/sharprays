"use client";

import React from "react";
import Image from "next/image";
import { Users, Zap, Target, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Small Team",
    text: "Direct access to the people doing the work.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    text: "Quick decisions, rapid testing, better execution.",
  },
  {
    icon: Target,
    title: "Stay Focused",
    text: "Everything we do is tied to meaningful growth.",
  },
];

export default function HumanSection() {
  return (
    <section
      id="human"
      className="w-full overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}
      <div className="mx-auto max-w-[1440px] px-1 sm:px-4 lg:px-5">

      <div
  className="
    grid
    grid-cols-1
    items-center
    gap-8
    pt-8
    pb-12
    sm:gap-10
    sm:pt-10
    sm:pb-16
    lg:min-h-[680px]
    lg:grid-cols-[0.92fr_1.08fr]
    lg:gap-8
    lg:pt-0
    lg:pb-20
  "
>

          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}
          <div className="relative z-10 w-full max-w-[650px] px-3 sm:px-0">

            {/* Label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C6A77A]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B2A52]/80">
                The Human Section
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-serif
              text-[clamp(1.8rem,3.2vw,3rem)]
                
                font-medium
                leading-[0.94]
                tracking-[-0.045em]
              "
            >
              We're Not Here
              <br />
              to Be{" "}
              <span className="italic text-[#C6A77A]">
                Another Agency.
              </span>
            </h2>

            {/* Divider */}
            <div className="mt-8 h-[3px] w-14 bg-[#C6A77A]" />

            {/* Description */}
            <p
              className="mt-7
                text-[clamp(1rem,1.15vw,1.125rem)]
                max-w-[570px]
                
                leading-[1.65]
                text-[#0B2A52]/70
                
              "
            >
              We're building a different kind of digital growth partner—
              small enough to care, sharp enough to move fast, and obsessed
              with making the work matter.
            </p>

            {/* ===================================================
                VALUES
            =================================================== */}
            <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-5">

              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 sm:block"
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F3F6F9]
                        text-[#0B2A52]
                      "
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <div className="sm:mt-3">
                      <h3 className="text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.2] font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-[145px] text-[clamp(0.95rem,1.05vw,1.05rem)] leading-[1.55] text-[#0B2A52]/55">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>


          {/* =====================================================
              RIGHT — IMAGE
          ===================================================== */}
          <div
            className="
              relative
              flex
              min-h-0
              items-center
              justify-center
              sm:min-h-0
              lg:min-h-[620px]
            "
          >
            {/* Image area */}
            <div
              className="
                relative
                h-[480px]
                w-full
                max-w-[700px]
                sm:h-[550px]
                lg:h-[620px]
              "
            >
              <Image
                src="/about.png"
                alt="Our team working together"
                fill
                priority
                className="
                  object-contain
                  object-center
                  lg:object-right
                "
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </div>
      {/* =======================================================
              BOTTOM STATEMENT
          ======================================================= */}
          <div className="mt-0">

            <div
              className="
                flex
                flex-col
                gap-3
                rounded-2xl
                bg-[#F7F8F9]
                px-6
                py-5
                sm:px-8
                md:flex-row
                md:items-center
              "
            >

              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2A52]
                  text-white
                "
              >
                <Users size={17} strokeWidth={1.6} />
              </div>

              {/* Main text */}
              <p className="text-[clamp(1rem,1.15vw,1.125rem)] font-semibold leading-6 ">
                We work best with teams who value honesty,
                collaboration and growth.
              </p>

              {/* Divider */}
              <span className="hidden h-5 w-px bg-[#0B2A52]/15 md:block" />

              {/* Secondary */}
              <p className="text-[clamp(1rem,1.15vw,1.125rem)] leading-6 text-[#0B2A52]/50">
                If that's you, we'll get along just fine.
              </p>

              {/* Arrow */}
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="hidden text-[#D59A52] md:ml-auto md:block"
              />

            </div>

          </div>

      
    </section>
  );
}