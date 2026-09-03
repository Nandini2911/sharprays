"use client";

import { motion } from "framer-motion";

const beliefs = [
  "Don't create just because you can.",
  "Don't chase numbers that don't matter.",
  "Don't confuse attention with impact.",
  "Don't stop learning because something worked once.",
  'Never be afraid to ask, "Why?"',
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function TheWayWeThink() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto max-w-[900px] text-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B79A72]">
              08
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0B2A52]/40">
              The Way We Think
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="
              text-[clamp(3rem,6vw,6.3rem)]
              font-medium
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            A Few Things
            <br />
            We’ll Always{" "}
            <span className="text-[#B79A72]">Believe.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="
              mx-auto
              mt-7
              max-w-[430px]
              text-[13px]
              leading-[1.65]
              text-[#0B2A52]/50
              sm:text-[14px]
            "
          >
            The principles behind the work.
            <br />
            Simple ideas we come back to again and again.
          </motion.p>

        </div>


        {/* =====================================================
            LARGE IMAGE
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[1180px]
            sm:mt-18
            lg:mt-20
          "
        >
          <div
            className="
              relative
              aspect-[16/8.4]
              w-full
              overflow-hidden
              bg-[#0B2A52]
            "
          >
            <img
              src="/whatwedo/home_why.png"
              alt="Creative team discussing ideas and strategy"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1600ms]
                hover:scale-[1.02]
              "
            />

            <div className="absolute inset-0 bg-[#0B2A52]/[0.08]" />

            {/* Top label */}
            <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/80">
                  The mindset behind the work
                </span>
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                SHARPRAYS
              </span>
            </div>
          </div>

          {/* Image caption */}
          <div className="mt-4 flex items-start justify-between gap-6">
            <p className="max-w-[330px] text-[9px] uppercase leading-[1.55] tracking-[0.16em] text-[#0B2A52]/35">
              We question the obvious before we build the obvious.
            </p>

            <span className="text-[9px] tracking-[0.16em] text-[#B79A72]">
              QUESTION · CHALLENGE · CREATE
            </span>
          </div>
        </motion.div>


        {/* =====================================================
            STATEMENT
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="
            mx-auto
            mt-20
            grid
            max-w-[1180px]
            gap-8
            border-t
            border-[#0B2A52]/10
            pt-10
            sm:mt-24
            sm:pt-12
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-16
          "
        >
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B79A72]">
              How we think
            </span>
          </div>

          <h3
            className="
              max-w-[800px]
              text-[clamp(2rem,4vw,4.2rem)]
              font-medium
              leading-[0.98]
              tracking-[-0.055em]
            "
          >
            We'd rather ask
            <br />
            <span className="text-[#B79A72]">
              better questions.
            </span>
          </h3>
        </motion.div>


        {/* =====================================================
            BELIEFS
        ===================================================== */}
        <div className="mx-auto mt-12 max-w-[1180px] sm:mt-14">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#0B2A52]/10
              pb-4
            "
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0B2A52]/35">
              What we believe
            </span>

            <span className="text-[9px] uppercase tracking-[0.18em] text-[#B79A72]">
              Our principles
            </span>
          </motion.div>


          {/* =================================================
              BELIEF GRID
          ================================================= */}
          <div className="grid sm:grid-cols-2 sm:gap-x-12">

            {beliefs.map((belief, index) => {
              const isLast = index === beliefs.length - 1;

              return (
                <motion.div
                  key={belief}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.07,
                    ease,
                  }}
                  className={`
                    group
                    border-b
                    border-[#0B2A52]/10
                    ${isLast ? "sm:col-span-2 sm:flex sm:justify-center" : ""}
                  `}
                >
                  <div
                    className={`
                      flex
                      min-h-[92px]
                      items-center
                      gap-5
                      py-6
                      sm:min-h-[105px]
                      sm:py-7
                      ${isLast ? "sm:w-[calc(50%-1.5rem)]" : ""}
                    `}
                  >

                    {/* Number */}
                    <span
                      className="
                        w-5
                        shrink-0
                        text-[8px]
                        font-semibold
                        tracking-[0.12em]
                        text-[#B79A72]
                      "
                    >
                      0{index + 1}
                    </span>


                    {/* Belief */}
                    <p
                      className="
                        flex-1
                        text-[clamp(1.05rem,1.7vw,1.4rem)]
                        font-medium
                        leading-[1.15]
                        tracking-[-0.025em]
                        text-[#0B2A52]/75
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#0B2A52]
                      "
                    >
                      {belief}
                    </p>


                    {/* Arrow */}
                    <span
                      className="
                        text-[13px]
                        text-[#0B2A52]/15
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#B79A72]
                      "
                    >
                      ↗
                    </span>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>


        {/* =====================================================
            FINAL THOUGHT
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="
            mx-auto
            mt-16
            max-w-[600px]
            text-center
            sm:mt-20
          "
        >
          <div className="mx-auto mb-5 h-px w-10 bg-[#B79A72]" />

          <p className="text-[13px] leading-[1.6] text-[#0B2A52]/45 sm:text-[14px]">
            Because the best work isn't about having all the answers.
          </p>

          <p
            className="
              mt-1
              text-[18px]
              font-medium
              tracking-[-0.025em]
              sm:text-[20px]
            "
          >
            It's about asking better questions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}