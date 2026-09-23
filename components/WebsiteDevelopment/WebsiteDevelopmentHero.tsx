"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  LayoutGrid,
  Menu,
  Zap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   IMAGES
========================================================= */

const desktopRightImage = "/services/webdev/web_desktop.png";
const mobileMiddleImage = "/services/webdev/web-mobile.png";

/* =========================================================
   SUPPORTING PILLS
========================================================= */

const expertise = [
  {
    icon: Zap,
    title: "Strategy",
    text: "Find the opportunity",
  },
  {
    icon: LayoutGrid,
    title: "Design",
    text: "Craft the experience",
  },
  {
    icon: Code2,
    title: "Development",
    text: "Bring it to life",
  },
];

export default function WebsiteDevelopmentHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="website-development-hero"
      aria-labelledby="website-development-heading"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-white
        pb-14
        pt-24

        sm:pb-16
        sm:pt-28

        md:pb-20
        md:pt-32

        lg:pb-16
        lg:pt-32

        xl:pb-20
        xl:pt-36
      "
    >
      {/* =====================================================
          WHITE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 bg-white" />

      {/* =====================================================
          SUBTLE BLUE GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-260px]
          top-[18%]
          -z-10
          hidden
          h-[640px]
          w-[640px]
          rounded-full
          bg-[#EEF5FB]/55
          blur-[120px]

          lg:block
        "
      />

      {/* =====================================================
          SUBTLE WARM ACCENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[10%]
          -z-10
          hidden
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#F8F3EC]/60
          blur-[100px]

          xl:block
        "
      />

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1480px]
          items-center
          gap-12
          px-4

          sm:gap-14
          sm:px-6

          md:gap-16
          md:px-8

          lg:grid-cols-[0.94fr_1.06fr]
          lg:gap-8
          lg:px-10

          xl:grid-cols-[0.92fr_1.08fr]
          xl:gap-12
          xl:px-14

          2xl:gap-16
          2xl:px-16
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -36,
                  y: 10,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 0.78,
            ease,
          }}
          className="
            relative
            z-20
            mx-auto
            w-full
            max-w-[720px]

            lg:mx-0
          "
        >
          {/* =================================================
              LABEL
          ================================================= */}

          <div
            className="
              mb-6
              flex
              items-center
              gap-3

              sm:mb-7
              sm:gap-4

              lg:mb-8
            "
          >
            <span
              className="
                h-px
                w-7
                shrink-0
                bg-[#B79A72]

                sm:w-9
              "
            />

            <span
              className="
                text-[0.59rem]
                font-semibold
                uppercase
                leading-5
                tracking-[0.22em]
                text-[#9D7650]

                sm:text-[0.65rem]
                sm:tracking-[0.26em]

                md:text-[0.7rem]
                md:tracking-[0.3em]
              "
            >
              Website Design &amp; Development
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            id="website-development-heading"
            className="
              max-w-[700px]
              text-[2.15rem]
              font-medium
              leading-[1.04]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[2.6rem]

              md:text-[2.95rem]

              lg:text-[3.1rem]

              xl:text-[3.35rem]
            "
          >
            Websites Built to Be Understood,{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                tracking-[-0.03em]
                text-[#B18458]
              "
            >
              Trusted
            </span>{" "}
            and Used.
          </h1>

          {/* =================================================
              PARAGRAPH 1
          ================================================= */}

          <p
            className="
              mt-6
              max-w-[625px]
              text-[0.91rem]
              leading-[1.75]
              text-[#536B84]

              sm:mt-7
              sm:text-[0.96rem]

              md:mt-8
              md:text-[1rem]
            "
          >
            Sharp Rays designs and develops fast, responsive websites that help
            businesses communicate clearly, build credibility and turn visits
            into meaningful action.
          </p>

          {/* =================================================
              PARAGRAPH 2
          ================================================= */}

          <p
            className="
              mt-4
              max-w-[625px]
              text-[0.91rem]
              leading-[1.75]
              text-[#536B84]

              sm:mt-5
              sm:text-[0.96rem]

              md:text-[1rem]
            "
          >
            From strategy and user experience to design, development,
            performance and launch, we bring every part of your website
            together around one purpose:
          </p>

          {/* =================================================
              STRONG MESSAGE
          ================================================= */}

          <div
            className="
              mt-6
              max-w-[630px]
              border-l-[3px]
              border-[#B79A72]
              pl-4

              sm:mt-7
              sm:pl-5
            "
          >
            <p
              className="
                text-[0.94rem]
                font-semibold
                leading-[1.6]
                text-[#0B2A52]

                sm:text-[1rem]

                md:text-[1.04rem]
              "
            >
              Make it easier for the right customer to understand your business
              and take the next step.
            </p>
          </div>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-3

              sm:mt-9
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
            "
          >
            {/* PRIMARY CTA */}

            <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-[#A77D4C]
                via-[#C09A65]
                to-[#D2AD78]
                px-5
                text-[0.86rem]
                font-semibold
                text-white
                shadow-[0_13px_30px_rgba(183,154,114,0.24)]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_18px_38px_rgba(183,154,114,0.32)]

                sm:min-h-[54px]
                sm:w-auto
                sm:gap-4
                sm:px-7
                sm:text-[0.9rem]
              "
            >
              Build My Website
            </Link>

            {/* SECONDARY CTA */}

            <Link
              href="#our-approach"
              className="
                group
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#0B2A52]
                bg-white
                px-5
                text-[0.86rem]
                font-semibold
                text-[#0B2A52]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#F8FAFC]

                sm:min-h-[54px]
                sm:w-auto
                sm:gap-5
                sm:px-7
                sm:text-[0.9rem]
              "
            >
              Explore Our Approach
            </Link>
          </div>

          {/* =================================================
              SUPPORTING LINE
          ================================================= */}

          <div
            className="
              mt-7
              flex
              max-w-[600px]
              flex-wrap
              items-center
              gap-x-2
              gap-y-2
              text-[0.53rem]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#637B93]

              sm:mt-8
              sm:gap-x-2.5
              sm:text-[0.57rem]
              sm:tracking-[0.25em]

              md:text-[0.62rem]
              md:tracking-[0.28em]
            "
          >
            <span>Strategy</span>

            <span className="text-[#B79A72]">·</span>

            <span>Design</span>

            <span className="text-[#B79A72]">·</span>

            <span>Develop</span>

            <span className="text-[#B79A72]">·</span>

            <span>Improve</span>
          </div>
        </motion.div>

        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 36,
                  y: 12,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.82,
            ease,
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-[720px]

            lg:mx-0
            lg:max-w-none
          "
        >
          {/* =================================================
              GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -z-10
              h-[75%]
              w-[85%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#EAF2F8]/60
              blur-[65px]

              sm:h-[82%]
              sm:w-[82%]

              lg:blur-[80px]
            "
          />

          {/* =================================================
              DESKTOP WEBSITE CARD
          ================================================= */}

          <div
            className="
              relative
              z-20
              mx-auto
              w-full
              overflow-hidden
              rounded-[18px]
              border
              border-[#D8CDBE]
              bg-white
              p-[4px]
              shadow-[0_22px_60px_rgba(11,42,82,0.12)]

              sm:w-[96%]
              sm:rounded-[24px]
              sm:p-[6px]
              sm:shadow-[0_28px_70px_rgba(11,42,82,0.14)]

              md:w-[94%]

              lg:ml-auto
              lg:mr-0
              lg:mt-7
              lg:w-[94%]

              xl:w-[92%]
              xl:rounded-[28px]
              xl:p-[7px]
              xl:shadow-[0_34px_85px_rgba(11,42,82,0.15)]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[14px]
                border
                border-[#E0E6EA]
                bg-white

                sm:rounded-[18px]

                xl:rounded-[21px]
              "
            >
              {/* =================================================
                  BROWSER BAR
              ================================================= */}

              <div
                className="
                  flex
                  h-[34px]
                  items-center
                  gap-1.5
                  border-b
                  border-[#E8ECEF]
                  bg-[#FAFBFB]
                  px-3

                  sm:h-[38px]
                  sm:gap-2
                  sm:px-4
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#E96F5B]

                    sm:h-2
                    sm:w-2
                  "
                />

                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#F2BB43]

                    sm:h-2
                    sm:w-2
                  "
                />

                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#52B76B]

                    sm:h-2
                    sm:w-2
                  "
                />

                <div
                  className="
                    mx-auto
                    flex
                    h-[20px]
                    w-[48%]
                    min-w-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E0E5E9]
                    bg-white

                    sm:h-[23px]
                    sm:w-[42%]
                  "
                >
                  <span
                    className="
                      truncate
                      px-2
                      text-[5.5px]
                      text-[#96A3AD]

                      sm:text-[6.5px]
                    "
                  >
                    sharprays.co
                  </span>
                </div>

                <div
                  className="
                    w-[22px]
                    shrink-0

                    sm:w-[30px]
                  "
                />
              </div>

              {/* =================================================
                  MINI WEBSITE NAVBAR
              ================================================= */}

              <div
                className="
                  flex
                  h-[48px]
                  items-center
                  justify-between
                  border-b
                  border-[#EEF1F3]
                  bg-white
                  px-3

                  sm:h-[54px]
                  sm:px-4

                  md:h-[58px]
                  md:px-5
                "
              >
                <Image
                  src="/logo/sharp-rays-logo.png"
                  alt="Sharp Rays"
                  width={95}
                  height={30}
                  className="
                    h-auto
                    w-[60px]

                    sm:w-[72px]

                    md:w-[85px]
                  "
                />

                {/* =================================================
                    MOBILE MENU VISUAL
                ================================================= */}

                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F7F8FA]

                    md:hidden
                  "
                >
                  <Menu
                    size={12}
                    strokeWidth={2}
                    className="text-[#0B2A52]"
                  />
                </div>

                {/* =================================================
                    DESKTOP NAV VISUAL
                ================================================= */}

                <div
                  className="
                    hidden
                    items-center
                    gap-3

                    md:flex

                    lg:gap-4

                    xl:gap-5
                  "
                >
                  <span className="text-[6px] font-medium text-[#617388]">
                    Home
                  </span>

                  <span className="text-[6px] font-medium text-[#617388]">
                    About
                  </span>

                  <span className="text-[6px] font-medium text-[#617388]">
                    Services
                  </span>

                  <span
                    className="
                      hidden
                      text-[6px]
                      font-medium
                      text-[#617388]

                      lg:block
                    "
                  >
                    Work
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-gradient-to-r
                      from-[#A77D4C]
                      to-[#CCAA78]
                      px-3
                      py-1.5
                      text-[6px]
                      font-semibold
                      text-white

                      xl:px-4
                      xl:py-2
                      xl:text-[6.5px]
                    "
                  >
                    Let&apos;s Talk
                  </span>
                </div>
              </div>

              {/* =================================================
                  MINI WEBSITE HERO
              ================================================= */}

              <div
                className="
                  relative
                  bg-[#FCFBF8]

                  md:grid
                  md:min-h-[230px]
                  md:grid-cols-[1.05fr_0.95fr]

                  lg:min-h-[240px]

                  xl:min-h-[255px]
                "
              >
                {/* =================================================
                    LEFT MINI HERO CONTENT
                ================================================= */}

                <div
                  className="
                    flex
                    min-h-[220px]
                    flex-col
                    justify-center
                    px-5
                    py-7

                    sm:min-h-[235px]
                    sm:px-7

                    md:min-h-0
                    md:px-5
                    md:py-6

                    lg:px-6

                    xl:px-7
                    xl:py-7
                  "
                >
                  <span
                    className="
                      text-[5.5px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#B18458]

                      sm:text-[6px]
                      sm:tracking-[0.22em]
                    "
                  >
                    Digital Experience
                  </span>

                  <h3
                    className="
                      mt-3
                      max-w-[250px]
                      text-[1.28rem]
                      font-medium
                      leading-[1.06]
                      tracking-[-0.04em]
                      text-[#0B2A52]

                      sm:mt-4
                      sm:text-[1.45rem]

                      md:text-[1.1rem]

                      lg:text-[1.28rem]

                      xl:text-[1.45rem]
                    "
                  >
                    Clear websites.
                    <br />

                    <span
                      className="
                        font-serif
                        font-normal
                        italic
                        text-[#B18458]
                      "
                    >
                      Stronger decisions.
                    </span>
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[250px]
                      text-[6.5px]
                      leading-[1.65]
                      text-[#617489]

                      sm:mt-4
                      sm:text-[7px]

                      md:max-w-[200px]
                      md:text-[6px]

                      lg:max-w-[220px]
                      lg:text-[6.5px]

                      xl:max-w-[230px]
                      xl:text-[7px]
                    "
                  >
                    We design and develop digital experiences that help
                    ambitious businesses grow with clarity.
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      items-center
                      gap-3

                      sm:mt-5
                      sm:gap-4

                      md:gap-2.5

                      xl:gap-4
                    "
                  >
                    <button
                      type="button"
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#0B2A52]
                        px-3
                        py-2
                        text-[6px]
                        font-semibold
                        text-white

                        sm:px-4
                        sm:text-[6.5px]
                      "
                    >
                      Start a Project

                      <ArrowUpRight size={8} />
                    </button>

                    <button
                      type="button"
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-[6px]
                        font-semibold
                        text-[#0B2A52]

                        sm:gap-2
                        sm:text-[6.5px]
                      "
                    >
                      View Work

                      <ArrowUpRight size={8} />
                    </button>
                  </div>
                </div>

                {/* =================================================
                    RIGHT SIDE — FULL COVER IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    hidden
                    min-h-[230px]
                    overflow-hidden
                    border-l
                    border-[#ECE6DE]
                    bg-[#F2EEE8]

                    md:block

                    lg:min-h-[240px]

                    xl:min-h-[255px]
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <Image
                    src={desktopRightImage}
                    alt="Website visual"
                    fill
                    priority
                    sizes="(max-width: 768px) 0px, (max-width: 1024px) 42vw, (max-width: 1280px) 36vw, 430px"
                    className="
                      object-cover
                      object-center
                    "
                  />

                  {/* =================================================
                      LEFT OVERLAY FOR TEXT
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#F7F2EB]/95
                      via-[#F7F2EB]/45
                      to-transparent
                    "
                  />

                  {/* =================================================
                      IDEAS TEXT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      z-20

                      lg:left-5
                      lg:top-5

                      xl:left-6
                      xl:top-6
                    "
                  >
                    <p
                      className="
                        text-[0.52rem]
                        font-semibold
                        leading-[1.38]
                        text-[#0B2A52]

                        lg:text-[0.58rem]

                        xl:text-[0.66rem]
                      "
                    >
                      Ideas
                      <br />
                      Design
                      <br />
                      Websites
                      <br />
                      Growth
                    </p>

                    <span
                      className="
                        mt-3
                        block
                        h-px
                        w-6
                        bg-[#B79A72]

                        xl:mt-4
                        xl:w-7
                      "
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  MINI WEBSITE STATS
              ================================================= */}

              <div
                className="
                  grid
                  grid-cols-3
                  divide-x
                  divide-[#E7EBEE]
                  border-t
                  border-[#E6EBEF]
                  bg-white
                "
              >
                {/* FAST */}

                <div
                  className="
                    min-w-0
                    px-2
                    py-2.5

                    sm:px-4
                    sm:py-3

                    lg:px-5

                    xl:px-6
                  "
                >
                  <p
                    className="
                      truncate
                      text-[0.5rem]
                      font-bold
                      text-[#0B2A52]

                      sm:text-[0.56rem]

                      xl:text-[0.62rem]
                    "
                  >
                    FAST
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[0.34rem]
                      text-[#8897A5]

                      sm:text-[0.39rem]

                      xl:text-[0.43rem]
                    "
                  >
                    Loading Websites
                  </p>
                </div>

                {/* RESULTS */}

                <div
                  className="
                    min-w-0
                    px-2
                    py-2.5

                    sm:px-4
                    sm:py-3

                    lg:px-5

                    xl:px-6
                  "
                >
                  <p
                    className="
                      truncate
                      text-[0.5rem]
                      font-bold
                      text-[#0B2A52]

                      sm:text-[0.56rem]

                      xl:text-[0.62rem]
                    "
                  >
                    100%
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[0.34rem]
                      text-[#8897A5]

                      sm:text-[0.39rem]

                      xl:text-[0.43rem]
                    "
                  >
                    Focused on Results
                  </p>
                </div>

                {/* SEO */}

                <div
                  className="
                    min-w-0
                    px-2
                    py-2.5

                    sm:px-4
                    sm:py-3

                    lg:px-5

                    xl:px-6
                  "
                >
                  <p
                    className="
                      truncate
                      text-[0.5rem]
                      font-bold
                      text-[#0B2A52]

                      sm:text-[0.56rem]

                      xl:text-[0.62rem]
                    "
                  >
                    SEO
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[0.34rem]
                      text-[#8897A5]

                      sm:text-[0.39rem]

                      xl:text-[0.43rem]
                    "
                  >
                    Built for Growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              REAL RESULTS CARD
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -12,
                    x: 8,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.4,
              ease,
            }}
            className="
              absolute
              right-[1%]
              top-[-14px]
              z-40
              hidden
              min-w-[160px]
              rounded-[14px]
              border
              border-[#E9EDF1]
              bg-white
              px-3.5
              py-2.5
              shadow-[0_14px_38px_rgba(11,42,82,0.09)]

              md:block

              lg:right-[1%]
              lg:top-0

              xl:right-[3%]
              xl:min-w-[174px]
              xl:px-4
              xl:py-3
            "
          >
            <div className="flex items-center gap-2.5">
              <BarChart3
                size={17}
                strokeWidth={1.9}
                className="
                  shrink-0
                  text-[#B79A72]

                  xl:h-[19px]
                  xl:w-[19px]
                "
              />

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p
                    className="
                      whitespace-nowrap
                      text-[0.56rem]
                      font-bold
                      text-[#0B2A52]

                      xl:text-[0.61rem]
                    "
                  >
                    Real Results
                  </p>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#48AF6E]

                      xl:h-2
                      xl:w-2
                    "
                  />
                </div>

                <p
                  className="
                    mt-0.5
                    whitespace-nowrap
                    text-[0.42rem]
                    text-[#8B9AA8]

                    xl:text-[0.46rem]
                  "
                >
                  Websites that perform
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              MOBILE PREVIEW
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 24,
                    y: 15,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.55,
              ease,
            }}
            className="
              absolute
              bottom-[15%]
              right-[-1%]
              z-40
              hidden
              w-[125px]
              rounded-[25px]
              border-[4px]
              border-[#0B2A52]
              bg-[#0B2A52]
              shadow-[0_22px_50px_rgba(11,42,82,0.22)]

              md:block

              lg:right-[-2%]
              lg:w-[132px]

              xl:right-[-4%]
              xl:w-[145px]
              xl:rounded-[29px]
              xl:border-[5px]
              xl:shadow-[0_25px_60px_rgba(11,42,82,0.25)]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[18px]
                bg-white
                px-2.5
                pb-3
                pt-3

                lg:rounded-[20px]

                xl:rounded-[22px]
                xl:px-3
                xl:pb-4
                xl:pt-4
              "
            >
              {/* =================================================
                  PHONE TOP
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1
                  h-[9px]
                  w-[38px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#0B2A52]

                  xl:top-1.5
                  xl:h-[12px]
                  xl:w-[46px]
                "
              />

              {/* =================================================
                  PHONE NAVBAR
              ================================================= */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                "
              >
                <Image
                  src="/logo/sharp-rays-logo.png"
                  alt="Sharp Rays"
                  width={25}
                  height={25}
                  className="
                    h-4
                    w-auto
                    object-contain

                    xl:h-5
                  "
                />

                <Menu
                  size={11}
                  strokeWidth={2}
                  className="
                    text-[#0B2A52]

                    xl:h-3
                    xl:w-3
                  "
                />
              </div>

              {/* =================================================
                  MOBILE CONTENT
              ================================================= */}

              <div className="mt-4 xl:mt-5">
                <h4
                  className="
                    text-[0.86rem]
                    font-medium
                    leading-[1.05]
                    tracking-[-0.035em]
                    text-[#0B2A52]

                    lg:text-[0.92rem]

                    xl:text-[1rem]
                  "
                >
                  Clear on
                  <br />
                  every screen.
                </h4>

                <p
                  className="
                    mt-2.5
                    text-[0.4rem]
                    leading-[1.55]
                    text-[#6D7F91]

                    xl:mt-3
                    xl:text-[0.46rem]
                  "
                >
                  Beautiful websites.
                  <br />
                  Real business results.
                </p>

                {/* =================================================
                    MOBILE IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    mt-3
                    aspect-[1.18/1]
                    overflow-hidden
                    rounded-[10px]
                    bg-[#EEEAE4]

                    xl:mt-4
                    xl:rounded-[12px]
                  "
                >
                  <Image
                    src={mobileMiddleImage}
                    alt="Mobile website visual"
                    fill
                    priority
                    sizes="145px"
                    className="
                      object-cover
                      object-center
                    "
                  />
                </div>

                {/* =================================================
                    MOBILE BUTTON
                ================================================= */}

                <button
                  type="button"
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    bg-gradient-to-r
                    from-[#A77D4C]
                    to-[#D0AA75]
                    px-3
                    py-2
                    text-[0.43rem]
                    font-semibold
                    text-white

                    xl:mt-4
                    xl:px-4
                    xl:py-2.5
                    xl:text-[0.5rem]
                  "
                >
                  Let&apos;s Talk

                  <ArrowUpRight size={8} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              STRATEGY / DESIGN / DEVELOPMENT PILLS
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
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
              delay: 0.25,
              ease,
            }}
            className="
              relative
              z-30
              mt-5
              grid
              grid-cols-1
              gap-2.5

              sm:mt-6
              sm:grid-cols-3
              sm:gap-2

              md:px-[4%]

              lg:mt-7
              lg:pl-[6%]
              lg:pr-[4%]

              xl:gap-3
              xl:pl-[8%]
              xl:pr-[5%]
            "
          >
            {expertise.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="
                  group
                  flex
                  min-w-0
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#E8EDF1]
                  bg-white
                  px-4
                  py-3
                  shadow-[0_8px_25px_rgba(11,42,82,0.05)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-[#D8C5AC]
                  hover:shadow-[0_13px_30px_rgba(11,42,82,0.08)]

                  sm:rounded-full
                  sm:px-3
                  sm:py-2.5

                  lg:px-4
                  lg:py-3
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F7F0E8]
                    text-[#B18458]
                  "
                >
                  <Icon size={14} strokeWidth={1.8} />
                </span>

                <div className="min-w-0">
                  <p
                    className="
                      truncate
                      text-[0.55rem]
                      font-bold
                      text-[#0B2A52]
                    "
                  >
                    {title}
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[0.41rem]
                      text-[#8796A5]
                    "
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* =================================================
              DECORATIVE TEXT
          ================================================= */}

          <div
            className="
              absolute
              -bottom-1
              right-[1%]
              hidden
              rotate-[-8deg]
              font-serif
              text-[1rem]
              italic
              leading-[1.08]
              text-[#0B2A52]/20

              2xl:block
            "
          >
            A clearer
            <br />
            tomorrow
          </div>
        </motion.div>
      </div>
    </section>
  );
}