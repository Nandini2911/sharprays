"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Eye,
  Layers3,
  Menu,
  MonitorSmartphone,
  MousePointer2,
  Search,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const problems = [
  {
    number: "01",
    icon: Eye,
    title: "Your Website Looks Professional",
    text: "But visitors still struggle to understand exactly what you do.",
    side: "left",
  },
  {
    number: "02",
    icon: MousePointer2,
    title: "People Are Visiting",
    text: "But too few are taking the next step.",
    side: "right",
  },
  {
    number: "03",
    icon: Menu,
    title: "You Have Strong Services",
    text: "But important information is buried behind confusing pages or navigation.",
    side: "left",
  },
  {
    number: "04",
    icon: MonitorSmartphone,
    title: "The Site Works on Desktop",
    text: "But the mobile experience feels compromised.",
    side: "right",
  },
  {
    number: "05",
    icon: Search,
    title: "You Have Content",
    text: "But search engines and users cannot easily understand how everything connects.",
    side: "left",
  },
  {
    number: "06",
    icon: Layers3,
    title: "You Keep Adding Features",
    text: "But the experience becomes more complicated instead of more useful.",
    side: "right",
  },
];

export default function WebsiteProblemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="website-problem"
      aria-labelledby="website-problem-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#FCFDFC]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* Left cream glow */}
        <div
          className="
            absolute
            -left-[260px]
            top-[12%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#F7F0E8]
            blur-[135px]
          "
        />

        {/* Right blue glow */}
        <div
          className="
            absolute
            -right-[280px]
            top-[31%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#EAF4FB]
            blur-[135px]
          "
        />

        {/* bottom wash */}
        <div
          className="
            absolute
            bottom-[-280px]
            left-1/2
            h-[430px]
            w-[900px]
            -translate-x-1/2
            rounded-[50%]
            bg-[#EFF6FB]
            blur-[90px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          max-w-[1360px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[1040px] text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 0.65,
              ease,
            }}
            className="
              mb-7
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#B79A72]" />

            <span
              className="
                text-[0.67rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#9C754F]
                sm:text-[0.71rem]
              "
            >
              The Problem
            </span>

            <span className="h-px w-10 bg-[#B79A72]" />
          </motion.div>

          <motion.h2
            id="website-problem-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.82,
              delay: 0.06,
              ease,
            }}
            className="
              text-[2.35rem]
              font-medium
              leading-[1.04]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            A Website Can Look Good and Still{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#B18458]
              "
            >
              Work Against Your Business.
            </span>
          </motion.h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 17 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.72,
              delay: 0.14,
              ease,
            }}
            className="
              mx-auto
              mt-8
              max-w-[820px]
            "
          >
            <p
              className="
                text-[0.98rem]
                leading-[1.8]
                text-[#5D7186]
                sm:text-[1.03rem]
              "
            >
              A polished interface can create a strong first impression.
            </p>

            <p
              className="
                mt-3
                text-[0.98rem]
                leading-[1.8]
                text-[#5D7186]
                sm:text-[1.03rem]
              "
            >
              But design alone cannot fix confusing navigation, slow pages,
              unclear messaging or a poor customer journey.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            DOES THIS SOUND FAMILIAR
        ===================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-[1140px]
            items-center
            gap-5
          "
        >
          <span className="h-px flex-1 bg-[#E0E7ED]" />

          <span
            className="
              shrink-0
              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.27em]
              text-[#0B2A52]
            "
          >
            Does This Sound Familiar?
          </span>

          <span className="h-px flex-1 bg-[#E0E7ED]" />
        </motion.div>

        {/* =====================================================
            FRICTION JOURNEY
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-10
            max-w-[1140px]
          "
        >
          {/* main frame */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-[#D7E3EC]
              bg-white/80
              px-5
              py-8
              shadow-[0_28px_80px_rgba(11,42,82,0.065)]
              backdrop-blur-sm

              sm:px-7
              lg:px-10
              lg:py-10
            "
          >
            {/* subtle top atmosphere */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-[220px]
                bg-gradient-to-b
                from-[#F3F8FC]
                to-transparent
              "
            />

            {/* =================================================
                JOURNEY HEADER
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                mb-6
                flex
                max-w-[930px]
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.23em]
                  text-[#8193A3]
                "
              >
                Visit
              </span>

              <div
                className="
                  mx-4
                  flex
                  flex-1
                  items-center
                  gap-2
                "
              >
                <span className="h-px flex-1 bg-[#CBD9E4]" />

                <ArrowRight
                  size={13}
                  className="text-[#B79A72]"
                />
              </div>

              <span
                className="
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.23em]
                  text-[#8193A3]
                "
              >
                Understand
              </span>

              <div
                className="
                  mx-4
                  hidden
                  flex-1
                  items-center
                  gap-2
                  sm:flex
                "
              >
                <span className="h-px flex-1 bg-[#CBD9E4]" />

                <ArrowRight
                  size={13}
                  className="text-[#B79A72]"
                />
              </div>

              <span
                className="
                  hidden
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.23em]
                  text-[#8193A3]
                  sm:block
                "
              >
                Trust
              </span>

              <div
                className="
                  mx-4
                  hidden
                  flex-1
                  items-center
                  gap-2
                  md:flex
                "
              >
                <span className="h-px flex-1 bg-[#CBD9E4]" />

                <ArrowRight
                  size={13}
                  className="text-[#B79A72]"
                />
              </div>

              <span
                className="
                  hidden
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.23em]
                  text-[#8193A3]
                  md:block
                "
              >
                Action
              </span>
            </div>

            {/* =================================================
                CENTER JOURNEY SPINE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[86px]
                left-1/2
                top-[105px]
                hidden
                w-px
                -translate-x-1/2
                bg-gradient-to-b
                from-[#B79A72]/60
                via-[#A9C1D7]
                to-[#0B2A52]/20
                lg:block
              "
            />

            {/* animated journey point */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 470, 0],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[125px]
                z-20
                hidden
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                border-[3px]
                border-white
                bg-[#B79A72]
                shadow-[0_0_0_5px_rgba(183,154,114,0.12)]
                lg:block
              "
            />

            {/* =================================================
                PROBLEM ROWS
            ================================================= */}

            <div className="relative">
              {problems.map(
                ({ number, icon: Icon, title, text, side }, index) => (
                  <motion.div
                    key={number}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: side === "left" ? -35 : 35,
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
                      duration: 0.7,
                      delay: index * 0.06,
                      ease,
                    }}
                    className={`
                      relative
                      grid
                      min-h-[128px]
                      border-t
                      border-[#E8EDF1]

                      first:border-t-0

                      lg:grid-cols-2

                      ${
                        side === "left"
                          ? ""
                          : ""
                      }
                    `}
                  >
                    {/* LEFT SIDE */}
                    <div
                      className={`
                        relative
                        flex
                        items-center
                        py-6

                        lg:pr-14

                        ${
                          side === "left"
                            ? "lg:flex"
                            : "lg:invisible"
                        }
                      `}
                    >
                      {side === "left" && (
                        <ProblemContent
                          number={number}
                          icon={Icon}
                          title={title}
                          text={text}
                          align="right"
                        />
                      )}
                    </div>

                    {/* center friction marker */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        z-10
                        hidden
                        h-8
                        w-8
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C9D9E5]
                        bg-white
                        shadow-[0_8px_22px_rgba(11,42,82,0.08)]
                        lg:flex
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#B79A72]
                        "
                      />
                    </div>

                    {/* RIGHT SIDE */}
                    <div
                      className={`
                        relative
                        flex
                        items-center
                        py-6

                        lg:pl-14

                        ${
                          side === "right"
                            ? "lg:flex"
                            : "lg:invisible"
                        }
                      `}
                    >
                      {side === "right" && (
                        <ProblemContent
                          number={number}
                          icon={Icon}
                          title={title}
                          text={text}
                          align="left"
                        />
                      )}
                    </div>
                  </motion.div>
                )
              )}
            </div>

            {/* =================================================
                BOTTOM OF JOURNEY
            ================================================= */}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease,
              }}
              className="
                relative
                mt-5
                flex
                justify-center
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#D9E4EC]
                  bg-white
                  px-5
                  py-2.5
                  shadow-[0_10px_28px_rgba(11,42,82,0.06)]
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#B79A72]
                  "
                />

                <span
                  className="
                    text-[0.57rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#61788F]
                  "
                >
                  Friction grows when clarity disappears
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            REAL PROBLEM / CONCLUSION
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
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
            duration: 0.8,
            ease,
          }}
          className="
            mx-auto
            mt-16
            max-w-[980px]
            text-center
          "
        >
          <div
            className="
              mb-7
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-8 bg-[#B79A72]" />

            <span
              className="
                text-[0.62rem]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#9C754F]
              "
            >
              The Real Problem
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <p
            className="
              text-[1rem]
              leading-[1.8]
              text-[#60758A]
              sm:text-[1.06rem]
            "
          >
            A website should not make people work to understand your business.
          </p>

          <motion.h3
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.72,
              delay: 0.12,
              ease,
            }}
            className="
              mt-5
              text-[1.85rem]
              font-medium
              leading-[1.12]
              tracking-[-0.04em]
              text-[#0B2A52]
              sm:text-[2.15rem]
              lg:text-[2.5rem]
            "
          >
            The best websites{" "}
            <span
              className="
                relative
                inline-block
                font-serif
                font-normal
                italic
                text-[#B18458]
              "
            >
              remove uncertainty.

              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : {
                        scaleX: 0,
                      }
                }
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease,
                }}
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-full
                  origin-left
                  bg-[#B79A72]
                "
              />
            </span>
          </motion.h3>

          {/* small arrow */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 6, 0],
                  }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              mt-9
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#D3DFE8]
              text-[#0B2A52]
            "
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PROBLEM CONTENT
========================================================= */

type ProblemContentProps = {
  number: string;
  icon: React.ElementType;
  title: string;
  text: string;
  align: "left" | "right";
};

function ProblemContent({
  number,
  icon: Icon,
  title,
  text,
  align,
}: ProblemContentProps) {
  return (
    <div
      className={`
        group
        flex
        w-full
        items-start
        gap-4

        ${
          align === "right"
            ? "lg:flex-row-reverse lg:text-right"
            : ""
        }
      `}
    >
      {/* Icon */}
      <span
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-[14px]
          border
          border-[#DCE6ED]
          bg-[#F6FAFC]
          text-[#0B2A52]
          transition-all
          duration-300

          group-hover:border-[#B9CDDD]
          group-hover:bg-white
          group-hover:shadow-[0_10px_26px_rgba(11,42,82,0.07)]
        "
      >
        <Icon size={17} strokeWidth={1.7} />
      </span>

      {/* Copy */}
      <div
        className={`
          max-w-[380px]

          ${
            align === "right"
              ? "lg:ml-auto"
              : ""
          }
        `}
      >
        <div
          className={`
            flex
            items-center
            gap-3

            ${
              align === "right"
                ? "lg:justify-end"
                : ""
            }
          `}
        >
          <span
            className="
              text-[0.58rem]
              font-semibold
              tracking-[0.18em]
              text-[#B18458]
            "
          >
            {number}
          </span>

          <span className="h-px w-7 bg-[#D7C3A7]" />
        </div>

        <h3
          className="
            mt-3
            text-[0.97rem]
            font-semibold
            leading-[1.5]
            text-[#0B2A52]
            sm:text-[1rem]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-[0.79rem]
            leading-[1.7]
            text-[#718497]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}