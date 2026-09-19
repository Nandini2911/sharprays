"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  FileText,
  Headphones,
  Megaphone,
  Settings,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type FunctionItem = {
  number: string;
  title: string;
  icon: LucideIcon;
  items: string[];
};

/* =========================================================
   DATA
========================================================= */

const leftFunctions: FunctionItem[] = [
  {
    number: "01",
    title: "Sales",
    icon: BarChart3,
    items: [
      "Lead qualification.",
      "CRM updates.",
      "Follow-ups.",
      "Meeting preparation.",
      "Pipeline alerts.",
    ],
  },
  {
    number: "02",
    title: "Marketing",
    icon: Megaphone,
    items: [
      "Lead capture.",
      "Campaign workflows.",
      "Content movement.",
      "Reporting.",
      "Audience updates.",
    ],
  },
  {
    number: "03",
    title: "Customer Support",
    icon: Headphones,
    items: [
      "Request classification.",
      "Suggested responses.",
      "Ticket routing.",
      "Knowledge retrieval.",
      "Conversation summaries.",
    ],
  },
];

const rightFunctions: FunctionItem[] = [
  {
    number: "04",
    title: "Operations",
    icon: Settings,
    items: [
      "Task routing.",
      "Approvals.",
      "Recurring workflows.",
      "Document handling.",
      "System notifications.",
    ],
  },
  {
    number: "05",
    title: "Leadership",
    icon: Users,
    items: [
      "Automated summaries.",
      "Performance reports.",
      "Exception alerts.",
      "Decision-support information.",
    ],
  },
  {
    number: "06",
    title: "Internal Teams",
    icon: FileText,
    items: [
      "Knowledge retrieval.",
      "Meeting notes.",
      "Recurring administration.",
      "Workflow coordination.",
      "Documentation support.",
    ],
  },
];

/* =========================================================
   DESKTOP CARD
========================================================= */

function DesktopFunctionCard({
  item,
  side,
  index,
  reduceMotion,
}: {
  item: FunctionItem;
  side: "left" | "right";
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
              x: side === "left" ? -24 : 24,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.06,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,
            }
      }
      className="
        group
        relative
        z-20
        flex
        h-[174px]
        items-center
        gap-5
        overflow-hidden
        rounded-[38px]
        border
        border-[#D5E3ED]
        bg-white
        px-6
        py-5
        shadow-[0_14px_36px_rgba(11,42,82,0.045)]
        transition-all
        duration-300

        hover:border-[#B18458]/35
        hover:shadow-[0_18px_42px_rgba(11,42,82,0.065)]
      "
    >
      {/* SOFT CIRCLE */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[78px]
          top-1/2
          h-[210px]
          w-[210px]
          -translate-y-1/2
          rounded-full
          bg-[#F0F6FA]
        "
      />

      {/* ICON */}

      <div
        className="
          relative
          z-10
          flex
          h-[76px]
          w-[76px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#D4E3ED]
          bg-white/85
          text-[#0B2A52]
          shadow-[0_10px_24px_rgba(11,42,82,0.05)]
        "
      >
        <Icon
          size={30}
          strokeWidth={1.45}
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <span
            style={newYorkFont}
            className="
              text-[10px]
              text-[#B18458]
            "
          >
            {item.number}
          </span>

          <span className="h-px w-8 bg-[#C6A77A]" />
        </div>

        <h3
          style={newYorkFont}
          className="
            mt-1.5
            whitespace-nowrap
            text-[1.2rem]
            font-light
            uppercase
            leading-none
            tracking-[-0.035em]
            text-[#0B2A52]
          "
        >
          {item.title}
        </h3>

        <ul className="mt-3 space-y-[2px]">
          {item.items.map((text) => (
            <li
              key={text}
              className="
                flex
                items-start
                gap-2
              "
            >
              <span
                className="
                  mt-[6px]
                  h-[4px]
                  w-[4px]
                  shrink-0
                  rounded-full
                  bg-[#557493]
                "
              />

              <span
                style={newYorkFont}
                className="
                  text-[9.5px]
                  leading-[1.3]
                  text-[#536D85]
                "
              >
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ARROW */}

      <div
        className="
          relative
          z-10
          flex
          h-[40px]
          w-[40px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#CCDDE8]
          bg-white
          text-[#0B2A52]
          transition-transform
          duration-300

          group-hover:translate-x-1
        "
      >
        <ArrowRight
          size={16}
          strokeWidth={1.45}
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE CARD
========================================================= */

function MobileFunctionCard({
  item,
  index,
  reduceMotion,
}: {
  item: FunctionItem;
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
              y: 18,
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
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.16),
        ease,
      }}
      className="
        rounded-[26px]
        border
        border-[#D5E3ED]
        bg-white
        p-5
        shadow-[0_10px_28px_rgba(11,42,82,0.035)]
      "
    >
      <div className="flex gap-4">
        <div
          className="
            flex
            h-[50px]
            w-[50px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#D6E4ED]
            bg-[#F3F8FB]
            text-[#0B2A52]
          "
        >
          <Icon
            size={20}
            strokeWidth={1.45}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span
              style={newYorkFont}
              className="text-[10px] text-[#B18458]"
            >
              {item.number}
            </span>

            <span className="h-px w-7 bg-[#C6A77A]" />
          </div>

          <h3
            style={newYorkFont}
            className="
              mt-2
              text-[1.25rem]
              font-light
              uppercase
              tracking-[-0.03em]
              text-[#0B2A52]
            "
          >
            {item.title}
          </h3>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {item.items.map((text) => (
              <div
                key={text}
                className="flex items-start gap-2"
              >
                <span
                  className="
                    mt-[6px]
                    h-[4px]
                    w-[4px]
                    shrink-0
                    rounded-full
                    bg-[#B18458]
                  "
                />

                <span
                  style={newYorkFont}
                  className="
                    text-[11px]
                    leading-[1.4]
                    text-[#506B84]
                  "
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AutomationByBusinessFunction() {
  const reduceMotion = Boolean(useReducedMotion());

  const allFunctions = [...leftFunctions, ...rightFunctions];

  return (
    <section
      id="automation-by-business-function"
      aria-labelledby="automation-business-function-heading"
      className="
        relative
        scroll-mt-[110px]
        overflow-hidden
        bg-white

        pt-28
        pb-24

        sm:pt-32
        sm:pb-28

        lg:pt-36
        lg:pb-32

        xl:pt-40
        xl:pb-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[210px]
          -top-[250px]
          h-[470px]
          w-[470px]
          rounded-full
          border
          border-[#E0EAF1]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[210px]
          -top-[250px]
          h-[470px]
          w-[470px]
          rounded-full
          border
          border-[#E0EAF1]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
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
            amount: 0.45,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            max-w-[1080px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-12 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.34em]
                text-[#B18458]

                sm:text-[10px]
              "
            >
              Where Automation Can Help
            </span>

            <span className="h-px w-12 bg-[#C6A77A]" />
          </div>

          <h2
            id="automation-business-function-heading"
            style={newYorkFont}
            className="
              mt-6

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
            Different Teams.{" "}
            <span className="text-[#B18458]">
              Different Bottlenecks.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[700px]
              text-[15px]
              leading-[1.6]
              text-[#4E6982]

              sm:text-[16px]
            "
          >
            Instead of starting with technology, start with where time is being
            lost.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            hidden
            max-w-[1380px]

            xl:block
          "
        >
          <div
            className="
              relative
              grid
              min-h-[566px]
              grid-cols-[1fr_350px_1fr]
              gap-[26px]
            "
          >
            {/* ===============================================
                CONNECTOR BACKGROUND
            =============================================== */}

            <svg
              viewBox="0 0 1380 566"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-[1]
                h-full
                w-full
              "
            >
              <defs>
                <linearGradient
                  id="automationConnectorBlue"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#0B2A52"
                  />
                  <stop
                    offset="100%"
                    stopColor="#7799B4"
                  />
                </linearGradient>

                <linearGradient
                  id="automationConnectorGold"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#B18458"
                  />
                  <stop
                    offset="100%"
                    stopColor="#0B2A52"
                  />
                </linearGradient>
              </defs>

              {/* LEFT */}

              <motion.path
                d="M445 87 C505 87 515 150 548 192"
                fill="none"
                stroke="url(#automationConnectorBlue)"
                strokeWidth="1.35"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  ease,
                }}
              />

              <motion.path
                d="M445 283 C505 283 520 283 548 283"
                fill="none"
                stroke="url(#automationConnectorBlue)"
                strokeWidth="1.35"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.07,
                  ease,
                }}
              />

              <motion.path
                d="M445 479 C505 479 515 416 548 374"
                fill="none"
                stroke="url(#automationConnectorGold)"
                strokeWidth="1.35"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.14,
                  ease,
                }}
              />

              {/* RIGHT */}

              <motion.path
                d="M832 192 C865 150 875 87 935 87"
                fill="none"
                stroke="url(#automationConnectorBlue)"
                strokeWidth="1.35"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  ease,
                }}
              />

              <motion.path
                d="M832 283 C860 283 875 283 935 283"
                fill="none"
                stroke="url(#automationConnectorBlue)"
                strokeWidth="1.35"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.07,
                  ease,
                }}
              />

              <motion.path
                d="M832 374 C865 416 875 479 935 479"
                fill="none"
                stroke="url(#automationConnectorGold)"
                strokeWidth="1.35"
                strokeLinecap="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.14,
                  ease,
                }}
              />

              {/* OUTER DOTS */}

              {[
                [445, 87],
                [445, 283],
                [445, 479],
                [935, 87],
                [935, 283],
                [935, 479],
              ].map(([cx, cy], index) => (
                <circle
                  key={`outer-${index}`}
                  cx={cx}
                  cy={cy}
                  r="4.7"
                  fill="#0B2A52"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              ))}

              {/* INNER DOTS */}

              {[
                [548, 192],
                [548, 283],
                [548, 374],
                [832, 192],
                [832, 283],
                [832, 374],
              ].map(([cx, cy], index) => (
                <circle
                  key={`inner-${index}`}
                  cx={cx}
                  cy={cy}
                  r="4.7"
                  fill={
                    index === 2 || index === 5
                      ? "#B18458"
                      : "#345B7A"
                  }
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              ))}
            </svg>

            {/* ===============================================
                LEFT
            =============================================== */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                justify-between
                gap-5
              "
            >
              {leftFunctions.map((item, index) => (
                <DesktopFunctionCard
                  key={item.number}
                  item={item}
                  side="left"
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* ===============================================
                CENTER
            =============================================== */}

            <div
              className="
                relative
                z-10
                flex
                min-h-[566px]
                items-center
                justify-center
              "
            >
              {/* ORBIT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[520px]
                  w-[520px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#D9E5ED]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[430px]
                  w-[430px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#E5EDF2]
                "
              />

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
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  ease,
                }}
                className="
                  relative
                  h-[390px]
                  w-[350px]
                "
              >
                {/* BOTTOM */}

                <div
                  className="
                    absolute
                    bottom-[8px]
                    left-1/2
                    flex
                    h-[150px]
                    w-[300px]
                    -translate-x-1/2
                    items-end
                    justify-center
                    rounded-[50%]
                    border
                    border-[#CADBE7]
                    bg-[#F2F7FA]
                    pb-[27px]
                    shadow-[0_20px_34px_rgba(11,42,82,0.09)]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      -rotate-[3deg]
                    "
                  >
                    <Zap
                      size={15}
                      strokeWidth={1.55}
                      className="text-[#0B2A52]"
                    />

                    <span
                      style={newYorkFont}
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.28em]
                        text-[#0B2A52]
                      "
                    >
                      SMARTER OPERATIONS
                    </span>
                  </div>
                </div>

                {/* MIDDLE */}

                <div
                  className="
                    absolute
                    bottom-[80px]
                    left-1/2
                    flex
                    h-[155px]
                    w-[316px]
                    -translate-x-1/2
                    items-end
                    justify-center
                    rounded-[50%]
                    border
                    border-[#C6DAE7]
                    bg-white
                    pb-[28px]
                    shadow-[0_17px_30px_rgba(11,42,82,0.08)]
                  "
                >
                  <div className="flex items-center gap-3">
                    <Users
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#0B2A52]"
                    />

                    <span
                      style={newYorkFont}
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.29em]
                        text-[#0B2A52]
                      "
                    >
                      PEOPLE FOCUS
                    </span>
                  </div>
                </div>

                {/* MAIN DISC */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-[22px]
                    flex
                    h-[240px]
                    w-[330px]
                    -translate-x-1/2
                    flex-col
                    items-center
                    justify-center
                    rounded-[50%]
                    border
                    border-[#C3D8E5]
                    bg-white
                    text-center
                    shadow-[0_22px_42px_rgba(11,42,82,0.11)]
                  "
                >
                  <div
                    className="
                      flex
                      h-[38px]
                      w-[38px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F2F7FB]
                      text-[#0B2A52]
                    "
                  >
                    <Sparkles
                      size={16}
                      strokeWidth={1.45}
                    />
                  </div>

                  <span
                    style={newYorkFont}
                    className="
                      mt-3
                      text-[6px]
                      uppercase
                      tracking-[0.34em]
                      text-[#0B2A52]/60
                    "
                  >
                    AI AUTOMATION
                  </span>

                  <span
                    className="
                      mt-3
                      h-px
                      w-9
                      bg-[#0B2A52]
                    "
                  />

                  <h3
                    style={newYorkFont}
                    className="
                      mt-3
                      text-[1.75rem]
                      font-light
                      leading-[0.98]
                      tracking-[-0.05em]
                      text-[#0B2A52]
                    "
                  >
                    Turn
                    <br />
                    Repetitive Work
                    <br />

                    <span className="text-[#B18458]">
                      Into Real Progress.
                    </span>
                  </h3>

                  <span
                    className="
                      mt-3
                      h-px
                      w-9
                      bg-[#B18458]
                    "
                  />
                </div>
              </motion.div>
            </div>

            {/* ===============================================
                RIGHT
            =============================================== */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                justify-between
                gap-5
              "
            >
              {rightFunctions.map((item, index) => (
                <DesktopFunctionCard
                  key={item.number}
                  item={item}
                  side="right"
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            TABLET / MOBILE
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-[900px]
            xl:hidden
          "
        >
          {/* CENTRAL INTRO */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="
              mx-auto
              mb-9
              max-w-[520px]
              rounded-[34px]
              border
              border-[#D2E1EB]
              bg-[#F3F8FB]
              px-7
              py-8
              text-center
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.32em]
                text-[#B18458]
              "
            >
              AI AUTOMATION
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-4
                text-[1.75rem]
                font-light
                leading-[1.02]
                tracking-[-0.04em]
                text-[#0B2A52]
              "
            >
              Turn Repetitive Work{" "}
              <span className="text-[#B18458]">
                Into Real Progress.
              </span>
            </h3>
          </motion.div>

          <div
            className="
              grid
              gap-4
              md:grid-cols-2
            "
          >
            {allFunctions.map((item, index) => (
              <MobileFunctionCard
                key={item.number}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            QUESTION BAND
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
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
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[1380px]
            rounded-[34px]
            border
            border-[#CBDCE8]
            bg-white
            px-6
            py-7
            shadow-[0_15px_36px_rgba(11,42,82,0.045)]

            sm:px-8

            lg:grid
            lg:grid-cols-[0.42fr_0.29fr_0.29fr]
            lg:items-center
            lg:gap-9
            lg:px-10
          "
        >
          {/* QUESTION */}

          <div
            className="
              border-l
              border-[#B18458]
              pl-6
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.32em]
                text-[#B18458]
              "
            >
              THE QUESTION
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-3
                max-w-[520px]
                text-[1.55rem]
                font-light
                leading-[1.04]
                tracking-[-0.04em]
                text-[#0B2A52]

                sm:text-[1.8rem]
              "
            >
              Where Does Your Team
              <br />
              Repeat the Same Process{" "}

              <span className="text-[#B18458]">
                Every Day?
              </span>
            </h3>
          </div>

          {/* COPY */}

          <div
            className="
              mt-7

              lg:mt-0
              lg:border-l
              lg:border-[#0B2A52]/10
              lg:pl-9
            "
          >
            <p
              style={newYorkFont}
              className="
                max-w-[390px]
                text-[11px]
                leading-[1.6]
                text-[#526B84]
              "
            >
              Identify the repetitive work, remove the manual effort and give
              your team more time for what actually moves the business forward.
            </p>
          </div>

          {/* CTA */}

          <div className="mt-7 lg:mt-0">
            <button
              type="button"
              className="
                group
                flex
                h-[54px]
                w-full
                items-center
                justify-between
                gap-4
                rounded-full
                bg-[#0B2A52]
                pl-6
                pr-2
                text-white
                shadow-[0_12px_28px_rgba(11,42,82,0.15)]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[11px]
                  font-light
                "
              >
                Explore Automation for Your Team
              </span>

              <span
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.09]
                "
              >
                <ArrowRight
                  size={17}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}