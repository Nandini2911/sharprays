"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  MousePointerClick,
  Globe2,
  Search,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const points = [
  {
    number: "01",
    title: "What your audience searches.",
    label: "SEARCH INTENT",
    icon: Search,
  },
  {
    number: "02",
    title: "What your business offers.",
    label: "BUSINESS VALUE",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "What your website communicates.",
    label: "WEBSITE MESSAGE",
    icon: Globe2,
  },
  {
    number: "04",
    title: "What action should happen next.",
    label: "NEXT ACTION",
    icon: MousePointerClick,
  },
];

export default function SEOPointOfViewSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-point-of-view"
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
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[56%]
          h-[650px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#0B2A52]/[0.025]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[22%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#C6A77A]/[0.07]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* ======================================================
            HEADING
        ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.85,
            ease,
          }}
          className="mx-auto max-w-[920px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
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
              HOW WE THINK ABOUT SEO
            </span>

            <span className="h-px w-9 bg-[#C6A77A]" />
          </div>

          <h2
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
            Rankings Are Useful.
            <br className="hidden sm:block" />

            <span className="text-[#C6A77A]">
              {" "}
              Relevance Is More Valuable.
            </span>
          </h2>

          <div className="mx-auto mt-7 max-w-[680px]">
            <p className="text-[13px] leading-7 text-[#0B2A52]/60 sm:text-sm">
              A higher position can create visibility.
            </p>

            <p className="mt-1 text-[13px] font-medium leading-7 sm:text-sm">
              But visibility alone does not create growth.
            </p>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#0B2A52]/15" />

            <p
              className="
                text-[8px]
                font-semibold
                tracking-[0.22em]
                text-[#0B2A52]/40
                sm:text-[9px]
              "
            >
              THE RIGHT SEO STRATEGY CONNECTS FOUR THINGS
            </p>

            <span className="h-px w-7 bg-[#0B2A52]/15" />
          </div>
        </motion.div>

        {/* ======================================================
            DESKTOP TREE LAYOUT
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-16
            hidden
            max-w-[1180px]
            lg:block
            lg:mt-20
          "
        >
          {/* ====================================================
              CENTRAL CIRCLE
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.75,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="
              relative
              z-20
              mx-auto
              flex
              h-[175px]
              w-[175px]
              items-center
              justify-center
              rounded-full
              border-[1.5px]
              border-[#0B2A52]/35
              bg-white
              p-[5px]
              shadow-[0_25px_65px_rgba(11,42,82,0.10)]
            "
          >
            <div
              className="
                relative
                flex
                h-full
                w-full
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-[#C6A77A]/55
                bg-gradient-to-br
                from-white
                via-white
                to-[#C6A77A]/[0.09]
                text-center
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-4
                  rounded-full
                  border
                  border-[#0B2A52]/[0.07]
                "
              />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.12, 1],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  mb-2
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C6A77A]/12
                  text-[#C6A77A]
                "
              >
                <Sparkles size={13} />
              </motion.div>

              <span
                className="
                  text-[7px]
                  font-semibold
                  tracking-[0.25em]
                  text-[#0B2A52]/40
                "
              >
                SEO
              </span>

              <span className="mt-1 text-[18px] font-medium">
                Relevance
              </span>

              <span
                className="
                  mt-1
                  text-[7px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#C6A77A]
                "
              >
                ALIGNED
              </span>
            </div>
          </motion.div>

          {/* ====================================================
              CENTER VERTICAL CONNECTOR
          ==================================================== */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease,
            }}
            className="
              mx-auto
              h-[70px]
              w-px
              origin-top
              bg-[#C6A77A]
            "
          />

          {/* ====================================================
              HORIZONTAL MASTER LINE
          ==================================================== */}

          <div className="relative mx-auto h-[105px] w-[91%]">
            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-[#0B2A52]/20
              "
            />

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
                duration: 1.2,
                delay: 0.55,
                ease,
              }}
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                origin-center
                bg-gradient-to-r
                from-[#C6A77A]/40
                via-[#C6A77A]
                to-[#C6A77A]/40
              "
            />

            {/* FOUR STEMS */}

            {[12.5, 37.5, 62.5, 87.5].map((position, index) => (
              <motion.div
                key={position}
                initial={{
                  scaleY: 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.8 + index * 0.1,
                  ease,
                }}
                style={{
                  left: `${position}%`,
                }}
                className="
                  absolute
                  top-0
                  h-[105px]
                  w-px
                  origin-top
                  bg-gradient-to-b
                  from-[#C6A77A]
                  to-[#0B2A52]/18
                "
              />
            ))}

            {/* CONNECTION NODES */}

            {[12.5, 37.5, 62.5, 87.5].map((position, index) => (
              <motion.span
                key={`node-${position}`}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.95 + index * 0.1,
                }}
                style={{
                  left: `${position}%`,
                }}
                className="
                  absolute
                  top-0
                  h-2
                  w-2
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#C6A77A]
                  bg-white
                "
              />
            ))}
          </div>

          {/* ====================================================
              CARDS
          ==================================================== */}

          <div className="grid grid-cols-4 gap-5">
            {points.map((item, index) => (
              <TreeCard
                key={item.number}
                item={item}
                delay={0.9 + index * 0.12}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            MOBILE / TABLET
        ====================================================== */}

        <div className="mx-auto mt-14 max-w-[650px] lg:hidden">
          {/* MOBILE CORE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="
              mx-auto
              flex
              h-[135px]
              w-[135px]
              flex-col
              items-center
              justify-center
              rounded-full
              border-[1.5px]
              border-[#0B2A52]/30
              bg-white
              text-center
              shadow-[0_20px_50px_rgba(11,42,82,0.08)]
            "
          >
            <span
              className="
                text-[7px]
                font-semibold
                tracking-[0.2em]
                text-[#C6A77A]
              "
            >
              SEO
            </span>

            <span className="mt-1 text-[16px] font-medium">
              Relevance
            </span>

            <span
              className="
                mt-1
                text-[7px]
                tracking-[0.18em]
                text-[#0B2A52]/35
              "
            >
              ALIGNED
            </span>
          </motion.div>

          {/* MOBILE CONNECTION */}

          <div
            className="
              mx-auto
              h-10
              w-px
              bg-gradient-to-b
              from-[#C6A77A]
              to-[#0B2A52]/15
            "
          />

          {/* MOBILE CARDS */}

          <div className="space-y-4">
            {points.map((item, index) => (
              <TreeCard
                key={item.number}
                item={item}
                delay={index * 0.1}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            FINAL MESSAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
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
            duration: 0.9,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1100px]
            rounded-[28px]
            border-[1.5px]
            border-[#0B2A52]/25
            bg-white
            p-[5px]
            shadow-[0_20px_60px_rgba(11,42,82,0.07)]
            lg:mt-20
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-[#C6A77A]/35
              bg-gradient-to-r
              from-[#F7FAFD]
              via-white
              to-[#C6A77A]/[0.08]
              px-6
              py-8
              sm:px-10
              lg:px-12
              lg:py-10
            "
          >
            <div
              className="
                absolute
                bottom-7
                left-0
                top-7
                w-[3px]
                rounded-r-full
                bg-[#C6A77A]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-52
                w-52
                rounded-full
                border
                border-[#0B2A52]/[0.06]
              "
            />

            <p
              className="
                max-w-[800px]
                text-[13px]
                leading-7
                text-[#0B2A52]/60
                sm:text-sm
              "
            >
              When those pieces align, organic search becomes more than a
              traffic channel.
            </p>

            <p
              className="
                mt-3
                max-w-[880px]
                text-[16px]
                font-medium
                leading-8
                text-[#0B2A52]
                sm:text-[18px]
              "
            >
              It becomes a way for customers to discover your business at the
              moment their intent is strongest.
            </p>

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 52,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-6 h-[2px] bg-[#C6A77A]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   TREE CARD
============================================================= */

function TreeCard({
  item,
  delay,
  reduceMotion,
}: {
  item: {
    number: string;
    title: string;
    label: string;
    icon: React.ElementType;
  };
  delay: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
            }
      }
      className="
        group
        relative
        rounded-[25px]
        border-[1.5px]
        border-[#0B2A52]/30
        bg-white
        p-[5px]
        shadow-[0_15px_42px_rgba(11,42,82,0.055)]
        transition-shadow
        duration-500
        hover:shadow-[0_22px_55px_rgba(11,42,82,0.11)]
      "
    >
      {/* INNER FRAME */}

      <div
        className="
          relative
          min-h-[215px]
          overflow-hidden
          rounded-[19px]
          border
          border-[#C6A77A]/35
          bg-gradient-to-br
          from-white
          via-[#FBFCFE]
          to-[#C6A77A]/[0.07]
          p-6
          transition-all
          duration-500
          group-hover:border-[#C6A77A]/75
        "
      >
        {/* GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -right-14
            -top-14
            h-36
            w-36
            rounded-full
            bg-[#0B2A52]/0
            blur-[40px]
            transition-all
            duration-500
            group-hover:bg-[#0B2A52]/[0.06]
          "
        />

        {/* NUMBER + ICON */}

        <div className="relative z-10 flex items-start justify-between">
          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.18em]
              text-[#C6A77A]
            "
          >
            {item.number}
          </span>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[#0B2A52]/20
              bg-white
              text-[#0B2A52]/50
              shadow-[0_6px_16px_rgba(11,42,82,0.05)]
              transition-all
              duration-300
              group-hover:border-[#0B2A52]
              group-hover:bg-[#0B2A52]
              group-hover:text-white
            "
          >
            <Icon
              size={16}
              strokeWidth={1.6}
            />
          </div>
        </div>

        {/* TEXT */}

        <div className="relative z-10 mt-9">
          <h3
            className="
              text-[16px]
              font-medium
              leading-7
              tracking-[-0.015em]
              text-[#0B2A52]
              sm:text-[17px]
            "
          >
            {item.title}
          </h3>

          <div className="mt-6 flex items-center gap-3">
            <span
              className="
                h-px
                w-7
                bg-[#0B2A52]/20
                transition-all
                duration-500
                group-hover:w-11
                group-hover:bg-[#C6A77A]
              "
            />

            <span
              className="
                text-[7px]
                font-semibold
                tracking-[0.2em]
                text-[#0B2A52]/35
                transition-colors
                duration-300
                group-hover:text-[#C6A77A]
              "
            >
              {item.label}
            </span>
          </div>
        </div>

        {/* BOTTOM ACCENT */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            bg-[#C6A77A]
            transition-all
            duration-500
            group-hover:w-[70%]
          "
        />
      </div>
    </motion.article>
  );
}