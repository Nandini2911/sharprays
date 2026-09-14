"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  LayoutGrid,
  Menu,
  Zap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   ONLY REPLACE THESE TWO IMAGES
========================================================= */

const desktopRightImage = "/services/webdev/web_desktop.png";
const mobileMiddleImage = "/services/webdev/web-mobile.png";

/* =========================================================
   SMALL SUPPORTING PILLS
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
        overflow-hidden
        bg-[#FCFBF8]
        pb-8
        pt-24
        sm:pt-28
        lg:pt-32
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* LEFT CREAM SHAPE */}
        <div
          className="
            absolute
            -left-[320px]
            top-[70px]
            h-[760px]
            w-[520px]
            rotate-[18deg]
            rounded-[50%]
            border
            border-[#EFE7DD]
            bg-[#F8F3EC]/70
          "
        />

        {/* CENTER SOFT SHAPE */}
        <div
          className="
            absolute
            left-[42%]
            top-[-270px]
            h-[850px]
            w-[520px]
            rotate-[29deg]
            rounded-[50%]
            border
            border-[#EDF1F4]
            bg-white/20
          "
        />

        {/* RIGHT BLUE GLOW */}
        <div
          className="
            absolute
            -right-[260px]
            top-[40px]
            h-[720px]
            w-[720px]
            rounded-full
            bg-[#EDF5FB]
            blur-[95px]
          "
        />

        {/* GOLD SOFT GLOW */}
        <div
          className="
            absolute
            right-[18%]
            top-[7%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#F2E8DB]/55
            blur-[80px]
          "
        />

        {/* BOTTOM SOFT BLUE */}
        <div
          className="
            absolute
            bottom-[-260px]
            left-[28%]
            h-[420px]
            w-[850px]
            rounded-[50%]
            bg-[#EEF5FB]/90
            blur-[85px]
          "
        />
      </div>

     

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div
        className="
          mx-auto
          grid
          max-w-[1480px]
          items-center
          gap-14
          px-6
          sm:px-8
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-10
          lg:px-12
          xl:px-16
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.78, ease }}
          className="relative z-20"
        >
          {/* LABEL */}
          <div
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-9 bg-[#B79A72]" />

            <span
              className="
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#9D7650]
                sm:text-[0.7rem]
              "
            >
              Website Design &amp; Development
            </span>
          </div>

          {/* HEADING */}
          <h1
            id="website-development-heading"
            className="
              max-w-[700px]
              text-[2.35rem]
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

          {/* PARAGRAPH 1 */}
          <p
            className="
              mt-8
              max-w-[625px]
              text-[0.96rem]
              leading-[1.78]
              text-[#536B84]
              sm:text-[1rem]
            "
          >
            Sharp Rays designs and develops fast, responsive websites that help
            businesses communicate clearly, build credibility and turn visits
            into meaningful action.
          </p>

          {/* PARAGRAPH 2 */}
          <p
            className="
              mt-5
              max-w-[625px]
              text-[0.96rem]
              leading-[1.78]
              text-[#536B84]
              sm:text-[1rem]
            "
          >
            From strategy and user experience to design, development,
            performance and launch, we bring every part of your website
            together around one purpose:
          </p>

          {/* STRONG MESSAGE */}
          <div
            className="
              mt-7
              max-w-[630px]
              border-l-[3px]
              border-[#B79A72]
              pl-5
            "
          >
            <p
              className="
                text-[1rem]
                font-semibold
                leading-[1.55]
                text-[#0B2A52]
                sm:text-[1.04rem]
              "
            >
              Make it easier for the right customer to understand your business
              and take the next step.
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              mt-9
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                gap-4
                rounded-full
                bg-gradient-to-r
                from-[#A77D4C]
                via-[#C09A65]
                to-[#D2AD78]
                px-7
                text-[0.9rem]
                font-semibold
                text-white
                shadow-[0_15px_34px_rgba(183,154,114,0.28)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_20px_44px_rgba(183,154,114,0.35)]
              "
            >
              Build My Website

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2A52]/75
                "
              >
                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </Link>

            <Link
              href="#our-approach"
              className="
                group
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                gap-5
                rounded-full
                border
                border-[#0B2A52]
                bg-white/85
                px-7
                text-[0.9rem]
                font-semibold
                text-[#0B2A52]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#F7FAFD]
              "
            >
              Explore Our Approach

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>

          {/* SUPPORTING LINE */}
          <p
            className="
              mt-8
              text-[0.57rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#637B93]
              sm:text-[0.62rem]
            "
          >
            Strategy
            <span className="mx-2 text-[#B79A72]">·</span>
            Design
            <span className="mx-2 text-[#B79A72]">·</span>
            Develop
            <span className="mx-2 text-[#B79A72]">·</span>
            Improve
          </p>
        </motion.div>

        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.82, ease }}
          className="
            relative
            mx-auto
            w-full
            max-w-[700px]
            lg:mx-0
          "
        >
          {/* GLOW */}
          <div
            className="
              absolute
              left-[52%]
              top-[53%]
              h-[400px]
              w-[580px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#DCEAF5]/55
              blur-[70px]
            "
          />

          {/* =================================================
              DESKTOP WEBSITE CARD
          ================================================= */}

          <div
            className="
              relative
              z-20
              ml-auto
              mt-7
              w-[92%]
              overflow-hidden
              rounded-[28px]
              border
              border-[#D8CDBE]
              bg-white
              p-[7px]
              shadow-[0_34px_85px_rgba(11,42,82,0.15)]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[21px]
                border
                border-[#E0E6EA]
                bg-white
              "
            >
              {/* BROWSER BAR */}
              <div
                className="
                  flex
                  h-[38px]
                  items-center
                  gap-2
                  border-b
                  border-[#E8ECEF]
                  bg-[#FAFBFB]
                  px-4
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#E96F5B]" />
                <span className="h-2 w-2 rounded-full bg-[#F2BB43]" />
                <span className="h-2 w-2 rounded-full bg-[#52B76B]" />

                <div
                  className="
                    mx-auto
                    flex
                    h-[23px]
                    w-[42%]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E0E5E9]
                    bg-white
                  "
                >
                  <span className="text-[6.5px] text-[#96A3AD]">
                    sharprays.co
                  </span>
                </div>
              </div>

              {/* =============================================
                  MINI WEBSITE NAVBAR
                  THIS IS PART OF THE VISUAL
              ============================================= */}

              <div
                className="
                  flex
                  h-[58px]
                  items-center
                  justify-between
                  border-b
                  border-[#EEF1F3]
                  bg-white
                  px-5
                "
              >
                {/* Mini Logo */}
                <div className="flex items-center">
                  <Image
                    src="/logo/sharp-rays-logo.png"
                    alt="Sharp Rays"
                    width={95}
                    height={30}
                    className="h-auto w-[85px]"
                  />
                </div>

                {/* Mini Menu */}
                <div className="flex items-center gap-5">
                  <span className="hidden text-[6.5px] font-medium text-[#617388] sm:block">
                    Home
                  </span>

                  <span className="hidden text-[6.5px] font-medium text-[#617388] sm:block">
                    About
                  </span>

                  <span className="hidden text-[6.5px] font-medium text-[#617388] sm:block">
                    Services
                  </span>

                  <span className="hidden text-[6.5px] font-medium text-[#617388] sm:block">
                    Work
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-gradient-to-r
                      from-[#A77D4C]
                      to-[#CCAA78]
                      px-4
                      py-2
                      text-[6.5px]
                      font-semibold
                      text-white
                    "
                  >
                    Let&apos;s Talk
                  </span>
                </div>
              </div>

              {/* =============================================
                  MINI DESKTOP HERO
              ============================================= */}

              <div
                className="
                  grid
                  min-h-[255px]
                  grid-cols-[1.05fr_0.95fr]
                  bg-[#FCFBF8]
                "
              >
                {/* -----------------------------
                    LEFT SIDE CONTENT
                ----------------------------- */}

                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    px-7
                    py-7
                  "
                >
                  <span
                    className="
                      text-[6px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#B18458]
                    "
                  >
                    Digital Experience
                  </span>

                  <h3
                    className="
                      mt-4
                      max-w-[235px]
                      text-[1.45rem]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.04em]
                      text-[#0B2A52]
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
                      mt-4
                      max-w-[230px]
                      text-[7px]
                      leading-[1.65]
                      text-[#617489]
                    "
                  >
                    We design and develop digital experiences that help
                    ambitious businesses grow with clarity.
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <button
                      type="button"
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#0B2A52]
                        px-4
                        py-2
                        text-[6.5px]
                        font-semibold
                        text-white
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
                        gap-2
                        text-[6.5px]
                        font-semibold
                        text-[#0B2A52]
                      "
                    >
                      View Work
                      <ArrowUpRight size={8} />
                    </button>
                  </div>
                </div>

                {/* -----------------------------
                    RIGHT SIDE
                ----------------------------- */}

                <div
                  className="
                    relative
                    overflow-hidden
                    border-l
                    border-[#ECE6DE]
                    bg-[#F2EEE8]
                  "
                >
                  {/* Ideas Copy */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      z-20
                    "
                  >
                    <p
                      className="
                        text-[0.66rem]
                        font-semibold
                        leading-[1.35]
                        text-[#0B2A52]
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

                    <span className="mt-4 block h-px w-7 bg-[#B79A72]" />
                  </div>

                  {/* =========================================
                      YOUR DESKTOP IMAGE
                      ONLY REPLACE THIS IMAGE
                  ========================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-[78%]
                      w-[72%]
                      overflow-hidden
                    "
                  >
                    <Image
                      src={desktopRightImage}
                      alt="Website visual"
                      fill
                      priority
                      className="
                        object-cover
                        object-center
                      "
                    />
                  </div>
                </div>
              </div>

              {/* =============================================
                  MINI WEBSITE STATS
              ============================================= */}

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
                <div className="px-6 py-3">
                  <p className="text-[0.62rem] font-bold text-[#0B2A52]">
                    FAST
                  </p>

                  <p className="mt-0.5 text-[0.43rem] text-[#8897A5]">
                    Loading Websites
                  </p>
                </div>

                <div className="px-6 py-3">
                  <p className="text-[0.62rem] font-bold text-[#0B2A52]">
                    100%
                  </p>

                  <p className="mt-0.5 text-[0.43rem] text-[#8897A5]">
                    Focused on Results
                  </p>
                </div>

                <div className="px-6 py-3">
                  <p className="text-[0.62rem] font-bold text-[#0B2A52]">
                    SEO
                  </p>

                  <p className="mt-0.5 text-[0.43rem] text-[#8897A5]">
                    Built for Growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              REAL RESULTS CARD
          ================================================= */}

          <div
            className="
              absolute
              right-[3%]
              top-0
              z-40
              hidden
              min-w-[174px]
              rounded-[14px]
              border
              border-white
              bg-white/90
              px-4
              py-3
              shadow-[0_16px_42px_rgba(11,42,82,0.08)]
              backdrop-blur-xl
              sm:block
            "
          >
            <div className="flex items-center gap-3">
              <BarChart3
                size={19}
                strokeWidth={1.9}
                className="text-[#B79A72]"
              />

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[0.61rem] font-bold text-[#0B2A52]">
                    Real Results
                  </p>

                  <span className="h-2 w-2 rounded-full bg-[#48AF6E]" />
                </div>

                <p className="mt-0.5 text-[0.46rem] text-[#8B9AA8]">
                  Websites that perform
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE PREVIEW
          ================================================= */}

          <div
            className="
              absolute
              -right-[1%]
              bottom-[15%]
              z-40
              hidden
              w-[145px]
              rounded-[29px]
              border-[5px]
              border-[#0B2A52]
              bg-[#0B2A52]
              shadow-[0_25px_60px_rgba(11,42,82,0.25)]
              sm:block
              xl:-right-[4%]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[22px]
                bg-[#FCFBF8]
                px-3
                pb-4
                pt-4
              "
            >
              {/* Phone top */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1.5
                  h-[12px]
                  w-[46px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#0B2A52]
                "
              />

              {/* Phone Navbar */}
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
                  className="h-5 w-auto object-contain"
                />

                <Menu
                  size={12}
                  strokeWidth={2}
                  className="text-[#0B2A52]"
                />
              </div>

              {/* Mobile Copy */}
              <div className="mt-5">
                <h4
                  className="
                    text-[1rem]
                    font-medium
                    leading-[1.05]
                    tracking-[-0.035em]
                    text-[#0B2A52]
                  "
                >
                  Clear on
                  <br />
                  every screen.
                </h4>

                <p
                  className="
                    mt-3
                    text-[0.46rem]
                    leading-[1.55]
                    text-[#6D7F91]
                  "
                >
                  Beautiful websites.
                  <br />
                  Real business results.
                </p>

                {/* =========================================
                    YOUR MOBILE IMAGE
                    ONLY REPLACE THIS IMAGE
                ========================================= */}

                <div
                  className="
                    relative
                    mt-4
                    aspect-[1.18/1]
                    overflow-hidden
                    rounded-[12px]
                    bg-[#EEEAE4]
                  "
                >
                  <Image
                    src={mobileMiddleImage}
                    alt="Mobile website visual"
                    fill
                    priority
                    className="
                      object-cover
                      object-center
                    "
                  />
                </div>

                {/* Mobile Button */}
                <button
                  type="button"
                  className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    bg-gradient-to-r
                    from-[#A77D4C]
                    to-[#D0AA75]
                    px-4
                    py-2.5
                    text-[0.5rem]
                    font-semibold
                    text-white
                  "
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={8} />
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              STRATEGY / DESIGN / DEVELOPMENT PILLS
          ================================================= */}

          <div
            className="
              relative
              z-30
              mt-7
              grid
              gap-3
              pl-[8%]
              pr-[5%]
              sm:grid-cols-3
            "
          >
            {expertise.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white
                  bg-white/90
                  px-4
                  py-3
                  shadow-[0_10px_30px_rgba(11,42,82,0.06)]
                  backdrop-blur-xl
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

                <div>
                  <p className="text-[0.55rem] font-bold text-[#0B2A52]">
                    {title}
                  </p>

                  <p className="mt-0.5 text-[0.41rem] text-[#8796A5]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        

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
              text-[#0B2A52]/25
              xl:block
            "
          >
            A clearer
            <br />
            tomorrow
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FEATURE STRIP
      ===================================================== */}

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.72, ease }}
        className="
          mx-auto
          mt-14
          max-w-[1480px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            flex
            flex-col
            gap-7
            border-t
            border-[#D9CDBD]
            pt-7
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-10
              gap-y-4
            "
          >
            {[
              "Clear Strategy",
              "Thoughtful UX",
              "Strong Development",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EFE4D3]
                    text-[#9D774D]
                  "
                >
                  <Check size={10} strokeWidth={2.5} />
                </span>

                <span
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#637A91]
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="#next-section"
            className="
              group
              flex
              items-center
              gap-4
              self-start
              lg:self-auto
            "
          >
            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.23em]
                text-[#0B2A52]
              "
            >
              Scroll to Explore
            </span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#B79A72]
                text-[#0B2A52]
                transition-all
                duration-300

                group-hover:bg-[#0B2A52]
                group-hover:text-white
              "
            >
              <ArrowDown
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}