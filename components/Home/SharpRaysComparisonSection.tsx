"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const comparisonRows = [
  {
    feature: "Average Turnaround",
    sharpRays: "7–14 Days",
    agency: "4–12 Weeks",
    freelancer: "Unpredictable",
  },
  {
    feature: "Technology Stack",
    sharpRays: "Next.js / React — performance-focused",
    agency: "WordPress / template-led builds",
    freelancer: "Often no-code or builder-based",
  },
  {
    feature: "SEO / GEO Optimization",
    sharpRays:
      "Structured data, E-E-A-T signals & AI-search foundations",
    agency: "Often limited to standard SEO setup",
    freelancer: "Depends on individual expertise",
  },
  {
    feature: "Communication & Support",
    sharpRays: "Direct communication + dedicated project contact",
    agency: "Usually routed through account management",
    freelancer: "Availability may vary",
  },
];

export default function ComparisonSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="sharp-rays-comparison"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#DCEAF2]/35
          blur-[110px]

          sm:h-[520px]
          sm:w-[520px]

          lg:h-[680px]
          lg:w-[680px]
          lg:blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[120px]
          top-[20%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#C6A77A]/[0.06]
          blur-[90px]

          lg:h-[380px]
          lg:w-[380px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[1000px] text-center">
          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.65,
              ease,
            }}
            className="
              mx-auto
              flex
              w-fit
              max-w-full
              items-center
              justify-center
              gap-2.5

              sm:gap-4
            "
          >
            <span
              className="
                block
                h-px
                w-6
                shrink-0
                bg-gradient-to-r
                from-transparent
                to-[#B79A72]

                xs:w-7
                sm:w-10
                md:w-12
              "
            />

            <span
              className="
                whitespace-nowrap
                text-[0.52rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#B79A72]

                sm:text-[0.6rem]
                sm:tracking-[0.21em]
              "
            >
              Working With Sharp Rays
            </span>

            <span
              className="
                block
                h-px
                w-6
                shrink-0
                bg-gradient-to-l
                from-transparent
                to-[#B79A72]

                xs:w-7
                sm:w-10
                md:w-12
              "
            />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.78,
              delay: reduceMotion ? 0 : 0.06,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-[960px]

              font-[var(--font-new-york)]
              text-[2rem]
              font-medium
              leading-[1.03]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:mt-6
              sm:text-[2.6rem]

              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            What Makes the Experience{" "}
            <span className="text-[#C6A77A]">
              Different?
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.14,
              ease,
            }}
            className="
              mx-auto
              mt-4
              max-w-[760px]

              px-1

              text-[0.88rem]
              leading-[1.75]
              text-[#64748B]

              sm:mt-5
              sm:px-0
              sm:text-[0.96rem]

              md:text-[1rem]
            "
          >
            Different working models create different experiences.
            Here&apos;s how Sharp Rays compares across the areas that
            often matter most when choosing a digital partner.
          </motion.p>
        </div>

        {/* =====================================================
            MOBILE + TABLET VERSION
            < 1024px
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-[850px]

            sm:mt-12
            md:mt-14

            lg:hidden
          "
        >
          <div className="space-y-4 sm:space-y-5">
            {comparisonRows.map((item, index) => (
              <motion.article
                key={`mobile-${item.feature}`}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.58,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#DCE6EC]
                  bg-white

                  shadow-[0_18px_50px_rgba(11,42,82,0.07)]

                  sm:rounded-[26px]
                "
              >
                {/* GOLD TOP DETAIL */}

                <motion.div
                  initial={{
                    scaleX: reduceMotion ? 1 : 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: reduceMotion
                      ? 0
                      : 0.1 + index * 0.05,
                    ease,
                  }}
                  style={{
                    transformOrigin: "left",
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-[34%]
                    bg-[#C6A77A]

                    sm:w-[25%]
                  "
                />

                {/* FEATURE TITLE */}

                <div
                  className="
                    border-b
                    border-[#E4EBEF]
                    bg-[#FAFCFD]

                    px-5
                    py-5

                    sm:px-6
                    sm:py-5

                    md:px-7
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#B79A72]/35
                        bg-white

                        text-[0.52rem]
                        font-semibold
                        tracking-[0.08em]
                        text-[#B79A72]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="
                        font-[var(--font-new-york)]
                        text-[1.05rem]
                        font-semibold
                        leading-[1.3]
                        tracking-[-0.02em]
                        text-[#0B2A52]

                        sm:text-[1.15rem]
                      "
                    >
                      {item.feature}
                    </h3>
                  </div>
                </div>

                {/* COMPARISON VALUES */}

                <div
                  className="
                    grid
                    grid-cols-1

                    md:grid-cols-3
                  "
                >
                  {/* SHARP RAYS */}

                  <div
                    className="
                      relative
                      bg-[linear-gradient(135deg,#F1F7FA_0%,#EAF3F8_100%)]

                      px-5
                      py-5

                      sm:px-6
                      sm:py-6

                      md:px-5
                      md:py-6
                    "
                  >
                    <div
                      className="
                        mb-2.5
                        flex
                        items-center
                        justify-between
                        gap-3
                      "
                    >
                      <span
                        className="
                          text-[0.52rem]
                          font-semibold
                          uppercase
                          tracking-[0.17em]
                          text-[#B79A72]

                          sm:text-[0.56rem]
                        "
                      >
                        Sharp Rays
                      </span>

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#C6A77A]
                        "
                      />
                    </div>

                    <p
                      className="
                        max-w-[420px]

                        text-[0.87rem]
                        font-medium
                        leading-[1.6]
                        text-[#0B2A52]

                        sm:text-[0.92rem]
                      "
                    >
                      {item.sharpRays}
                    </p>
                  </div>

                  {/* TRADITIONAL */}

                  <div
                    className="
                      border-t
                      border-[#E3EAEF]

                      px-5
                      py-5

                      sm:px-6
                      sm:py-6

                      md:border-l
                      md:border-t-0
                      md:px-5
                    "
                  >
                    <span
                      className="
                        mb-2.5
                        block

                        text-[0.52rem]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#8796A2]

                        sm:text-[0.56rem]
                      "
                    >
                      Traditional Agency
                    </span>

                    <p
                      className="
                        max-w-[420px]

                        text-[0.84rem]
                        leading-[1.6]
                        text-[#657785]

                        sm:text-[0.9rem]
                      "
                    >
                      {item.agency}
                    </p>
                  </div>

                  {/* FREELANCER */}

                  <div
                    className="
                      border-t
                      border-[#E3EAEF]

                      px-5
                      py-5

                      sm:px-6
                      sm:py-6

                      md:border-l
                      md:border-t-0
                      md:px-5
                    "
                  >
                    <span
                      className="
                        mb-2.5
                        block

                        text-[0.52rem]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#8796A2]

                        sm:text-[0.56rem]
                      "
                    >
                      Typical Freelancer
                    </span>

                    <p
                      className="
                        max-w-[420px]

                        text-[0.84rem]
                        leading-[1.6]
                        text-[#657785]

                        sm:text-[0.9rem]
                      "
                    >
                      {item.freelancer}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            DESKTOP TABLE
            1024px+
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.82,
            ease,
          }}
          className="
            mx-auto
            mt-16
            hidden
            max-w-[1350px]

            lg:block
            lg:mt-18

            xl:mt-20
          "
        >
          {/* 3D STAGE */}

          <div
            className="
              relative
              px-2
              pb-5
              pt-2

              xl:px-3
            "
          >
            {/* BACK SHADOW 01 */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[4%]
                right-[4%]
                top-7

                rounded-[32px]
                bg-[#DDE8EF]
                opacity-60
                blur-[7px]
              "
            />

            {/* BACK SHADOW 02 */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-2
                left-[2%]
                right-[2%]
                top-5

                rounded-[30px]
                border
                border-white/80
                bg-white/45
              "
            />

            {/* MAIN TABLE */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#D7E3EA]
                bg-white

                shadow-[0_40px_90px_rgba(11,42,82,0.11),0_15px_35px_rgba(11,42,82,0.06)]

                xl:rounded-[30px]
              "
            >
              {/* TOP LIGHT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-[130px]

                  bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0))]
                "
              />

              {/* SHARP RAYS COLUMN BG */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[22%]
                  top-0
                  w-[31%]

                  bg-[linear-gradient(180deg,#EEF6FA_0%,#EAF3F8_100%)]

                  shadow-[inset_1px_0_0_rgba(163,190,207,0.35),inset_-1px_0_0_rgba(163,190,207,0.35)]
                "
              />

              {/* HEADER */}

              <div
                className="
                  relative
                  z-10
                  grid
                  grid-cols-[0.82fr_1.16fr_1.06fr_1.06fr]

                  border-b
                  border-[#DCE5EB]
                "
              >
                <div
                  className="
                    flex
                    min-h-[82px]
                    items-center

                    px-5
                    xl:min-h-[86px]
                    xl:px-8
                  "
                >
                  <span
                    className="
                      font-[var(--font-new-york)]
                      text-[0.95rem]
                      font-semibold
                      text-[#0B2A52]

                      xl:text-[1.02rem]
                    "
                  >
                    What Matters
                  </span>
                </div>

                {/* SHARP RAYS */}

                <div
                  className="
                    relative
                    flex
                    min-h-[82px]
                    items-center

                    px-5
                    xl:min-h-[86px]
                    xl:px-8
                  "
                >
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[3px]
                      bg-[#C6A77A]
                    "
                  />

                  <div>
                    <span
                      className="
                        block
                        text-[0.46rem]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#B79A72]
                      "
                    >
                      Our Model
                    </span>

                    <span
                      className="
                        mt-1
                        block

                        font-[var(--font-new-york)]
                        text-[1.08rem]
                        font-semibold
                        tracking-[-0.025em]
                        text-[#0B2A52]

                        xl:text-[1.23rem]
                      "
                    >
                      Sharp Rays Agency
                    </span>
                  </div>
                </div>

                {/* AGENCY */}

                <div
                  className="
                    flex
                    min-h-[82px]
                    items-center

                    border-l
                    border-[#DDE6EC]

                    px-5
                    xl:min-h-[86px]
                    xl:px-8
                  "
                >
                  <span
                    className="
                      font-[var(--font-new-york)]
                      text-[0.9rem]
                      font-medium
                      leading-[1.35]
                      text-[#536D80]

                      xl:text-[1rem]
                    "
                  >
                    Traditional Agency Model
                  </span>
                </div>

                {/* FREELANCER */}

                <div
                  className="
                    flex
                    min-h-[82px]
                    items-center

                    border-l
                    border-[#DDE6EC]

                    px-5
                    xl:min-h-[86px]
                    xl:px-8
                  "
                >
                  <span
                    className="
                      font-[var(--font-new-york)]
                      text-[0.9rem]
                      font-medium
                      leading-[1.35]
                      text-[#536D80]

                      xl:text-[1rem]
                    "
                  >
                    Typical Freelancer
                  </span>
                </div>
              </div>

              {/* ROWS */}

              {comparisonRows.map((item, index) => (
                <motion.div
                  key={`desktop-${item.feature}`}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.45,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.035,
                    ease,
                  }}
                  className={`
                    group
                    relative
                    z-10

                    grid
                    grid-cols-[0.82fr_1.16fr_1.06fr_1.06fr]

                    ${
                      index !== comparisonRows.length - 1
                        ? "border-b border-[#E1E8ED]"
                        : ""
                    }
                  `}
                >
                  {/* FEATURE */}

                  <div
                    className="
                      flex
                      min-h-[82px]
                      items-center

                      bg-white/75

                      px-5
                      py-4

                      transition-colors
                      duration-300

                      group-hover:bg-[#FAFCFD]

                      xl:min-h-[88px]
                      xl:px-8
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          hidden
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#B79A72]/25

                          text-[0.42rem]
                          font-semibold
                          text-[#B79A72]

                          xl:flex
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          font-[var(--font-new-york)]
                          text-[0.88rem]
                          font-semibold
                          leading-[1.35]
                          text-[#0B2A52]

                          xl:text-[0.96rem]
                        "
                      >
                        {item.feature}
                      </span>
                    </div>
                  </div>

                  {/* SHARP RAYS */}

                  <div
                    className="
                      relative
                      flex
                      min-h-[82px]
                      items-center

                      px-5
                      py-4

                      transition-colors
                      duration-300

                      group-hover:bg-white/30

                      xl:min-h-[88px]
                      xl:px-8
                    "
                  >
                    <p
                      className="
                        relative
                        z-10
                        max-w-[330px]

                        text-[0.78rem]
                        font-medium
                        leading-[1.58]
                        text-[#0B2A52]

                        xl:text-[0.84rem]
                      "
                    >
                      {item.sharpRays}
                    </p>

                    <motion.span
                      initial={{
                        scaleX: reduceMotion ? 1 : 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: reduceMotion
                          ? 0
                          : 0.1 + index * 0.03,
                      }}
                      style={{
                        transformOrigin: "left",
                      }}
                      className="
                        absolute
                        bottom-0
                        left-5

                        h-[2px]
                        w-8
                        bg-[#C6A77A]

                        xl:left-8
                      "
                    />
                  </div>

                  {/* AGENCY */}

                  <div
                    className="
                      flex
                      min-h-[82px]
                      items-center

                      border-l
                      border-[#E0E7EC]

                      bg-white/70

                      px-5
                      py-4

                      transition-colors
                      duration-300

                      group-hover:bg-[#FAFCFD]

                      xl:min-h-[88px]
                      xl:px-8
                    "
                  >
                    <p
                      className="
                        max-w-[290px]

                        text-[0.76rem]
                        leading-[1.58]
                        text-[#6B7C8A]

                        xl:text-[0.82rem]
                      "
                    >
                      {item.agency}
                    </p>
                  </div>

                  {/* FREELANCER */}

                  <div
                    className="
                      flex
                      min-h-[82px]
                      items-center

                      border-l
                      border-[#E0E7EC]

                      bg-white/70

                      px-5
                      py-4

                      transition-colors
                      duration-300

                      group-hover:bg-[#FAFCFD]

                      xl:min-h-[88px]
                      xl:px-8
                    "
                  >
                    <p
                      className="
                        max-w-[270px]

                        text-[0.76rem]
                        leading-[1.58]
                        text-[#6B7C8A]

                        xl:text-[0.82rem]
                      "
                    >
                      {item.freelancer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.55,
            delay: reduceMotion ? 0 : 0.12,
          }}
          className="
            mx-auto
            mt-6
            flex
            max-w-[1330px]
            flex-col
            gap-4

            px-1

            sm:mt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-2

            lg:mt-5
          "
        >
          <p
            className="
              max-w-[760px]

              text-[0.62rem]
              leading-[1.65]
              text-[#8B98A2]

              sm:text-[0.66rem]
            "
          >
            Working models, timelines and technical approaches vary
            by provider and project. This comparison reflects the way
            Sharp Rays is designed to work.
          </p>

          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#C6A77A]
              "
            />

            <span
              className="
                text-[0.42rem]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#7F919F]
              "
            >
              Connected by design
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}