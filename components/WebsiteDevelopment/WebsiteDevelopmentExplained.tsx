"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  Accessibility,
  ArrowDownRight,
  Check,
  Gauge,
  MonitorSmartphone,
  MousePointerClick,
  Navigation,
  Search,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type Outcome = {
  icon: LucideIcon;
  number: string;
  title: string;
  detail: string;
};

const outcomes: Outcome[] = [
  {
    icon: Navigation,
    number: "01",
    title: "Easy to understand.",
    detail: "Clear structure and communication.",
  },
  {
    icon: Gauge,
    number: "02",
    title: "Fast to use.",
    detail: "Performance without unnecessary friction.",
  },
  {
    icon: MousePointerClick,
    number: "03",
    title: "Simple to navigate.",
    detail: "Important information stays easy to reach.",
  },
  {
    icon: MonitorSmartphone,
    number: "04",
    title: "Accessible across devices.",
    detail: "Consistent experiences on every screen.",
  },
  {
    icon: Search,
    number: "05",
    title: "Clear for search engines to process.",
    detail: "A stronger technical foundation for discovery.",
  },
  {
    icon: Accessibility,
    number: "06",
    title: "Built around meaningful customer actions.",
    detail: "Every page supports a clearer next step.",
  },
];

const capabilities = [
  "Website architecture",
  "Responsive interfaces",
  "Frontend development",
  "Content management",
  "Integrations",
  "Performance optimization",
  "Technical SEO",
  "Business functionality",
];

/* =========================================================
   SECTION
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
        bg-[#FCFBF8]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#FFFFFF_0%,#FCFBF8_43%,#F6F1E9_78%,#FFFFFF_100%)]
          "
        />

        <div
          className="
            absolute
            -right-[18%]
            top-[4%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#0B2A52]/[0.07]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -left-[16%]
            bottom-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#B79A72]/[0.12]
            blur-[125px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[38%]
            h-[330px]
            w-[740px]
            -translate-x-1/2
            rounded-full
            bg-white/70
            blur-[100px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          w-full
          max-w-[1420px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mx-auto max-w-[930px] text-center">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.7,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.62,
              ease,
            }}
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="
                text-[0.67rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#96754E]
                sm:text-[0.71rem]
              "
            >
              Website Development Explained
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </motion.div>

          <motion.h2
            id="website-development-explained-heading"
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
              amount: 0.55,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.82,
              delay: reduceMotion ? 0 : 0.06,
              ease,
            }}
            className="
              mt-7
              text-[2.35rem]
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
                font-serif
                font-normal
                italic
                text-[#B79A72]
              "
            >
              Website Development?
            </span>
          </motion.h2>

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.68,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="
              mx-auto
              mt-6
              max-w-[690px]
              text-[0.96rem]
              leading-[1.8]
              text-[#657689]
              sm:text-[1rem]
            "
          >
            A website is more than the page someone sees. Development is the
            system underneath that makes the experience work.
          </motion.p>
        </div>

        {/* =====================================================
            DEFINITION BLUEPRINT
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 34,
                  scale: 0.99,
                }
          }
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
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.12,
            ease,
          }}
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[2rem]
            border
            border-[#D8CBB9]
            bg-white/75
            shadow-[0_28px_80px_rgba(11,42,82,0.07)]
            backdrop-blur-xl
          "
        >
          {/* top rail */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              border-b
              border-[#E4DCD1]
              px-6
              py-4
              sm:px-8
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-[0.65rem]
                  bg-[#0B2A52]
                  text-white
                "
              >
                <Sparkles
                  size={13}
                  strokeWidth={1.8}
                />
              </span>

              <div>
                <p
                  className="
                    text-[0.55rem]
                    font-semibold
                    uppercase
                    tracking-[0.19em]
                    text-[#0B2A52]
                  "
                >
                  Quick Answer
                </p>

                <p
                  className="
                    mt-0.5
                    text-[0.43rem]
                    text-[#7D756B]
                  "
                >
                  The technical experience behind the website
                </p>
              </div>
            </div>

            <span
              className="
                hidden
                text-[0.5rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#B79A72]
                sm:block
              "
            >
              Plan · Build · Test · Maintain
            </span>
          </div>

          {/* main split */}

          <div
            className="
              grid
              lg:grid-cols-[1.08fr_0.92fr]
            "
          >
            {/* LEFT DEFINITION */}

            <div
              className="
                relative
                border-b
                border-[#E5DED4]
                px-6
                py-9
                sm:px-8
                sm:py-10
                lg:border-b-0
                lg:border-r
                lg:px-10
                lg:py-12
              "
            >
              <span
                className="
                  text-[0.57rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4E]
                "
              >
                Definition
              </span>

              <motion.p
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 15,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.2,
                  ease,
                }}
                className="
                  mt-5
                  max-w-[680px]
                  font-serif
                  text-[1.35rem]
                  font-medium
                  leading-[1.55]
                  tracking-[-0.025em]
                  text-[#0B2A52]
                  sm:text-[1.5rem]
                  lg:text-[1.65rem]
                "
              >
                Website development is the process of planning, building,
                testing and maintaining the technical experience behind a
                website.
              </motion.p>

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.26,
                  ease,
                }}
                className="
                  mt-7
                  flex
                  items-start
                  gap-4
                  border-t
                  border-[#E5DED4]
                  pt-6
                "
              >
                <ArrowDownRight
                  size={18}
                  strokeWidth={1.6}
                  className="
                    mt-1
                    shrink-0
                    text-[#B79A72]
                  "
                />

                <p
                  className="
                    max-w-[640px]
                    text-[0.94rem]
                    leading-[1.8]
                    text-[#607386]
                    sm:text-[0.98rem]
                  "
                >
                  It connects the structure, interfaces, technology,
                  performance and functionality that allow the website to work
                  as one complete digital experience.
                </p>
              </motion.div>
            </div>

            {/* RIGHT CAPABILITIES */}

            <div
              className="
                relative
                bg-[linear-gradient(145deg,#FCFAF6_0%,#F4EFE7_100%)]
                px-6
                py-9
                sm:px-8
                sm:py-10
                lg:px-9
                lg:py-12
              "
            >
              <div
                className="
                  absolute
                  right-[-70px]
                  top-[-70px]
                  h-48
                  w-48
                  rounded-full
                  bg-[#B79A72]/10
                  blur-[45px]
                "
              />

              <span
                className="
                  relative
                  text-[0.57rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4E]
                "
              >
                It can include
              </span>

              <div
                className="
                  relative
                  mt-6
                  grid
                  gap-x-7
                  sm:grid-cols-2
                "
              >
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item}
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
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : 0.18 + index * 0.04,
                      ease,
                    }}
                    className="
                      flex
                      min-h-[52px]
                      items-center
                      gap-3
                      border-b
                      border-[#DED3C3]
                      py-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D5C1A2]
                        bg-white/70
                        text-[#A27C4B]
                      "
                    >
                      <Check
                        size={10}
                        strokeWidth={2}
                      />
                    </span>

                    <span
                      className="
                        text-[0.74rem]
                        font-medium
                        leading-[1.5]
                        text-[#344E69]
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
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
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[900px]
            text-center
          "
        >
          <p
            className="
              text-[0.7rem]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#9C7950]
            "
          >
            Good Development Goes Further
          </p>

          <p
            className="
              mt-4
              text-[1.18rem]
              font-medium
              leading-[1.6]
              text-[#0B2A52]
              sm:text-[1.3rem]
            "
          >
            Good development is not only about making pages work.
          </p>

          <p
            className="
              mt-1
              font-serif
              text-[1.2rem]
              italic
              text-[#B79A72]
              sm:text-[1.35rem]
            "
          >
            It should make the whole website easier to use.
          </p>
        </motion.div>

        {/* =====================================================
            OUTCOME BLUEPRINT
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-11
            max-w-[1220px]
          "
        >
          {/* center spine */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-8
              left-1/2
              top-8
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-[#D5C6B1]
              to-transparent
              lg:block
            "
          />

          <div
            className="
              grid
              gap-x-16
              gap-y-0
              lg:grid-cols-2
            "
          >
            {outcomes.map((item, index) => (
              <OutcomeRow
                key={item.title}
                item={item}
                index={index}
                reduceMotion={Boolean(reduceMotion)}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            FINAL POV
        ===================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1120px]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.8rem]
              border
              border-[#D5C7B4]
              bg-[linear-gradient(120deg,#F9F5EE_0%,#FFFFFF_52%,#EDF2F6_100%)]
              px-6
              py-8
              shadow-[0_22px_60px_rgba(11,42,82,0.065)]
              sm:px-8
              lg:px-10
              lg:py-9
            "
          >
            {/* accent bar */}

            <div
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-[4px]
                bg-gradient-to-b
                from-[#B79A72]
                via-[#B79A72]
                to-[#0B2A52]
              "
            />

            <div
              className="
                grid
                gap-7
                lg:grid-cols-[0.34fr_0.66fr]
                lg:items-center
              "
            >
              <div>
                <span
                  className="
                    text-[0.58rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#9A774E]
                  "
                >
                  Sharp Rays Approach
                </span>

                <h3
                  className="
                    mt-3
                    max-w-[310px]
                    font-serif
                    text-[1.35rem]
                    font-semibold
                    leading-[1.25]
                    text-[#0B2A52]
                    sm:text-[1.5rem]
                  "
                >
                  One connected website system.
                </h3>
              </div>

              <div
                className="
                  border-t
                  border-[#DED4C6]
                  pt-6
                  lg:border-l
                  lg:border-t-0
                  lg:pl-8
                  lg:pt-0
                "
              >
                <p
                  className="
                    text-[0.98rem]
                    font-medium
                    leading-[1.8]
                    text-[#465F78]
                    sm:text-[1.03rem]
                  "
                >
                  At Sharp Rays, we connect strategy, design and development
                  instead of treating them as separate parts of the project.
                </p>

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    items-center
                    gap-2
                  "
                >
                  {["Strategy", "Design", "Development"].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-[#D6C4A9]
                        bg-white/70
                        px-4
                        py-2
                        text-[0.53rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#0B2A52]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   OUTCOME ROW
========================================================= */

function OutcomeRow({
  item,
  index,
  reduceMotion,
}: {
  item: Outcome;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  const isLeft = index % 2 === 0;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: isLeft ? -28 : 28,
              y: 12,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : (index % 3) * 0.07,
        ease,
      }}
      className="
        group
        relative
        flex
        min-h-[150px]
        items-center
        gap-5
        border-b
        border-[#DED5C8]
        py-6
      "
    >
      {/* icon */}

      <div
        className="
          relative
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-[0.9rem]
          border
          border-[#D6C4A8]
          bg-[#FAF6EF]
          text-[#0B2A52]
          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:border-[#B79A72]
          group-hover:bg-white
          group-hover:shadow-[0_12px_28px_rgba(11,42,82,0.08)]
        "
      >
        <Icon
          size={18}
          strokeWidth={1.65}
        />
      </div>

      {/* content */}

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <span
            className="
              font-serif
              text-[0.64rem]
              italic
              text-[#B79A72]
            "
          >
            {item.number}
          </span>

          <span
            className="
              h-px
              w-7
              bg-[#D5C2A5]
            "
          />
        </div>

        <h3
          className="
            mt-2
            text-[0.98rem]
            font-semibold
            leading-[1.45]
            text-[#0B2A52]
            sm:text-[1.04rem]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1.5
            text-[0.77rem]
            leading-[1.65]
            text-[#708194]
          "
        >
          {item.detail}
        </p>
      </div>

      {/* hover indicator */}

      <span
        className="
          absolute
          bottom-[-1px]
          left-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-[#B79A72]
          to-[#0B2A52]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
}