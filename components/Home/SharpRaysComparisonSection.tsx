"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const comparisonRows = [
 
 
 
 
 

  /* =====================================================
     NEW CONTENT ADDED
  ===================================================== */

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
    sharpRays: "Structured data, E-E-A-T signals & AI-search foundations",
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
        py-20
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

     
       

       
       

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
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
    amount: 0.3,
  }}
  transition={{
    duration: 0.75,
    ease,
  }}
  className="
    mx-auto
    max-w-[1000px]
    text-center
  "
>
  {/* LABEL */}

  <div
    className="
      mx-auto
      flex
      w-fit
      items-center
      justify-center
      gap-3
      sm:gap-4
    "
  >
    {/* LEFT LINE */}

    <span
      className="
        block
        h-px
        w-8
        shrink-0

        bg-gradient-to-r
        from-transparent
        to-[#B79A72]

        sm:w-10
        md:w-12
      "
    />

    {/* LABEL TEXT */}

    <span
      className="
        whitespace-nowrap

        text-[0.56rem]
        font-medium
        uppercase
        tracking-[0.21em]
        text-[#B79A72]

        sm:text-[0.62rem]
      "
    >
      Working With SharpRays
    </span>

    {/* RIGHT LINE */}

    <span
      className="
        block
        h-px
        w-8
        shrink-0

        bg-gradient-to-l
        from-transparent
        to-[#B79A72]

        sm:w-10
        md:w-12
      "
    />
  </div>
</motion.div>

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
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
              duration: 0.82,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
            className="
              mx-auto
              mt-6
              max-w-[960px]

              font-[var(--font-new-york)]

              text-[2.1rem]
              font-medium
              leading-[1.03]
              tracking-[-0.045em]

              text-[#0B2A52]

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
              y: reduceMotion ? 0 : 16,
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
              duration: 0.68,
              delay: reduceMotion ? 0 : 0.16,
            }}
            className="
              mx-auto
              mt-5
              max-w-[760px]

              text-[0.92rem]
              leading-[1.75]

              text-[#64748B]

              sm:text-[1rem]
            "
          >
            Different working models create different experiences. Here&apos;s
            how Sharp Rays compares across the areas that often matter most
            when choosing a digital partner.
          </motion.p>
       

        {/* =====================================================
            TABLE
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
            mt-14
            max-w-[1350px]

            sm:mt-16
            lg:mt-20
          "
        >
          {/* MOBILE HINT */}

          <div
            className="
              mb-3
              flex
              items-center
              justify-between
              lg:hidden
            "
          >
            <span
              className="
                text-[0.44rem]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#8999A6]
              "
            >
              Swipe to compare
            </span>

            <span className="text-sm text-[#C6A77A]">
              →
            </span>
          </div>

          {/* =================================================
              HORIZONTAL SCROLL
          ================================================= */}

          <div
            className="
              overflow-x-auto
              pb-7

              [scrollbar-color:#CBD9E2_transparent]
              [scrollbar-width:thin]
            "
          >
            {/* =================================================
                3D STAGE
            ================================================= */}

            <div
              className="
                relative
                min-w-[1050px]
                px-3
                pb-5
                pt-2
              "
            >
              {/* BACK SHADOW LAYER 01 */}

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

              {/* BACK SHADOW LAYER 02 */}

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

              {/* =================================================
                  MAIN PREMIUM CARD
              ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[30px]

                  border
                  border-[#D7E3EA]

                  bg-white

                  shadow-[
                    0_40px_90px_rgba(11,42,82,0.11),
                    0_15px_35px_rgba(11,42,82,0.06)
                  ]
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

                {/* SHARP RAYS COLUMN DEPTH */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-[22%]
                    top-0
                    w-[31%]

                    bg-[linear-gradient(180deg,#EEF6FA_0%,#EAF3F8_100%)]

                    shadow-[
                      inset_1px_0_0_rgba(163,190,207,0.35),
                      inset_-1px_0_0_rgba(163,190,207,0.35)
                    ]
                  "
                />

                {/* =================================================
                    HEADER
                ================================================= */}

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
                  {/* FEATURE */}

                  <div
                    className="
                      flex
                      min-h-[86px]
                      items-center

                      px-6
                      xl:px-8
                    "
                  >
                    <span
                      className="
                        font-[var(--font-new-york)]
                        text-[1.02rem]
                        font-semibold
                        text-[#0B2A52]
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
                      min-h-[86px]
                      items-center

                      px-6
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
                          mt-1
                          block
                          font-[var(--font-new-york)]
                          text-[1.23rem]
                          font-semibold
                          tracking-[-0.025em]
                          text-[#0B2A52]
                        "
                      >
                        Sharprays Agency
                      </span>
                    </div>
                  </div>

                  {/* AGENCY */}

                  <div
                    className="
                      flex
                      min-h-[86px]
                      items-center

                      border-l
                      border-[#DDE6EC]

                      px-6
                      xl:px-8
                    "
                  >
                    <span
                      className="
                        font-[var(--font-new-york)]
                        text-[1rem]
                        font-medium
                        text-[#536D80]
                      "
                    >
                      Traditional Agency Model
                    </span>
                  </div>

                  {/* FREELANCER */}

                  <div
                    className="
                      flex
                      min-h-[86px]
                      items-center

                      border-l
                      border-[#DDE6EC]

                      px-6
                      xl:px-8
                    "
                  >
                    <span
                      className="
                        font-[var(--font-new-york)]
                        text-[1rem]
                        font-medium
                        text-[#536D80]
                      "
                    >
                      Typical Freelancer
                    </span>
                  </div>
                </div>

                {/* =================================================
                    ROWS
                ================================================= */}

                {comparisonRows.map((item, index) => (
                  <motion.div
                    key={`${item.feature}-${index}`}
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
                      delay: reduceMotion
                        ? 0
                        : index * 0.035,
                      ease,
                    }}
                    className={`
                      group
                      relative
                      z-10

                      grid
                      grid-cols-[0.82fr_1.16fr_1.06fr_1.06fr]

                      transition-colors
                      duration-300

                      ${
                        index !== comparisonRows.length - 1
                          ? "border-b border-[#E1E8ED]"
                          : ""
                      }
                    `}
                  >
                    {/* ===========================================
                        FEATURE
                    =========================================== */}

                    <div
                      className="
                        flex
                        min-h-[78px]
                        items-center

                        bg-white/75

                        px-6
                        py-3.5

                        transition-colors
                        duration-300

                        group-hover:bg-[#FAFCFD]

                        xl:px-8
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
                            font-[var(--font-new-york)]
                            text-[0.94rem]
                            font-semibold
                            leading-[1.3]
                            text-[#0B2A52]
                          "
                        >
                          {item.feature}
                        </span>
                      </div>
                    </div>

                    {/* ===========================================
                        SHARP RAYS
                    =========================================== */}

                    <div
                      className="
                        relative
                        flex
                        min-h-[78px]
                        items-center

                        px-6
                        py-3.5

                        transition-all
                        duration-300

                        group-hover:bg-white/25

                        xl:px-8
                      "
                    >
                      <p
                        className="
                          relative
                          z-10

                          max-w-[330px]

                          text-[0.82rem]
                          font-medium
                          leading-[1.55]

                          text-[#0B2A52]
                        "
                      >
                        {item.sharpRays}
                      </p>

                      {/* GOLD DETAIL */}

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
                          left-6

                          h-[2px]
                          w-8

                          bg-[#C6A77A]

                          xl:left-8
                        "
                      />
                    </div>

                    {/* ===========================================
                        AGENCY
                    =========================================== */}

                    <div
                      className="
                        flex
                        min-h-[78px]
                        items-center

                        border-l
                        border-[#E0E7EC]

                        bg-white/70

                        px-6
                        py-3.5

                        group-hover:bg-[#FAFCFD]

                        xl:px-8
                      "
                    >
                      <p
                        className="
                          max-w-[290px]

                          text-[0.8rem]
                          leading-[1.55]

                          text-[#6B7C8A]
                        "
                      >
                        {item.agency}
                      </p>
                    </div>

                    {/* ===========================================
                        FREELANCER
                    =========================================== */}

                    <div
                      className="
                        flex
                        min-h-[78px]
                        items-center

                        border-l
                        border-[#E0E7EC]

                        bg-white/70

                        px-6
                        py-3.5

                        group-hover:bg-[#FAFCFD]

                        xl:px-8
                      "
                    >
                      <p
                        className="
                          max-w-[270px]

                          text-[0.8rem]
                          leading-[1.55]

                          text-[#6B7C8A]
                        "
                      >
                        {item.freelancer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              FOOTNOTE
          ================================================= */}

          <div
            className="
              mt-3
              flex
              flex-col
              gap-3
              px-2

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                max-w-[760px]
                text-[0.66rem]
                leading-[1.6]
                text-[#8B98A2]
              "
            >
              Working models, timelines and technical approaches vary by
              provider and project. This comparison reflects the way Sharp Rays
              is designed to work.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}