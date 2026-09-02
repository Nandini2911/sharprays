"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Lightbulb,
  LineChart,
  Search,
  Target,
} from "lucide-react";

const methodSteps = [
  {
    number: "01",
    title: "Understand",
    description: "What's actually happening?",
    icon: Search,
  },
  {
    number: "02",
    title: "Find the Opportunity",
    description: "Where can we win?",
    icon: Target,
  },
  {
    number: "03",
    title: "Build the System",
    description: "Strategy → Creative → Distribution",
    icon: Brain,
  },
  {
    number: "04",
    title: "Measure",
    description: "What worked?",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Make It Better",
    description: "Repeat → Improve → Scale",
    icon: LineChart,
  },
];

export default function YourMethodSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* ====================================================
            SECTION LABEL
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            relative
            z-20
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 48,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="h-px bg-[#C6A77A]"
          />

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#C6A77A]
              sm:text-xs
            "
          >
            Your Method
          </span>

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 48,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="h-px bg-[#C6A77A]"
          />
        </motion.div>

        {/* ====================================================
            MAIN HEADING
        ==================================================== */}

        <div
          className="
            relative
            z-30
            mx-auto
            mt-9
            max-w-[1000px]
            overflow-visible
            text-center
          "
        >
          {/* FIRST LINE */}

          <div className="relative overflow-hidden pb-2">
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-30
                font-[var(--font-new-york)]
                text-[clamp(2.8rem,4.5vw,4.5rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.06em]
                text-[#0B2A52]
              "
            >
              We Don&apos;t Guess.
            </motion.h2>
          </div>

          {/* SECOND LINE */}

          <div className="relative overflow-hidden pb-2">
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: 0.08,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-30
                font-[var(--font-new-york)]
                text-[clamp(3.3rem,5vw,5rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.06em]
                text-[#0B2A52]
              "
            >
              <span className="italic text-[#C6A77A]">
                We Find Out.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* ====================================================
            DESCRIPTION
        ==================================================== */}

        <motion.p
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
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
          className="
            relative
            z-20
            mx-auto
            mt-7
            max-w-[620px]
            text-center
            text-base
            leading-7
            text-[#66758A]
            sm:text-lg
          "
        >
          Every strong decision starts with knowing what&apos;s
          actually happening.
        </motion.p>

        {/* ====================================================
            MAIN CONTENT
        ==================================================== */}

        <div
          className="
            relative
            z-10
            mt-14
            grid
            items-center
            gap-12
            lg:mt-20
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
            xl:grid-cols-[1fr_1fr]
            xl:gap-24
          "
        >
          {/* ==================================================
              LEFT — TRANSPARENT IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[420px]
              items-center
              justify-center
              lg:min-h-[620px]
            "
          >
            {/* ==================================================
                TRANSPARENT IMAGE
            ================================================== */}

            <motion.img
              src="/whatwedo/YourMethodSection.png"
              alt="People collaborating and finding insights"
              initial={{
                scale: 0.94,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                block
                h-auto
                max-h-[620px]
                w-full
                max-w-[680px]
                object-contain
                object-center
              "
            />

            {/* ==================================================
                SMALL LABEL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="
                absolute
                left-0
                top-6
                z-20
                flex
                items-center
                gap-3
                sm:left-4
                lg:left-0
              "
            >
              <span className="h-px w-8 bg-[#C6A77A]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#66758A]
                "
              >
                Start with the truth
              </span>
            </motion.div>

            {/* ==================================================
                FLOATING LABEL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.85,
                duration: 0.7,
              }}
              animate={{
                y: [0, -7, 0],
              }}
              className="
                absolute
                bottom-8
                right-0
                z-20
                flex
                items-center
                gap-3
                rounded-xl
                bg-white
                px-4
                py-3
                shadow-[0_12px_35px_rgba(11,42,82,0.10)]
                sm:right-3
              "
            />
          </motion.div>

          {/* ==================================================
              RIGHT — THINKING SYSTEM
          ================================================== */}

          <div className="relative z-10">
            {/* INTRO */}

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
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-9"
            >
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#C6A77A]
                "
              >
                How we think
              </p>

              <h3
                className="
                  mt-3
                  max-w-[540px]
                  font-[var(--font-new-york)]
                  text-3xl
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#0B2A52]
                  sm:text-4xl
                "
              >
                Turn uncertainty
                <br />
                into a system.
              </h3>
            </motion.div>

            {/* ==================================================
                TIMELINE
            ================================================== */}

            <div className="relative">
              {/* Base line */}

              <div
                className="
                  absolute
                  bottom-7
                  left-[20px]
                  top-7
                  w-px
                  bg-[#E2E8EF]
                  sm:left-[24px]
                "
              />

              {/* Animated line */}

              <motion.div
                initial={{
                  height: 0,
                }}
                whileInView={{
                  height: "100%",
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-[20px]
                  top-7
                  z-[1]
                  w-px
                  bg-[#0B2A52]
                  sm:left-[24px]
                "
              />

              {/* STEPS */}

              <div className="relative space-y-1">
                {methodSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        delay: 0.15 + index * 0.12,
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        relative
                        flex
                        items-start
                        gap-5
                        py-4
                        sm:gap-6
                        sm:py-5
                      "
                    >
                      {/* NODE */}

                      <motion.div
                        whileHover={{
                          scale: 1.12,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 20,
                        }}
                        className="
                          relative
                          z-10
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          sm:h-12
                          sm:w-12
                        "
                      >
                        <div
                          className="
                            absolute
                            inset-0
                            rounded-full
                            border
                            border-[#DCE5EF]
                            transition-all
                            duration-300
                            group-hover:border-[#C6A77A]
                          "
                        />

                        <Icon
                          size={17}
                          strokeWidth={1.5}
                          className="
                            relative
                            text-[#0B2A52]
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </motion.div>

                      {/* CONTENT */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-3">
                          <h4
                            className="
                              font-[var(--font-new-york)]
                              text-xl
                              font-semibold
                              tracking-[-0.025em]
                              text-[#0B2A52]
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                              sm:text-2xl
                            "
                          >
                            {step.title}
                          </h4>
                        </div>

                        <p
                          className="
                            mt-1.5
                            text-sm
                            leading-6
                            text-[#66758A]
                            sm:text-[15px]
                          "
                        >
                          {step.description}
                        </p>

                        {/* BUILD SYSTEM DETAILS */}

                        {index === 2 && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay: 0.5,
                              duration: 0.6,
                            }}
                            className="
                              mt-3
                              flex
                              flex-wrap
                              items-center
                              gap-x-2
                              gap-y-1
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.13em]
                              text-[#0B2A52]
                            "
                          >
                            <span>Strategy</span>

                            <ArrowRight size={10} />

                            <span>Creative</span>

                            <ArrowRight size={10} />

                            <span>Distribution</span>
                          </motion.div>
                        )}
                      </div>

                      {/* HOVER ARROW */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -5,
                        }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="hidden pt-2 sm:block"
                      >
                        <ArrowRight
                          size={17}
                          strokeWidth={1.4}
                          className="text-[#C6A77A]"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            NO ASSUMPTIONS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          }}
          className="
            relative
            mt-16
            pt-10
            sm:mt-20
            sm:pt-12
          "
        >
          {/* TOP EDITORIAL LINE */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-[#E2E8EF]
            "
          />

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-center
              lg:gap-16
            "
          >
            {/* STATEMENT */}

            <div>
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                  "
                >
                  <Check
                    size={14}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#C6A77A]
                  "
                >
                  Our principle
                </span>
              </div>

              <h3
                className="
                  mt-4
                  font-[var(--font-new-york)]
                  text-4xl
                  font-medium
                  tracking-[-0.045em]
                  text-[#0B2A52]
                  sm:text-5xl
                "
              >
                No assumptions.
              </h3>

              <p
                className="
                  mt-3
                  max-w-[400px]
                  text-sm
                  leading-6
                  text-[#66758A]
                "
              >
                We start with what the data tells us — not what
                we hope is true.
              </p>
            </div>

            {/* PRINCIPLES */}

            <div className="grid gap-7 sm:grid-cols-3">
              {/* DATA */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <BarChart3
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#0B2A52]"
                />

                <p
                  className="
                    mt-4
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#C6A77A]
                  "
                >
                  Data
                </p>

                <h4
                  className="
                    mt-2
                    font-[var(--font-new-york)]
                    text-lg
                    font-semibold
                    leading-tight
                    text-[#0B2A52]
                  "
                >
                  Know what is happening.
                </h4>
              </motion.div>

              {/* CREATIVITY */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Lightbulb
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#0B2A52]"
                />

                <p
                  className="
                    mt-4
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#C6A77A]
                  "
                >
                  Creativity
                </p>

                <h4
                  className="
                    mt-2
                    font-[var(--font-new-york)]
                    text-lg
                    font-semibold
                    leading-tight
                    text-[#0B2A52]
                  "
                >
                  Know what could happen.
                </h4>
              </motion.div>

              {/* OPTIMIZATION */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <LineChart
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#0B2A52]"
                />

                <p
                  className="
                    mt-4
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#C6A77A]
                  "
                >
                  Optimization
                </p>

                <h4
                  className="
                    mt-2
                    font-[var(--font-new-york)]
                    text-lg
                    font-semibold
                    leading-tight
                    text-[#0B2A52]
                  "
                >
                  Make it happen better.
                </h4>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            FINAL STATEMENT
        ==================================================== */}

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
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-8 bg-[#C6A77A]" />

          <p
            className="
              text-center
              text-sm
              italic
              text-[#66758A]
              sm:text-base
            "
          >
            Find the truth. Build the system. Improve what works.
          </p>

          <span className="h-px w-8 bg-[#C6A77A]" />
        </motion.div>
      </div>
    </section>
  );
}