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
        py-20
        sm:py-24
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
            -right-40
            hidden
            sm:block
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
            hidden
            sm:block
            bottom-[5%]
            h-[390px]
            w-[390px]
            rounded-full
            bg-white
        
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
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
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
                text-[0.66rem]
             
                uppercase
                tracking-[0.28em]
                text-[#B79A72]
                sm:text-[0.7rem]
              "
            >
              Performance Marketing Explained
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
              text-[2.2rem]
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
            mt-8
            max-w-[1040px]

            overflow-visible

            border-y
            border-[#D6E2EB]

            bg-transparent

            px-0
            py-7

            shadow-none

            sm:mt-10
            sm:overflow-hidden
            sm:rounded-[28px]
            sm:border
            sm:border-[#C9D9E8]
            sm:bg-white/85
            sm:px-9
            sm:py-10
            sm:shadow-[0_24px_80px_rgba(11,42,82,0.07)]
            sm:backdrop-blur-xl

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
              hidden
              sm:block
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
              hidden
              sm:block
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
                    h-9
                    w-9
                    place-items-center
                    rounded-xl

                    sm:h-10
                    sm:w-10
                    sm:rounded-2xl
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

             
            </div>

            <div
              className="
                mt-6
                grid
                gap-5

                sm:mt-7
                sm:gap-7

                lg:grid-cols-[1fr_auto_1fr]
                lg:items-start
              "
            >
              <p
                className="
                  text-[0.92rem]
                  leading-[1.75]
                  text-[#385775]

                  sm:text-[1.04rem]
                  sm:leading-[1.8]
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
                  border-t
                  border-[#DDE7EE]
                  pt-5

                  text-[0.92rem]
                  leading-[1.75]
                  text-[#385775]

                  sm:text-[1.04rem]
                  sm:leading-[1.8]

                  lg:border-t-0
                  lg:pt-0
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
            h-10
            w-px

            sm:h-14
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
            mt-6
            max-w-[650px]

            sm:mt-7
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

        <div className="relative mt-7 sm:mt-10">
          {/* =====================================================
              MOBILE — OPEN CONNECTED TIMELINE
              No stacked cards on small screens.
          ===================================================== */}

          <div className="relative sm:hidden">
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-5
                left-[18px]
                top-5
                w-px
                bg-gradient-to-b
                from-[#7FA9C7]
                via-[#C8D8E4]
                to-[#B79A72]/55
              "
            />

            <div className="relative">
              {signals.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                      amount: 0.35,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : index * 0.06,
                      ease,
                    }}
                    className="
                      relative
                      flex
                      items-start
                      gap-4
                      py-4
                    "
                  >
                    <div
                      className="
                        relative
                        z-10

                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center

                        rounded-full

                        border
                        border-[#BFD3E2]

                        bg-white

                        text-[#0D5A93]

                        shadow-[0_5px_18px_rgba(11,42,82,0.07)]
                      "
                    >
                      <Icon size={15} strokeWidth={1.7} />
                    </div>

                    <div
                      className="
                        min-w-0
                        flex-1
                        border-b
                        border-[#E2EAF0]
                        pb-4
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
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#B79A72]
                          "
                        >
                          {item.label}
                        </span>

                        <span
                          className="
                            font-serif
                            text-[10px]
                            text-[#0B2A52]/35
                          "
                        >
                          {item.number}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-1.5
                          max-w-[280px]

                          text-[0.95rem]
                          font-semibold
                          leading-[1.45]

                          text-[#13385C]
                        "
                      >
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              TABLET + DESKTOP — EXISTING PREMIUM CARD SYSTEM
          ===================================================== */}

          <div className="relative hidden sm:block">
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
        </div>

        {/* =========================================================
            FINAL STATEMENT — OPEN / CENTERED / NO CARD
        ========================================================= */}

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
            mt-12
            max-w-[900px]

            px-2

            text-center

            sm:mt-14
            md:mt-16
          "
        >
          <p
            className="
              font-serif

              text-[1.35rem]
              font-medium
              italic
              leading-[1.35]
              tracking-[-0.02em]

              text-[#0B2A52]

              sm:text-[1.7rem]
              md:text-[1.9rem]
              lg:text-[2.05rem]
            "
          >
            We focus on what happens{" "}
            <span className="text-[#B67D49]">
              after they see it.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}