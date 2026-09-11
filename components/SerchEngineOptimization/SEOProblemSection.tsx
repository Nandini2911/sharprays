"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Globe2,
  MousePointer2,
  SearchCheck,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const problems = [
  {
    number: "01",
    title: "You Have a Website",
    description:
      "But search engines may not fully understand its structure, pages or relevance.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "You’re Publishing Content",
    description:
      "But it may not match what potential customers are actually searching for.",
    icon: FileText,
  },
  {
    number: "03",
    title: "You’re Getting Traffic",
    description:
      "But visitors may be arriving through searches that do not support your business goals.",
    icon: MousePointer2,
  },
  {
    number: "04",
    title: "You’re Ranking for Something",
    description:
      "But not necessarily for the searches that influence enquiries, leads or revenue.",
    icon: SearchCheck,
  },
];

export default function SEOProblemSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.85,
        ease,
      },
    },
  };

  return (
    <section
      id="seo-problem"
      className="
        relative
        overflow-hidden
        bg-[#FAFBFC]
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[230px]
          top-[25%]
          h-[480px]
          w-[480px]
          rounded-full
          border
          border-[#0B2A52]/[0.045]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[150px]
          top-[31%]
          h-[320px]
          w-[320px]
          rounded-full
          border
          border-[#C6A77A]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[4%]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#C6A77A]/12
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[520px]
          w-[780px]
          -translate-x-1/2
          rounded-full
          bg-[#0B2A52]/[0.035]
          blur-[140px]
        "
      />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1320px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =======================================================
            SECTION HEADING
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="
            mx-auto
            max-w-[900px]
            text-center
          "
        >
          <motion.div
            variants={fadeUp}
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-9 bg-[#C6A77A]" />

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.28em]
                text-[#C6A77A]
                sm:text-[10px]
              "
            >
              THE PROBLEM
            </span>

            <span className="h-px w-9 bg-[#C6A77A]" />
          </motion.div>

          {/* LOCKED HEADING SIZE */}

          <motion.h2
            variants={fadeUp}
            className="
              mt-6
              text-[2.2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Having a Website Doesn’t Mean
            <br className="hidden sm:block" />
            {" "}People Can Find It.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[690px]
              text-[13px]
              leading-7
              text-[#0B2A52]/60
              sm:text-sm
            "
          >
            Your website can look polished, explain your services clearly and
            still struggle to generate organic traffic.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-2
              max-w-[690px]
              text-[13px]
              font-medium
              leading-7
              text-[#0B2A52]
              sm:text-sm
            "
          >
            Because being online and being discoverable are two different
            things.
          </motion.p>
        </motion.div>

        {/* =======================================================
            MAIN VISUAL STORY
        ======================================================== */}

        <div
          className="
            mt-14
            grid
            items-center
            gap-10
            lg:mt-20
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-12
          "
        >
          {/* =====================================================
              LEFT VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -45,
              scale: reduceMotion ? 1 : 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="
              relative
              flex
              min-h-[430px]
              items-center
              justify-center
              sm:min-h-[500px]
              lg:min-h-[570px]
            "
          >
            {/* BIG BACK CIRCLE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.3,
                delay: 0.15,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                h-[360px]
                w-[360px]
                rounded-full
                border
                border-[#0B2A52]/[0.07]
                sm:h-[430px]
                sm:w-[430px]
                lg:h-[480px]
                lg:w-[480px]
              "
            />

            {/* GOLD ORBIT */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                rotate: -15,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.4,
                delay: 0.25,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                h-[285px]
                w-[285px]
                rounded-full
                border
                border-dashed
                border-[#C6A77A]/25
                sm:h-[350px]
                sm:w-[350px]
                lg:h-[390px]
                lg:w-[390px]
              "
            />

            {/* BACK GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                bg-[#C6A77A]/10
                blur-[90px]
                sm:h-[400px]
                sm:w-[400px]
              "
            />

            {/* ===================================================
                MAIN SEO PROBLEM IMAGE
            =================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-full
                max-w-[540px]
                sm:max-w-[600px]
              "
            >
              <Image
                src="/services/seo/seo-problem-visual.png"
                alt="Website search visibility and SEO discoverability illustration"
                width={800}
                height={700}
                className="
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_30px_55px_rgba(11,42,82,0.10)]
                "
              />
            </motion.div>

            {/* ===================================================
                FLOATING LABEL - WEBSITE
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease,
              }}
              className="
                absolute
                left-[2%]
                top-[18%]
                z-20
                hidden
                rounded-2xl
                border
                border-[#0B2A52]/10
                bg-white/90
                px-4
                py-3
                shadow-[0_12px_35px_rgba(11,42,82,0.08)]
                backdrop-blur-xl
                sm:block
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#0B2A52]/[0.07]
                  "
                >
                  <Globe2
                    size={14}
                    strokeWidth={1.6}
                    className="text-[#0B2A52]"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      tracking-[0.17em]
                      text-[#0B2A52]/35
                    "
                  >
                    ONLINE
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-medium
                      text-[#0B2A52]
                    "
                  >
                    Website exists
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ===================================================
                FLOATING LABEL - DISCOVERABILITY
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease,
              }}
              className="
                absolute
                bottom-[18%]
                right-[1%]
                z-20
                hidden
                rounded-2xl
                border
                border-[#C6A77A]/30
                bg-white/90
                px-4
                py-3
                shadow-[0_12px_35px_rgba(11,42,82,0.08)]
                backdrop-blur-xl
                sm:block
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    relative
                    flex
                    h-2
                    w-2
                  "
                >
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.8, 1],
                            opacity: [0.4, 0, 0.4],
                          }
                    }
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      h-full
                      w-full
                      rounded-full
                      bg-[#C6A77A]
                    "
                  />

                  <span
                    className="
                      relative
                      h-2
                      w-2
                      rounded-full
                      bg-[#C6A77A]
                    "
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      tracking-[0.17em]
                      text-[#C6A77A]
                    "
                  >
                    THE GAP
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-medium
                      text-[#0B2A52]
                    "
                  >
                    Can customers find it?
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT PROBLEM LIST
          ====================================================== */}

          <div className="relative">
            <div
              className="
                absolute
                bottom-7
                left-[17px]
                top-7
                hidden
                w-px
                bg-[#0B2A52]/10
                sm:block
              "
            />

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                delay: 0.25,
                ease,
              }}
              className="
                absolute
                bottom-7
                left-[17px]
                top-7
                hidden
                w-px
                origin-top
                bg-gradient-to-b
                from-[#C6A77A]
                via-[#0B2A52]/20
                to-transparent
                sm:block
              "
            />

            <div className="space-y-2">
              {problems.map((problem, index) => {
                const Icon = problem.icon;

                return (
                  <motion.article
                    key={problem.number}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 38,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                    }}
                    transition={{
                      duration: 0.75,
                      delay: index * 0.12,
                      ease,
                    }}
                    className="
                      group
                      relative
                      flex
                      gap-5
                      rounded-[20px]
                      border
                      border-transparent
                      px-2
                      py-5
                      transition-all
                      duration-500
                      hover:border-[#0B2A52]/[0.07]
                      hover:bg-white
                      hover:px-4
                      hover:shadow-[0_15px_45px_rgba(11,42,82,0.055)]
                      sm:pl-0
                    "
                  >
                    {/* NODE */}

                    <div
                      className="
                        relative
                        z-10
                        hidden
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#0B2A52]/10
                        bg-[#FAFBFC]
                        text-[#0B2A52]/45
                        transition-all
                        duration-300
                        group-hover:border-[#C6A77A]/45
                        group-hover:bg-[#C6A77A]/[0.08]
                        group-hover:text-[#C6A77A]
                        sm:flex
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.6}
                      />
                    </div>

                    <div className="flex-1">
                      {/* NUMBER */}

                      <span
                        className="
                          text-[8px]
                          font-semibold
                          tracking-[0.18em]
                          text-[#C6A77A]
                        "
                      >
                        {problem.number}
                      </span>

                      {/* TITLE */}

                      <h3
                        className="
                          mt-1.5
                          text-[16px]
                          font-medium
                          leading-6
                          text-[#0B2A52]
                          sm:text-[17px]
                        "
                      >
                        {problem.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-2
                          max-w-[470px]
                          text-[12px]
                          leading-6
                          text-[#0B2A52]/55
                          sm:text-[13px]
                        "
                      >
                        {problem.description}
                      </p>

                      {/* ACCENT LINE */}

                      <div
                        className="
                          mt-4
                          h-px
                          w-8
                          bg-[#0B2A52]/10
                          transition-all
                          duration-500
                          group-hover:w-16
                          group-hover:bg-[#C6A77A]
                        "
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* =======================================================
            REAL PROBLEM
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 35,
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
            relative
            mx-auto
            mt-14
            max-w-[1120px]
            overflow-hidden
            rounded-[30px]
            bg-[#0B2A52]
            px-6
            py-9
            text-white
            shadow-[0_25px_70px_rgba(11,42,82,0.15)]
            sm:px-9
            sm:py-10
            lg:mt-20
            lg:px-12
          "
        >
          {/* DECORATIVE CIRCLES */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              border
              border-white/[0.06]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-5
              -top-5
              h-40
              w-40
              rounded-full
              border
              border-[#C6A77A]/20
            "
          />

          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-7
              lg:grid-cols-[190px_1fr]
            "
          >
            {/* LABEL */}

            <div>
              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.25em]
                  text-[#C6A77A]
                "
              >
                THE REAL PROBLEM
              </span>

              <div
                className="
                  mt-4
                  h-px
                  w-12
                  bg-[#C6A77A]
                "
              />
            </div>

            {/* CONTENT */}

            <div>
              <p
                className="
                  text-[13px]
                  leading-7
                  text-white/60
                  sm:text-sm
                "
              >
                SEO is not about ranking for as many keywords as possible.
              </p>

              <div
                className="
                  mt-3
                  flex
                  items-start
                  gap-4
                "
              >
                <ArrowRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    mt-[5px]
                    shrink-0
                    text-[#C6A77A]
                  "
                />

                <p
                  className="
                    max-w-[730px]
                    text-[16px]
                    font-medium
                    leading-7
                    text-white
                    sm:text-[18px]
                  "
                >
                  It is about becoming visible for the searches that matter to
                  your business.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}