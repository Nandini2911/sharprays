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
  className="
    mt-7
    sm:mt-8
  "
>
  <motion.a
    href="/contact"
    whileHover={{
      y: -2,
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
      inline-flex

      min-h-[46px]

      items-center
      justify-center

      overflow-hidden

      rounded-[16px]

      border
      border-[#6285AD]/30

      bg-white/80

      px-5
      py-[11px]

      text-[13px]
      font-medium
      tracking-[-0.01em]

      text-[#0B2A52]

      shadow-[0_8px_30px_rgba(11,42,82,0.08)]

      backdrop-blur-[8px]

      transition-all
      duration-300
      ease-out

      hover:border-[#6285AD]/40
      hover:bg-white
      hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

      active:translate-y-0

      sm:min-h-[48px]
      sm:px-6
      sm:py-3
      sm:text-[14px]

      md:text-[15px]
    "
  >
    {/* STATIC SOFT INNER BORDER */}

    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-[2px]

        rounded-[13px]

        border
        border-white/60
      "
    />

    {/* SUBTLE TOP LIGHT */}

    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-x-4
        top-0

        h-px

        bg-gradient-to-r
        from-transparent
        via-white
        to-transparent
      "
    />

    {/* TEXT */}

    <span
      className="
        relative
        z-10
        whitespace-nowrap
        text-[#0B2A52]
      "
    >
      Start a Conversation
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