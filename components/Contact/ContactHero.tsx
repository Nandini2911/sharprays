"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Code2,
  Compass,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Phone,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Waypoints,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   DATA
========================================================= */

const services = [
  "Social Media Marketing",
  "SEO",
  "Content Marketing",
  "Performance Marketing",
  "Website Development",
  "AI Video & Video Editing",
  "Not Sure Yet",
];

const problemRoutes = [
  {
    problem: "People can’t find us",
    service: "SEO",
    icon: Search,
    accent: "#4278A5",
    soft: "#EAF3FA",
  },
  {
    problem: "Our social media feels random",
    service: "Social Media Marketing",
    icon: Megaphone,
    accent: "#75659B",
    soft: "#F0EDF7",
  },
  {
    problem: "We have knowledge but don’t know what to publish",
    service: "Content Marketing",
    icon: FileText,
    accent: "#A17B52",
    soft: "#F7EFE3",
  },
  {
    problem: "We’re spending on ads but results are unclear",
    service: "Performance Marketing",
    icon: TrendingUp,
    accent: "#477D72",
    soft: "#E7F2EE",
  },
  {
    problem: "Our website doesn’t represent us anymore",
    service: "Website Development",
    icon: Code2,
    accent: "#4F7499",
    soft: "#E9F1F8",
  },
  {
    problem: "We need more video without more production friction",
    service: "AI Video & Video Editing",
    icon: Bot,
    accent: "#9A6E55",
    soft: "#F6ECE7",
  },
  {
    problem: "It’s a mix of things",
    service: "Not Sure Yet",
    icon: CircleHelp,
    accent: "#6C7D8B",
    soft: "#EFF3F5",
  },
];

const contextItems = [
  {
    number: "01",
    title: "What Is Happening Now?",
    description: "Tell us about the current situation.",
    icon: Compass,
  },
  {
    number: "02",
    title: "What Needs to Change?",
    description: "What feels unclear, inefficient or underperforming?",
    icon: Target,
  },
  {
    number: "03",
    title: "What Are You Trying to Achieve?",
    description:
      "More enquiries, better visibility, a stronger website, better creative or more consistent marketing?",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Who Are You Trying to Reach?",
    description: "Tell us about the audience or customer.",
    icon: Users,
  },
  {
    number: "05",
    title: "What Have You Already Tried?",
    description:
      "Previous campaigns, agencies, websites or strategies can provide useful context.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Any Important Constraints?",
    description:
      "Timelines, platforms, approvals, technology or other project requirements.",
    icon: Waypoints,
  },
];

const process = [
  {
    number: "01",
    title: "You Send the Enquiry",
    description:
      "Give us enough context to understand what you are looking for.",
  },
  {
    number: "02",
    title: "We Review It",
    description:
      "We look at the information you have provided before recommending the next step.",
  },
  {
    number: "03",
    title: "We Talk",
    description:
      "If the project looks like something we can help with, we arrange a conversation.",
  },
  {
    number: "04",
    title: "We Define the Scope",
    description:
      "We clarify priorities, services, responsibilities, deliverables and dependencies.",
  },
  {
    number: "05",
    title: "You Receive a Proposal",
    description:
      "Where appropriate, we provide a clear project or ongoing-service proposal.",
  },
  {
    number: "06",
    title: "We Start",
    description:
      "Once everything is agreed, the work moves into discovery or planning.",
  },
];

const talkAbout = [
  {
    title: "Social Media Marketing",
    description:
      "Strategy, content, community management and social presence.",
    icon: Megaphone,
    number: "01",
  },
  {
    title: "SEO",
    description:
      "Technical SEO, search strategy, on-page optimization and organic visibility.",
    icon: Search,
    number: "02",
  },
  {
    title: "Content Marketing",
    description:
      "Strategy, website content, search-led content and thought leadership.",
    icon: FileText,
    number: "03",
  },
  {
    title: "Performance Marketing",
    description:
      "Paid media, Google Ads, paid social, conversion tracking and optimization.",
    icon: Gauge,
    number: "04",
  },
  {
    title: "Website Development",
    description:
      "Strategy, UX/UI, responsive development and digital experiences.",
    icon: Code2,
    number: "05",
  },
  {
    title: "AI Video & Video Editing",
    description:
      "AI-assisted video creation, short-form editing, campaign assets and post-production.",
    icon: Bot,
    number: "06",
  },
];

const expectations = [
  {
    title: "Scope",
    description: "What Sharp Rays is responsible for.",
  },
  {
    title: "Deliverables",
    description: "What will actually be created or managed.",
  },
  {
    title: "Inputs",
    description: "What we need from your team.",
  },
  {
    title: "Timeline",
    description: "Important stages, dependencies and approvals.",
  },
  {
    title: "Revisions",
    description: "How feedback and changes are handled.",
  },
  {
    title: "Commercials",
    description: "What the work costs and what is not included.",
  },
  {
    title: "Measurement",
    description: "How progress or outcomes will be evaluated where relevant.",
  },
];

const faqs = [
  {
    question: "Do I need to know which service I need?",
    answer:
      "No. If you know what you need, select the relevant service. If you are unsure, choose Not Sure Yet and explain the problem you are trying to solve.",
  },
  {
    question: "Do I need a full project brief?",
    answer:
      "No. A short explanation of your business, current situation and objective is enough to begin the conversation.",
  },
  {
    question: "Does Sharp Rays work with startups?",
    answer:
      "Yes. The right scope depends on the stage of the business, available resources and the problem that needs to be solved.",
  },
  {
    question: "Do you work with established businesses too?",
    answer:
      "Yes. Sharp Rays can support businesses that already have existing websites, marketing teams, campaigns or digital systems and need help improving a specific area.",
  },
  {
    question: "Can I contact you for just one service?",
    answer:
      "Yes. A project can focus on one service where that is all the business needs. We do not require every engagement to combine multiple services.",
  },
  {
    question: "Can you work with our existing marketing or development team?",
    answer:
      "Yes. Where useful, Sharp Rays can work alongside internal teams or other specialist partners. Responsibilities should be agreed clearly before the project begins.",
  },
  {
    question: "Can you review what we already have first?",
    answer:
      "Yes. For many projects, understanding the existing website, campaigns, content or marketing activity is an important first step.",
  },
  {
    question: "Do you offer one-off projects and ongoing support?",
    answer:
      "Depending on the service, Sharp Rays can support defined projects or ongoing engagements. The recommended model depends on the type of work and objectives.",
  },
  {
    question: "How much does it cost to work with Sharp Rays?",
    answer:
      "Pricing depends on the service, scope, complexity, deliverables and level of ongoing support required. We prefer to understand the project before recommending a commercial structure.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Availability depends on the scope and current project schedule. If you have an important launch date or deadline, include it in your enquiry so it can be considered from the beginning.",
  },
];

/* =========================================================
   REUSABLE SECTION LABEL
========================================================= */

function Eyebrow({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-9 bg-[#B79A72]" />

      <span
        className="
          text-[0.55rem]
          font-semibold
          uppercase
          tracking-[0.29em]
          text-[#92745C]
          sm:text-[0.61rem]
        "
      >
        {children}
      </span>

      {centered && <span className="h-px w-9 bg-[#B79A72]" />}
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const reduceMotion = Boolean(useReducedMotion());

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        staggerChildren: reduceMotion ? 0 : 0.075,
      },
    },
  };

  const toggleService = (service: string) => {
    if (service === "Not Sure Yet") {
      setSelectedServices(
        selectedServices.includes(service) ? [] : ["Not Sure Yet"],
      );
      return;
    }

    let current = selectedServices.filter(
      (item) => item !== "Not Sure Yet",
    );

    if (current.includes(service)) {
      current = current.filter((item) => item !== service);
    } else {
      current = [...current, service];
    }

    setSelectedServices(current);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      {/* =====================================================
          SECTION 01 — HERO
      ===================================================== */}

      <section
        className="
          relative
          isolate
          overflow-hidden
          bg-white
          pb-20
          pt-28
          sm:pb-24
          sm:pt-32
          lg:min-h-[92vh]
          lg:pb-28
          lg:pt-36
        "
      >
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 -z-20">
          <div
            className="
              absolute
              left-1/2
              top-[-360px]
              h-[720px]
              w-[1250px]
              -translate-x-1/2
              rounded-full
              bg-[#EDF5FB]
              blur-[165px]
            "
          />

          <div
            className="
              absolute
              -right-[210px]
              bottom-[-100px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#FBF4EA]
              blur-[120px]
            "
          />
        </div>

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            items-center
            gap-14
            px-5
            sm:px-7
            md:px-9
            lg:grid-cols-[1.05fr_0.95fr]
            lg:px-12
            xl:px-16
          "
        >
          {/* HERO COPY */}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-[720px]"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Let&apos;s Talk</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="
                mt-6
                max-w-[720px]
                font-serif
                text-[2.3rem]
                font-normal
                leading-[1.03]
                tracking-[-0.05em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Tell Us What You&apos;re Trying to{" "}
              <span className="italic text-[#A97C52]">
                Improve.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="
                mt-6
                max-w-[630px]
                space-y-2
                font-serif
                text-[0.95rem]
                leading-[1.75]
                text-[#5F7488]
                sm:text-[1rem]
              "
            >
              <p>You do not need a perfect brief.</p>
              <p>You do not need to know exactly which service you need.</p>

              <p className="pt-2">
                Tell us what you are trying to achieve, what feels unclear or
                what is currently not working.
              </p>

              <p className="font-medium text-[#0B2A52]">
                We&apos;ll start there.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <a
                href="#contact-form"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[linear-gradient(135deg,#0B2A52,#174E83)]
                  px-6
                  py-3.5
                  text-[0.65rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_12px_28px_rgba(11,42,82,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Start the Conversation

                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#CFDAE2]
                  bg-white
                  px-6
                  py-3.5
                  text-[0.65rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#0B2A52]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#B79A72]/60
                "
              >
                Explore Our Services

                <ArrowDown
                  size={12}
                  className="text-[#B79A72]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {["Ask", "Understand", "Plan", "Move"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="
                        text-[0.43rem]
                        font-semibold
                        uppercase
                        tracking-[0.19em]
                        text-[#6D8193]
                      "
                    >
                      {item}
                    </span>

                    {index !== 3 && (
                      <span className="h-1 w-1 rounded-full bg-[#B79A72]" />
                    )}
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 38,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[570px]
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[430px]
                w-[430px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#D9E4EA]
              "
            />

            <div
              className="
                relative
                mx-auto
                max-w-[500px]
                overflow-hidden
                rounded-[28px]
                border
                border-[#D8E3E9]
                bg-white
                p-7
                shadow-[0_28px_70px_rgba(11,42,82,0.08)]
                sm:p-8
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EEF5FA]
                      text-[#0B2A52]
                    "
                  >
                    <MessageCircle size={15} strokeWidth={1.7} />
                  </span>

                  <div>
                    <span
                      className="
                        block
                        text-[0.43rem]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#92745C]
                      "
                    >
                      A Good Place to Start
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        font-serif
                        text-[0.9rem]
                        text-[#0B2A52]
                      "
                    >
                      Tell us what is not working.
                    </span>
                  </div>
                </div>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F6F1E9]
                    text-[#A97C52]
                  "
                >
                  <Sparkles size={12} />
                </span>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "What are you trying to improve?",
                  "What feels unclear right now?",
                  "What would a better outcome look like?",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 16,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: reduceMotion ? 0 : 0.35 + index * 0.1,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      border-b
                      border-[#E2E9EE]
                      py-3
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-[1.2rem]
                        text-[#B79A72]
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        font-serif
                        text-[0.86rem]
                        text-[#49657B]
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                  border-l-2
                  border-[#B79A72]
                  pl-4
                "
              >
                <span
                  className="
                    font-serif
                    text-[1.1rem]
                    italic
                    leading-[1.45]
                    text-[#0B2A52]
                  "
                >
                  You bring the problem. We can help define the starting point.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 02 — CONTACT FORM
      ===================================================== */}

      <section
        id="contact-form"
        className="
          relative
          overflow-hidden
          bg-[#F8FAFC]
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1380px]
            gap-14
            px-5
            sm:px-7
            md:px-9
            lg:grid-cols-[0.72fr_1.28fr]
            lg:px-12
            xl:px-16
          "
        >
          {/* LEFT INTRO */}

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
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <Eyebrow>Start a Project</Eyebrow>

            <h2
              className="
                mt-6
                max-w-[540px]
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              A Few Details. Then We Can{" "}
              <span className="italic text-[#A97C52]">
                Talk Properly.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[460px]
                font-serif
                text-[0.95rem]
                leading-[1.75]
                text-[#60758A]
              "
            >
              Give us enough context to understand where the conversation
              should begin.
            </p>

            <div
              className="
                mt-9
                border-l-2
                border-[#B79A72]
                pl-5
              "
            >
              <p
                className="
                  font-serif
                  text-[1.05rem]
                  leading-[1.6]
                  text-[#0B2A52]
                "
              >
                No pressure. No automated sales sequence.
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[0.83rem]
                  leading-[1.6]
                  text-[#6A7E90]
                "
              >
                Just enough information for us to understand what you need.
              </p>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease }}
            className="
              rounded-[28px]
              border
              border-[#D8E3E9]
              bg-white
              p-5
              shadow-[0_24px_65px_rgba(11,42,82,0.055)]
              sm:p-7
              md:p-8
            "
          >
            {/* BASIC FIELDS */}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#60758A]">
                  Your Name *
                </span>

                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.86rem]
                    text-[#0B2A52]
                    outline-none
                    transition
                    placeholder:text-[#A6B1BA]
                    focus:border-[#89A4B9]
                    focus:bg-white
                  "
                />
              </label>

              <label className="block">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#60758A]">
                  Work Email *
                </span>

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.86rem]
                    text-[#0B2A52]
                    outline-none
                    transition
                    placeholder:text-[#A6B1BA]
                    focus:border-[#89A4B9]
                    focus:bg-white
                  "
                />
              </label>

              <label className="block">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#60758A]">
                  Company / Brand
                </span>

                <input
                  name="company"
                  placeholder="Company name"
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.86rem]
                    text-[#0B2A52]
                    outline-none
                    placeholder:text-[#A6B1BA]
                    focus:border-[#89A4B9]
                    focus:bg-white
                  "
                />
              </label>

              <label className="block">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#60758A]">
                  Website
                </span>

                <input
                  name="website"
                  placeholder="www.yourwebsite.com"
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.86rem]
                    text-[#0B2A52]
                    outline-none
                    placeholder:text-[#A6B1BA]
                    focus:border-[#89A4B9]
                    focus:bg-white
                  "
                />
              </label>
            </div>

            {/* SERVICES */}

            <div className="mt-7">
              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#60758A]
                "
              >
                What Can We Help With? *
              </span>

              <p
                className="
                  mt-1.5
                  font-serif
                  text-[0.75rem]
                  text-[#8796A3]
                "
              >
                Select one or more.
              </p>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-2.5
                "
              >
                {services.map((service) => {
                  const selected = selectedServices.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-4
                        py-2.5
                        text-[0.58rem]
                        font-semibold
                        tracking-[0.08em]
                        transition-all
                        duration-300

                        ${
                          selected
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                            : "border-[#D7E1E8] bg-white text-[#536D83] hover:border-[#B79A72]"
                        }
                      `}
                    >
                      {selected && <Check size={10} strokeWidth={2.2} />}
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MESSAGE */}

            <label className="mt-7 block">
              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#60758A]
                "
              >
                What Are You Trying to Achieve? *
              </span>

              <textarea
                required
                name="message"
                rows={6}
                placeholder="Tell us about the challenge, project or opportunity. What would you like to improve?"
                className="
                  mt-2.5
                  w-full
                  resize-none
                  rounded-[15px]
                  border
                  border-[#D8E2E8]
                  bg-[#FBFCFD]
                  px-4
                  py-4
                  font-serif
                  text-[0.86rem]
                  leading-[1.65]
                  text-[#0B2A52]
                  outline-none
                  placeholder:text-[#A6B1BA]
                  focus:border-[#89A4B9]
                  focus:bg-white
                "
              />
            </label>

            {/* SELECTS */}

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <label>
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                  Estimated Budget
                </span>

                <select
                  name="budget"
                  defaultValue=""
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.79rem]
                    text-[#536D83]
                    outline-none
                  "
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option>Still Exploring</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹2,50,000</option>
                  <option>₹2,50,000+</option>
                  <option>Let&apos;s Discuss</option>
                </select>
              </label>

              <label>
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                  When Would You Like to Start?
                </span>

                <select
                  name="timeline"
                  defaultValue=""
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.79rem]
                    text-[#536D83]
                    outline-none
                  "
                >
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option>As Soon as Possible</option>
                  <option>Within 1 Month</option>
                  <option>1–3 Months</option>
                  <option>3+ Months</option>
                  <option>Still Planning</option>
                </select>
              </label>

              <label>
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                  How Did You Find Sharp Rays?
                </span>

                <select
                  name="source"
                  defaultValue=""
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.79rem]
                    text-[#536D83]
                    outline-none
                  "
                >
                  <option value="" disabled>
                    Select source
                  </option>
                  <option>Google Search</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                  <option>LinkedIn</option>
                  <option>Saw Our Work</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            {/* SUBMIT */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-4
                border-t
                border-[#E0E7EC]
                pt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p
                className="
                  max-w-[390px]
                  font-serif
                  text-[0.72rem]
                  leading-[1.55]
                  text-[#8796A3]
                "
              >
                No pressure. No automated sales sequence. Just enough
                information for us to understand what you need.
              </p>

              <button
                type="submit"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[linear-gradient(135deg,#0B2A52,#164D82)]
                  px-6
                  py-3.5
                  text-[0.63rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_11px_25px_rgba(11,42,82,0.16)]
                  transition
                  hover:-translate-y-1
                "
              >
                Send My Enquiry
                <Send size={12} />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* =====================================================
          SECTION 03 — NOT SURE?
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[1030px] text-center"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow centered>Start With the Problem</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                mx-auto
                mt-5
                max-w-[1000px]
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              You Don&apos;t Need to Diagnose It{" "}
              <span className="italic text-[#A97C52]">
                Before You Contact Us.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="
                mx-auto
                mt-6
                max-w-[760px]
                space-y-2
                font-serif
                text-[0.92rem]
                leading-[1.75]
                text-[#60758A]
              "
            >
              <p>Sometimes the service is obvious. Sometimes it is not.</p>
              <p>Tell us what you are seeing.</p>
            </motion.div>
          </motion.div>

          {/* DIAGNOSTIC ROUTES */}

          <div
            className="
              mx-auto
              mt-14
              max-w-[1120px]
              border-y
              border-[#DCE5EB]
            "
          >
            {problemRoutes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.problem}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : index % 2 === 0 ? -20 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease,
                  }}
                  className="
                    group
                    grid
                    gap-4
                    border-b
                    border-[#E2E9EE]
                    py-5
                    last:border-b-0
                    sm:grid-cols-[60px_1fr_auto]
                    sm:items-center
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                    "
                    style={{
                      color: item.accent,
                      backgroundColor: item.soft,
                    }}
                  >
                    <Icon size={16} strokeWidth={1.7} />
                  </span>

                  <div>
                    <span
                      className="
                        text-[0.42rem]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#9AA7B1]
                      "
                    >
                      Problem {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="
                        mt-1
                        font-serif
                        text-[1rem]
                        text-[#36536D]
                      "
                    >
                      “{item.problem}”
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      sm:justify-end
                    "
                  >
                    <span
                      className="
                        text-[0.4rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#A0AAB3]
                      "
                    >
                      Start With
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#D9E2E8]
                        bg-white
                        px-4
                        py-2
                        text-[0.56rem]
                        font-semibold
                        text-[#0B2A52]
                      "
                    >
                      {item.service}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[680px]
              text-center
              font-serif
              text-[0.92rem]
              italic
              text-[#60758A]
            "
          >
            “Not Sure Yet” is a perfectly valid starting point.
          </p>
        </div>
      </section>

      {/* =====================================================
          SECTION 04 — WHAT TO INCLUDE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_100%)]
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Help Us Understand the Project</Eyebrow>
            </motion.div>

            <div
              className="
                mt-6
                grid
                gap-8
                lg:grid-cols-[0.85fr_1.15fr]
              "
            >
              <motion.div variants={fadeUp}>
                <h2
                  className="
                    max-w-[580px]
                    font-serif
                    text-[2.1rem]
                    leading-[1.04]
                    tracking-[-0.045em]
                    text-[#0B2A52]
                    sm:text-[2.6rem]
                    md:text-[2.95rem]
                    lg:text-[3.1rem]
                    xl:text-[3.35rem]
                  "
                >
                  The Most Useful Enquiries Give Us{" "}
                  <span className="italic text-[#A97C52]">
                    Context.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[500px]
                    font-serif
                    text-[0.92rem]
                    leading-[1.75]
                    text-[#60758A]
                  "
                >
                  You do not need to prepare a formal brief. But a few details
                  can make the first conversation much more useful.
                </p>
              </motion.div>

              <div
                className="
                  grid
                  border-y
                  border-[#DCE5EB]
                  md:grid-cols-2
                "
              >
                {contextItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      variants={fadeUp}
                      className="
                        group
                        relative
                        min-h-[170px]
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
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-[#EDF4F8]
                            text-[#0B2A52]
                          "
                        >
                          <Icon size={14} strokeWidth={1.7} />
                        </span>

                        <span
                          className="
                            font-serif
                            text-[1.6rem]
                            text-[#B79A72]
                          "
                        >
                          {item.number}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-5
                          font-serif
                          text-[1rem]
                          text-[#0B2A52]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[330px]
                          font-serif
                          text-[0.75rem]
                          leading-[1.6]
                          text-[#60758A]
                        "
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              className="
                mx-auto
                mt-10
                max-w-[800px]
                text-center
              "
            >
              <span
                className="
                  text-[0.45rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#92745C]
                "
              >
                Don&apos;t Worry
              </span>

              <p
                className="
                  mt-3
                  font-serif
                  text-[1.2rem]
                  leading-[1.45]
                  text-[#0B2A52]
                "
              >
                You do not need answers to everything.{" "}
                <span className="italic text-[#A97C52]">
                  A good first conversation can help uncover them.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 05 — WHAT HAPPENS NEXT
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1340px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[980px] text-center"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow centered>After You Contact Us</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                mt-5
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Clear From the{" "}
              <span className="italic text-[#A97C52]">
                First Conversation.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mx-auto
                mt-5
                max-w-[680px]
                font-serif
                text-[0.92rem]
                leading-[1.7]
                text-[#60758A]
              "
            >
              We want the beginning of the project to feel as clear as the work
              itself.
            </motion.p>
          </motion.div>

          {/* PROCESS */}

          <div
            className="
              relative
              mx-auto
              mt-14
              max-w-[1200px]
            "
          >
            <div
              className="
                absolute
                left-[7%]
                right-[7%]
                top-[25px]
                hidden
                h-px
                bg-[#DCE5EB]
                lg:block
              "
            />

            <motion.div
              initial={{ scaleX: reduceMotion ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease }}
              style={{ transformOrigin: "left" }}
              className="
                absolute
                left-[7%]
                right-[7%]
                top-[25px]
                hidden
                h-px
                bg-[linear-gradient(90deg,#0B2A52,#88A5BA,#B79A72)]
                lg:block
              "
            />

            <div
              className="
                grid
                gap-0
                border-y
                border-[#DCE5EB]
                md:grid-cols-2
                lg:grid-cols-6
              "
            >
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease,
                  }}
                  className="
                    relative
                    min-h-[220px]
                    border-b
                    border-r
                    border-[#E2E9EE]
                    px-5
                    py-5
                  "
                >
                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-[50px]
                      w-[50px]
                      items-center
                      justify-center
                      rounded-full
                      border-[6px]
                      border-white
                      bg-[#EEF4F8]
                      font-serif
                      text-[0.8rem]
                      text-[#0B2A52]
                      shadow-[0_0_0_1px_#D6E1E8]
                    "
                  >
                    {item.number}
                  </span>

                  <h3
                    className="
                      mt-6
                      font-serif
                      text-[1rem]
                      leading-[1.3]
                      text-[#0B2A52]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      font-serif
                      text-[0.72rem]
                      leading-[1.6]
                      text-[#60758A]
                    "
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-9 text-center">
            <span
              className="
                text-[0.46rem]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#92745C]
              "
            >
              The Principle
            </span>

            <p
              className="
                mt-3
                font-serif
                text-[1.35rem]
                italic
                text-[#0B2A52]
              "
            >
              Clarity Before Commitment.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 06 — WHAT WE CAN TALK ABOUT
      ===================================================== */}

      <section
        id="services"
        className="
          relative
          overflow-hidden
          bg-[#F8FAFC]
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow centered>Ways to Work With Sharp Rays</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                mt-5
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              One Project. One Service. Or a{" "}
              <span className="italic text-[#A97C52]">
                Connected Mix.
              </span>
            </motion.h2>
          </motion.div>

          <div
            className="
              mx-auto
              mt-12
              max-w-[1120px]
              border-y
              border-[#DCE5EB]
            "
          >
            {talkAbout.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                  className="
                    group
                    grid
                    gap-4
                    border-b
                    border-[#E2E9EE]
                    bg-white/55
                    px-4
                    py-5
                    last:border-b-0
                    sm:grid-cols-[52px_60px_1fr_auto]
                    sm:items-center
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#0B2A52]
                      shadow-[0_6px_18px_rgba(11,42,82,0.05)]
                    "
                  >
                    <Icon size={15} strokeWidth={1.7} />
                  </span>

                  <span
                    className="
                      font-serif
                      text-[1.5rem]
                      text-[#B79A72]
                    "
                  >
                    {item.number}
                  </span>

                  <div>
                    <h3
                      className="
                        font-serif
                        text-[1rem]
                        text-[#0B2A52]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        font-serif
                        text-[0.74rem]
                        leading-[1.5]
                        text-[#60758A]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={13}
                    className="
                      text-[#B79A72]
                      opacity-0
                      transition-all
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </motion.div>
              );
            })}
          </div>

          <p
            className="
              mx-auto
              mt-8
              max-w-[650px]
              text-center
              font-serif
              text-[0.92rem]
              text-[#60758A]
            "
          >
            Not sure? Describe the business problem instead.{" "}
            <span className="italic text-[#0B2A52]">
              We can start from there.
            </span>
          </p>
        </div>
      </section>

      {/* =====================================================
          SECTION 07 — DIRECT CONTACT
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -28,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease }}
            >
              <Eyebrow>Prefer Email?</Eyebrow>

              <h2
                className="
                  mt-6
                  max-w-[500px]
                  font-serif
                  text-[2.1rem]
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Reach Sharp Rays{" "}
                <span className="italic text-[#A97C52]">
                  Directly.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[0.88rem]
                  leading-[1.7]
                  text-[#60758A]
                "
              >
                If email is easier, you can contact us directly without filling
                out the full project form.
              </p>
            </motion.div>

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
              className="border-y border-[#DCE5EB]"
            >
              {[
                {
                  label: "Email",
                  value: "hello@sharprays.com",
                  icon: Mail,
                  href: "mailto:hello@sharprays.com",
                },
                {
                  label: "Phone",
                  value: "[ADD YOUR REAL BUSINESS PHONE NUMBER]",
                  icon: Phone,
                },
                {
                  label: "Business Hours",
                  value: "[ADD YOUR REAL WORKING HOURS]",
                  icon: Clock3,
                },
                {
                  label: "Location / Service Area",
                  value: "[ADD YOUR REAL BUSINESS LOCATION OR SERVICE AREA]",
                  icon: MapPin,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      grid
                      gap-4
                      border-b
                      border-[#E2E9EE]
                      py-5
                      last:border-b-0
                      sm:grid-cols-[48px_150px_1fr]
                      sm:items-center
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F2F6F9]
                        text-[#0B2A52]
                      "
                    >
                      <Icon size={14} />
                    </span>

                    <span
                      className="
                        text-[0.45rem]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#92745C]
                      "
                    >
                      {item.label}
                    </span>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="
                          font-serif
                          text-[0.9rem]
                          text-[#0B2A52]
                          transition
                          hover:text-[#A97C52]
                        "
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="
                          font-serif
                          text-[0.8rem]
                          leading-[1.5]
                          text-[#60758A]
                        "
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                );
              })}

              {/* SOCIAL */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  py-5
                "
              >
                <span
                  className="
                    mr-2
                    text-[0.45rem]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#92745C]
                  "
                >
                  Social
                </span>

              <a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex
    items-center
    gap-2
    rounded-full
    border
    border-[#D8E2E8]
    bg-white
    px-4
    py-2
    text-[0.58rem]
    font-semibold
    text-[#536D83]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:border-[#B79A72]/60
    hover:text-[#0B2A52]
  "
>
  <Globe2
    size={12}
    strokeWidth={1.8}
    className="
      text-[#A97C52]
      transition-transform
      duration-300
      group-hover:rotate-6
    "
  />
  LinkedIn
</a>

<a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex
    items-center
    gap-2
    rounded-full
    border
    border-[#D8E2E8]
    bg-white
    px-4
    py-2
    text-[0.58rem]
    font-semibold
    text-[#536D83]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:border-[#B79A72]/60
    hover:text-[#0B2A52]
  "
>
  <Globe2
    size={12}
    strokeWidth={1.8}
    className="
      text-[#A97C52]
      transition-transform
      duration-300
      group-hover:rotate-6
    "
  />
  Instagram
</a>
              </div>
            </motion.div>
          </div>

          <div
            className="
              mx-auto
              mt-10
              max-w-[850px]
              border-l-2
              border-[#B79A72]
              pl-5
            "
          >
            <span
              className="
                text-[0.42rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#92745C]
              "
            >
              Important
            </span>

            <p
              className="
                mt-2
                font-serif
                text-[0.8rem]
                leading-[1.65]
                text-[#60758A]
              "
            >
              Only publish real contact details that you actively monitor. If
              Sharp Rays does not operate from a customer-facing office, use an
              accurate service area rather than adding a fake office address.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 08 — BEFORE WE START
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#F8FAFC]
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[1020px] text-center"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow centered>Good to Know</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                mt-5
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              A Better Project Starts With{" "}
              <span className="italic text-[#A97C52]">
                Clear Expectations.
              </span>
            </motion.h2>
          </motion.div>

          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-[1120px]
              border-y
              border-[#DCE5EB]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {expectations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="
                  min-h-[145px]
                  border-b
                  border-r
                  border-[#E2E9EE]
                  bg-white/60
                  px-5
                  py-5
                "
              >
                <span
                  className="
                    font-serif
                    text-[1.4rem]
                    text-[#B79A72]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    mt-4
                    text-[0.51rem]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#0B2A52]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[0.75rem]
                    leading-[1.55]
                    text-[#60758A]
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            className="
              mx-auto
              mt-9
              max-w-[780px]
              text-center
            "
          >
            <p className="font-serif text-[0.88rem] text-[#60758A]">
              No vague package. No hidden responsibilities.
            </p>

            <p
              className="
                mt-2
                font-serif
                text-[1.22rem]
                text-[#0B2A52]
              "
            >
              Know what you&apos;re agreeing to{" "}
              <span className="italic text-[#A97C52]">
                before the work begins.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 09 — FAQ
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-16
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -28,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <Eyebrow>Contact FAQs</Eyebrow>

              <h2
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[2.1rem]
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Before You Send the{" "}
                <span className="italic text-[#A97C52]">
                  Enquiry?
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-[420px]
                  font-serif
                  text-[0.86rem]
                  leading-[1.7]
                  text-[#60758A]
                "
              >
                Straightforward answers to common questions before the first
                conversation.
              </p>
            </motion.div>

            <div className="border-y border-[#DCE5EB]">
              {faqs.map((faq, index) => {
                const open = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="
                      border-b
                      border-[#E2E9EE]
                      last:border-b-0
                    "
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(open ? null : index)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        gap-4
                        py-5
                        text-left
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[1.25rem]
                          text-[#B79A72]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          flex-1
                          font-serif
                          text-[0.98rem]
                          text-[#0B2A52]
                          sm:text-[1.03rem]
                        "
                      >
                        {faq.question}
                      </span>

                      <motion.span
                        animate={{
                          rotate: open ? 180 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F2F6F8]
                          text-[#0B2A52]
                        "
                      >
                        <ChevronDown size={13} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease,
                          }}
                          className="overflow-hidden"
                        >
                          <p
                            className="
                              max-w-[720px]
                              pb-5
                              pl-[50px]
                              pr-5
                              font-serif
                              text-[0.82rem]
                              leading-[1.7]
                              text-[#60758A]
                            "
                          >
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 10 — FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          pb-24
          pt-8
          sm:pb-28
          lg:pb-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
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
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-[#D4E0E8]
              bg-[linear-gradient(135deg,#EFF6FB_0%,#FFFFFF_50%,#FAF4EA_100%)]
              px-6
              py-16
              text-center
              shadow-[0_30px_80px_rgba(11,42,82,0.07)]
              sm:px-10
              sm:py-20
              lg:py-24
            "
          >
            {/* DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                -left-[180px]
                -top-[210px]
                h-[450px]
                w-[450px]
                rounded-full
                border
                border-[#CBDDE8]
              "
            />

            <div
              className="
                pointer-events-none
                -bottom-[210px]
                -right-[180px]
                absolute
                h-[470px]
                w-[470px]
                rounded-full
                border
                border-[#E2CBA8]
              "
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="
                relative
                z-10
                mx-auto
                max-w-[900px]
              "
            >
              <motion.div variants={fadeUp}>
                <Eyebrow centered>Ready When You Are</Eyebrow>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="
                  mx-auto
                  mt-5
                  max-w-[850px]
                  font-serif
                  text-[2.1rem]
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Let&apos;s Start With{" "}
                <span className="italic text-[#A97C52]">
                  the Problem.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mx-auto
                  mt-6
                  max-w-[680px]
                  font-serif
                  text-[0.94rem]
                  leading-[1.75]
                  text-[#60758A]
                "
              >
                You do not need to arrive with the solution. Tell us what you
                want to improve, what is getting in the way and what a better
                outcome would look like.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="
                  mt-3
                  font-serif
                  text-[1.08rem]
                  italic
                  text-[#0B2A52]
                "
              >
                We&apos;ll take it from there.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="
                  mt-9
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  sm:flex-row
                "
              >
                <a
                  href="#contact-form"
                  className="
                    group
                    inline-flex
                    min-w-[200px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[linear-gradient(135deg,#0B2A52,#164D82)]
                    px-6
                    py-3.5
                    text-[0.64rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white
                    shadow-[0_13px_30px_rgba(11,42,82,0.17)]
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Start the Conversation
                  <ArrowRight size={12} />
                </a>

                <a
                  href="mailto:hello@sharprays.com"
                  className="
                    inline-flex
                    min-w-[200px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#CBD8E1]
                    bg-white
                    px-6
                    py-3.5
                    text-[0.64rem]
                    font-semibold
                    tracking-[0.08em]
                    text-[#0B2A52]
                    transition-all
                    hover:-translate-y-1
                    hover:border-[#B79A72]/60
                  "
                >
                  <Mail size={12} className="text-[#B79A72]" />
                  hello@sharprays.com
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="
                  mx-auto
                  mt-10
                  flex
                  w-fit
                  items-center
                  gap-4
                "
              >
                <span className="h-px w-10 bg-[#D2DEE6]" />

                <span
                  className="
                    text-[0.45rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#6B8194]
                  "
                >
                  Tell Us What&apos;s Next
                </span>

                <span className="h-px w-10 bg-[#D2DEE6]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}