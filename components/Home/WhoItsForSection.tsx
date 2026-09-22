"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Eye,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";

const NAVY = "#0B2A52";
const GOLD = "#C6A77A";

const ease = [0.22, 1, 0.36, 1] as const;

const beliefs = [
  {
    number: "01",
    label: "Principle 01",
    title: "Create with intention.",
    description: "Don’t create just because you can.",
    icon: Target,
  },
  {
    number: "02",
    label: "Principle 02",
    title: "Measure what matters.",
    description: "Don’t chase numbers that don’t matter.",
    icon: BarChart3,
  },
  {
    number: "03",
    label: "Principle 03",
    title: "Look beyond attention.",
    description: "Don’t confuse attention with impact.",
    icon: Eye,
  },
  {
    number: "04",
    label: "Principle 04",
    title: "Keep moving.",
    description: "Don’t stop learning because something worked once.",
    icon: TrendingUp,
  },
  {
    number: "05",
    label: "Principle 05",
    title: "Stay curious.",
    description: 'Never be afraid to ask, “Why?”',
    icon: Lightbulb,
  },
];

export default function TheWayWeThink() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="the-way-we-think"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND DESIGN
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* TOP RIGHT SOFT SHAPE */}

        <div
          className="
            absolute
            -right-[200px]
            -top-[300px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#EEF5FB]
            sm:-right-[180px]
            sm:-top-[260px]
            md:h-[690px]
            md:w-[690px]
            lg:-right-[250px]
          "
        />

        

        {/* LEFT MID SHAPE */}

        <div
          className="
            absolute
            -left-[320px]
            top-[260px]
            h-[640px]
            w-[640px]
            rounded-full
            bg-[#C6A77A]/20
            sm:-left-[280px]
            md:-left-[250px]
          "
        />

       

        {/* BOTTOM LEFT */}

       

        
        {/* BOTTOM RIGHT */}

        <div
          className="
            absolute
            -bottom-[390px]
            -right-[340px]
            h-[720px]
            w-[720px]
            rounded-full
            bg-[#EFF5FA]
          "
        />

        

        {/* CENTER SOFT GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[500px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#F6FAFD]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1540px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
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
          {/* LABEL */}

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
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />
            <span
              className="
                text-[0.58rem]
                
                uppercase
                tracking-[0.34em]
                text-[#B79A72]
                sm:text-[0.64rem]
              "
            >
              The Way We Think
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

          <motion.h2
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 32,
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
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
            className="
              mx-auto
              mt-8
              max-w-[1000px]
              font-[var(--font-new-york)]
              text-[2.1rem]
              font-medium
              leading-[1.02]
              tracking-[-0.05em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Five simple beliefs.
            <br />

            <span className="text-[#B79A72]">
              One way of thinking.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.18,
              ease,
            }}
            className="
              mx-auto
              mt-6
              max-w-[720px]
              text-[0.93rem]
              leading-[1.7]
              text-[#64748B]

              sm:text-[1rem]
              md:text-[1.05rem]
            "
          >
            Not rules. Not formulas. Just the principles that keep our work
            thoughtful, intentional and honest.
          </motion.p>
        </motion.div>

        {/* =====================================================
            PRINCIPLES
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-[1420px]
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:mt-16
            lg:grid-cols-5
            lg:gap-4

            xl:gap-5
          "
        >
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;

            return (
              <motion.article
                key={belief.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 42,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.22,
                }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                      }
                }
                className="
                  group
                  relative
                  min-h-[330px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#DCE7F0]
                  bg-white/80
                  px-6
                  pb-7
                  pt-7
                  backdrop-blur-[8px]
                  transition-shadow
                  duration-500

                  hover:shadow-[0_24px_60px_rgba(11,42,82,0.10)]

                  sm:min-h-[350px]

                  lg:min-h-[370px]
                  lg:px-5

                  xl:px-6
                "
              >
                {/* SOFT HOVER WASH */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(145deg,#F3F8FC_0%,transparent_55%,#FBF7F1_100%)]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* NUMBER */}

               

                {/* ICON */}

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: 5,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    relative
                    z-10
                    mx-auto
                    mt-[-8px]
                    flex
                    h-[82px]
                    w-[82px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF3FB]
                    text-[#0B2A52]

                    sm:h-[88px]
                    sm:w-[88px]

                    lg:h-[82px]
                    lg:w-[82px]
                  "
                >
                  <Icon
                    size={30}
                    strokeWidth={1.6}
                  />

                  {/* ICON GLOW */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-2
                      rounded-full
                      bg-white/35
                    "
                  />
                </motion.div>

                {/* LABEL */}

                <span
                  className="
                    relative
                    z-10
                    mt-5
                    block
                    text-center
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#0B2A52]
                  "
                >
                  {belief.label}
                </span>

                {/* TITLE */}

                <h3
                  className="
                    relative
                    z-10
                    mx-auto
                    mt-3
                    max-w-[220px]
                    text-center
                    font-[var(--font-new-york)]
                    text-[1.45rem]
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.035em]
                    text-[#0B2A52]

                    lg:text-[1.35rem]

                    xl:text-[1.5rem]
                  "
                >
                  {belief.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    relative
                    z-10
                    mx-auto
                    mt-3
                    max-w-[210px]
                    text-center
                    text-[0.78rem]
                    leading-[1.55]
                    text-[#64748B]

                    sm:text-[0.82rem]
                  "
                >
                  {belief.description}
                </p>

                {/* GOLD LINE */}

                <motion.span
                  initial={{
                    width: 28,
                  }}
                  whileHover={{
                    width: 52,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    absolute
                    bottom-7
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    bg-[#C6A77A]
                  "
                />

                {/* INNER BORDER HIGHLIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[5px]
                    rounded-[18px]
                    border
                    border-white/80
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[900px]
            text-center

            sm:mt-20
          "
        >
          {/* DECORATIVE DIVIDER */}

          <div
            className="
              mx-auto
              flex
              max-w-[550px]
              items-center
              justify-center
              gap-5
            "
          >
            <motion.span
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease,
              }}
              style={{
                transformOrigin: "right",
              }}
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,transparent,#A9C7E0)]
              "
            />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 10, 0],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                h-6
                w-6
              "
            >
              <span
                className="
                  absolute
                  left-[6px]
                  top-[2px]
                  h-3
                  w-[2px]
                  rotate-[38deg]
                  bg-[#C6A77A]
                "
              />

              <span
                className="
                  absolute
                  bottom-[2px]
                  right-[6px]
                  h-3
                  w-[2px]
                  rotate-[38deg]
                  bg-[#C6A77A]
                "
              />
            </motion.div>

            <motion.span
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,#A9C7E0,transparent)]
              "
            />
          </div>

          {/* CLOSING HEADING */}

          <motion.h3
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="
              mt-7
              font-[var(--font-new-york)]
              text-[1.65rem]
              font-semibold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#0B2A52]

              sm:text-[2rem]
              md:text-[2.2rem]
            "
          >
            The best work isn&apos;t about having all the answers.
          </motion.h3>

          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.18,
            }}
            className="
              mt-3
              text-[1rem]
              leading-[1.6]
              text-[#64748B]

              sm:text-[1.15rem]
            "
          >
            It&apos;s about asking{" "}
            <span className="text-[#C6A77A]">
              better questions.
            </span>
          </motion.p>

          <div
            className="
              mx-auto
              mt-7
              h-px
              max-w-[520px]
              bg-[#CADCEB]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}