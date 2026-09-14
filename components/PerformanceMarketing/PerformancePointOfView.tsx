"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  Eye,
  MousePointerClick,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  X,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const stages = [
  {
    number: "01",
    title: "REACH",
    description: "Put your offer in front of the right audience.",
    icon: Target,
  },
  {
    number: "02",
    title: "ATTENTION",
    description: "Give them a reason to notice.",
    icon: Eye,
  },
  {
    number: "03",
    title: "CLICK",
    description: "Create enough relevance to earn the next step.",
    icon: MousePointerClick,
  },
  {
    number: "04",
    title: "CONVERT",
    description: "Make the action clear and easy to complete.",
    icon: UserRoundCheck,
  },
  {
    number: "05",
    title: "MEASURE",
    description: "Understand what actually created value.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "IMPROVE",
    description:
      "Use real performance data to make the next decision better.",
    icon: Settings2,
  },
  {
    number: "07",
    title: "SCALE",
    description:
      "Increase investment where the economics make sense.",
    icon: TrendingUp,
  },
];

const metrics = [
  {
    value: "1.2M",
    label: "People Reached",
    icon: Target,
  },
  {
    value: "48.6K",
    label: "Link Clicks",
    icon: MousePointerClick,
  },
  {
    value: "4,892",
    label: "Conversions",
    icon: UserRoundCheck,
  },
  {
    value: "$214K",
    label: "Revenue",
    icon: BarChart3,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PerformancePointOfView() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="performance-point-of-view"
      aria-labelledby="performance-point-of-view-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F8F5F0]
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(115deg,#F8F5F0_0%,#FCFAF7_32%,#F3F4F2_68%,#FBF8F3_100%)]
          "
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0% 40%",
                    "100% 45%",
                    "65% 100%",
                    "0% 40%",
                  ],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse at 78% 26%,
                rgba(198,167,128,0.12) 0%,
                transparent 56%
              ),
              radial-gradient(
                ellipse at 22% 72%,
                rgba(109,143,165,0.12) 0%,
                transparent 62%
              ),
              radial-gradient(
                ellipse at 50% 30%,
                rgba(255,255,255,0.75) 0%,
                transparent 70%
              )
            `,
            backgroundSize: "160% 160%",
          }}
          className="absolute inset-0"
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
          max-w-[1460px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mx-auto max-w-[960px] text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.7,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#9B6F42]
                sm:text-[0.7rem]
              "
            >
              How We Think About Performance
            </span>
          </motion.div>

          <motion.h2
            id="performance-point-of-view-heading"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.55,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.05,
              ease,
            }}
            className="
              mt-4
              font-serif
              text-[2.3rem]
              font-medium
              leading-[1.03]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Reach Is Only the{" "}
            <span
              className="
                font-normal
                text-[#A87947]
              "
            >
              Beginning.
            </span>
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.72,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-[720px]
              text-[0.98rem]
              leading-[1.65]
              text-[#526477]
              sm:text-[1rem]
            "
          >
            <p>
              Getting your brand in front of someone creates an opportunity.
            </p>

            <p>
              What happens next determines whether that opportunity becomes
              valuable.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            PERFORMANCE DASHBOARD
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 32,
            scale: reduceMotion ? 1 : 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.1,
            ease,
          }}
          className="
            mx-auto
            mt-12
            grid
            max-w-[1120px]
            gap-3

            lg:grid-cols-[1fr_280px]
          "
        >
          {/* =================================================
              MAIN DASHBOARD
          ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-[1.5rem]
              border
              border-white/80
              bg-white/82
              shadow-[0_22px_60px_rgba(29,43,57,0.11)]
              backdrop-blur-xl
            "
          >
            {/* DASHBOARD HEADER */}

            <div
              className="
                flex
                flex-col
                gap-4
                px-5
                pb-4
                pt-5

                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-7
              "
            >
              <div>
                <h3
                  className="
                    font-serif
                    text-[1.2rem]
                    font-semibold
                    text-[#0B2A52]
                  "
                >
                  Total Performance
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[0.7rem]
                    text-[#6B7886]
                  "
                >
                  From attention to real business results.
                </p>
              </div>

              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  rounded-full
                  border
                  border-[#E4E8EC]
                  bg-white
                  px-4
                  py-2
                  text-[0.58rem]
                  font-semibold
                  text-[#384F66]
                  shadow-sm
                "
              >
                Last 90 days
              </span>
            </div>

            {/* METRICS */}

            <div
              className="
                grid
                grid-cols-2
                border-y
                border-[#EDF0F2]
                sm:grid-cols-4
              "
            >
              {metrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className={`
                      flex
                      items-center
                      gap-3
                      px-4
                      py-4
                      sm:px-5

                      ${
                        index !== metrics.length - 1
                          ? "sm:border-r sm:border-[#EDF0F2]"
                          : ""
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#0B2A52]"
                    />

                    <div>
                      <p
                        className="
                          text-[1rem]
                          font-semibold
                          leading-none
                          text-[#0B2A52]
                          sm:text-[1.08rem]
                        "
                      >
                        {metric.value}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[0.56rem]
                          text-[#75808B]
                        "
                      >
                        {metric.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                CHART
            ================================================= */}

            <div
              className="
                relative
                px-4
                pb-5
                pt-4
                sm:px-6
              "
            >
              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-between
                  text-[0.52rem]
                  text-[#7A8793]
                "
              >
                <span>300K</span>

                <span
                  className="
                    rounded-md
                    bg-[#0B2A52]
                    px-2
                    py-1
                    font-semibold
                    text-white
                  "
                >
                  +280%
                </span>
              </div>

              <div className="relative h-[190px] w-full">
                {/* GRID */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-60
                    [background-image:linear-gradient(to_right,#0B2A5209_1px,transparent_1px),linear-gradient(to_bottom,#0B2A5209_1px,transparent_1px)]
                    [background-size:14.28%_25%]
                  "
                />

                <svg
                  viewBox="0 0 720 190"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                  "
                >
                  <defs>
                    <linearGradient
                      id="blueArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#2B628D"
                        stopOpacity="0.18"
                      />

                      <stop
                        offset="100%"
                        stopColor="#2B628D"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="
                      M0 171
                      C38 157 55 141 90 143
                      C120 146 150 134 182 129
                      C212 125 240 132 270 128
                      C306 124 330 111 366 105
                      C398 101 430 108 458 99
                      C492 88 520 91 548 84
                      C574 78 598 65 624 51
                      C655 36 684 43 720 33
                    "
                    fill="url(#blueArea)"
                    stroke="none"
                    initial={{
                      opacity: reduceMotion ? 1 : 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                    }}
                  />

                  <motion.path
                    d="
                      M0 171
                      C38 157 55 141 90 143
                      C120 146 150 134 182 129
                      C212 125 240 132 270 128
                      C306 124 330 111 366 105
                      C398 101 430 108 458 99
                      C492 88 520 91 548 84
                      C574 78 598 65 624 51
                      C655 36 684 43 720 33
                    "
                    fill="none"
                    stroke="#0B2A52"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{
                      pathLength: reduceMotion ? 1 : 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.5,
                      delay: reduceMotion ? 0 : 0.3,
                      ease,
                    }}
                  />

                  <motion.path
                    d="
                      M0 157
                      C42 126 68 105 104 108
                      C138 111 154 99 189 93
                      C224 87 250 107 286 99
                      C320 93 348 71 383 75
                      C415 78 444 88 478 80
                      C511 72 533 52 565 53
                      C603 54 636 45 668 49
                      C687 52 704 44 720 40
                    "
                    fill="none"
                    stroke="#C49A6C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{
                      pathLength: reduceMotion ? 1 : 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.5,
                      delay: reduceMotion ? 0 : 0.48,
                      ease,
                    }}
                  />
                </svg>

                {/* MONTHS */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-[-16px]
                    grid
                    grid-cols-8
                    text-center
                    text-[0.5rem]
                    text-[#89939D]
                  "
                >
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                  ].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              VALUE PANEL
          ================================================= */}

          <div
            className="
              rounded-[1.5rem]
              border
              border-white/80
              bg-white/82
              p-5
              shadow-[0_22px_60px_rgba(29,43,57,0.10)]
              backdrop-blur-xl
              sm:p-6
            "
          >
            <h3
              className="
                font-serif
                text-[1rem]
                font-semibold
                leading-[1.15]
                text-[#0B2A52]
              "
            >
              Higher Value
              <br />
              Through Smarter Decisions
            </h3>

            <div
              className="
                mt-6
                flex
                items-center
                gap-5
              "
            >
              {/* DONUT */}

              <div
                className="
                  relative
                  flex
                  h-[92px]
                  w-[92px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                "
                style={{
                  background:
                    "conic-gradient(#0B2A52 0deg 259deg, #E6E7E5 259deg 360deg)",
                }}
              >
                <div
                  className="
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[1.35rem]
                      font-semibold
                      text-[#0B2A52]
                    "
                  >
                    72%
                  </span>
                </div>
              </div>

              <p
                className="
                  text-[0.69rem]
                  leading-[1.45]
                  text-[#506274]
                "
              >
                <span
                  className="
                    block
                    font-semibold
                    text-[#0B2A52]
                  "
                >
                  Conversions
                </span>
                from optimized audience segments
              </p>
            </div>

            <div
              className="
                mt-6
                divide-y
                divide-[#E8ECEF]
              "
            >
              <InsightRow
                label="Audience refinement"
                value="+42%"
              />

              <InsightRow
                label="Creative performance"
                value="+36%"
              />

              <InsightRow
                label="Landing page optimization"
                value="+28%"
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PERFORMANCE STAGES
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-4
            max-w-[1360px]
          "
        >
          <div
            className="
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-7
            "
          >
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.number}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 24,
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
                    duration: reduceMotion ? 0 : 0.55,
                    delay:
                      reduceMotion
                        ? 0
                        : index * 0.055,
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
                    group
                    relative
                  "
                >
                  <div
                    className="
                      h-full
                      min-h-[170px]
                      rounded-[1rem]
                      border
                      border-white/90
                      bg-white/82
                      p-4
                      shadow-[0_14px_35px_rgba(28,42,57,0.075)]
                      backdrop-blur-xl
                      transition-all
                      duration-300

                      group-hover:border-[#D0B18B]
                      group-hover:shadow-[0_20px_45px_rgba(28,42,57,0.11)]
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-3
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[0.95rem]
                          text-[#A97845]
                        "
                      >
                        {stage.number}
                      </span>

                      <Icon
                        size={23}
                        strokeWidth={1.5}
                        className="text-[#A97845]"
                      />
                    </div>

                    <h3
                      className="
                        mt-5
                        text-[0.82rem]
                        font-bold
                        tracking-[0.02em]
                        text-[#0B2A52]
                      "
                    >
                      {stage.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[0.72rem]
                        leading-[1.5]
                        text-[#5E6D7B]
                      "
                    >
                      {stage.description}
                    </p>
                  </div>

                  {/* DESKTOP CONNECTOR */}

                  {index !== stages.length - 1 && (
                    <span
                      className="
                        absolute
                        right-[-11px]
                        top-1/2
                        z-10
                        hidden
                        -translate-y-1/2
                        items-center
                        justify-center
                        bg-[#F8F5F0]
                        px-1
                        text-[#0B2A52]
                        lg:flex
                      "
                    >
                      <ArrowRight
                        size={16}
                        strokeWidth={1.6}
                      />
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            THE SHIFT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 28,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-7
            max-w-[1360px]
            overflow-hidden
            rounded-[1.35rem]
            border
            border-white/90
            bg-white/76
            shadow-[0_18px_50px_rgba(28,42,57,0.07)]
            backdrop-blur-xl
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-5
              px-5
              pt-5
            "
          >
            <span className="h-px w-12 bg-[#B9A184]" />

            <span
              className="
                text-[0.62rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#34475A]
              "
            >
              The Shift
            </span>

            <span className="h-px w-12 bg-[#B9A184]" />
          </div>

          <div
            className="
              grid
              px-6
              pb-7
              pt-5

              md:grid-cols-[1fr_auto_1fr]
              md:items-center
              md:px-9
            "
          >
            {/* STOP ASKING */}

            <div
              className="
                flex
                items-start
                gap-5
                py-4
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#AEB8C0]
                  text-[#7C8994]
                "
              >
                <X
                  size={19}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <p
                  className="
                    text-[0.78rem]
                    text-[#788692]
                  "
                >
                  Stop asking:
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[1.45rem]
                    font-medium
                    leading-[1.2]
                    text-[#0B2A52]
                    sm:text-[1.7rem]
                  "
                >
                  “How many people saw our ads?”
                </p>
              </div>
            </div>

            {/* DIVIDER */}

            <div
              className="
                my-3
                h-px
                w-full
                bg-[#D7DBDE]
                md:mx-8
                md:my-0
                md:h-16
                md:w-px
              "
            />

            {/* START ASKING */}

            <div
              className="
                flex
                items-start
                gap-5
                py-4
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B08A59]
                  text-[#A5743D]
                "
              >
                <Check
                  size={19}
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <p
                  className="
                    text-[0.78rem]
                    text-[#A5743D]
                  "
                >
                  Start asking:
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[1.45rem]
                    font-medium
                    leading-[1.2]
                    text-[#A5743D]
                    sm:text-[1.7rem]
                  "
                >
                  “What did that attention produce?”
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL MICROCOPY
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
          }}
          className="
            mx-auto
            mt-6
            flex
            max-w-[720px]
            items-center
            justify-center
            gap-4
            text-center
          "
        >
          <Sparkles
            size={13}
            strokeWidth={1.6}
            className="text-[#A97845]"
          />

          <p
            className="
              text-[0.58rem]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#748493]
            "
          >
            More attention. More learning. More valuable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   INSIGHT ROW
========================================================= */

function InsightRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
        py-3
      "
    >
      <div
        className="
          flex
          items-center
          gap-2.5
        "
      >
        <span
          className="
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-[0.45rem]
            bg-[#F1F4F6]
            text-[#0B2A52]
          "
        >
          <Sparkles
            size={11}
            strokeWidth={1.7}
          />
        </span>

        <span
          className="
            text-[0.59rem]
            font-medium
            text-[#4F6070]
          "
        >
          {label}
        </span>
      </div>

      <span
        className="
          text-[0.59rem]
          font-semibold
          text-[#0B2A52]
        "
      >
        {value}
      </span>
    </div>
  );
}