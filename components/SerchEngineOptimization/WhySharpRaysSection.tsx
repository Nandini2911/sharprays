"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Braces,
  FileText,
  Search,
  Sparkles,
  Target,
  UsersRound,
  Waypoints,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type Audience = {
  number: string;
  label: string;
  title: string;
  icon: LucideIcon;
};

type Discipline = {
  number: string;
  title: string;
  icon: LucideIcon;
};

/* ============================================================
   DATA
============================================================ */

const audiences: Audience[] = [
  {
    number: "01",
    label: "CUSTOMERS",
    title: "For customers.",
    icon: UsersRound,
  },
  {
    number: "02",
    label: "SEARCH",
    title: "For search engines.",
    icon: Search,
  },
  {
    number: "03",
    label: "AI DISCOVERY",
    title: "And increasingly, for AI-assisted search experiences.",
    icon: Bot,
  },
];

const disciplines: Discipline[] = [
  {
    number: "01",
    title: "Technical SEO",
    icon: Braces,
  },
  {
    number: "02",
    title: "Content",
    icon: FileText,
  },
  {
    number: "03",
    title: "Search Intent",
    icon: Target,
  },
  {
    number: "04",
    title: "User Experience",
    icon: Waypoints,
  },
];

/* ============================================================
   MAIN SECTION
============================================================ */

export default function WhySharpRaysSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-sharp-rays"
      className="
        relative
        overflow-hidden
        bg-[#FCFBF8]
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-72
            top-[10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#3976B6]/[0.04]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            -right-72
            bottom-[8%]
            h-[580px]
            w-[580px]
            rounded-full
            bg-[#C6A77A]/[0.07]
            blur-[180px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            max-w-[980px]
            text-center
          "
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C6A77A]" />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.26em]
                text-[#A87846]
              "
            >
              WHY SHARP RAYS
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
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
            SEO Should Make Your Business{" "}
            <span className="text-[#C6A77A]">
              Easier to Understand.
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            CLARITY FRAME
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
            amount: 0.18,
          }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1180px]
            overflow-hidden
            rounded-[30px]
            border
            border-[#0B2A52]/12
            bg-white/70
            shadow-[0_22px_65px_rgba(11,42,82,0.04)]
            backdrop-blur-sm
          "
        >
          {/* soft glow */}

          <div
            className="
              pointer-events-none
              absolute
              -left-20
              top-1/2
              h-[300px]
              w-[300px]
              -translate-y-1/2
              rounded-full
              bg-[#3976B6]/[0.06]
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              top-1/2
              h-[300px]
              w-[300px]
              -translate-y-1/2
              rounded-full
              bg-[#C6A77A]/[0.09]
              blur-[90px]
            "
          />

          {/* top strip */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-5
              border-b
              border-[#0B2A52]/10
              px-7
              py-6
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-9
            "
          >
            <div>
              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.21em]
                  text-[#A87846]
                "
              >
                ONE BUSINESS · THREE AUDIENCES
              </span>

              <p
                className="
                  mt-2
                  [font-family:Georgia,'Times_New_Roman',serif]
                  text-[18px]
                  text-[#0B2A52]
                  sm:text-[21px]
                "
              >
                Clarity needs to travel in more than one direction.
              </p>
            </div>

            <div className="flex items-end gap-3">
              <span
                className="
                  [font-family:Georgia,'Times_New_Roman',serif]
                  text-[48px]
                  leading-none
                  text-[#DEC7A9]
                "
              >
                03
              </span>

              <span
                className="
                  pb-1
                  text-[9px]
                  font-semibold
                  leading-4
                  tracking-[0.14em]
                  text-[#0B2A52]/36
                "
              >
                WAYS TO
                <br />
                BE UNDERSTOOD
              </span>
            </div>
          </div>

          {/* audience lanes */}

          <div
            className="
              relative
              z-10
              grid
              md:grid-cols-3
            "
          >
            {audiences.map((item, index) => (
              <AudienceLane
                key={item.number}
                item={item}
                index={index}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>

          {/* bottom convergence */}

          <div
            className="
              relative
              z-10
              border-t
              border-[#0B2A52]/10
              px-7
              py-7
              text-center
              sm:px-10
            "
          >
            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.19em]
                text-[#C6A77A]
              "
            >
              THE COMMON REQUIREMENT
            </span>

            <p
              className="
                mx-auto
                mt-3
                max-w-[760px]
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[23px]
                leading-[1.35]
                tracking-[-0.02em]
                text-[#0B2A52]
                sm:text-[27px]
              "
            >
              Your business needs to communicate clearly enough to be
              understood, trusted and useful.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MORE THAN KEYWORDS
        ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.85,
            ease,
          }}
          className="
            mx-auto
            mt-20
            grid
            max-w-[1120px]
            gap-10
            border-y
            border-[#0B2A52]/13
            py-12
            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* LEFT */}

          <div>
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.20em]
                text-[#C6A77A]
              "
            >
              MORE THAN KEYWORDS
            </span>

            <h3
              className="
                mt-4
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[34px]
                font-normal
                leading-[1.06]
                tracking-[-0.04em]
                text-[#0B2A52]
                sm:text-[41px]
              "
            >
              Understanding comes
              <span className="block text-[#B98755]">
                before optimization.
              </span>
            </h3>

            <div
              className="
                mt-7
                h-[3px]
                w-12
                bg-[#C6A77A]
              "
            />
          </div>

          {/* RIGHT */}

          <div>
            <p
              className="
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[20px]
                leading-8
                tracking-[-0.015em]
                text-[#0B2A52]
                sm:text-[22px]
              "
            >
              That requires more than placing keywords on pages.
            </p>

            <p
              className="
                mt-5
                max-w-[680px]
                text-[14px]
                leading-7
                text-[#0B2A52]/62
                sm:text-[15px]
              "
            >
              It requires understanding how your services connect, how your
              audience searches, what questions they need answered and what
              makes your business genuinely useful.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            STRATEGY COMPOSITION
        ====================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            mt-20
            max-w-[1180px]
          "
        >
          {/* heading */}

          <div
            className="
              flex
              flex-col
              gap-6
              border-b
              border-[#0B2A52]/13
              pb-7
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C6A77A]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-[#A87846]
                  "
                >
                  THE SHARP RAYS APPROACH
                </span>
              </div>

              <h3
                className="
                  mt-4
                  max-w-[720px]
                  [font-family:Georgia,'Times_New_Roman',serif]
                  text-[30px]
                  font-normal
                  leading-[1.12]
                  tracking-[-0.03em]
                  text-[#0B2A52]
                  sm:text-[36px]
                "
              >
                Four disciplines.
                <span className="text-[#B98755]">
                  {" "}One clear strategy.
                </span>
              </h3>
            </div>

            <span
              className="
                max-w-[350px]
                text-[12px]
                leading-6
                text-[#0B2A52]/48
                sm:text-right
              "
            >
              Technical understanding, useful information, search intent and
              experience working together.
            </span>
          </div>

          {/* disciplines */}

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {disciplines.map((item, index) => (
              <Discipline
                key={item.number}
                item={item}
                index={index}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>

          {/* connection line */}

          <div className="relative mt-1">
            <div
              className="
                h-[3px]
                w-full
                bg-[#0B2A52]/[0.07]
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
                duration: reduceMotion ? 0 : 1.1,
                ease,
              }}
              className="
                absolute
                inset-x-0
                top-0
                h-[3px]
                origin-left
                bg-gradient-to-r
                from-[#3976B6]
                via-[#0B2A52]
                to-[#C6A77A]
              "
            />
          </div>

          {/* Sharp Rays statement */}

          <div
            className="
              relative
              overflow-hidden
              bg-gradient-to-r
              from-[#EDF6FD]/75
              via-white
              to-[#FAF0E2]/75
              px-7
              py-9
              sm:px-10
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[240px]
                w-[650px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#3976B6]/[0.035]
                blur-[65px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-center
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2A52]
                  text-white
                  shadow-[0_10px_26px_rgba(11,42,82,0.14)]
                "
              >
                <Sparkles
                  size={17}
                  strokeWidth={1.6}
                />
              </div>

              <p
                className="
                  max-w-[900px]
                  [font-family:Georgia,'Times_New_Roman',serif]
                  text-[18px]
                  leading-8
                  tracking-[-0.015em]
                  text-[#0B2A52]
                  sm:text-[21px]
                "
              >
                At Sharp Rays, we connect technical SEO, content, search
                intent and user experience around one clear strategy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL BRAND STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 26,
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
            duration: 0.95,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-24
            max-w-[1120px]
            overflow-hidden
            border-y
            border-[#0B2A52]/14
            py-16
            text-center
            sm:py-20
          "
        >
          {/* large background word */}

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              whitespace-nowrap
              select-none
              [font-family:Georgia,'Times_New_Roman',serif]
              text-[90px]
              tracking-[-0.07em]
              text-[#0B2A52]/[0.022]
              sm:text-[145px]
              lg:text-[190px]
            "
          >
            REASON
          </span>

          <div className="relative z-10">
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.22em]
                text-[#C6A77A]
              "
            >
              WHY IT MATTERS
            </span>

            <p
              className="
                mt-7
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[18px]
                text-[#0B2A52]/48
                sm:text-[20px]
              "
            >
              Not visibility for visibility&apos;s sake.
            </p>

            <h3
              className="
                mx-auto
                mt-4
                max-w-[900px]
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[39px]
                font-normal
                leading-[1.03]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[50px]
                lg:text-[58px]
              "
            >
              Visibility with a
              <span
                className="
                  block
                  italic
                  text-[#B98755]
                "
              >
                reason behind it.
              </span>
            </h3>

            <div
              className="
                mx-auto
                mt-10
                flex
                max-w-[500px]
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  to-[#3976B6]/35
                "
              />

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#C6A77A]
                "
              />

              <span
                className="
                  h-px
                  flex-1
                  bg-gradient-to-l
                  from-transparent
                  to-[#C6A77A]/45
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   AUDIENCE LANE
============================================================ */

function AudienceLane({
  item,
  index,
  reduceMotion,
}: {
  item: Audience;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
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
        amount: 0.35,
      }}
      transition={{
        duration: 0.58,
        delay: index * 0.07,
        ease,
      }}
      className={`
        group
        relative
        min-h-[245px]
        px-7
        py-9
        sm:px-9

        ${
          index < audiences.length - 1
            ? "md:border-r md:border-[#0B2A52]/10"
            : ""
        }
      `}
    >
      {/* watermark */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-4
          top-0
          [font-family:Georgia,'Times_New_Roman',serif]
          text-[86px]
          leading-none
          text-[#0B2A52]/[0.025]
        "
      >
        {item.number}
      </span>

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#EAF4FC]
          text-[#3976B6]
          transition-all
          duration-300
          group-hover:bg-[#0B2A52]
          group-hover:text-white
        "
      >
        <Icon
          size={17}
          strokeWidth={1.6}
        />
      </div>

      <span
        className="
          mt-6
          block
          text-[9px]
          font-semibold
          tracking-[0.18em]
          text-[#C6A77A]
        "
      >
        {item.label}
      </span>

      <h3
        className="
          mt-3
          max-w-[290px]
          [font-family:Georgia,'Times_New_Roman',serif]
          text-[22px]
          font-normal
          leading-[1.25]
          tracking-[-0.02em]
          text-[#0B2A52]
          sm:text-[24px]
        "
      >
        {item.title}
      </h3>

      <span
        className="
          mt-7
          block
          h-[2px]
          w-8
          bg-[#C6A77A]
          transition-all
          duration-500
          group-hover:w-16
        "
      />
    </motion.article>
  );
}

/* ============================================================
   DISCIPLINE
============================================================ */

function Discipline({
  item,
  index,
  reduceMotion,
}: {
  item: Discipline;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
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
        amount: 0.4,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease,
      }}
      className={`
        group
        relative
        min-h-[170px]
        px-6
        py-8
        sm:px-7

        ${
          index < 3
            ? "lg:border-r lg:border-[#0B2A52]/10"
            : ""
        }

        ${
          index < 2
            ? "md:border-b md:border-[#0B2A52]/10 lg:border-b-0"
            : ""
        }
      `}
    >
      <div className="flex items-center justify-between gap-5">
        <span
          className="
            [font-family:Georgia,'Times_New_Roman',serif]
            text-[34px]
            leading-none
            text-[#DFC8A9]
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
            rounded-full
            bg-[#EAF4FC]
            text-[#3976B6]
            transition-all
            duration-300
            group-hover:bg-[#0B2A52]
            group-hover:text-white
          "
        >
          <Icon
            size={15}
            strokeWidth={1.65}
          />
        </div>
      </div>

      <h4
        className="
          mt-7
          [font-family:Georgia,'Times_New_Roman',serif]
          text-[20px]
          font-normal
          tracking-[-0.02em]
          text-[#0B2A52]
          sm:text-[22px]
        "
      >
        {item.title}
      </h4>

      <span
        className="
          mt-5
          block
          h-[2px]
          w-7
          bg-[#C6A77A]
          transition-all
          duration-500
          group-hover:w-12
        "
      />
    </motion.div>
  );
}