"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Compass,
  FileText,
  Layers3,
  LayoutTemplate,
  Lightbulb,
  Link2,
  Megaphone,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   DATA
========================================================= */

type ServiceExperience = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

const serviceExperiences: ServiceExperience[] = [
  {
    number: "01",
    title: "Social Media",
    description:
      "Built around attention, recognition, community and audience movement.",
    icon: Megaphone,
    accent: "#477BA2",
    soft: "#EAF3FA",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Structured around discovery, relevance, search journeys and organic visibility.",
    icon: Search,
    accent: "#89704E",
    soft: "#F6EEE1",
  },
  {
    number: "03",
    title: "Content Marketing",
    description:
      "Designed with a more editorial, knowledge-led experience.",
    icon: PenTool,
    accent: "#6F6594",
    soft: "#F0EDF7",
  },
  {
    number: "04",
    title: "Performance Marketing",
    description:
      "Built around reach, conversion, measurement and scale.",
    icon: TrendingUp,
    accent: "#4C7D72",
    soft: "#E8F2EF",
  },
  {
    number: "05",
    title: "Website Development",
    description:
      "Focused on clarity, usability, responsive experiences and technical foundations.",
    icon: Code2,
    accent: "#53799D",
    soft: "#EAF1F7",
  },
  {
    number: "06",
    title: "AI Video & Video Editing",
    description:
      "Built around creative generation, editing, motion and modern content production.",
    icon: Bot,
    accent: "#9D6D55",
    soft: "#F6ECE7",
  },
];

const thinkingQuestions = [
  "What information matters most?",
  "How should the services connect?",
  "Which pages deserve their own search intent?",
  "How can long-form service pages remain easy to scan?",
  "Where should proof, process and calls to action appear?",
  "How can each page feel distinctive without breaking the wider brand system?",
];

const scope = [
  "Brand-led Website Strategy",
  "Information Architecture",
  "Service Page Structure",
  "UX/UI Design",
  "Responsive Interfaces",
  "Reusable React Components",
  "Next.js Development",
  "Tailwind CSS Design System",
  "Motion & Interaction Design",
  "Conversion-Focused Calls to Action",
  "SEO-Friendly Page Structure",
  "Internal Linking",
  "Metadata Structure",
  "Technical Search Foundations",
  "Mobile Optimization",
];

const designSystem = [
  {
    title: "White-led interfaces",
    text: "for clarity and breathing room.",
  },
  {
    title: "Sharp Rays navy",
    text: "for trust, structure and stronger visual moments.",
  },
  {
    title: "Warm accent tones",
    text: "for detail, emphasis and brand recognition.",
  },
  {
    title: "Large editorial typography",
    text: "to create stronger hierarchy.",
  },
  {
    title: "Responsive layouts",
    text: "designed around the experience rather than simply shrinking desktop screens.",
  },
  {
    title: "Controlled animation",
    text: "to add movement without making the website difficult to use.",
  },
];

const developmentPoints = [
  "Reusable page components",
  "Responsive behaviour",
  "Smooth interactions",
  "Accessible content structure",
  "Maintainable layouts",
  "Search-friendly rendering",
  "Optimized media",
  "Clear heading hierarchy",
  "Consistent internal navigation",
  "Future scalability",
];

const seoPoints = [
  "Clear service-specific URLs",
  "One primary search intent for each service page",
  "Descriptive page titles and metadata",
  "Logical heading structures",
  "Contextual internal links",
  "Crawlable page content",
  "Semantic page structure",
  "Image optimization",
  "Structured business information where relevant",
  "Content designed around real customer questions",
];

const results = [
  "A clearer representation of our services",
  "A stronger and more consistent brand experience",
  "Distinctive service pages without repetitive layouts",
  "A scalable structure for future case studies and content",
  "A stronger technical foundation for organic search",
  "Clearer journeys towards enquiry",
  "A responsive experience across screen sizes",
  "A website that can evolve alongside the agency",
];

const story = [
  {
    number: "01",
    title: "Structure",
    description: "How the sitemap and service architecture were planned.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "UX",
    description: "How information and customer journeys were organized.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Design",
    description:
      "How the Sharp Rays visual system became a digital interface.",
    icon: LayoutTemplate,
  },
  {
    number: "04",
    title: "Development",
    description:
      "How the designs became reusable responsive components.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Search",
    description:
      "How SEO considerations were integrated into the structure.",
    icon: Search,
  },
  {
    number: "06",
    title: "Evolution",
    description:
      "How the website continues to improve as the agency grows.",
    icon: Sparkles,
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="
          font-serif
          text-[1.45rem]
          leading-none
          tracking-[-0.04em]
          text-[#B79A72]
        "
      >
        {number}
      </span>

      <span className="h-px w-8 bg-[#D8C19F]" />

      <span
        className="
          text-[0.48rem]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-[#92745C]
        "
      >
        {label}
      </span>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="
          mt-[2px]
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#F4EEE5]
          text-[#A97C52]
        "
      >
        <Check size={8} strokeWidth={2.4} />
      </span>

      <span
        className="
          font-serif
          text-[0.82rem]
          leading-[1.55]
          text-[#536D83]
        "
      >
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function SharpRaysFeaturedProject() {
  const reduceMotion = Boolean(useReducedMotion());

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.07,
      },
    },
  };

  return (
    <section
      id="sharp-rays-featured-project"
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

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[-400px]
            h-[760px]
            w-[1300px]
            -translate-x-1/2
            rounded-full
            bg-[#EEF5FA]
            blur-[165px]
          "
        />

        <div
          className="
            absolute
            -left-[280px]
            top-[38%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#F4F8FA]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-[260px]
            bottom-[10%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#FBF5EC]
            blur-[135px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            mx-auto
            max-w-[1120px]
            text-center
          "
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-px w-9 bg-[#B79A72]" />

            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#92745C]
                sm:text-[0.62rem]
              "
            >
              Internal Project · Sharp Rays
            </span>

            <span className="h-px w-9 bg-[#B79A72]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="
              mx-auto
              mt-5
              max-w-[1060px]
              font-serif
              text-[2.1rem]
              font-normal
              leading-[1.04]
              tracking-[-0.045em]
              text-[#0B2A52]
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Building the Digital Experience Behind{" "}
            <span className="italic text-[#A97C52]">
              Our Own Brand.
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[850px]
              space-y-3
              font-serif
              text-[0.95rem]
              leading-[1.75]
              text-[#60758A]
              sm:text-[1rem]
            "
          >
            <p>Sharp Rays needed more than a portfolio website.</p>

            <p>
              We wanted to create a digital experience that could explain
              multiple services clearly, demonstrate how we think and give
              every visitor an obvious path towards the information they need.
            </p>
          </motion.div>
        </motion.div>

        {/* =====================================================
            PROJECT META
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
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="
            mx-auto
            mt-12
            max-w-[1220px]
            border-y
            border-[#DBE5EB]
            py-5
          "
        >
          <div
            className="
              grid
              gap-5
              md:grid-cols-[0.8fr_0.8fr_1.4fr]
            "
          >
            <div className="md:border-r md:border-[#E1E8ED] md:pr-6">
              <span className="text-[0.43rem] font-semibold uppercase tracking-[0.2em] text-[#92745C]">
                Project
              </span>

              <p className="mt-2 font-serif text-[0.95rem] text-[#0B2A52]">
                Sharp Rays Website
              </p>
            </div>

            <div className="md:border-r md:border-[#E1E8ED] md:px-6">
              <span className="text-[0.43rem] font-semibold uppercase tracking-[0.2em] text-[#92745C]">
                Type
              </span>

              <p className="mt-2 font-serif text-[0.95rem] text-[#0B2A52]">
                Internal Brand Project
              </p>
            </div>

            <div className="md:pl-6">
              <span className="text-[0.43rem] font-semibold uppercase tracking-[0.2em] text-[#92745C]">
                Services
              </span>

              <p
                className="
                  mt-2
                  max-w-[620px]
                  font-serif
                  text-[0.85rem]
                  leading-[1.6]
                  text-[#49657B]
                "
              >
                Website Strategy · UX/UI Design · Content Structure · Frontend
                Development · Technical SEO
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CHALLENGE
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-[1180px]
            border-t
            border-[#DCE5EB]
            pt-14
            sm:mt-24
            sm:pt-16
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-16
            "
          >
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel number="01" label="The Challenge" />

              <h3
                className="
                  mt-7
                  max-w-[560px]
                  font-serif
                  text-[1.9rem]
                  leading-[1.12]
                  tracking-[-0.035em]
                  text-[#0B2A52]
                  sm:text-[2.15rem]
                  md:text-[2.3rem]
                "
              >
                How Do You Explain a Full-Service Agency Without Making the
                Website Feel Complicated?
              </h3>

              <p
                className="
                  mt-6
                  max-w-[570px]
                  font-serif
                  text-[0.92rem]
                  leading-[1.78]
                  text-[#60758A]
                "
              >
                Sharp Rays works across social media, SEO, content marketing,
                performance marketing, website development and AI-powered
                creative.
              </p>

              <p
                className="
                  mt-4
                  max-w-[570px]
                  font-serif
                  text-[0.92rem]
                  leading-[1.78]
                  text-[#60758A]
                "
              >
                The challenge was bringing those different disciplines into one
                website without creating a confusing experience.
              </p>

              <div className="mt-7 border-l-2 border-[#B79A72] pl-5">
                <p className="font-serif text-[0.96rem] leading-[1.65] text-[#60758A]">
                  Each service needed its own identity.
                </p>

                <p className="mt-2 font-serif text-[1.3rem] leading-[1.3] text-[#0B2A52]">
                  But the whole website still needed to feel like{" "}
                  <span className="italic text-[#A97C52]">
                    one brand.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* RIGHT — VISITOR QUESTIONS */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.span
                variants={fadeUp}
                className="
                  text-[0.46rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#8D9DA9]
                "
              >
                Visitors needed to understand quickly
              </motion.span>

              <div className="mt-5 border-y border-[#DCE5EB]">
                {[
                  "What Sharp Rays does.",
                  "Which service is relevant to them.",
                  "How our approach is different.",
                  "What the next step should be.",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      border-b
                      border-[#E2E9EE]
                      py-5
                      last:border-b-0
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-[1.7rem]
                        leading-none
                        text-[#B79A72]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-8 w-px bg-[#E0E7EC]" />

                    <p
                      className="
                        font-serif
                        text-[1.05rem]
                        leading-[1.4]
                        text-[#36536D]
                        transition-colors
                        duration-300
                        group-hover:text-[#0B2A52]
                      "
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                className="
                  mt-8
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    mt-1
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F5EEE4]
                    text-[#A97C52]
                  "
                >
                  <Target size={15} strokeWidth={1.7} />
                </span>

                <div>
                  <p className="font-serif text-[0.88rem] leading-[1.6] text-[#60758A]">
                    The challenge was not simply to design our own website.
                  </p>

                  <p
                    className="
                      mt-2
                      max-w-[500px]
                      font-serif
                      text-[1.4rem]
                      leading-[1.25]
                      tracking-[-0.025em]
                      text-[#0B2A52]
                    "
                  >
                    It was to make a growing agency{" "}
                    <span className="italic text-[#A97C52]">
                      easier to understand.
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            THINKING
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-[1180px]
            border-t
            border-[#DCE5EB]
            pt-14
            sm:mt-24
            sm:pt-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel number="02" label="The Thinking" />
            </motion.div>

            <div
              className="
                mt-7
                grid
                gap-10
                lg:grid-cols-[0.8fr_1.2fr]
                lg:gap-16
              "
            >
              <motion.div variants={fadeUp}>
                <h3
                  className="
                    max-w-[480px]
                    font-serif
                    text-[1.95rem]
                    leading-[1.1]
                    tracking-[-0.035em]
                    text-[#0B2A52]
                    sm:text-[2.2rem]
                  "
                >
                  Start With Clarity.{" "}
                  <span className="italic text-[#A97C52]">
                    Then Add Creativity.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-[500px]
                    font-serif
                    text-[0.92rem]
                    leading-[1.8]
                    text-[#60758A]
                  "
                >
                  We approached our own website in the same way we would
                  approach a client project.
                </p>

                <p
                  className="
                    mt-4
                    max-w-[500px]
                    font-serif
                    text-[0.92rem]
                    leading-[1.8]
                    text-[#60758A]
                  "
                >
                  Before deciding how individual sections should look, we
                  focused on the questions that would shape the system.
                </p>
              </motion.div>

              <div className="border-y border-[#DCE5EB]">
                {thinkingQuestions.map((question, index) => (
                  <motion.div
                    key={question}
                    variants={fadeUp}
                    className="
                      grid
                      grid-cols-[44px_1fr]
                      items-center
                      gap-4
                      border-b
                      border-[#E2E9EE]
                      py-4
                      last:border-b-0
                    "
                  >
                    <span
                      className="
                        text-[0.43rem]
                        font-semibold
                        tracking-[0.16em]
                        text-[#B79A72]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="
                        font-serif
                        text-[0.94rem]
                        leading-[1.55]
                        text-[#456178]
                      "
                    >
                      {question}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              variants={fadeUp}
              className="
                mt-8
                text-center
                font-serif
                text-[1.15rem]
                italic
                text-[#0B2A52]
              "
            >
              That thinking became the foundation of the website.
            </motion.p>
          </motion.div>
        </div>

        {/* =====================================================
            APPROACH
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-[1220px]
            border-t
            border-[#DCE5EB]
            pt-14
            sm:mt-24
            sm:pt-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel number="03" label="The Approach" />
            </motion.div>

            <motion.h3
              variants={fadeUp}
              className="
                mt-7
                font-serif
                text-[1.95rem]
                leading-[1.1]
                tracking-[-0.035em]
                text-[#0B2A52]
                sm:text-[2.2rem]
              "
            >
              One Brand.{" "}
              <span className="italic text-[#A97C52]">
                Different Experiences.
              </span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="
                mt-5
                max-w-[760px]
                font-serif
                text-[0.92rem]
                leading-[1.78]
                text-[#60758A]
              "
            >
              Instead of giving every service page the same template, we
              designed each experience around the subject it needed to
              communicate.
            </motion.p>

            {/* SERVICES */}

            <div
              className="
                mt-10
                grid
                border-y
                border-[#DCE5EB]
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {serviceExperiences.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    className="
                      group
                      relative
                      min-h-[190px]
                      border-b
                      border-r
                      border-[#E2E9EE]
                      px-5
                      py-6
                      sm:px-6
                    "
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                        "
                        style={{
                          backgroundColor: item.soft,
                          color: item.accent,
                        }}
                      >
                        <Icon size={15} strokeWidth={1.7} />
                      </span>

                      <span
                        className="
                          font-serif
                          text-[1.7rem]
                          leading-none
                          text-[#0B2A52]/10
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    <h4
                      className="
                        mt-6
                        font-serif
                        text-[1.15rem]
                        text-[#0B2A52]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-3
                        max-w-[300px]
                        font-serif
                        text-[0.78rem]
                        leading-[1.6]
                        text-[#60758A]
                      "
                    >
                      {item.description}
                    </p>

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                      style={{ backgroundColor: item.accent }}
                    />
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              className="
                mt-9
                flex
                flex-col
                gap-2
                text-center
              "
            >
              <p className="font-serif text-[0.9rem] text-[#60758A]">
                The pages feel different.
              </p>

              <p
                className="
                  font-serif
                  text-[1.25rem]
                  leading-[1.35]
                  text-[#0B2A52]
                "
              >
                But the system behind them remains{" "}
                <span className="italic text-[#A97C52]">
                  recognizably Sharp Rays.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            WHAT WE BUILT
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-[1180px]
            border-t
            border-[#DCE5EB]
            pt-14
            sm:mt-24
            sm:pt-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel number="04" label="What We Built" />
            </motion.div>

            <div
              className="
                mt-8
                grid
                gap-10
                lg:grid-cols-[300px_1fr]
                lg:gap-14
              "
            >
              <motion.div variants={fadeUp}>
                <span
                  className="
                    text-[0.47rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#92745C]
                  "
                >
                  Project Scope
                </span>

                <p
                  className="
                    mt-4
                    max-w-[280px]
                    font-serif
                    text-[1.45rem]
                    leading-[1.3]
                    tracking-[-0.025em]
                    text-[#0B2A52]
                  "
                >
                  The system behind the experience.
                </p>
              </motion.div>

              <div
                className="
                  grid
                  grid-cols-1
                  border-y
                  border-[#DCE5EB]
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {scope.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="
                      group
                      relative
                      flex
                      min-h-[88px]
                      items-center
                      gap-3
                      border-b
                      border-r
                      border-[#E2E9EE]
                      px-4
                      py-4
                    "
                  >
                    <span
                      className="
                        text-[0.4rem]
                        font-semibold
                        tracking-[0.15em]
                        text-[#B79A72]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        font-serif
                        text-[0.78rem]
                        leading-[1.45]
                        text-[#49657B]
                        transition-colors
                        duration-300
                        group-hover:text-[#0B2A52]
                      "
                    >
                      {item}
                    </span>

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
                        group-hover:w-full
                      "
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DESIGN SYSTEM
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-[1180px]
            border-t
            border-[#DCE5EB]
            pt-14
            sm:mt-24
            sm:pt-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel number="05" label="The Design System" />
            </motion.div>

            <motion.h3
              variants={fadeUp}
              className="
                mt-7
                font-serif
                text-[1.95rem]
                leading-[1.1]
                tracking-[-0.035em]
                text-[#0B2A52]
                sm:text-[2.2rem]
              "
            >
              Consistency Without{" "}
              <span className="italic text-[#A97C52]">
                Repetition.
              </span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="
                mt-5
                max-w-[680px]
                font-serif
                text-[0.92rem]
                leading-[1.75]
                text-[#60758A]
              "
            >
              The website uses a shared visual foundation across every page.
            </motion.p>

            <div
              className="
                mt-9
                grid
                border-y
                border-[#DCE5EB]
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {designSystem.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="
                    min-h-[145px]
                    border-b
                    border-r
                    border-[#E2E9EE]
                    px-5
                    py-6
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#B79A72]
                      "
                    />

                    <span
                      className="
                        text-[0.42rem]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#9AA7B1]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4
                    className="
                      mt-5
                      font-serif
                      text-[1.05rem]
                      text-[#0B2A52]
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      max-w-[300px]
                      font-serif
                      text-[0.75rem]
                      leading-[1.6]
                      text-[#60758A]
                    "
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="
                mx-auto
                mt-9
                max-w-[800px]
                text-center
                font-serif
                text-[1.2rem]
                leading-[1.5]
                text-[#0B2A52]
              "
            >
              The goal was not to make every section look the same.{" "}
              <span className="italic text-[#A97C52]">
                The goal was to make every section feel like it belonged to the
                same brand.
              </span>
            </motion.p>
          </motion.div>
        </div>

        {/* =====================================================
            DEVELOPMENT + SEO
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-[1220px]
            border-t
            border-[#DCE5EB]
            pt-14
            sm:mt-24
            sm:pt-16
          "
        >
          <div
            className="
              grid
              gap-14
              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* DEVELOPMENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -28,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel number="06" label="The Development" />

              <div className="mt-7 flex items-center gap-4">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF1F7]
                    text-[#53799D]
                  "
                >
                  <Code2 size={18} strokeWidth={1.7} />
                </span>

                <h3
                  className="
                    max-w-[430px]
                    font-serif
                    text-[1.55rem]
                    leading-[1.2]
                    tracking-[-0.03em]
                    text-[#0B2A52]
                  "
                >
                  Designed as a System, Not a Collection of Pages.
                </h3>
              </div>

              <p
                className="
                  mt-6
                  max-w-[540px]
                  font-serif
                  text-[0.88rem]
                  leading-[1.75]
                  text-[#60758A]
                "
              >
                The website was developed using reusable components so the
                experience could continue growing as Sharp Rays adds services,
                work and insights.
              </p>

              <div
                className="
                  mt-7
                  grid
                  gap-x-5
                  gap-y-3
                  sm:grid-cols-2
                "
              >
                {developmentPoints.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </div>
            </motion.div>

            {/* SEO */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : 28,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
              className="
                lg:border-l
                lg:border-[#DCE5EB]
                lg:pl-16
              "
            >
              <SectionLabel number="07" label="The SEO Foundation" />

              <div className="mt-7 flex items-center gap-4">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F5EEE4]
                    text-[#A97C52]
                  "
                >
                  <Search size={18} strokeWidth={1.7} />
                </span>

                <h3
                  className="
                    max-w-[430px]
                    font-serif
                    text-[1.55rem]
                    leading-[1.2]
                    tracking-[-0.03em]
                    text-[#0B2A52]
                  "
                >
                  Built to Be Understood by People and Search Engines.
                </h3>
              </div>

              <p
                className="
                  mt-6
                  max-w-[540px]
                  font-serif
                  text-[0.88rem]
                  leading-[1.75]
                  text-[#60758A]
                "
              >
                Search considerations were included while the website
                architecture and content were being developed rather than added
                after the design was finished.
              </p>

              <div
                className="
                  mt-7
                  grid
                  gap-x-5
                  gap-y-3
                  sm:grid-cols-2
                "
              >
                {seoPoints.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </div>
            </motion.div>
          </div>

          {/* PRINCIPLE */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
            className="
              mx-auto
              mt-14
              max-w-[850px]
              border-y
              border-[#DCE5EB]
              py-8
              text-center
            "
          >
            <p
              className="
                font-serif
                text-[0.9rem]
                leading-[1.6]
                text-[#60758A]
              "
            >
              The objective was not to force keywords into the website.
            </p>

            <p
              className="
                mt-3
                font-serif
                text-[1.35rem]
                leading-[1.35]
                text-[#0B2A52]
              "
            >
              It was to make every page clear about{" "}
              <span className="italic text-[#A97C52]">
                what it exists to answer.
              </span>
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            RESULT
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-[1180px]
            border-t
            border-[#DCE5EB]
            pt-14
            sm:mt-24
            sm:pt-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel number="08" label="The Result" />
            </motion.div>

            <motion.h3
              variants={fadeUp}
              className="
                mt-7
                max-w-[740px]
                font-serif
                text-[1.95rem]
                leading-[1.1]
                tracking-[-0.035em]
                text-[#0B2A52]
                sm:text-[2.2rem]
              "
            >
              A Stronger Foundation for the Brand{" "}
              <span className="italic text-[#A97C52]">
                We Are Building.
              </span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="
                mt-5
                max-w-[720px]
                font-serif
                text-[0.92rem]
                leading-[1.75]
                text-[#60758A]
              "
            >
              Because this is an internal Sharp Rays project, we do not need to
              manufacture client metrics to make it look successful.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="
                mt-2
                font-serif
                text-[1.05rem]
                italic
                text-[#0B2A52]
              "
            >
              The outcome is visible in the system itself.
            </motion.p>

            {/* RESULTS */}

            <div
              className="
                mt-9
                grid
                border-y
                border-[#DCE5EB]
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {results.map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="
                    group
                    relative
                    min-h-[140px]
                    border-b
                    border-r
                    border-[#E2E9EE]
                    px-5
                    py-5
                  "
                >
                  <span
                    className="
                      text-[0.42rem]
                      font-semibold
                      tracking-[0.15em]
                      text-[#B79A72]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p
                    className="
                      mt-5
                      font-serif
                      text-[0.9rem]
                      leading-[1.5]
                      text-[#405D75]
                    "
                  >
                    {item}
                  </p>

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
                      group-hover:w-full
                    "
                  />
                </motion.div>
              ))}
            </div>

            {/* EVOLVING */}

            <motion.div
              variants={fadeUp}
              className="
                mt-10
                grid
                items-center
                gap-8
                border-y
                border-[#D9E3E9]
                py-8
                md:grid-cols-[auto_1fr]
              "
            >
              <span
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF3FA]
                  text-[#0B2A52]
                "
              >
                <Workflow size={20} strokeWidth={1.7} />
              </span>

              <div>
                <span
                  className="
                    text-[0.46rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#92745C]
                  "
                >
                  This Project Is Still Evolving
                </span>

                <p
                  className="
                    mt-3
                    max-w-[850px]
                    font-serif
                    text-[0.88rem]
                    leading-[1.7]
                    text-[#60758A]
                  "
                >
                  Sharp Rays is a growing business. Our website will continue
                  to change as our work, experience, services and understanding
                  grow.
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[1.12rem]
                    italic
                    text-[#0B2A52]
                  "
                >
                  That is part of the project — not a weakness of it.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            PROJECT STORY
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-[1220px]
            border-t
            border-[#DCE5EB]
            pt-14
            sm:mt-24
            sm:pt-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel number="09" label="Project Story" />
            </motion.div>

            <motion.h3
              variants={fadeUp}
              className="
                mt-7
                max-w-[760px]
                font-serif
                text-[1.95rem]
                leading-[1.1]
                tracking-[-0.035em]
                text-[#0B2A52]
                sm:text-[2.2rem]
              "
            >
              From Structure to{" "}
              <span className="italic text-[#A97C52]">
                Continuous Evolution.
              </span>
            </motion.h3>

            <div
              className="
                relative
                mt-10
                grid
                border-y
                border-[#DCE5EB]
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {story.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    variants={fadeUp}
                    className="
                      group
                      relative
                      min-h-[190px]
                      border-b
                      border-r
                      border-[#E2E9EE]
                      px-5
                      py-6
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F3F7FA]
                          text-[#0B2A52]
                        "
                      >
                        <Icon size={15} strokeWidth={1.7} />
                      </span>

                      <span
                        className="
                          font-serif
                          text-[1.7rem]
                          leading-none
                          text-[#B79A72]
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    <h4
                      className="
                        mt-6
                        text-[0.51rem]
                        font-semibold
                        uppercase
                        tracking-[0.19em]
                        text-[#92745C]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-3
                        max-w-[300px]
                        font-serif
                        text-[0.82rem]
                        leading-[1.6]
                        text-[#536D83]
                      "
                    >
                      {item.description}
                    </p>

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
                        group-hover:w-full
                      "
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="
            mx-auto
            mt-16
            max-w-[1100px]
            sm:mt-20
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-[#D5E1E8]
              bg-[linear-gradient(135deg,#F1F7FB_0%,#FFFFFF_52%,#FBF6EE_100%)]
              px-6
              py-10
              text-center
              shadow-[0_24px_65px_rgba(11,42,82,0.06)]
              sm:px-10
              sm:py-12
            "
          >
            {/* decorative circles */}

            <div
              className="
                pointer-events-none
                absolute
                -left-[150px]
                -top-[170px]
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-[#D4E3EC]
              "
            />

            <div
              className="
                pointer-events-none
                -bottom-[170px]
                -right-[150px]
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-[#E7D5BA]
              "
            />

            <div className="relative z-10">
              <span
                className="
                  text-[0.49rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#92745C]
                "
              >
                Explore the Project
              </span>

              <h3
                className="
                  mx-auto
                  mt-4
                  max-w-[720px]
                  font-serif
                  text-[1.7rem]
                  leading-[1.2]
                  tracking-[-0.03em]
                  text-[#0B2A52]
                  sm:text-[2rem]
                "
              >
                See the Sharp Rays digital experience{" "}
                <span className="italic text-[#A97C52]">
                  in context.
                </span>
              </h3>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  sm:flex-row
                "
              >
                <a
                  href="/"
                  className="
                    group
                    inline-flex
                    min-w-[220px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[linear-gradient(135deg,#0B2A52_0%,#174D82_100%)]
                    px-6
                    py-3.5
                    text-[0.64rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white
                    shadow-[0_12px_28px_rgba(11,42,82,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_36px_rgba(11,42,82,0.22)]
                  "
                >
                  Explore the Sharp Rays Website

                  <ArrowRight
                    size={12}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>

                <a
                  href="/work"
                  className="
                    group
                    inline-flex
                    min-w-[180px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#CBD9E2]
                    bg-white
                    px-6
                    py-3.5
                    text-[0.64rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#0B2A52]
                    shadow-[0_7px_18px_rgba(11,42,82,0.035)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#B79A72]/60
                    hover:shadow-[0_12px_26px_rgba(11,42,82,0.07)]
                  "
                >
                  See More Work

                  <ArrowRight
                    size={12}
                    strokeWidth={1.8}
                    className="
                      text-[#B79A72]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>
              </div>

              <div
                className="
                  mx-auto
                  mt-9
                  flex
                  w-fit
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-10 bg-[#D4E0E7]" />

                <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />

                <span className="h-px w-10 bg-[#D4E0E7]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}