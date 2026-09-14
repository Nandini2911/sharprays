"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  CircleDollarSign,
  Crosshair,
  FlaskConical,
  Gauge,
  Megaphone,
  ScrollText,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type FitItem = {
  number: string;
  title: string;
  icon: LucideIcon;
};

/* =========================================================
   FIT ITEMS
========================================================= */

const fitItems: FitItem[] = [
  {
    number: "01",
    title: "Has a clear product or service.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "Wants to generate measurable leads or sales.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Already has demand but needs greater reach.",
    icon: Users,
  },
  {
    number: "04",
    title: "Wants to test new audiences or offers.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Needs better visibility into advertising performance.",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Is spending on paid media without clear results.",
    icon: ScrollText,
  },
  {
    number: "07",
    title: "Wants to reduce wasted advertising spend.",
    icon: CircleDollarSign,
  },
  {
    number: "08",
    title: "Needs stronger conversion tracking.",
    icon: Target,
  },
  {
    number: "09",
    title:
      "Wants to understand which campaigns genuinely contribute to growth.",
    icon: TrendingUp,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PerformanceMarketingFitSection() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="performance-marketing-fit"
      aria-labelledby="performance-marketing-fit-heading"
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
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#FFFFFF_0%,#FCFDFE_35%,#F3F8FC_76%,#FFFFFF_100%)]
          "
        />

        {/* SOFT LIGHT */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0% 40%",
                    "100% 50%",
                    "65% 100%",
                    "0% 40%",
                  ],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse at 14% 52%,
                rgba(217,236,249,0.38) 0%,
                transparent 64%
              ),
              radial-gradient(
                ellipse at 83% 36%,
                rgba(231,220,201,0.19) 0%,
                transparent 59%
              ),
              radial-gradient(
                ellipse at 70% 86%,
                rgba(218,235,247,0.28) 0%,
                transparent 62%
              )
            `,
            backgroundSize: "160% 160%",
          }}
          className="absolute inset-0"
        />

        {/* SUBTLE TOP-RIGHT CURVES */}

        <div
          className="
            absolute
            -right-[280px]
            -top-[310px]
            h-[610px]
            w-[780px]
            rounded-[50%]
            border
            border-[#C8A46F]/20
          "
        />

        <div
          className="
            absolute
            -right-[210px]
            -top-[255px]
            h-[520px]
            w-[680px]
            rounded-[50%]
            border
            border-[#C8A46F]/14
          "
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
          max-w-[1420px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="relative">
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
              duration: reduceMotion ? 0 : 0.62,
              ease,
            }}
            className="
              flex
              items-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#B78952]" />

            <span
              className="
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#9A7045]
                sm:text-[0.7rem]
              "
            >
              Is Performance Marketing Right for You?
            </span>
          </motion.div>

          <motion.h2
            id="performance-marketing-fit-heading"
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
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.82,
              delay: reduceMotion ? 0 : 0.05,
              ease,
            }}
            className="
              mt-6
              max-w-[1000px]

              text-[2.3rem]
              font-medium
              leading-[1.05]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Paid Growth Works Best When
            <br className="hidden md:block" /> There Is Something Worth{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#4D82AE]
              "
            >
              Scaling.
            </span>
          </motion.h2>

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
              amount: 0.6,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="
              mt-5
              text-[0.98rem]
              leading-[1.7]
              text-[#506981]
              sm:text-[1rem]
            "
          >
            Performance marketing can be a strong fit if your business:
          </motion.p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            mt-9
            grid
            gap-6

            lg:grid-cols-[1.45fr_0.82fr]
            lg:items-stretch

            xl:gap-7
          "
        >
          {/* =================================================
              LEFT — FIT GRID
          ================================================= */}

          <div
            className="
              grid
              gap-3

              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {fitItems.map((item, index) => (
              <FitCard
                key={item.number}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              RIGHT — PERFORMANCE INSIGHT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 30,
              scale: reduceMotion ? 1 : 0.985,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.1,
              ease,
            }}
            className="
              relative
              overflow-hidden

              rounded-[1.3rem]

              border
              border-[#CAD8E3]

              bg-white/90

              p-5

              shadow-[0_22px_60px_rgba(11,42,82,0.08)]

              backdrop-blur-xl

              sm:p-6
              lg:p-7
            "
          >
            {/* TOP */}

            <div
              className="
                flex
                items-start
                justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.19em]
                    text-[#7D91A4]
                  "
                >
                  Real Results, Not Guesswork
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[330px]

                    font-serif
                    text-[1.65rem]
                    font-medium
                    leading-[1.15]
                    tracking-[-0.03em]

                    text-[#0B2A52]

                    sm:text-[1.8rem]
                  "
                >
                  Turn Insight Into
                  <br />
                  Sustainable Growth.
                </h3>
              </div>

              <span
                className="
                  text-[0.85rem]
                  tracking-[0.17em]
                  text-[#758A9D]
                "
              >
                •••
              </span>
            </div>

            {/* DATE */}

            <div
              className="
                mt-5
                flex
                justify-end
              "
            >
              <span
                className="
                  rounded-[0.65rem]

                  border
                  border-[#D6E1E9]

                  bg-[#FAFCFD]

                  px-3
                  py-2

                  text-[0.52rem]
                  font-semibold

                  text-[#4E667C]
                "
              >
                Last 30 days
              </span>
            </div>

            {/* =================================================
                KPI ROW
            ================================================= */}

            <div
              className="
                mt-5
                grid
                grid-cols-3
                border-y
                border-[#E2E9EE]
                py-5
              "
            >
              <KPI
                label="Total Revenue"
                value="$284,320"
                change="↑ 48%"
              />

              <KPI
                label="Leads"
                value="1,924"
                change="↑ 62%"
                bordered
              />

              <KPI
                label="ROAS"
                value="4.6x"
                change="↑ 37%"
              />
            </div>

            {/* =================================================
                CHART
            ================================================= */}

            <div className="mt-6">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <span
                  className="
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#7B8FA1]
                  "
                >
                  Growth Trend
                </span>

                <span
                  className="
                    rounded-md
                    bg-[#0B2A52]
                    px-2.5
                    py-1.5
                    text-[0.5rem]
                    font-semibold
                    text-white
                  "
                >
                  $284,320
                </span>
              </div>

              <GrowthChart reduceMotion={reduceMotion} />
            </div>

            {/* =================================================
                BOTTOM INSIGHT
            ================================================= */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-4

                rounded-[0.9rem]

                border
                border-[#E0E7EC]

                bg-gradient-to-r
                from-[#F2F6F9]
                to-[#FAFBFC]

                px-4
                py-4
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center

                  rounded-[0.7rem]

                  bg-[#F2E9DC]

                  text-[#A8763D]
                "
              >
                <BarChart3
                  size={18}
                  strokeWidth={1.7}
                />
              </span>

              <p
                className="
                  text-[0.72rem]
                  font-medium
                  leading-[1.5]
                  text-[#36546F]
                "
              >
                A clearer view. Smarter decisions.
                <br />
                <span className="font-semibold text-[#0B2A52]">
                  Stronger results.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            IMPORTANT MESSAGE
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
            duration: reduceMotion ? 0 : 0.78,
            ease,
          }}
          className="
            mt-7

            grid
            gap-6

            rounded-[1.25rem]

            border
            border-[#E3D7C8]

            bg-gradient-to-r
            from-[#FDFBF8]
            via-white
            to-[#F8F4EF]

            px-5
            py-6

            shadow-[0_12px_35px_rgba(11,42,82,0.035)]

            sm:px-7

            lg:grid-cols-[auto_1px_1fr]
            lg:items-center
            lg:px-8
          "
        >
          {/* ICON */}

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border
              border-[#D8BE95]

              bg-[#FBF5EC]

              text-[#9A713B]

              shadow-[0_0_0_7px_rgba(183,139,77,0.06)]
            "
          >
            <span
              className="
                font-serif
                text-[1.4rem]
                font-semibold
              "
            >
              !
            </span>
          </div>

          {/* DIVIDER */}

          <span
            className="
              hidden
              h-[62px]
              w-px
              bg-[#B9C6D1]
              lg:block
            "
          />

          {/* COPY */}

          <div>
            <h3
              className="
                font-serif
                text-[1.35rem]
                font-medium
                leading-[1.35]
                tracking-[-0.025em]
                text-[#0B2A52]

                sm:text-[1.5rem]
                lg:text-[1.65rem]
              "
            >
              Performance marketing cannot fix a weak offer simply by
              increasing budget.
            </h3>

            <p
              className="
                mt-3
                max-w-[1050px]
                text-[0.8rem]
                leading-[1.7]
                text-[#586E83]
              "
            >
              The strongest campaigns combine a relevant offer, good creative,
              effective targeting, a strong conversion experience and accurate
              measurement.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MICRO FOOTER
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
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.15,
          }}
          className="
            mt-7
            flex
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
              bg-[#B9CBD8]
              sm:block
            "
          />

          <span
            className="
              text-[0.54rem]
              font-semibold
              uppercase
              tracking-[0.21em]
              text-[#6C879D]
            "
          >
            Strategy · Offer · Creative · Conversion · Measurement
          </span>

          <span
            className="
              hidden
              h-px
              w-10
              bg-[#B9CBD8]
              sm:block
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   FIT CARD
========================================================= */

function FitCard({
  item,
  index,
  reduceMotion,
}: {
  item: FitItem;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = item.icon;

  return (
    <motion.article
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
        amount: 0.4,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay:
          reduceMotion
            ? 0
            : (index % 3) * 0.055,
        ease: [0.22, 1, 0.36, 1],
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

        min-h-[155px]

        overflow-hidden

        rounded-[1rem]

        border
        border-[#D1DCE5]

        bg-white/82

        px-5
        py-5

        shadow-[0_9px_28px_rgba(11,42,82,0.035)]

        backdrop-blur-md

        transition-all
        duration-300

        hover:border-[#A9C2D5]
        hover:bg-white
        hover:shadow-[0_16px_38px_rgba(11,42,82,0.075)]
      "
    >
      {/* TOP */}

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <span
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-[#F5F0E8]
            to-[#EDE4D6]

            text-[#8D693D]

            transition-all
            duration-300

            group-hover:scale-105
            group-hover:bg-[#EAF4FC]
            group-hover:text-[#1763A0]
          "
        >
          <Icon
            size={20}
            strokeWidth={1.7}
          />
        </span>

        <span
          className="
            text-[0.45rem]
            font-semibold
            tracking-[0.16em]
            text-[#9AABBA]
          "
        >
          {item.number}
        </span>
      </div>

      {/* TITLE */}

      <h3
        className="
          mt-5
          max-w-[230px]

          font-serif
          text-[1.02rem]
          font-medium
          leading-[1.35]
          tracking-[-0.02em]

          text-[#0B2A52]
        "
      >
        {item.title}
      </h3>

      {/* HOVER ACCENT */}

      <span
        className="
          absolute
          inset-x-5
          bottom-0

          h-[3px]

          origin-left
          scale-x-0

          bg-gradient-to-r
          from-[#1763A0]
          to-[#8EC5E8]

          transition-transform
          duration-500

          group-hover:scale-x-100
        "
      />
    </motion.article>
  );
}

/* =========================================================
   KPI
========================================================= */

function KPI({
  label,
  value,
  change,
  bordered = false,
}: {
  label: string;
  value: string;
  change: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`
        min-w-0
        px-3

        sm:px-4

        ${
          bordered
            ? "border-x border-[#E0E7EC]"
            : ""
        }
      `}
    >
      <span
        className="
          text-[0.48rem]
          font-medium
          text-[#72879A]
        "
      >
        {label}
      </span>

      <p
        className="
          mt-2
          truncate

          font-serif
          text-[1.45rem]
          font-semibold
          leading-none
          tracking-[-0.035em]

          text-[#0B2A52]
        "
      >
        {value}
      </p>

      <span
        className="
          mt-2
          block
          text-[0.51rem]
          font-semibold
          text-[#198B65]
        "
      >
        {change}
      </span>
    </div>
  );
}

/* =========================================================
   GROWTH CHART
========================================================= */

function GrowthChart({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div
      className="
        relative
        mt-4
        h-[190px]
      "
    >
      {/* GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-55

          [background-image:linear-gradient(to_right,#0B2A5208_1px,transparent_1px),linear-gradient(to_bottom,#0B2A5208_1px,transparent_1px)]
          [background-size:25%_25%]
        "
      />

      <svg
        viewBox="0 0 480 190"
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
            id="fitGrowthArea"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#B78850"
              stopOpacity="0.18"
            />

            <stop
              offset="100%"
              stopColor="#B78850"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <motion.path
          d="
            M0 162
            L32 132
            L65 141
            L96 103
            L128 125
            L160 99
            L192 110
            L224 76
            L256 43
            L288 82
            L320 54
            L352 64
            L384 49
            L416 37
            L448 25
            L480 15
            L480 190
            L0 190
            Z
          "
          fill="url(#fitGrowthArea)"
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
            duration: reduceMotion ? 0 : 0.7,
          }}
        />

        <motion.path
          d="
            M0 162
            L32 132
            L65 141
            L96 103
            L128 125
            L160 99
            L192 110
            L224 76
            L256 43
            L288 82
            L320 54
            L352 64
            L384 49
            L416 37
            L448 25
            L480 15
          "
          fill="none"
          stroke="#B78850"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
            duration: reduceMotion ? 0 : 1.4,
            delay: reduceMotion ? 0 : 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.circle
          cx="480"
          cy="15"
          r="4"
          fill="#B78850"
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
            duration: reduceMotion ? 0 : 0.4,
            delay: reduceMotion ? 0 : 1.35,
          }}
        />
      </svg>

      {/* LABELS */}

      <div
        className="
          absolute
          inset-x-0
          bottom-[-17px]

          flex
          justify-between

          text-[0.45rem]
          text-[#8293A2]
        "
      >
        <span>Oct 1</span>
        <span>Oct 8</span>
        <span>Oct 15</span>
        <span>Oct 22</span>
        <span>Oct 29</span>
      </div>
    </div>
  );
}