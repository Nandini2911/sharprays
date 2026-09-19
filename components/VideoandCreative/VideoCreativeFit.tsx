"use client";

import type { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Captions,
  Clapperboard,
  FileText,
  Film,
  Layers3,
  Lightbulb,
  MonitorSmartphone,
  Palette,
  Scissors,
  Sparkles,
} from "lucide-react";

/* =========================================================
   FONT + MOTION
========================================================= */

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type DeliverableItem = {
  number: string;
  title: string;
  description: string;
  icon: ElementType;
  cardClass: string;
  circleClass: string;
  numberClass: string;
};

/* =========================================================
   LEFT ITEMS — 01 TO 05
========================================================= */

const leftItems: DeliverableItem[] = [
  {
    number: "01",
    title: "Creative Direction",
    description: "Message, concept, tone and visual references.",
    icon: Lightbulb,
    cardClass:
      "border-[#C9DDEE] bg-[linear-gradient(135deg,#F8FBFE_0%,#EDF6FC_100%)]",
    circleClass: "bg-[#E3F0FA] text-[#0B2A52]",
    numberClass: "text-[#0B2A52]",
  },
  {
    number: "02",
    title: "AI Visual Development",
    description:
      "Agreed generated scenes, sequences or supporting visual assets.",
    icon: Sparkles,
    cardClass:
      "border-[#E8D9C5] bg-[linear-gradient(135deg,#FFFCF7_0%,#F8F0E4_100%)]",
    circleClass: "bg-[#F3E8D9] text-[#6D5534]",
    numberClass: "text-[#B88959]",
  },
  {
    number: "03",
    title: "Footage Editing",
    description:
      "Editing of client-provided or agreed source material.",
    icon: Scissors,
    cardClass:
      "border-[#C8DDEE] bg-[linear-gradient(135deg,#F8FBFE_0%,#ECF5FC_100%)]",
    circleClass: "bg-[#DFEDF8] text-[#0B2A52]",
    numberClass: "text-[#0B2A52]",
  },
  {
    number: "04",
    title: "Story & Pacing",
    description:
      "Structure, sequence and timing of the final video.",
    icon: Clapperboard,
    cardClass:
      "border-[#D7E4D4] bg-[linear-gradient(135deg,#FAFCF9_0%,#EFF6EE_100%)]",
    circleClass: "bg-[#E8EFE3] text-[#866334]",
    numberClass: "text-[#B88959]",
  },
  {
    number: "05",
    title: "Motion & Graphics",
    description:
      "Titles, overlays, transitions and agreed animation.",
    icon: Layers3,
    cardClass:
      "border-[#ECD8DB] bg-[linear-gradient(135deg,#FFFAFA_0%,#F9EEEE_100%)]",
    circleClass: "bg-[#F5E6E8] text-[#0B2A52]",
    numberClass: "text-[#0B2A52]",
  },
];

/* =========================================================
   RIGHT ITEMS — 06 TO 10
========================================================= */

const rightItems: DeliverableItem[] = [
  {
    number: "06",
    title: "Captions & Subtitles",
    description:
      "Platform-ready text or subtitle treatment where included.",
    icon: Captions,
    cardClass:
      "border-[#DDD9EB] bg-[linear-gradient(135deg,#FCFBFF_0%,#F2F0FA_100%)]",
    circleClass: "bg-[#EBE8F6] text-[#0B2A52]",
    numberClass: "text-[#0B2A52]",
  },
  {
    number: "07",
    title: "Audio Treatment",
    description:
      "Agreed music, sound design, cleanup or voice treatment.",
    icon: Film,
    cardClass:
      "border-[#D9E5D7] bg-[linear-gradient(135deg,#FBFDFB_0%,#EEF5ED_100%)]",
    circleClass: "bg-[#E7EFE5] text-[#6D5534]",
    numberClass: "text-[#B88959]",
  },
  {
    number: "08",
    title: "Brand Integration",
    description:
      "Logo, typography, colours and other relevant visual cues.",
    icon: Palette,
    cardClass:
      "border-[#EADDC9] bg-[linear-gradient(135deg,#FFFCF8_0%,#F8F0E5_100%)]",
    circleClass: "bg-[#F3E8D8] text-[#5F5547]",
    numberClass: "text-[#0B2A52]",
  },
  {
    number: "09",
    title: "Platform Versions",
    description:
      "Agreed dimensions, durations and channel-specific adaptations.",
    icon: MonitorSmartphone,
    cardClass:
      "border-[#ECD8DB] bg-[linear-gradient(135deg,#FFFAFA_0%,#FAEEEE_100%)]",
    circleClass: "bg-[#F4E5E6] text-[#866334]",
    numberClass: "text-[#B88959]",
  },
  {
    number: "10",
    title: "Review & Delivery",
    description:
      "Defined revision rounds and approved final exports.",
    icon: BadgeCheck,
    cardClass:
      "border-[#C9DDEE] bg-[linear-gradient(135deg,#F8FBFE_0%,#EDF6FC_100%)]",
    circleClass: "bg-[#E1EEF8] text-[#0B2A52]",
    numberClass: "text-[#0B2A52]",
  },
];

const proposalItems = [
  "Concept",
  "Source Assets",
  "AI Scope",
  "Duration",
  "Quantity",
  "Aspect Ratios",
  "Editing",
  "Motion",
  "Audio",
  "Captions",
  "Revisions",
  "Usage",
  "Delivery Formats",
  "Timeline",
  "Commercial Terms",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AiVideoEditingDeliverables() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);

  return (
    <section
      id="ai-video-editing-deliverables"
      aria-labelledby="ai-video-editing-deliverables-heading"
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(180deg,#FFFFFF_0%,#FAFCFD_52%,#FFFFFF_100%)]
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* TOP RIGHT ARC */}

        <div
          className="
            absolute
            -right-[330px]
            -top-[370px]
            hidden
            h-[720px]
            w-[720px]
            rounded-full
            border-[75px]
            border-[#EBF2F7]
            opacity-70
            xl:block
          "
        />

        {/* BOTTOM LEFT BLUE ARC */}

        <div
          className="
            absolute
            -bottom-[370px]
            -left-[270px]
            hidden
            h-[620px]
            w-[620px]
            rounded-full
            border-[75px]
            border-[#DDEBF7]
            opacity-80
            xl:block
          "
        />

        {/* GOLD LINE */}

        <div
          className="
            absolute
            -bottom-[320px]
            -left-[215px]
            hidden
            h-[550px]
            w-[550px]
            rounded-full
            border
            border-[#C6A77A]/30
            xl:block
          "
        />

        {/* LEFT WARM GLOW */}

        <div
          className="
            absolute
            -left-[300px]
            top-[15%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#F4EBDD]/40
            blur-[150px]
          "
        />

        {/* RIGHT BLUE GLOW */}

        <div
          className="
            absolute
            -right-[280px]
            top-[28%]
            h-[580px]
            w-[580px]
            rounded-full
            bg-[#E6F0F7]/45
            blur-[150px]
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
          max-w-[1440px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            TOP META
        ===================================================== */}

        <div
          className="
            mb-12
            flex
            items-center
            justify-between
            lg:mb-14
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-[#B88959]
                sm:text-[9px]
              "
            >
              AI Video & Editing Deliverables
            </span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="
              hidden
              items-center
              gap-4
              lg:flex
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.25em]
                text-[#0B2A52]/50
              "
            >
              What&apos;s Included
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP
        ===================================================== */}

        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-[0.92fr_1.08fr_0.62fr_1.08fr]
            lg:items-stretch
            lg:gap-5
            xl:gap-7
          "
        >
          {/* ===================================================
              LEFT HEADING
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              flex
              min-h-[650px]
              flex-col
              justify-center
              pr-3
            "
          >
            <h2
              id="ai-video-editing-deliverables-heading"
              style={newYorkFont}
              className="
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
              Clear
              <br />
              Scope.
              <br />

              <span className="text-[#C6A77A]">
                Clear
                <br />
                Outputs.
              </span>
            </h2>

            <p
              style={newYorkFont}
              className="
                mt-6
                max-w-[340px]
                text-[15px]
                font-light
                leading-[1.6]
                text-[#0B2A52]/62
              "
            >
              Every project can require a different combination of generated
              and supplied material.
            </p>

            <p
              style={newYorkFont}
              className="
                mt-4
                max-w-[340px]
                text-[15px]
                font-light
                leading-[1.6]
                text-[#0B2A52]/62
              "
            >
              Your proposal defines the exact deliverables before production
              begins.
            </p>

            <p
              style={newYorkFont}
              className="
                mt-4
                max-w-[340px]
                text-[14px]
                font-light
                leading-[1.6]
                text-[#0B2A52]/55
              "
            >
              Depending on scope, your project may include:
            </p>

            <span
              className="
                mt-7
                block
                h-px
                w-10
                bg-[#C6A77A]
              "
            />

            <div className="mt-6">
              {[
                "DIRECTION",
                "AI VISUALS",
                "EDITING",
                "ADAPTATIONS",
                "DELIVERY",
              ].map((item) => (
                <span
                  key={item}
                  style={newYorkFont}
                  className="
                    block
                    text-[7px]
                    uppercase
                    leading-[1.9]
                    tracking-[0.28em]
                    text-[#0B2A52]/46
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            <div
              className="
                mt-auto
                flex
                items-center
                gap-3
                pb-2
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-[#0B2A52]/30
                "
              >
                Scope Creates Clarity
              </span>
            </div>
          </motion.div>

          {/* ===================================================
              ITEMS 01 - 05
          =================================================== */}

          <div className="flex flex-col gap-3">
            {leftItems.map((item, index) => (
              <DeliverableCard
                key={item.number}
                item={item}
                index={index}
                direction="left"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* ===================================================
              CENTER CAPSULE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              relative
              flex
              min-h-[650px]
              items-center
              justify-center
            "
          >
            {/* TOP LINE */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-[90px]
                w-px
                -translate-x-1/2
                bg-[#C6A77A]/55
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-[86px]
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-[#C6A77A]
              "
            />

            {/* OUTER RING */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[530px]
                w-[218px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#C6A77A]/20
              "
            />

            {/* INNER RING */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[497px]
                w-[194px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#0B2A52]/[0.05]
              "
            />

            {/* CAPSULE */}

            <div
              className="
                relative
                z-10
                flex
                h-[455px]
                w-[176px]
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-[#CFDFEB]
                bg-[linear-gradient(180deg,#F7FAFD_0%,#EAF3FA_100%)]
                px-6
                text-center
                shadow-[0_25px_65px_rgba(11,42,82,0.05)]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  leading-[1.8]
                  tracking-[0.27em]
                  text-[#0B2A52]/55
                "
              >
                Clear Scope
                <br />
                Before
                <br />
                Production
              </span>

              <h3
                style={newYorkFont}
                className="
                  mt-7
                  text-[34px]
                  font-light
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                "
              >
                Clear
                <br />
                Outputs
                <br />
                From
                <br />
                Day One
              </h3>

              <span className="mt-7 block h-px w-9 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  mt-6
                  text-[7px]
                  uppercase
                  leading-[1.9]
                  tracking-[0.26em]
                  text-[#0B2A52]/55
                "
              >
                Define
                <br />
                Produce
                <br />
                Deliver
              </span>
            </div>

            {/* BOTTOM DOT */}

            <span
              className="
                absolute
                bottom-[86px]
                left-1/2
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-[#C6A77A]
              "
            />

            {/* BOTTOM LINE */}

            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-[90px]
                w-px
                -translate-x-1/2
                bg-[#C6A77A]/55
              "
            />
          </motion.div>

          {/* ===================================================
              ITEMS 06 - 10
          =================================================== */}

          <div className="flex flex-col gap-3">
            {rightItems.map((item, index) => (
              <DeliverableCard
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
            MOBILE + TABLET
        ===================================================== */}

        <div className="lg:hidden">
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
              duration: reduceMotion ? 0 : 0.8,
              ease,
            }}
            className="
              mx-auto
              max-w-[760px]
              text-center
            "
          >
            <h2
              style={newYorkFont}
              className="
                text-[2.1rem]
                font-light
                leading-[0.98]
                tracking-[-0.05em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
              "
            >
              Clear Scope.{" "}
              <span className="text-[#C6A77A]">
                Clear Outputs.
              </span>
            </h2>

            <p
              style={newYorkFont}
              className="
                mx-auto
                mt-5
                max-w-[600px]
                text-[14px]
                leading-[1.7]
                text-[#0B2A52]/62
              "
            >
              Every project can require a different combination of generated
              and supplied material.
            </p>

            <p
              style={newYorkFont}
              className="
                mx-auto
                mt-3
                max-w-[600px]
                text-[14px]
                leading-[1.7]
                text-[#0B2A52]/62
              "
            >
              Your proposal defines the exact deliverables before production
              begins.
            </p>

            <p
              style={newYorkFont}
              className="
                mx-auto
                mt-3
                max-w-[600px]
                text-[14px]
                leading-[1.7]
                text-[#0B2A52]/62
              "
            >
              Depending on scope, your project may include:
            </p>
          </motion.div>

          {/* MOBILE CENTER BLOCK */}

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
              amount: 0.4,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              mx-auto
              my-10
              max-w-[440px]
              rounded-[28px]
              border
              border-[#CADDEB]
              bg-[linear-gradient(135deg,#F7FBFD_0%,#EAF3FA_100%)]
              px-7
              py-7
              text-center
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.24em]
                text-[#C6A77A]
              "
            >
              AI Video & Editing Deliverables
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-3
                text-[29px]
                font-light
                tracking-[-0.04em]
                text-[#0B2A52]
              "
            >
              Clear Scope. Clear Outputs.
            </h3>
          </motion.div>

          {/* MOBILE ITEMS */}

          <div
            className="
              grid
              gap-3
              md:grid-cols-2
            "
          >
            {[...leftItems, ...rightItems].map((item, index) => (
              <DeliverableCard
                key={item.number}
                item={item}
                index={index}
                direction={index % 2 === 0 ? "left" : "right"}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            PROPOSAL CONFIRMS
        ===================================================== */}

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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative
            mt-12
            overflow-hidden
            rounded-[24px]
            border
            border-[#C6A77A]/55
            bg-[linear-gradient(100deg,#FFFFFF_0%,#FFFCF8_52%,#F8FBFD_100%)]
            px-5
            py-6
            shadow-[0_18px_50px_rgba(11,42,82,0.035)]
            sm:px-7
            lg:mt-14
            lg:px-8
          "
        >
          <div
            className="
              grid
              gap-6
              lg:grid-cols-[90px_1fr_220px]
              lg:items-center
            "
          >
            {/* ICON */}

            <div className="flex justify-center lg:justify-start">
              <div
                className="
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[linear-gradient(145deg,#123D72_0%,#0B2A52_100%)]
                  text-white
                  shadow-[0_14px_35px_rgba(11,42,82,0.18)]
                "
              >
                <FileText
                  size={30}
                  strokeWidth={1.4}
                />
              </div>
            </div>

            {/* MAIN COPY */}

            <div
              className="
                text-center
                lg:border-l
                lg:border-[#C6A77A]/45
                lg:pl-8
                lg:text-left
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-[#B88959]
                "
              >
                Your Proposal Confirms
              </span>

              <h3
                style={newYorkFont}
                className="
                  mt-2
                  text-[22px]
                  font-light
                  leading-[1.2]
                  tracking-[-0.03em]
                  text-[#0B2A52]
                  sm:text-[25px]
                "
              >
                The Exact Scope Before Production Begins.
              </h3>

              <div
                className="
                  mt-4
                  flex
                  max-w-[850px]
                  flex-wrap
                  justify-center
                  gap-y-2
                  lg:justify-start
                "
              >
                {proposalItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center"
                  >
                    <span
                      style={newYorkFont}
                      className="
                        text-[11px]
                        leading-[1.5]
                        text-[#0B2A52]/60
                        sm:text-[12px]
                      "
                    >
                      {item}
                    </span>

                    {index < proposalItems.length - 1 && (
                      <span
                        className="
                          mx-2.5
                          h-1
                          w-1
                          rounded-full
                          bg-[#B88959]
                        "
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT MICROCOPY */}

            <div
              className="
                hidden
                border-l
                border-[#C6A77A]/45
                pl-7
                lg:block
              "
            >
              {[
                "CLEAR SCOPE",
                "CLEAR OUTPUTS",
                "CLEAR DELIVERY",
              ].map((item) => (
                <span
                  key={item}
                  style={newYorkFont}
                  className="
                    block
                    text-[7px]
                    uppercase
                    leading-[1.9]
                    tracking-[0.24em]
                    text-[#0B2A52]/52
                  "
                >
                  {item}
                </span>
              ))}

              <span
                className="
                  mt-4
                  block
                  h-px
                  w-10
                  bg-[#C6A77A]
                "
              />
            </div>
          </div>
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
  direction,
  reduceMotion,
}: {
  item: DeliverableItem;
  index: number;
  direction: "left" | "right";
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion
          ? 0
          : direction === "left"
            ? -22
            : 22,
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
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion
          ? 0
          : Math.min(index * 0.045, 0.16),
        ease,
      }}
      className={`
        group
        relative
        flex
        min-h-[118px]
        flex-1
        items-center
        overflow-hidden
        rounded-[17px]
        border
        px-4
        py-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_40px_rgba(11,42,82,0.06)]

        ${item.cardClass}
      `}
    >
      {/* LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          bg-white/50
          blur-xl
        "
      />

      <div
        className="
          relative
          z-10
          grid
          w-full
          grid-cols-[48px_1px_56px_1fr]
          items-center
          gap-3
          xl:grid-cols-[50px_1px_58px_1fr]
          xl:gap-4
        "
      >
        {/* NUMBER */}

        <span
          style={newYorkFont}
          className={`
            text-[29px]
            font-light
            leading-none
            tracking-[-0.055em]

            ${item.numberClass}
          `}
        >
          {item.number}
        </span>

        {/* DIVIDER */}

        <span className="h-12 w-px bg-[#0B2A52]/10" />

        {/* ICON */}

        <div
          className={`
            flex
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-full
            transition-transform
            duration-300
            group-hover:scale-105
            xl:h-[58px]
            xl:w-[58px]

            ${item.circleClass}
          `}
        >
          <Icon
            size={25}
            strokeWidth={1.5}
          />
        </div>

        {/* CONTENT */}

        <div className="min-w-0">
          <h3
            style={newYorkFont}
            className="
              text-[13px]
              font-medium
              leading-[1.15]
              tracking-[-0.02em]
              text-[#0B2A52]
              xl:text-[14px]
            "
          >
            {item.title}
          </h3>

          <p
            style={newYorkFont}
            className="
              mt-1.5
              text-[10px]
              font-light
              leading-[1.45]
              text-[#0B2A52]/60
              xl:text-[11px]
            "
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}