"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    number: "01",
    text: "Don’t create just because you can.",
    accent: "CREATE",
  },
  {
    number: "02",
    text: "Don’t chase numbers that don’t matter.",
    accent: "MEASURE",
  },
  {
    number: "03",
    text: "Don’t confuse attention with impact.",
    accent: "IMPACT",
  },
  {
    number: "04",
    text: "Don’t stop learning because something worked once.",
    accent: "LEARN",
  },
  {
    number: "05",
    text: "And never be afraid to ask, “Why?”",
    accent: "QUESTION",
  },
];

export default function TheWayWeThink() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-28 xl:px-20 xl:py-32">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3"
          >
           

            <span className="h-px w-9 bg-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72] sm:text-[10px]">
              The Way We Think
            </span>
          </motion.div>

          {/* Intro */}
          

        </div>


        {/* =====================================================
            BIG HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 sm:mt-12 lg:mt-16"
        >
          <h2 className="max-w-[1100px] text-[clamp(3rem,4vw,4.5rem)]  leading-[0.88] tracking-[-0.055em] text-[#0B2A52]">
            A Few Things
            <br />
            We’ll Always
            <span className="relative ml-2 inline-block text-[#B79A72]">
              Believe.
              
              {/* Small underline */}
              <span className="absolute -bottom-2 left-1 h-[2px] w-[45%] bg-[#B79A72] sm:-bottom-3" />
            </span>
          </h2>
        </motion.div>


        {/* =====================================================
            IMAGE + STATEMENT INTRO
        ===================================================== */}

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-[280px_1fr] lg:gap-16 xl:mt-24 xl:grid-cols-[320px_1fr]">

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[320px] lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden">

              <img
                src="/about/theway.png"
                alt="The way we think"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
              />

              {/* Navy overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/40 via-transparent to-transparent" />

              {/* Gold corner */}
              <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-[#B79A72] sm:h-20 sm:w-20" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  SHARPRAYS
                </span>
              </div>

            </div>

            {/* Small number */}
            <div className="absolute -bottom-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#B79A72] text-[10px] font-semibold tracking-wider text-white">
              08
            </div>
          </motion.div>


          {/* INTRO STATEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center"
          >
            <div className="max-w-[850px]">

              <span className="mb-5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72]">
                OUR PRINCIPLES
              </span>

              <p className="text-[clamp(1.65rem,3vw,3rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#0B2A52]">
                We don’t believe in doing more for the sake of doing more.
                <span className="text-[#0B2A52]/35">
                  {" "}
                  We believe in doing what matters.
                </span>
              </p>

              <div className="mt-7 h-px w-20 bg-[#B79A72]" />

            </div>
          </motion.div>

        </div>


        {/* =====================================================
            BELIEFS
        ===================================================== */}

        <div className="mt-16 border-t border-[#0B2A52]/10 sm:mt-20 lg:mt-28">

          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative border-b border-[#0B2A52]/10"
            >

              <div className="grid grid-cols-[52px_1fr] gap-5 py-7 sm:grid-cols-[80px_1fr_100px] sm:items-center sm:gap-8 sm:py-9 lg:grid-cols-[100px_1fr_140px] lg:py-11">

                {/* NUMBER */}
                <div className="relative flex h-full items-start sm:items-center">

                  <span className="text-[11px] font-medium tracking-[0.12em] text-[#B79A72] sm:text-xs">
                    {belief.number}
                  </span>

                  <span className="absolute right-0 top-0 hidden h-full w-px bg-[#0B2A52]/10 sm:block" />

                </div>


                {/* STATEMENT */}
                <div className="relative overflow-hidden">

                  <motion.p
                    whileHover={{ x: 8 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      max-w-[950px]
                      text-[clamp(1.5rem,3.2vw,3.6rem)]
                      font-medium
                      leading-[1.02]
                      tracking-[-0.04em]
                      text-[#0B2A52]
                    "
                  >
                    {belief.text}
                  </motion.p>

                  {/* Gold hover line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.45 }}
                    className="absolute bottom-0 left-0 h-[2px] bg-[#B79A72]"
                  />

                </div>


                {/* KEYWORD */}
                <div className="hidden justify-end sm:flex">

                  <span className="border border-[#0B2A52]/10 px-3 py-2 text-[8px] font-semibold tracking-[0.18em] text-[#0B2A52]/45 transition-all duration-300 group-hover:border-[#B79A72]/60 group-hover:text-[#B79A72]">
                    {belief.accent}
                  </span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>


        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col gap-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between lg:mt-20"
        >

          <div>
            <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72]">
              THE SIMPLE VERSION
            </span>

            <p className="max-w-[700px] text-[clamp(1.3rem,2vw,2rem)] font-medium leading-[1.15] tracking-[-0.025em] text-[#0B2A52]">
              Think harder. Create with purpose. Keep learning.
            </p>
          </div>

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B2A52]/45">
              Principles over trends
            </span>

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -right-32 top-[25%] h-72 w-72 rounded-full border border-[#B79A72]/10 sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-20 top-[27%] h-52 w-52 rounded-full border border-[#0B2A52]/5 sm:h-72 sm:w-72" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-[#0B2A52]/5" />

    </section>
  );
}