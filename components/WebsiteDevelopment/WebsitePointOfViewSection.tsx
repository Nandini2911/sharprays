"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Check,
  Eye,
  Layers3,
  Menu,
  MonitorSmartphone,
  MousePointer2,
  Search,
  Settings2,
  Sparkles,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const problems = [
  {
    number: "01",
    icon: Eye,
    title: "Your Website Looks Professional",
    text: "But visitors still struggle to understand exactly what you do.",
    side: "left",
  },
  {
    number: "02",
    icon: Users,
    title: "People Are Visiting",
    text: "But too few are taking the next step.",
    side: "right",
  },
  {
    number: "03",
    icon: Layers3,
    title: "You Have Strong Services",
    text: "But important information is buried behind confusing pages or navigation.",
    side: "left",
  },
  {
    number: "04",
    icon: MonitorSmartphone,
    title: "The Site Works on Desktop",
    text: "But the mobile experience feels compromised.",
    side: "right",
  },
  {
    number: "05",
    icon: Search,
    title: "You Have Content",
    text: "But search engines and users cannot easily understand how everything connects.",
    side: "left",
  },
  {
    number: "06",
    icon: Settings2,
    title: "You Keep Adding Features",
    text: "But the experience becomes more complicated instead of more useful.",
    side: "right",
  },
];

export default function WebsiteProblemSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
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
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section
      id="website-problem"
      aria-labelledby="website-problem-heading"
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
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[22%]
            h-[520px]
            w-[860px]
            -translate-x-1/2
            rounded-full
            bg-[#F5F8FB]
            blur-[155px]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            bottom-[7%]
            h-[340px]
            w-[340px]
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
                text-[#98745A]
                sm:text-[0.62rem]
              "
            >
              The Problem
            </span>

            <span className="h-px w-8 bg-[#B79A72] sm:w-10" />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="website-problem-heading"
            variants={fadeUp}
            className="
              mx-auto
              max-w-[1080px]
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
            A Website Can Look Good and Still{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#A97C52]
              "
            >
              Work Against Your Business.
            </span>
          </motion.h2>

          {/* COPY */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[730px]
              font-serif
              text-[0.95rem]
              leading-[1.75]
              text-[#506A82]
              sm:text-[1rem]
            "
          >
            A polished interface can create a strong first impression.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-2.5
              max-w-[900px]
              font-serif
              text-[0.9rem]
              leading-[1.75]
              text-[#61758A]
              sm:text-[0.96rem]
              md:text-[1rem]
            "
          >
            But design alone cannot fix confusing navigation, slow pages,
            unclear messaging or a poor customer journey.
          </motion.p>
        </motion.div>

        {/* =====================================================
            TRANSITION LABEL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: reduceMotion ? 1 : 0.92,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mt-12
            flex
            items-center
            gap-4
            sm:mt-14
            sm:gap-6
            lg:mt-16
          "
        >
          <span className="h-px flex-1 bg-[#DFE5EA]" />

          <span
            className="
              shrink-0
              text-center
              text-[0.5rem]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#92745C]
              sm:text-[0.56rem]
            "
          >
            Does This Sound Familiar?
          </span>

          <span className="h-px flex-1 bg-[#DFE5EA]" />
        </motion.div>

        {/* =====================================================
            WEBSITE X-RAY EXPERIENCE
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-10
            max-w-[1240px]
            lg:mt-12
          "
        >
          {/* =================================================
              DESKTOP SIDE PROBLEMS + CENTER VISUAL
          ================================================= */}

          <div
            className="
              grid
              items-center
              gap-5

              lg:grid-cols-[0.82fr_1.18fr_0.82fr]
              lg:gap-6

              xl:grid-cols-[0.85fr_1.3fr_0.85fr]
              xl:gap-8
            "
          >
            {/* =============================================
                LEFT PROBLEMS
            ============================================= */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="
                order-2
                grid
                gap-3

                sm:grid-cols-2

                lg:order-1
                lg:grid-cols-1
                lg:gap-4
              "
            >
              {problems
                .filter((item) => item.side === "left")
                .map(({ number, icon: Icon, title, text }) => (
                  <ProblemItem
                    key={number}
                    number={number}
                    icon={Icon}
                    title={title}
                    text={text}
                    direction="left"
                    reduceMotion={reduceMotion}
                    variants={fadeUp}
                  />
                ))}
            </motion.div>

            {/* =============================================
                CENTER X-RAY VISUAL
            ============================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 24,
                scale: reduceMotion ? 1 : 0.975,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
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
                order-1
                relative
                mx-auto
                w-full
                max-w-[560px]

                lg:order-2
              "
            >
              {/* glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[80%]
                  w-[88%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#EAF1F6]
                  blur-[80px]
                "
              />

              {/* browser */}

              <div
                className="
                  relative
                  z-10
                  overflow-hidden

                  rounded-[24px]

                  border
                  border-[#D8E1E8]

                  bg-white

                  shadow-[0_25px_65px_rgba(11,42,82,0.12)]

                  sm:rounded-[28px]
                "
              >
                {/* browser chrome */}

                <div
                  className="
                    flex
                    h-[46px]
                    items-center
                    gap-2

                    border-b
                    border-[#E5EAEF]

                    bg-[#FBFCFD]

                    px-4

                    sm:h-[52px]
                    sm:px-5
                  "
                >
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#D5DCE3]" />
                    <span className="h-2 w-2 rounded-full bg-[#D5DCE3]" />
                    <span className="h-2 w-2 rounded-full bg-[#B79A72]/65" />
                  </div>

                  <div
                    className="
                      mx-auto
                      flex
                      h-7
                      w-[50%]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E1E7EC]
                      bg-white
                    "
                  >
                    <span
                      className="
                        text-[0.45rem]
                        font-medium
                        tracking-[0.08em]
                        text-[#9AA5AF]
                      "
                    >
                      polished-website.com
                    </span>
                  </div>

                  <div className="w-[24px]" />
                </div>

                {/* =========================================
                    POLISHED SURFACE
                ========================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    border-b
                    border-[#E2E7EC]
                    bg-white
                  "
                >
                  {/* mock navbar */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#EDF0F3]
                      px-4
                      py-3.5
                      sm:px-5
                    "
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#0B2A52]
                          text-white
                        "
                      >
                        <Sparkles size={12} />
                      </span>

                      <div>
                        <span className="block h-1.5 w-14 rounded-full bg-[#0B2A52]" />
                        <span className="mt-1 block h-1 w-9 rounded-full bg-[#DCE3E9]" />
                      </div>
                    </div>

                    <div
                      className="
                        hidden
                        items-center
                        gap-3
                        sm:flex
                      "
                    >
                      <span className="h-1.5 w-7 rounded-full bg-[#DCE3E9]" />
                      <span className="h-1.5 w-7 rounded-full bg-[#DCE3E9]" />
                      <span className="h-1.5 w-7 rounded-full bg-[#DCE3E9]" />

                      <span className="h-6 w-14 rounded-full bg-[#0B2A52]" />
                    </div>

                    <Menu
                      size={14}
                      className="text-[#0B2A52] sm:hidden"
                    />
                  </div>

                  {/* site hero */}

                  <div
                    className="
                      grid
                      gap-3
                      p-4
                      sm:grid-cols-[1.08fr_0.92fr]
                      sm:p-5
                    "
                  >
                    {/* copy */}

                    <div
                      className="
                        rounded-[15px]
                        bg-[#0B2A52]
                        p-5
                      "
                    >
                      <span
                        className="
                          text-[0.42rem]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#D9C6AC]
                        "
                      >
                        Beautiful website
                      </span>

                      <div className="mt-4">
                        <span className="block h-2.5 w-[88%] rounded-full bg-white" />
                        <span className="mt-2 block h-2.5 w-[70%] rounded-full bg-white" />
                        <span className="mt-2 block h-2.5 w-[48%] rounded-full bg-[#C4A47A]" />
                      </div>

                      <div className="mt-5 space-y-2">
                        <span className="block h-1.5 w-[90%] rounded-full bg-white/15" />
                        <span className="block h-1.5 w-[78%] rounded-full bg-white/15" />
                        <span className="block h-1.5 w-[63%] rounded-full bg-white/15" />
                      </div>

                      <div className="mt-5 flex gap-2">
                        <span className="h-7 w-20 rounded-full bg-white" />
                        <span className="h-7 w-16 rounded-full border border-white/20" />
                      </div>
                    </div>

                    {/* visual */}

                    <div
                      className="
                        relative
                        min-h-[180px]
                        overflow-hidden
                        rounded-[15px]
                        bg-[#EFF4F7]
                      "
                    >
                      <div
                        className="
                          absolute
                          -right-6
                          -top-7
                          h-24
                          w-24
                          rounded-full
                          bg-white/70
                        "
                      />

                      <div
                        className="
                          absolute
                          left-4
                          top-4
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-white
                          text-[#0B2A52]
                          shadow-sm
                        "
                      >
                        <Layers3 size={15} />
                      </div>

                      <div
                        className="
                          absolute
                          bottom-4
                          left-4
                          right-4
                          rounded-xl
                          bg-white
                          p-3
                          shadow-[0_8px_24px_rgba(11,42,82,0.06)]
                        "
                      >
                        <span className="block h-1.5 w-[48%] rounded-full bg-[#0B2A52]/20" />
                        <span className="mt-2 block h-1.5 w-[82%] rounded-full bg-[#E2E7EC]" />

                        <div
                          className="
                            mt-3
                            h-1.5
                            overflow-hidden
                            rounded-full
                            bg-[#EDF1F4]
                          "
                        >
                          <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: "88%" }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.1,
                              delay: 0.4,
                              ease,
                            }}
                            className="
                              block
                              h-full
                              rounded-full
                              bg-[#0B2A52]
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* surface label */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      hidden
                      rounded-full
                      border
                      border-[#DCE3E9]
                      bg-white/90
                      px-3
                      py-1.5
                      shadow-sm
                      backdrop-blur
                      sm:block
                    "
                  >
                    <span
                      className="
                        text-[0.43rem]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[#768697]
                      "
                    >
                      Looks polished
                    </span>
                  </div>
                </div>

                {/* =========================================
                    X-RAY / FRICTION LAYER
                ========================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    bg-[#F8FAFB]
                    px-4
                    py-5
                    sm:px-5
                  "
                >
                  {/* header */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <span
                        className="
                          text-[0.45rem]
                          font-semibold
                          uppercase
                          tracking-[0.17em]
                          text-[#99775E]
                        "
                      >
                        Under the surface
                      </span>

                      <p
                        className="
                          mt-1
                          font-serif
                          text-[0.96rem]
                          text-[#0B2A52]
                        "
                      >
                        Friction the design cannot hide.
                      </p>
                    </div>

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
                      "
                    >
                      <ArrowDownRight size={14} />
                    </span>
                  </div>

                  {/* signals */}

                  <div
                    className="
                      mt-4
                      grid
                      grid-cols-3
                      gap-2
                    "
                  >
                    {[
                      {
                        title: "Unclear",
                        sub: "Message",
                      },
                      {
                        title: "Slow",
                        sub: "Journey",
                      },
                      {
                        title: "Weak",
                        sub: "Action",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="
                          rounded-[11px]
                          border
                          border-[#E0E6EB]
                          bg-white
                          px-2
                          py-3
                          text-center
                        "
                      >
                        <p
                          className="
                            text-[0.54rem]
                            font-semibold
                            text-[#0B2A52]
                          "
                        >
                          {item.title}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[0.41rem]
                            uppercase
                            tracking-[0.09em]
                            text-[#8A98A5]
                          "
                        >
                          {item.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* floating x-ray badge */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-4
                  left-1/2
                  z-30
                  hidden
                  -translate-x-1/2

                  items-center
                  gap-2

                  rounded-full

                  border
                  border-[#DCE3E9]

                  bg-white

                  px-4
                  py-2

                  shadow-[0_10px_28px_rgba(11,42,82,0.08)]

                  sm:flex
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />

                <span
                  className="
                    text-[0.48rem]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#6F8090]
                  "
                >
                  Website X-Ray
                </span>
              </motion.div>
            </motion.div>

            {/* =============================================
                RIGHT PROBLEMS
            ============================================= */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="
                order-3
                grid
                gap-3

                sm:grid-cols-2

                lg:grid-cols-1
                lg:gap-4
              "
            >
              {problems
                .filter((item) => item.side === "right")
                .map(({ number, icon: Icon, title, text }) => (
                  <ProblemItem
                    key={number}
                    number={number}
                    icon={Icon}
                    title={title}
                    text={text}
                    direction="right"
                    reduceMotion={reduceMotion}
                    variants={fadeUp}
                  />
                ))}
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            REAL PROBLEM
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.72,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-[1160px]
            overflow-hidden

            rounded-[24px]

            border
            border-[#DEE5EA]

            bg-[#FAFBFC]

            px-5
            py-8

            sm:mt-16
            sm:px-8
            sm:py-9

            lg:grid
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            lg:gap-10
            lg:px-10
            lg:py-10
          "
        >
          {/* subtle glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[100px]
              top-1/2
              h-[300px]
              w-[300px]
              -translate-y-1/2
              rounded-full
              bg-[#F1F5F8]
              blur-[85px]
            "
          />

          {/* LEFT LABEL */}

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full

                  bg-white

                  text-[#0B2A52]

                  shadow-[0_5px_18px_rgba(11,42,82,0.06)]
                "
              >
                <MousePointer2 size={16} strokeWidth={1.7} />
              </span>

              <span
                className="
                  text-[0.54rem]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#92745C]
                "
              >
                The Real Problem
              </span>
            </div>

            <p
              className="
                mt-5
                max-w-[390px]

                font-serif
                text-[0.96rem]
                leading-[1.7]
                text-[#60758A]

                sm:text-[1rem]
              "
            >
              A website should not make people work to understand your
              business.
            </p>
          </div>

          {/* RIGHT STATEMENT */}

          <div
            className="
              relative
              z-10

              mt-7
              border-t
              border-[#DEE5EA]
              pt-7

              lg:mt-0
              lg:border-l
              lg:border-t-0
              lg:pl-10
              lg:pt-0
            "
          >
            <p
              className="
                max-w-[680px]

                font-serif
                text-[1.85rem]
                font-normal
                leading-[1.12]
                tracking-[-0.035em]
                text-[#0B2A52]

                sm:text-[2.1rem]
                md:text-[2.3rem]
                lg:text-[2.45rem]
              "
            >
              The best websites{" "}
              <span
                className="
                  font-serif
                  italic
                  text-[#A97C52]
                "
              >
                remove uncertainty.
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
              {["Understand", "Trust", "Move Forward"].map((item) => (
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
                      items-center
                      justify-center

                      rounded-full

                      bg-[#EDF3F7]

                      text-[#0B2A52]
                    "
                  >
                    <Check size={10} strokeWidth={2.2} />
                  </span>

                  <span
                    className="
                      text-[0.58rem]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#6B7E91]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PROBLEM ITEM
========================================================= */

function ProblemItem({
  number,
  icon: Icon,
  title,
  text,
  direction,
  reduceMotion,
  variants,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  text: string;
  direction: "left" | "right";
  reduceMotion: boolean | null;
  variants: any;
}) {
  return (
    <motion.article
      variants={variants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,
            }
      }
      className="
        group
        relative

        min-h-[150px]

        overflow-hidden

        rounded-[18px]

        border
        border-[#E0E6EB]

        bg-white

        px-4
        py-4

        shadow-[0_8px_25px_rgba(11,42,82,0.035)]

        transition-all
        duration-300

        hover:border-[#CBD5DE]
        hover:shadow-[0_14px_34px_rgba(11,42,82,0.065)]

        sm:px-5
        sm:py-5

        lg:min-h-[165px]
      "
    >
      {/* top */}

      <div
        className={`
          flex
          items-start
          gap-3

          ${
            direction === "right"
              ? "lg:flex-row"
              : "lg:flex-row-reverse lg:text-right"
          }
        `}
      >
        {/* icon */}

        <span
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center

            rounded-[11px]

            bg-[#F1F5F8]

            text-[#0B2A52]

            transition-all
            duration-300

            group-hover:bg-[#0B2A52]
            group-hover:text-white
          "
        >
          <Icon size={16} strokeWidth={1.7} />
        </span>

        {/* number */}

        <div
          className={`
            flex-1

            ${
              direction === "left"
                ? "lg:flex lg:justify-end"
                : ""
            }
          `}
        >
          <span
            className="
              text-[0.49rem]
              font-semibold
              tracking-[0.17em]
              text-[#A2ADB7]
            "
          >
            {number}
          </span>
        </div>
      </div>

      {/* content */}

      <div
        className={`
          mt-4

          ${
            direction === "left"
              ? "lg:text-right"
              : ""
          }
        `}
      >
        <h3
          className="
            font-serif
            text-[1rem]
            font-normal
            leading-[1.3]
            text-[#0B2A52]

            sm:text-[1.06rem]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2

            font-serif
            text-[0.76rem]
            leading-[1.6]
            text-[#718396]

            sm:text-[0.8rem]
          "
        >
          {text}
        </p>
      </div>

      {/* connector desktop */}

      <span
        className={`
          pointer-events-none
          absolute
          top-1/2
          hidden
          h-px
          w-6
          -translate-y-1/2
          bg-[#D7E0E7]

          lg:block

          ${
            direction === "left"
              ? "-right-6"
              : "-left-6"
          }
        `}
      />

      {/* hover detail */}

      <span
        className={`
          absolute
          bottom-0

          h-[2px]
          w-0

          bg-[#B79A72]

          transition-all
          duration-500

          group-hover:w-[52px]

          ${
            direction === "left"
              ? "right-0"
              : "left-0"
          }
        `}
      />
    </motion.article>
  );
}