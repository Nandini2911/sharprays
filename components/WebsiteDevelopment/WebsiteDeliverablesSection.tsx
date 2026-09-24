"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  Code2,
  FileText,
  Gauge,
  LayoutTemplate,
  Network,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Target,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   ADD YOUR CENTER IMAGE HERE
========================================================= */

const centerImage = "/services/webdev/website-deliverables.png";

/* =========================================================
   TYPES
========================================================= */

type Deliverable = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const leftDeliverables: Deliverable[] = [
  {
    number: "01",
    title: "Website Strategy",
    description:
      "Goals, audience requirements, page priorities and project direction.",
    icon: Target,
  },
  {
    number: "02",
    title: "Information Architecture",
    description:
      "Navigation, page hierarchy and relationships between important website content.",
    icon: Network,
  },
  {
    number: "03",
    title: "UX & UI Design",
    description:
      "Page layouts and visual direction across agreed desktop and responsive views.",
    icon: LayoutTemplate,
  },
  {
    number: "04",
    title: "Frontend Development",
    description:
      "Responsive implementation of the approved interface and interactions.",
    icon: Code2,
  },
  {
    number: "05",
    title: "CMS or Content Integration",
    description:
      "Integration of agreed website content and management capabilities where required.",
    icon: FileText,
  },
];

const rightDeliverables: Deliverable[] = [
  {
    number: "06",
    title: "Forms & Integrations",
    description:
      "Development of agreed enquiry forms, tools or external integrations.",
    icon: Settings2,
  },
  {
    number: "07",
    title: "Technical SEO Foundation",
    description:
      "Relevant page structure, metadata implementation, crawlability and agreed search-related technical requirements.",
    icon: Search,
  },
  {
    number: "08",
    title: "Performance Optimization",
    description:
      "Development decisions intended to improve loading, responsiveness and visual stability.",
    icon: Gauge,
  },
  {
    number: "09",
    title: "Testing & Quality Assurance",
    description:
      "Testing of agreed pages, functionality, responsiveness and common user journeys.",
    icon: ShieldCheck,
  },
  {
    number: "10",
    title: "Launch Support",
    description:
      "Deployment and agreed launch checks before the website goes live.",
    icon: Rocket,
  },
];

const proposalItems = [
  "Pages",
  "Features",
  "Content Responsibilities",
  "Design Scope",
  "Development Scope",
  "Integrations",
  "Revisions",
  "Timeline",
  "Hosting Responsibilities",
  "Maintenance",
  "Commercial Terms",
];

/* =========================================================
   DELIVERABLE ITEM
========================================================= */

function DeliverableItem({
  item,
  side,
  index,
  reduceMotion,
}: {
  item: Deliverable;
  side: "left" | "right";
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : side === "left" ? -28 : 28,
        y: reduceMotion ? 0 : 8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.62,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
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
        overflow-hidden
        rounded-[18px]
        border
        border-[#D7E2E9]
        bg-white
        px-4
        py-4
        shadow-[0_8px_24px_rgba(11,42,82,0.035)]
        transition-all
        duration-300
        hover:border-[#C8D6E0]
        hover:shadow-[0_14px_30px_rgba(11,42,82,0.065)]
        sm:px-5
      "
    >
      {/* hover wash */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(100deg,#F7FAFC_0%,transparent_75%)]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* accent */}

      <span
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#B79A72]
          transition-all
          duration-500
          group-hover:w-16
        "
      />

      <div
        className="
          relative
          z-10
          grid
          grid-cols-[45px_1px_minmax(0,1fr)]
          items-start
          gap-3

          sm:grid-cols-[48px_1px_minmax(0,1fr)]
        "
      >
        {/* icon */}

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#E5DDD1]
            bg-[#FBF8F3]
            text-[#0B2A52]
            transition-transform
            duration-300
            group-hover:scale-[1.04]
          "
        >
          <Icon size={18} strokeWidth={1.7} />
        </div>

        {/* divider */}

        <span className="h-[45px] w-px bg-[#E0E6EA]" />

        {/* content */}

        <div className="min-w-0">
          <h3
            className="
              font-serif
              text-[1rem]
              font-normal
              leading-[1.18]
              tracking-[-0.02em]
              text-[#0B2A52]
              sm:text-[1.08rem]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-1.5
              font-serif
              text-[0.72rem]
              leading-[1.48]
              text-[#60758A]
              sm:text-[0.76rem]
            "
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WebsiteDeliverablesSection() {
  const reduceMotion = Boolean(useReducedMotion());

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.075,
      },
    },
  };

  return (
    <section
      id="website-deliverables"
      aria-labelledby="website-deliverables-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          SIMPLE LIGHT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[-340px]
            h-[650px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            bg-[#EEF5FA]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -left-[270px]
            top-[44%]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#F4F7F9]
            blur-[115px]
          "
        />

        <div
          className="
            absolute
            -right-[250px]
            bottom-[-150px]
            h-[470px]
            w-[470px]
            rounded-full
            bg-[#FBF6EF]
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
          max-w-[1500px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="
            mx-auto
            max-w-[1000px]
            text-center
          "
        >
          <motion.div
            variants={fadeUp}
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
         <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />

            <span
              className="
                text-[0.55rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#B79A72]
                sm:text-[0.61rem]
              "
            >
              Website Development Deliverables
            </span>

          <span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </motion.div>

          <motion.h2
            id="website-deliverables-heading"
            variants={fadeUp}
            className="
              mx-auto
              mt-4
              max-w-[1020px]
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
            Clear Scope. Clear Responsibilities
            <span className="text-[#B79A72]">.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mt-4
              max-w-[820px]
              font-serif
              text-[0.88rem]
              leading-[1.58]
              text-[#4E6880]
              sm:text-[0.94rem]
            "
          >
            <p>Every website project is different.</p>

            <p>
              Your proposal defines exactly what Sharp Rays is responsible for
              before development begins.
            </p>

            <p>
              Depending on the selected scope, your project may include:
            </p>
          </motion.div>
        </motion.div>

        {/* =====================================================
            MAIN DELIVERABLE AREA
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-[1450px]
            grid-cols-1
            gap-7
            lg:mt-12
            xl:grid-cols-[1fr_330px_1fr]
            xl:items-center
            xl:gap-7
          "
        >
          {/* =================================================
              LEFT 01–05
          ================================================= */}

          <div className="space-y-3.5">
            {leftDeliverables.map((item, index) => (
              <DeliverableItem
                key={item.number}
                item={item}
                side="left"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              CENTER — ONLY ONE IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 24,
              scale: reduceMotion ? 1 : 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[330px]
              items-center
              justify-center
              py-3
              lg:max-w-[350px]
              xl:py-0
            "
          >
            {/* tiny glow only */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#EDF4F8]
                blur-[70px]
              "
            />

            {/* IMAGE */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
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
                w-full
                max-w-[280px]
                sm:max-w-[300px]
                xl:max-w-[310px]
              "
            >
              <Image
                src={centerImage}
                alt="Website development project proposal"
                width={700}
                height={850}
                className="
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_22px_30px_rgba(11,42,82,0.10)]
                "
                priority={false}
              />
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT 06–10
          ================================================= */}

          <div className="space-y-3.5">
            {rightDeliverables.map((item, index) => (
              <DeliverableItem
                key={item.number}
                item={item}
                side="right"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            FINAL PROPOSAL STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 22,
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
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            mt-9
            max-w-[1450px]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[18px]
              border
              border-[#D7BC94]
              bg-white/95
              px-5
              py-4
              shadow-[0_10px_30px_rgba(11,42,82,0.035)]
              sm:px-7
            "
          >
            {/* HEADER */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <span
                className="
                  hidden
                  h-px
                  w-12
                  bg-[#D1AF7D]
                  sm:block
                "
              />

              <span
                className="
                  text-center
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#0B2A52]
                  sm:text-[0.62rem]
                "
              >
                Your Final Proposal Confirms
              </span>

              <span
                className="
                  hidden
                  h-px
                  w-12
                  bg-[#D1AF7D]
                  sm:block
                "
              />
            </div>

            {/* ITEMS */}

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-2.5
                gap-y-2
              "
            >
              {proposalItems.map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2.5
                  "
                >
                  {index !== 0 && (
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-[#B79A72]
                      "
                    />
                  )}

                  <span
                    className="
                      font-serif
                      text-[0.71rem]
                      leading-[1.4]
                      text-[#37546D]
                      sm:text-[0.76rem]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SMALL END BRAND LINE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.1,
          }}
          className="
            mx-auto
            mt-5
            flex
            w-fit
            items-center
            gap-4
          "
        >
          <span className="h-px w-10 bg-[#D7E0E6]" />

          <span
            className="
              text-[0.44rem]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#6D8396]
            "
          >
            Sharp Rays
          </span>

          <span className="h-px w-10 bg-[#D7E0E6]" />
        </motion.div>
      </div>
    </section>
  );
}