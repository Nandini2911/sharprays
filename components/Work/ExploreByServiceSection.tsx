"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type Filter =
  | "all"
  | "social"
  | "seo"
  | "content"
  | "performance"
  | "web"
  | "video";

type Project = {
  id: string;
  category: Filter;
  label: string;
  title: string;
  description: string;

  /* ADD YOUR IMAGE HERE */
  bgImage: string;

  fullWidth?: boolean;

  /* dark = text white
     light = text navy */
  textMode: "light" | "dark";
};

/* =========================================================
   FILTERS
========================================================= */

const filters: {
  id: Filter;
  label: string;
}[] = [
  {
    id: "all",
    label: "ALL",
  },
  {
    id: "social",
    label: "SOCIAL",
  },
  {
    id: "seo",
    label: "SEO",
  },
  {
    id: "content",
    label: "CONTENT",
  },
  {
    id: "performance",
    label: "PERFORMANCE",
  },
  {
    id: "web",
    label: "WEB",
  },
  {
    id: "video",
    label: "AI VIDEO",
  },
];

/* =========================================================
   PROJECTS

   बस bgImage में अपनी image path change करना.
========================================================= */

const projects: Project[] = [
  {
    id: "all-work",
    category: "all",
    label: "All Disciplines",
    title: "ALL WORK",
    description:
      "See projects across every Sharp Rays discipline.",

    bgImage: "/work/work1.png",

    textMode: "light",
  },

  {
    id: "social-media",
    category: "social",
    label: "Social Media",
    title: "SOCIAL MEDIA",
    description:
      "Brand presence, content systems, social creative and community-focused work.",

    bgImage: "/work/work2.png",

    textMode: "dark",
  },

  {
    id: "seo",
    category: "seo",
    label: "Search",
    title: "SEO",
    description:
      "Technical improvements, search strategy, service-page optimization and organic visibility.",

    bgImage: "/work/work3.png",

    textMode: "dark",
  },

  {
    id: "content-marketing",
    category: "content",
    label: "Content",
    title: "CONTENT MARKETING",
    description:
      "Content strategy, website content, thought leadership and search-led publishing.",

    bgImage: "/work/work4.png",

    textMode: "dark",
  },

  {
    id: "performance-marketing",
    category: "performance",
    label: "Paid Growth",
    title: "PERFORMANCE MARKETING",
    description:
      "Paid campaigns, creative testing, conversion journeys and measurable acquisition.",

    bgImage: "/work/work5.png",

    textMode: "dark",
  },

  {
    id: "website-development",
    category: "web",
    label: "Web",
    title: "WEBSITE DEVELOPMENT",
    description:
      "Strategy, UX/UI, responsive development, landing pages and digital experiences.",

    bgImage: "/work/work6.png",

    textMode: "dark",
  },

  {
    id: "ai-video",
    category: "video",
    label: "AI Video & Editing",
    title: "AI VIDEO & EDITING",
    description:
      "AI-assisted production, short-form video, campaign creative, motion and post-production.",

    bgImage: "/work/work7.png",

    fullWidth: true,

    textMode: "dark",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  reduceMotion,
}: {
  project: Project;
  index: number;
  reduceMotion: boolean;
}) {
  const lightText = project.textMode === "light";

  return (
    <motion.article
      layout
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 18,
      }}
      transition={{
        duration: 0.5,
        delay: reduceMotion
          ? 0
          : index * 0.045,
        ease,
        layout: {
          duration: 0.4,
          ease,
        },
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className={`
        group
        relative

        min-h-[340px]

        overflow-hidden

        rounded-[20px]

        border
        border-[#D5E1E9]

        shadow-[0_14px_38px_rgba(11,42,82,0.07)]

        transition-shadow
        duration-500

        hover:shadow-[0_24px_55px_rgba(11,42,82,0.12)]

        ${
          project.fullWidth
            ? `
              md:col-span-2
              md:min-h-[265px]
            `
            : ""
        }
      `}
    >
      {/* =====================================================
          YOUR BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-cover
          bg-center

          transition-transform
          duration-[900ms]
          ease-out

          group-hover:scale-[1.035]
        "
        style={{
          backgroundImage: `url("${project.bgImage}")`,
        }}
      />

      {/* =====================================================
          READABILITY OVERLAY

          Only gradient — no visual/mockup added.
      ===================================================== */}

      {lightText ? (
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(90deg,rgba(5,27,49,0.94)_0%,rgba(5,27,49,0.76)_42%,rgba(5,27,49,0.2)_72%,rgba(5,27,49,0.06)_100%)]
          "
        />
      ) : (
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.91)_38%,rgba(255,255,255,0.50)_64%,rgba(255,255,255,0.08)_100%)]
          "
        />
      )}

      {/* Slight bottom depth */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-[40%]

          bg-gradient-to-t
          from-black/[0.04]
          to-transparent
        "
      />

      {/* =====================================================
          TEXT ONLY
      ===================================================== */}

      <div
        className={`
          relative
          z-10

          flex
          min-h-[340px]
          flex-col

          p-6

          sm:p-7
          lg:p-8

          ${
            project.fullWidth
              ? `
                md:min-h-[265px]
                md:max-w-[50%]
              `
              : `
                md:max-w-[60%]
              `
          }
        `}
      >
        {/* SMALL LABEL */}

        <span
          className={`
            text-[0.55rem]
            font-semibold
            uppercase
            tracking-[0.19em]

            ${
              lightText
                ? "text-[#E3C59A]"
                : "text-[#A07850]"
            }
          `}
        >
          {project.label}
        </span>

        {/* TITLE */}

        <h3
          className={`
            mt-4

            font-serif
            text-[1.55rem]
            font-semibold
            leading-[1.08]
            tracking-[-0.03em]

            sm:text-[1.7rem]

            ${
              lightText
                ? "text-white"
                : "text-[#0B2A52]"
            }
          `}
        >
          {project.title}
        </h3>

        {/* GOLD LINE */}

        <motion.span
          initial={{
            width: 34,
          }}
          whileHover={{
            width: 60,
          }}
          transition={{
            duration: 0.3,
            ease,
          }}
          className="
            mt-4
            block

            h-[2px]

            bg-[#B79A72]
          "
        />

        {/* DESCRIPTION */}

        <p
          className={`
            mt-4

            max-w-[310px]

            text-[0.88rem]
            leading-[1.65]

            ${
              lightText
                ? "text-white/80"
                : "text-[#536B81]"
            }
          `}
        >
          {project.description}
        </p>

        {/* CTA */}

        <div
          className="
            mt-auto
            flex
            items-center
            gap-4
            pt-7
          "
        >
          <span
            className={`
              text-[0.55rem]
              font-semibold
              uppercase
              tracking-[0.17em]

              ${
                lightText
                  ? "text-white"
                  : "text-[#0B2A52]"
              }
            `}
          >
            Explore Projects
          </span>

          <motion.span
            whileHover={
              reduceMotion
                ? undefined
                : {
                    x: 4,
                  }
            }
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full

              border

              transition-all
              duration-300

              ${
                lightText
                  ? `
                    border-white/60
                    bg-white/[0.05]
                    text-white

                    group-hover:bg-white
                    group-hover:text-[#0B2A52]
                  `
                  : `
                    border-[#0B2A52]
                    bg-white/70
                    text-[#0B2A52]

                    group-hover:bg-[#0B2A52]
                    group-hover:text-white
                  `
              }
            `}
          >
            <ArrowRight
              size={14}
              strokeWidth={1.8}
            />
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function PortfolioDisciplineSection() {
  const reduceMotion = Boolean(
    useReducedMotion(),
  );

  const [activeFilter, setActiveFilter] =
    useState<Filter>("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter,
        );

  return (
    <section
      id="work-disciplines"
      aria-labelledby="work-disciplines-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
      >
        {/* GOLD LEFT ARC */}

        <div
          className="
            absolute
            -left-[165px]
            -top-[170px]

            h-[360px]
            w-[360px]

            rounded-full

            border-[54px]
            border-[#B79A72]/25
          "
        />

        {/* RIGHT OUTLINE */}

        <div
          className="
            absolute
            -right-[130px]
            top-[-35px]

            h-[390px]
            w-[390px]

            rounded-full

            border
            border-[#7BA3C4]/50
          "
        />

        <div
          className="
            absolute
            -right-[290px]
            top-[135px]

            h-[500px]
            w-[500px]

            rounded-full

            border
            border-[#D4E2EC]
          "
        />

        {/* SOFT GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[30%]

            h-[500px]
            w-[1000px]

            -translate-x-1/2

            rounded-full

            bg-[radial-gradient(circle,rgba(67,134,186,0.06)_0%,transparent_70%)]

            blur-[40px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1240px]

          px-5
          sm:px-7
          md:px-9
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
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
            ease,
          }}
          className="
            mx-auto
            max-w-[920px]

            text-center
          "
        >
          {/* EYEBROW */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-5
            "
          >
            <span
              className="
                h-px
                w-12

                bg-[linear-gradient(90deg,transparent,#B79A72)]
              "
            />

            <span
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.29em]

                text-[#9B7650]
              "
            >
              Find Relevant Work
            </span>

            <span
              className="
                h-px
                w-12

                bg-[linear-gradient(90deg,#B79A72,transparent)]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            id="work-disciplines-heading"
            className="
              mx-auto
              mt-6
              max-w-[900px]

           
              text-[2.3rem]
           
              leading-[0.99]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Different Problems.
            <br />

            Different{" "}
            <span
              className="
                font-normal
                text-[#B18458]
              "
            >
              Disciplines.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[680px]

              text-[0.94rem]
              leading-[1.7]

              text-[#526980]

              sm:text-[1rem]
            "
          >
            Use the portfolio to explore projects connected to the
            type of challenge you are trying to solve.
          </p>
        </motion.div>

        {/* =====================================================
            FILTERS
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
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
            duration: 0.55,
            delay: 0.08,
            ease,
          }}
          className="
            mt-8

            flex
            flex-wrap
            items-center
            justify-center
            gap-2.5
          "
        >
          {filters.map((filter) => {
            const active =
              activeFilter === filter.id;

            return (
              <motion.button
                key={filter.id}
                type="button"
                onClick={() =>
                  setActiveFilter(filter.id)
                }
                whileTap={{
                  scale: 0.97,
                }}
                className={`
                  relative

                  min-w-[86px]

                  overflow-hidden

                  rounded-full

                  border

                  px-5
                  py-2.5

                  text-[0.61rem]
                  font-semibold
                  uppercase
                  tracking-[0.06em]

                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        border-[#0B2A52]
                        bg-[#0B2A52]
                        text-white

                        shadow-[0_8px_20px_rgba(11,42,82,0.15)]
                      `
                      : `
                        border-[#AFC6D8]
                        bg-white/85
                        text-[#0B2A52]

                        hover:border-[#0B2A52]
                        hover:bg-[#F4F8FB]
                      `
                  }
                `}
              >
                {active && (
                  <motion.span
                    layoutId="portfolio-active-filter"
                    className="
                      absolute
                      inset-0

                      rounded-full

                      bg-[linear-gradient(110deg,#0B2A52,#174F82)]
                    "
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {filter.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <motion.div
          layout
          className="
            mt-8

            grid
            grid-cols-1
            gap-5

            md:grid-cols-2
          "
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ),
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}