"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Database,
  FileText,
  Funnel,
  MessageCircle,
  Route,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type WorkflowItem = {
  title: string;
  icon: LucideIcon;
};

const nodes: WorkflowItem[] = [
  {
    title: "Lead qualification",
    icon: Funnel,
  },
  {
    title: "Customer enquiries",
    icon: MessageCircle,
  },
  {
    title: "Document processing",
    icon: FileText,
  },
  {
    title: "CRM updates",
    icon: Database,
  },
  {
    title: "Task routing",
    icon: Route,
  },
  {
    title: "Reporting",
    icon: BarChart3,
  },
];

/* =========================================================
   NODE
========================================================= */

function OrbitNode({
  item,
  className,
  side,
  index,
  reduceMotion,
}: {
  item: WorkflowItem;
  className: string;
  side: "left" | "right";
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
              x: side === "left" ? -20 : 20,
              scale: 0.97,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : index * 0.06,
        ease,
      }}
      className={`
        absolute
        z-30

        ${className}
      `}
    >
      <div
        className="
          flex
          h-[84px]
          w-[225px]
          items-center
          gap-4
          rounded-full
          border
          border-[#D8E5EF]
          bg-white/95
          px-3.5
          py-3
          shadow-[0_12px_30px_rgba(11,42,82,0.055)]
          backdrop-blur-sm
        "
      >
        <div
          className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#D9E6EF]
            bg-[#F8FBFD]
            text-[#0B2A52]
          "
        >
          <Icon
            size={23}
            strokeWidth={1.45}
          />
        </div>

        <p
          style={newYorkFont}
          className="
            max-w-[125px]
            text-[14px]
            font-light
            leading-[1.25]
            tracking-[-0.02em]
            text-[#0B2A52]
          "
        >
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AiAutomationExplained() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-automation-explained"
      aria-labelledby="ai-automation-explained-heading"
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
          VERY LIGHT BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-[420px]
            -top-[340px]
            h-[760px]
            w-[760px]
            rounded-full
            border-[95px]
            border-[#F1F6F9]
          "
        />

        <div
          className="
            absolute
            -bottom-[400px]
            right-[-210px]
            h-[720px]
            w-[720px]
            rounded-full
            border-[85px]
            border-[#F0F5F8]
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
            TOP META
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            flex
            items-center
            justify-between
            gap-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.33em]
                text-[#0B2A52]
                sm:text-[10px]
              "
            >
              AI Automation Explained
            </span>
          </div>

          <div
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
                tracking-[0.29em]
                text-[#0B2A52]/55
              "
            >
              Sharp Rays
            </span>

            <span className="h-px w-8 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.29em]
                text-[#0B2A52]/40
              "
            >
              AI for a Brighter Tomorrow
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            mt-12
            grid
            gap-16

            xl:grid-cols-[0.42fr_0.58fr]
            xl:items-center
            xl:gap-8
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -28,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
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
              max-w-[610px]
              xl:self-center
            "
          >
            {/* HEADING */}

            <h2
              id="ai-automation-explained-heading"
              style={newYorkFont}
              className="
                text-[2.1rem]
                font-light
                leading-[0.95]
                tracking-[-0.05em]
                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              What Is
              <br />

              <span className="text-[#B88959]">
                AI Automation?
              </span>
            </h2>

            {/* DESCRIPTION */}

            <div
              className="
                mt-8
                max-w-[560px]
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[15px]
                  leading-[1.72]
                  text-[#405E79]
                  sm:text-[16px]
                "
              >
                AI automation uses artificial intelligence and workflow
                technology to complete, support or coordinate repetitive
                business processes with less manual intervention.
              </p>

              <p
                style={newYorkFont}
                className="
                  mt-5
                  text-[15px]
                  leading-[1.72]
                  text-[#405E79]
                  sm:text-[16px]
                "
              >
                Unlike basic automation that follows fixed rules, AI-enabled
                workflows can interpret information, classify requests,
                generate responses, summarize data, route tasks and support
                decisions within defined boundaries.
              </p>
            </div>

            {/* CTA */}

            <motion.a
              href="#what-we-can-automate"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.08,
                ease,
              }}
              className="
                group
                mt-9
                inline-flex
                min-h-[50px]
                items-center
                justify-between
                gap-8
                rounded-full
                border
                border-[#B88959]
                bg-white
                px-6
                py-3
                text-[#0B2A52]
                transition-all
                duration-300

                hover:bg-[#FCF9F5]

                sm:min-w-[330px]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.27em]
                "
              >
                Build a More Efficient Business
              </span>

              <ArrowRight
                size={14}
                strokeWidth={1.4}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>
          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 28,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[850px]
            "
          >
            {/* =================================================
                DESKTOP
            ================================================= */}

            <div
              className="
                relative
                hidden
                h-[585px]
                xl:block
              "
            >
              {/* OUTER ORBIT */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[465px]
                  w-[465px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#9FC9E8]
                "
              />

              {/* INNER ORBIT */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[340px]
                  w-[340px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#E2E9EE]
                "
              />

              {/* CONNECTORS */}

              <svg
                viewBox="0 0 850 585"
                preserveAspectRatio="none"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  h-full
                  w-full
                "
                aria-hidden="true"
              >
                {/* DIAGONALS */}

                <line
                  x1="425"
                  y1="292"
                  x2="250"
                  y2="110"
                  stroke="#C8DCEB"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />

                <line
                  x1="425"
                  y1="292"
                  x2="600"
                  y2="110"
                  stroke="#C8DCEB"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />

                <line
                  x1="425"
                  y1="292"
                  x2="250"
                  y2="475"
                  stroke="#C8DCEB"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />

                <line
                  x1="425"
                  y1="292"
                  x2="600"
                  y2="475"
                  stroke="#C8DCEB"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />

                {/* CENTER AXIS */}

                <line
                  x1="425"
                  y1="120"
                  x2="425"
                  y2="465"
                  stroke="#DCE7EE"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />

                <line
                  x1="260"
                  y1="292"
                  x2="590"
                  y2="292"
                  stroke="#DCE7EE"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />
              </svg>

              {/* GOLD DOTS */}

              {[
                "left-[205px] top-[96px]",
                "right-[205px] top-[96px]",
                "left-[155px] top-1/2 -translate-y-1/2",
                "right-[155px] top-1/2 -translate-y-1/2",
                "bottom-[90px] left-[215px]",
                "bottom-[90px] right-[215px]",
              ].map((position, index) => (
                <span
                  key={index}
                  className={`
                    absolute
                    z-10
                    h-[10px]
                    w-[10px]
                    rounded-full
                    border
                    border-[#B88959]
                    bg-white

                    ${position}
                  `}
                />
              ))}

              {/* =================================================
                  NODES
              ================================================= */}

              <OrbitNode
                item={nodes[0]}
                side="left"
                index={0}
                reduceMotion={reduceMotion}
                className="left-[42px] top-[34px]"
              />

              <OrbitNode
                item={nodes[1]}
                side="right"
                index={1}
                reduceMotion={reduceMotion}
                className="right-[42px] top-[34px]"
              />

              <OrbitNode
                item={nodes[2]}
                side="left"
                index={2}
                reduceMotion={reduceMotion}
                className="left-[-35px] top-1/2 -translate-y-1/2"
              />

              <OrbitNode
                item={nodes[3]}
                side="right"
                index={3}
                reduceMotion={reduceMotion}
                className="right-[-35px] top-1/2 -translate-y-1/2"
              />

              <OrbitNode
                item={nodes[4]}
                side="left"
                index={4}
                reduceMotion={reduceMotion}
                className="bottom-[34px] left-[65px]"
              />

              <OrbitNode
                item={nodes[5]}
                side="right"
                index={5}
                reduceMotion={reduceMotion}
                className="bottom-[34px] right-[65px]"
              />

              {/* =================================================
                  CENTER CORE
              ================================================= */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.9,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  ease,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  flex
                  h-[220px]
                  w-[220px]
                  -translate-x-1/2
                  -translate-y-1/2
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-[radial-gradient(circle_at_center,#FFFFFF_0%,#F2F7FA_64%,#E9F2F8_100%)]
                  shadow-[0_20px_55px_rgba(11,42,82,0.09)]
                "
              >
                <div
                  className="
                    absolute
                    inset-[9px]
                    rounded-full
                    border
                    border-[#DBE7EF]
                  "
                />

                <BrainCircuit
                  size={39}
                  strokeWidth={1.35}
                  className="
                    relative
                    z-10
                    text-[#B88959]
                  "
                />

                <span
                  style={newYorkFont}
                  className="
                    relative
                    z-10
                    mt-5
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    text-[#0B2A52]
                  "
                >
                  AI
                </span>

                <span
                  style={newYorkFont}
                  className="
                    relative
                    z-10
                    mt-2
                    text-[14px]
                    uppercase
                    tracking-[0.27em]
                    text-[#0B2A52]
                  "
                >
                  Automation
                </span>
              </motion.div>

              {/* =================================================
                  FUNCTION LABELS
              ================================================= */}

              <span
                style={newYorkFont}
                className="
                  absolute
                  left-1/2
                  top-[122px]
                  -translate-x-1/2
                  text-[9px]
                  tracking-[0.1em]
                  text-[#0B2A52]/55
                "
              >
                Interpret
              </span>

              <span
                style={newYorkFont}
                className="
                  absolute
                  left-[268px]
                  top-1/2
                  -translate-y-1/2
                  text-[9px]
                  tracking-[0.1em]
                  text-[#0B2A52]/55
                "
              >
                Classify
              </span>

              <span
                style={newYorkFont}
                className="
                  absolute
                  right-[267px]
                  top-1/2
                  -translate-y-1/2
                  text-[9px]
                  tracking-[0.1em]
                  text-[#0B2A52]/55
                "
              >
                Respond
              </span>

              <span
                style={newYorkFont}
                className="
                  absolute
                  bottom-[122px]
                  left-1/2
                  -translate-x-1/2
                  text-[9px]
                  tracking-[0.1em]
                  text-[#0B2A52]/55
                "
              >
                Route
              </span>
            </div>

            {/* =================================================
                MOBILE/TABLET
            ================================================= */}

            <div className="xl:hidden">
              <div
                className="
                  mx-auto
                  flex
                  h-[200px]
                  w-[200px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D9E6EF]
                  bg-[#F4F8FB]
                  shadow-[0_16px_40px_rgba(11,42,82,0.06)]
                "
              >
                <BrainCircuit
                  size={36}
                  strokeWidth={1.35}
                  className="text-[#B88959]"
                />

                <span
                  style={newYorkFont}
                  className="
                    mt-4
                    text-[7px]
                    uppercase
                    tracking-[0.36em]
                    text-[#0B2A52]
                  "
                >
                  AI
                </span>

                <span
                  style={newYorkFont}
                  className="
                    mt-1
                    text-[13px]
                    uppercase
                    tracking-[0.22em]
                    text-[#0B2A52]
                  "
                >
                  Automation
                </span>
              </div>

              <div
                className="
                  mt-10
                  grid
                  gap-4
                  md:grid-cols-2
                "
              >
                {nodes.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 14,
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
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion
                          ? 0
                          : Math.min(index * 0.04, 0.16),
                        ease,
                      }}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-full
                        border
                        border-[#D8E5EF]
                        bg-white
                        px-4
                        py-3
                      "
                    >
                      <div
                        className="
                          flex
                          h-[48px]
                          w-[48px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F4F8FB]
                          text-[#0B2A52]
                        "
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.45}
                        />
                      </div>

                      <p
                        style={newYorkFont}
                        className="
                          text-[14px]
                          font-light
                          text-[#0B2A52]
                        "
                      >
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM PRINCIPLE
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
            mt-14
            grid
            gap-8
            border-t
            border-[#0B2A52]/10
            pt-9

            lg:mt-16
            lg:grid-cols-[0.65fr_0.35fr]
            lg:items-end
          "
        >
          <div className="max-w-[920px]">
            <span className="block h-px w-12 bg-[#C6A77A]" />

            <p
              style={newYorkFont}
              className="
                mt-6
                text-[1.35rem]
                font-light
                leading-[1.2]
                tracking-[-0.03em]
                text-[#0B2A52]
                sm:text-[1.55rem]
              "
            >
              The objective is not to automate everything.
            </p>

            <h3
              style={newYorkFont}
              className="
                mt-2
                text-[2rem]
                font-light
                leading-[1]
                tracking-[-0.05em]
                text-[#B88959]

                sm:text-[2.45rem]
                md:text-[2.7rem]
                lg:text-[2.9rem]
              "
            >
              It is to automate the right work.
            </h3>
          </div>

          <div
            className="
              hidden
              text-right
              lg:block
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                leading-[1.9]
                tracking-[0.3em]
                text-[#0B2A52]/38
              "
            >
              SMARTER PROCESSES
              <br />
              BRIGHTER POSSIBILITIES
            </span>

            <span
              className="
                ml-auto
                mt-4
                block
                h-px
                w-9
                bg-[#C6A77A]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}