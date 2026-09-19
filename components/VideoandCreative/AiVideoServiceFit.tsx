"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Camera,
  FileText,
  Layers3,
  Lightbulb,
  Monitor,
  Scissors,
  Settings,
  Sparkles,
  Star,
  Users,
  Video,
  Zap,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type FitItem = {
  number: string;
  label: string;
  text: string;
  icon: LucideIcon;
};

const leftItems: FitItem[] = [
  {
    number: "01",
    label: "REGULAR SHORT-FORM VIDEO",
    text: "Needs regular short-form video.",
    icon: Video,
  },
  {
    number: "02",
    label: "EDITING CAPACITY",
    text: "Has footage but not enough editing capacity.",
    icon: Scissors,
  },
  {
    number: "03",
    label: "MORE VARIATIONS",
    text: "Wants more creative variations for paid campaigns.",
    icon: Layers3,
  },
  {
    number: "04",
    label: "HARD TO FILM",
    text: "Needs to visualize products or ideas that are difficult to film.",
    icon: Lightbulb,
  },
  {
    number: "05",
    label: "REPURPOSE CONTENT",
    text: "Wants to repurpose long-form content.",
    icon: FileText,
  },
];

const rightItems: FitItem[] = [
  {
    number: "06",
    label: "FASTER CAMPAIGN PRODUCTION",
    text: "Needs faster campaign production.",
    icon: Zap,
  },
  {
    number: "07",
    label: "INTERNAL EXPERTS",
    text: "Has internal experts who can become content.",
    icon: Users,
  },
  {
    number: "08",
    label: "TEST AI VIDEO",
    text: "Wants to test AI video without sacrificing brand quality.",
    icon: Star,
  },
  {
    number: "09",
    label: "POST-PRODUCTION SUPPORT",
    text: "Needs motion, captions and post-production support.",
    icon: Settings,
  },
  {
    number: "10",
    label: "REPEATABLE WORKFLOW",
    text: "Wants a repeatable video workflow rather than isolated edits.",
    icon: BarChart3,
  },
];

/* =========================================================
   SIGNAL CARD
========================================================= */

function SignalCard({
  item,
  index,
  direction,
  reduceMotion,
}: {
  item: FitItem;
  index: number;
  direction: "left" | "right";
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: direction === "left" ? -24 : 24,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.62,
        delay: reduceMotion ? 0 : Math.min(index * 0.055, 0.2),
        ease,
      }}
      className="
        group
        flex
        items-center
        gap-3
      "
    >
      {/* NUMBER */}

      <span
        style={newYorkFont}
        className="
          w-[56px]
          shrink-0
          text-right
          text-[38px]
          font-light
          leading-none
          tracking-[-0.055em]
          text-[#B88959]
          xl:text-[42px]
        "
      >
        {item.number}
      </span>

      {/* PILL */}

      <div
        className="
          relative
          flex
          min-h-[74px]
          flex-1
          items-center
          rounded-full
          border
          border-[#D8E1E8]
          bg-white/85
          pl-[92px]
          pr-5
          shadow-[0_12px_35px_rgba(11,42,82,0.035)]
          backdrop-blur-sm
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:shadow-[0_18px_40px_rgba(11,42,82,0.07)]
        "
      >
        {/* ICON CIRCLE */}

        <div
          className="
            absolute
            left-[-2px]
            top-1/2
            flex
            h-[74px]
            w-[74px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#D5E1EA]
            bg-[linear-gradient(145deg,#FFFFFF_0%,#EDF5FA_100%)]
            shadow-[0_10px_28px_rgba(11,42,82,0.08)]
          "
        >
          <span
            className="
              absolute
              inset-[7px]
              rounded-full
              border
              border-white
            "
          />

          <Icon
            size={27}
            strokeWidth={1.45}
            className="
              relative
              z-10
              text-[#0B2A52]
            "
          />
        </div>

        {/* COPY */}

        <div>
          <h3
            className="
              text-[9px]
              font-semibold
              uppercase
              leading-[1.35]
              tracking-[0.14em]
              text-[#0B2A52]
              xl:text-[10px]
            "
          >
            {item.label}
          </h3>

          <p
            style={newYorkFont}
            className="
              mt-1.5
              max-w-[250px]
              text-[12px]
              leading-[1.45]
              text-[#36577B]
              xl:text-[13px]
            "
          >
            {item.text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE CARD
========================================================= */

function MobileSignal({
  item,
  index,
  reduceMotion,
}: {
  item: FitItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 20,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.18),
        ease,
      }}
      className="
        grid
        grid-cols-[48px_58px_1fr]
        items-center
        gap-3
        border-b
        border-[#0B2A52]/[0.08]
        py-5
      "
    >
      <span
        style={newYorkFont}
        className="
          text-[27px]
          font-light
          text-[#B88959]
        "
      >
        {item.number}
      </span>

      <div
        className="
          flex
          h-[54px]
          w-[54px]
          items-center
          justify-center
          rounded-full
          border
          border-[#D5E1EA]
          bg-[#EDF5FA]
          text-[#0B2A52]
        "
      >
        <Icon size={21} strokeWidth={1.45} />
      </div>

      <div>
        <h3
          className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-[#0B2A52]
          "
        >
          {item.label}
        </h3>

        <p
          style={newYorkFont}
          className="
            mt-1
            text-[13px]
            leading-[1.5]
            text-[#45627F]
          "
        >
          {item.text}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AiVideoServiceFit() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-service-fit"
      aria-labelledby="ai-video-service-fit-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFCFD_55%,#FFFFFF_100%)]
        pt-24
        sm:pt-28
        lg:pt-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* TOP LEFT ARC */}

        <div
          className="
            absolute
            -left-[280px]
            -top-[340px]
            h-[620px]
            w-[620px]
            rounded-full
            border-[72px]
            border-[#EAF2F8]/80
          "
        />

        <div
          className="
            absolute
            -left-[230px]
            -top-[285px]
            h-[510px]
            w-[510px]
            rounded-full
            border
            border-[#C6A77A]/45
          "
        />

        {/* RIGHT ARC */}

        <div
          className="
            absolute
            -right-[390px]
            top-[22%]
            hidden
            h-[700px]
            w-[700px]
            rounded-full
            border-[75px]
            border-[#F1F5F8]
            xl:block
          "
        />

        <div
          className="
            absolute
            -right-[300px]
            top-[25%]
            hidden
            h-[545px]
            w-[545px]
            rounded-full
            border
            border-[#C6A77A]/35
            xl:block
          "
        />

        {/* SOFT GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[300px]
            h-[500px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#EDF5FA]/65
            blur-[130px]
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
          max-w-[1560px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            SIDE MICRO COPY
        ===================================================== */}

        <div
          className="
            absolute
            left-0
            top-6
            hidden
            xl:block
          "
        >
          <p
            className="
              text-[7px]
              uppercase
              leading-[2]
              tracking-[0.32em]
              text-[#244D78]/65
            "
          >
            SAME
            <br />
            IDEA.
            <br />
            MORE
            <br />
            POSSIBILITIES.
          </p>

          <span className="mt-4 block h-px w-9 bg-[#C6A77A]" />
        </div>

        <div
          className="
            absolute
            right-0
            top-6
            hidden
            xl:block
          "
        >
          <p
            className="
              text-[7px]
              uppercase
              leading-[2]
              tracking-[0.32em]
              text-[#244D78]/65
            "
          >
            IDEAS
            <br />
            VIDEOS
            <br />
            EDITING
            <br />
            REAL IMPACT
          </p>

          <span className="mt-4 block h-px w-9 bg-[#C6A77A]" />
        </div>

        {/* =====================================================
            HEADER
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
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="
            mx-auto
            max-w-[1200px]
            text-center
          "
        >
          {/* EYEBROW */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-5
            "
          >
            <span className="h-px w-16 bg-[#C6A77A]" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.34em]
                text-[#0B2A52]
                sm:text-[9px]
              "
            >
              Is AI Video & Editing Right for You?
            </span>

            <span className="h-px w-16 bg-[#C6A77A]" />
          </div>

          {/* HEADING */}

          <h2
            id="ai-video-service-fit-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[1130px]
              text-[2.1rem]
              font-light
              leading-[0.98]
              tracking-[-0.05em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Useful When You Need More Creative
            <br />

            <span className="text-[#B88959]">
              Without More Production Friction.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[660px]
              text-[15px]
              leading-[1.65]
              text-[#1F4D7B]
              sm:text-[16px]
            "
          >
            This service can be a strong fit if your business:
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP CONSTELLATION
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-4
            hidden
            h-[550px]
            max-w-[1420px]
            xl:block
          "
        >
          {/* CONNECTOR SVG */}

          <svg
            viewBox="0 0 1420 550"
            preserveAspectRatio="none"
            fill="none"
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
            "
            aria-hidden="true"
          >
            {/* LEFT */}

            {[
              "M 470 55 C 520 55, 535 85, 565 145",
              "M 470 150 C 525 150, 535 165, 555 205",
              "M 470 245 C 525 245, 535 245, 552 245",
              "M 470 340 C 525 340, 535 320, 555 285",
              "M 470 435 C 525 435, 535 405, 570 345",
            ].map((d, index) => (
              <motion.path
                key={`left-${index}`}
                d={d}
                stroke="#B88959"
                strokeWidth="1"
                strokeOpacity="0.9"
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
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease,
                }}
              />
            ))}

            {/* RIGHT */}

            {[
              "M 950 55 C 900 55, 885 85, 855 145",
              "M 950 150 C 895 150, 885 165, 865 205",
              "M 950 245 C 895 245, 885 245, 868 245",
              "M 950 340 C 895 340, 885 320, 865 285",
              "M 950 435 C 895 435, 885 405, 850 345",
            ].map((d, index) => (
              <motion.path
                key={`right-${index}`}
                d={d}
                stroke="#B88959"
                strokeWidth="1"
                strokeOpacity="0.9"
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
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease,
                }}
              />
            ))}

            {/* DOTS */}

            {[
              [470, 55],
              [470, 150],
              [470, 245],
              [470, 340],
              [470, 435],
              [950, 55],
              [950, 150],
              [950, 245],
              [950, 340],
              [950, 435],
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="4"
                fill="#A87532"
              />
            ))}
          </svg>

          {/* =================================================
              LEFT ITEMS
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-0
              w-[37%]
              space-y-[18px]
            "
          >
            {leftItems.map((item, index) => (
              <SignalCard
                key={item.number}
                item={item}
                index={index}
                direction="left"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              CENTER
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.94,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              absolute
              left-1/2
              top-[64px]
              flex
              h-[370px]
              w-[370px]
              -translate-x-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#C6A77A]/65
              bg-white/75
              shadow-[0_22px_70px_rgba(11,42,82,0.045)]
              backdrop-blur-sm
            "
          >
            {/* OUTER BLUE FORM */}

            <div
              className="
                absolute
                -left-[22px]
                -top-[22px]
                h-[410px]
                w-[410px]
                rounded-full
                border-[18px]
                border-[#E7F0F7]/60
              "
            />

            <div
              className="
                absolute
                inset-[18px]
                rounded-full
                border
                border-[#D7E5EF]
              "
            />

            {/* CONTENT */}

            <div
              className="
                relative
                z-10
                max-w-[280px]
                text-center
              "
            >
              <span
                className="
                  text-[7px]
                  uppercase
                  leading-[1.9]
                  tracking-[0.3em]
                  text-[#365A7E]
                "
              >
                WHEN CREATIVITY
                <br />
                MEETS POSSIBILITY
              </span>

              <span
                className="
                  mx-auto
                  mt-6
                  block
                  h-px
                  w-9
                  bg-[#C6A77A]
                "
              />

              <h3
                style={newYorkFont}
                className="
                  mt-6
                  text-[2.6rem]
                  font-light
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#0B2A52]
                "
              >
                A Good Fit
                <br />
                If You...
              </h3>

              <span
                className="
                  mx-auto
                  mt-6
                  block
                  h-px
                  w-9
                  bg-[#C6A77A]
                "
              />

              <span
                className="
                  mt-6
                  block
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-[#365A7E]
                "
              >
                AI VIDEO & EDITING
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT ITEMS
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-0
              w-[37%]
              space-y-[18px]
            "
          >
            {rightItems.map((item, index) => (
              <SignalCard
                key={item.number}
                item={item}
                index={index}
                direction="right"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-[820px]
            xl:hidden
          "
        >
          <div
            className="
              mb-8
              rounded-[28px]
              border
              border-[#D5E2EB]
              bg-[linear-gradient(145deg,#F7FAFD_0%,#EDF5FA_100%)]
              px-6
              py-8
              text-center
            "
          >
            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.27em]
                text-[#B88959]
              "
            >
              WHEN CREATIVITY MEETS POSSIBILITY
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-3
                text-[2rem]
                font-light
                leading-[1]
                tracking-[-0.04em]
                text-[#0B2A52]
              "
            >
              A Good Fit If You...
            </h3>
          </div>

          <div>
            {[...leftItems, ...rightItems].map((item, index) => (
              <MobileSignal
                key={item.number}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            DECISION PANEL
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
            mt-6
            max-w-[1450px]
            overflow-hidden
            rounded-[42px]
            border
            border-white
            bg-[linear-gradient(100deg,#F9FCFE_0%,#EAF4FB_100%)]
            px-6
            py-8
            shadow-[0_20px_65px_rgba(11,42,82,0.055)]

            sm:px-8
            lg:grid
            lg:grid-cols-[0.34fr_0.22fr_0.22fr_0.22fr]
            lg:items-center
            lg:px-10
          "
        >
          {/* TITLE */}

          <div
            className="
              pb-7
              lg:border-r
              lg:border-[#C6A77A]/45
              lg:pb-0
              lg:pr-9
            "
          >
            <h3
              style={newYorkFont}
              className="
                max-w-[430px]
                text-[1.8rem]
                font-light
                leading-[1.04]
                tracking-[-0.04em]
                text-[#0B2A52]
                sm:text-[2rem]
              "
            >
              AI is not automatically
              <br />
              the right answer for every shot.
            </h3>

            <span className="mt-5 block h-px w-9 bg-[#C6A77A]" />
          </div>

          {/* EXISTING */}

          <DecisionItem
            icon={Monitor}
            title="Existing Footage"
            text="Sometimes existing footage is stronger."
          />

          {/* TRADITIONAL */}

          <DecisionItem
            icon={Camera}
            title="Traditional Production"
            text="Sometimes traditional production is stronger."
          />

          {/* AI */}

          <DecisionItem
            icon={Sparkles}
            title="AI Generation"
            text="Sometimes generation creates possibilities neither can provide efficiently."
            last
          />
        </motion.div>
      </div>

      {/* =====================================================
          PRINCIPLE FOOTER
      ===================================================== */}

      <motion.div
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
          amount: 0.3,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.85,
          ease,
        }}
        className="
          relative
          mt-3
          overflow-hidden
          bg-[linear-gradient(105deg,#0B2A52_0%,#0D315A_55%,#123F70_100%)]
          px-5
          py-12
          sm:px-8
          lg:py-14
        "
      >
        {/* CIRCLES */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[260px]
            -left-[130px]
            h-[470px]
            w-[470px]
            rounded-full
            border
            border-[#C6A77A]/45
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[310px]
            left-[8%]
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-white/30
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[270px]
            -right-[130px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#C6A77A]/45
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[330px]
            -right-[20px]
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-white/25
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1100px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-5
            "
          >
            <span className="h-px w-16 bg-[#C6A77A]" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.34em]
                text-white/75
              "
            >
              Our Principle
            </span>

            <span className="h-px w-16 bg-[#C6A77A]" />
          </div>

          <h3
            style={newYorkFont}
            className="
              mt-5
              text-[2rem]
              font-light
              leading-[1]
              tracking-[-0.045em]
              text-white
              sm:text-[2.5rem]
              lg:text-[3rem]
            "
          >
            The format should follow the idea.
          </h3>

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-3
            "
          >
            {[
              "STRATEGY",
              "CREATE",
              "EDIT",
              "REPURPOSE",
              "SCALE",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-6"
              >
                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.27em]
                    text-[#C4D9EB]
                  "
                >
                  {item}
                </span>

                {index < 4 && (
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#C6A77A]
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SIDE COPY */}

        <div
          className="
            absolute
            bottom-10
            left-10
            hidden
            xl:block
          "
        >
          <p
            className="
              text-[7px]
              uppercase
              leading-[2]
              tracking-[0.3em]
              text-white/55
            "
          >
            PEOPLE
            <br />
            IDEAS
            <br />
            STORIES
            <br />
            PROGRESS
          </p>

          <span className="mt-4 block h-px w-9 bg-[#C6A77A]" />
        </div>

        <div
          className="
            absolute
            bottom-10
            right-10
            hidden
            text-right
            xl:block
          "
        >
          <p
            className="
              text-[7px]
              uppercase
              leading-[2]
              tracking-[0.3em]
              text-white/55
            "
          >
            BETTER
            <br />
            IDEAS
            <br />
            A BRIGHTER
            <br />
            TOMORROW
          </p>

          <span className="ml-auto mt-4 block h-px w-9 bg-[#C6A77A]" />
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   DECISION ITEM
========================================================= */

function DecisionItem({
  icon: Icon,
  title,
  text,
  last = false,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div
      className={`
        grid
        grid-cols-[58px_1fr]
        gap-4
        py-6

        lg:px-6
        lg:py-0

        ${
          last
            ? ""
            : "border-b border-[#C6A77A]/30 lg:border-b-0 lg:border-r"
        }
      `}
    >
      <div
        className="
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full
          border
          border-[#BED5E7]
          bg-[#EDF5FA]
          text-[#0B2A52]
        "
      >
        <Icon size={23} strokeWidth={1.45} />
      </div>

      <div>
        <h4
          style={newYorkFont}
          className="
            text-[15px]
            font-light
            leading-[1.15]
            text-[#0B2A52]
          "
        >
          {title}
        </h4>

        <p
          style={newYorkFont}
          className="
            mt-2
            text-[12px]
            leading-[1.5]
            text-[#36577B]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}