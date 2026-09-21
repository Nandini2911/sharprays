"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Workflow,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function AiAutomationFinalCTA() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
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
          left-1/2
          top-1/2
          h-[760px]
          w-[1180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          bg-[radial-gradient(circle_at_center,#EDF6FB_0%,#F7FAFC_46%,rgba(255,255,255,0)_72%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[310px]
          top-[150px]
          h-[620px]
          w-[620px]
          rounded-full
          border
          border-[#E4EDF3]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[300px]
          bottom-[-180px]
          h-[650px]
          w-[650px]
          rounded-full
          border
          border-[#E4EDF3]
        "
      />

      {/* =====================================================
          LARGE FLOW LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[52%]
          hidden
          h-[260px]
          w-[980px]
          -translate-x-1/2
          -translate-y-1/2

          lg:block
        "
      >
        <svg
          viewBox="0 0 980 260"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="ctaFlow"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="#C6A77A"
                stopOpacity="0"
              />
              <stop
                offset="22%"
                stopColor="#C6A77A"
                stopOpacity="0.65"
              />
              <stop
                offset="50%"
                stopColor="#7CA6C6"
                stopOpacity="0.8"
              />
              <stop
                offset="78%"
                stopColor="#C6A77A"
                stopOpacity="0.65"
              />
              <stop
                offset="100%"
                stopColor="#C6A77A"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <motion.path
            d="
              M0 150
              C145 150 145 40 300 40
              C430 40 410 220 520 220
              C665 220 660 65 790 65
              C875 65 900 130 980 130
            "
            fill="none"
            stroke="url(#ctaFlow)"
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
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.25,
              ease,
            }}
          />

          <circle
            cx="300"
            cy="40"
            r="5"
            fill="#B18458"
          />

          <circle
            cx="520"
            cy="220"
            r="5"
            fill="#0B2A52"
          />

          <circle
            cx="790"
            cy="65"
            r="5"
            fill="#B18458"
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN WRAPPER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1480px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =====================================================
            CTA FRAME
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-[1260px]
            overflow-hidden
            rounded-[42px]
            border
            border-[#C7DBE8]
            bg-white/88
            px-6
            py-14
            text-center
            shadow-[0_26px_70px_rgba(11,42,82,0.065)]
            backdrop-blur-[8px]

            sm:px-10
            sm:py-16

            lg:px-16
            lg:py-20
          "
        >
          {/* =================================================
              FRAME DECORATION
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[-110px]
              top-[-130px]
              h-[310px]
              w-[310px]
              rounded-full
              border
              border-[#C8DCE9]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-[-55px]
              top-[-75px]
              h-[205px]
              w-[205px]
              rounded-full
              border
              border-[#E0EAF1]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-150px]
              right-[-120px]
              h-[360px]
              w-[360px]
              rounded-full
              border
              border-[#C8DCE9]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-70px]
              right-[-55px]
              h-[220px]
              w-[220px]
              rounded-full
              bg-[#EEF6FB]
              blur-[30px]
            "
          />

          {/* =================================================
              TOP ICON
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
              duration: reduceMotion ? 0 : 0.6,
              ease,
            }}
            className="
              relative
              z-10
              mx-auto
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              rounded-full
              border
              border-[#C6DAE7]
              bg-[linear-gradient(145deg,#FFFFFF,#EDF6FB)]
              text-[#0B2A52]
              shadow-[0_10px_26px_rgba(11,42,82,0.07)]
            "
          >
            <Workflow
              size={22}
              strokeWidth={1.45}
            />

            <span
              className="
                absolute
                -right-[3px]
                -top-[3px]
                h-[12px]
                w-[12px]
                rounded-full
                border-[3px]
                border-white
                bg-[#B18458]
              "
            />
          </motion.div>

          {/* =================================================
              EYEBROW
          ================================================= */}

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
              amount: 0.45,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.06,
              ease,
            }}
            className="
              relative
              z-10
              mt-7
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#C6A77A]" />

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
              Your Next Move
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.h2
            id="final-cta-heading"
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
              amount: 0.4,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.1,
              ease,
            }}
            style={newYorkFont}
            className="
              relative
              z-10
              mx-auto
              mt-6
              max-w-[920px]
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
            Stop Spending Human Time{" "}
            <span className="text-[#B18458]">
              on Machine Work.
            </span>
          </motion.h2>

          {/* =================================================
              COPY
          ================================================= */}

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
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="
              relative
              z-10
              mx-auto
              mt-6
              max-w-[790px]
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[13px]
                leading-[1.7]
                text-[#536D85]

                sm:text-[14px]
              "
            >
              Your team should not need to repeat the same process hundreds of
              times simply because the systems around them are disconnected.
            </p>

            <p
              style={newYorkFont}
              className="
                mt-4
                text-[13px]
                leading-[1.7]
                text-[#536D85]

                sm:text-[14px]
              "
            >
              Let’s identify where automation can remove friction, improve
              response times and give people more room for work that actually
              needs them.
            </p>
          </motion.div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

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
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.2,
              ease,
            }}
            className="
              relative
              z-10
              mt-9
              flex
              flex-col
              items-center
              justify-center
              gap-3

              sm:flex-row
              sm:gap-4
            "
          >
            {/* PRIMARY */}

            <Link
              href="/contact"
              style={newYorkFont}
              className="
                group
                relative
                flex
                h-[56px]
                min-w-[250px]
                items-center
                justify-between
                gap-5
                overflow-hidden
                rounded-full
                border
                border-[#5D89B5]/25
                bg-[linear-gradient(135deg,#0B2A52_0%,#194E7C_55%,#6698C2_100%)]
                pl-6
                pr-2
                text-[10px]
                text-white
                shadow-[0_14px_34px_rgba(11,42,82,0.2)]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_19px_40px_rgba(11,42,82,0.24)]
              "
            >
              <span className="relative z-10">
                Find What We Can Automate
              </span>

              <span
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
                  -left-[35%]
                  -top-[120%]
                  h-[220px]
                  w-[110px]
                  rotate-[25deg]
                  bg-white/[0.08]
                  blur-[14px]
                  transition-transform
                  duration-700

                  group-hover:translate-x-[360px]
                "
              />
            </Link>

            {/* SECONDARY */}

            <Link
              href="/contact"
              style={newYorkFont}
              className="
                group
                flex
                h-[56px]
                min-w-[205px]
                items-center
                justify-center
                gap-4
                rounded-full
                border
                border-[#C5D9E6]
                bg-white/80
                px-6
                text-[10px]
                text-[#0B2A52]
                shadow-[0_8px_24px_rgba(11,42,82,0.035)]
                backdrop-blur-[6px]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-[#B18458]/45
                hover:bg-white
                hover:shadow-[0_12px_28px_rgba(11,42,82,0.06)]
              "
            >
              <span>
                Talk to Sharp Rays
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.45}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>

          {/* =================================================
              SUPPORTING LINE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.25,
              ease,
            }}
            className="
              relative
              z-10
              mx-auto
              mt-10
              flex
              max-w-[650px]
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,transparent,#C6A77A)]
              "
            />

            <span
              style={newYorkFont}
              className="
                whitespace-nowrap
                text-[6px]
                uppercase
                tracking-[0.31em]
                text-[#0B2A52]/50

                sm:text-[7px]
              "
            >
              MAP · CONNECT · AUTOMATE · IMPROVE
            </span>

            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,#C6A77A,transparent)]
              "
            />
          </motion.div>

          {/* =================================================
              BOTTOM MICRO DETAIL
          ================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-7
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <Sparkles
              size={12}
              strokeWidth={1.4}
              className="text-[#B18458]"
            />

            <span
              style={newYorkFont}
              className="
                text-[6px]
                uppercase
                tracking-[0.27em]
                text-[#0B2A52]/35
              "
            >
              LESS REPETITION · MORE USEFUL WORK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}