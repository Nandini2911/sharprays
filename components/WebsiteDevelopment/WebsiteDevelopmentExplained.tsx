"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Braces,
  Check,
  Gauge,
  Layers3,
  MonitorSmartphone,
  MousePointer2,
  Search,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type DevelopmentLayer = {
  number: string;
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
};

const developmentLayers: DevelopmentLayer[] = [
  {
    number: "01",
    icon: Waypoints,
    label: "Architecture",
    title: "Structure the experience.",
    description:
      "Pages, hierarchy and journeys are organised around what users need to understand and do.",
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    label: "Responsive Experience",
    title: "Make every screen feel intentional.",
    description:
      "Layouts and interactions adapt naturally across mobile, tablet and desktop experiences.",
  },
  {
    number: "03",
    icon: Braces,
    label: "Development",
    title: "Turn the experience into a working system.",
    description:
      "Frontend development, content management, integrations and functionality work together behind the interface.",
  },
  {
    number: "04",
    icon: Gauge,
    label: "Performance",
    title: "Keep the experience fast.",
    description:
      "Technical decisions support faster loading, smoother interaction and stronger usability.",
  },
  {
    number: "05",
    icon: Search,
    label: "Technical SEO",
    title: "Make the website understandable to search engines.",
    description:
      "Clear technical foundations help important pages become easier to crawl, process and discover.",
  },
  {
    number: "06",
    icon: MousePointer2,
    label: "Purpose",
    title: "Connect the build to meaningful action.",
    description:
      "The website ultimately needs to help the right visitor understand, trust and take the next step.",
  },
];

export default function WebsiteDevelopmentExplained() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.62,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.075,
      },
    },
  };

  return (
    <section
      id="website-development-explained"
      aria-labelledby="website-development-explained-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[12%]
            h-[420px]
            w-[820px]
            -translate-x-1/2
            rounded-full
            bg-[#F5F8FB]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            bottom-[3%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#F7F9FB]
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1420px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mx-auto
            max-w-[1080px]
            text-center
          "
        >
          {/* LABEL */}

          <motion.div
            variants={fadeUp}
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
              sm:mb-6
            "
          >
            <span className="h-px w-8 bg-[#B79A72] sm:w-10" />

            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#92745C]
                sm:text-[0.62rem]
              "
            >
              Website Development Explained
            </span>

            <span className="h-px w-8 bg-[#B79A72] sm:w-10" />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="website-development-explained-heading"
            variants={fadeUp}
            className="
              mx-auto
              max-w-[980px]

              font-serif
              text-[2.1rem]
              font-normal
              leading-[1.04]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            What Is{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#A97C52]
              "
            >
              Website Development?
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[810px]

              font-serif
              text-[0.95rem]
              leading-[1.75]
              text-[#506A82]

              sm:text-[1rem]
              md:text-[1.04rem]
            "
          >
            Website development is the process of planning, building, testing
            and maintaining the technical experience behind a website.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-3
              max-w-[980px]

              font-serif
              text-[0.9rem]
              leading-[1.8]
              text-[#61758A]

              sm:text-[0.96rem]
              md:text-[1rem]
            "
          >
            It can include website architecture, responsive interfaces,
            frontend development, content management, integrations,
            performance optimization, technical SEO and functionality specific
            to the business.
          </motion.p>
        </motion.div>

        {/* =====================================================
            SURFACE STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.68,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[1160px]

            sm:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              relative
              border-y
              border-[#DDE4EA]

              py-9
              text-center

              sm:py-11
              md:py-12
            "
          >
            {/* background word */}

            <span
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                -translate-x-1/2
                -translate-y-1/2

                font-serif
                text-[5.5rem]
                font-normal
                leading-none
                tracking-[-0.06em]
                text-[#0B2A52]/[0.025]

                sm:text-[7rem]
                md:text-[9rem]
              "
            >
              EXPERIENCE
            </span>

            <div className="relative z-10">
              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#92745C]
                "
              >
                What people experience
              </span>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-[850px]

                  font-serif
                  text-[1.55rem]
                  leading-[1.2]
                  tracking-[-0.03em]
                  text-[#0B2A52]

                  sm:text-[1.8rem]
                  md:text-[2rem]
                  lg:text-[2.15rem]
                "
              >
                A website that feels{" "}
                <span className="font-serif italic text-[#A97C52]">
                  clear, fast and easy to use.
                </span>
              </p>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[660px]

                  font-serif
                  text-[0.86rem]
                  leading-[1.7]
                  text-[#6C7E90]

                  sm:text-[0.92rem]
                "
              >
                What feels simple on the surface depends on many connected
                decisions underneath.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DOWNWARD CONNECTION
        ===================================================== */}

        <div
          className="
            mx-auto
            flex
            h-[78px]
            w-px
            flex-col
            items-center
            bg-[#D9E1E7]
          "
        >
          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 5, 0],
                  }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mt-auto
              flex
              h-8
              w-8
              shrink-0
              translate-y-4
              items-center
              justify-center

              rounded-full

              border
              border-[#DDE4EA]

              bg-white

              text-[#A97C52]
            "
          >
            <ArrowDown size={12} />
          </motion.span>
        </div>

        {/* =====================================================
            DEVELOPMENT FOUNDATION
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            mx-auto
            mt-10
            max-w-[1200px]

            sm:mt-12
          "
        >
          {/* FOUNDATION HEADER */}

          <motion.div
            variants={fadeUp}
            className="
              mb-7
              text-center

              sm:mb-8
            "
          >
            <span
              className="
                text-[0.5rem]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#92745C]
              "
            >
              What makes that experience work
            </span>

            <h3
              className="
                mx-auto
                mt-3
                max-w-[760px]

                font-serif
                text-[1.45rem]
                font-normal
                leading-[1.25]
                tracking-[-0.03em]
                text-[#0B2A52]

                sm:text-[1.7rem]
                md:text-[1.9rem]
              "
            >
              Website development is a{" "}
              <span className="font-serif italic text-[#A97C52]">
                connected system
              </span>
              , not a collection of separate tasks.
            </h3>
          </motion.div>

          {/* =================================================
              CONTINUOUS LAYERS
          ================================================= */}

          <div
            className="
              relative
              border-y
              border-[#DDE4EA]
            "
          >
            {/* VERTICAL FOUNDATION LINE */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[28px]
                top-0
                hidden
                w-px
                bg-[#E1E7EC]

                sm:block

                lg:left-[62px]
              "
            />

            {developmentLayers.map(
              (
                {
                  number,
                  icon: Icon,
                  label,
                  title,
                  description,
                },
                index
              ) => (
                <motion.div
                  key={number}
                  variants={fadeUp}
                  className={`
                    group
                    relative

                    grid
                    gap-4

                    px-0
                    py-6

                    transition-colors
                    duration-300

                    hover:bg-[#FBFCFD]

                    sm:grid-cols-[56px_1fr]
                    sm:gap-5
                    sm:px-0
                    sm:py-7

                    lg:grid-cols-[80px_190px_1.05fr_1.35fr]
                    lg:items-center
                    lg:gap-8
                    lg:py-8

                    ${
                      index !== developmentLayers.length - 1
                        ? "border-b border-[#E4E9EE]"
                        : ""
                    }
                  `}
                >
                  {/* =========================================
                      NUMBER / NODE
                  ========================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      sm:justify-center
                    "
                  >
                    <span
                      className="
                        relative
                        z-10
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#DCE4EA]

                        bg-white

                        text-[0.48rem]
                        font-semibold
                        text-[#7E8D9B]

                        transition-all
                        duration-300

                        group-hover:border-[#0B2A52]
                        group-hover:bg-[#0B2A52]
                        group-hover:text-white

                        sm:h-12
                        sm:w-12
                      "
                    >
                      {number}
                    </span>

                    <span
                      className="
                        text-[0.48rem]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#92745C]

                        sm:hidden
                      "
                    >
                      {label}
                    </span>
                  </div>

                  {/* =========================================
                      LABEL / ICON
                  ========================================= */}

                  <div
                    className="
                      hidden
                      items-center
                      gap-3

                      lg:flex
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center

                        rounded-[11px]

                        bg-[#F0F4F7]

                        text-[#0B2A52]

                        transition-all
                        duration-300

                        group-hover:bg-[#E8EFF4]
                      "
                    >
                      <Icon size={15} strokeWidth={1.7} />
                    </span>

                    <span
                      className="
                        text-[0.49rem]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#92745C]
                      "
                    >
                      {label}
                    </span>
                  </div>

                  {/* =========================================
                      TITLE
                  ========================================= */}

                  <div
                    className="
                      pl-0

                      sm:pl-0
                    "
                  >
                    <div
                      className="
                        mb-2
                        flex
                        items-center
                        gap-2.5

                        lg:hidden
                      "
                    >
                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center

                          rounded-[10px]

                          bg-[#F0F4F7]

                          text-[#0B2A52]
                        "
                      >
                        <Icon size={14} strokeWidth={1.7} />
                      </span>

                      <span
                        className="
                          hidden
                          text-[0.47rem]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#92745C]

                          sm:block
                        "
                      >
                        {label}
                      </span>
                    </div>

                    <h4
                      className="
                        max-w-[430px]

                        font-serif
                        text-[1.15rem]
                        font-normal
                        leading-[1.28]
                        tracking-[-0.02em]
                        text-[#0B2A52]

                        sm:text-[1.25rem]
                        lg:text-[1.32rem]
                      "
                    >
                      {title}
                    </h4>
                  </div>

                  {/* =========================================
                      DESCRIPTION
                  ========================================= */}

                  <p
                    className="
                      max-w-[500px]

                      font-serif
                      text-[0.8rem]
                      leading-[1.7]
                      text-[#687C90]

                      sm:text-[0.85rem]
                    "
                  >
                    {description}
                  </p>

                  {/* subtle hover marker */}

                  <span
                    className="
                      absolute
                      bottom-[-1px]
                      left-0
                      h-[2px]
                      w-0
                      bg-[#B79A72]

                      transition-all
                      duration-500

                      group-hover:w-[90px]
                    "
                  />
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* =====================================================
            SYSTEM → RESULT
        ===================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.68,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[1120px]

            sm:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              grid
              items-center
              gap-8

              border-y
              border-[#DDE4EA]

              py-8

              sm:py-9

              lg:grid-cols-[0.78fr_1.22fr]
              lg:gap-12
              lg:py-10
            "
          >
            {/* LEFT */}

            <div>
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-8 bg-[#B79A72]" />

                <span
                  className="
                    text-[0.52rem]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#92745C]
                  "
                >
                  The Result
                </span>
              </div>

              <p
                className="
                  mt-4
                  max-w-[380px]

                  font-serif
                  text-[0.92rem]
                  leading-[1.7]
                  text-[#687C90]
                "
              >
                Good development should almost disappear into the experience.
                The user should feel the result, not the complexity behind it.
              </p>
            </div>

            {/* RIGHT */}

            <div
              className="
                border-t
                border-[#E0E6EB]
                pt-7

                lg:border-l
                lg:border-t-0
                lg:pl-10
                lg:pt-0
              "
            >
              <p
                className="
                  max-w-[710px]

                  font-serif
                  text-[1.7rem]
                  font-normal
                  leading-[1.14]
                  tracking-[-0.035em]
                  text-[#0B2A52]

                  sm:text-[2rem]
                  md:text-[2.2rem]
                  lg:text-[2.35rem]
                "
              >
                Easy on the surface.{" "}
                <span className="font-serif italic text-[#A97C52]">
                  Strong underneath.
                </span>
              </p>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-3
                "
              >
                {[
                  "Clear",
                  "Responsive",
                  "Fast",
                  "Search-ready",
                  "Purposeful",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-[#EDF3F7]

                        text-[#0B2A52]
                      "
                    >
                      <Check size={9} strokeWidth={2.3} />
                    </span>

                    <span
                      className="
                        text-[0.54rem]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[#6B7E91]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SHARP RAYS STATEMENT
        ===================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[940px]
            text-center

            sm:mt-14
          "
        >
          <span
            className="
              text-[0.52rem]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#92745C]
            "
          >
            At Sharp Rays
          </span>

          <p
            className="
              mx-auto
              mt-4
              max-w-[900px]

              font-serif
              text-[1.4rem]
              leading-[1.25]
              tracking-[-0.025em]
              text-[#0B2A52]

              sm:text-[1.65rem]
              md:text-[1.85rem]
            "
          >
            We connect{" "}
            <span className="font-serif italic text-[#A97C52]">
              strategy, design and development
            </span>{" "}
            instead of treating them as separate parts of the project.
          </p>

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    scaleX: [0.65, 1, 0.65],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              mt-6
              h-px
              w-20
              origin-center
              bg-[#B79A72]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}