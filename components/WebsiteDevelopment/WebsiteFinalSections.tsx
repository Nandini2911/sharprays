"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  LayoutTemplate,
  MessageCircle,
  MousePointer2,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WebsiteFinalSections() {
  const reduceMotion = Boolean(useReducedMotion());

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -34,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.75,
        ease,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 34,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.75,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <>
      {/* =====================================================
          SECTION 14 — FINAL ANSWER BLOCK
      ===================================================== */}

      <section
        id="website-development-with-sharp-rays"
        aria-labelledby="website-development-partner-heading"
        className="
          relative
          isolate
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <div
            className="
              absolute
              -left-[240px]
              top-[15%]
              h-[480px]
              w-[480px]
              rounded-full
              bg-[#EDF5FB]
              blur-[125px]
            "
          />

          <div
            className="
              absolute
              -right-[200px]
              bottom-[-80px]
              h-[420px]
              w-[460px]
              rounded-full
              bg-[#FBF5EC]
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-[82%]
              -translate-x-1/2
              bg-[linear-gradient(90deg,transparent,#DDE6EC,transparent)]
            "
          />
        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1400px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-20
            "
          >
            {/* ===============================================
                LEFT CONTENT
            =============================================== */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              className="max-w-[650px]"
            >
              {/* EYEBROW */}

              <motion.div
                variants={fadeLeft}
                className="flex items-center gap-3"
              >
                <span className="h-px w-9 bg-[#B79A72]" />

                <span
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.27em]
                    text-[#92745C]
                    sm:text-[0.62rem]
                  "
                >
                  Website Development With Sharp Rays
                </span>
              </motion.div>

              {/* HEADING */}

              <motion.h2
                id="website-development-partner-heading"
                variants={fadeLeft}
                className="
                  mt-5
                  max-w-[650px]
                  font-serif
                  text-[2.1rem]
                  font-normal
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Looking for a Website{" "}
                <span className="italic text-[#A97C52]">
                  Development Partner?
                </span>
              </motion.h2>

              {/* COPY */}

              <motion.p
                variants={fadeLeft}
                className="
                  mt-6
                  max-w-[610px]
                  font-serif
                  text-[0.92rem]
                  leading-[1.78]
                  text-[#60758A]
                  sm:text-[0.98rem]
                "
              >
                Sharp Rays helps businesses plan, design and develop websites
                that are clear for users, technically considered and built
                around meaningful business actions.
              </motion.p>

              <motion.p
                variants={fadeLeft}
                className="
                  mt-4
                  max-w-[610px]
                  font-serif
                  text-[0.92rem]
                  leading-[1.78]
                  text-[#60758A]
                  sm:text-[0.98rem]
                "
              >
                Whether you are launching something new, replacing an outdated
                website or improving an existing digital experience, we start
                by understanding what the website needs to accomplish before
                deciding what needs to be built.
              </motion.p>

              {/* SUPPORT POINTS */}

              <motion.div
                variants={fadeLeft}
                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-3
                "
              >
                {[
                  "Clear Strategy",
                  "Considered Design",
                  "Purposeful Development",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2.5
                    "
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F4F7F9]
                        text-[#A97C52]
                      "
                    >
                      <Check size={10} strokeWidth={2.2} />
                    </span>

                    <span
                      className="
                        text-[0.57rem]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[#536D83]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}

              <motion.div variants={fadeLeft} className="mt-9">
                <a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[linear-gradient(135deg,#0B2A52_0%,#16487C_100%)]
                    px-6
                    py-3.5
                    text-[0.68rem]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-white
                    shadow-[0_12px_28px_rgba(11,42,82,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_36px_rgba(11,42,82,0.22)]
                  "
                >
                  Talk About My Website

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-white/12
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight size={12} strokeWidth={1.8} />
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* ===============================================
                RIGHT VISUAL
            =============================================== */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[590px]
              "
            >
              {/* DECORATIVE ORBIT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[430px]
                  w-[430px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#E2E9EE]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[330px]
                  w-[330px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#F3F8FB]
                  blur-[2px]
                "
              />

              {/* BROWSER */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -6, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-[#D6E2E9]
                  bg-white
                  shadow-[0_28px_70px_rgba(11,42,82,0.10)]
                "
              >
                {/* Browser Top */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#E4EBEF]
                    bg-[#F8FAFC]
                    px-5
                    py-4
                  "
                >
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#D5DFE6]" />
                    <span className="h-2 w-2 rounded-full bg-[#D5DFE6]" />
                    <span className="h-2 w-2 rounded-full bg-[#D5DFE6]" />
                  </div>

                  <div
                    className="
                      h-2
                      w-28
                      rounded-full
                      bg-[#E6ECF0]
                    "
                  />

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#0B2A52]
                    "
                  >
                    <MousePointer2 size={11} />
                  </span>
                </div>

                {/* Browser Content */}

                <div className="p-6 sm:p-7">
                  {/* Hero simulation */}

                  <div
                    className="
                      rounded-[20px]
                      bg-[linear-gradient(135deg,#F1F7FB_0%,#FBF8F3_100%)]
                      px-6
                      py-8
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span className="h-px w-7 bg-[#B79A72]" />

                      <span
                        className="
                          text-[0.42rem]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[#92745C]
                        "
                      >
                        Website Experience
                      </span>
                    </div>

                    <div
                      className="
                        mt-5
                        h-4
                        w-[68%]
                        rounded-full
                        bg-[#0B2A52]/90
                      "
                    />

                    <div
                      className="
                        mt-3
                        h-4
                        w-[52%]
                        rounded-full
                        bg-[#0B2A52]/90
                      "
                    />

                    <div
                      className="
                        mt-6
                        h-2
                        w-[76%]
                        rounded-full
                        bg-[#A7B7C5]/45
                      "
                    />

                    <div
                      className="
                        mt-2
                        h-2
                        w-[61%]
                        rounded-full
                        bg-[#A7B7C5]/45
                      "
                    />

                    <div
                      className="
                        mt-7
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <div
                        className="
                          h-9
                          w-28
                          rounded-full
                          bg-[#0B2A52]
                        "
                      />

                      <div
                        className="
                          h-9
                          w-24
                          rounded-full
                          border
                          border-[#CBD8E1]
                          bg-white
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom feature blocks */}

                  <div
                    className="
                      mt-5
                      grid
                      grid-cols-3
                      gap-3
                    "
                  >
                    {[
                      {
                        icon: LayoutTemplate,
                        label: "Clear",
                      },
                      {
                        icon: Code2,
                        label: "Functional",
                      },
                      {
                        icon: Sparkles,
                        label: "Considered",
                      },
                    ].map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="
                          rounded-[15px]
                          border
                          border-[#E1E8ED]
                          bg-white
                          p-4
                        "
                      >
                        <span
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-[#F3F7FA]
                            text-[#0B2A52]
                          "
                        >
                          <Icon size={13} strokeWidth={1.7} />
                        </span>

                        <span
                          className="
                            mt-4
                            block
                            text-[0.43rem]
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-[#536D83]
                          "
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* FLOATING DETAIL */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 5, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-6
                  -left-5
                  z-20
                  hidden
                  items-center
                  gap-3
                  rounded-[16px]
                  border
                  border-[#D8E2E8]
                  bg-white
                  px-4
                  py-3
                  shadow-[0_14px_32px_rgba(11,42,82,0.08)]
                  sm:flex
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F7F1E8]
                    text-[#A97C52]
                  "
                >
                  <MessageCircle size={13} strokeWidth={1.7} />
                </span>

                <div>
                  <span
                    className="
                      block
                      text-[0.39rem]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#9AA7B1]
                    "
                  >
                    Start With
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      font-serif
                      text-[0.76rem]
                      text-[#0B2A52]
                    "
                  >
                    What the website needs to do.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 15 — FINAL CTA
      ===================================================== */}

      <section
        id="website-final-cta"
        aria-labelledby="website-final-cta-heading"
        className="
          relative
          isolate
          overflow-hidden
          bg-white
          pb-20
          pt-8
          sm:pb-24
          md:pb-28
          lg:pb-32
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1400px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 30,
              scale: reduceMotion ? 1 : 0.99,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-[#D4E0E8]
              bg-[linear-gradient(135deg,#F1F7FB_0%,#FFFFFF_48%,#FBF6EE_100%)]
              px-5
              py-16
              shadow-[0_30px_80px_rgba(11,42,82,0.08)]
              sm:rounded-[36px]
              sm:px-8
              sm:py-20
              lg:px-12
              lg:py-24
            "
          >
            {/* DECORATIVE HALF CIRCLES */}

            <div
              className="
                pointer-events-none
                absolute
                -left-[170px]
                -top-[200px]
                h-[450px]
                w-[450px]
                rounded-full
                border
                border-[#C9DAE6]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-[110px]
                -top-[140px]
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-[#DCE7ED]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[240px]
                -right-[170px]
                h-[500px]
                w-[500px]
                rounded-full
                border
                border-[#DFC9A7]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[180px]
                -right-[110px]
                h-[370px]
                w-[370px]
                rounded-full
                border
                border-[#EEE0CB]
              "
            />

            {/* SOFT GLOWS */}

            <div
              className="
                pointer-events-none
                absolute
                left-[12%]
                top-[-80px]
                h-[330px]
                w-[330px]
                rounded-full
                bg-[#DDECF7]
                opacity-55
                blur-[95px]
              "
            />

            <div
              className="
                pointer-events-none
                bottom-[-120px]
                right-[10%]
                absolute
                h-[360px]
                w-[360px]
                rounded-full
                bg-[#F3E8D8]
                opacity-65
                blur-[100px]
              "
            />

            {/* CONTENT */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
              className="
                relative
                z-10
                mx-auto
                max-w-[950px]
                text-center
              "
            >
              {/* EYEBROW */}

              <motion.div
                variants={fadeUp}
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                <span className="h-px w-8 bg-[#B79A72]" />

                <span
                  className="
                    text-[0.55rem]
                    font-semibold
                    uppercase
                    tracking-[0.29em]
                    text-[#92745C]
                    sm:text-[0.61rem]
                  "
                >
                  Your Next Move
                </span>

                <span className="h-px w-8 bg-[#B79A72]" />
              </motion.div>

              {/* HEADING */}

              <motion.h2
                id="website-final-cta-heading"
                variants={fadeUp}
                className="
                  mx-auto
                  mt-5
                  max-w-[900px]
                  font-serif
                  text-[2.1rem]
                  font-normal
                  leading-[1.03]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Build a Website People{" "}
                <span className="italic text-[#A97C52]">
                  Understand.
                </span>
              </motion.h2>

              {/* BODY */}

              <motion.p
                variants={fadeUp}
                className="
                  mx-auto
                  mt-6
                  max-w-[720px]
                  font-serif
                  text-[0.94rem]
                  leading-[1.8]
                  text-[#5E7488]
                  sm:text-[1rem]
                "
              >
                A strong website should make your business easier to discover,
                easier to trust and easier to choose.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="
                  mx-auto
                  mt-3
                  max-w-[740px]
                  font-serif
                  text-[0.94rem]
                  leading-[1.8]
                  text-[#5E7488]
                  sm:text-[1rem]
                "
              >
                Let&apos;s create an experience that looks considered, works
                smoothly and gives every visitor a clearer next step.
              </motion.p>

              {/* CTA BUTTONS */}

              <motion.div
                variants={fadeUp}
                className="
                  mt-9
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  sm:flex-row
                "
              >
                {/* PRIMARY */}

                <a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-w-[190px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[linear-gradient(135deg,#0B2A52_0%,#154A80_100%)]
                    px-6
                    py-3.5
                    text-[0.66rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white
                    shadow-[0_13px_30px_rgba(11,42,82,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_38px_rgba(11,42,82,0.24)]
                  "
                >
                  Build My Website

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-white/12
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight size={12} strokeWidth={1.8} />
                  </span>
                </a>

                {/* SECONDARY */}

                <a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-w-[190px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#C9D8E2]
                    bg-white
                    px-6
                    py-3.5
                    text-[0.66rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#0B2A52]
                    shadow-[0_8px_20px_rgba(11,42,82,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#B79A72]/60
                    hover:shadow-[0_13px_28px_rgba(11,42,82,0.08)]
                  "
                >
                  Talk to Sharp Rays

                  <ArrowRight
                    size={12}
                    strokeWidth={1.8}
                    className="
                      text-[#B79A72]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>
              </motion.div>

              {/* SUPPORTING LINE */}

              <motion.div
                variants={fadeUp}
                className="
                  mx-auto
                  mt-10
                  flex
                  w-fit
                  flex-wrap
                  items-center
                  justify-center
                  gap-2.5
                  sm:gap-3.5
                "
              >
                {["Plan", "Design", "Develop", "Launch"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 sm:gap-3.5"
                    >
                      <span
                        className="
                          text-[0.47rem]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#62798D]
                        "
                      >
                        {item}
                      </span>

                      {index !== 3 && (
                        <span
                          className="
                            h-1
                            w-1
                            rounded-full
                            bg-[#B79A72]
                          "
                        />
                      )}
                    </div>
                  ),
                )}
              </motion.div>
            </motion.div>

            {/* FLOATING DOTS */}

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[12%]
                top-[28%]
                hidden
                h-2
                w-2
                rounded-full
                bg-[#B79A72]
                lg:block
              "
            />

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 8, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[25%]
                right-[14%]
                hidden
                h-2
                w-2
                rounded-full
                bg-[#0B2A52]
                lg:block
              "
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}