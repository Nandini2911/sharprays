"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Eye,
  Fingerprint,
  Heart,
  Layers3,
  Target,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Reach",
    text: "Reach can put your brand in front of someone.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Recognition",
    text: "Recognition helps them know who you are.",
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Relevance",
    text: "Relevance gives them a reason to care.",
    icon: Target,
  },
  {
    number: "04",
    title: "Consistency",
    text: "Consistency gives them a reason to remember.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Trust",
    text: "And trust gives them a reason to act.",
    icon: Heart,
  },
];

export default function SocialMediaPointOfView() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-120px",
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
         bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
        {/* =====================================================
          BACKGROUND SHAPES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* TOP RIGHT CIRCLE */}

        <div
          className="
            absolute
            -right-[25vw]
            -top-[15vw]
            h-[58vw]
            w-[58vw]
            rounded-full
            bg-[#6285AD]/6

            md:-right-[12vw]
            md:-top-[12vw]
            md:h-[42vw]
            md:w-[42vw]
          "
        />

        {/* BOTTOM LEFT CIRCLE */}

        <div
          className="
            absolute
            -bottom-[25vw]
            -left-[25vw]
            h-[55vw]
            w-[55vw]
            rounded-full
            bg-[#C6A77A]/10

            md:-bottom-[18vw]
            md:-left-[12vw]
            md:h-[38vw]
            md:w-[38vw]
          "
        />
      </div>
     
      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            TOP INTRO
        ====================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center gap-3"
          >
           <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />

            <span
              className="
                text-[9px]
               
                tracking-[0.28em]
                text-[#B79A72]
                sm:text-[10px]
              "
            >
              OUR POINT OF VIEW
            </span>

             <span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 1,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-6
              max-w-[850px]
              text-[2.15rem]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              sm:text-[2.65rem]
              md:text-[3.05rem]
              lg:text-[3.45rem]
            "
          >
            Social Media Should Build{" "}
            <span className="font-normal text-[#B79A72]">
              Recognition,
            </span>{" "}
            Not Just Reach.
          </motion.h2>

          {/* INTRO COPY */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-6
              max-w-[620px]
              text-[13px]
              leading-7
              text-[#0B2A52]/50
              sm:text-[14px]
            "
          >
            That is why our approach to social media marketing goes beyond
            filling a content calendar.
          </motion.p>
        </div>

        {/* =========================================================
            PROGRESSION / STAIRCASE
        ========================================================== */}

        <div
          className="
            relative
            mt-16
            sm:mt-20
            lg:mt-24
          "
        >
          {/* BASE CONNECTING LINE */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={
              isInView
                ? {
                    scaleX: 1,
                  }
                : {}
            }
            transition={{
              duration: 1.4,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-[42px]
              left-[5%]
              right-[5%]
              hidden
              h-px
              origin-left
              bg-gradient-to-r
              from-transparent
              via-[#B79A72]/35
              to-transparent
              lg:block
            "
          />

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
              lg:items-end
              lg:gap-3
              xl:gap-4
            "
          >
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              const desktopLift = [
                "lg:translate-y-[64px]",
                "lg:translate-y-[44px]",
                "lg:translate-y-[24px]",
                "lg:translate-y-[4px]",
                "lg:-translate-y-[16px]",
              ][index];

              return (
                <motion.div
                  key={stage.number}
                  initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.96,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.85,
                    delay: 0.25 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    group
                    relative
                    ${desktopLift}
                  `}
                >
                  {/* CARD */}

                  <div
                    className="
                      relative
                      min-h-[210px]
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-white
                      bg-white/75
                      p-5
                      shadow-[0_22px_70px_rgba(11,42,82,0.06)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      sm:p-6
                      lg:min-h-[240px]
                      hover:-translate-y-3
                      hover:border-[#B79A72]/20
                      hover:bg-white
                      hover:shadow-[0_32px_90px_rgba(11,42,82,0.11)]
                    "
                  >
                    {/* CARD LIGHT */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-14
                        -top-14
                        h-36
                        w-36
                        rounded-full
                        bg-[#DCE8F6]/45
                        blur-[40px]
                        transition-all
                        duration-700
                        group-hover:scale-125
                      "
                    />

                    {/* NUMBER */}

                    <div className="flex items-center justify-between">
                     

                      {/* ICON */}

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#0B2A52]/[0.06]
                          bg-[#F8F4EE]
                          text-[#B79A72]
                          transition-all
                          duration-500
                          group-hover:rotate-[-8deg]
                          group-hover:bg-[#0B2A52]
                          group-hover:text-white
                        "
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-7
                        text-[17px]
                        font-medium
                        tracking-[-0.02em]
                        text-[#0B2A52]
                      "
                    >
                      {stage.title}
                    </h3>

                    {/* LINE */}

                    <div
                      className="
                        mt-4
                        h-px
                        w-8
                        bg-[#B79A72]/50
                        transition-all
                        duration-500
                        group-hover:w-14
                      "
                    />

                    {/* TEXT */}

                    <p
                      className="
                        mt-4
                        text-[12px]
                        leading-6
                        text-[#0B2A52]/50
                        sm:text-[13px]
                      "
                    >
                      {stage.text}
                    </p>

                    {/* HOVER CORNER */}

                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        h-7
                        w-7
                        translate-y-2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#0B2A52]/[0.06]
                        text-[#0B2A52]/25
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight size={11} />
                    </div>
                  </div>

                  {/* CONNECTION DOT */}

                  <div
                    className="
                      relative
                      z-20
                      mx-auto
                      mt-5
                      hidden
                      h-[9px]
                      w-[9px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F7F9FC]
                      ring-1
                      ring-[#B79A72]/35
                      lg:flex
                    "
                  >
                    <motion.span
                      animate={{
                        scale: [0.6, 1, 0.6],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: index * 0.22,
                      }}
                      className="
                        h-[3px]
                        w-[3px]
                        rounded-full
                        bg-[#B79A72]
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.97,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
            delay: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-24
            max-w-[1050px]
            sm:mt-28
            lg:mt-36
          "
        >
          {/* GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-8
              rounded-[50px]
              bg-[#0B2A52]/[0.045]
              blur-[55px]
            "
          />

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              bg-[#0B2A52]
              px-6
              py-9
              shadow-[0_35px_100px_rgba(11,42,82,0.18)]
              sm:px-10
              sm:py-11
              lg:px-14
              lg:py-12
            "
          >
            {/* INNER GRADIENT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.06]
                via-transparent
                to-[#B79A72]/10
              "
            />

            {/* DECORATIVE CIRCLE */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-28
                h-[300px]
                w-[300px]
                rounded-full
                border
                border-white/[0.05]
                transition-transform
                duration-1000
                group-hover:scale-110
              "
            />

            <div
              className="
                relative
                z-10
                grid
                items-center
                gap-7
                lg:grid-cols-[auto_1fr]
                lg:gap-10
              "
            >
              {/* SYMBOL */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.07]
                  text-[#D2B58B]
                  backdrop-blur-xl
                "
              >
                <Fingerprint
                  size={22}
                  strokeWidth={1.4}
                />
              </div>

              {/* TEXT */}

              <p
                className="
                  max-w-[830px]
                  text-[17px]
                  font-medium
                  leading-[1.7]
                  tracking-[-0.015em]
                  text-white/90
                  sm:text-[19px]
                  lg:text-[21px]
                "
              >
                We build social presence around what you want your audience to{" "}
                <span className="text-[#D2B58B]">
                  see, understand, remember and do next.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}