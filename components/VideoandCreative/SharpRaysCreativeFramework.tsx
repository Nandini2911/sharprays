"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Eye,
  FileText,
  Megaphone,
  Monitor,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type ResponsibilityItem = {
  number: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

/* =========================================================
   RESPONSIBILITY DATA
========================================================= */

const responsibilityItems: ResponsibilityItem[] = [
  {
    number: "01",
    title: "Permission to use supplied assets",
    icon: BadgeCheck,
    accent: "#3976B6",
    soft: "#EEF6FD",
  },
  {
    number: "02",
    title: "Rights to logos and brand materials",
    icon: ShieldCheck,
    accent: "#B88959",
    soft: "#FBF4EB",
  },
  {
    number: "03",
    title: "Appropriate licensed media",
    icon: FileText,
    accent: "#3976B6",
    soft: "#EEF6FD",
  },
  {
    number: "04",
    title: "Likeness and voice permissions",
    icon: Users,
    accent: "#B88959",
    soft: "#FBF4EB",
  },
  {
    number: "05",
    title: "Factual accuracy",
    icon: Search,
    accent: "#3976B6",
    soft: "#EEF6FD",
  },
  {
    number: "06",
    title: "Disclosure where context reasonably requires it",
    icon: Eye,
    accent: "#B88959",
    soft: "#FBF4EB",
  },
  {
    number: "07",
    title: "Platform advertising requirements",
    icon: Megaphone,
    accent: "#3976B6",
    soft: "#EEF6FD",
  },
  {
    number: "08",
    title: "Intended usage and distribution",
    icon: Monitor,
    accent: "#B88959",
    soft: "#FBF4EB",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ResponsibleAiVideo() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="responsible-ai-video"
      aria-labelledby="responsible-ai-video-heading"
      className="
        relative
        overflow-hidden
        bg-white

        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          LIGHT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* soft center glow */}

        <div
          className="
            absolute
            left-1/2
            top-[18%]

            h-[420px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#EDF6FD]/55
            blur-[150px]
          "
        />

        {/* tiny right arc only */}

        <div
          className="
            absolute
            -right-[340px]
            top-[28%]

            hidden
            h-[650px]
            w-[650px]

            rounded-full

            border
            border-[#C9DEEF]/35

            lg:block
          "
        />

        {/* bottom gold hint */}

        <div
          className="
            absolute
            -bottom-[260px]
            -left-[300px]

            hidden
            h-[560px]
            w-[560px]

            rounded-full

            border
            border-[#B88959]/10

            lg:block
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1400px]

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            mx-auto
            max-w-[1020px]
            text-center
          "
        >
          {/* eyebrow */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-9
                bg-[#B88959]
              "
            />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-[#A9784E]

                sm:text-[10px]
              "
            >
              Creative With Clear Responsibility
            </span>

            <span
              className="
                h-px
                w-9
                bg-[#B88959]
              "
            />
          </div>

          {/* heading */}

          <h2
            id="responsible-ai-video-heading"
            style={newYorkFont}
            className="
              mt-7

              text-[2.6rem]
              font-light
              leading-[0.98]
              tracking-[-0.045em]
              text-[#0B2A52]

              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Just Because Something Can Be Generated
            <span className="text-[#B88959]">
              {" "}
              Doesn&apos;t Mean It Should Be.
            </span>
          </h2>

          {/* intro */}

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-7
              max-w-[730px]

              text-[14px]
              leading-[1.85]
              text-[#526D84]

              sm:text-[16px]
            "
          >
            AI video introduces new creative possibilities, but it also
            requires careful decisions around accuracy, ownership,
            representation and how the final creative will be used.
          </p>
        </motion.div>

        {/* ===================================================
            SMALL PRINCIPLE LINE
        =================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.08,
            ease,
          }}
          className="
            mt-14

            flex
            flex-col
            gap-4

            border-b
            border-[#0B2A52]/10

            pb-5

            sm:mt-16
            sm:flex-row
            sm:items-end
            sm:justify-between

            lg:mt-20
          "
        >
          <div>
            <p
              style={newYorkFont}
              className="
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-[#B88959]
              "
            >
              Responsible AI Video
            </p>

            <p
              style={newYorkFont}
              className="
                mt-2

                text-[15px]
                tracking-[-0.015em]
                text-[#0B2A52]

                sm:text-[17px]
              "
            >
              Where relevant, every project should consider:
            </p>
          </div>

          <span
            style={newYorkFont}
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-[#0B2A52]/35
            "
          >
            01 — 08
          </span>
        </motion.div>

        {/* ===================================================
            RESPONSIBILITY GRID
        =================================================== */}

        <div
          className="
            border-l
            border-[#0B2A52]/10
          "
        >
          <div
            className="
              grid

              grid-cols-1

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {responsibilityItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 25,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion
                      ? 0
                      : index * 0.055,
                    ease,
                  }}
                  style={
                    {
                      "--accent": item.accent,
                      "--soft": item.soft,
                    } as React.CSSProperties
                  }
                  className="
                    group
                    relative

                    min-h-[205px]

                    overflow-hidden

                    border-b
                    border-r
                    border-[#0B2A52]/10

                    bg-white

                    px-6
                    py-7

                    transition-colors
                    duration-500

                    hover:bg-[var(--soft)]

                    sm:min-h-[220px]
                    sm:px-7
                    sm:py-8

                    lg:min-h-[245px]
                    lg:px-7

                    xl:px-8
                  "
                >
                  {/* hover top line */}

                  <span
                    style={{
                      backgroundColor: item.accent,
                    }}
                    className="
                      absolute
                      left-0
                      top-0

                      h-[2px]
                      w-10

                      transition-all
                      duration-500

                      group-hover:w-full
                    "
                  />

                  {/* ghost number */}

          

                  <div
                    className="
                      relative
                      z-10
                    "
                  >
                    {/* top */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-5
                      "
                    >
                      <motion.div
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                rotate: 5,
                                scale: 1.06,
                              }
                        }
                        style={{
                          color: item.accent,
                          borderColor: `${item.accent}30`,
                        }}
                        className="
                          flex
                          h-[44px]
                          w-[44px]
                          items-center
                          justify-center

                          border

                          bg-white/85

                          shadow-[0_6px_22px_rgba(11,42,82,0.05)]
                        "
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.45}
                        />
                      </motion.div>

                    
                    </div>

                    {/* title */}

                    <h3
                      style={newYorkFont}
                      className="
                        mt-8
                        max-w-[235px]

                        text-[19px]
                        font-light
                        leading-[1.2]
                        tracking-[-0.025em]
                        text-[#0B2A52]

                        sm:text-[20px]
                        lg:text-[21px]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* micro line */}

                    <span
                      style={{
                        backgroundColor: item.accent,
                      }}
                      className="
                        mt-6
                        block
                        h-px
                        w-8
                        opacity-50
                      "
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>


        {/* ===================================================
            FINAL PRINCIPLE
        =================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[920px]
            text-center

            sm:mt-16
          "
        >
          <div
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#B88959]/60

                sm:w-16
              "
            />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[#B88959]
              "
            >
              The Principle
            </span>

            <span
              className="
                h-px
                w-10
                bg-[#B88959]/60

                sm:w-16
              "
            />
          </div>

          <h3
            style={newYorkFont}
            className="
              mx-auto
              mt-7

              text-[29px]
              font-light
              leading-[1.08]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[35px]
              md:text-[40px]
              lg:text-[44px]
            "
          >
            Creativity Goes Further When It
            <span className="text-[#B88959]">
              {" "}
              Respects People, Brands and Reality.
            </span>
          </h3>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[620px]

              text-[13px]
              leading-[1.8]
              text-[#647D96]

              sm:text-[14px]
            "
          >
            Trust still matters after the render finishes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}