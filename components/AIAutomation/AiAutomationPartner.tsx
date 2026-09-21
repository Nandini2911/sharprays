"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  Search,
  Workflow,
  Zap,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

const processSteps = [
  {
    number: "01",
    label: "UNDERSTAND",
    text: "How the work happens now",
    icon: Search,
  },
  {
    number: "02",
    label: "DECIDE",
    text: "What should happen next",
    icon: GitBranch,
  },
  {
    number: "03",
    label: "AUTOMATE",
    text: "What should move automatically",
    icon: Zap,
  },
];

export default function AiAutomationPartner() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-automation-partner"
      aria-labelledby="ai-automation-partner-heading"
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
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[320px]
          top-[120px]
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#F2F7FB]
          blur-[20px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          bottom-[-180px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#EDF6FB]
          blur-[25px]
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
            MAIN FRAME
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-[#C9DDE8]
            bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FBFD_48%,#EDF6FB_100%)]
            px-6
            py-9
            shadow-[0_24px_65px_rgba(11,42,82,0.06)]

            sm:px-8
            sm:py-11

            lg:px-12
            lg:py-12

            xl:px-14
            xl:py-14
          "
        >
          {/* =================================================
              FRAME DECORATION
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[130px]
              -top-[170px]
              h-[430px]
              w-[430px]
              rounded-full
              border
              border-[#C9DDE8]/70
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[75px]
              -top-[115px]
              h-[320px]
              w-[320px]
              rounded-full
              border
              border-[#D6E5EE]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-180px]
              left-[22%]
              h-[380px]
              w-[520px]
              rounded-full
              bg-white/70
              blur-[70px]
            "
          />

          {/* =================================================
              TOP META
          ================================================= */}

          <motion.div
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
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="
              relative
              z-10
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-12
                bg-[#C6A77A]
              "
            />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-[#B18458]

                sm:text-[10px]
              "
            >
              AI Automation With Sharp Rays
            </span>
          </motion.div>

          {/* =================================================
              CONTENT GRID
          ================================================= */}

          <div
            className="
              relative
              z-10
              mt-9
              grid
              gap-14

              lg:grid-cols-[0.95fr_1.05fr]
              lg:items-center
              lg:gap-16

              xl:grid-cols-[0.9fr_1.1fr]
              xl:gap-20
            "
          >
            {/* =================================================
                LEFT — COPY
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -26,
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
                duration: reduceMotion ? 0 : 0.75,
                ease,
              }}
            >
              <h2
                id="ai-automation-partner-heading"
                style={newYorkFont}
                className="
                  max-w-[690px]
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
                Looking for an{" "}
                <span className="text-[#B18458]">
                  AI Automation Partner?
                </span>
              </h2>

              <div
                className="
                  mt-7
                  max-w-[650px]
                  space-y-4
                "
              >
                <p
                  style={newYorkFont}
                  className="
                    text-[13px]
                    leading-[1.7]
                    text-[#526B84]

                    sm:text-[14px]
                  "
                >
                  Sharp Rays helps businesses identify repetitive workflows,
                  connect systems and build practical AI-powered automation
                  around real operational needs.
                </p>

                <p
                  style={newYorkFont}
                  className="
                    text-[13px]
                    leading-[1.7]
                    text-[#526B84]

                    sm:text-[14px]
                  "
                >
                  Whether you want to automate lead handling, CRM updates,
                  customer support, reporting, documents or internal processes,
                  we start by understanding how the work currently happens.
                </p>
              </div>

              {/* FINAL STATEMENT */}

              <div
                className="
                  mt-7
                  border-l
                  border-[#B18458]
                  pl-5
                "
              >
                <p
                  style={newYorkFont}
                  className="
                    text-[1.45rem]
                    font-light
                    leading-[1.1]
                    tracking-[-0.035em]
                    text-[#0B2A52]

                    sm:text-[1.65rem]
                  "
                >
                  Then we decide what should happen automatically.
                </p>
              </div>

              {/* CTA */}

              <div
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-5
                "
              >
                <Link
                  href="/contact"
                  style={newYorkFont}
                  className="
                    group
                    relative
                    flex
                    h-[54px]
                    items-center
                    gap-5
                    overflow-hidden
                    rounded-full
                    border
                    border-[#5F89B4]/25
                    bg-[linear-gradient(135deg,#0B2A52_0%,#194F82_55%,#5B8EBB_100%)]
                    pl-6
                    pr-2
                    text-[10px]
                    text-white
                    shadow-[0_14px_32px_rgba(11,42,82,0.18)]
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-[0_18px_38px_rgba(11,42,82,0.22)]
                  "
                >
                  <span className="relative z-10">
                    Talk About My Workflow
                  </span>

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-[40px]
                      w-[40px]
                      items-center
                      justify-center
                      rounded-full
                      bg-white/[0.1]
                      transition-all
                      duration-300

                      group-hover:bg-white/[0.16]
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -left-[25%]
                      top-[-100%]
                      h-[200px]
                      w-[120px]
                      rotate-[25deg]
                      bg-white/[0.08]
                      blur-[15px]
                      transition-transform
                      duration-700

                      group-hover:translate-x-[280px]
                    "
                  />
                </Link>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D2E1EA]
                      bg-white/80
                      text-[#0B2A52]
                    "
                  >
                    <Workflow
                      size={15}
                      strokeWidth={1.45}
                    />
                  </span>

                  <span
                    style={newYorkFont}
                    className="
                      text-[6px]
                      uppercase
                      leading-[1.75]
                      tracking-[0.27em]
                      text-[#0B2A52]/45
                    "
                  >
                    REAL WORKFLOWS
                    <br />
                    PRACTICAL AUTOMATION
                  </span>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT — VISUAL
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
                amount: 0.3,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                ease,
              }}
              className="
                relative
                min-h-[460px]

                sm:min-h-[500px]
              "
            >
              {/* OUTER ORBIT */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[420px]
                  w-[420px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#C8DCE8]

                  sm:h-[460px]
                  sm:w-[460px]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[350px]
                  w-[350px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-dashed
                  border-[#B7D0E0]/70

                  sm:h-[390px]
                  sm:w-[390px]
                "
              />

              {/* =================================================
                  CENTER HUB
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
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : 0.15,
                  ease,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  flex
                  h-[225px]
                  w-[225px]
                  -translate-x-1/2
                  -translate-y-1/2
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#BDD5E4]
                  bg-white
                  px-8
                  text-center
                  shadow-[0_22px_55px_rgba(11,42,82,0.09)]

                  sm:h-[245px]
                  sm:w-[245px]
                "
              >
                <div
                  className="
                    flex
                    h-[54px]
                    w-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C9DDE8]
                    bg-[#F1F7FB]
                    text-[#0B2A52]
                  "
                >
                  <Workflow
                    size={22}
                    strokeWidth={1.4}
                  />
                </div>

                <span
                  style={newYorkFont}
                  className="
                    mt-5
                    text-[6px]
                    uppercase
                    tracking-[0.31em]
                    text-[#B18458]
                  "
                >
                  SHARP RAYS
                </span>

                <h3
                  style={newYorkFont}
                  className="
                    mt-3
                    text-[1.65rem]
                    font-light
                    leading-[0.98]
                    tracking-[-0.045em]
                    text-[#0B2A52]
                  "
                >
                  Practical
                  <br />
                  AI Automation
                </h3>

                <span
                  className="
                    mt-5
                    h-px
                    w-10
                    bg-[#C6A77A]
                  "
                />
              </motion.div>

              {/* =================================================
                  PROCESS POINTS
              ================================================= */}

              {processSteps.map((step, index) => {
                const Icon = step.icon;

                const positions = [
                  `
                    left-1/2
                    top-[0px]
                    -translate-x-1/2
                  `,
                  `
                    right-[0px]
                    top-1/2
                    -translate-y-1/2
                  `,
                  `
                    bottom-[0px]
                    left-1/2
                    -translate-x-1/2
                  `,
                ];

                return (
                  <motion.div
                    key={step.number}
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
                      amount: 0.4,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : 0.2 + index * 0.1,
                      ease,
                    }}
                    className={`
                      absolute
                      z-30
                      w-[180px]

                      ${positions[index]}
                    `}
                  >
                    <div
                      className="
                        rounded-[22px]
                        border
                        border-[#C9DDE8]
                        bg-white/90
                        px-4
                        py-4
                        shadow-[0_12px_30px_rgba(11,42,82,0.06)]
                        backdrop-blur-[6px]
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <div
                          className="
                            flex
                            h-[38px]
                            w-[38px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#F0F6FA]
                            text-[#0B2A52]
                          "
                        >
                          <Icon
                            size={16}
                            strokeWidth={1.45}
                          />
                        </div>

                        <div>
                          <span
                            style={newYorkFont}
                            className="
                              block
                              text-[6px]
                              uppercase
                              tracking-[0.27em]
                              text-[#B18458]
                            "
                          >
                            {step.number} · {step.label}
                          </span>

                          <span
                            style={newYorkFont}
                            className="
                              mt-1
                              block
                              text-[9px]
                              leading-[1.35]
                              text-[#536D85]
                            "
                          >
                            {step.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* =================================================
                  FLOW ARROWS
              ================================================= */}

              <ArrowRight
                size={18}
                strokeWidth={1.35}
                className="
                  absolute
                  right-[22%]
                  top-[25%]
                  rotate-[48deg]
                  text-[#B18458]
                "
              />

              <ArrowRight
                size={18}
                strokeWidth={1.35}
                className="
                  absolute
                  bottom-[24%]
                  right-[22%]
                  rotate-[132deg]
                  text-[#B18458]
                "
              />

              <div
                className="
                  absolute
                  bottom-[13%]
                  left-[7%]
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-[6px]
                    w-[6px]
                    rounded-full
                    bg-[#B18458]
                  "
                />

                <span
                  style={newYorkFont}
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.28em]
                    text-[#0B2A52]/45
                  "
                >
                  UNDERSTAND FIRST
                </span>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM LINE
          ================================================= */}

          <motion.div
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
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="
              relative
              z-10
              mt-12
              flex
              items-center
              gap-5
              border-t
              border-[#0B2A52]/[0.08]
              pt-7
            "
          >
            <span
              className="
                h-[6px]
                w-[6px]
                shrink-0
                rounded-full
                bg-[#B18458]
              "
            />

            <span
              style={newYorkFont}
              className="
                text-[6px]
                uppercase
                leading-[1.8]
                tracking-[0.3em]
                text-[#0B2A52]/45
              "
            >
              UNDERSTAND THE WORK · IDENTIFY THE OPPORTUNITY · AUTOMATE THE
              RIGHT PROCESS
            </span>

            <span
              className="
                hidden
                h-px
                flex-1
                bg-[linear-gradient(90deg,#C6A77A,transparent)]

                sm:block
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}