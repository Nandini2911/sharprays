"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Check,
  CirclePause,
  Database,
  MessageSquareCheck,
  ShieldCheck,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type ControlPoint = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const controlPoints: ControlPoint[] = [
  {
    number: "01",
    title: "Review Before Sending",
    description:
      "A person approves generated customer communication.",
    icon: MessageSquareCheck,
  },
  {
    number: "02",
    title: "Review Before Updating",
    description:
      "Sensitive records require confirmation before changes are made.",
    icon: Database,
  },
  {
    number: "03",
    title: "Escalate Low Confidence",
    description:
      "Unclear requests move to a person rather than forcing an automated answer.",
    icon: AlertTriangle,
  },
  {
    number: "04",
    title: "Approve High-Value Actions",
    description:
      "Financial, contractual or commercially sensitive decisions remain controlled.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Handle Exceptions",
    description:
      "Automation follows the standard path. People handle the unusual situations.",
    icon: UserRoundCheck,
  },
];

/* =========================================================
   CONTROL ROW
========================================================= */

function ControlRow({
  item,
  index,
  reduceMotion,
}: {
  item: ControlPoint;
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
              x: 28,
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
        duration: reduceMotion ? 0 : 0.62,
        delay: reduceMotion ? 0 : index * 0.055,
        ease,
      }}
      className="
        group
        relative
        grid
        grid-cols-[62px_1fr_auto]
        items-center
        gap-5
        border-b
        border-[#0B2A52]/10
        py-6
      "
    >
      {/* NUMBER / ICON */}

      <div
        className="
          relative
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-[18px]
          border
          border-[#C9DDE9]
          bg-[linear-gradient(145deg,#FFFFFF,#EDF6FB)]
          text-[#0B2A52]
          shadow-[0_8px_22px_rgba(11,42,82,0.05)]
          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:border-[#B18458]/40
        "
      >
        <Icon
          size={21}
          strokeWidth={1.45}
        />

       
      </div>

      {/* COPY */}

      <div className="min-w-0">
        <h3
          style={newYorkFont}
          className="
            text-[1.32rem]
            font-light
            leading-[1.04]
            tracking-[-0.035em]
            text-[#0B2A52]

            lg:text-[1.4rem]
          "
        >
          {item.title}
        </h3>

        <p
          style={newYorkFont}
          className="
            mt-2
            max-w-[580px]
            text-[11px]
            leading-[1.65]
            text-[#536D85]
          "
        >
          {item.description}
        </p>
      </div>

      {/* STATUS */}

      <div
        className="
          hidden
          items-center
          gap-2
          rounded-full
          border
          border-[#D2E1EA]
          bg-[#F7FAFC]
          px-3
          py-2

          md:flex
        "
      >
        <CirclePause
          size={12}
          strokeWidth={1.6}
          className="text-[#B18458]"
        />

        <span
          style={newYorkFont}
          className="
            whitespace-nowrap
            text-[6px]
            uppercase
            tracking-[0.26em]
            text-[#0B2A52]/55
          "
        >
          Human Check
        </span>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function HumanInTheLoopAutomation() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="human-in-the-loop-automation"
      aria-labelledby="human-loop-heading"
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
          -left-[300px]
          top-[380px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#EEF6FB]
          blur-[15px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[320px]
          top-[220px]
          h-[720px]
          w-[720px]
          rounded-full
          bg-[#F6F9FB]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1540px]
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
                tracking-[0.36em]
                text-[#B18458]
                sm:text-[10px]
              "
            >
              Control Matters
            </span>

            <span className="h-px w-12 bg-[#C6A77A]" />
          </div>

          <h2
            id="human-loop-heading"
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
            Automation Should Know{" "}
            <span className="text-[#B18458]">
              When to Stop.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-6
              max-w-[790px]
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[13px]
                leading-[1.65]
                text-[#536D85]
                sm:text-[14px]
              "
            >
              Some workflows can operate automatically from beginning to end.
              Others should pause before an important action.
            </p>

            <p
              style={newYorkFont}
              className="
                mt-2
                text-[13px]
                leading-[1.65]
                text-[#0B2A52]
                sm:text-[14px]
              "
            >
              That is why we design human checkpoints where appropriate.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN CONSOLE
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            grid
            max-w-[1380px]
            gap-8

            xl:grid-cols-[0.8fr_1.2fr]
            xl:gap-12
          "
        >
          {/* =================================================
              LEFT — OVERSIGHT CONSOLE
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
              duration: reduceMotion ? 0 : 0.75,
              ease,
            }}
            className="
              relative
              overflow-hidden
              rounded-[38px]
              border
              border-[#C8DCE8]
              bg-[linear-gradient(155deg,#FFFFFF_0%,#F3F8FB_48%,#E8F3F9_100%)]
              px-7
              py-8
              shadow-[0_22px_60px_rgba(11,42,82,0.065)]

              sm:px-9
              sm:py-10
              xl:min-h-[690px]
            "
          >
            {/* soft lighting */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[110px]
                -top-[100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-white
                blur-[60px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[150px]
                -left-[100px]
                h-[350px]
                w-[350px]
                rounded-full
                bg-[#CDE3F0]/50
                blur-[70px]
              "
            />

            {/* console heading */}

            <div
              className="
                relative
                z-10
                flex
                items-start
                justify-between
                gap-6
                border-b
                border-[#0B2A52]/10
                pb-6
              "
            >
              <div>
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.32em]
                    text-[#B18458]
                  "
                >
                  Human Oversight Console
                </span>

                <h3
                  style={newYorkFont}
                  className="
                    mt-3
                    text-[1.9rem]
                    font-light
                    leading-[1]
                    tracking-[-0.045em]
                    text-[#0B2A52]
                  "
                >
                  Automation Moves.
                  <br />
                  People Decide.
                </h3>
              </div>

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
                  border-[#C6DAE6]
                  bg-white
                  text-[#0B2A52]
                  shadow-[0_8px_22px_rgba(11,42,82,0.05)]
                "
              >
                <Workflow
                  size={19}
                  strokeWidth={1.45}
                />
              </div>
            </div>

            {/* =================================================
                FLOW
            ================================================= */}

            <div
              className="
                relative
                z-10
                mx-auto
                mt-9
                max-w-[360px]
              "
            >
              {/* STEP 1 */}

              <div
                className="
                  rounded-[22px]
                  border
                  border-[#D0E1EB]
                  bg-white/85
                  px-5
                  py-4
                  shadow-[0_8px_22px_rgba(11,42,82,0.04)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-5
                  "
                >
                  <div>
                    <span
                      style={newYorkFont}
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.29em]
                        text-[#B18458]
                      "
                    >
                      01 · AUTOMATE
                    </span>

                    <p
                      style={newYorkFont}
                      className="
                        mt-2
                        text-[1.1rem]
                        text-[#0B2A52]
                      "
                    >
                      Standard workflow runs.
                    </p>
                  </div>

                  <Workflow
                    size={19}
                    strokeWidth={1.4}
                    className="text-[#0B2A52]"
                  />
                </div>
              </div>

              <ArrowDown
                size={18}
                strokeWidth={1.4}
                className="
                  mx-auto
                  my-4
                  text-[#89AFC9]
                "
              />

              {/* STEP 2 */}

              <div
                className="
                  rounded-[22px]
                  border
                  border-[#D0E1EB]
                  bg-white/85
                  px-5
                  py-4
                  shadow-[0_8px_22px_rgba(11,42,82,0.04)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-5
                  "
                >
                  <div>
                    <span
                      style={newYorkFont}
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.29em]
                        text-[#B18458]
                      "
                    >
                      02 · CHECK
                    </span>

                    <p
                      style={newYorkFont}
                      className="
                        mt-2
                        text-[1.1rem]
                        text-[#0B2A52]
                      "
                    >
                      Does this need judgement?
                    </p>
                  </div>

                  <ShieldCheck
                    size={19}
                    strokeWidth={1.4}
                    className="text-[#0B2A52]"
                  />
                </div>
              </div>

              <ArrowDown
                size={18}
                strokeWidth={1.4}
                className="
                  mx-auto
                  my-4
                  text-[#B18458]
                "
              />

              {/* =================================================
                  HUMAN PAUSE
              ================================================= */}

              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.015,
                      }
                }
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#B9D2E2]
                  bg-[#0B2A52]
                  px-6
                  py-6
                  text-white
                  shadow-[0_18px_36px_rgba(11,42,82,0.15)]
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[45px]
                    -top-[55px]
                    h-[160px]
                    w-[160px]
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[20px]
                    -top-[20px]
                    h-[100px]
                    w-[100px]
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-[54px]
                      w-[54px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.08]
                    "
                  >
                    <CirclePause
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <span
                      style={newYorkFont}
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.31em]
                        text-[#D8B889]
                      "
                    >
                      HUMAN CHECKPOINT
                    </span>

                    <h4
                      style={newYorkFont}
                      className="
                        mt-2
                        text-[1.55rem]
                        font-light
                        leading-[1]
                        tracking-[-0.04em]
                      "
                    >
                      Pause Before Action.
                    </h4>
                  </div>
                </div>

                <p
                  style={newYorkFont}
                  className="
                    relative
                    z-10
                    mt-5
                    text-[10.5px]
                    leading-[1.6]
                    text-white/70
                  "
                >
                  The workflow waits for review when confidence, sensitivity or
                  commercial importance requires human judgement.
                </p>
              </motion.div>

              <ArrowDown
                size={18}
                strokeWidth={1.4}
                className="
                  mx-auto
                  my-4
                  text-[#B18458]
                "
              />

              {/* STEP 4 */}

              <div
                className="
                  rounded-[22px]
                  border
                  border-[#C9DDE9]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_8px_22px_rgba(11,42,82,0.05)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-5
                  "
                >
                  <div>
                    <span
                      style={newYorkFont}
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.29em]
                        text-[#B18458]
                      "
                    >
                      04 · CONTINUE
                    </span>

                    <p
                      style={newYorkFont}
                      className="
                        mt-2
                        text-[1.1rem]
                        text-[#0B2A52]
                      "
                    >
                      Approved action moves forward.
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-[32px]
                      w-[32px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EEF6FB]
                      text-[#0B2A52]
                    "
                  >
                    <Check
                      size={15}
                      strokeWidth={1.7}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* bottom microcopy */}

            <div
              className="
                relative
                z-10
                mt-8
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
                  text-[6px]
                  uppercase
                  tracking-[0.29em]
                  text-[#0B2A52]/45
                "
              >
                AUTOMATE · CHECK · REVIEW · CONTINUE
              </span>

              <span className="h-px w-8 bg-[#C6A77A]" />
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — CONTROL POINTS
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
              duration: reduceMotion ? 0 : 0.75,
              ease,
            }}
            className="
              rounded-[38px]
              border
              border-[#D1E1EA]
              bg-white
              px-6
              py-8
              shadow-[0_18px_50px_rgba(11,42,82,0.045)]

              sm:px-8
              lg:px-9
            "
          >
            {/* right header */}

            <div
              className="
                flex
                items-end
                justify-between
                gap-7
                border-b
                border-[#0B2A52]/10
                pb-6
              "
            >
              <div>
                <span
                  style={newYorkFont}
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.31em]
                    text-[#B18458]
                  "
                >
                  Where Humans Step In
                </span>

                <h3
                  style={newYorkFont}
                  className="
                    mt-3
                    text-[2rem]
                    font-light
                    leading-[1]
                    tracking-[-0.045em]
                    text-[#0B2A52]
                  "
                >
                  Five Control Points.
                </h3>
              </div>

              <span
                style={newYorkFont}
                className="
                  hidden
                  text-right
                  text-[6px]
                  uppercase
                  leading-[1.8]
                  tracking-[0.28em]
                  text-[#0B2A52]/40

                  md:block
                "
              >
                HUMAN JUDGEMENT
                <br />
                WHERE IT MATTERS
              </span>
            </div>

            {/* control points */}

            <div>
              {controlPoints.map((item, index) => (
                <ControlRow
                  key={item.number}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* footer statement */}

            <div
              className="
                mt-7
                flex
                items-start
                gap-4
                rounded-[22px]
                bg-[#F3F8FB]
                px-5
                py-5
              "
            >
              <UserRoundCheck
                size={18}
                strokeWidth={1.45}
                className="
                  mt-0.5
                  shrink-0
                  text-[#B18458]
                "
              />

              <p
                style={newYorkFont}
                className="
                  text-[10px]
                  leading-[1.65]
                  text-[#536D85]
                "
              >
                Automation handles the standard path. Human judgement remains
                available for sensitive, uncertain or unusual situations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            PRINCIPLE / RISK SCALE
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
            mt-14
            max-w-[1380px]
            overflow-hidden
            rounded-[34px]
            border
            border-[#C8DCE9]
            bg-white
            px-7
            py-8
            shadow-[0_16px_42px_rgba(11,42,82,0.045)]

            lg:px-10
            lg:py-9
          "
        >
          <div
            className="
              grid
              gap-9

              lg:grid-cols-[0.55fr_1fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* LEFT PRINCIPLE */}

            <div>
              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.34em]
                  text-[#B18458]
                "
              >
                The Principle
              </span>

              <h3
                style={newYorkFont}
                className="
                  mt-4
                  text-[1.9rem]
                  font-light
                  leading-[1.03]
                  tracking-[-0.045em]
                  text-[#0B2A52]

                  sm:text-[2.15rem]
                  lg:text-[2.4rem]
                "
              >
                Autonomy Should Match{" "}
                <span className="text-[#B18458]">
                  the Risk of the Task.
                </span>
              </h3>
            </div>

            {/* RIGHT RISK SCALE */}

            <div>
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div>
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.27em]
                      text-[#0B2A52]
                    "
                  >
                    Lower Risk
                  </span>

                  <p
                    style={newYorkFont}
                    className="
                      mt-1
                      text-[9px]
                      text-[#536D85]
                    "
                  >
                    More autonomy
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  strokeWidth={1.4}
                  className="text-[#B18458]"
                />

                <div className="text-right">
                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.27em]
                      text-[#0B2A52]
                    "
                  >
                    Higher Risk
                  </span>

                  <p
                    style={newYorkFont}
                    className="
                      mt-1
                      text-[9px]
                      text-[#536D85]
                    "
                  >
                    More human control
                  </p>
                </div>
              </div>

              {/* BAR */}

              <div
                className="
                  relative
                  mt-7
                  h-[12px]
                  overflow-hidden
                  rounded-full
                  bg-[#E7F0F5]
                "
              >
                <div
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-full
                    bg-[linear-gradient(90deg,#DDECF5_0%,#9FC3DB_48%,#0B2A52_100%)]
                  "
                />

                <span
                  className="
                    absolute
                    left-[18%]
                    top-1/2
                    h-[20px]
                    w-[20px]
                    -translate-y-1/2
                    rounded-full
                    border-[4px]
                    border-white
                    bg-[#B18458]
                    shadow-[0_3px_12px_rgba(11,42,82,0.12)]
                  "
                />

                <span
                  className="
                    absolute
                    left-[50%]
                    top-1/2
                    h-[20px]
                    w-[20px]
                    -translate-y-1/2
                    rounded-full
                    border-[4px]
                    border-white
                    bg-[#B18458]
                    shadow-[0_3px_12px_rgba(11,42,82,0.12)]
                  "
                />

                <span
                  className="
                    absolute
                    left-[82%]
                    top-1/2
                    h-[20px]
                    w-[20px]
                    -translate-y-1/2
                    rounded-full
                    border-[4px]
                    border-white
                    bg-[#B18458]
                    shadow-[0_3px_12px_rgba(11,42,82,0.12)]
                  "
                />
              </div>

              {/* LABELS */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-3
                  text-center
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.23em]
                    text-[#0B2A52]/50
                  "
                >
                  AUTOMATE
                </span>

                <span
                  style={newYorkFont}
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.23em]
                    text-[#0B2A52]/50
                  "
                >
                  REVIEW
                </span>

                <span
                  style={newYorkFont}
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.23em]
                    text-[#0B2A52]/50
                  "
                >
                  APPROVE
                </span>
              </div>
            </div>
          </div>

          {/* DECORATIVE SECTION NUMBER */}

          
        </motion.div>
      </div>
    </section>
  );
}