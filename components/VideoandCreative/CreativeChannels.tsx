"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  Megaphone,
  Monitor,
  Package,
  Play,
  Rocket,
  Smartphone,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   USE CASES
========================================================= */

const useCases = [
  {
    number: "01",
    title: "Social Media",
    description:
      "Reels, Shorts, educational clips, branded series and platform-native videos.",
    icon: Smartphone,
    accent: "#3976B6",
    soft: "#E4F1FC",
  },
  {
    number: "02",
    title: "Paid Advertising",
    description:
      "Creative variations, hooks, product videos and conversion-focused edits.",
    icon: Megaphone,
    accent: "#BD6247",
    soft: "#FBE8E1",
  },
  {
    number: "03",
    title: "Products",
    description:
      "Demonstrations, concept visuals, feature videos and launch creative.",
    icon: Package,
    accent: "#B57A31",
    soft: "#FCEFD9",
  },
  {
    number: "04",
    title: "Services",
    description:
      "Explainers that make difficult or intangible offers easier to understand.",
    icon: Briefcase,
    accent: "#27816A",
    soft: "#E2F3EC",
  },
  {
    number: "05",
    title: "Founders & Experts",
    description:
      "Interviews, talking-head edits, insights, thought leadership and repurposed content.",
    icon: Users,
    accent: "#7059B0",
    soft: "#ECE7F8",
  },
  {
    number: "06",
    title: "Websites",
    description:
      "Hero videos, service explainers, background visuals and product demonstrations.",
    icon: Monitor,
    accent: "#3976B6",
    soft: "#E4F1FC",
  },
  {
    number: "07",
    title: "Campaigns",
    description:
      "Visual concepts, launch assets and multiple creative formats around one central idea.",
    icon: Rocket,
    accent: "#B57A31",
    soft: "#FCEFD9",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AiVideoUseCases() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-use-cases"
      aria-labelledby="ai-video-use-cases-heading"
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
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-[230px]
            top-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#3976B6]/[0.07]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-[230px]
            top-[35%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#C6A77A]/10
            blur-[140px]
          "
        />

        <span
          style={newYorkFont}
          className="
            absolute
            left-1/2
            top-[34%]
            hidden
            -translate-x-1/2
            whitespace-nowrap
            text-[180px]
            font-light
            leading-none
            tracking-[-0.08em]
            text-[#0B2A52]/[0.018]
            lg:block
            xl:text-[220px]
          "
        >
          USE CASES
        </span>
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
          max-w-[1440px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            grid
            gap-9
            lg:grid-cols-[0.32fr_0.68fr]
            lg:items-end
          "
        >
          {/* LEFT */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -35,
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
              duration: reduceMotion ? 0 : 0.8,
              ease,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[#C6A77A]
                  sm:text-[10px]
                "
              >
                Where AI Video Can Fit
              </span>
            </div>

            <p
              style={newYorkFont}
              className="
                mt-5
                max-w-[300px]
                text-[10px]
                uppercase
                leading-[1.8]
                tracking-[0.15em]
                text-[#344054]/45
              "
            >
              One production system.
              <br />
              Different business jobs.
            </p>
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="ai-video-use-cases-heading"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
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
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
            style={newYorkFont}
            className="
              max-w-[900px]
              text-[2.1rem]
              font-light
              leading-[0.98]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            One Production System.{" "}
            <span className="text-[#C6A77A]">
              Different Business Jobs.
            </span>
          </motion.h2>
        </div>

        {/* =====================================================
            INTRO COPY
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            duration: reduceMotion ? 0 : 0.75,
            delay: reduceMotion ? 0 : 0.14,
            ease,
          }}
          className="
            mt-11
            grid
            gap-5
            border-t
            border-[#0B2A52]/10
            pt-7

            md:grid-cols-2
            md:gap-14
          "
        >
          <div>
            <p
              style={newYorkFont}
              className="
                max-w-[630px]
                text-[14px]
                leading-[1.75]
                text-[#344054]
                sm:text-[16px]
              "
            >
              AI video and editing can support different parts of your
              marketing depending on what you need to communicate.
            </p>
          </div>

          <div>
            <p
              style={newYorkFont}
              className="
                max-w-[630px]
                text-[13px]
                leading-[1.75]
                text-[#344054]/70
                sm:text-[15px]
              "
            >
              The format, pacing and creative direction can change from one
              business job to another while the brand still remains
              recognizable.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            DESKTOP CONSTELLATION
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-20
            hidden
            min-h-[900px]
            max-w-[1180px]
            lg:block
          "
        >
          {/* =================================================
              CONNECTION PATHS
          ================================================= */}

          <div className="pointer-events-none absolute inset-0">
            <svg
              viewBox="0 0 1180 900"
              className="h-full w-full"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* BASE PATHS */}

              {[
                "M590 390 C480 285 365 205 220 150",
                "M590 390 C700 285 815 205 960 150",
                "M590 390 C455 385 350 385 220 400",
                "M590 390 C725 385 830 385 960 400",
                "M590 390 C455 515 355 600 225 650",
                "M590 390 C725 515 825 600 955 650",
                "M590 390 C590 555 590 680 590 810",
              ].map((path) => (
                <path
                  key={path}
                  d={path}
                  stroke="#0B2A52"
                  strokeOpacity="0.08"
                  strokeWidth="1.4"
                />
              ))}

              {/* ANIMATED PATHS */}

              {[
                {
                  d: "M590 390 C480 285 365 205 220 150",
                  color: useCases[0].accent,
                  delay: 0,
                },
                {
                  d: "M590 390 C700 285 815 205 960 150",
                  color: useCases[1].accent,
                  delay: 0.08,
                },
                {
                  d: "M590 390 C455 385 350 385 220 400",
                  color: useCases[2].accent,
                  delay: 0.16,
                },
                {
                  d: "M590 390 C725 385 830 385 960 400",
                  color: useCases[3].accent,
                  delay: 0.24,
                },
                {
                  d: "M590 390 C455 515 355 600 225 650",
                  color: useCases[4].accent,
                  delay: 0.32,
                },
                {
                  d: "M590 390 C725 515 825 600 955 650",
                  color: useCases[5].accent,
                  delay: 0.4,
                },
                {
                  d: "M590 390 C590 555 590 680 590 810",
                  color: useCases[6].accent,
                  delay: 0.48,
                },
              ].map((path) => (
                <motion.path
                  key={path.d}
                  d={path.d}
                  stroke={path.color}
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  initial={{
                    pathLength: reduceMotion ? 1 : 0,
                    opacity: reduceMotion ? 0.55 : 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 0.55,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.25,
                    delay: reduceMotion ? 0 : path.delay,
                    ease,
                  }}
                />
              ))}
            </svg>
          </div>

          {/* =================================================
              ORBIT RINGS
          ================================================= */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[390px]
              h-[350px]
              w-[350px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-[#0B2A52]/[0.07]
            "
          >
            <span
              className="
                absolute
                left-[9%]
                top-[18%]
                h-2
                w-2
                rounded-full
                bg-[#C6A77A]
              "
            />

            <span
              className="
                absolute
                bottom-[12%]
                right-[16%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#6285AD]
              "
            />
          </motion.div>

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: -360,
                  }
            }
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[390px]
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#C6A77A]/15
            "
          />

          {/* =================================================
              CENTRAL MESSAGE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.9,
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
              duration: reduceMotion ? 0 : 0.9,
              ease,
            }}
            className="
              absolute
              left-1/2
              top-[390px]
              z-20

              flex
              h-[215px]
              w-[215px]
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
              justify-center

              rounded-full
              bg-[#0B2A52]

              text-center

              shadow-[0_28px_80px_rgba(11,42,82,0.22)]
            "
          >
            <div
              className="
                absolute
                inset-[10px]
                rounded-full
                border
                border-white/10
              "
            />

            <span
              style={newYorkFont}
              className="
                relative
                z-10
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-[#C6A77A]
              "
            >
              One
            </span>

            <span
              style={newYorkFont}
              className="
                relative
                z-10
                mt-3
                text-[29px]
                font-light
                leading-[0.96]
                tracking-[-0.045em]
                text-white
              "
            >
              PRODUCTION
              <br />
              SYSTEM
            </span>

            <span
              style={newYorkFont}
              className="
                relative
                z-10
                mt-3
                max-w-[145px]
                text-[7px]
                uppercase
                leading-[1.55]
                tracking-[0.16em]
                text-white/40
              "
            >
              Adapted Around the Job
            </span>
          </motion.div>

          {/* =================================================
              USE CASE NODES
          ================================================= */}

          <UseCaseNode
            item={useCases[0]}
            className="
              absolute
              left-0
              top-[70px]
              w-[355px]
            "
            reduceMotion={reduceMotion}
            animationX={-35}
          />

          <UseCaseNode
            item={useCases[1]}
            className="
              absolute
              right-0
              top-[70px]
              w-[355px]
            "
            reduceMotion={reduceMotion}
            animationX={35}
          />

          <UseCaseNode
            item={useCases[2]}
            className="
              absolute
              left-0
              top-[320px]
              w-[355px]
            "
            reduceMotion={reduceMotion}
            animationX={-35}
          />

          <UseCaseNode
            item={useCases[3]}
            className="
              absolute
              right-0
              top-[320px]
              w-[355px]
            "
            reduceMotion={reduceMotion}
            animationX={35}
          />

          <UseCaseNode
            item={useCases[4]}
            className="
              absolute
              left-0
              top-[570px]
              w-[355px]
            "
            reduceMotion={reduceMotion}
            animationX={-35}
          />

          <UseCaseNode
            item={useCases[5]}
            className="
              absolute
              right-0
              top-[570px]
              w-[355px]
            "
            reduceMotion={reduceMotion}
            animationX={35}
          />

          <UseCaseNode
            item={useCases[6]}
            className="
              absolute
              bottom-0
              left-1/2
              w-[450px]
              -translate-x-1/2
            "
            reduceMotion={reduceMotion}
            animationY={30}
            centered
          />
        </div>

        {/* =====================================================
            MOBILE / TABLET FLOW
        ===================================================== */}

        <div
          className="
            relative
            mt-16
            lg:hidden
          "
        >
          {/* CENTER */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.92,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              mx-auto
              flex
              h-[155px]
              w-[155px]
              flex-col
              items-center
              justify-center
              rounded-full
              bg-[#0B2A52]
              text-center
              shadow-[0_20px_55px_rgba(11,42,82,0.18)]
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.19em]
                text-[#C6A77A]
              "
            >
              One
            </span>

            <span
              style={newYorkFont}
              className="
                mt-2
                text-[22px]
                font-light
                leading-[0.95]
                text-white
              "
            >
              PRODUCTION
              <br />
              SYSTEM
            </span>
          </motion.div>

          {/* LINE */}

          <motion.div
            initial={{
              scaleY: reduceMotion ? 1 : 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.3,
              ease,
            }}
            className="
              absolute
              bottom-0
              left-[25px]
              top-[175px]
              w-px
              origin-top
              bg-gradient-to-b
              from-[#C6A77A]
              via-[#6285AD]/35
              to-[#B57A31]
            "
          />

          <div className="mt-12 space-y-10">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: index % 2 === 0 ? -25 : 25,
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
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-[52px_1fr]
                    gap-5
                  "
                >
                  {/* MARKER */}

                  <div
                    style={{
                      backgroundColor: item.accent,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-[50px]
                      w-[50px]
                      items-center
                      justify-center
                      rounded-full
                      border-[4px]
                      border-white
                      text-white
                      shadow-[0_9px_25px_rgba(11,42,82,0.12)]
                    "
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </div>

                  {/* TEXT */}

                  <div className="pt-1">
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          ...newYorkFont,
                          color: item.accent,
                        }}
                        className="
                          text-[8px]
                          tracking-[0.15em]
                        "
                      >
                        {item.number}
                      </span>

                      <span
                        style={{
                          backgroundColor: item.accent,
                        }}
                        className="h-px w-7"
                      />
                    </div>

                    <h3
                      style={newYorkFont}
                      className="
                        mt-3
                        text-[21px]
                        font-light
                        leading-[1.15]
                        tracking-[-0.03em]
                        text-[#0B2A52]
                        sm:text-[24px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      style={newYorkFont}
                      className="
                        mt-2
                        max-w-[570px]
                        text-[13px]
                        leading-[1.7]
                        text-[#344054]
                        sm:text-[14px]
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

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-20
            max-w-[1050px]
            text-center
            lg:mt-24
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
            <span className="h-px w-12 bg-[#C6A77A]/60 sm:w-20" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-[#C6A77A]
              "
            >
              The Principle
            </span>

            <span className="h-px w-12 bg-[#C6A77A]/60 sm:w-20" />
          </div>

          {/* FIRST LINE */}

          <p
            style={newYorkFont}
            className="
              mt-8
              text-[22px]
              font-light
              leading-[1.3]
              tracking-[-0.025em]
              text-[#344054]/55
              sm:text-[26px]
            "
          >
            Different Channels Need Different Edits.
          </p>

          {/* MAIN LINE */}

          <h3
            style={newYorkFont}
            className="
              mx-auto
              mt-3
              max-w-[980px]
              text-[31px]
              font-light
              leading-[1.08]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[38px]
              md:text-[44px]
              lg:text-[49px]
            "
          >
            The Brand Should Still Feel Like{" "}
            <span className="relative inline-block text-[#C6A77A]">
              the Same Brand.

              <motion.span
                initial={{
                  scaleX: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.2,
                  ease,
                }}
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-full
                  origin-left
                  bg-[#C6A77A]/65
                "
              />
            </span>
          </h3>

          {/* COLORS */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-3
            "
          >
            {useCases.map((item) => (
              <motion.span
                key={item.number}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.35,
                      }
                }
                style={{
                  backgroundColor: item.accent,
                }}
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                "
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP USE CASE NODE
========================================================= */

function UseCaseNode({
  item,
  className,
  reduceMotion,
  animationX = 0,
  animationY = 0,
  centered = false,
}: {
  item: (typeof useCases)[number];
  className?: string;
  reduceMotion: boolean;
  animationX?: number;
  animationY?: number;
  centered?: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: animationX,
              y: animationY,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        ease,
      }}
      className={className}
    >
      <div
        className={`
          group
          ${centered ? "flex flex-col items-center" : ""}
        `}
      >
        {/* =================================================
            TOP
        ================================================= */}

        <div
          className={`
            flex
            items-center
            gap-4

            ${centered ? "justify-center" : ""}
          `}
        >
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.08,
                    rotate: 6,
                  }
            }
            style={{
              width: 52,
              height: 52,
              backgroundColor: item.accent,
            }}
            className="
              relative
              flex
              shrink-0
              items-center
              justify-center
              rounded-full
              text-white
              shadow-[0_12px_30px_rgba(11,42,82,0.12)]
            "
          >
            <Icon size={18} strokeWidth={1.5} />

            <span
              style={{
                borderColor: item.accent,
              }}
              className="
                absolute
                -inset-[7px]
                rounded-full
                border
                opacity-25
              "
            />
          </motion.div>

          <div className={centered ? "text-center" : ""}>
            <span
              style={{
                ...newYorkFont,
                color: item.accent,
              }}
              className="
                text-[8px]
                tracking-[0.16em]
              "
            >
              {item.number}
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-1
                text-[21px]
                font-light
                leading-[1.1]
                tracking-[-0.03em]
                text-[#0B2A52]
              "
            >
              {item.title}
            </h3>
          </div>
        </div>

        {/* DESCRIPTION */}

        <p
          style={newYorkFont}
          className={`
            mt-4
            max-w-[340px]
            text-[13px]
            leading-[1.7]
            text-[#344054]

            ${centered ? "text-center" : ""}
          `}
        >
          {item.description}
        </p>

        {/* COLOR LINE */}

        <motion.div
          initial={{
            scaleX: reduceMotion ? 1 : 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.15,
            ease,
          }}
          style={{
            backgroundColor: item.accent,
          }}
          className={`
            mt-5
            h-[2px]
            w-14
            origin-left

            ${centered ? "origin-center" : ""}
          `}
        />
      </div>
    </motion.div>
  );
}