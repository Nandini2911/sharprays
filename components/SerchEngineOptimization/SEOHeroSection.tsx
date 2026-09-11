"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SEOHeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 26,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease,
      },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 55,
      scale: reduceMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.2,
        ease,
      },
    },
  };

  return (
    <section
      id="seo-hero"
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-white
        text-[#0B2A52]
        sm:min-h-[760px]
        lg:min-h-screen
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE

          public/services/seo-bg.png
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/services/seo/seo-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =========================================================
          BACKGROUND OVERLAY
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-white/95
          via-white/72
          to-white/10
          lg:from-white/92
          lg:via-white/48
          lg:to-transparent
        "
      />

      {/* LEFT SOFT LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[20%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/70
          blur-[110px]
        "
      />

      {/* NAVY SOFT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[-170px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#0B2A52]/[0.05]
          blur-[120px]
        "
      />

      {/* GOLD SOFT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          right-[20%]
          top-[20%]
          h-[330px]
          w-[330px]
          rounded-full
          bg-[#C6A77A]/[0.07]
          blur-[100px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[720px]
          max-w-[1500px]
          items-center
          px-5
          py-24
          sm:min-h-[760px]
          sm:px-8
          md:py-28
          lg:min-h-screen
          lg:px-12
          lg:pb-16
          lg:pt-28
          xl:px-16
          xl:pb-20
          xl:pt-32
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-4
            xl:grid-cols-[0.88fr_1.12fr]
            xl:gap-6
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              staggerChildren: 0.1,
            }}
            className="relative z-20 max-w-[590px]"
          >
            {/* EYEBROW */}

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C6A77A]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#C6A77A]
                  sm:text-[10px]
                "
              >
                SEARCH ENGINE OPTIMIZATION
              </span>
            </motion.div>

            {/* =====================================================
                MAIN HEADING
            ====================================================== */}

            <motion.h1
              variants={fadeUp}
              className="
                mt-6
                max-w-[560px]
                text-[2.2rem]
                font-medium
                leading-[1.08]
                tracking-[-0.035em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              SEO That Helps the
              <br />
              Right Customers
              <br />

              <span className="text-[#C6A77A]">
                Find You.
              </span>
            </motion.h1>

            {/* =====================================================
                DESCRIPTION 01
            ====================================================== */}

            <motion.p
              variants={fadeUp}
              className="
                mt-6
                max-w-[510px]
                text-[13px]
                leading-7
                text-[#0B2A52]/60
                sm:text-sm
              "
            >
              Sharp Rays is an SEO agency helping businesses improve organic
              visibility, strengthen search performance and turn relevant
              searches into meaningful website visits and business
              opportunities.
            </motion.p>

            {/* =====================================================
                DESCRIPTION 02
            ====================================================== */}

            <motion.p
              variants={fadeUp}
              className="
                mt-4
                max-w-[510px]
                text-[13px]
                leading-7
                text-[#0B2A52]/60
                sm:text-sm
              "
            >
              From technical SEO and keyword strategy to on-page optimization,
              content and performance analysis, we connect every part of your
              SEO around one goal:
            </motion.p>

            {/* =====================================================
                MAIN SEO GOAL
            ====================================================== */}

            <motion.div
              variants={fadeUp}
              className="
                mt-4
                flex
                max-w-[520px]
                items-start
                gap-3
              "
            >
              <span
                className="
                  mt-[7px]
                  h-8
                  w-[2px]
                  shrink-0
                  rounded-full
                  bg-[#C6A77A]
                "
              />

              <p
                className="
                  text-[13px]
                  font-semibold
                  leading-7
                  text-[#C6A77A]
                  sm:text-sm
                "
              >
                Make your business easier to find when the right people are
                searching.
              </p>
            </motion.div>

            {/* =====================================================
                CTA BUTTONS
            ====================================================== */}

            <motion.div
              variants={fadeUp}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              {/* PRIMARY CTA */}

              <a
                href="#contact"
                className="
                  group
                  relative
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-6
                  overflow-hidden
                  rounded-full
                  bg-[#0B2A52]
                  px-6
                  text-[11px]
                  font-medium
                  text-white
                  shadow-[0_10px_30px_rgba(11,42,82,0.16)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_16px_38px_rgba(11,42,82,0.23)]
                "
              >
                {/* BUTTON SHINE */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-[120%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-[120%]
                  "
                />

                <span className="relative z-10">
                  Improve My Search Visibility
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.8}
                  className="
                    relative
                    z-10
                    text-[#C6A77A]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* SECONDARY CTA */}

              <a
                href="#seo-approach"
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-6
                  rounded-full
                  border
                  border-[#0B2A52]/25
                  bg-white/45
                  px-6
                  text-[11px]
                  font-medium
                  text-[#0B2A52]
                  shadow-[0_8px_28px_rgba(11,42,82,0.04)]
                  backdrop-blur-lg
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C6A77A]/70
                  hover:bg-white/75
                  hover:shadow-[0_12px_32px_rgba(11,42,82,0.08)]
                "
              >
                <span>Explore Our SEO Approach</span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.8}
                  className="
                    text-[#C6A77A]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </motion.div>

            {/* =====================================================
                SUPPORTING LINE
            ====================================================== */}

            <motion.div
              variants={fadeUp}
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >
              <div className="h-px w-10 bg-[#0B2A52]/12" />

              <p
                className="
                  text-[8px]
                  font-medium
                  tracking-[0.19em]
                  text-[#0B2A52]/40
                "
              >
                TECHNICAL · CONTENT · AUTHORITY · GROWTH
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT SEO IMAGE

              public/services/seo-hero.png
          ====================================================== */}

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative
              mt-10
              flex
              min-h-[390px]
              w-full
              items-center
              justify-center
              lg:mt-0
              lg:min-h-[570px]
              lg:justify-end
              xl:min-h-[600px]
            "
          >
            {/* ===================================================
                LARGE BACK ORBIT
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.3,
                delay: 0.35,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                right-[7%]
                top-1/2
                hidden
                h-[500px]
                w-[500px]
                -translate-y-1/2
                rounded-full
                border
                border-[#C6A77A]/15
                lg:block
              "
            />

            {/* SECOND ORBIT */}

            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.88,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.3,
                delay: 0.45,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                right-[14%]
                top-1/2
                hidden
                h-[390px]
                w-[390px]
                -translate-y-1/2
                rounded-full
                border
                border-[#0B2A52]/[0.06]
                lg:block
              "
            />

            {/* IMAGE BACK GLOW */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.4,
                delay: 0.25,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                right-[8%]
                top-1/2
                h-[360px]
                w-[360px]
                -translate-y-1/2
                rounded-full
                bg-[#0B2A52]/[0.06]
                blur-[95px]
                sm:h-[430px]
                sm:w-[430px]
                lg:h-[500px]
                lg:w-[500px]
              "
            />

            {/* ===================================================
                MAIN IMAGE
            =================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-full
                max-w-[680px]
                lg:ml-auto
                lg:mr-0
                lg:max-w-[760px]
                xl:max-w-[800px]
              "
            >
              <Image
                src="/services/seo/seo-bg2.png"
                alt="SEO search visibility and organic growth illustration"
                width={950}
                height={760}
                priority
                className="
                  h-auto
                  w-full
                  object-contain
                  object-center
                  drop-shadow-[0_32px_55px_rgba(11,42,82,0.10)]
                "
              />
            </motion.div>

            {/* ===================================================
                DECORATIVE DETAILS
            =================================================== */}

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 1, 0.6],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                right-[11%]
                top-[15%]
                hidden
                h-2
                w-2
                rounded-full
                bg-[#C6A77A]
                shadow-[0_0_24px_rgba(198,167,122,0.55)]
                lg:block
              "
            />

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 5, 0],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-[17%]
                left-[15%]
                hidden
                h-1.5
                w-1.5
                rounded-full
                bg-[#0B2A52]/35
                lg:block
              "
            />
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL TO EXPLORE
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 14,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          items-center
          gap-3
          sm:flex
        "
      >
        <span
          className="
            text-[8px]
            font-medium
            tracking-[0.25em]
            text-[#0B2A52]/30
          "
        >
          SCROLL TO EXPLORE
        </span>

        <ArrowDown
          size={11}
          strokeWidth={1.6}
          className="animate-bounce text-[#C6A77A]"
        />
      </motion.div>
    </section>
  );
}