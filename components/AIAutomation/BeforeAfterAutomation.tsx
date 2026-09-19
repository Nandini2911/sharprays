"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Clock3,
  Database,
  FileText,
  List,
  Mail,
  Plus,
  Search,
  Send,
  Tag,
  UserRound,
  UsersRound,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type Step = {
  text: string;
  icon: LucideIcon;
};

const beforeSteps: Step[] = [
  {
    text: "Lead arrives.",
    icon: Mail,
  },
  {
    text: "Someone opens the email.",
    icon: UserRound,
  },
  {
    text: "Copies information.",
    icon: FileText,
  },
  {
    text: "Checks the CRM.",
    icon: Search,
  },
  {
    text: "Creates a contact.",
    icon: Plus,
  },
  {
    text: "Reads the enquiry.",
    icon: List,
  },
  {
    text: "Decides who should handle it.",
    icon: UsersRound,
  },
  {
    text: "Forwards the message.",
    icon: Send,
  },
  {
    text: "Creates a reminder.",
    icon: CalendarDays,
  },
  {
    text: "Waits for somebody to respond.",
    icon: Clock3,
  },
];

const afterSteps: Step[] = [
  {
    text: "Lead arrives.",
    icon: Mail,
  },
  {
    text: "Information captured",
    icon: FileText,
  },
  {
    text: "Request classified",
    icon: Tag,
  },
  {
    text: "CRM updated",
    icon: Database,
  },
  {
    text: "Owner assigned",
    icon: UserRound,
  },
  {
    text: "Appropriate acknowledgement sent",
    icon: Send,
  },
  {
    text: "Follow-up task created",
    icon: CalendarDays,
  },
  {
    text: "Human notified when action is required",
    icon: Bell,
  },
];

/* =========================================================
   BEFORE ROW
========================================================= */

function BeforeRow({
  item,
  index,
  reduceMotion,
}: {
  item: Step;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: -14,
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
        duration: reduceMotion ? 0 : 0.48,
        delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.2),
        ease,
      }}
      className="
        flex
        h-[39px]
        items-center
        gap-3
        rounded-[12px]
        bg-[#F4F5F6]
        px-4
      "
    >
      <div
        className="
          flex
          h-[24px]
          w-[24px]
          shrink-0
          items-center
          justify-center
          text-[#506A82]
        "
      >
        <Icon size={15} strokeWidth={1.45} />
      </div>

      <span
        style={newYorkFont}
        className="
          text-[10px]
          leading-none
          text-[#506A82]
        "
      >
        {item.text}
      </span>
    </motion.div>
  );
}

/* =========================================================
   AFTER ROW
========================================================= */

function AfterRow({
  item,
  index,
  reduceMotion,
}: {
  item: Step;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 14,
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
        duration: reduceMotion ? 0 : 0.48,
        delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.2),
        ease,
      }}
      className="
        relative
        z-10
        flex
        h-[44px]
        items-center
        gap-4
        rounded-[12px]
        border
        border-white
        bg-white
        px-4
        shadow-[0_5px_14px_rgba(11,42,82,0.035)]
      "
    >
      <div
        className="
          flex
          h-[25px]
          w-[25px]
          shrink-0
          items-center
          justify-center
          text-[#0B2A52]
        "
      >
        <Icon size={16} strokeWidth={1.45} />
      </div>

      <span
        style={newYorkFont}
        className="
          text-[10px]
          leading-[1.25]
          text-[#0B2A52]
        "
      >
        {item.text}
      </span>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function BeforeAfterAutomation() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="before-after-automation"
      aria-labelledby="before-after-automation-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-300px]
          top-[240px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#F7F8F9]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-300px]
          top-[230px]
          h-[680px]
          w-[680px]
          rounded-full
          bg-[#F2F8FC]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1520px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
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
                  y: 18,
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
            <span className="h-px w-10 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-[#0B2A52]/75
                sm:text-[10px]
              "
            >
              The Workflow Shift
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
          </div>

          <h2
            id="before-after-automation-heading"
            style={newYorkFont}
            className="
              mt-7
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
            Same Business. Less Manual Friction.
          </h2>

          <p
            style={newYorkFont}
            className="
              mt-4
              text-[8px]
              uppercase
              tracking-[0.38em]
              text-[#0B2A52]/45
              sm:text-[9px]
            "
          >
            Turn Enquiries Into Progress — Automatically.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP / LARGE SCREEN
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-12
            hidden
            max-w-[1420px]

            xl:grid
            xl:grid-cols-[350px_minmax(0,1fr)_365px]
            xl:items-stretch
            xl:gap-0
          "
        >
          {/* =================================================
              BEFORE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -24,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              ease,
            }}
            className="
              relative
              z-30
              h-[610px]
              rounded-[22px]
              border
              border-[#E1E6E9]
              bg-white/95
              p-5
              shadow-[0_13px_32px_rgba(11,42,82,0.035)]
            "
          >
            {/* HEADING */}

            <div
              className="
                border-l
                border-[#B18458]
                pl-5
              "
            >
              <h3
                style={newYorkFont}
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-[#0B2A52]
                "
              >
                Before
              </h3>

              <p
                style={newYorkFont}
                className="
                  mt-1.5
                  text-[8px]
                  tracking-[0.13em]
                  text-[#74869A]
                "
              >
                A slower, manual process
              </p>
            </div>

            {/* ROWS */}

            <div
              className="
                mt-6
                space-y-[8px]
              "
            >
              {beforeSteps.map((item, index) => (
                <BeforeRow
                  key={item.text}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* FOOTER */}

            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                flex
                items-center
                justify-between
                border-t
                border-[#0B2A52]/[0.07]
                pt-4
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5px]
                  uppercase
                  tracking-[0.2em]
                  text-[#718397]
                "
              >
                More Handoffs
              </span>

              <span className="h-3 w-px bg-[#CCD6DD]" />

              <span
                style={newYorkFont}
                className="
                  text-[5px]
                  uppercase
                  tracking-[0.2em]
                  text-[#718397]
                "
              >
                More Delays
              </span>

              <span className="h-3 w-px bg-[#CCD6DD]" />

              <span
                style={newYorkFont}
                className="
                  text-[5px]
                  uppercase
                  tracking-[0.2em]
                  text-[#718397]
                "
              >
                More Risk
              </span>
            </div>
          </motion.div>

          {/* =================================================
              CENTER FLOW
          ================================================= */}

          <div
            className="
              relative
              z-10
              h-[610px]
              min-w-0
            "
          >
            {/* LEFT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-[65px]
                h-[480px]
                w-[48%]
                rounded-r-[50%]
                bg-[linear-gradient(90deg,rgba(241,243,245,0.95),rgba(255,255,255,0))]
              "
            />

            {/* RIGHT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-[65px]
                h-[480px]
                w-[48%]
                rounded-l-[50%]
                bg-[linear-gradient(270deg,rgba(232,246,255,0.95),rgba(255,255,255,0))]
              "
            />

            {/* =================================================
                FLOW SVG
            ================================================= */}

            <svg
              viewBox="0 0 700 610"
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
                  id="manualFlow"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#D7DEE4" />
                  <stop offset="100%" stopColor="#98A7B4" />
                </linearGradient>

                <linearGradient
                  id="autoFlow"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#9CC8EB" />
                  <stop offset="100%" stopColor="#4B93D2" />
                </linearGradient>
              </defs>

              {/* LEFT — 10 MANUAL LINES */}

              {[
                "M0 78 C160 78 220 218 350 305",
                "M0 112 C165 112 225 225 350 305",
                "M0 150 C170 150 235 238 350 305",
                "M0 195 C180 195 245 250 350 305",
                "M0 246 C190 246 255 270 350 305",
                "M0 305 C190 305 260 305 350 305",
                "M0 360 C185 360 250 335 350 305",
                "M0 415 C175 415 240 355 350 305",
                "M0 470 C165 470 225 375 350 305",
                "M0 525 C155 525 215 392 350 305",
              ].map((path, index) => (
                <motion.path
                  key={`manual-${index}`}
                  d={path}
                  fill="none"
                  stroke="url(#manualFlow)"
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  initial={{
                    pathLength: reduceMotion ? 1 : 0,
                    opacity: reduceMotion ? 1 : 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 1,
                    delay: reduceMotion ? 0 : index * 0.025,
                    ease,
                  }}
                />
              ))}

              {/* RIGHT — AUTOMATED LINES */}

              {[
                "M350 305 C485 218 540 78 700 78",
                "M350 305 C480 228 540 145 700 145",
                "M350 305 C475 245 545 212 700 212",
                "M350 305 C470 270 545 275 700 275",
                "M350 305 C470 325 545 340 700 340",
                "M350 305 C475 355 545 405 700 405",
                "M350 305 C480 375 540 470 700 470",
                "M350 305 C485 392 540 530 700 530",
              ].map((path, index) => (
                <motion.path
                  key={`automation-${index}`}
                  d={path}
                  fill="none"
                  stroke="url(#autoFlow)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  initial={{
                    pathLength: reduceMotion ? 1 : 0,
                    opacity: reduceMotion ? 1 : 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 1,
                    delay: reduceMotion
                      ? 0
                      : 0.12 + index * 0.03,
                    ease,
                  }}
                />
              ))}

              {/* LEFT GREY DOTS */}

              {[
                [84, 112],
                [112, 215],
                [145, 246],
                [165, 305],
                [142, 370],
                [100, 470],
              ].map(([cx, cy], index) => (
                <circle
                  key={`manual-dot-${index}`}
                  cx={cx}
                  cy={cy}
                  r="4.5"
                  fill="#9CA9B5"
                />
              ))}

              {/* RIGHT BLUE DOTS */}

              {[
                [535, 142],
                [505, 215],
                [542, 273],
                [575, 305],
                [520, 370],
                [540, 440],
              ].map(([cx, cy], index) => (
                <circle
                  key={`auto-dot-${index}`}
                  cx={cx}
                  cy={cy}
                  r="4.5"
                  fill="#4C94D2"
                />
              ))}
            </svg>

            {/* =================================================
                LEFT LABELS
            ================================================= */}

            <div
              className="
                absolute
                left-[18px]
                top-[125px]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5.5px]
                  uppercase
                  leading-[1.7]
                  tracking-[0.32em]
                  text-[#718397]
                "
              >
                Manual
                <br />
                Steps
              </span>
            </div>

            <div
              className="
                absolute
                left-[18px]
                top-[225px]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5.5px]
                  uppercase
                  leading-[1.7]
                  tracking-[0.32em]
                  text-[#718397]
                "
              >
                Information
                <br />
                Handoffs
              </span>
            </div>

            <div
              className="
                absolute
                left-[18px]
                top-[332px]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5.5px]
                  uppercase
                  tracking-[0.32em]
                  text-[#718397]
                "
              >
                Lost Time
              </span>
            </div>

            <div
              className="
                absolute
                left-[18px]
                top-[440px]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5.5px]
                  uppercase
                  leading-[1.7]
                  tracking-[0.32em]
                  text-[#718397]
                "
              >
                Unsure
                <br />
                Ownership
              </span>
            </div>

            {/* =================================================
                RIGHT LABELS
            ================================================= */}

            <div
              className="
                absolute
                right-[18px]
                top-[125px]
                text-right
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5.5px]
                  uppercase
                  leading-[1.7]
                  tracking-[0.32em]
                  text-[#164F89]
                "
              >
                Automated
                <br />
                Flow
              </span>
            </div>

            <div
              className="
                absolute
                right-[18px]
                top-[225px]
                text-right
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5.5px]
                  uppercase
                  leading-[1.7]
                  tracking-[0.32em]
                  text-[#164F89]
                "
              >
                Clear
                <br />
                Ownership
              </span>
            </div>

            <div
              className="
                absolute
                right-[18px]
                top-[332px]
                text-right
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5.5px]
                  uppercase
                  leading-[1.7]
                  tracking-[0.32em]
                  text-[#164F89]
                "
              >
                Faster
                <br />
                Responses
              </span>
            </div>

            <div
              className="
                absolute
                right-[18px]
                top-[435px]
                text-right
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5.5px]
                  uppercase
                  leading-[1.7]
                  tracking-[0.32em]
                  text-[#164F89]
                "
              >
                A More
                <br />
                Consistent
                <br />
                Experience
              </span>
            </div>

            {/* =================================================
                CENTRAL TOP TEXT
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-[108px]
                z-20
                -translate-x-1/2
                text-center
              "
            >
              <p
                style={newYorkFont}
                className="
                  whitespace-nowrap
                  text-[1.45rem]
                  font-light
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-[#0B2A52]
                "
              >
                Less manual
                <br />
                friction.
              </p>

              <span
                className="
                  mx-auto
                  mt-4
                  block
                  h-px
                  w-8
                  bg-[#C6A77A]
                "
              />
            </div>

            {/* =================================================
                GOLD TRANSFORMATION NODE
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.72,
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
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-30
                flex
                h-[98px]
                w-[98px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#D3A558]
                bg-[linear-gradient(145deg,#E4B85C,#B98132)]
                text-white
                shadow-[0_0_0_9px_rgba(198,167,122,0.12),0_0_0_18px_rgba(198,167,122,0.05),0_16px_32px_rgba(177,132,88,0.17)]
              "
            >
              <span
                className="
                  absolute
                  inset-[7px]
                  rounded-full
                  border
                  border-white/40
                "
              />

              <ArrowRight
                size={32}
                strokeWidth={1.15}
              />
            </motion.div>

            {/* =================================================
                CENTRAL BOTTOM TEXT
            ================================================= */}

            <div
              className="
                absolute
                bottom-[102px]
                left-1/2
                z-20
                -translate-x-1/2
                text-center
              "
            >
              <p
                style={newYorkFont}
                className="
                  whitespace-nowrap
                  text-[1.45rem]
                  font-light
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-[#0B2A52]
                "
              >
                More useful
                <br />
                movement.
              </p>
            </div>
          </div>

          {/* =================================================
              AFTER
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 24,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              ease,
            }}
            className="
              relative
              z-30
              h-[610px]
              overflow-hidden
              rounded-[22px]
              border
              border-[#C9E0EF]
              bg-[#F0F8FD]
              p-5
              shadow-[0_13px_32px_rgba(58,132,183,0.055)]
            "
          >
            {/* HEADING */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-[24px]
                  w-[24px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E2D0A9]
                  bg-white
                  text-[#B18458]
                "
              >
                <ArrowRight size={11} strokeWidth={1.5} />
              </div>

              <div>
                <h3
                  style={newYorkFont}
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-[#0B2A52]
                  "
                >
                  After
                </h3>

                <p
                  style={newYorkFont}
                  className="
                    mt-1.5
                    text-[8px]
                    tracking-[0.13em]
                    text-[#4D7396]
                  "
                >
                  An automated, connected process
                </p>
              </div>
            </div>

            {/* FLOW LIST */}

            <div
              className="
                relative
                mt-6
                space-y-[13px]
              "
            >
              <motion.div
                initial={{
                  scaleY: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  ease,
                }}
                className="
                  absolute
                  bottom-[20px]
                  left-[28px]
                  top-[20px]
                  z-0
                  w-px
                  origin-top
                  border-l
                  border-dashed
                  border-[#4C96CF]
                "
              />

              {afterSteps.map((item, index) => (
                <AfterRow
                  key={item.text}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* FOOTER */}

            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                flex
                items-center
                justify-between
                border-t
                border-[#5996C4]/15
                pt-4
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[5px]
                  uppercase
                  tracking-[0.18em]
                  text-[#145993]
                "
              >
                Fewer Steps
              </span>

              <span className="h-3 w-px bg-[#8FB7D2]" />

              <span
                style={newYorkFont}
                className="
                  text-[5px]
                  uppercase
                  tracking-[0.18em]
                  text-[#145993]
                "
              >
                Faster Progress
              </span>

              <span className="h-3 w-px bg-[#8FB7D2]" />

              <span
                style={newYorkFont}
                className="
                  text-[5px]
                  uppercase
                  tracking-[0.18em]
                  text-[#145993]
                "
              >
                A Stronger Business
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-14
            max-w-[850px]
            xl:hidden
          "
        >
          {/* BEFORE */}

          <div
            className="
              rounded-[28px]
              border
              border-[#E0E6EA]
              bg-white
              p-5
              sm:p-6
            "
          >
            <div
              className="
                border-l
                border-[#B18458]
                pl-4
              "
            >
              <h3
                style={newYorkFont}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.32em]
                  text-[#0B2A52]
                "
              >
                Before
              </h3>

              <p
                style={newYorkFont}
                className="
                  mt-1
                  text-[8px]
                  text-[#718397]
                "
              >
                A slower, manual process
              </p>
            </div>

            <div
              className="
                mt-5
                grid
                gap-2
                sm:grid-cols-2
              "
            >
              {beforeSteps.map((item, index) => (
                <BeforeRow
                  key={item.text}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>

          {/* TRANSFORM */}

          <div
            className="
              my-8
              flex
              flex-col
              items-center
            "
          >
            <span className="h-8 w-px bg-[#CDDCE5]" />

            <div
              className="
                flex
                h-[70px]
                w-[70px]
                items-center
                justify-center
                rounded-full
                border
                border-[#D4A75B]
                bg-[linear-gradient(145deg,#E4B85C,#B98132)]
                text-white
                shadow-[0_10px_26px_rgba(177,132,88,0.15)]
              "
            >
              <ArrowRight
                size={24}
                strokeWidth={1.25}
              />
            </div>

            <span className="h-8 w-px bg-[#B9D8EB]" />
          </div>

          {/* AFTER */}

          <div
            className="
              rounded-[28px]
              border
              border-[#C8E0F0]
              bg-[#F1F8FD]
              p-5
              sm:p-6
            "
          >
            <h3
              style={newYorkFont}
              className="
                text-[8px]
                uppercase
                tracking-[0.32em]
                text-[#0B2A52]
              "
            >
              After
            </h3>

            <p
              style={newYorkFont}
              className="
                mt-1
                text-[8px]
                text-[#4D7396]
              "
            >
              An automated, connected process
            </p>

            <div
              className="
                relative
                mt-5
                space-y-3
              "
            >
              <span
                className="
                  absolute
                  bottom-[18px]
                  left-[24px]
                  top-[18px]
                  w-px
                  border-l
                  border-dashed
                  border-[#4C96CF]
                "
              />

              {afterSteps.map((item, index) => (
                <AfterRow
                  key={item.text}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            THE DIFFERENCE
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
            relative
            mx-auto
            mt-9
            max-w-[1420px]
            overflow-hidden
            rounded-[26px]
            border
            border-[#C8DDEB]
            bg-white
            px-6
            py-8
            shadow-[0_14px_34px_rgba(11,42,82,0.035)]

            sm:px-9

            lg:min-h-[180px]
            lg:px-12
            lg:py-8
          "
        >
          {/* LEFT MICRO COPY */}

          <div
            className="
              absolute
              left-8
              top-1/2
              hidden
              -translate-y-1/2
              lg:block
            "
          >
            <span className="block h-px w-6 bg-[#C6A77A]" />

            <p
              style={newYorkFont}
              className="
                mt-5
                text-[5.5px]
                uppercase
                leading-[1.8]
                tracking-[0.3em]
                text-[#47627D]
              "
            >
              SAME
              <br />
              BUSINESS.
              <br />
              BRIGHTER
              <br />
              POSSIBILITIES.
            </p>
          </div>

          {/* CENTER */}

          <div
            className="
              mx-auto
              max-w-[1000px]
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
              <span className="h-px w-8 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.34em]
                  text-[#0B2A52]/65
                "
              >
                The Difference
              </span>

              <span className="h-px w-8 bg-[#C6A77A]" />
            </div>

            <h3
              style={newYorkFont}
              className="
                mt-5
                text-[1.8rem]
                font-light
                leading-[1.02]
                tracking-[-0.045em]
                text-[#0B2A52]

                sm:text-[2rem]
                lg:text-[2.3rem]
              "
            >
              People Stay in Control.
            </h3>

            <h3
              style={newYorkFont}
              className="
                mx-auto
                mt-2
                max-w-[1050px]
                text-[1.55rem]
                font-light
                leading-[1.05]
                tracking-[-0.045em]
                text-[#0B2A52]

                sm:text-[1.8rem]
                lg:text-[2rem]
              "
            >
              The Process Stops Waiting for Them to Move Every Step.
            </h3>
          </div>

          {/* RIGHT MICRO COPY */}

          <div
            className="
              absolute
              right-8
              top-1/2
              hidden
              -translate-y-1/2
              text-right
              lg:block
            "
          >
            <span
              className="
                ml-auto
                block
                h-px
                w-6
                bg-[#C6A77A]
              "
            />

            <p
              style={newYorkFont}
              className="
                mt-5
                text-[5.5px]
                uppercase
                leading-[1.8]
                tracking-[0.3em]
                text-[#47627D]
              "
            >
              AUTOMATION
              <br />
              THAT WORKS
              <br />
              AROUND PEOPLE
              <br />
              NOT THE OTHER WAY
              <br />
              AROUND.
            </p>

            <span
              className="
                ml-auto
                mt-4
                block
                h-px
                w-6
                bg-[#C6A77A]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}