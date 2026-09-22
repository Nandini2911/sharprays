"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  Box,
  Braces,
  Clock3,
  Database,
  ImageIcon,
  Layers3,
  Link2,
  MousePointer2,
  Network,
  Smartphone,
  Type,
  Zap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type PerformanceArea = {
  title: string;
  icon: LucideIcon;

  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
  accent: string;
};

type Vital = {
  metric: string;
  target: string;
  description: string;
  icon: LucideIcon;

  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
  accent: string;
  targetColor: string;
  graph: string;
  graphSoft: string;
};

/* =========================================================
   PERFORMANCE AREAS
========================================================= */

const performanceAreas: PerformanceArea[] = [
  {
    title: "Image optimization",
    icon: ImageIcon,

    bg: "bg-[#F1F8FF]",
    border: "border-[#9FC8EC]",
    iconBg: "bg-[#DCEEFF]",
    iconColor: "text-[#347FBE]",
    accent: "bg-[#4D98D5]",
  },
  {
    title: "Loading behaviour",
    icon: Clock3,

    bg: "bg-[#F5F1FF]",
    border: "border-[#B3A3E8]",
    iconBg: "bg-[#E9E2FF]",
    iconColor: "text-[#7963C8]",
    accent: "bg-[#8C74D6]",
  },
  {
    title: "JavaScript delivery",
    icon: Braces,

    bg: "bg-[#EDFAF5]",
    border: "border-[#8BC9AE]",
    iconBg: "bg-[#D9F2E6]",
    iconColor: "text-[#4D9B79]",
    accent: "bg-[#61AD88]",
  },
  {
    title: "Layout stability",
    icon: Layers3,

    bg: "bg-[#FFF4EC]",
    border: "border-[#E0AE83]",
    iconBg: "bg-[#FBE5D1]",
    iconColor: "text-[#C37C45]",
    accent: "bg-[#D59059]",
  },
  {
    title: "Responsive assets",
    icon: Smartphone,

    bg: "bg-[#FFF9E8]",
    border: "border-[#DDC169]",
    iconBg: "bg-[#F8EFC6]",
    iconColor: "text-[#AE8A28]",
    accent: "bg-[#CBA53A]",
  },
  {
    title: "Font loading",
    icon: Type,

    bg: "bg-[#FFF1F6]",
    border: "border-[#DFA3B7]",
    iconBg: "bg-[#F9DFE9]",
    iconColor: "text-[#C06486]",
    accent: "bg-[#CD7996]",
  },
  {
    title: "Component efficiency",
    icon: Box,

    bg: "bg-[#ECF9FA]",
    border: "border-[#7FC4C8]",
    iconBg: "bg-[#D9F1F2]",
    iconColor: "text-[#438F96]",
    accent: "bg-[#55A6AD]",
  },
  {
    title: "Third-party scripts",
    icon: Link2,

    bg: "bg-[#F1F5FB]",
    border: "border-[#98AFCB]",
    iconBg: "bg-[#E1E9F4]",
    iconColor: "text-[#607E9F]",
    accent: "bg-[#7896B5]",
  },
  {
    title: "Caching opportunities",
    icon: Database,

    bg: "bg-[#F3FAEC]",
    border: "border-[#A6C57B]",
    iconBg: "bg-[#E5F1D5]",
    iconColor: "text-[#70984A]",
    accent: "bg-[#85A95E]",
  },
  {
    title: "Page structure",
    icon: Network,

    bg: "bg-[#F3F2FF]",
    border: "border-[#A6A0DF]",
    iconBg: "bg-[#E5E3FA]",
    iconColor: "text-[#7068BE]",
    accent: "bg-[#8179C8]",
  },
];

/* =========================================================
   CORE WEB VITALS
========================================================= */

const vitals: Vital[] = [
  {
    metric: "LCP",
    target: "< 2.5s",
    description: "How quickly the main content becomes visible.",
    icon: Zap,

    bg: "bg-[#F2F8FF]",
    border: "border-[#9CC4E8]",
    iconBg: "bg-[#DDEEFF]",
    iconColor: "text-[#347FBE]",
    accent: "bg-[#4D98D5]",
    targetColor: "text-[#347FBE]",
    graph: "#4D98D5",
    graphSoft: "#C6DFF4",
  },
  {
    metric: "INP",
    target: "< 200ms",
    description: "How responsive the experience feels when users interact.",
    icon: MousePointer2,

    bg: "bg-[#F0FAF6]",
    border: "border-[#8DC9AE]",
    iconBg: "bg-[#DCF2E8]",
    iconColor: "text-[#4F9979]",
    accent: "bg-[#61A889]",
    targetColor: "text-[#4F9979]",
    graph: "#61A889",
    graphSoft: "#C7E6D8",
  },
  {
    metric: "CLS",
    target: "< 0.1",
    description: "How visually stable the page remains while loading.",
    icon: Layers3,

    bg: "bg-[#FFF5ED]",
    border: "border-[#DFB087]",
    iconBg: "bg-[#FBE6D4]",
    iconColor: "text-[#C17D4B]",
    accent: "bg-[#CF8B58]",
    targetColor: "text-[#B87545]",
    graph: "#CF8B58",
    graphSoft: "#EED6C3",
  },
];

/* =========================================================
   PERFORMANCE AREA ITEM
========================================================= */

function PerformanceAreaItem({
  item,
  index,
  reduceMotion,
}: {
  item: PerformanceArea;
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
              y: 12,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.035,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              scale: 1.015,
            }
      }
      className={`
        group
        relative

        flex
        min-h-[62px]
        items-center
        gap-3

        overflow-hidden

        rounded-[14px]

        border

        px-4

        shadow-[0_7px_22px_rgba(11,42,82,0.035)]

        transition-all
        duration-300

        hover:shadow-[0_13px_30px_rgba(11,42,82,0.08)]

        ${item.bg}
        ${item.border}
      `}
    >
      {/* HOVER BOTTOM LINE */}

      <span
        className={`
          absolute
          bottom-0
          left-0

          h-[3px]
          w-[38px]

          transition-all
          duration-500

          group-hover:w-full

          ${item.accent}
        `}
      />

      {/* ICON */}

      <motion.span
        whileHover={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -4, 4, 0],
                scale: 1.08,
              }
        }
        className={`
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center

          rounded-[10px]

          ${item.iconBg}
          ${item.iconColor}
        `}
      >
        <Icon size={17} strokeWidth={1.75} />
      </motion.span>

      {/* TEXT */}

      <span
        className="
          text-[0.78rem]
          font-medium
          leading-[1.4]

          text-[#284765]
        "
      >
        {item.title}
      </span>
    </motion.div>
  );
}

/* =========================================================
   CORE WEB VITAL CARD
========================================================= */

function VitalCard({
  vital,
  index,
  reduceMotion,
}: {
  vital: Vital;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = vital.icon;

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
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.08,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className={`
        group
        relative

        min-h-[155px]

        overflow-hidden

        rounded-[17px]

        border

        p-5

        shadow-[0_9px_25px_rgba(11,42,82,0.035)]

        transition-all
        duration-300

        hover:shadow-[0_17px_36px_rgba(11,42,82,0.08)]

        ${vital.bg}
        ${vital.border}
      `}
    >
      {/* TOP ACCENT */}

      <span
        className={`
          absolute
          left-0
          top-0

          h-[3px]
          w-[55px]

          transition-all
          duration-500

          group-hover:w-full

          ${vital.accent}
        `}
      />

      {/* SOFT DECORATION */}

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12

          h-32
          w-32

          rounded-full

          bg-white/35

          blur-[5px]
        "
      />

      <div
        className="
          relative
          z-10

          flex
          items-start
          gap-5
        "
      >
        {/* ICON */}

        <span
          className={`
            flex
            h-[64px]
            w-[64px]
            shrink-0
            items-center
            justify-center

            rounded-full

            border
            border-white/70

            shadow-[inset_0_0_0_7px_rgba(255,255,255,0.45)]

            transition-all
            duration-300

            group-hover:scale-[1.05]

            ${vital.iconBg}
            ${vital.iconColor}
          `}
        >
          <Icon size={23} strokeWidth={1.7} />
        </span>

        {/* CONTENT */}

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="
                font-serif
                text-[1.7rem]
                font-semibold
                leading-none
                tracking-[-0.035em]

                text-[#0B2A52]
              "
            >
              {vital.metric}
            </h3>

            <div className="text-right">
              <span
                className={`
                  block

                  text-[0.64rem]
                  font-semibold
                  tracking-[0.12em]

                  ${vital.targetColor}
                `}
              >
                {vital.target}
              </span>

              <span
                className="
                  mt-1
                  block

                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.25em]

                  text-[#7B8FA1]
                "
              >
                Good
              </span>
            </div>
          </div>

          <p
            className="
              mt-3
              max-w-[260px]

              text-[0.77rem]
              leading-[1.5]

              text-[#526A82]
            "
          >
            {vital.description}
          </p>
        </div>
      </div>

      {/* =====================================================
          MINI GRAPH
      ===================================================== */}

      <svg
        viewBox="0 0 170 42"
        fill="none"
        aria-hidden="true"
        className="
          absolute
          bottom-1
          right-0

          h-[52px]
          w-[45%]
        "
      >
        <path
          d="
            M 0 38
            C 20 36, 32 28, 48 18
            C 62 10, 70 26, 87 25
            C 105 24, 117 8, 132 6
            C 145 4, 155 12, 170 2
          "
          stroke={vital.graphSoft}
          strokeWidth="1.2"
        />

        <motion.path
          d="
            M 0 38
            C 20 36, 32 28, 48 18
            C 62 10, 70 26, 87 25
            C 105 24, 117 8, 132 6
            C 145 4, 155 12, 170 2
          "
          stroke={vital.graph}
          strokeWidth="1.7"
          strokeLinecap="round"
          initial={
            reduceMotion
              ? false
              : {
                  pathLength: 0,
                }
          }
          whileInView={{
            pathLength: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: index * 0.12,
            ease,
          }}
        />

        <circle
          cx="48"
          cy="18"
          r="2.8"
          fill="white"
          stroke={vital.graph}
          strokeWidth="1.5"
        />

        <circle
          cx="132"
          cy="6"
          r="2.8"
          fill="white"
          stroke={vital.graph}
          strokeWidth="1.5"
        />
      </svg>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WebsitePerformanceSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="performance-user-experience"
      aria-labelledby="performance-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          COLORFUL BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
      >
        {/* BLUE */}

        <div
          className="
            absolute
            -left-[250px]
            top-[40px]

            h-[560px]
            w-[560px]

            rounded-full

            bg-[#EAF5FF]

            blur-[30px]
          "
        />

        {/* VIOLET */}

        <div
          className="
            absolute
            right-[-180px]
            top-[20px]

            h-[430px]
            w-[430px]

            rounded-full

            bg-[#F0ECFF]

            blur-[50px]
          "
        />

        {/* GREEN */}

        <div
          className="
            absolute
            right-[5%]
            top-[38%]

            h-[300px]
            w-[300px]

            rounded-full

            bg-[#ECF8F2]

            blur-[90px]
          "
        />

        {/* WARM */}

        <div
          className="
            absolute
            bottom-[3%]
            left-[-100px]

            h-[320px]
            w-[420px]

            rounded-full

            bg-[#FFF3E7]

            blur-[100px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1420px]

          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HERO / PERFORMANCE VISUAL
        ===================================================== */}

        <div
          className="
            relative

            min-h-[470px]

            lg:min-h-[500px]
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
              duration: 0.68,
              ease,
            }}
            className="
              relative
              z-20

              max-w-[590px]

              pt-3

              lg:pt-8
            "
          >
            {/* EYEBROW */}

            <div className="flex items-center gap-3">
              <span
                className="
                  h-px
                  w-8

                  bg-[linear-gradient(90deg,#B79A72,#6A9CD1)]
                "
              />

              <span
                className="
                  text-[0.6rem]
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  text-[#92745C]
                "
              >
                Built for Real Users
              </span>
            </div>

            {/* TITLE */}

            <h2
              id="performance-heading"
              className="
                mt-5

                font-serif
                text-[2.1rem]
                font-normal
                leading-[1.04]
                tracking-[-0.04em]

                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Fast Is a{" "}
              <span
                className="
                  font-serif
                  italic

                  text-[#A97C52]
                "
              >
                Feature.
              </span>
            </h2>

            {/* COLOR LINE */}

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
                duration: 0.6,
                delay: 0.1,
                ease,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                mt-6
                block

                h-[3px]
                w-14

                rounded-full

                bg-[linear-gradient(90deg,#B79A72,#5C9BD3,#8B78CC)]
              "
            />

            {/* COPY */}

            <p
              className="
                mt-6

                max-w-[560px]

                font-serif
                text-[0.97rem]
                leading-[1.7]

                text-[#425F7A]
              "
            >
              People should not have to wait for your website to become useful.
            </p>

            <p
              className="
                mt-2

                max-w-[570px]

                font-serif
                text-[0.97rem]
                leading-[1.7]

                text-[#61758A]
              "
            >
              Performance influences how quickly visitors can see content,
              interact with pages and move through the experience.
            </p>
          </motion.div>

          {/* =================================================
              COLORFUL PERFORMANCE LANDSCAPE
          ================================================= */}

          <div
            className="
              relative

              mt-10

              h-[330px]

              lg:absolute
              lg:right-0
              lg:top-0
              lg:mt-0
              lg:h-[460px]
              lg:w-[66%]
            "
          >
            {/* GRID */}

            <div
              className="
                absolute
                inset-0

                bg-[linear-gradient(rgba(92,157,211,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(92,157,211,0.065)_1px,transparent_1px)]
                bg-[size:34px_34px]

                opacity-70
              "
            />

            {/* WAVES */}

            <svg
              viewBox="0 0 900 460"
              preserveAspectRatio="none"
              className="
                absolute
                inset-0

                h-full
                w-full
              "
              aria-hidden="true"
            >
              <defs>
                {/* BLUE */}

                <linearGradient
                  id="blueWave"
                  x1="0"
                  y1="1"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#D8EEFF"
                    stopOpacity="0.06"
                  />

                  <stop
                    offset="60%"
                    stopColor="#64ADE3"
                    stopOpacity="0.48"
                  />

                  <stop
                    offset="100%"
                    stopColor="#91C8EE"
                    stopOpacity="0.12"
                  />
                </linearGradient>

                {/* VIOLET */}

                <linearGradient
                  id="violetWave"
                  x1="0"
                  y1="1"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#EFEAFF"
                    stopOpacity="0.05"
                  />

                  <stop
                    offset="55%"
                    stopColor="#9782DE"
                    stopOpacity="0.27"
                  />

                  <stop
                    offset="100%"
                    stopColor="#CFC5F5"
                    stopOpacity="0.12"
                  />
                </linearGradient>

                {/* GREEN */}

                <linearGradient
                  id="greenWave"
                  x1="0"
                  y1="1"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#E8F8F0"
                    stopOpacity="0.03"
                  />

                  <stop
                    offset="65%"
                    stopColor="#6FB496"
                    stopOpacity="0.23"
                  />

                  <stop
                    offset="100%"
                    stopColor="#D8EEE4"
                    stopOpacity="0.08"
                  />
                </linearGradient>

                {/* GOLD */}

                <linearGradient
                  id="goldLine"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#5C9BD3" />
                  <stop offset="38%" stopColor="#8B78CC" />
                  <stop offset="67%" stopColor="#61A889" />
                  <stop offset="100%" stopColor="#B79A72" />
                </linearGradient>
              </defs>

              {/* BLUE AREA */}

              <path
                d="
                  M 0 390
                  C 120 320, 205 270, 310 275
                  C 410 282, 470 350, 575 250
                  C 690 140, 755 105, 900 105
                  L 900 460
                  L 0 460
                  Z
                "
                fill="url(#blueWave)"
              />

              {/* VIOLET AREA */}

              <path
                d="
                  M 0 415
                  C 170 335, 245 320, 350 350
                  C 455 380, 535 300, 630 220
                  C 710 150, 810 155, 900 120
                  L 900 460
                  L 0 460
                  Z
                "
                fill="url(#violetWave)"
              />

              {/* GREEN AREA */}

              <path
                d="
                  M 180 460
                  C 270 380, 385 370, 475 330
                  C 570 290, 645 225, 720 180
                  C 785 140, 840 125, 900 105
                  L 900 460
                  Z
                "
                fill="url(#greenWave)"
              />

              {/* WHITE GLOW */}

              <path
                d="
                  M 40 340
                  C 160 325, 260 365, 370 280
                  C 455 215, 510 235, 600 180
                  C 700 120, 780 145, 900 70
                "
                stroke="white"
                strokeWidth="5"
                fill="none"
                opacity="0.92"
              />

              {/* COLORFUL MAIN LINE */}

              <motion.path
                d="
                  M 40 340
                  C 160 325, 260 365, 370 280
                  C 455 215, 510 235, 600 180
                  C 700 120, 780 145, 900 70
                "
                stroke="url(#goldLine)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={
                  reduceMotion
                    ? false
                    : {
                        pathLength: 0,
                      }
                }
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.5,
                  ease,
                }}
              />
            </svg>

            {/* =================================================
                CHECKPOINT 01 — BLUE
            ================================================= */}

            <Checkpoint
              left="left-[22%]"
              top="top-[52%]"
              delay={0.35}
              reduceMotion={reduceMotion}
              dot="bg-[#4D98D5]"
              ring="border-[#DCEEFF]"
              line="bg-[#7EB5DF]"
              text="Optimised"
              second="Assets"
            />

            {/* =================================================
                CHECKPOINT 02 — VIOLET
            ================================================= */}

            <Checkpoint
              left="left-[45%]"
              top="top-[40%]"
              delay={0.48}
              reduceMotion={reduceMotion}
              dot="bg-[#8B78CC]"
              ring="border-[#E7E0FF]"
              line="bg-[#A99ADF]"
              text="Faster"
              second="Responses"
            />

            {/* =================================================
                CHECKPOINT 03 — GREEN
            ================================================= */}

            <Checkpoint
              left="left-[66%]"
              top="top-[26%]"
              delay={0.62}
              reduceMotion={reduceMotion}
              dot="bg-[#61A889]"
              ring="border-[#DDF2E8]"
              line="bg-[#87C3A8]"
              text="Smoother"
              second="Experiences"
            />

            {/* =================================================
                FINAL — GOLD
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.8,
                    }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.75,
              }}
              className="
                absolute
                right-[13%]
                top-[10%]
              "
            >
              <span
                className="
                  absolute
                  bottom-[20px]
                  left-1/2

                  h-[55px]
                  w-px

                  -translate-x-1/2

                  bg-[#D4B383]
                "
              />

              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.12, 1],
                      }
                }
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10

                  block
                  h-[23px]
                  w-[23px]

                  rounded-full

                  border-[5px]
                  border-[#F5E7D2]

                  bg-[#B79A72]

                  shadow-[0_5px_16px_rgba(183,154,114,0.3)]
                "
              />

              <span
                className="
                  absolute
                  -top-[58px]
                  left-3

                  w-[130px]

                  text-[0.49rem]
                  font-semibold
                  uppercase
                  leading-[1.5]
                  tracking-[0.19em]

                  text-[#0B2A52]
                "
              >
                Happier
                <br />
                Visitors
              </span>
            </motion.div>

            {/* =================================================
                SLOW SIDE
            ================================================= */}

            <div
              className="
                absolute
                bottom-[17%]
                left-[4%]
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    h-4
                    w-4

                    rounded-full

                    border-[3px]
                    border-[#E3E8EC]

                    bg-[#9AA9B5]
                  "
                />

                <span
                  className="
                    text-[0.46rem]
                    font-semibold
                    uppercase
                    leading-[1.5]
                    tracking-[0.17em]

                    text-[#72879A]
                  "
                >
                  Slower
                  <br />
                  websites lose
                  <br />
                  opportunities
                </span>
              </div>
            </div>

            {/* =================================================
                SIDE NOTE
            ================================================= */}

            <div
              className="
                absolute
                right-[2%]
                top-[38%]

                hidden

                xl:block
              "
            >
              <span
                className="
                  text-[0.47rem]
                  font-semibold
                  uppercase
                  leading-[1.55]
                  tracking-[0.2em]

                  text-[#597B98]
                "
              >
                Good
                <br />
                performance
                <br />
                goes further
              </span>

              <span
                className="
                  mt-3
                  block

                  h-[2px]
                  w-9

                  rounded-full

                  bg-[linear-gradient(90deg,#61A889,#B79A72)]
                "
              />
            </div>

            {/* =================================================
                COLORFUL LOADING PANEL
            ================================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 30,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.5,
                ease,
              }}
              className="
                absolute
                bottom-[7%]
                right-[5%]

                w-[46%]
                min-w-[300px]

                overflow-hidden

                rounded-[18px]

                border
                border-[#D3DFE8]

                bg-white/90

                p-5

                shadow-[0_16px_38px_rgba(11,42,82,0.08)]

                backdrop-blur-md
              "
            >
              {/* color top strip */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0

                  h-[3px]

                  bg-[linear-gradient(90deg,#4D98D5,#8B78CC,#61A889,#B79A72)]
                "
              />

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      text-[0.52rem]
                      font-semibold
                      uppercase
                      tracking-[0.22em]

                      text-[#355879]
                    "
                  >
                    Loading
                  </span>

                  <span
                    className="
                      font-serif
                      text-[1rem]
                      font-semibold

                      text-[#0B2A52]
                    "
                  >
                    98%
                  </span>
                </div>

                <span
                  className="
                    text-[0.42rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]

                    text-[#91A2B0]
                  "
                >
                  Built for real users
                </span>
              </div>

              {/* PROGRESS */}

              <div
                className="
                  mt-4

                  h-[12px]
                  overflow-hidden

                  rounded-full

                  bg-[#EAF0F4]
                "
              >
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          width: "0%",
                        }
                  }
                  whileInView={{
                    width: "96%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.15,
                    delay: 0.55,
                    ease,
                  }}
                  className="
                    h-full

                    rounded-full

                    bg-[linear-gradient(90deg,#4D98D5_0%,#8B78CC_35%,#61A889_68%,#B79A72_100%)]
                  "
                />
              </div>

              <div
                className="
                  mt-4

                  flex
                  flex-wrap
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    rounded-full
                    bg-[#E7F3FD]
                    px-2.5
                    py-1

                    text-[0.43rem]
                    font-semibold
                    uppercase
                    tracking-[0.15em]

                    text-[#3A80BA]
                  "
                >
                  Lighter
                </span>

                <span
                  className="
                    rounded-full
                    bg-[#EDE8FF]
                    px-2.5
                    py-1

                    text-[0.43rem]
                    font-semibold
                    uppercase
                    tracking-[0.15em]

                    text-[#7863C0]
                  "
                >
                  Faster
                </span>

                <span
                  className="
                    rounded-full
                    bg-[#E3F4EB]
                    px-2.5
                    py-1

                    text-[0.43rem]
                    font-semibold
                    uppercase
                    tracking-[0.15em]

                    text-[#508F73]
                  "
                >
                  More Capable
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            PERFORMANCE AREAS
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.58,
            ease,
          }}
          className="
            mt-7

            lg:mt-2
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-8

                    rounded-full

                    bg-[linear-gradient(90deg,#4D98D5,#B79A72)]
                  "
                />

                <span
                  className="
                    text-[0.51rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]

                    text-[#92745C]
                  "
                >
                  Performance Foundations
                </span>
              </div>

              <h3
                className="
                  mt-3

                  font-serif
                  text-[1.6rem]
                  font-normal
                  tracking-[-0.03em]

                  text-[#0B2A52]

                  sm:text-[1.85rem]
                "
              >
                We consider areas such as:
              </h3>
            </div>

            <p
              className="
                max-w-[420px]

                font-serif
                text-[0.77rem]
                leading-[1.65]

                text-[#718599]

                sm:text-right
              "
            >
              Small technical decisions work together to create a faster,
              smoother and more useful experience.
            </p>
          </div>

          {/* COLORFUL ITEMS */}

          <div
            className="
              mt-6

              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-5
            "
          >
            {performanceAreas.map((item, index) => (
              <PerformanceAreaItem
                key={item.title}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            CORE WEB VITALS
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.58,
            ease,
          }}
          className="
            mt-14

            sm:mt-16
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                text-[0.57rem]
                font-semibold
                uppercase
                tracking-[0.28em]

                text-[#92745C]
              "
            >
              Core Web Vitals
            </span>

            <span
              className="
                h-[2px]
                w-12

                rounded-full

                bg-[linear-gradient(90deg,#4D98D5,#61A889,#C98C60)]
              "
            />
          </div>

          <p
            className="
              mt-4

              max-w-[980px]

              font-serif
              text-[0.87rem]
              leading-[1.7]

              text-[#526A82]
            "
          >
            Where the project and infrastructure allow, we work towards strong
            real-world performance across areas such as:
          </p>

          <div
            className="
              mt-6

              grid
              grid-cols-1
              gap-4

              md:grid-cols-3
            "
          >
            {vitals.map((vital, index) => (
              <VitalCard
                key={vital.metric}
                vital={vital}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            THE PRINCIPLE
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            relative

            mt-12

            overflow-hidden

            rounded-[22px]

            border
            border-[#DEC6A6]

            bg-white

            px-6
            py-8

            shadow-[0_10px_32px_rgba(11,42,82,0.035)]

            sm:px-8
            sm:py-9

            lg:px-10
          "
        >
          {/* COLORFUL SOFT BG */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[linear-gradient(115deg,#FFFDFC_0%,#F7FBFF_34%,#F7F4FF_60%,#F2FAF6_80%,#FFF6EC_100%)]
            "
          />

          {/* CURVES */}

          <svg
            viewBox="0 0 350 130"
            fill="none"
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              bottom-0
              right-0

              h-full
              w-[42%]

              opacity-65
            "
          >
            <path
              d="M 20 130 C 95 70, 160 25, 350 8"
              stroke="#91BFE4"
              strokeWidth="1"
            />

            <path
              d="M 70 130 C 145 80, 215 30, 350 22"
              stroke="#B4A5E2"
              strokeWidth="1"
            />

            <path
              d="M 125 130 C 190 90, 260 50, 350 35"
              stroke="#8CC3A9"
              strokeWidth="1"
            />

            <path
              d="M 175 130 C 230 95, 295 70, 350 58"
              stroke="#D6B184"
              strokeWidth="1"
            />

            <circle
              cx="163"
              cy="68"
              r="3.3"
              fill="#8179C7"
            />

            <circle
              cx="225"
              cy="61"
              r="3"
              fill="#61A889"
            />

            <circle
              cx="290"
              cy="55"
              r="3"
              fill="#B79A72"
            />
          </svg>

          <div
            className="
              relative
              z-10

              grid
              gap-6

              lg:grid-cols-[0.3fr_1.45fr_0.35fr]
              lg:items-center
            "
          >
            {/* LABEL */}

            <div>
              <span
                className="
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.25em]

                  text-[#92745C]
                "
              >
                The Principle
              </span>

              <span
                className="
                  mt-4
                  block

                  h-[3px]
                  w-12

                  rounded-full

                  bg-[linear-gradient(90deg,#4D98D5,#8B78CC,#61A889,#B79A72)]
                "
              />
            </div>

            {/* MESSAGE */}

            <h3
              className="
                max-w-[860px]

                font-serif
                text-[1.55rem]
                font-normal
                leading-[1.15]
                tracking-[-0.035em]

                text-[#0B2A52]

                sm:text-[1.85rem]
                lg:text-[2.05rem]
              "
            >
              Performance should be{" "}
              <span
                className="
                  italic
                  text-[#A97C52]
                "
              >
                felt by the visitor
              </span>{" "}
              — not just reported by a testing tool.
            </h3>

            {/* RIGHT WORDS */}

            <div
              className="
                hidden
                text-right

                lg:block
              "
            >
              <span
                className="
                  text-[0.47rem]
                  font-semibold
                  uppercase
                  leading-[1.8]
                  tracking-[0.21em]

                  text-[#587A97]
                "
              >
                <span className="text-[#4D98D5]">Faster</span>
                <br />

                <span className="text-[#8B78CC]">Responsive</span>
                <br />

                <span className="text-[#61A889]">Stable</span>
                <br />

                <span className="text-[#B18458]">Useful</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CHECKPOINT COMPONENT
========================================================= */

function Checkpoint({
  left,
  top,
  delay,
  reduceMotion,
  dot,
  ring,
  line,
  text,
  second,
}: {
  left: string;
  top: string;
  delay: number;
  reduceMotion: boolean;
  dot: string;
  ring: string;
  line: string;
  text: string;
  second: string;
}) {
  return (
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
      }}
      transition={{
        duration: 0.45,
        delay,
      }}
      className={`
        absolute

        ${left}
        ${top}
      `}
    >
      <span
        className={`
          absolute
          bottom-[18px]
          left-1/2

          h-[58px]
          w-px

          -translate-x-1/2

          ${line}
        `}
      />

      <motion.span
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          relative
          z-10

          block
          h-4
          w-4

          rounded-full

          border-[4px]

          shadow-[0_4px_12px_rgba(11,42,82,0.12)]

          ${ring}
          ${dot}
        `}
      />

      <span
        className="
          absolute
          -top-[58px]
          left-0

          w-[125px]

          text-[0.49rem]
          font-semibold
          uppercase
          leading-[1.5]
          tracking-[0.19em]

          text-[#0B2A52]
        "
      >
        {text}
        <br />
        {second}
      </span>
    </motion.div>
  );
}