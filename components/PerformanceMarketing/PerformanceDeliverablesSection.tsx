"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowUpRight,
  BarChart3,
  Check,
  Layers3,
  Megaphone,
  Settings2,
  Target,
  TestTube2,
  TrendingUp,
  Users,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type DeliverableTone =
  | "sky"
  | "mint"
  | "peach"
  | "lavender"
  | "gold"
  | "blue"
  | "rose"
  | "cyan";

type Deliverable = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: DeliverableTone;
};

/* =========================================================
   DELIVERABLES
========================================================= */

const deliverables: Deliverable[] = [
  {
    number: "01",
    title: "Performance Strategy",
    description:
      "Campaign objectives, audience priorities, channel recommendations and conversion goals.",
    icon: Target,
    tone: "sky",
  },
  {
    number: "02",
    title: "Campaign Setup",
    description:
      "Campaign structure, targeting, settings and agreed advertising configuration.",
    icon: Settings2,
    tone: "mint",
  },
  {
    number: "03",
    title: "Audience Strategy",
    description:
      "Relevant audience groups, search intent, exclusions and retargeting opportunities.",
    icon: Users,
    tone: "peach",
  },
  {
    number: "04",
    title: "Advertising Creative",
    description:
      "Agreed campaign messaging, ad copy, graphics or creative requirements.",
    icon: Megaphone,
    tone: "lavender",
  },
  {
    number: "05",
    title: "Conversion Tracking",
    description:
      "Implementation guidance or configuration of agreed measurable campaign actions.",
    icon: TrendingUp,
    tone: "gold",
  },
  {
    number: "06",
    title: "Campaign Management",
    description:
      "Ongoing monitoring and management of active advertising campaigns.",
    icon: Layers3,
    tone: "blue",
  },
  {
    number: "07",
    title: "Testing & Optimization",
    description:
      "Testing of audiences, creative, messaging, campaign structures and other relevant variables.",
    icon: TestTube2,
    tone: "rose",
  },
  {
    number: "08",
    title: "Performance Reporting",
    description:
      "Reporting around agreed KPIs, campaign insights, observations and recommended next actions.",
    icon: BarChart3,
    tone: "cyan",
  },
];

const proposalItems = [
  "Platforms",
  "Campaigns",
  "Creative Scope",
  "Monthly Management",
  "Tracking Responsibilities",
  "Advertising Budget",
  "Reporting",
  "Commercial Terms",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PerformanceDeliverablesSection() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="performance-deliverables"
      aria-labelledby="performance-deliverables-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
          NO IMAGE / NO DASHBOARD / NO SIDE CARDS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#FFFFFF_0%,#FCFDFE_32%,#F3F8FC_70%,#FFFFFF_100%)]
          "
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0% 40%",
                    "100% 52%",
                    "65% 100%",
                    "0% 40%",
                  ],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse at 50% 15%,
                rgba(79,145,196,0.12) 0%,
                rgba(185,218,241,0.05) 34%,
                transparent 66%
              ),

              radial-gradient(
                ellipse at 16% 72%,
                rgba(219,237,250,0.36) 0%,
                rgba(240,248,253,0.10) 40%,
                transparent 68%
              ),

              radial-gradient(
                ellipse at 86% 78%,
                rgba(208,229,244,0.30) 0%,
                transparent 62%
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
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            CENTERED INTRO
        ===================================================== */}

        <div
          className="
            mx-auto
            max-w-[960px]
            text-center
          "
        >
          {/* EYEBROW */}

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
              duration: reduceMotion ? 0 : 0.6,
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
                h-px
                w-10
                bg-[#5A9ED0]
              "
            />

            <span
              className="
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#376D98]
                sm:text-[0.7rem]
              "
            >
              Performance Marketing Deliverables
            </span>

            <span
              className="
                h-px
                w-10
                bg-[#5A9ED0]
              "
            />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="performance-deliverables-heading"
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
              mx-auto
              mt-6
              max-w-[900px]

              text-[2.3rem]
              font-medium
              leading-[1.04]
              tracking-[-0.05em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Clear Campaigns.{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#347FBE]
              "
            >
              Clear Responsibilities.
            </span>
          </motion.h2>

          {/* COPY */}

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
              amount: 0.6,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.72,
              delay: reduceMotion ? 0 : 0.1,
              ease,
            }}
            className="
              mx-auto
              mt-7
              max-w-[720px]

              text-[0.98rem]
              leading-[1.75]

              text-[#506981]

              sm:text-[1rem]
            "
          >
            Your performance marketing proposal defines exactly what Sharp Rays
            manages and what your team provides.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 16,
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
              delay: reduceMotion ? 0 : 0.16,
              ease,
            }}
            className="
              mx-auto
              mt-3

              text-[0.82rem]
              font-medium
              leading-[1.6]

              text-[#254B6D]
            "
          >
            Depending on the selected scope, your service may include:
          </motion.p>

          {/* SMALL PREMIUM ACCENT */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: reduceMotion ? 1 : 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.22,
              ease,
            }}
            className="
              mx-auto
              mt-8
              h-[2px]
              w-14
              origin-center

              bg-gradient-to-r
              from-[#0B2A52]
              via-[#4E93C7]
              to-[#8CC3E8]
            "
          />
        </div>

        {/* =====================================================
            SECTION MICRO HEADER
        ===================================================== */}

        <motion.div
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
            amount: 0.65,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-14
            flex
            max-w-[1340px]
            items-center
            gap-5

            sm:mt-16
          "
        >
          <span
            className="
              text-[0.56rem]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#6E879D]
            "
          >
            What Your Scope Can Include
          </span>

          <span
            className="
              h-px
              flex-1

              bg-gradient-to-r
              from-[#B8CAD8]
              to-transparent
            "
          />

          <span
            className="
              hidden

              font-serif
              text-[0.78rem]
              italic

              text-[#5582A4]

              sm:block
            "
          >
            08 connected responsibilities
          </span>
        </motion.div>

        {/* =====================================================
            COLORFUL DELIVERABLE GRID
        ===================================================== */}

        <div
          className="
            relative
            z-20

            mx-auto
            mt-7

            grid
            max-w-[1340px]
            gap-4

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {deliverables.map((item, index) => (
            <DeliverableCard
              key={item.number}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            PROPOSAL CONFIRMATION
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-5
            max-w-[1340px]

            grid
            overflow-hidden

            rounded-[1.2rem]

            border
            border-[#C5D8E6]

            bg-white/88

            shadow-[0_16px_45px_rgba(11,42,82,0.055)]

            backdrop-blur-xl

            lg:grid-cols-[330px_minmax(0,1fr)]
          "
        >
          {/* ===============================================
              NAVY LABEL
          =============================================== */}

          <div
            className="
              relative

              flex
              items-center
              gap-4

              overflow-hidden

              bg-gradient-to-r
              from-[#082D56]
              via-[#0C4073]
              to-[#145A91]

              px-6
              py-6

              sm:px-7
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-gradient-to-br
                from-white/[0.04]
                to-transparent
              "
            />

            <div
              className="
                relative

                flex
                h-10
                w-10
                shrink-0

                items-center
                justify-center

                rounded-full

                border
                border-white/55

                bg-white/[0.06]

                text-white
              "
            >
              <Check
                size={16}
                strokeWidth={1.9}
              />
            </div>

            <div className="relative">
              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.21em]

                  text-white/65
                "
              >
                Scope Confirmation
              </span>

              <p
                className="
                  mt-1

                  text-[0.7rem]
                  font-semibold
                  uppercase
                  tracking-[0.13em]

                  text-white
                "
              >
                Your Final Proposal Confirms
              </p>
            </div>
          </div>

          {/* ===============================================
              PROPOSAL ITEMS
          =============================================== */}

          <div
            className="
              flex
              flex-wrap
              items-center

              gap-x-5
              gap-y-3

              px-5
              py-5

              sm:px-7
            "
          >
            {proposalItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : 10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay:
                    reduceMotion
                      ? 0
                      : index * 0.04,
                  ease,
                }}
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0

                    rounded-full

                    bg-[#2477C7]

                    shadow-[0_0_0_4px_rgba(36,119,199,0.07)]
                  "
                />

                <span
                  className="
                    text-[0.65rem]
                    font-medium
                    text-[#365A77]
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM SUPPORT LINE
        ===================================================== */}

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
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-7
            flex
            max-w-[760px]
            items-center
            justify-center
            gap-4
            text-center
          "
        >
          <span
            className="
              hidden
              h-px
              w-10
              bg-[#B8CBD9]
              sm:block
            "
          />

          <p
            className="
              text-[0.56rem]
              font-semibold
              uppercase
              leading-[1.7]
              tracking-[0.2em]

              text-[#6C879D]
            "
          >
            Clear scope · clear ownership · clearer campaign management
          </p>

          <span
            className="
              hidden
              h-px
              w-10
              bg-[#B8CBD9]
              sm:block
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DELIVERABLE CARD
========================================================= */

function DeliverableCard({
  item,
  index,
  reduceMotion,
}: {
  item: Deliverable;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = item.icon;
  const theme = getCardTheme(item.tone);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.article
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
        duration: reduceMotion ? 0 : 0.62,
        delay:
          reduceMotion
            ? 0
            : (index % 4) * 0.065,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
            }
      }
      className={`
        group
        relative

        min-h-[230px]

        overflow-hidden

        rounded-[1.15rem]

        border

        p-5

        shadow-[0_14px_35px_rgba(11,42,82,0.045)]

        transition-all
        duration-500

        sm:p-6

        ${theme.card}
      `}
    >
      {/* =====================================================
          HOVER ATMOSPHERE
      ===================================================== */}

      <div
        className={`
          pointer-events-none

          absolute
          -right-16
          -top-16

          h-44
          w-44

          rounded-full

          opacity-0
          blur-3xl

          transition-opacity
          duration-500

          group-hover:opacity-100

          ${theme.glow}
        `}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          flex
          items-center
          gap-4
        "
      >
        <div
          className={`
            flex
            h-12
            w-12
            shrink-0

            items-center
            justify-center

            rounded-full

            transition-all
            duration-300

            group-hover:scale-105

            ${theme.icon}
          `}
        >
          <Icon
            size={21}
            strokeWidth={1.7}
          />
        </div>

        <span
          className="
            font-serif
            text-[0.8rem]
            font-semibold

            text-[#153F64]
          "
        >
          {item.number}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <h3
        className="
          relative
          mt-6

          font-serif
          text-[1.15rem]
          font-semibold
          leading-[1.25]
          tracking-[-0.025em]

          text-[#082C58]
        "
      >
        {item.title}
      </h3>

      <p
        className="
          relative
          mt-3
          max-w-[300px]

          text-[0.81rem]
          leading-[1.62]

          text-[#4E6883]
        "
      >
        {item.description}
      </p>

      {/* =====================================================
          BOTTOM DETAIL
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-5
          bottom-4

          flex
          items-center
          justify-between
        "
      >
        <span
          className={`
            h-[2px]
            w-8

            transition-all
            duration-500

            group-hover:w-16

            ${theme.line}
          `}
        />

        <div
          className={`
            flex
            h-7
            w-7

            items-center
            justify-center

            rounded-full

            text-white

            shadow-[0_6px_16px_rgba(11,42,82,0.10)]

            transition-transform
            duration-300

            group-hover:translate-x-1
            group-hover:-translate-y-1

            ${theme.arrow}
          `}
        >
          <ArrowUpRight
            size={12}
            strokeWidth={2}
          />
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   CARD THEMES
========================================================= */

function getCardTheme(tone: DeliverableTone) {
  const tones: Record<
    DeliverableTone,
    {
      card: string;
      icon: string;
      arrow: string;
      glow: string;
      line: string;
    }
  > = {
    sky: {
      card:
        "border-[#AFCFE6] bg-gradient-to-br from-[#FBFEFF] via-[#F2F8FD] to-[#EAF5FC] hover:border-[#78ACD3] hover:shadow-[0_20px_50px_rgba(44,128,194,0.11)]",
      icon:
        "bg-gradient-to-br from-[#DCEFFD] to-[#B9DDF7] text-[#1261A1]",
      arrow:
        "bg-gradient-to-br from-[#4DA1EF] to-[#2475CE]",
      glow:
        "bg-[#AAD7F6]",
      line:
        "bg-[#5B9ED0]",
    },

    mint: {
      card:
        "border-[#B5D9D0] bg-gradient-to-br from-[#FCFFFE] via-[#F2FAF7] to-[#EAF7F3] hover:border-[#7DBCA9] hover:shadow-[0_20px_50px_rgba(50,143,119,0.09)]",
      icon:
        "bg-gradient-to-br from-[#DCF5ED] to-[#B5E5D7] text-[#167A69]",
      arrow:
        "bg-gradient-to-br from-[#248F7B] to-[#0D6D62]",
      glow:
        "bg-[#B8E7DA]",
      line:
        "bg-[#54A995]",
    },

    peach: {
      card:
        "border-[#E5C8B4] bg-gradient-to-br from-[#FFFDFC] via-[#FFF7F2] to-[#FCEFE6] hover:border-[#D3976F] hover:shadow-[0_20px_50px_rgba(183,112,56,0.09)]",
      icon:
        "bg-gradient-to-br from-[#FFE7D6] to-[#F8C6A4] text-[#B85E28]",
      arrow:
        "bg-gradient-to-br from-[#E19A60] to-[#C36A31]",
      glow:
        "bg-[#F5CFB4]",
      line:
        "bg-[#D28B56]",
    },

    lavender: {
      card:
        "border-[#CEC4EA] bg-gradient-to-br from-[#FEFDFF] via-[#F8F6FE] to-[#F0EDFC] hover:border-[#A897DD] hover:shadow-[0_20px_50px_rgba(103,78,197,0.09)]",
      icon:
        "bg-gradient-to-br from-[#EEE9FF] to-[#CBBFF6] text-[#654CD0]",
      arrow:
        "bg-gradient-to-br from-[#7B64E9] to-[#5C43D2]",
      glow:
        "bg-[#D5CBF7]",
      line:
        "bg-[#8B76D8]",
    },

    gold: {
      card:
        "border-[#E5D2A9] bg-gradient-to-br from-[#FFFDF8] via-[#FFF8EB] to-[#FCF2DC] hover:border-[#D1A759] hover:shadow-[0_20px_50px_rgba(171,126,48,0.09)]",
      icon:
        "bg-gradient-to-br from-[#FFF0C7] to-[#F0CE88] text-[#AD791A]",
      arrow:
        "bg-gradient-to-br from-[#DFAA46] to-[#BE8422]",
      glow:
        "bg-[#F1D9A1]",
      line:
        "bg-[#D3A449]",
    },

    blue: {
      card:
        "border-[#B7D3E9] bg-gradient-to-br from-[#FCFEFF] via-[#F2F8FD] to-[#E9F4FB] hover:border-[#7CAFDA] hover:shadow-[0_20px_50px_rgba(41,116,184,0.10)]",
      icon:
        "bg-gradient-to-br from-[#DCECFB] to-[#AFCFF4] text-[#1B63CA]",
      arrow:
        "bg-gradient-to-br from-[#438FED] to-[#246DDA]",
      glow:
        "bg-[#B5D6F7]",
      line:
        "bg-[#548CC6]",
    },

    rose: {
      card:
        "border-[#E8C3C8] bg-gradient-to-br from-[#FFFDFD] via-[#FFF5F6] to-[#FBECEE] hover:border-[#DA8D97] hover:shadow-[0_20px_50px_rgba(189,75,88,0.08)]",
      icon:
        "bg-gradient-to-br from-[#FFE1E4] to-[#F5B9C0] text-[#B83E4E]",
      arrow:
        "bg-gradient-to-br from-[#ED6877] to-[#D7485A]",
      glow:
        "bg-[#F6C6CC]",
      line:
        "bg-[#DB7B86]",
    },

    cyan: {
      card:
        "border-[#B8DBEA] bg-gradient-to-br from-[#FCFEFF] via-[#F1F9FD] to-[#E8F6FC] hover:border-[#7DBCD8] hover:shadow-[0_20px_50px_rgba(32,139,192,0.09)]",
      icon:
        "bg-gradient-to-br from-[#DDF4FC] to-[#ACE0F3] text-[#12699D]",
      arrow:
        "bg-gradient-to-br from-[#2DA8DC] to-[#1685BC]",
      glow:
        "bg-[#B7E4F5]",
      line:
        "bg-[#55A8CC]",
    },
  };

  return tones[tone];
}