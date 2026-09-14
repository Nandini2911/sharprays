"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  BarChart3,
  Crosshair,
  Layers3,
  Megaphone,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

const signals = [
  {
    number: "01",
    title: "The right audience.",
    label: "WHO",
    icon: Crosshair,
  },
  {
    number: "02",
    title: "The right message.",
    label: "WHAT",
    icon: Megaphone,
  },
  {
    number: "03",
    title: "The right advertising channel.",
    label: "WHERE",
    icon: Layers3,
  },
  {
    number: "04",
    title: "The right conversion experience.",
    label: "NEXT",
    icon: MousePointerClick,
  },
  {
    number: "05",
    title: "The right measurement.",
    label: "PROOF",
    icon: BarChart3,
  },
];

export default function PerformanceMarketingExplained() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="performance-marketing-explained"
      aria-labelledby="performance-explained-title"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="
            absolute
            left-1/2
            top-[28%]
            h-[620px]
            w-[820px]
            -translate-x-1/2
            rounded-full
            bg-[#EAF4FC]/65
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-[18%]
            h-[390px]
            w-[390px]
            rounded-full
            bg-[#F1E3D5]/40
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-[5%]
            h-[390px]
            w-[390px]
            rounded-full
            bg-[#E4F0FB]/60
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#0B2A52]/10
            to-transparent
          "
        />
      </div>

      <div
        className="
          mx-auto
          w-full
          max-w-[1360px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =========================================================
            INTRO
        ========================================================= */}

        <div className="mx-auto max-w-[900px] text-center">
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
              amount: 0.7,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-9 bg-[#B67D49]" />

            <span
              className="
                text-[0.66rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#A87040]
                sm:text-[0.7rem]
              "
            >
              Performance Marketing Explained
            </span>

            <span className="h-px w-9 bg-[#B67D49]" />
          </motion.div>

          <motion.h2
            id="performance-explained-title"
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
              amount: 0.6,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.06,
              ease,
            }}
            className="
              text-[2.3rem]
              font-medium
              leading-[1.06]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            What Is Performance Marketing?
          </motion.h2>
        </div>

        {/* =========================================================
            QUICK ANSWER CARD
        ========================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.12,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-10
            max-w-[1040px]
            overflow-hidden
            rounded-[30px]
            border
            border-[#C9D9E8]
            bg-white/85
            px-6
            py-8
            shadow-[0_24px_80px_rgba(11,42,82,0.07)]
            backdrop-blur-xl
            sm:px-9
            sm:py-10
            lg:px-12
            lg:py-11
          "
        >
          {/* card background */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-[280px]
              w-[280px]
              rounded-full
              bg-[#DFEEF9]/65
              blur-[70px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-28
              -left-24
              h-[270px]
              w-[270px]
              rounded-full
              bg-[#F4E8DC]/45
              blur-[75px]
            "
          />

          <div className="relative">
            <div
              className="
                flex
                items-center
                justify-between
                gap-6
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-2xl
                    border
                    border-[#C8DCEB]
                    bg-[#EEF6FC]
                    text-[#0D5A93]
                  "
                >
                  <Sparkles size={17} strokeWidth={1.7} />
                </div>

                <div>
                  <p
                    className="
                      text-[0.58rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#8A9CAF]
                    "
                  >
                    Quick Answer
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[0.76rem]
                      font-medium
                      text-[#254E72]
                    "
                  >
                    Results before vanity metrics.
                  </p>
                </div>
              </div>

              <span
                className="
                  hidden
                  rounded-full
                  border
                  border-[#D4E0EA]
                  bg-white/75
                  px-4
                  py-2
                  text-[0.57rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#6E8397]
                  sm:inline-flex
                "
              >
                AEO Answer
              </span>
            </div>

            <div
              className="
                mt-7
                grid
                gap-7
                lg:grid-cols-[1fr_auto_1fr]
                lg:items-start
              "
            >
              <p
                className="
                  text-[1rem]
                  leading-[1.8]
                  text-[#385775]
                  sm:text-[1.04rem]
                "
              >
                Performance marketing is a results-focused approach to digital
                advertising where campaigns are planned, measured and optimized
                around defined business actions.
              </p>

              <div
                className="
                  hidden
                  h-full
                  w-px
                  bg-gradient-to-b
                  from-transparent
                  via-[#B7C8D8]
                  to-transparent
                  lg:block
                "
              />

              <p
                className="
                  text-[1rem]
                  leading-[1.8]
                  text-[#385775]
                  sm:text-[1.04rem]
                "
              >
                Depending on the objective, those actions may include website
                visits, leads, enquiries, calls, sign-ups, purchases or
                revenue.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            CONNECTOR
        ========================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scaleY: 0,
                }
          }
          whileInView={{
            opacity: 1,
            scaleY: 1,
          }}
          viewport={{
            once: true,
            amount: 0.7,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.24,
            ease,
          }}
          className="
            mx-auto
            h-14
            w-px
            origin-top
            bg-gradient-to-b
            from-[#9DB5CA]
            to-[#D8E3EC]
          "
        />

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: -6,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            delay: reduceMotion ? 0 : 0.42,
          }}
          className="
            mx-auto
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            border
            border-[#C6D5E2]
            bg-white
            text-[#6A8299]
            shadow-sm
          "
        >
          <ArrowDown size={14} strokeWidth={1.7} />
        </motion.div>

        {/* =========================================================
            STRATEGY INTRO
        ========================================================= */}

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
            amount: 0.7,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-7
            max-w-[650px]
            text-center
          "
        >
          <p
            className="
              text-[0.68rem]
              font-semibold
              uppercase
              tracking-[0.23em]
              text-[#8295A8]
            "
          >
            A strong performance marketing strategy connects
          </p>
        </motion.div>

        {/* =========================================================
            FIVE CONNECTED SIGNALS
        ========================================================= */}

        <div className="relative mt-10">
          {/* desktop center line */}
          <div
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
              top-[49px]
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#AFC2D3]
              to-transparent
              lg:block
            "
          />

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {signals.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 34,
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
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -7,
                        }
                  }
                  className="
                    group
                    relative
                    z-10
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#C8D8E6]
                    bg-white
                    px-5
                    pb-6
                    pt-5
                    shadow-[0_12px_40px_rgba(11,42,82,0.045)]
                    transition
                    duration-300
                    hover:border-[#8CB2CF]
                    hover:shadow-[0_22px_55px_rgba(11,42,82,0.09)]
                  "
                >
                  {/* hover glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-12
                      h-32
                      w-32
                      rounded-full
                      bg-[#E5F2FB]
                      opacity-0
                      blur-2xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[0.55rem]
                        font-semibold
                        tracking-[0.18em]
                        text-[#98A8B8]
                      "
                    >
                      {item.number}
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#DEE7EF]
                        bg-[#FAFCFD]
                        px-2.5
                        py-1
                        text-[0.48rem]
                        font-bold
                        tracking-[0.15em]
                        text-[#7890A5]
                      "
                    >
                      {item.label}
                    </span>
                  </div>

                  <div
                    className="
                      relative
                      mt-8
                      grid
                      h-11
                      w-11
                      place-items-center
                      rounded-2xl
                      border
                      border-[#D4E2ED]
                      bg-[#EFF6FB]
                      text-[#0C578F]
                      transition
                      duration-300
                      group-hover:border-[#9DC3DF]
                      group-hover:bg-[#0E568E]
                      group-hover:text-white
                    "
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <h3
                    className="
                      relative
                      mt-6
                      max-w-[185px]
                      text-[0.94rem]
                      font-semibold
                      leading-[1.45]
                      text-[#13385C]
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      relative
                      mt-5
                      h-px
                      w-full
                      overflow-hidden
                      bg-[#E7EDF2]
                    "
                  >
                    <span
                      className="
                        block
                        h-full
                        w-0
                        bg-gradient-to-r
                        from-[#0C5C98]
                        to-[#B67D49]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                  scale: 0.98,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.1,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[990px]
            overflow-hidden
            rounded-[30px]
            border
            border-[#AFC8DC]
            bg-gradient-to-br
            from-[#F7FBFE]
            via-white
            to-[#FCF8F4]
            px-6
            py-9
            text-center
            shadow-[0_20px_65px_rgba(11,42,82,0.06)]
            sm:px-10
            sm:py-11
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-[100px]
              w-[60%]
              -translate-x-1/2
              rounded-full
              bg-[#DCECF8]/55
              blur-[50px]
            "
          />

          <div className="relative">
            <p
              className="
                text-[0.98rem]
                leading-[1.75]
                text-[#536B84]
              "
            >
              At Sharp Rays, we look beyond how many people an ad reaches.
            </p>

            <div
              className="
                mx-auto
                my-5
                h-px
                w-16
                bg-gradient-to-r
                from-transparent
                via-[#B67D49]
                to-transparent
              "
            />

            <p
              className="
                font-serif
                text-[1.45rem]
                font-medium
                italic
                leading-[1.35]
                tracking-[-0.02em]
                text-[#0B2A52]
                sm:text-[1.7rem]
                md:text-[1.9rem]
              "
            >
              We focus on what happens{" "}
              <span className="text-[#B67D49]">after they see it.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}