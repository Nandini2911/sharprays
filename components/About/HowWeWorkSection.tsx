"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "LISTEN",
    text: "We understand before we recommend.",
  },
  {
    number: "02",
    title: "QUESTION",
    text: "We challenge assumptions.",
  },
  {
    number: "03",
    title: "CHALLENGE",
    text: "We look for the opportunity others miss.",
  },
  {
    number: "04",
    title: "BUILD",
    text: "We turn thinking into action.",
  },
  {
    number: "05",
    title: "LEARN",
    text: "We use results to make the next move smarter.",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white text-[#0B2A52]">
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-[12px] tracking-[0.18em] text-[#B8945B]">
              # 06
            </span>

            <span className="h-px w-10 bg-[#B8945B]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#0B2A52]/45">
              How We Work
            </span>
          </div>

          <h2 className="mt-8 max-w-[950px] font-serif text-[clamp(3rem,6vw,6.5rem)] font-normal leading-[0.94] tracking-[-0.055em]">
            Good Work Happens
            <br />
            When People Think{" "}
            <span className="text-[#B8945B]">Together.</span>
          </h2>

          <div className="mt-9 h-[2px] w-12 bg-[#B8945B]" />
        </motion.div>

        {/* PROCESS */}
        <div className="mt-24 border-t border-[#0B2A52]/10 lg:mt-32">

          {/* small heading */}
          <div className="flex items-center justify-between border-b border-[#0B2A52]/10 py-5">
            <span className="text-[9px] uppercase tracking-[0.22em] text-[#0B2A52]/35">
              How we think
            </span>

            <span className="text-[9px] uppercase tracking-[0.22em] text-[#0B2A52]/25">
              01 — 05
            </span>
          </div>

          {/* DESKTOP */}
          <div className="hidden grid-cols-5 lg:grid">

            {steps.map((step, index) => {
              const isActive = active === index;

              return (
                <motion.button
                  key={step.number}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-[330px] border-r border-[#0B2A52]/10 px-5 py-10 text-left outline-none first:border-l last:border-r-0 xl:px-8"
                >

                  {/* NUMBER */}
                  <motion.span
                    animate={{
                      color: isActive ? "#B8945B" : "#0B2A52",
                      opacity: isActive ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="block font-serif text-[14px]"
                  >
                    {step.number}
                  </motion.span>

                  {/* TITLE */}
                  <motion.h3
                    animate={{
                      y: isActive ? -5 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`
                      mt-16
                      font-serif
                      text-[clamp(2rem,3vw,3.3rem)]
                      leading-none
                      tracking-[-0.045em]
                      transition-colors
                      duration-500
                      ${
                        isActive
                          ? "text-[#0B2A52]"
                          : "text-[#0B2A52]/70"
                      }
                    `}
                  >
                    {step.title}
                  </motion.h3>

                  {/* GOLD LINE */}
                  <motion.div
                    animate={{
                      width: isActive ? 48 : 25,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-6 h-[2px] bg-[#B8945B]"
                  />

                  {/* DESCRIPTION */}
                  <motion.p
                    animate={{
                      y: isActive ? -2 : 0,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="mt-6 max-w-[220px] text-[14px] leading-[1.7] text-[#526070]"
                  >
                    {step.text}
                  </motion.p>

                  {/* ACTIVE BOTTOM LINE */}
                  <motion.div
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-[#B8945B]"
                  />

                </motion.button>
              );
            })}

          </div>

          {/* MOBILE */}
          <div className="lg:hidden">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="border-b border-[#0B2A52]/10 py-8"
              >
                <div className="flex items-start justify-between">

                  <span className="font-serif text-[13px] text-[#B8945B]">
                    {step.number}
                  </span>

                  <h3 className="w-[78%] font-serif text-[2.3rem] leading-none tracking-[-0.04em]">
                    {step.title}
                  </h3>

                </div>

                <div className="mt-5 ml-[22%]">

                  <div className="h-[2px] w-9 bg-[#B8945B]" />

                  <p className="mt-5 max-w-[330px] text-[14px] leading-[1.7] text-[#526070]">
                    {step.text}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col gap-5 border-t border-[#0B2A52]/10 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-20"
        >
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#0B2A52]/30">
            Listen · Question · Challenge · Build · Learn
          </span>

          <span className="font-serif text-[17px] italic text-[#B8945B]">
            Better thinking. Better work.
          </span>
        </motion.div>

      </div>
    </section>
  );
}