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

const team = [
  
{
  name: "Ravish Verma",
  role: "Founder & Growth Strategist",
  description:
    "Specializes in SEO, paid media, and content creation, with 5+ years of experience building performance-driven growth strategies.",
  image: "/Ravish.jpeg",
},

{
  name: "Nandini Yadav",
  role: "Full-Stack Developer & Growth Strategist",
  description:
    "Combines full-stack development and growth strategy to build high-performing digital experiences, with 3+ years of experience and 20+ projects delivered.",
  image: "/Nandini.jpeg",
},

{
  name: "Ritika Tiwari",
  role: "Web Developer",
  description:
    "Builds clean, responsive, and user-focused websites, backed by an MCA and 1+ year of hands-on web development experience.",
  image: "/Ritika.jpeg",
},

{
  name: "Amitesh Singh",
  role: "AI Specialist",
  description:
    "Brings 5+ years of experience in AI, turning emerging technologies into practical solutions, smarter workflows, and meaningful business impact.",
  image: "/Amitesh.jpeg",
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
    min-h-[680px]
    grid-cols-1
    items-center
    gap-10
    pt-0
    pb-16
    lg:grid-cols-[0.92fr_1.08fr]
    lg:gap-8
    lg:pt-0
    lg:pb-20
  "
>

          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}
          <div className="relative z-10 max-w-[650px]">

            {/* Label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C6A77A]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B2A52]/80">
                The Human Section
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                font-serif
                text-[clamp(3rem,3vw,3rem)]
                font-medium
                leading-[0.94]
                tracking-[-0.045em]
              "
            >
              We're Not Here
              <br />
              to Be{" "}
              <span className=" text-[#C6A77A]">
                Another Agency.
              </span>
            </h2>

            {/* Divider */}
            <div className="mt-8 h-[3px] w-14 bg-[#C6A77A]" />

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[570px]
                text-[16px]
                leading-[1.75]
                text-[#0B2A52]/70
                sm:text-[18px]
              "
            >
              We're building a different kind of digital growth partner—
              small enough to care, sharp enough to move fast, and obsessed
              with making the work matter.
            </p>

            {/* ===================================================
                VALUES
            =================================================== */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">

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
                      <h3 className="text-[14px] font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-[145px] text-[11px] leading-[1.55] text-[#0B2A52]/55">
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
              min-h-[480px]
              items-center
              justify-center
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


      {/* =========================================================
          TEAM
      ========================================================= */}
      <div className="">

        <div className="mx-auto max-w-[1320px] px-1 py-5 sm:px-8 lg:px-1 lg:py-5">

          {/* Heading */}
          <div className="mb-12 text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
              The People Behind The Work
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[clamp(2.2rem,4vw,3.8rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.04em]
              "
            >
              The people who{" "}
              <span className=" text-[#C6A77A]">
                make it happen.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-[560px] text-sm leading-7 text-[#0B2A52]/55">
              Small team. Senior thinking. No unnecessary layers between
              the idea and the work.
            </p>
          </div>


          {/* =======================================================
              TEAM CARDS
          ======================================================= */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {team.map((person, index) => (
              <div
                key={person.name}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-[#F7F8F9]
                  transition-transform
                  duration-500
                  hover:-translate-y-1
                "
              >

                <div className="grid grid-cols-[43%_57%]">

                  {/* Image */}
                  <div className="relative min-h-[300px] overflow-hidden sm:min-h-[350px]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.03]
                      "
                      sizes="(max-width: 768px) 43vw, 330px"
                    />
                  </div>


                  {/* Content */}
                  <div className="flex min-h-[300px] flex-col justify-between p-5 sm:min-h-[350px] sm:p-7">

                    <div>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D59A52]">
                        0{index + 1}
                      </span>

                      <h4
                        className="
                          mt-3
                          font-serif
                          text-[22px]
                          leading-tight
                          tracking-[-0.025em]
                        "
                      >
                        {person.name}
                      </h4>

                      <p className="mt-1 text-[12px] font-medium leading-5 text-[#D18F42]">
                        {person.role}
                      </p>

                      <div className="mt-5 h-[2px] w-8 bg-[#D59A52]" />

                      <p className="mt-5 max-w-[230px] text-[12px] leading-[1.7] text-[#0B2A52]/60">
                        {person.description}
                      </p>

                    </div>


                    {/* LinkedIn */}
                    <a
                      href="#"
                      aria-label={`${person.name} LinkedIn`}
                      className="
                        mt-6
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D59A52]
                        text-[12px]
                        font-bold
                        text-[#D18F42]
                        transition-all
                        duration-300
                        hover:bg-[#D59A52]
                        hover:text-white
                      "
                    >
                      in
                    </a>

                  </div>
                </div>
              </div>
            ))}

          </div>


          {/* =======================================================
              BOTTOM STATEMENT
          ======================================================= */}
          <div className="mt-6">

            <div
              className="
                flex
                flex-col
                gap-4
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
              <p className="text-[13px] font-semibold leading-6 sm:text-[14px]">
                We work best with teams who value honesty,
                collaboration and growth.
              </p>

              {/* Divider */}
              <span className="hidden h-5 w-px bg-[#0B2A52]/15 md:block" />

              {/* Secondary */}
              <p className="text-[12px] leading-6 text-[#0B2A52]/50">
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

        </div>
      </div>
    </section>
  );
}