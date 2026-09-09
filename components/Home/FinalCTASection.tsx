"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
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
            -right-[250px]
            -top-[285px]

            h-[760px]
            w-[760px]

            rounded-full

            bg-gradient-to-br
            from-[#F4F8FB]
            via-[#EDF3F8]
            to-[#E5EEF5]

            sm:-right-[230px]
            sm:-top-[270px]

            lg:-right-[210px]
            lg:-top-[270px]
            lg:h-[800px]
            lg:w-[800px]
          "
        />

        {/* TOP RIGHT SOFT BLUE LIGHT */}

        <div
          className="
            absolute
            -right-[110px]
            -top-[120px]

            h-[430px]
            w-[430px]

            rounded-full

            bg-[#CFE3F1]/25

            blur-[90px]
          "
        />

        {/* BOTTOM LEFT LARGE WARM CIRCLE */}

        <div
          className="
            absolute
            -bottom-[430px]
            -left-[300px]

            h-[760px]
            w-[760px]

            rounded-full

            bg-gradient-to-br
            from-[#FBFAF7]
            via-[#F8F5EF]
            to-[#F2ECE4]

            sm:-bottom-[410px]
            sm:-left-[280px]

            lg:-bottom-[420px]
            lg:-left-[250px]
            lg:h-[800px]
            lg:w-[800px]
          "
        />

        {/* BOTTOM LEFT GOLD ATMOSPHERE */}

        <div
          className="
            absolute
            -bottom-[240px]
            -left-[100px]

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#B79A72]/[0.05]

            blur-[100px]
          "
        />

        {/* VERY LIGHT LARGE OUTLINE */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[520px]
            w-[520px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            border
            border-[#0B2A52]/[0.025]
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
            border-[#B79A72]/[0.07]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-[1100px]

          px-5

          text-center

          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            EYEBROW
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            duration: 0.7,
            ease,
          }}
          className="
            flex
            items-center
            justify-center
            gap-4
          "
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
              font-semibold

              uppercase

              tracking-[0.3em]

              text-[#B79A72]

              sm:text-[10px]
            "
          >
            One Conversation
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

        {/* ===================================================
            HEADING
        ==================================================== */}

        <div
          className="
            mt-7
            overflow-hidden
            pb-3
          "
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
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
              duration: 0.9,
              ease,
            }}
            className="
              mx-auto
              max-w-[920px]

              text-[2.15rem]
              font-medium

              leading-[1.02]

              tracking-[-0.055em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.15rem]
              xl:text-[3.35rem]
            "
          >
            Let&apos;s Make Something

            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#9A7D59]
                via-[#B79A72]
                to-[#D2B990]

                bg-clip-text

                font-serif
                font-normal
                italic

                text-transparent
              "
            >
              People Notice.
            </span>
          </motion.h2>
        </div>

        {/* ===================================================
            DESCRIPTION
        ==================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
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
            duration: 0.7,
            delay: 0.16,
            ease,
          }}
          className="
            mx-auto
            mt-6

            max-w-[540px]

            text-[13px]

            leading-7

            text-[#0B2A52]/55

            sm:text-[14px]
            sm:leading-7
          "
        >
          Your next stage of growth could start

          <br className="hidden sm:block" />

          with one conversation.
        </motion.p>

        {/* ===================================================
            PREMIUM COMPACT BLUE GLASS CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
            duration: 0.7,
            delay: 0.28,
            ease,
          }}
          className="mt-8"
        >
          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease,
            }}
            className="
              group

              relative
              isolate

              inline-flex

              items-center

              gap-3

              overflow-hidden

              rounded-full

              border
              border-[#6FA5CA]/35

              bg-gradient-to-r
              from-[#F0F8FD]/95
              via-[#DFEFF9]/95
              to-[#CBE7F6]/95

              py-2.5
              pl-5
              pr-2.5

              text-[12px]
              font-semibold

              tracking-[-0.01em]

              text-[#0B2A52]

              shadow-[0_12px_35px_-22px_rgba(45,116,165,0.45),inset_0_1px_0_rgba(255,255,255,0.95)]

              backdrop-blur-xl

              transition-all
              duration-500

              hover:border-[#4D8CB8]/45

              hover:from-[#E5F3FB]
              hover:via-[#D4EBF8]
              hover:to-[#BDDFF2]

              hover:shadow-[0_18px_42px_-24px_rgba(45,116,165,0.5),inset_0_1px_0_rgba(255,255,255,0.95)]

              sm:text-[13px]
            "
          >
            {/* INNER BLUE LIGHT */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                -bottom-8
                left-1/2

                -z-10

                h-16
                w-[80%]

                -translate-x-1/2

                rounded-full

                bg-[#65A9D4]/20

                blur-[22px]

                transition-all
                duration-500

                group-hover:bg-[#559BC8]/30
              "
            />

            {/* IOS-LIKE TOP REFLECTION */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                left-[12%]
                right-[15%]
                top-[2px]

                h-px

                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent

                opacity-90
              "
            />

            {/* MOVING GLASS SHINE */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                -left-[45%]
                top-0

                h-full
                w-[30%]

                skew-x-[-20deg]

                bg-gradient-to-r
                from-transparent
                via-white/75
                to-transparent

                transition-[left]
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:left-[120%]
              "
            />

            {/* TEXT */}

            <span className="relative z-10">
              Start a Conversation
            </span>

            {/* ARROW CIRCLE */}

            <span
              className="
                relative
                z-10

                flex

                h-9
                w-9

                shrink-0

                items-center
                justify-center

                rounded-full

                border
                border-[#0B2A52]/10

                bg-gradient-to-br
                from-[#0B2A52]/[0.06]
                to-[#4F91BD]/15

                shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]

                backdrop-blur-md

                transition-all
                duration-500

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:rotate-45

                group-hover:border-[#0B2A52]/20

                group-hover:bg-[#0B2A52]
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="
                  text-[#B79A72]

                  transition-colors
                  duration-500

                  group-hover:text-white
                "
              />
            </span>
          </motion.a>
        </motion.div>

        {/* ===================================================
            REASSURANCE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.42,
          }}
          className="
            mt-6

            flex

            items-center
            justify-center

            gap-3
          "
        >
          <span className="h-px w-6 bg-[#D8DEE6]" />

          <p
            className="
              max-w-[520px]

              text-[10px]

              leading-5

              text-[#0B2A52]/38

              sm:text-[11px]
            "
          >
            No pressure. No sales pitch. Just a conversation
            about your brand.
          </p>

          <span className="h-px w-6 bg-[#D8DEE6]" />
        </motion.div>

        {/* ===================================================
            BOTTOM LINE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease,
          }}
          style={{
            transformOrigin: "center",
          }}
          className="
            mx-auto

            mt-12

            h-px

            max-w-[620px]

            bg-gradient-to-r
            from-transparent
            via-[#0B2A52]/10
            to-transparent
          "
        />
      </div>
    </section>
  );
}