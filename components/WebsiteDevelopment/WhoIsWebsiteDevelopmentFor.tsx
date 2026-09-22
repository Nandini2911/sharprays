"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowDownRight,
  Blocks,
  Gauge,
  Megaphone,
  MonitorSmartphone,
  PencilRuler,
  Search,
  Settings2,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type Signal = {
  number: string;
  text: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

/* =========================================================
   DATA
========================================================= */

const signals: Signal[] = [
  {
    number: "01",
    text: "Your current website no longer represents the business.",
    icon: PencilRuler,
    accent: "#3976A4",
    soft: "#EAF3FA",
  },
  {
    number: "02",
    text: "Customers struggle to understand your services.",
    icon: Users,
    accent: "#78639B",
    soft: "#F0ECF7",
  },
  {
    number: "03",
    text: "The mobile experience feels outdated or difficult to use.",
    icon: Smartphone,
    accent: "#A97C52",
    soft: "#F7EEE2",
  },
  {
    number: "04",
    text: "Pages load slowly.",
    icon: Gauge,
    accent: "#477C74",
    soft: "#E7F2EF",
  },
  {
    number: "05",
    text: "Your team struggles to update important information.",
    icon: Settings2,
    accent: "#547B9D",
    soft: "#EAF1F7",
  },
  {
    number: "06",
    text: "The current platform limits what you want to build.",
    icon: Blocks,
    accent: "#946F8B",
    soft: "#F4EDF2",
  },
  {
    number: "07",
    text: "Your marketing campaigns send people to weak landing experiences.",
    icon: Megaphone,
    accent: "#AD7C52",
    soft: "#F7EEE3",
  },
  {
    number: "08",
    text: "Organic search is important but the website has structural limitations.",
    icon: Search,
    accent: "#3F7498",
    soft: "#E9F2F8",
  },
  {
    number: "09",
    text: "You are launching a new business, product or service.",
    icon: Sparkles,
    accent: "#487F72",
    soft: "#E7F2ED",
  },
  {
    number: "10",
    text: "You need a website that can support the next stage of the company.",
    icon: TrendingUp,
    accent: "#A37B50",
    soft: "#F5EDE1",
  },
];

/* =========================================================
   SIGNAL ROW
========================================================= */

function SignalRow({
  signal,
  index,
  side,
  reduceMotion,
}: {
  signal: Signal;
  index: number;
  side: "left" | "right";
  reduceMotion: boolean;
}) {
  const Icon = signal.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : side === "left" ? -26 : 26,
        y: reduceMotion ? 0 : 12,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.62,
        delay: reduceMotion ? 0 : index * 0.065,
        ease,
      }}
      className="
        group
        relative
        border-b
        border-[#DEE6EB]
        py-5
        sm:py-6
      "
    >
      {/* HOVER WASH */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(90deg,#F8FAFC_0%,transparent_90%)]
          opacity-0
          transition-opacity
          duration-400
          group-hover:opacity-100
        "
      />

      {/* BOTTOM ACCENT */}

      <span
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          transition-all
          duration-500
          group-hover:w-20
        "
        style={{
          backgroundColor: signal.accent,
        }}
      />

      <div
        className="
          relative
          z-10
          grid
          grid-cols-[48px_44px_1fr]
          items-center
          gap-4
          sm:grid-cols-[52px_48px_1fr]
        "
      >
        {/* ICON */}

        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  rotate: 6,
                  scale: 1.05,
                }
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white
            shadow-[0_5px_15px_rgba(11,42,82,0.045)]
          "
          style={{
            backgroundColor: signal.soft,
            color: signal.accent,
          }}
        >
          <Icon size={17} strokeWidth={1.65} />
        </motion.div>

        {/* NUMBER */}

        <span
          className="
            font-serif
            text-[1.55rem]
            leading-none
            tracking-[-0.05em]
            text-[#B79A72]
          "
        >
          {signal.number}
        </span>

        {/* COPY */}

        <p
          className="
            max-w-[430px]
            font-serif
            text-[0.9rem]
            leading-[1.55]
            text-[#36536D]
            sm:text-[0.96rem]
          "
        >
          {signal.text}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WhoWebsiteDevelopmentIsFor() {
  const reduceMotion = Boolean(useReducedMotion());

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const leftSignals = signals.slice(0, 5);
  const rightSignals = signals.slice(5);

  return (
    <section
      id="who-website-development-is-for"
      aria-labelledby="who-website-development-is-for-heading"
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
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[-330px]
            h-[660px]
            w-[1120px]
            -translate-x-1/2
            rounded-full
            bg-[#EEF5FA]
            blur-[155px]
          "
        />

        <div
          className="
            absolute
            -left-[260px]
            top-[48%]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#F4F8FA]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-[230px]
            bottom-[-120px]
            h-[470px]
            w-[490px]
            rounded-full
            bg-[#FBF5ED]
            blur-[125px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            mx-auto
            max-w-[1080px]
            text-center
          "
        >
          <motion.div
            variants={fadeUp}
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-9 bg-[#B79A72]" />

            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.29em]
                text-[#92745C]
                sm:text-[0.62rem]
              "
            >
              Is It Time for a Better Website?
            </span>

            <span className="h-px w-9 bg-[#B79A72]" />
          </motion.div>

          <motion.h2
            id="who-website-development-is-for-heading"
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              max-w-[1080px]
              font-serif
              text-[2.1rem]
              font-normal
              leading-[1.04]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            A New Website Makes Sense When the Current One Is{" "}
            <span className="italic text-[#A97C52]">
              Holding Something Back.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[720px]
              font-serif
              text-[0.96rem]
              leading-[1.75]
              text-[#60758A]
              sm:text-[1rem]
            "
          >
            Website development may be worth considering if:
          </motion.p>
        </motion.div>

        {/* =====================================================
            DIAGNOSTIC AREA
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-[1220px]
            sm:mt-16
          "
        >
          {/* CENTER SPINE — DESKTOP */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              -translate-x-1/2
              lg:flex
              lg:flex-col
              lg:items-center
            "
          >
            <motion.span
              initial={{
                scaleY: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.1,
                ease,
              }}
              style={{
                transformOrigin: "top",
              }}
              className="
                h-full
                w-px
                bg-[linear-gradient(180deg,#B79A72_0%,#D8E3EA_45%,#B79A72_100%)]
              "
            />

            <span
              className="
                absolute
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#D4E0E7]
                bg-white
                text-[#0B2A52]
                shadow-[0_10px_25px_rgba(11,42,82,0.07)]
              "
            >
              <MonitorSmartphone
                size={16}
                strokeWidth={1.7}
              />
            </span>
          </div>

          <div
            className="
              grid
              gap-0
              lg:grid-cols-2
              lg:gap-20
            "
          >
            {/* LEFT */}

            <div>
              {leftSignals.map((signal, index) => (
                <SignalRow
                  key={signal.number}
                  signal={signal}
                  index={index}
                  side="left"
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* RIGHT */}

            <div>
              {rightSignals.map((signal, index) => (
                <SignalRow
                  key={signal.number}
                  signal={signal}
                  index={index}
                  side="right"
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            DECISION LINE
        ===================================================== */}

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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[980px]
            sm:mt-20
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
              sm:gap-6
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
                duration: 0.85,
                ease,
              }}
              style={{
                transformOrigin: "right",
              }}
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,transparent,#D4E0E7)]
              "
            />

            <span
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#0B2A52]
                text-white
                shadow-[0_10px_25px_rgba(11,42,82,0.10)]
              "
            >
              <ArrowDownRight
                size={15}
                strokeWidth={1.7}
              />
            </span>

            <motion.span
              initial={{
                scaleX: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                ease,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,#D4E0E7,transparent)]
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            FINAL PRINCIPLE
        ===================================================== */}

        <motion.div
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
            duration: 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-9
            max-w-[900px]
            text-center
          "
        >
          <span
            className="
              text-[0.49rem]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#92745C]
            "
          >
            The Decision
          </span>

          <h3
            className="
              mx-auto
              mt-4
              max-w-[780px]
              font-serif
              text-[1.7rem]
              font-normal
              leading-[1.2]
              tracking-[-0.035em]
              text-[#0B2A52]
              sm:text-[2rem]
              md:text-[2.15rem]
            "
          >
            A redesign should solve{" "}
            <span className="italic text-[#A97C52]">
              a real problem.
            </span>
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-[720px]
              font-serif
              text-[0.88rem]
              leading-[1.75]
              text-[#60758A]
              sm:text-[0.94rem]
            "
          >
            Changing the interface without understanding the reason rarely
            creates a better website.
          </p>

          {/* SMALL END DETAIL */}

          <div
            className="
              mx-auto
              mt-7
              flex
              w-fit
              items-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#D5E0E7]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />
            <span className="h-px w-10 bg-[#D5E0E7]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}