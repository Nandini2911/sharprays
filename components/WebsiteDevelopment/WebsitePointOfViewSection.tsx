"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  Search,
  Settings2,
  Smartphone,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type ProblemItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

/* =========================================================
   DATA
========================================================= */

const leftProblems: ProblemItem[] = [
  {
    number: "01",
    title: "Your Website Looks Professional",
    description:
      "But visitors still struggle to understand exactly what you do.",
    icon: Users,
  },
  {
    number: "03",
    title: "You Have Strong Services",
    description:
      "But important information is buried behind confusing pages or navigation.",
    icon: FileText,
  },
  {
    number: "05",
    title: "You Have Content",
    description:
      "But search engines and users cannot easily understand how everything connects.",
    icon: Search,
  },
];

const rightProblems: ProblemItem[] = [
  {
    number: "02",
    title: "People Are Visiting",
    description: "But too few are taking the next step.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "The Site Works on Desktop",
    description: "But the mobile experience feels compromised.",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "You Keep Adding Features",
    description:
      "But the experience becomes more complicated instead of more useful.",
    icon: Settings2,
  },
];

/* =========================================================
   PROBLEM COPY
========================================================= */

function ProblemCopy({
  item,
  side,
  index,
  reduceMotion,
}: {
  item: ProblemItem;
  side: "left" | "right";
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: side === "left" ? -24 : 24,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
      className={`
        max-w-[275px]
        ${side === "right" ? "ml-auto" : "mr-auto"}
      `}
    >
      <div className="flex items-center gap-3">
        <span
          className="
            font-serif
            text-[0.95rem]
            text-[#B18458]
          "
        >
          {item.number}
        </span>

        <span className="h-px w-7 bg-[#B79A72]" />
      </div>

      <h3
        className="
          mt-2
          font-serif
          text-[1.05rem]
          font-semibold
          leading-[1.2]
          tracking-[-0.025em]
          text-[#0B2A52]
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-2
          text-[0.76rem]
          leading-[1.55]
          text-[#657A8E]
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   ICON NODE
========================================================= */

function IconNode({
  icon: Icon,
  reduceMotion,
  delay = 0,
}: {
  icon: LucideIcon;
  reduceMotion: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.82,
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,
              scale: 1.05,
            }
      }
      className="
        flex
        h-[56px]
        w-[56px]
        items-center
        justify-center

        rounded-full

        border
        border-[#DDE5EA]

        bg-white

        text-[#0B2A52]

        shadow-[0_9px_26px_rgba(11,42,82,0.07)]

        transition-colors
        duration-300

        hover:border-[#D9C4A5]
        hover:bg-[#FCF8F2]
        hover:text-[#B18458]
      "
    >
      <Icon size={22} strokeWidth={1.65} />
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WebsiteProblemSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="website-problem"
      aria-labelledby="website-problem-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
      >
        

        <div
          className="
            absolute
            left-1/2
            top-[48%]

            h-[450px]
            w-[720px]

            -translate-x-1/2

            rounded-full

            bg-[#B79A72]/[0.025]

            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1360px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.72,
            ease,
          }}
          className="
            mx-auto
            max-w-[1020px]
            text-center
          "
        >
          {/* LABEL */}

          <div className="flex items-center justify-center gap-4">
          <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />


            <span
              className="
              
               
                uppercase
                tracking-[0.3em]
                text-[#B79A72]
                text-[10px]
              "
            >
              The Problem
            </span>

   <span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </div>

          {/* HEADING */}

          <h2
            id="website-problem-heading"
            className="
              mx-auto
              mt-6
              max-w-[1020px]

              text-[2.3rem]
              font-medium
              leading-[1.04]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            A Website Can Look Good and Still
            <br className="hidden sm:block" />{" "}
            <span
              className="
                font-serif
                font-normal
                text-[#B79A72]
              "
            >
              Work Against Your Business.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]

              text-[0.88rem]
              leading-[1.65]

              text-[#526A80]

              sm:text-[0.94rem]
            "
          >
            A polished interface can create a strong first impression.
          </p>

          <p
            className="
              mx-auto
              mt-1.5
              max-w-[820px]

              text-[0.82rem]
              leading-[1.65]

              text-[#66798B]

              sm:text-[0.88rem]
            "
          >
            But design alone cannot fix confusing navigation, slow pages,
            unclear messaging or a poor customer journey.
          </p>
        </motion.div>

        {/* =====================================================
            SECOND HEADING
        ===================================================== */}

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
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-11
            max-w-[850px]
            text-center

            sm:mt-12
          "
        >
          <div className="flex items-center justify-center gap-4">
            <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />


            <span
              className="
                text-[0.52rem]
              
                uppercase
                tracking-[0.27em]
                text-[#B79A72]
              "
            >
              Does This Sound Familiar?
            </span>
<span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </div>

          <h3
            className="
              mt-5

              font-serif
              text-[1.8rem]
              font-normal
              leading-[1.12]
              tracking-[-0.035em]

              text-[#0B2A52]

              sm:text-[2rem]
              lg:text-[2.2rem]
            "
          >
            Where good-looking websites start losing people.
          </h3>
        </motion.div>

        {/* =====================================================
            DESKTOP JOURNEY
        ===================================================== */}

        <div
          className="
            relative

            mx-auto
            mt-10

            hidden

            min-h-[500px]
            max-w-[1060px]

            lg:block
          "
        >
          {/* =================================================
              SIDE MICROCOPY
          ================================================= */}

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -15,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: 0.1,
              ease,
            }}
            className="
              absolute
              -left-[70px]
              top-[18px]

              -rotate-[4deg]

              font-serif
              text-[0.95rem]
              italic
              leading-[1.15]

              text-[#8AA5BD]
            "
          >
            Looks great
            <br />
            at first...
          </motion.p>

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 15,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: 0.5,
              ease,
            }}
            className="
              absolute
              -right-[95px]
              bottom-[25px]

              rotate-[3deg]

              text-right

              font-serif
              text-[0.95rem]
              italic
              leading-[1.15]

              text-[#8AA5BD]
            "
          >
            ...but something
            <br />
            feels off.
          </motion.p>

          {/* =================================================
              LEFT PROBLEMS
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-[58px]

              space-y-[66px]
            "
          >
            {leftProblems.map((item, index) => (
              <ProblemCopy
                key={item.number}
                item={item}
                side="left"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              RIGHT PROBLEMS
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-[100px]

              space-y-[66px]
            "
          >
            {rightProblems.map((item, index) => (
              <ProblemCopy
                key={item.number}
                item={item}
                side="right"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              CENTER PATH
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-0

              h-[500px]
              w-[360px]

              -translate-x-1/2
            "
          >
            {/* PATH */}

            <svg
              viewBox="0 0 360 500"
              fill="none"
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
              "
              aria-hidden="true"
            >
              {/* BASE */}

              <path
                d="
                  M 185 30
                  C 112 38, 115 75, 150 83
                  C 190 92, 240 92, 245 130
                  C 250 168, 130 150, 132 194
                  C 135 232, 245 230, 245 268
                  C 245 304, 132 292, 132 342
                  C 132 377, 230 380, 235 410
                  C 240 440, 155 433, 155 468
                "
                stroke="#D0DCE5"
                strokeWidth="1.3"
                strokeLinecap="round"
              />

              {/* ANIMATED PATH */}

              <motion.path
                d="
                  M 185 30
                  C 112 38, 115 75, 150 83
                  C 190 92, 240 92, 245 130
                  C 250 168, 130 150, 132 194
                  C 135 232, 245 230, 245 268
                  C 245 304, 132 292, 132 342
                  C 132 377, 230 380, 235 410
                  C 240 440, 155 433, 155 468
                "
                stroke="#7198B7"
                strokeWidth="1.25"
                strokeLinecap="round"
                initial={
                  reduceMotion
                    ? false
                    : {
                        pathLength: 0,
                        opacity: 0,
                      }
                }
                whileInView={{
                  pathLength: 1,
                  opacity: 0.72,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.35,
                  ease,
                }}
              />

              {/* DOTS */}

              {[
                [185, 30],
                [150, 83],
                [245, 130],
                [132, 194],
                [245, 268],
                [132, 342],
                [155, 468],
              ].map(([cx, cy], index) => (
                <g key={index}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="11"
                    fill={
                      index === 6
                        ? "rgba(183,154,114,0.12)"
                        : "rgba(98,142,179,0.10)"
                    }
                  />

                  <circle
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill={
                      index === 6
                        ? "#B79A72"
                        : "#356E9E"
                    }
                  />
                </g>
              ))}
            </svg>

            {/* =================================================
                ICONS
            ================================================= */}

            <div className="absolute left-[16px] top-[48px]">
              <IconNode
                icon={Users}
                reduceMotion={reduceMotion}
                delay={0.12}
              />
            </div>

            <div className="absolute right-[6px] top-[94px]">
              <IconNode
                icon={BarChart3}
                reduceMotion={reduceMotion}
                delay={0.18}
              />
            </div>

            <div className="absolute left-[15px] top-[178px]">
              <IconNode
                icon={FileText}
                reduceMotion={reduceMotion}
                delay={0.24}
              />
            </div>

            <div className="absolute right-[7px] top-[232px]">
              <IconNode
                icon={Smartphone}
                reduceMotion={reduceMotion}
                delay={0.3}
              />
            </div>

            <div className="absolute left-[15px] top-[318px]">
              <IconNode
                icon={Search}
                reduceMotion={reduceMotion}
                delay={0.36}
              />
            </div>

            <div className="absolute right-[5px] top-[375px]">
              <IconNode
                icon={Settings2}
                reduceMotion={reduceMotion}
                delay={0.42}
              />
            </div>

            {/* =================================================
                JOURNEY LABELS
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 8,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: 0.25,
                ease,
              }}
              className="
                absolute
                left-[185px]
                top-[15px]
              "
            >
              <span
                className="
                  text-[0.47rem]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#356E9E]
                "
              >
                Visit
              </span>

              <p
                className="
                  mt-0.5
                  text-[0.58rem]
                  text-[#71879A]
                "
              >
                High expectations
              </p>
            </motion.div>

            <div
              className="
                absolute
                left-[130px]
                top-[92px]

                text-center
              "
            >
              <span
                className="
                  text-[0.44rem]
                  font-semibold
                  uppercase
                  leading-[1.4]
                  tracking-[0.14em]
                  text-[#678198]
                "
              >
                Confusion
                <br />
                sets in
              </span>
            </div>

            <div
              className="
                absolute
                left-[190px]
                top-[188px]

                text-center
              "
            >
              <span
                className="
                  text-[0.44rem]
                  font-semibold
                  uppercase
                  leading-[1.4]
                  tracking-[0.14em]
                  text-[#678198]
                "
              >
                Lost
                <br />
                attention
              </span>
            </div>

            <div
              className="
                absolute
                left-[165px]
                top-[323px]

                text-center
              "
            >
              <span
                className="
                  text-[0.44rem]
                  font-semibold
                  uppercase
                  leading-[1.4]
                  tracking-[0.14em]
                  text-[#678198]
                "
              >
                Unclear
                <br />
                next step
              </span>
            </div>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 8,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: 0.65,
                ease,
              }}
              className="
                absolute
                left-[175px]
                bottom-[8px]
              "
            >
              <span
                className="
                  text-[0.47rem]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#B18458]
                "
              >
                People Leave
              </span>

              <p
                className="
                  mt-0.5
                  text-[0.58rem]
                  text-[#788B9A]
                "
              >
                Unmet potential
              </p>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-[760px]

            lg:hidden
          "
        >
          <div className="relative">
            {/* LINE */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-8
                left-[25px]
                top-8

                w-px

                bg-gradient-to-b
                from-[#356E9E]
                via-[#D3DDE5]
                to-[#B79A72]
              "
            />

            <div className="space-y-6">
              {[...leftProblems, ...rightProblems]
                .sort(
                  (a, b) =>
                    Number(a.number) -
                    Number(b.number),
                )
                .map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: -18,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion
                          ? 0
                          : index * 0.05,
                        ease,
                      }}
                      className="
                        relative
                        flex
                        gap-5
                      "
                    >
                      {/* ICON */}

                      <span
                        className="
                          relative
                          z-10

                          flex
                          h-[50px]
                          w-[50px]
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          border
                          border-[#DDE5EA]

                          bg-white

                          text-[#0B2A52]

                          shadow-[0_7px_20px_rgba(11,42,82,0.06)]
                        "
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                        />
                      </span>

                      {/* COPY */}

                      <div
                        className="
                          flex-1

                          border-b
                          border-[#E3E6E8]

                          pb-5
                        "
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="
                              font-serif
                              text-[0.9rem]

                              text-[#B18458]
                            "
                          >
                            {item.number}
                          </span>

                          <span className="h-px w-6 bg-[#B79A72]" />
                        </div>

                        <h3
                          className="
                            mt-2

                            font-serif
                            text-[1rem]
                            font-semibold
                            leading-[1.3]

                            text-[#0B2A52]
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-2

                            text-[0.78rem]
                            leading-[1.6]

                            text-[#687C8E]
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}