"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "STRATEGY",
    text: "Know where you're going.",
    image: "/about/Strategy.png",
  },
  {
    number: "02",
    title: "CREATIVE",
    text: "Give people a reason to care.",
    image: "/about/creative.png",
  },
  {
    number: "03",
    title: "DISTRIBUTION",
    text: "Get the right message to the right people.",
    image: "/about/distribution.png",
  },
  {
    number: "04",
    title: "GROWTH",
    text: "Measure it. Improve it. Scale it.",
    image: "/about/Growth.png",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhatSharpraysIs() {
  return (
    <section
      id="what-sharprays-is"
      className="
        relative
        overflow-hidden
        bg-white
        text-[#0B2A52]
        pt-20
       pb-10
    sm:pt-24
    sm:pb-12
    lg:pt-28
    lg:pb-14
    xl:pt-32
    xl:pb-16
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND DETAILS
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[360px]
          -top-[280px]
          h-[760px]
          w-[760px]
          rounded-full
          border
          border-[#C6A77A]/[0.035]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[420px]
          -left-[300px]
          h-[700px]
          w-[700px]
          rounded-full
          border
          border-[#0B2A52]/[0.025]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-6
          sm:px-10
          lg:px-14
          xl:px-20
        "
      >
        {/* =======================================================
            CENTERED HEADER
        ======================================================= */}

        <div className="relative flex flex-col items-center text-center">

          {/* Section Label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              mb-7
              flex
              items-center
              justify-center
              gap-4
              sm:mb-8
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#C6A77A]
                sm:w-12
              "
            />

            <span
              className="
                whitespace-nowrap
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#C6A77A]
                sm:text-[10px]
              "
            >
              What SHARPRAYS Actually Is
            </span>

            <span
              className="
                h-px
                w-10
                bg-[#C6A77A]
                sm:w-12
              "
            />
          </motion.div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.95,
              ease,
            }}
            className="
              mx-auto
              max-w-[1100px]
              font-[var(--font-new-york)]
          text-[clamp(1.8rem,3.2vw,3rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.065em]
              text-[#0B2A52]
            "
          >
            So, What Is{"  "}
            <span className=" text-[#C6A77A]">
              SHARPRAYS?
            </span>
          </motion.h2>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease,
            }}
            className="
              mx-auto
              mt-7
              flex
              max-w-[900px]
              items-center
              justify-center
              gap-5
              sm:mt-8
              sm:gap-6
            "
          >
            {/* Left Gold Line */}

            <span
              aria-hidden="true"
              className="
                hidden
                h-[58px]
                w-px
                shrink-0
                bg-[#C6A77A]
                sm:block
              "
            />

            <p
              className="
                max-w-[760px]
                text-center
                text-[15px]
                leading-[1.8]
                text-[#607087]
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              We’re a digital growth partner combining strategy,
              creativity, technology and performance to help ambitious
              businesses build something that lasts.
            </p>

            {/* Right Gold Line */}

            <span
              aria-hidden="true"
              className="
                hidden
                h-[58px]
                w-px
                shrink-0
                bg-[#C6A77A]
                sm:block
              "
            />
          </motion.div>
        </div>

        {/* =======================================================
            PILLARS
        ======================================================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-14
            sm:mt-16
            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-16
            lg:mt-20
            lg:grid-cols-4
            lg:gap-7
            xl:gap-10
          "
        >
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease,
              }}
              className="group relative min-w-0"
            >
              {/* =================================================
                  NUMBER + LINE
              ================================================= */}

              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-between
                "
              >
               

                <span
                  className="
                    h-px
                    w-8
                    bg-[#0B2A52]/10
                    transition-all
                    duration-500
                    group-hover:w-14
                    group-hover:bg-[#C6A77A]/60
                  "
                />
              </div>

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-[190px]
                  w-full
                  sm:h-[205px]
                  lg:h-[185px]
                  xl:h-[205px]
                "
              >
                {/* Soft glow */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[58%]
                    w-[58%]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#C6A77A]/[0.025]
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:h-[72%]
                    group-hover:w-[72%]
                  "
                />

                <Image
                  src={pillar.image}
                  alt={`${pillar.title} — SHARPRAYS`}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="
                    object-contain
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.055]
                  "
                />

                {/* Hover Arrow */}

                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0B2A52]/10
                    bg-white
                    text-[#0B2A52]
                    transition-all
                    duration-500
                    group-hover:border-[#C6A77A]
                    group-hover:bg-[#C6A77A]
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.35}
                    className="
                      transition-transform
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  TITLE + DESCRIPTION
              ================================================= */}

              <div className="mt-6">
                <h3
                  className="
                    font-[var(--font-new-york)]
                    text-[clamp(1.8rem,2.5vw,2.5rem)]
                    font-medium
                    leading-none
                    tracking-[-0.05em]
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  {pillar.title}
                </h3>

                <div className="mt-4 flex items-start gap-3">
                  <span
                    className="
                      mt-[10px]
                      h-px
                      w-7
                      shrink-0
                      bg-[#C6A77A]/60
                      transition-all
                      duration-500
                      group-hover:w-10
                      group-hover:bg-[#C6A77A]
                    "
                  />

                  <p
                    className="
                      max-w-[220px]
                      text-[13px]
                      leading-6
                      text-[#68778A]
                      sm:text-[14px]
                    "
                  >
                    {pillar.text}
                  </p>
                </div>
              </div>

              {/* Bottom Hover Line */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-4
                  left-0
                  h-px
                  w-0
                  bg-[#C6A77A]
                  transition-all
                  duration-500
                  group-hover:w-14
                "
              />
            </motion.article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mt-16
            border-t
            border-[#0B2A52]/[0.07]
            pt-8
            sm:mt-20
            sm:pt-9
            lg:mt-24
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <div
                className="
                  mb-4
                  h-[2px]
                  w-9
                  bg-[#C6A77A]
                "
              />

              <p
                className="
                  font-[var(--font-new-york)]
                  text-[clamp(1.5rem,2.4vw,2.3rem)]
                  font-medium
                  leading-[1.05]
                  tracking-[-0.04em]
                "
              >
                Four disciplines.
                <br />
                <span className="italic text-[#C6A77A]">
                  One growth system.
                </span>
              </p>
            </div>

            <p
              className="
                text-[9px]
                font-medium
                uppercase
                leading-[1.9]
                tracking-[0.18em]
                text-[#0B2A52]/30
                sm:text-right
              "
            >
              Strategy · Creative
              <br />
              Distribution · Growth
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}