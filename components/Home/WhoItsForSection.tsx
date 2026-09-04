"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    number: "01",
    title: "Create with intention.",
    text: "Don't create just because you can.",
    image: "/thewaywethink/intension.png",
    position: "left",
  },
  {
    number: "02",
    title: "Measure what matters.",
    text: "Don't chase numbers that don't matter.",
    image: "/thewaywethink/measure.png",
    position: "right",
  },
  {
    number: "03",
    title: "Look beyond attention.",
    text: "Don't confuse attention with impact.",
    image: "/thewaywethink/look.png",
    position: "left",
  },
  {
    number: "04",
    title: "Keep moving.",
    text: "Don't stop learning because something worked once.",
    image: "/thewaywethink/keep_move.png",
    position: "right",
  },
  {
    number: "05",
    title: "Stay curious.",
    text: 'Never be afraid to ask, "Why?"',
    image: "/thewaywethink/stay.png",
    position: "left",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function TheWayWeThink() {
  return (
    <section
      id="wb0eha"
      className="relative w-full overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-20 sm:px-8 md:px-10 lg:px-14 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between border-b border-[#0B2A52]/10 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-[6px] w-[6px] rounded-full bg-[#B79A72]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#0B2A52]/45 sm:text-[10px]">
              The Way We Think
            </span>
          </div>

          <span className="text-[9px] tracking-[0.2em] text-[#B79A72]">
            08
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 md:px-10 lg:px-14 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#B79A72] sm:text-[9px]"
          >
            Our Principles
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            className="mx-auto mt-5 max-w-[750px] text-[clamp(32px,5vw,54px)] font-medium leading-[1.04] tracking-[-0.045em]"
          >
            A few things we&apos;ll always
            <br className="hidden sm:block" />{" "}
            <span className="text-[#0B2A52]/35">believe.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mx-auto mt-6 max-w-[430px] text-[11px] leading-[1.75] text-[#0B2A52]/45 sm:text-[12px]"
          >
            Not rules. Not formulas. Just a few things that keep us honest
            about the work we create.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            style={{ transformOrigin: "center" }}
            className="mx-auto mt-7 h-px w-10 bg-[#B79A72]"
          />
        </div>
      </div>

      {/* =====================================================
          BELIEFS
      ===================================================== */}
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 md:px-10 lg:px-14">
        <div className="border-t border-[#0B2A52]/10">
          {beliefs.map((belief, index) => {
            const isImageLeft = belief.position === "left";

            return (
              <motion.div
                key={belief.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease,
                }}
                className="group border-b border-[#0B2A52]/10"
              >
                <div
                  className={`grid min-h-[330px] items-center gap-8 py-10 sm:min-h-[390px] sm:gap-12 sm:py-12 lg:min-h-[430px] lg:grid-cols-2 lg:gap-20 lg:py-14 ${
                    !isImageLeft ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}
                  <div
                    className={`relative flex w-full items-center ${
                      isImageLeft
                        ? "justify-start"
                        : "justify-end lg:justify-start"
                    }`}
                  >
                    <div className="relative w-full max-w-[470px] overflow-hidden">
                      {/* subtle gold frame */}
                      <span
                        className={`absolute ${
                          isImageLeft
                            ? "-bottom-2 -right-2"
                            : "-bottom-2 -left-2"
                        } z-0 h-full w-full border border-[#B79A72]/30`}
                      />

                      {/* image */}
                      <div className="relative z-10 aspect-[1.25/1] w-full overflow-hidden bg-[#F6F5F2]">
                        <img
                          src={belief.image}
                          alt={belief.title}
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                        />

                        {/* subtle overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-[#0B2A52]/[0.025] transition-opacity duration-500 group-hover:bg-[#0B2A52]/[0.06]" />
                      </div>

                      {/* image number */}
                      <span
                        className={`absolute ${
                          isImageLeft
                            ? "bottom-3 right-4"
                            : "bottom-3 left-4"
                        } z-20 text-[8px] tracking-[0.2em] text-white drop-shadow-md`}
                      >
                        {belief.number}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div
                    className={`flex w-full max-w-[430px] flex-col ${
                      isImageLeft
                        ? "lg:justify-self-start"
                        : "lg:justify-self-end"
                    }`}
                  >
                    {/* number + line */}
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] tracking-[0.2em] text-[#B79A72]">
                        {belief.number}
                      </span>

                      <span className="h-px w-7 bg-[#B79A72]/50" />
                    </div>

                    {/* title */}
                    <h3 className="mt-5 text-[clamp(25px,3.2vw,38px)] font-medium leading-[1.08] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1">
                      {belief.title}
                    </h3>

                    {/* description */}
                    <p className="mt-4 max-w-[350px] text-[12px] leading-[1.75] text-[#0B2A52]/45 sm:text-[13px]">
                      {belief.text}
                    </p>

                    {/* small detail */}
                    <div className="mt-7 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#0B2A52]/15 transition-all duration-500 group-hover:w-12 group-hover:bg-[#B79A72]" />

                      <span className="text-[8px] uppercase tracking-[0.25em] text-[#0B2A52]/30">
                        Our principle
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          CLOSING
      ===================================================== */}
      <div className="mx-auto w-full max-w-[1200px] px-6 py-24 sm:px-8 sm:py-28 md:px-10 lg:px-14 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto max-w-[680px] text-center"
        >
          <span className="text-[8px] uppercase tracking-[0.28em] text-[#B79A72]">
            One last thought
          </span>

          <p className="mt-6 text-[clamp(23px,3.2vw,37px)] font-medium leading-[1.15] tracking-[-0.035em]">
            The best work isn&apos;t about having all the answers.
          </p>

          <p className="mt-3 text-[clamp(23px,3.2vw,37px)] font-medium leading-[1.15] tracking-[-0.035em] text-[#0B2A52]/30">
            It&apos;s about asking better questions.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#B79A72]" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#B79A72]" />
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}