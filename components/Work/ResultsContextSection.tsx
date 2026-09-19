"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  ArrowDown,
  ShieldCheck,
} from "lucide-react";

const verifiedMetrics = [
  "Organic visibility",
  "Website enquiries",
  "Conversion rate",
  "Cost per lead",
  "Engagement",
  "Watch time",
  "Page performance",
  "Lead quality",
  "Revenue or ROAS where reliable data is available",
];

const demonstratedImprovements = [
  "Clearer structure",
  "Better responsive behaviour",
  "Stronger content hierarchy",
  "Simpler navigation",
  "Improved technical foundations",
  "Better campaign readiness",
  "More consistent branding",
];

export default function ResultsContextSection() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="results-context"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_52%,#FFFFFF_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[260px]
          top-[18%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#D9E9F8]/35
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[260px]
          bottom-[-80px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#B79A72]/[0.07]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-12
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
                  y: 32,
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
          className="mx-auto max-w-[1030px] text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#B79A72]" />

            <p
              className="
                text-[0.68rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#A17A50]
                sm:text-[0.72rem]
              "
            >
              Real Work. Real Context.
            </p>

            <span className="h-px w-9 bg-[#B79A72]" />
          </div>

          <h2
            className="
              mx-auto
              mt-6
              max-w-[1010px]
              font-serif
              font-medium
              leading-[1.05]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            We Won’t Invent a Number to Make a Project{" "}
            <span className="text-[#B79A72]">
              Look Better.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-7
              max-w-[790px]
              space-y-2.5
              text-[0.97rem]
              leading-[1.85]
              text-[#5B687A]
              sm:text-[1.03rem]
            "
          >
            <p>
              As an early-stage agency, some projects will have strong
              measurable results.
            </p>

            <p>
              Others will still be developing.
            </p>

            <p>
              And some projects — especially internal or concept work —
              should not be presented as client performance at all.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            TRANSITION LABEL
        ===================================================== */}

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
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="
            mx-auto
            mt-12
            flex
            max-w-[720px]
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px flex-1 bg-[#0B2A52]/10" />

          <div
            className="
              flex
              items-center
              gap-2.5
              rounded-full
              border
              border-[#0B2A52]/10
              bg-white
              px-4
              py-2.5
            "
          >
            <ShieldCheck
              size={14}
              strokeWidth={1.8}
              className="text-[#B79A72]"
            />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#758195]
              "
            >
              Show what can be verified
            </span>
          </div>

          <span className="h-px flex-1 bg-[#0B2A52]/10" />
        </motion.div>

        {/* =====================================================
            EVIDENCE SYSTEM
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-[1180px]
            overflow-hidden
            rounded-[30px]
            border
            border-[#0B2A52]/10
            bg-white
            shadow-[0_26px_70px_rgba(11,42,82,0.06)]
          "
        >
          <div
            className="
              grid
              lg:grid-cols-2
            "
          >
            {/* =================================================
                LEFT — VERIFIED RESULTS
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -35,
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
                border-b
                border-[#0B2A52]/[0.08]
                p-6
                sm:p-8
                lg:border-b-0
                lg:border-r
                lg:p-10
                xl:p-12
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-[15px]
                    border
                    border-[#AFC9E4]
                    bg-[#EEF6FD]
                    text-[#245D91]
                  "
                >
                  <BarChart3 size={19} strokeWidth={1.7} />
                </div>

                <div>
                  <p
                    className="
                      text-[0.6rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#8A96A6]
                    "
                  >
                    When verified data exists
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-[1.65rem]
                      font-medium
                      tracking-[-0.03em]
                      text-[#0B2A52]
                      sm:text-[1.85rem]
                    "
                  >
                    Show the measurable result.
                  </h3>
                </div>
              </div>

              <p
                className="
                  mt-7
                  max-w-[470px]
                  text-[0.91rem]
                  leading-7
                  text-[#667386]
                "
              >
                When reliable performance data is available, we can show
                metrics such as:
              </p>

              <div
                className="
                  mt-7
                  grid
                  gap-x-6
                  gap-y-0
                  sm:grid-cols-2
                "
              >
                {verifiedMetrics.map((metric, index) => (
                  <motion.div
                    key={metric}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 10,
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
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : index * 0.035,
                    }}
                    className="
                      flex
                      min-h-[51px]
                      items-center
                      gap-3
                      border-b
                      border-[#0B2A52]/[0.07]
                      py-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#EEF6FD]
                        text-[#245D91]
                      "
                    >
                      <CheckCircle2
                        size={13}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span
                      className="
                        text-[0.77rem]
                        font-medium
                        leading-5
                        text-[#415268]
                      "
                    >
                      {metric}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-8 bg-[#245D91]/30" />

                <span
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#7A8797]
                  "
                >
                  Data where data is reliable
                </span>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT — DEMONSTRABLE IMPROVEMENTS
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 35,
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
                delay: reduceMotion ? 0 : 0.08,
                ease,
              }}
              className="
                relative
                bg-[linear-gradient(145deg,#FCF9F4_0%,#FFFFFF_72%)]
                p-6
                sm:p-8
                lg:p-10
                xl:p-12
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-60
                  w-60
                  rounded-full
                  border
                  border-[#B79A72]/12
                "
              />

              <div className="relative flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-[15px]
                    border
                    border-[#D8C19F]
                    bg-[#FBF5EC]
                    text-[#9A754C]
                  "
                >
                  <CheckCircle2 size={19} strokeWidth={1.7} />
                </div>

                <div>
                  <p
                    className="
                      text-[0.6rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#8A96A6]
                    "
                  >
                    When numbers do not exist yet
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-[1.65rem]
                      font-medium
                      tracking-[-0.03em]
                      text-[#0B2A52]
                      sm:text-[1.85rem]
                    "
                  >
                    Show what changed clearly.
                  </h3>
                </div>
              </div>

              <p
                className="
                  relative
                  mt-7
                  max-w-[470px]
                  text-[0.91rem]
                  leading-7
                  text-[#667386]
                "
              >
                When verified performance data is not available yet, we focus
                on what can honestly be demonstrated:
              </p>

              <div className="relative mt-7">
                {demonstratedImprovements.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 10,
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
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : index * 0.04,
                    }}
                    className="
                      flex
                      min-h-[51px]
                      items-center
                      gap-3
                      border-b
                      border-[#0B2A52]/[0.07]
                      py-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F3E7D6]
                        text-[#987249]
                      "
                    >
                      <CheckCircle2
                        size={13}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span
                      className="
                        text-[0.77rem]
                        font-medium
                        leading-5
                        text-[#415268]
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div
                className="
                  relative
                  mt-8
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-8 bg-[#B79A72]/50" />

                <span
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#7A8797]
                  "
                >
                  Evidence without exaggeration
                </span>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              CENTER PRINCIPLE STRIP
          ================================================= */}

          <div
            className="
              border-t
              border-[#0B2A52]/[0.08]
              bg-[#FBFCFD]
              px-6
              py-5
              sm:px-8
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-center
                sm:gap-5
              "
            >
              <span
                className="
                  text-[0.59rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#667488]
                "
              >
                Verified result
              </span>

              <ArrowDown
                size={13}
                className="
                  hidden
                  rotate-[-90deg]
                  text-[#B79A72]
                  sm:block
                "
              />

              <span
                className="
                  text-[0.59rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#667488]
                "
              >
                Honest evidence
              </span>

              <ArrowDown
                size={13}
                className="
                  hidden
                  rotate-[-90deg]
                  text-[#B79A72]
                  sm:block
                "
              />

              <span
                className="
                  text-[0.59rem]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#0B2A52]
                "
              >
                Proper context
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL PRINCIPLE
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[1180px]
            border-t
            border-[#0B2A52]/10
            pt-11
            lg:mt-20
            lg:grid
            lg:grid-cols-[0.25fr_0.75fr]
            lg:gap-10
            lg:pt-14
          "
        >
          <div>
            <p
              className="
                text-[0.62rem]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#A17A50]
              "
            >
              The Principle
            </p>

            <div className="mt-4 h-[2px] w-10 bg-[#B79A72]" />
          </div>

          <div className="mt-7 lg:mt-0">
            <p
              className="
                max-w-[830px]
                font-serif
                text-[2rem]
                font-medium
                leading-[1.24]
                tracking-[-0.035em]
                text-[#0B2A52]
                sm:text-[2.35rem]
                lg:text-[2.65rem]
              "
            >
              Good proof needs{" "}
              <span className="text-[#B79A72]">
                context.
              </span>
            </p>

            <div
              className="
                my-5
                h-px
                max-w-[720px]
                bg-gradient-to-r
                from-[#0B2A52]/10
                to-transparent
              "
            />

            <p
              className="
                font-serif
                text-[1.45rem]
                leading-[1.4]
                tracking-[-0.025em]
                text-[#6B7788]
                sm:text-[1.65rem]
              "
            >
              Not decoration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}