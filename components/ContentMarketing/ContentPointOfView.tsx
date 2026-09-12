"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  FileText,
  GraduationCap,
  Lightbulb,
  UsersRound,
  Send,
  ArrowRight,
} from "lucide-react";

const leftSteps = [
  {
    number: "01",
    title: "ATTRACT",
    description: "Become discoverable around relevant topics.",
    icon: Search,
    tone: "blue",
  },
  {
    number: "02",
    title: "ANSWER",
    description: "Give people useful information when they need it.",
    icon: FileText,
    tone: "gold",
  },
  {
    number: "03",
    title: "EDUCATE",
    description: "Help them understand the problem more clearly.",
    icon: GraduationCap,
    tone: "blue",
  },
];

const rightSteps = [
  {
    number: "04",
    title: "REMEMBER",
    description: "Build recognizable ideas around your brand.",
    icon: Lightbulb,
    tone: "gold",
  },
  {
    number: "05",
    title: "TRUST",
    description: "Demonstrate real knowledge, experience and perspective.",
    icon: UsersRound,
    tone: "blue",
  },
  {
    number: "06",
    title: "ACT",
    description: "Convert useful content into the next meaningful action.",
    icon: Send,
    tone: "gold",
  },
];

export default function ContentUnderstandingSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.72,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="content-understanding"
      aria-labelledby="content-understanding-heading"
      className="
        relative
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

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[46%]
            h-[560px]
            w-[760px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#EEF6FF]/55
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -left-[220px]
            bottom-[5%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#FBF4EC]/50
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-[220px]
            bottom-[5%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#EEF6FF]/55
            blur-[120px]
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
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            TOP CONTENT
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.09,
          }}
          className="
            mx-auto
            max-w-[1120px]
            text-center
          "
        >
          {/* EYEBROW */}

          <motion.div
            variants={fadeUp}
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-12 bg-[#B88758]" />

            <span
              className="
                text-[0.67rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#A56C38]
                sm:text-[0.73rem]
              "
            >
              How We Think About Content
            </span>

            <span className="h-px w-12 bg-[#B88758]" />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="content-understanding-heading"
            variants={fadeUp}
            className="
              mx-auto
              max-w-[1110px]
              font-serif
              text-[2.25rem]
              font-medium
              leading-[1.05]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Good Content Answers a Question.
            <br />

            Great Content Changes{" "}
            <span className="font-normal italic text-[#B88758]">
              What Someone Understands.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[910px]
              text-[0.94rem]
              leading-[1.65]
              text-[#526C89]
              sm:text-[1rem]
            "
          >
            <p>
              A search can introduce someone to your brand. An article can
              answer their question. A guide can help them understand the
              problem. A case study can reduce uncertainty. A point of view can
              make your brand memorable.
            </p>

            <p>
              And the right service page can help them decide what to do next.
            </p>
          </motion.div>

          {/* DIVIDER */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              my-5
              h-px
              w-14
              bg-[#B88758]
            "
          />

          {/* STATEMENT */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              max-w-[760px]
              text-[0.94rem]
              leading-[1.55]
              text-[#526C89]
              sm:text-[1rem]
            "
          >
            <p>
              That is why we do not treat content as an isolated publishing
              exercise.
            </p>

            <p className="font-semibold text-[#0B2A52]">
              We build content around the complete customer journey.
            </p>
          </motion.div>
        </motion.div>

        {/* =====================================================
            DESKTOP JOURNEY
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-12
            hidden
            h-[390px]
            max-w-[1120px]
            lg:block
          "
        >
          {/* =================================================
              DOTTED CONNECTIONS
          ================================================= */}

          <svg
            viewBox="0 0 1120 390"
            fill="none"
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
            "
          >
            {/* LEFT ARC */}

            <path
              d="
                M365 44
                C322 88 325 145 344 195
                C325 250 324 307 365 346
              "
              stroke="#C99C72"
              strokeWidth="1.35"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />

            {/* RIGHT ARC */}

            <path
              d="
                M755 44
                C798 88 795 145 776 195
                C795 250 796 307 755 346
              "
              stroke="#C99C72"
              strokeWidth="1.35"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />

            {/* LEFT DOTS */}

            {([
              [365, 44, "#B88758", "#ECD9C7"],
              [344, 195, "#236391", "#D8EBFA"],
              [365, 346, "#B88758", "#ECD9C7"],
            ] as const).map(([cx, cy, fill, stroke], index) => (
              <g key={`left-dot-${index}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="9"
                  fill="white"
                  stroke={stroke}
                  strokeWidth="2"
                />

                <circle
                  cx={cx}
                  cy={cy}
                  r="3.6"
                  fill={fill}
                />
              </g>
            ))}

            {/* RIGHT DOTS */}

            {([
              [755, 44, "#B88758", "#ECD9C7"],
              [776, 195, "#236391", "#D8EBFA"],
              [755, 346, "#B88758", "#ECD9C7"],
            ] as const).map(([cx, cy, fill, stroke], index) => (
              <g key={`right-dot-${index}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="9"
                  fill="white"
                  stroke={stroke}
                  strokeWidth="2"
                />

                <circle
                  cx={cx}
                  cy={cy}
                  r="3.6"
                  fill={fill}
                />
              </g>
            ))}
          </svg>

          {/* =================================================
              LEFT STEPS
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-0
              flex
              h-full
              w-[365px]
              flex-col
              justify-between
            "
          >
            {leftSteps.map((step, index) => {
              const Icon = step.icon;
              const isGold = step.tone === "gold";

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : -28,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.68,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    items-center
                    justify-end
                    gap-4
                  "
                >
                  {/* TEXT */}

                  <div className="w-[220px]">
                    <div className="flex items-baseline gap-4">
                      <span
                        className="
                          min-w-[30px]
                          font-serif
                          text-[1rem]
                          font-semibold
                          italic
                          text-[#B37740]
                        "
                      >
                        {step.number}
                      </span>

                      <h3
                        className="
                          font-serif
                          text-[1rem]
                          font-semibold
                          uppercase
                          tracking-[0.045em]
                          text-[#0B2A52]
                        "
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p
                      className="
                        ml-[46px]
                        mt-1
                        max-w-[170px]
                        font-serif
                        text-[0.87rem]
                        leading-[1.35]
                        text-[#345472]
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* ICON */}

                  <div
                    className="
                      relative
                      flex
                      h-[72px]
                      w-[72px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-[0_8px_28px_rgba(11,42,82,0.075)]
                    "
                  >
                    <div
                      className={`
                        absolute
                        inset-[8px]
                        rounded-full

                        ${
                          isGold
                            ? "bg-[#F8E7D7]"
                            : "bg-[#DDEEFF]"
                        }
                      `}
                    />

                    <Icon
                      size={30}
                      strokeWidth={1.75}
                      className="
                        relative
                        z-10
                        text-[#0B2A52]
                      "
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* =================================================
              CENTER CIRCLE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.78,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2

              aspect-square
              w-[250px]

              -translate-x-1/2
              -translate-y-1/2
            "
          >
            {/* OUTER BLUE RING */}

            <div
              className="
                absolute
                -inset-[17px]
                aspect-square
                rounded-full
                border
                border-[#A9CCE9]
              "
            />

            {/* WHITE RING */}

            <div
              className="
                absolute
                -inset-[4px]
                aspect-square
                rounded-full
                bg-white
                shadow-[0_20px_60px_rgba(11,42,82,0.14)]
              "
            />

            {/* MAIN CIRCLE */}

            <div
              className="
                absolute
                inset-[8px]
                aspect-square
                rounded-full
                bg-gradient-to-br
                from-[#1F6196]
                via-[#104978]
                to-[#082F55]
              "
            />

            {/* INNER LIGHT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[8px]
                aspect-square
                rounded-full
                bg-[radial-gradient(circle_at_35%_18%,rgba(110,185,235,0.18),transparent_42%)]
              "
            />

            {/* CENTER COPY */}

            <div
              className="
                absolute
                inset-0
                z-10

                flex
                flex-col
                items-center
                justify-center

                text-center
              "
            >
              <span
                className="
                  text-[0.62rem]
                  font-semibold
                  uppercase
                  tracking-[0.29em]
                  text-white/90
                "
              >
                Content Creates
              </span>

              <span
                className="
                  my-4
                  block
                  h-[2px]
                  w-10
                  bg-white
                "
              />

              <span
                className="
                  font-serif
                  text-[1.75rem]
                  font-medium
                  tracking-[-0.02em]
                  text-white
                "
              >
                Understanding
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT STEPS
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-[365px]
              flex-col
              justify-between
            "
          >
            {rightSteps.map((step, index) => {
              const Icon = step.icon;
              const isGold = step.tone === "gold";

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.68,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      relative
                      flex
                      h-[72px]
                      w-[72px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-[0_8px_28px_rgba(11,42,82,0.075)]
                    "
                  >
                    <div
                      className={`
                        absolute
                        inset-[8px]
                        rounded-full

                        ${
                          isGold
                            ? "bg-[#F8E7D7]"
                            : "bg-[#DDEEFF]"
                        }
                      `}
                    />

                    <Icon
                      size={30}
                      strokeWidth={1.75}
                      className="
                        relative
                        z-10
                        text-[#0B2A52]
                      "
                    />
                  </div>

                  {/* TEXT */}

                  <div className="w-[220px]">
                    <div className="flex items-baseline gap-4">
                      <span
                        className="
                          min-w-[30px]
                          font-serif
                          text-[1rem]
                          font-semibold
                          italic
                          text-[#B37740]
                        "
                      >
                        {step.number}
                      </span>

                      <h3
                        className="
                          font-serif
                          text-[1rem]
                          font-semibold
                          uppercase
                          tracking-[0.045em]
                          text-[#0B2A52]
                        "
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p
                      className="
                        ml-[46px]
                        mt-1
                        max-w-[190px]
                        font-serif
                        text-[0.87rem]
                        leading-[1.35]
                        text-[#345472]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE JOURNEY
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            gap-4
            sm:grid-cols-2
            lg:hidden
          "
        >
          {[...leftSteps, ...rightSteps].map((step, index) => {
            const Icon = step.icon;
            const isGold = step.tone === "gold";

            return (
              <motion.article
                key={step.number}
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
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="
                  rounded-[1.3rem]
                  border
                  border-[#DDE8F2]
                  bg-white
                  p-5
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-[0_7px_22px_rgba(11,42,82,0.07)]
                    "
                  >
                    <div
                      className={`
                        absolute
                        inset-[6px]
                        rounded-full

                        ${
                          isGold
                            ? "bg-[#F8E7D7]"
                            : "bg-[#DDEEFF]"
                        }
                      `}
                    />

                    <Icon
                      size={24}
                      strokeWidth={1.75}
                      className="relative z-10 text-[#0B2A52]"
                    />
                  </div>

                  <div>
                    <div className="flex gap-2">
                      <span
                        className="
                          font-serif
                          text-[0.9rem]
                          font-semibold
                          italic
                          text-[#B37740]
                        "
                      >
                        {step.number}
                      </span>

                      <h3
                        className="
                          font-serif
                          text-[0.98rem]
                          font-semibold
                          text-[#0B2A52]
                        "
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p
                      className="
                        mt-1
                        text-[0.85rem]
                        leading-[1.45]
                        text-[#526C89]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM SHIFT / OPPORTUNITY
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
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-10
            max-w-[1110px]
          "
        >
          {/* =================================================
              DESKTOP BOTTOM PANEL
          ================================================= */}

          <div
            className="
              relative
              hidden
              min-h-[230px]
              overflow-visible
              rounded-[1.7rem]
              border
              border-[#DCE6EF]
              shadow-[0_18px_50px_rgba(11,42,82,0.06)]

              lg:block
            "
          >
            {/* FULL BACKGROUND MASK */}

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[1.7rem]
              "
            >
              {/* LEFT HALF */}

              <div
                className="
                  absolute
                  inset-y-0
                  left-0
                  w-1/2

                  bg-gradient-to-br
                  from-[#FFF9F4]
                  via-[#FFFCFA]
                  to-[#FBF5EF]
                "
              />

              {/* RIGHT HALF */}

              <div
                className="
                  absolute
                  inset-y-0
                  right-0
                  w-1/2

                  bg-gradient-to-br
                  from-[#F5FAFF]
                  via-[#F4F9FF]
                  to-[#EAF5FF]
                "
              />
            </div>

            {/* =================================================
                REAL CONTENT GRID

                IMPORTANT:
                separate center column = ASK circle space.
                Text can never go underneath circle.
            ================================================= */}

            <div
              className="
                relative
                z-10
                grid
                min-h-[230px]
                grid-cols-[1fr_170px_1fr]
              "
            >
              {/* LEFT COPY */}

              <div
                className="
                  flex
                  flex-col
                  justify-center

                  py-8
                  pl-12
                  pr-6
                "
              >
                <div className="flex items-center gap-5">
                  <span
                    className="
                      text-[0.64rem]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-[#A86F3B]
                    "
                  >
                    The Shift
                  </span>

                  <span className="h-px w-[72px] bg-[#B88758]" />
                </div>

                <p
                  className="
                    mt-6
                    text-[0.78rem]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-[#0B2A52]
                  "
                >
                  Stop Asking
                </p>

                <h3
                  className="
                    mt-3
                    max-w-[360px]
                    font-serif
                    text-[2.08rem]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-[#0B2A52]
                  "
                >
                  “What should we
                  <br />
                  publish this week?”
                </h3>
              </div>

              {/* CENTER RESERVED SPACE */}

              <div aria-hidden="true" />

              {/* RIGHT COPY */}

              <div
                className="
                  flex
                  flex-col
                  justify-center

                  py-8
                  pl-6
                  pr-12
                "
              >
                <div className="flex items-center gap-5">
                  <span
                    className="
                      text-[0.64rem]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-[#0B2A52]
                    "
                  >
                    The Opportunity
                  </span>

                  <span className="h-px w-[72px] bg-[#B88758]" />
                </div>

                <p
                  className="
                    mt-6
                    text-[0.78rem]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-[#0B2A52]
                  "
                >
                  Start Asking
                </p>

                <h3
                  className="
                    mt-3
                    max-w-[395px]
                    font-serif
                    text-[1.9rem]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-[#0B2A52]
                  "
                >
                  “What does our audience
                  <br />
                  need to{" "}
                  <span className="font-normal italic text-[#B88758]">
                    understand next?
                  </span>
                  ”
                </h3>
              </div>
            </div>

            {/* =================================================
                CENTER ASK CIRCLE

                aspect-square + fixed width = PERFECT CIRCLE
            ================================================= */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.018, 1],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-30

                aspect-square
                w-[142px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full
              "
            >
              {/* OUTER WHITE HALO */}

              <div
                className="
                  absolute
                  -inset-[11px]
                  aspect-square
                  rounded-full
                  bg-white
                  shadow-[0_14px_36px_rgba(11,42,82,0.14)]
                "
              />

              {/* THIN BLUE OUTER RING */}

              <div
                className="
                  absolute
                  -inset-[5px]
                  aspect-square
                  rounded-full
                  border
                  border-[#B8D8EF]
                "
              />

              {/* INNER NAVY CIRCLE */}

              <div
                className="
                  absolute
                  inset-0

                  aspect-square
                  rounded-full

                  bg-gradient-to-br
                  from-[#185585]
                  via-[#0D4374]
                  to-[#082F55]
                "
              />

              {/* ASK CONTENT */}

              <div
                className="
                  absolute
                  inset-0

                  flex
                  flex-col
                  items-center
                  justify-center

                  text-center
                "
              >
                <span
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/85
                  "
                >
                  Instead
                </span>

                <span
                  className="
                    mt-1
                    font-serif
                    text-[1.48rem]
                    leading-none
                    text-white
                  "
                >
                  ASK
                </span>

                <ArrowRight
                  size={23}
                  strokeWidth={1.6}
                  className="mt-2 text-white"
                />
              </div>
            </motion.div>
          </div>

          {/* =================================================
              MOBILE BOTTOM PANEL
          ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-[1.6rem]
              border
              border-[#DCE6EF]

              lg:hidden
            "
          >
            {/* LEFT */}

            <div
              className="
                bg-gradient-to-br
                from-[#FFF9F4]
                via-[#FFFCFA]
                to-[#FBF5EF]

                px-6
                py-8
              "
            >
              <span
                className="
                  text-[0.63rem]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#A86F3B]
                "
              >
                The Shift
              </span>

              <p
                className="
                  mt-5
                  text-[0.76rem]
                  font-semibold
                  uppercase
                  text-[#0B2A52]
                "
              >
                Stop Asking
              </p>

              <h3
                className="
                  mt-2
                  font-serif
                  text-[1.75rem]
                  leading-[1.1]
                  text-[#0B2A52]
                "
              >
                “What should we publish this week?”
              </h3>
            </div>

            {/* MOBILE ASK */}

            <div
              className="
                relative
                z-10
                mx-auto
                -my-7

                flex
                aspect-square
                w-[115px]

                items-center
                justify-center

                rounded-full

                border-[9px]
                border-white

                bg-gradient-to-br
                from-[#185585]
                via-[#0D4374]
                to-[#082F55]

                text-center
                shadow-[0_14px_35px_rgba(11,42,82,0.15)]
              "
            >
              <div>
                <span
                  className="
                    block
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/80
                  "
                >
                  Instead
                </span>

                <span
                  className="
                    mt-1
                    block
                    font-serif
                    text-[1.3rem]
                    text-white
                  "
                >
                  ASK
                </span>

                <ArrowRight
                  size={20}
                  className="mx-auto mt-1 text-white"
                />
              </div>
            </div>

            {/* RIGHT */}

            <div
              className="
                bg-gradient-to-br
                from-[#F5FAFF]
                via-[#F4F9FF]
                to-[#EAF5FF]

                px-6
                pb-8
                pt-14
              "
            >
              <span
                className="
                  text-[0.63rem]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#0B2A52]
                "
              >
                The Opportunity
              </span>

              <p
                className="
                  mt-5
                  text-[0.76rem]
                  font-semibold
                  uppercase
                  text-[#0B2A52]
                "
              >
                Start Asking
              </p>

              <h3
                className="
                  mt-2
                  font-serif
                  text-[1.65rem]
                  leading-[1.1]
                  text-[#0B2A52]
                "
              >
                “What does our audience need to{" "}
                <span className="italic text-[#B88758]">
                  understand next?
                </span>
                ”
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}