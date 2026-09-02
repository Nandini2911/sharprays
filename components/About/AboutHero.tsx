"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white text-[#0B2A52]">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-220px]
          top-[60px]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-[#0B2A52]/[0.035]
          sm:right-[-180px]
          sm:top-[70px]
          sm:h-[600px]
          sm:w-[600px]
          lg:right-[-120px]
          lg:top-[80px]
          lg:h-[680px]
          lg:w-[680px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[150px]
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-[#C6A77A]/[0.07]
          sm:right-[-90px]
          sm:top-[170px]
          sm:h-[420px]
          sm:w-[420px]
          lg:right-[-80px]
          lg:top-[180px]
          lg:h-[480px]
          lg:w-[480px]
        "
      />

      {/* =====================================================
          DESKTOP GROWTH PATH
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          hidden
          h-full
          w-[52%]
          lg:block
        "
      >
        <svg
          viewBox="0 0 800 750"
          className="h-full w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="
              M -20 650
              C 100 630,
                135 535,
                245 555
              C 350 575,
                340 430,
                430 425
              C 535 420,
                535 515,
                620 445
              C 700 380,
                680 270,
                820 190
            "
            stroke="#C6A77A"
            strokeWidth="1.1"
            strokeOpacity="0.34"
            strokeDasharray="6 9"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              pathLength: {
                duration: 2.2,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.5,
              },
            }}
          />

          <motion.circle
            cx="620"
            cy="445"
            r="4"
            fill="#C6A77A"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 0.5,
            }}
          />

          <motion.circle
            cx="620"
            cy="445"
            r="14"
            stroke="#C6A77A"
            strokeWidth="1"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 0.18,
            }}
            transition={{
              delay: 2.05,
              duration: 0.8,
            }}
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-0
          max-w-[1440px]
          items-center
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:px-10
          md:py-20
          lg:min-h-[calc(100svh-80px)]
          lg:px-12
          lg:py-14
          xl:px-16
          2xl:px-20
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-10
            sm:gap-12
            md:gap-14
            lg:grid-cols-[1.04fr_0.96fr]
            lg:gap-4
            xl:grid-cols-[1.02fr_0.98fr]
            xl:gap-8
            2xl:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              max-w-[780px]
            "
          >
            {/* ---------------------------------------------
                EYEBROW
            --------------------------------------------- */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 sm:mb-7 lg:mb-9"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#C6A77A] sm:w-10 lg:w-12" />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#C6A77A]
                    sm:text-[9px]
                    md:text-[10px]
                  "
                >
                  About Sharprays
                </span>
              </div>
            </motion.div>

            {/* ---------------------------------------------
                MAIN HEADING
            --------------------------------------------- */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[680px]
                font-[var(--font-new-york)]
          text-[clamp(1.8rem,3.2vw,3rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.07em]
                text-[#0B2A52]
              text-[clamp(1.8rem,3.2vw,3rem)]
              text-[clamp(1.8rem,3.2vw,3rem)]
                lg:text-[clamp(2.8rem,4.2vw,4rem)]
                   lg:text-[clamp(2.8rem,4.2vw,4rem)]
                  lg:text-[clamp(2.8rem,4.2vw,4rem)]
              "
            >
              We&apos;re Building
              <br />
              Something We&apos;d
              <br />
              <span className="italic text-[#C6A77A]">
                Want to Work With.
              </span>
            </motion.h1>

            {/* ---------------------------------------------
                DESCRIPTION + CTA
            --------------------------------------------- */}

            <div
              className="
                mt-8
                max-w-[560px]
                sm:mt-9
                md:mt-10
                lg:mt-11
              "
            >
              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  max-w-[520px]
                  text-[13px]
                  leading-6
                  text-[#5E6D81]
                  sm:text-[14px]
                  sm:leading-7
                  md:text-[15px]
                  md:leading-7
                  lg:text-[16px]
                  lg:leading-8
                "
              >
                SHARPRAYS is a digital growth company built
                for brands that want more than activity, more
                than attention, and more than another agency
                on their vendor list.
              </motion.p>

              {/* CTA */}

              <motion.a
                href="#people"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  mt-7
                  flex
                  w-fit
                  items-center
                  gap-3
                  border-b
                  border-[#0B2A52]/20
                  pb-2.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#0B2A52]
                  transition-all
                  duration-300
                  hover:border-[#C6A77A]
                  sm:mt-8
                  sm:text-[10px]
                  sm:tracking-[0.2em]
                  md:mt-9
                  md:pb-3
                  md:text-[11px]
                "
              >
                <span>Meet the People</span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                    transition-all
                    duration-300
                    group-hover:bg-[#C6A77A]
                    group-hover:text-[#0B2A52]
                    sm:h-9
                    sm:w-9
                  "
                >
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </motion.a>
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[280px]
              items-center
              justify-center
              sm:min-h-[340px]
              md:min-h-[400px]
              lg:min-h-[520px]
              lg:justify-end
              xl:min-h-[590px]
              2xl:min-h-[620px]
            "
          >
            <motion.img
              src="/about/about_hero.png"
              alt="SHARPRAYS digital growth visual"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                h-auto
                w-[82%]
                max-w-[390px]
                object-contain
                object-center
                sm:w-[76%]
                sm:max-w-[450px]
                md:w-[70%]
                md:max-w-[500px]
                lg:w-[96%]
                lg:max-w-[570px]
                xl:w-[100%]
                xl:max-w-[650px]
              "
            />

            {/* SMALL GOLD ACCENT */}

            <motion.span
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.3,
                duration: 0.4,
              }}
              className="
                absolute
                bottom-[10%]
                right-[12%]
                z-20
                h-1.5
                w-1.5
                rounded-full
                bg-[#C6A77A]
                shadow-[0_0_0_6px_rgba(198,167,122,0.10)]
                sm:bottom-[12%]
                sm:right-[14%]
                sm:h-2
                sm:w-2
                lg:bottom-[18%]
                lg:right-[5%]
              "
            />
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP SECTION INDEX
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="
            absolute
            bottom-6
            left-6
            hidden
            items-center
            gap-3
            lg:flex
            sm:left-8
            lg:left-12
            xl:left-16
            2xl:left-20
          "
        >
         

          
        </motion.div>

        {/* =====================================================
            MOBILE / TABLET SECTION INDEX
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
            sm:mt-10
            lg:hidden
          "
        >
          <span className="h-px w-7 bg-[#0B2A52]/15" />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-[#0B2A52]/35
            "
          >
            Who We Are
          </span>
        </div>
      </div>
    </section>
  );
}