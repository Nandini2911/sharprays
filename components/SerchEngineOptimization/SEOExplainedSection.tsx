"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  FileText,
  Link2,
  Search,
  Settings2,
  TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const seoSignals = [
  {
    label: "Technical",
    icon: Settings2,
  },
  {
    label: "Search Intent",
    icon: Search,
  },
  {
    label: "Content",
    icon: FileText,
  },
  {
    label: "On-Page",
    icon: Activity,
  },
  {
    label: "Authority",
    icon: Link2,
  },
  {
    label: "Analysis",
    icon: TrendingUp,
  },
];

export default function SEOExplainedSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
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

  return (
    <section
      id="seo-explained"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[25%]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#0B2A52]/[0.045]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[120px]
          top-[31%]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#C6A77A]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#0B2A52]/[0.035]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[35%]
          h-[360px]
          w-[500px]
          rounded-full
          bg-[#C6A77A]/[0.07]
          blur-[110px]
        "
      />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* =======================================================
            TOP HEADING
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="mx-auto max-w-[850px] text-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-9 bg-[#C6A77A]" />

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.28em]
                text-[#C6A77A]
                sm:text-[10px]
              "
            >
              SEO EXPLAINED
            </span>

            <span className="h-px w-9 bg-[#C6A77A]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="
              mt-6
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
            What Is Search Engine Optimization?
          </motion.h2>
        </motion.div>

        {/* =======================================================
            MAIN ANSWER ARCHITECTURE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 40,
            scale: reduceMotion ? 1 : 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease,
          }}
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[32px]
            border
            border-[#0B2A52]/10
            bg-[#FBFCFE]
            shadow-[0_30px_90px_rgba(11,42,82,0.075)]
            sm:mt-16
            lg:mt-20
          "
        >
          {/* TOP ACCENT */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease,
            }}
            className="
              absolute
              left-0
              top-0
              h-[2px]
              w-full
              origin-left
              bg-gradient-to-r
              from-[#C6A77A]
              via-[#C6A77A]/45
              to-transparent
            "
          />

          <div
            className="
              grid
              lg:grid-cols-[1fr_290px]
            "
          >
            {/* =================================================
                ANSWER CONTENT
            ================================================== */}

            <div
              className="
                relative
                px-6
                py-9
                sm:px-10
                sm:py-12
                md:px-14
                lg:px-16
                lg:py-16
                xl:px-20
              "
            >
              {/* LARGE DECORATIVE 01 */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-8
                  top-5
                  text-[88px]
                  font-medium
                  leading-none
                  tracking-[-0.08em]
                  text-[#0B2A52]/[0.025]
                  sm:text-[120px]
                "
              >
                01
              </div>

              {/* QUICK ANSWER INDICATOR */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : -22,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.6,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease,
                }}
                className="flex items-center gap-3"
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C6A77A]/35
                    bg-[#C6A77A]/[0.08]
                  "
                >
                  <Search
                    size={12}
                    strokeWidth={1.8}
                    className="text-[#C6A77A]"
                  />
                </span>

                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.22em]
                    text-[#0B2A52]/40
                  "
                >
                  QUICK ANSWER
                </span>
              </motion.div>

              {/* =================================================
                  MAIN DEFINITION
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 22,
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
                  delay: 0.4,
                  ease,
                }}
                className="
                  relative
                  mt-7
                  max-w-[800px]
                  pl-5
                  sm:pl-7
                "
              >
                <span
                  className="
                    absolute
                    bottom-1
                    left-0
                    top-1
                    w-[2px]
                    rounded-full
                    bg-[#C6A77A]
                  "
                />

                <p
                  className="
                    text-[15px]
                    font-medium
                    leading-8
                    text-[#0B2A52]
                    sm:text-[16px]
                    md:text-[17px]
                  "
                >
                  Search engine optimization, or SEO, is the process of
                  improving a website so search engines can understand its
                  content and relevant users can discover it through organic
                  search results.
                </p>
              </motion.div>

              {/* DIVIDER */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.55,
                  ease,
                }}
                className="
                  my-8
                  h-px
                  origin-left
                  bg-gradient-to-r
                  from-[#0B2A52]/12
                  via-[#0B2A52]/[0.07]
                  to-transparent
                "
              />

              {/* =================================================
                  SECOND PARAGRAPH
              ================================================== */}

              <motion.p
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
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                  ease,
                }}
                className="
                  max-w-[800px]
                  text-[13px]
                  leading-7
                  text-[#0B2A52]/60
                  sm:text-sm
                "
              >
                Effective SEO combines technical website improvements, keyword
                and search intent research, useful content, on-page
                optimization, internal linking, authority signals and ongoing
                performance analysis.
              </motion.p>

              {/* =================================================
                  FINAL PARAGRAPH
              ================================================== */}

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
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease,
                }}
                className="
                  mt-7
                  inline-flex
                  max-w-[820px]
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-[#C6A77A]/20
                  bg-[#C6A77A]/[0.045]
                  px-5
                  py-4
                  sm:px-6
                "
              >
                <span
                  className="
                    mt-2
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    bg-[#C6A77A]
                    shadow-[0_0_16px_rgba(198,167,122,0.45)]
                  "
                />

                <p
                  className="
                    text-[13px]
                    font-medium
                    leading-7
                    text-[#0B2A52]/75
                    sm:text-sm
                  "
                >
                  At Sharp Rays, we approach SEO as a connected growth system
                  rather than a collection of isolated rankings.
                </p>
              </motion.div>
            </div>

            {/* =================================================
                SEO CONNECTED SYSTEM
            ================================================== */}

            <div
              className="
                relative
                hidden
                overflow-hidden
                border-l
                border-[#0B2A52]/[0.07]
                bg-white/70
                px-8
                py-12
                lg:block
              "
            >
              {/* COLUMN TITLE */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
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
                  delay: 0.5,
                  ease,
                }}
              >
                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.22em]
                    text-[#C6A77A]
                  "
                >
                  CONNECTED SEO
                </span>

                <div
                  className="
                    mt-3
                    h-px
                    w-10
                    bg-[#C6A77A]/70
                  "
                />
              </motion.div>

              {/* =================================================
                  VERTICAL CONNECTION LINE
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-[72px]
                  left-[47px]
                  top-[105px]
                  w-px
                  bg-[#0B2A52]/[0.07]
                "
              />

              <motion.div
                initial={{
                  scaleY: 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.7,
                  ease,
                }}
                className="
                  absolute
                  bottom-[72px]
                  left-[47px]
                  top-[105px]
                  w-px
                  origin-top
                  bg-gradient-to-b
                  from-[#C6A77A]
                  via-[#0B2A52]/25
                  to-transparent
                "
              />

              {/* =================================================
                  SIGNAL ITEMS
              ================================================== */}

              <div className="relative mt-8 space-y-4">
                {seoSignals.map((signal, index) => {
                  const Icon = signal.icon;

                  return (
                    <motion.div
                      key={signal.label}
                      initial={{
                        opacity: 0,
                        x: reduceMotion ? 0 : 24,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 0.65,
                        delay: 0.65 + index * 0.11,
                        ease,
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x: 5,
                            }
                      }
                      className="
                        group
                        relative
                        flex
                        items-center
                        gap-4
                      "
                    >
                      {/* NODE */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#0B2A52]/10
                          bg-white
                          text-[#0B2A52]/50
                          shadow-[0_4px_14px_rgba(11,42,82,0.05)]
                          transition-all
                          duration-300
                          group-hover:border-[#C6A77A]/55
                          group-hover:bg-[#C6A77A]/[0.08]
                          group-hover:text-[#C6A77A]
                        "
                      >
                        <Icon
                          size={13}
                          strokeWidth={1.7}
                        />
                      </div>

                      {/* LABEL */}

                      <div
                        className="
                          flex-1
                          rounded-xl
                          border
                          border-transparent
                          px-2
                          py-2
                          transition-all
                          duration-300
                          group-hover:border-[#0B2A52]/[0.06]
                          group-hover:bg-white
                        "
                      >
                        <p
                          className="
                            text-[10px]
                            font-medium
                            text-[#0B2A52]/60
                            transition-colors
                            duration-300
                            group-hover:text-[#0B2A52]
                          "
                        >
                          {signal.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* BOTTOM SIGNAL */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.45, 1, 0.45],
                        scale: [1, 1.15, 1],
                      }
                }
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[57px]
                  left-[44px]
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#C6A77A]
                  shadow-[0_0_18px_rgba(198,167,122,0.60)]
                "
              />
            </div>
          </div>

          {/* =====================================================
              BOTTOM MICRO DETAIL
          ====================================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-[#0B2A52]/[0.06]
              bg-white/50
              px-6
              py-4
              sm:px-10
              lg:px-16
            "
          >
            <span
              className="
                text-[7px]
                font-medium
                tracking-[0.2em]
                text-[#0B2A52]/25
              "
            >
              SEARCH ENGINE OPTIMIZATION
            </span>

            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#C6A77A]" />

              <span
                className="
                  text-[7px]
                  font-medium
                  tracking-[0.18em]
                  text-[#0B2A52]/25
                "
              >
                CONNECTED GROWTH SYSTEM
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}