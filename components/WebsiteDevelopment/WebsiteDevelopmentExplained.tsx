"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Brush,
  Code2,
  Compass,
  FileText,
  Gauge,
  MonitorSmartphone,
  Search,
  UsersRound,
  Zap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   CONTENT
========================================================= */

const outcomes = [
  {
    number: "01",
    icon: FileText,
    text: "Easy to understand.",
  },
  {
    number: "02",
    icon: Zap,
    text: "Fast to use.",
  },
  {
    number: "03",
    icon: Compass,
    text: "Simple to navigate.",
  },
  {
    number: "04",
    icon: MonitorSmartphone,
    text: "Accessible across devices.",
  },
  {
    number: "05",
    icon: Search,
    text: "Clear for search engines to process.",
  },
  {
    number: "06",
    icon: UsersRound,
    text: "Built around meaningful customer actions.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WebsiteDevelopmentExplained() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="website-development-explained"
      aria-labelledby="website-development-explained-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white

        py-16
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
       

       

       
      </div>

      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mx-auto
            max-w-[1050px]
            text-center
          "
        >
          {/* EYEBROW */}

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span
            className="
              h-px
              w-7
              sm:w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />


            <span
              className="
             
                text-[10px]
                uppercase
                tracking-[0.32em]
                text-[#B79A72]
              "
            >
              Website Development Explained
            </span>

<span
            className="
              h-px
              w-7
              sm:w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </div>

          {/* HEADING */}
<h2
  id="website-development-explained-heading"
  className="
    mx-auto
    mt-6
    max-w-[980px]
    text-[2.2rem]

    sm:mt-8
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
  What Is{" "}
  <span
    className="
      font-normal
      tracking-[-0.03em]
      text-[#B79A72]
    "
  >
    Website Development?
  </span>
</h2>

          <span
            className="
              mx-auto
              mt-5
              block
              h-[2px]
              w-12

              sm:mt-7
              sm:w-16
              bg-[#B79A72]
            "
          />

          {/* PARAGRAPH 01 */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[820px]
              text-[0.9rem]
              leading-[1.7]
              text-[#516B85]

              sm:mt-7
              sm:text-[1rem]

              md:text-[1.04rem]
            "
          >
            Website development is the process of planning, building, testing
            and maintaining the technical experience behind a website.
          </p>

          {/* PARAGRAPH 02 */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[920px]
              text-[0.86rem]
              leading-[1.7]
              text-[#637A90]

              sm:mt-5
              sm:text-[0.95rem]

              md:text-[1rem]
            "
          >
            It can include website architecture, responsive interfaces,
            frontend development, content management, integrations,
            performance optimization, technical SEO and functionality specific
            to the business.
          </p>

          {/* QUOTE */}

          <div
            className="
              relative
              mx-auto
              mt-7
              max-w-[760px]
              px-6

              sm:mt-9
              sm:px-10
            "
          >
            <span
              className="
                absolute
                left-0
                top-[-7px]
                font-serif
                text-[2.8rem]
                leading-none

                sm:text-[4rem]
                text-[#BBD7EC]
              "
            >
              “
            </span>

            <p
              className="
                font-serif
                text-[1.05rem]
                italic
                leading-[1.5]
                text-[#0B2A52]

                sm:text-[1.3rem]
                md:text-[1.45rem]
              "
            >
              Good development is not only about making pages work.
            </p>

            <span
              className="
                absolute
                right-0
                top-[-7px]
                font-serif
                text-[2.8rem]
                leading-none

                sm:text-[4rem]
                text-[#BBD7EC]
              "
            >
              ”
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN VISUAL + OUTCOMES
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-[1180px]
            gap-10

            sm:mt-14
            sm:gap-12

            lg:mt-20
            lg:gap-0
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-0
          "
        >
          {/* =================================================
              LEFT — STRATEGY / DESIGN / DEVELOPMENT
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -36,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease,
            }}
            className="
              relative
              flex
              justify-center

              lg:border-r
              lg:border-[#E3E8EC]
              lg:pr-12
            "
          >
            <div
              className="
                relative
                aspect-square
                w-full
                max-w-[390px]

                sm:max-w-[470px]
                md:max-w-[540px]
              "
            >
              {/* ===============================================
                  OUTER CIRCLE
              =============================================== */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[72%]
                  w-[72%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#C9DEEC]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[67%]
                  w-[67%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#EDF2F5]
                "
              />

              {/* ===============================================
                  ORBIT PATHS
              =============================================== */}

              <svg
                viewBox="0 0 540 540"
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
                <defs>
                  <marker
                    id="goldArrow"
                    markerWidth="7"
                    markerHeight="7"
                    refX="5"
                    refY="3.5"
                    orient="auto"
                  >
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#B79A72" />
                  </marker>

                  <marker
                    id="blueArrow"
                    markerWidth="7"
                    markerHeight="7"
                    refX="5"
                    refY="3.5"
                    orient="auto"
                  >
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#85AEC9" />
                  </marker>
                </defs>

                {/* LEFT TO TOP */}

                <motion.path
                  d="
                    M 92 350
                    C 60 255,
                      100 145,
                      208 100
                  "
                  stroke="#B79A72"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  markerEnd="url(#goldArrow)"
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
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15,
                    ease,
                  }}
                />

                {/* TOP TO RIGHT */}

                <motion.path
                  d="
                    M 330 96
                    C 438 132,
                      487 232,
                      455 344
                  "
                  stroke="#B79A72"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  markerEnd="url(#goldArrow)"
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
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: 0.3,
                    ease,
                  }}
                />

                {/* RIGHT TO LEFT BOTTOM */}

                <motion.path
                  d="
                    M 412 435
                    C 327 495,
                      200 492,
                      122 430
                  "
                  stroke="#B79A72"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  markerEnd="url(#goldArrow)"
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
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: 0.45,
                    ease,
                  }}
                />

                {/* CENTER CONNECTIONS */}

                <motion.path
                  d="M270 135 L270 200"
                  stroke="#B79A72"
                  strokeWidth="1.3"
                  markerEnd="url(#goldArrow)"
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
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.65,
                    ease,
                  }}
                />

                <motion.path
                  d="M150 390 C180 350 200 340 220 340"
                  stroke="#B79A72"
                  strokeWidth="1.3"
                  markerEnd="url(#goldArrow)"
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
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.75,
                    ease,
                  }}
                />

                <motion.path
                  d="M390 390 C360 350 340 340 320 340"
                  stroke="#B79A72"
                  strokeWidth="1.3"
                  markerEnd="url(#goldArrow)"
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
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.85,
                    ease,
                  }}
                />
              </svg>

              {/* ===============================================
                  STRATEGY
              =============================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: -20,
                        scale: 0.94,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="
                  absolute
                  left-1/2
                  top-[2%]
                  z-20
                  -translate-x-1/2
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[86px]
                    w-[86px]
                    items-center

                    sm:h-[108px]
                    sm:w-[108px]

                    md:h-[126px]
                    md:w-[126px]
                    justify-center
                    rounded-full
                    border
                    border-[#CEE0EC]
                    bg-white
                    shadow-[0_18px_45px_rgba(11,42,82,0.07)]
                  "
                >
                  <div>
                    <Compass
                      size={22}
                      strokeWidth={1.45}
                      className="
                        mx-auto
                        text-[#B18458]

                        sm:h-[22px]
                        sm:w-[22px]

                        md:h-[25px]
                        md:w-[25px]

                        sm:h-[27px]
                        sm:w-[27px]

                        md:h-[31px]
                        md:w-[31px]

                        sm:h-[27px]
                        sm:w-[27px]

                        md:h-[31px]
                        md:w-[31px]

                        sm:h-[27px]
                        sm:w-[27px]

                        md:h-[31px]
                        md:w-[31px]
                      "
                    />

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[0.82rem]

                        sm:mt-2.5
                        sm:text-[1rem]

                        md:mt-3
                        md:text-[1.2rem]
                        text-[#0B2A52]
                      "
                    >
                      Strategy
                    </p>
                  </div>
                </div>

                <p
                  className="
                    mt-2
                    text-[0.36rem]
                    font-semibold
                    uppercase
                    leading-[1.55]
                    tracking-[0.16em]

                    sm:mt-2.5
                    sm:text-[0.42rem]
                    sm:tracking-[0.22em]

                    md:mt-3
                    md:text-[0.48rem]
                    md:tracking-[0.28em]
                    text-[#52779A]
                  "
                >
                  Clarity
                  <br />
                  Creates Direction
                </p>
              </motion.div>

              {/* ===============================================
                  DESIGN
              =============================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -24,
                        y: 18,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.72,
                  delay: 0.38,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="
                  absolute
                  bottom-[7%]
                  left-[0%]
                  z-20
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[86px]
                    w-[86px]
                    items-center

                    sm:h-[108px]
                    sm:w-[108px]

                    md:h-[126px]
                    md:w-[126px]
                    justify-center
                    rounded-full
                    border
                    border-[#CEE0EC]
                    bg-white
                    shadow-[0_18px_45px_rgba(11,42,82,0.07)]
                  "
                >
                  <div>
                    <Brush
                      size={22}
                      strokeWidth={1.45}
                      className="
                        mx-auto
                        text-[#B18458]
                      "
                    />

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[0.82rem]

                        sm:mt-2.5
                        sm:text-[1rem]

                        md:mt-3
                        md:text-[1.2rem]
                        text-[#0B2A52]
                      "
                    >
                      Design
                    </p>
                  </div>
                </div>

                <p
                  className="
                    mt-2
                    text-[0.36rem]
                    font-semibold
                    uppercase
                    leading-[1.55]
                    tracking-[0.16em]

                    sm:mt-2.5
                    sm:text-[0.42rem]
                    sm:tracking-[0.22em]

                    md:mt-3
                    md:text-[0.48rem]
                    md:tracking-[0.28em]
                    text-[#52779A]
                  "
                >
                  Ideas
                  <br />
                  Create Experiences
                </p>
              </motion.div>

              {/* ===============================================
                  DEVELOPMENT
              =============================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 24,
                        y: 18,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.72,
                  delay: 0.5,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="
                  absolute
                  bottom-[7%]
                  right-[0%]
                  z-20
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[86px]
                    w-[86px]
                    items-center

                    sm:h-[108px]
                    sm:w-[108px]

                    md:h-[126px]
                    md:w-[126px]
                    justify-center
                    rounded-full
                    border
                    border-[#CEE0EC]
                    bg-white
                    shadow-[0_18px_45px_rgba(11,42,82,0.07)]
                  "
                >
                  <div>
                    <Code2
                      size={22}
                      strokeWidth={1.45}
                      className="
                        mx-auto
                        text-[#B18458]
                      "
                    />

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[0.76rem]

                        sm:mt-2.5
                        sm:text-[0.95rem]

                        md:mt-3
                        md:text-[1.15rem]
                        text-[#0B2A52]
                      "
                    >
                      Development
                    </p>
                  </div>
                </div>

                <p
                  className="
                    mt-2
                    text-[0.36rem]
                    font-semibold
                    uppercase
                    leading-[1.55]
                    tracking-[0.16em]

                    sm:mt-2.5
                    sm:text-[0.42rem]
                    sm:tracking-[0.22em]

                    md:mt-3
                    md:text-[0.48rem]
                    md:tracking-[0.28em]
                    text-[#52779A]
                  "
                >
                  Technology
                  <br />
                  Brings Ideas to Life
                </p>
              </motion.div>

              {/* ===============================================
                  CENTER
              =============================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.86,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease,
                }}
                className="
                  absolute
                  left-1/2
                  top-[54%]
                  z-10
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -4, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-[122px]
                    w-[122px]
                    items-center

                    sm:h-[152px]
                    sm:w-[152px]

                    md:h-[180px]
                    md:w-[180px]
                    justify-center
                    rounded-full
                    border
                    border-[#D7BD96]
                    bg-[radial-gradient(circle_at_50%_38%,#FFFFFF_0%,#FBF6EE_55%,#F5E9D7_100%)]
                    shadow-[0_20px_60px_rgba(183,154,114,0.12)]
                  "
                >
                  <span
                    className="
                      absolute
                      inset-[7px]
                      rounded-full

                      sm:inset-[9px]
                      md:inset-[10px]
                      border
                      border-[#E9D9BF]
                    "
                  />

                  <div className="relative z-10 text-center">
                    <BarChart3
                      size={18}
                      strokeWidth={1.5}
                      className="
                        mx-auto
                        text-[#B18458]
                      "
                    />

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[0.9rem]
                        leading-[1.05]

                        sm:mt-2.5
                        sm:text-[1.15rem]

                        md:mt-3
                        md:text-[1.45rem]
                        text-[#0B2A52]
                      "
                    >
                      Better
                      <br />
                      Website
                      <br />
                      Outcomes
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* ===============================================
                  FOOT MICROCOPY
              =============================================== */}

              <div
                className="
                  absolute
                  bottom-[-3%]
                  left-1/2
                  hidden
                  -translate-x-1/2
                  text-center

                  sm:block
                "
              >
                <span
                  className="
                    mx-auto
                    mb-3
                    block
                    h-px
                    w-9
                    bg-[#B79A72]
                  "
                />

                <p
                  className="
                    whitespace-nowrap
                    text-[0.48rem]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#52779A]
                  "
                >
                  Connected for a Brighter Tomorrow
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — OUTCOME LIST
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 36,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease,
            }}
            className="
              mx-auto
              w-full
              max-w-[620px]

              lg:mx-0
              lg:max-w-none
              lg:pl-12
            "
          >
            <h3
              className="
                font-serif
                text-[1.4rem]
                font-normal

                sm:text-[1.65rem]
                leading-[1.25]
                tracking-[-0.035em]
                text-[#0B2A52]
                sm:text-[1.85rem]
              "
            >
              It should create a website that is:
            </h3>

            <div className="mt-5 sm:mt-7">
              {outcomes.map(({ number, icon: Icon, text }, index) => (
                <motion.div
                  key={number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 22,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.58,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    border-b
                    border-[#D8E5EE]
                    py-3

                    sm:gap-4
                    sm:py-4
                    last:border-b-0
                  "
                >
                  {/* NUMBER */}

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0

                      sm:h-10
                      sm:w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D6E5EF]
                      bg-[#F1F7FB]
                      font-serif
                      text-[0.78rem]
                      text-[#0B2A52]

                      sm:text-[0.95rem]
                    "
                  >
                    {number}
                  </span>

                  {/* ICON */}

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0

                      sm:h-12
                      sm:w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#CFE1ED]
                      bg-white
                      text-[#B18458]
                      shadow-[0_7px_20px_rgba(11,42,82,0.05)]
                      transition-all
                      duration-300

                      group-hover:border-[#B79A72]
                      group-hover:bg-[#FFFDF9]
                      group-hover:shadow-[0_10px_28px_rgba(11,42,82,0.08)]
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.6}
                      className="sm:h-[21px] sm:w-[21px]"
                    />
                  </span>

                  {/* TEXT */}

                  <p
                    className="
                      text-[0.84rem]
                      leading-[1.45]
                      text-[#173E68]

                      sm:text-[0.95rem]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1

                      sm:text-[1rem]
                    "
                  >
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SHARP RAYS STATEMENT
        ===================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.82,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[1280px]
            overflow-hidden
            border-t
            border-[#E5EDF2]
            px-0
            pb-10
            pt-10
            text-center

            sm:mt-20
            sm:px-6
            sm:pb-16
            sm:pt-14

            md:mt-24
            md:pb-20
            md:pt-16

            lg:mt-28
            lg:pb-24
          "
        >
          {/* ===============================================
              WAVE BACKGROUND
          =============================================== */}

          <svg
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            className="
              pointer-events-none
              absolute
              bottom-[-20px]
              hidden

              sm:block
              left-0
              h-[250px]
              w-full
            "
            aria-hidden="true"
          >
            <motion.path
              d="
                M -40 110
                C 180 20,
                  300 250,
                  565 245
                C 790 240,
                  920 25,
                  1240 105
              "
              fill="none"
              stroke="#D8EAF5"
              strokeWidth="30"
              opacity="0.36"
              initial={
                reduceMotion
                  ? false
                  : {
                      pathLength: 0,
                    }
              }
              whileInView={{
                pathLength: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease,
              }}
            />

            <motion.path
              d="
                M -40 125
                C 185 55,
                  325 267,
                  580 260
                C 815 252,
                  970 67,
                  1240 125
              "
              fill="none"
              stroke="#B79A72"
              strokeWidth="1.7"
              opacity="0.95"
              initial={
                reduceMotion
                  ? false
                  : {
                      pathLength: 0,
                    }
              }
              whileInView={{
                pathLength: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: 0.15,
                ease,
              }}
            />

            <motion.path
              d="
                M -40 82
                C 175 -5,
                  330 225,
                  570 215
                C 795 207,
                  945 6,
                  1240 83
              "
              fill="none"
              stroke="#CFE2EF"
              strokeWidth="1.2"
              opacity="0.8"
              initial={
                reduceMotion
                  ? false
                  : {
                      pathLength: 0,
                    }
              }
              whileInView={{
                pathLength: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.7,
                delay: 0.25,
                ease,
              }}
            />
          </svg>

          {/* ===============================================
              STATEMENT
          =============================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-[900px]
            "
          >
           <div
  className="
    relative
    z-10
    mx-auto
    max-w-[820px]
  "
>
  <p
    className="
      font-serif
      text-[1.15rem]
      leading-[1.4]

      sm:text-[1.35rem]
      tracking-[-0.025em]
      text-[#0B2A52]

      sm:text-[1.5rem]
      md:text-[1.65rem]
      lg:text-[1.8rem]
    "
  >
    At{" "}
    <span className="text-[#B18458]">
      Sharp Rays
    </span>
    , we connect strategy, design and development instead of treating them as
    separate parts of the project.
  </p>
</div>

            <span
              className="
                mx-auto
                mt-6
                block
                h-[2px]
                w-12

                sm:mt-8
                sm:w-14
                bg-[#B79A72]
              "
            />

            <p
              className="
                mt-5
                text-[0.46rem]
                font-semibold
                uppercase
                tracking-[0.2em]

                sm:mt-6
                sm:text-[0.52rem]
                sm:tracking-[0.32em]
                text-[#52779A]
              "
            >
              Websites for a Brighter Tomorrow
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}