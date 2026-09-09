"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { Sparkles } from "lucide-react";
import { useRef } from "react";

const beliefs = [
  {
    number: "01",
    title: "Create with intention.",
    text: "Don't create just because you can.",
  },
  {
    number: "02",
    title: "Measure what matters.",
    text: "Don't chase numbers that don't matter.",
  },
  {
    number: "03",
    title: "Look beyond attention.",
    text: "Don't confuse attention with impact.",
  },
  {
    number: "04",
    title: "Keep moving.",
    text: "Don't stop learning because something worked once.",
  },
  {
    number: "05",
    title: "Stay curious.",
    text: 'Never be afraid to ask, "Why?"',
  },
];

const positions = [
  "lg:left-[5%] lg:top-[2%]",
  "lg:left-[58%] lg:top-[17%]",
  "lg:left-[25%] lg:top-[38%]",
  "lg:left-[62%] lg:top-[59%]",
  "lg:left-[13%] lg:top-[78%]",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function TheWayWeThink() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);

  const reduceMotion = useReducedMotion();

  /* =====================================================
     REAL-TIME SCROLL PROGRESS
  ====================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 76%", "end 28%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.22,
  });

  const pathProgress = reduceMotion
    ? scrollYProgress
    : smoothProgress;

  /* =====================================================
     DESKTOP TRAVELING DOT
  ====================================================== */

  const dotX = useMotionValue(140);
  const dotY = useMotionValue(88);

  useMotionValueEvent(pathProgress, "change", (latest) => {
    const path = desktopPathRef.current;

    if (!path) return;

    const length = path.getTotalLength();

    const point = path.getPointAtLength(
      length * Math.min(Math.max(latest, 0), 1)
    );

    dotX.set(point.x);
    dotY.set(point.y);
  });

  /* =====================================================
     MOBILE TRAVELING DOT
  ====================================================== */

  const mobileDotY = useTransform(
    pathProgress,
    [0, 1],
    [12, 888]
  );

  return (
    <section
      ref={sectionRef}
      id="the-way-we-think"
      className="
        relative
        overflow-hidden
        bg-white
        pb-20
        pt-14
        text-[#0B2A52]

        sm:pb-24
        sm:pt-16

        lg:pb-24
        lg:pt-16
      "
    >
      {/* =====================================================
          LARGE CROPPED BACKGROUND CIRCLES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* TOP RIGHT LARGE BLUE CIRCLE */}

        <div
          className="
            absolute

            -right-[270px]
            -top-[330px]

            h-[760px]
            w-[760px]

            rounded-full

            bg-gradient-to-br
            from-[#F5F8FB]
            via-[#EDF3F8]
            to-[#E4EDF5]

            sm:-right-[250px]
            sm:-top-[320px]

            lg:-right-[220px]
            lg:-top-[310px]
            lg:h-[800px]
            lg:w-[800px]
          "
        />

        {/* TOP RIGHT BLUE GLOW */}

        <div
          className="
            absolute

            -right-[100px]
            -top-[120px]

            h-[450px]
            w-[450px]

            rounded-full

            bg-[#CFE5F3]/25

            blur-[95px]
          "
        />

        {/* BOTTOM LEFT LARGE CREAM CIRCLE */}

        <div
          className="
            absolute

            -bottom-[430px]
            -left-[310px]

            h-[760px]
            w-[760px]

            rounded-full

            bg-gradient-to-br
            from-[#FBFAF7]
            via-[#F7F4EE]
            to-[#F0EAE1]

            sm:-bottom-[420px]
            sm:-left-[290px]

            lg:-bottom-[410px]
            lg:-left-[250px]
            lg:h-[800px]
            lg:w-[800px]
          "
        />

        {/* BOTTOM LEFT GOLD GLOW */}

        <div
          className="
            absolute

            -bottom-[220px]
            -left-[110px]

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#B79A72]/[0.05]

            blur-[100px]
          "
        />

        {/* =================================================
            EXISTING SOFT ATMOSPHERE
        ================================================== */}

        <div
          className="
            absolute
            left-[7%]
            top-[31%]

            h-[320px]
            w-[320px]

            rounded-full

            bg-[#DCEFFA]/30

            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[6%]
            top-[52%]

            h-[360px]
            w-[360px]

            rounded-full

            bg-[#D8EDF8]/25

            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[8%]
            left-[35%]

            h-[280px]
            w-[440px]

            rounded-full

            bg-[#EEF8FD]/70

            blur-[130px]
          "
        />

        {/* LARGE FAINT OUTLINE */}

        <div
          className="
            absolute

            right-[-170px]
            top-[-190px]

            h-[560px]
            w-[560px]

            rounded-full

            border
            border-[#0B2A52]/[0.025]
          "
        />

        <div
          className="
            absolute

            bottom-[-210px]
            left-[-170px]

            h-[500px]
            w-[500px]

            rounded-full

            border
            border-[#B79A72]/[0.06]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-[1280px]

          px-5

          sm:px-8
          lg:px-12
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mx-auto
            max-w-[1040px]
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-12

                bg-gradient-to-r
                from-transparent
                to-[#B79A72]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#B79A72]
                sm:text-[10px]
              "
            >
              The Way We Think
            </span>

            <span
              className="
                h-px
                w-12

                bg-gradient-to-l
                from-transparent
                to-[#B79A72]
              "
            />
          </div>

          {/* MAIN HEADING */}

          <h2
            className="
              mx-auto
              mt-7

              max-w-[1000px]

              leading-[1.02]

              tracking-[-0.055em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            <span className="block pb-1">
              Five simple beliefs.
            </span>

            <span
              className="
                block

                pb-[0.14em]

                bg-gradient-to-r
                from-[#9A7D59]
                via-[#B79A72]
                to-[#D2B990]

                bg-clip-text

                text-transparent
              "
            >
              One way of thinking.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6

              max-w-[660px]

              font-serif

              text-[15px]

              leading-7

              text-[#0B2A52]/50

              sm:text-[17px]
              sm:leading-8
            "
          >
            Not rules. Not formulas. Just the principles
            that keep our work thoughtful, intentional
            and honest.
          </p>
        </motion.div>

        {/* =====================================================
            EDITORIAL PATH
        ====================================================== */}

        <div
          className="
            relative

            mx-auto

            mt-12

            max-w-[1120px]

            sm:mt-14

            lg:mt-16
            lg:h-[900px]
          "
        >
          {/* =================================================
              DESKTOP SVG
          ================================================== */}

          <svg
            aria-hidden="true"
            viewBox="0 0 1120 900"
            preserveAspectRatio="none"
            className="
              pointer-events-none

              absolute
              inset-0
              z-0

              hidden

              h-full
              w-full

              lg:block
            "
          >
            <defs>
              {/* BASE PATH */}

              <linearGradient
                id="pathBase"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#B79A72"
                  stopOpacity="0.15"
                />

                <stop
                  offset="45%"
                  stopColor="#79B4D8"
                  stopOpacity="0.18"
                />

                <stop
                  offset="100%"
                  stopColor="#0B2A52"
                  stopOpacity="0.08"
                />
              </linearGradient>

              {/* ACTIVE PATH */}

              <linearGradient
                id="pathActive"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#B79A72"
                />

                <stop
                  offset="38%"
                  stopColor="#73AED3"
                />

                <stop
                  offset="72%"
                  stopColor="#4385B1"
                />

                <stop
                  offset="100%"
                  stopColor="#B79A72"
                />
              </linearGradient>

              {/* DOT GLOW */}

              <filter
                id="dotGlow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  stdDeviation="5"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* STATIC PATH */}

            <path
              d="
                M 140 88
                C 320 80, 490 140, 735 190
                C 995 245, 875 345, 520 385
                C 275 415, 355 505, 810 570
                C 1020 600, 910 705, 430 755
                C 300 770, 245 825, 220 860
              "
              fill="none"
              stroke="url(#pathBase)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* REAL-TIME ACTIVE PATH */}

            <motion.path
              ref={desktopPathRef}
              d="
                M 140 88
                C 320 80, 490 140, 735 190
                C 995 245, 875 345, 520 385
                C 275 415, 355 505, 810 570
                C 1020 600, 910 705, 430 755
                C 300 770, 245 825, 220 860
              "
              fill="none"
              stroke="url(#pathActive)"
              strokeWidth="2.4"
              strokeLinecap="round"
              style={{
                pathLength: pathProgress,
              }}
            />

            {/* MOVING DOT */}

            <motion.circle
              cx={dotX}
              cy={dotY}
              r="15"
              fill="#72ACD0"
              opacity="0.09"
            />

            <motion.circle
              cx={dotX}
              cy={dotY}
              r="6"
              fill="#FFFFFF"
              stroke="#B79A72"
              strokeWidth="2"
              filter="url(#dotGlow)"
            />

            <motion.circle
              cx={dotX}
              cy={dotY}
              r="2"
              fill="#B79A72"
            />
          </svg>

          {/* =================================================
              MOBILE PATH
          ================================================== */}

          <svg
            aria-hidden="true"
            viewBox="0 0 40 900"
            preserveAspectRatio="none"
            className="
              pointer-events-none

              absolute

              bottom-0
              left-[8px]
              top-0

              z-0

              h-full
              w-[40px]

              lg:hidden
            "
          >
            <defs>
              <linearGradient
                id="mobilePathActive"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#B79A72"
                />

                <stop
                  offset="52%"
                  stopColor="#65A5CD"
                />

                <stop
                  offset="100%"
                  stopColor="#B79A72"
                />
              </linearGradient>
            </defs>

            {/* FAINT ROAD */}

            <path
              d="M 20 12 L 20 888"
              fill="none"
              stroke="#0B2A52"
              strokeOpacity="0.09"
              strokeWidth="1"
            />

            {/* ACTIVE ROAD */}

            <motion.path
              d="M 20 12 L 20 888"
              fill="none"
              stroke="url(#mobilePathActive)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                pathLength: pathProgress,
              }}
            />

            {/* MOVING DOT */}

            <motion.circle
              cx="20"
              cy={mobileDotY}
              r="5.5"
              fill="white"
              stroke="#B79A72"
              strokeWidth="2"
            />
          </svg>

          {/* =================================================
              PRINCIPLES
          ================================================== */}

          <div
            className="
              relative
              z-10

              space-y-12

              pl-12

              sm:space-y-14
              sm:pl-14

              lg:h-full
              lg:space-y-0
              lg:pl-0
            "
          >
            {beliefs.map((belief, index) => (
              <motion.article
                key={belief.number}
                initial={{
                  opacity: 0,
                  y: 34,
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
                  duration: 0.65,
                  ease,
                }}
                className={`
                  group
                  relative
                  z-10

                  lg:absolute
                  lg:w-[390px]

                  ${positions[index]}
                `}
              >
                {/* NUMBER + CONNECTOR */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  {/* NUMBER */}

                  <span
                    className="
                      flex
                      h-9
                      w-9

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#B79A72]/40

                      bg-white

                      font-serif
                      text-[11px]

                      text-[#B79A72]

                      shadow-[0_8px_30px_-22px_rgba(11,42,82,0.25)]

                      transition-all
                      duration-500

                      group-hover:-translate-y-1

                      group-hover:border-[#4F8DB8]

                      group-hover:shadow-[0_12px_34px_-20px_rgba(66,136,181,0.38)]
                    "
                  >
                    {belief.number}
                  </span>

                  {/* LINE */}

                  <span
                    className="
                      h-px
                      w-8

                      bg-gradient-to-r
                      from-[#B79A72]
                      to-[#75B1D5]

                      transition-[width]
                      duration-500

                      group-hover:w-14
                    "
                  />

                  {/* DOT */}

                  <span
                    className="
                      h-[4px]
                      w-[4px]

                      rounded-full

                      bg-[#B79A72]
                    "
                  />
                </div>

                {/* CONTENT */}

                <div className="mt-4 lg:pl-1">
                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.21em]
                      text-[#B79A72]
                    "
                  >
                    Principle {belief.number}
                  </span>

                  <motion.h3
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className="
                      mt-2

                      max-w-[390px]

                      text-[27px]
                      font-medium

                      leading-[1.12]

                      tracking-[-0.04em]

                      text-[#0B2A52]

                      sm:text-[32px]

                      lg:text-[35px]
                      lg:leading-[1.1]
                    "
                  >
                    {belief.title}
                  </motion.h3>

                  {/* UNDERLINE */}

                  <span
                    className="
                      mt-4
                      block
                      h-[2px]
                      w-9

                      bg-gradient-to-r
                      from-[#B79A72]
                      via-[#67A8CF]
                      to-transparent

                      transition-[width]
                      duration-500

                      group-hover:w-20
                    "
                  />

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4

                      max-w-[340px]

                      text-[13px]

                      leading-6

                      text-[#0B2A52]/52

                      transition-all
                      duration-500

                      group-hover:translate-x-1
                      group-hover:text-[#0B2A52]/70

                      sm:text-[14px]
                    "
                  >
                    {belief.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            CLOSING
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mx-auto

            mt-14

            max-w-[850px]

            text-center

            sm:mt-16

            lg:mt-8
          "
        >
          <Sparkles
            size={14}
            strokeWidth={1.3}
            className="
              mx-auto
              text-[#B79A72]
            "
          />

          <p
            className="
              mt-5

              text-[27px]
              font-medium

              leading-[1.2]

              tracking-[-0.035em]

              text-[#0B2A52]

              sm:text-[34px]

              lg:text-[38px]
            "
          >
            The best work isn&apos;t about having
            all the answers.
          </p>

          <p
            className="
              mt-2

              inline-block

              pb-1

              bg-gradient-to-r
              from-[#9A7D59]
              via-[#B79A72]
              to-[#D2B990]

              bg-clip-text

              font-serif

              text-[26px]
              font-normal

              leading-[1.2]

              text-transparent

              sm:text-[33px]

              lg:text-[37px]
            "
          >
            It&apos;s about asking better questions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}