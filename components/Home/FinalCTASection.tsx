"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND DETAIL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#0B2A52]/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[340px]
          w-[340px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#C6A77A]/[0.08]
        "
      />

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
        =================================================== */}

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
          }}
          className="
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-10 bg-[#C6A77A]" />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#C6A77A]
            "
          >
            One Conversation
          </span>

          <span className="h-px w-10 bg-[#C6A77A]" />
        </motion.div>

        {/* ===================================================
            MAIN HEADING
        =================================================== */}

        <div className="mt-8 overflow-hidden pb-3">
          <motion.h2
            initial={{
              opacity: 0,
              y: 65,
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              max-w-[950px]
              font-[var(--font-new-york)]
              text-[clamp(3.2rem,7vw,7rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.07em]
              text-[#0B2A52]
            "
          >
            Let&apos;s Make Something
            <br />
            <span className="italic text-[#C6A77A]">
              People Notice.
            </span>
          </motion.h2>
        </div>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.18,
          }}
          className="
            mx-auto
            mt-7
            max-w-[560px]
            text-sm
            leading-7
            text-[#66758A]
            sm:text-base
            sm:leading-8
          "
        >
          Your next stage of growth could start
          <br className="hidden sm:block" />
          with one conversation.
        </motion.p>

        {/* ===================================================
            CTA
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.3,
          }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-[#0B2A52]
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#123965]
              sm:px-8
              sm:py-[18px]
            "
          >
            <span>Start a Conversation</span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            >
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="text-[#C6A77A]"
              />
            </span>
          </a>
        </motion.div>

        {/* ===================================================
            REASSURANCE
        =================================================== */}

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
            delay: 0.45,
          }}
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-6 bg-[#D8DEE6]" />

          <p
            className="
              text-[11px]
              leading-5
              text-[#98A2B3]
              sm:text-xs
            "
          >
            No pressure. No sales pitch. Just a conversation
            about your brand.
          </p>

          <span className="h-px w-6 bg-[#D8DEE6]" />
        </motion.div>

        {/* ===================================================
            BOTTOM DETAIL
        =================================================== */}

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
            duration: 0.8,
            delay: 0.55,
          }}
          className="
            mx-auto
            mt-16
            h-px
            max-w-[700px]
            bg-[#E7ECF2]
          "
        />
      </div>
    </section>
  );
}