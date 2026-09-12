"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UsersRound,
  Lightbulb,
  Award,
  ChartNoAxesCombined,
  FilePenLine,
  Target,
} from "lucide-react";

const cards = [
  {
    number: "01",
    title: "AUDIENCE NEEDS",
    description: "What your audience wants to know.",
    keywords: "LISTEN  ·  RESEARCH  ·  UNDERSTAND",
    note: "Real Questions",
    icon: UsersRound,

    cardClass:
      "border-[#BED7F5] bg-gradient-to-br from-[#F7FBFF] via-white to-[#F1F7FF]",

    iconClass:
      "bg-[#E5F0FF] text-[#1266C3] border-[#D4E6FB]",

    numberClass: "text-[#2A76D2]",
    lineClass: "bg-[#76A9E9]",
    pillClass: "bg-[#EAF3FF] text-[#315E91]",
    dotClass: "bg-[#438FE8]",
    noteClass: "text-[#2263A7]",

    position:
      "lg:absolute lg:left-0 lg:top-[22px] lg:w-[335px] xl:w-[360px]",
  },
  {
    number: "02",
    title: "BUSINESS EXPERTISE",
    description: "What your business genuinely knows.",
    keywords: "EXPERIENCE  ·  INSIGHTS  ·  AUTHORITY",
    note: "Your Knowledge",
    icon: Lightbulb,

    cardClass:
      "border-[#E8D6C3] bg-gradient-to-br from-[#FFFCF8] via-white to-[#FAF2E9]",

    iconClass:
      "bg-[#F8E9D8] text-[#A86625] border-[#EFD8BE]",

    numberClass: "text-[#A86625]",
    lineClass: "bg-[#D59A59]",
    pillClass: "bg-[#F8EDE1] text-[#80532F]",
    dotClass: "bg-[#D99850]",
    noteClass: "text-[#A76327]",

    position:
      "lg:absolute lg:right-0 lg:top-[22px] lg:w-[335px] xl:w-[360px]",
  },
  {
    number: "03",
    title: "BRAND AUTHORITY",
    description: "What your brand wants to become known for.",
    keywords: "DIFFERENTIATE  ·  BUILD TRUST  ·  GROW",
    note: "Build Recognition",
    icon: Award,

    cardClass:
      "border-[#C8E3D1] bg-gradient-to-br from-[#F8FCF9] via-white to-[#EEF8F1]",

    iconClass:
      "bg-[#E0F2E5] text-[#17814A] border-[#CDE8D4]",

    numberClass: "text-[#17814A]",
    lineClass: "bg-[#73B18F]",
    pillClass: "bg-[#E6F4E9] text-[#387358]",
    dotClass: "bg-[#28915A]",
    noteClass: "text-[#278255]",

    position:
      "lg:absolute lg:bottom-[22px] lg:left-0 lg:w-[335px] xl:w-[360px]",
  },
  {
    number: "04",
    title: "BUSINESS ACTION",
    description: "What action should happen next.",
    keywords: "ENGAGE  ·  CONVERT  ·  DRIVE RESULTS",
    note: "Turn Insights into Growth",
    icon: ChartNoAxesCombined,

    cardClass:
      "border-[#DCD1F0] bg-gradient-to-br from-[#FCFAFF] via-white to-[#F4F0FC]",

    iconClass:
      "bg-[#ECE4FA] text-[#7136AE] border-[#DFD3F3]",

    numberClass: "text-[#7136AE]",
    lineClass: "bg-[#A57FCB]",
    pillClass: "bg-[#F0E9FA] text-[#604884]",
    dotClass: "bg-[#7A3FB1]",
    noteClass: "text-[#7136AE]",

    position:
      "lg:absolute lg:bottom-[22px] lg:right-0 lg:w-[335px] xl:w-[360px]",
  },
];

export default function ContentMarketingExplained() {
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
        duration: reduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="content-marketing-explained"
      aria-labelledby="content-marketing-explained-heading"
      className="
        relative
        overflow-hidden
        bg-[#FCFDFE]
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -right-[120px]
            -top-[170px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#EDF5FF]
          "
        />

        <div
          className="
            absolute
            right-[4%]
            top-[170px]
            h-14
            w-14
            rounded-full
            bg-[#F8EFE6]
          "
        />

        <div
          className="
            absolute
            -bottom-[320px]
            -left-[180px]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#FAF4ED]
          "
        />

        <div
          className="
            absolute
            -bottom-[330px]
            -right-[200px]
            h-[590px]
            w-[590px]
            rounded-full
            bg-[#F0F6FF]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[47%]
            h-[560px]
            w-[560px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#EAF4FF]/50
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =========================================================
            INTRO
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.1,
          }}
          className="mx-auto max-w-[980px] text-center"
        >
          {/* eyebrow */}

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
            <span className="h-px w-10 bg-[#B9824E]" />

            <span
              className="
                text-[0.68rem]
                font-medium
                uppercase
                tracking-[0.31em]
                text-[#8C7566]
                sm:text-[0.73rem]
              "
            >
              Content Marketing Explained
            </span>

            <span className="h-px w-10 bg-[#B9824E]" />
          </motion.div>

          {/* heading */}

          <motion.h2
            id="content-marketing-explained-heading"
            variants={fadeUp}
            className="
              font-serif
              font-medium
              leading-[1.04]
              tracking-[-0.04em]
              text-[#0B2A52]

              text-[2.3rem]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            What Is Content Marketing?
          </motion.h2>

          {/* copy */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[900px]
              space-y-3
              text-[0.96rem]
              leading-[1.7]
              text-[#385778]
              sm:text-[1.02rem]
            "
          >
            <p>
              Content marketing is the strategic creation and distribution of
              useful, relevant content designed to attract an audience, answer
              their questions, build trust and support business goals.
            </p>

            <p>
              It can include website content, articles, guides, thought
              leadership, case studies, social content, email content and other
              resources created around the needs of your audience.
            </p>
          </motion.div>
        </motion.div>

        {/* =========================================================
            MAIN STRATEGY VISUAL
        ========================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-[1160px]

            grid
            gap-5

            sm:grid-cols-2

            lg:mt-16
            lg:block
            lg:h-[570px]
          "
        >
          {/* =====================================================
              DESKTOP CURVED CONNECTIONS
          ===================================================== */}

          <svg
            viewBox="0 0 1160 570"
            fill="none"
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              hidden
              h-full
              w-full
              lg:block
            "
          >
            {/* BLUE */}

            <motion.path
              d="M 332 137 C 405 145, 430 175, 492 225"
              stroke="#438FE8"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.4,
              }}
            />

            {/* GOLD */}

            <motion.path
              d="M 828 137 C 758 145, 730 175, 668 225"
              stroke="#D99850"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.5,
              }}
            />

            {/* GREEN */}

            <motion.path
              d="M 332 435 C 405 425, 430 395, 492 345"
              stroke="#28915A"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.6,
              }}
            />

            {/* PURPLE */}

            <motion.path
              d="M 828 435 C 758 425, 730 395, 668 345"
              stroke="#7A3FB1"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.7,
              }}
            />

            <circle cx="332" cy="137" r="6" fill="#438FE8" />
            <circle cx="828" cy="137" r="6" fill="#D99850" />
            <circle cx="332" cy="435" r="6" fill="#28915A" />
            <circle cx="828" cy="435" r="6" fill="#7A3FB1" />

            <circle cx="492" cy="225" r="5" fill="#438FE8" />
            <circle cx="668" cy="225" r="5" fill="#D99850" />
            <circle cx="492" cy="345" r="5" fill="#28915A" />
            <circle cx="668" cy="345" r="5" fill="#7A3FB1" />
          </svg>

          {/* =====================================================
              CENTER HUB
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.84,
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
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              order-first
              col-span-full
              mx-auto
              mb-5
              flex
              h-[220px]
              w-[220px]
              items-center
              justify-center

              lg:absolute
              lg:left-1/2
              lg:top-1/2
              lg:z-20
              lg:mb-0
              lg:h-[270px]
              lg:w-[270px]
              lg:-translate-x-1/2
              lg:-translate-y-1/2
            "
          >
            {/* orbit 1 */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -inset-[44px]
                rounded-full
                border
                border-dashed
                border-[#9FC3E8]/70
              "
            />

            {/* orbit 2 */}

            <div
              className="
                absolute
                -inset-[25px]
                rounded-full
                border
                border-dashed
                border-[#A9C9EA]/70
              "
            />

            {/* glow */}

            <div
              className="
                absolute
                -inset-4
                rounded-full
                bg-[#DCEEFF]/70
                blur-xl
              "
            />

            {/* outer white ring */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                border-[8px]
                border-white
                shadow-[0_22px_60px_rgba(11,42,82,0.16)]
              "
            />

            {/* main circle */}

            <div
              className="
                absolute
                inset-[9px]
                overflow-hidden
                rounded-full
                bg-gradient-to-br
                from-[#154F7E]
                via-[#0C416E]
                to-[#082C50]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_35%_20%,rgba(86,166,224,0.28),transparent_38%)]
                "
              />
            </div>

            {/* hub content */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                px-5
                text-center
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                  backdrop-blur
                "
              >
                <FilePenLine
                  size={21}
                  strokeWidth={1.7}
                />
              </div>

              <span
                className="
                  text-[0.58rem]
                  font-medium
                  uppercase
                  tracking-[0.27em]
                  text-[#D5E9F9]
                  lg:text-[0.62rem]
                "
              >
                One Connected
              </span>

              <span
                className="
                  mt-1
                  font-serif
                  text-[1.65rem]
                  leading-[0.96]
                  tracking-[-0.025em]
                  text-white
                  lg:text-[2rem]
                "
              >
                Content
                <br />
                Strategy
              </span>

              <span
                className="
                  my-3
                  block
                  h-px
                  w-10
                  bg-white/70
                "
              />

              <span
                className="
                  text-[0.52rem]
                  font-medium
                  uppercase
                  leading-[1.45]
                  tracking-[0.18em]
                  text-[#D4E6F5]
                "
              >
                From Insights
                <br />
                To Impact
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              FOUR CARDS
          ===================================================== */}

          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  x:
                    reduceMotion
                      ? 0
                      : index % 2 === 0
                        ? -38
                        : 38,
                  y: reduceMotion ? 0 : 18,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : 0.22 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  z-10
                  rounded-[1.6rem]
                  border
                  p-5
                  shadow-[0_16px_45px_rgba(11,42,82,0.06)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_22px_55px_rgba(11,42,82,0.11)]

                  sm:p-6

                  ${item.cardClass}
                  ${item.position}
                `}
              >
                <div className="flex gap-4">
                  {/* icon */}

                  <div
                    className={`
                      flex
                      h-[58px]
                      w-[58px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border

                      ${item.iconClass}
                    `}
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* text */}

                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className={`
                          font-serif
                          text-[0.95rem]

                          ${item.numberClass}
                        `}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`
                          h-px
                          w-7

                          ${item.lineClass}
                        `}
                      />
                    </div>

                    <h3
                      className="
                        font-serif
                        text-[1.04rem]
                        font-semibold
                        tracking-[0.015em]
                        text-[#12345D]
                        sm:text-[1.08rem]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        max-w-[225px]
                        text-[0.92rem]
                        leading-[1.45]
                        text-[#48637E]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* keywords */}

                <div
                  className={`
                    mt-5
                    rounded-full
                    px-4
                    py-2.5
                    text-center
                    text-[0.59rem]
                    font-medium
                    uppercase
                    tracking-[0.12em]

                    ${item.pillClass}
                  `}
                >
                  {item.keywords}
                </div>

                {/* card connection dot desktop */}

                <span
                  className={`
                    absolute
                    top-1/2
                    hidden
                    h-3
                    w-3
                    -translate-y-1/2
                    rounded-full
                    ring-[4px]
                    ring-white

                    lg:block

                    ${
                      index % 2 === 0
                        ? "-right-[7px]"
                        : "-left-[7px]"
                    }

                    ${item.dotClass}
                  `}
                />

                {/* handwritten annotation */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    top-1/2
                    hidden
                    w-[120px]
                    -translate-y-1/2

                    2xl:block

                    ${
                      index % 2 === 0
                        ? "-left-[142px] text-right"
                        : "-right-[142px] text-left"
                    }
                  `}
                >
                  <span
                    className={`
                      inline-block
                      max-w-[105px]
                      -rotate-[7deg]
                      font-serif
                      text-[1rem]
                      italic
                      leading-[1.18]

                      ${item.noteClass}
                    `}
                  >
                    {item.note}
                  </span>

                  <div
                    className={`
                      mt-2
                      h-px
                      w-12
                      opacity-65

                      ${
                        index % 2 === 0
                          ? "ml-auto"
                          : "mr-auto"
                      }

                      ${item.lineClass}
                    `}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-[900px]
            overflow-hidden
            rounded-[1.6rem]
            border
            border-[#BFD6F2]
            bg-gradient-to-r
            from-[#F5FAFF]
            via-white
            to-[#F3F8FF]
            px-5
            py-5
            shadow-[0_18px_50px_rgba(26,76,129,0.07)]

            sm:px-7
            sm:py-6

            lg:mt-14
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-5
              text-center

              sm:flex-row
              sm:text-left
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#E4F0FF]
                text-[#1766B3]
              "
            >
              <Target
                size={27}
                strokeWidth={1.8}
              />
            </div>

            <span
              className="
                hidden
                h-12
                w-px
                bg-[#A9CAE9]
                sm:block
              "
            />

            <p
              className="
                text-[0.95rem]
                leading-[1.65]
                text-[#385778]
                sm:text-[1rem]
              "
            >
              At Sharp Rays, we connect those pieces into{" "}
              <strong className="font-semibold text-[#0B2A52]">
                one content strategy
              </strong>{" "}
              instead of publishing disconnected pieces of content.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}