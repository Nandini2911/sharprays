"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronDown,
  Database,
  FileText,
  Headphones,
  Mail,
  Megaphone,
  Play,
  Route,
  Settings,
  Sparkles,
  TrendingUp,
  UserRoundCheck,
  Users,
  Workflow,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type Service = {
  number: string;
  title: string;
  short: string;
  icon: LucideIcon;
  tone: string;
  iconTone: string;
  listLabel: string;
  intro?: string;
  items: string[];
  closing: string;
  emphasis?: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Workflow Automation",
    short: "Turn repetitive processes into repeatable systems.",
    icon: Settings,
    tone: "from-[#EEF6FF] to-[#E6F1FC]",
    iconTone: "bg-[#E0EEFD] text-[#174F91]",
    intro:
      "We map existing workflows and identify where manual steps can be reduced.",
    listLabel: "Potential workflows can involve:",
    items: [
      "Forms",
      "Email",
      "Spreadsheets",
      "CRM systems",
      "Internal tools",
      "Calendars",
      "Databases",
      "Project management systems",
      "Notifications",
      "Approvals",
    ],
    closing:
      "The goal is to create a process that moves more consistently with fewer manual handoffs.",
  },
  {
    number: "02",
    title: "AI Agent Development",
    short: "Give specific jobs to purpose-built AI workflows.",
    icon: Bot,
    tone: "from-[#FFF7E9] to-[#F8EEDF]",
    iconTone: "bg-[#FFF0D7] text-[#8B5926]",
    listLabel: "Depending on the use case, an agent may help:",
    items: [
      "Review incoming information",
      "Find relevant internal data",
      "Summarize requests",
      "Prepare responses",
      "Update systems",
      "Trigger other workflows",
      "Generate reports",
      "Route exceptions to people",
    ],
    closing:
      "We define what the agent is allowed to do before deciding how autonomous it should become.",
  },
  {
    number: "03",
    title: "Lead Qualification Automation",
    short: "Respond faster without treating every lead the same.",
    icon: UserRoundCheck,
    tone: "from-[#EEF9F4] to-[#E3F4EC]",
    iconTone: "bg-[#DFF3E9] text-[#167151]",
    listLabel: "New enquiries can be automatically:",
    items: [
      "Captured",
      "Categorized",
      "Enriched with relevant information",
      "Qualified against defined criteria",
      "Added to the CRM",
      "Assigned to the right person",
      "Acknowledged",
      "Moved into an appropriate follow-up workflow",
    ],
    closing:
      "This can help sales teams focus attention where human involvement creates the most value.",
  },
  {
    number: "04",
    title: "CRM Automation",
    short: "Keep customer information moving without constant manual updates.",
    icon: Database,
    tone: "from-[#F2EFFF] to-[#EAE7FB]",
    iconTone: "bg-[#E7E1FF] text-[#5138C7]",
    listLabel: "CRM automation can support processes such as:",
    items: [
      "Lead creation",
      "Contact updates",
      "Pipeline movement",
      "Task creation",
      "Follow-up reminders",
      "Lead assignment",
      "Status changes",
      "Internal notifications",
      "Activity summaries",
      "Data synchronization",
    ],
    closing:
      "The objective is a cleaner system with fewer administrative steps between customer interactions.",
  },
  {
    number: "05",
    title: "Sales Automation",
    short: "Reduce the admin around selling.",
    icon: TrendingUp,
    tone: "from-[#FFF0F4] to-[#F9E4EC]",
    iconTone: "bg-[#FFE0E9] text-[#A13F66]",
    intro:
      "Sales teams should spend more time communicating with opportunities and less time maintaining the process around them.",
    listLabel: "Automation can assist with:",
    items: [
      "Lead routing",
      "Follow-up sequences",
      "Meeting preparation",
      "Call summaries",
      "Pipeline updates",
      "Proposal triggers",
      "Reminders",
      "Internal handoffs",
      "Opportunity alerts",
    ],
    closing:
      "Human review remains important where conversations or decisions require judgement.",
  },
  {
    number: "06",
    title: "Customer Support Automation",
    short: "Handle routine requests without making support feel robotic.",
    icon: Headphones,
    tone: "from-[#EEF9F5] to-[#E3F3ED]",
    iconTone: "bg-[#DFF2EA] text-[#176D58]",
    listLabel: "AI-assisted support workflows can help:",
    items: [
      "Identify enquiry types",
      "Answer suitable recurring questions",
      "Search approved knowledge",
      "Summarize conversations",
      "Create support tickets",
      "Assign requests",
      "Escalate sensitive issues",
      "Prepare suggested responses",
      "Update customer records",
    ],
    closing: "Automation should shorten the path to a useful answer.",
    emphasis: "Not make customers fight through another system.",
  },
  {
    number: "07",
    title: "Marketing Automation",
    short: "Connect interest with the right next step.",
    icon: Megaphone,
    tone: "from-[#FFF6E8] to-[#FAEEDC]",
    iconTone: "bg-[#FFECCE] text-[#925824]",
    listLabel: "Marketing workflows can help coordinate:",
    items: [
      "Lead capture",
      "Audience segmentation",
      "Email sequences",
      "Campaign follow-ups",
      "Content distribution",
      "CRM updates",
      "Event registrations",
      "Notifications",
      "Lead nurturing",
      "Campaign data",
    ],
    closing:
      "Automation supports the journey while strategy determines what communication should happen and why.",
  },
  {
    number: "08",
    title: "Email Automation",
    short: "Make routine communication more reliable.",
    icon: Mail,
    tone: "from-[#EFF6FF] to-[#E7F0FA]",
    iconTone: "bg-[#E0ECFC] text-[#245FAB]",
    listLabel: "Email workflows can help with:",
    items: [
      "Enquiry acknowledgements",
      "Follow-up reminders",
      "Internal alerts",
      "Customer onboarding",
      "Status notifications",
      "Meeting preparation",
      "Recurring updates",
      "Post-event communication",
      "Lead nurturing",
    ],
    closing:
      "Important communication should still be reviewed where context, sensitivity or accuracy requires human involvement.",
  },
  {
    number: "09",
    title: "Document Processing Automation",
    short: "Turn incoming documents into usable information.",
    icon: FileText,
    tone: "from-[#FFF0F5] to-[#F8E5ED]",
    iconTone: "bg-[#FFE0EA] text-[#A23F68]",
    listLabel: "AI can assist with workflows involving:",
    items: [
      "Forms",
      "PDFs",
      "Invoices",
      "Applications",
      "Reports",
      "Briefs",
      "Meeting notes",
      "Customer documents",
      "Internal files",
    ],
    closing:
      "Depending on the use case, information can be extracted, categorized, summarized and routed into the systems where it is needed.",
  },
  {
    number: "10",
    title: "Reporting & Data Automation",
    short: "Spend less time building the report.",
    icon: BarChart3,
    tone: "from-[#EDF8F3] to-[#E2F1EA]",
    iconTone: "bg-[#DDF1E8] text-[#1A7558]",
    intro:
      "Automation can help collect and organize information from different sources into recurring business views.",
    listLabel: "Potential applications include:",
    items: [
      "Marketing reports",
      "Sales summaries",
      "Lead activity",
      "Campaign data",
      "Operational dashboards",
      "Weekly summaries",
      "Performance notifications",
      "Exception alerts",
    ],
    closing:
      "The goal is to reduce the time between data existing and somebody being able to use it.",
  },
  {
    number: "11",
    title: "Internal Knowledge Automation",
    short: "Help teams find what the business already knows.",
    icon: BookOpen,
    tone: "from-[#F1EFFF] to-[#E9E6FA]",
    iconTone: "bg-[#E8E2FF] text-[#5940BD]",
    intro:
      "Important information is often scattered across documents, messages and internal systems.",
    listLabel: "AI-assisted knowledge workflows can help employees:",
    items: [
      "Find approved information",
      "Summarize internal documents",
      "Retrieve procedures",
      "Prepare meeting context",
      "Answer recurring internal questions",
      "Locate relevant resources",
    ],
    closing:
      "Access should always follow the permissions and boundaries defined by the business.",
  },
];

/* =========================================================
   MINI CARD VISUAL
========================================================= */

function MiniVisual({
  index,
  tone,
}: {
  index: number;
  tone: string;
}) {
  if (index === 0) {
    return (
      <div className="relative mx-auto h-[104px] w-full max-w-[170px]">
        <div className="absolute left-2 top-10 flex h-[38px] w-[38px] items-center justify-center rounded-[12px] border border-white bg-white/90 text-[#0B2A52] shadow-sm">
          <Mail size={15} />
        </div>

        <div className="absolute left-1/2 top-2 flex h-[38px] w-[38px] -translate-x-1/2 items-center justify-center rounded-[12px] border border-white bg-white/90 text-[#0B2A52] shadow-sm">
          <Mail size={15} />
        </div>

        <div className="absolute bottom-1 left-1/2 flex h-[38px] w-[38px] -translate-x-1/2 items-center justify-center rounded-[12px] border border-white bg-white/90 text-[#0B2A52] shadow-sm">
          <Users size={15} />
        </div>

        <div className="absolute right-2 top-10 flex h-[38px] w-[38px] items-center justify-center rounded-[12px] border border-white bg-white/90 text-[#0B2A52] shadow-sm">
          <Mail size={15} />
        </div>

        <svg
          viewBox="0 0 170 104"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path d="M30 58 C55 58 60 25 85 25" fill="none" stroke="#7AA6D4" />
          <path d="M85 25 C85 52 85 70 85 88" fill="none" stroke="#7AA6D4" />
          <path d="M85 25 C110 25 115 58 140 58" fill="none" stroke="#7AA6D4" />
        </svg>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="flex h-[104px] items-end justify-center">
        <div
          className="
            relative
            flex
            h-[76px]
            w-[92px]
            flex-col
            items-center
            justify-center
            rounded-[28px_28px_20px_20px]
            border
            border-white/80
            bg-white/85
            shadow-[0_12px_25px_rgba(11,42,82,0.09)]
          "
        >
          <div className="flex h-[34px] w-[58px] items-center justify-center rounded-[17px] bg-[#0B2A52]">
            <span className="h-[8px] w-[8px] rounded-full bg-[#7FC2F2]" />
            <span className="ml-4 h-[8px] w-[8px] rounded-full bg-[#7FC2F2]" />
          </div>

          <div className="mt-2 h-[8px] w-[42px] rounded-full bg-[#E7EBEF]" />
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="mx-auto h-[104px] max-w-[170px] rounded-[18px] border border-white bg-white/85 p-3 shadow-sm">
        {["New Lead", "Qualified", "Assigned"].map((item, i) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-2
              border-b
              border-[#0B2A52]/[0.06]
              py-1.5
              last:border-b-0
            "
          >
            <CheckCircle2
              size={13}
              className={i === 0 ? "text-[#B18458]" : "text-[#32866A]"}
            />

            <span
              style={newYorkFont}
              className="text-[8px] text-[#0B2A52]"
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (index === 3 || index === 4) {
    return (
      <div className="mx-auto h-[104px] max-w-[170px] rounded-[18px] border border-white bg-white/85 p-3 shadow-sm">
        {[
          "New Lead",
          index === 3 ? "Update Contact" : "Follow Up",
          index === 3 ? "Move to Pipeline" : "Meeting",
          index === 3 ? "Create Task" : "Proposal",
        ].map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2 py-1.5"
          >
            <span
              className={`
                flex
                h-[16px]
                w-[16px]
                items-center
                justify-center
                rounded-full
                text-white

                ${
                  i === 0
                    ? "bg-[#7864DA]"
                    : "bg-[#52A78A]"
                }
              `}
            >
              <CheckCircle2 size={9} />
            </span>

            <span
              style={newYorkFont}
              className="text-[8px] text-[#0B2A52]"
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (index === 5) {
    return (
      <div className="mx-auto space-y-2">
        <div className="rounded-full border border-white bg-white/85 px-3 py-2">
          <span
            style={newYorkFont}
            className="text-[8px] text-[#0B2A52]"
          >
            How can we help you?
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-[16px] border border-white bg-white/85 p-3">
          <Bot size={18} className="text-[#0B2A52]" />

          <span
            style={newYorkFont}
            className="text-[8px] leading-[1.3] text-[#0B2A52]"
          >
            Instant answer from your knowledge base.
          </span>
        </div>
      </div>
    );
  }

  if (index === 6) {
    return (
      <div className="mx-auto h-[104px] max-w-[160px] rounded-[18px] border border-white bg-white/85 p-3">
        {["Capture", "Segment", "Nurture", "Convert"].map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2 py-1"
          >
            <span
              className="
                flex
                h-[16px]
                w-[16px]
                items-center
                justify-center
                rounded-full
                bg-[#E9EFF6]
                text-[#0B2A52]
              "
            >
              {i + 1}
            </span>

            <span
              style={newYorkFont}
              className="text-[8px] text-[#0B2A52]"
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (index === 7) {
    return (
      <div
        className="
          mx-auto
          flex
          h-[104px]
          max-w-[155px]
          items-center
          justify-center
          rounded-[24px]
          border
          border-white
          bg-white/80
          shadow-sm
        "
      >
        <Mail size={34} className="text-[#2869B0]" />
      </div>
    );
  }

  if (index === 8) {
    return (
      <div className="relative mx-auto h-[104px] max-w-[170px]">
        {["PDF", "Invoice", "Form"].map((item, i) => (
          <div
            key={item}
            className="
              absolute
              top-[10px]
              h-[78px]
              w-[56px]
              rounded-[12px]
              border
              border-white
              bg-white/85
              p-2
              shadow-sm
            "
            style={{
              left: `${i * 45 + 8}px`,
              transform: `rotate(${(i - 1) * 5}deg)`,
            }}
          >
            <span
              style={newYorkFont}
              className="text-[8px] text-[#0B2A52]"
            >
              {item}
            </span>

            <div className="mt-4 h-[3px] w-full rounded bg-[#CBD7E3]" />
            <div className="mt-2 h-[3px] w-[75%] rounded bg-[#DCE5EC]" />
          </div>
        ))}
      </div>
    );
  }

  if (index === 9) {
    return (
      <div className="mx-auto h-[104px] max-w-[170px] rounded-[18px] border border-white bg-white/85 p-3">
        <span
          style={newYorkFont}
          className="text-[8px] text-[#0B2A52]"
        >
          Weekly Report
        </span>

        <div className="mt-4 flex h-[50px] items-end gap-2">
          {[20, 35, 28, 48, 40].map((height, i) => (
            <span
              key={i}
              className="w-[10px] rounded-t bg-[#5C8FAD]"
              style={{ height }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto h-[104px] max-w-[170px] rounded-[18px] border border-white bg-white/85 p-3">
      <div className="flex items-center gap-2 rounded-full border border-[#DDE5EC] px-3 py-1.5">
        <BookOpen size={11} className="text-[#6650C5]" />

        <span
          style={newYorkFont}
          className="text-[7px] text-[#60748A]"
        >
          Find information...
        </span>
      </div>

      <div className="mt-2 space-y-1.5">
        {["Policies", "Procedures", "Meeting notes", "Resources"].map(
          (item) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-[#806AD6]" />

              <span
                style={newYorkFont}
                className="text-[7px] text-[#0B2A52]"
              >
                {item}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  index,
  reduceMotion,
  onOpen,
}: {
  service: Service;
  index: number;
  reduceMotion: boolean;
  onOpen: () => void;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.25),
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
            }
      }
      className={`
        group
        relative
        flex
        min-h-[430px]
        flex-col
        overflow-hidden
        rounded-[54px]
        border
        border-white/80
        bg-gradient-to-b
        p-5
        shadow-[0_15px_38px_rgba(11,42,82,0.055)]

        ${service.tone}
      `}
    >
      {/* SOFT CURVE */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[72px]
          -right-[68px]
          h-[210px]
          w-[210px]
          rounded-full
          bg-white/32
        "
      />

      {/* TOP */}

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div
          className={`
            flex
            h-[44px]
            w-[44px]
            items-center
            justify-center
            rounded-full

            ${service.iconTone}
          `}
        >
          <Icon
            size={20}
            strokeWidth={1.55}
          />
        </div>

        <span
          style={newYorkFont}
          className="
            pt-2
            text-[10px]
            text-[#B18458]
          "
        >
          {service.number}
        </span>
      </div>

      {/* TITLE */}

      <h3
        style={newYorkFont}
        className="
          relative
          z-10
          mt-5
          min-h-[62px]
          text-[1.35rem]
          font-light
          leading-[1.02]
          tracking-[-0.045em]
          text-[#0B2A52]
        "
      >
        {service.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        style={newYorkFont}
        className="
          relative
          z-10
          mt-2
          min-h-[54px]
          text-[10px]
          leading-[1.45]
          text-[#536D85]
        "
      >
        {service.short}
      </p>

      {/* LEARN MORE */}

      <button
        type="button"
        onClick={onOpen}
        className="
          relative
          z-20
          mt-3
          flex
          w-fit
          items-center
          gap-2
          text-[8px]
          uppercase
          tracking-[0.16em]
          text-[#0B2A52]
        "
      >
        Learn more

        <ArrowRight
          size={12}
          strokeWidth={1.5}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>

      {/* MINI VISUAL */}

      <div
        className="
          relative
          z-10
          mt-auto
          pt-5
        "
      >
        <MiniVisual
          index={index}
          tone={service.tone}
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AiAutomationServices() {
  const reduceMotion = Boolean(useReducedMotion());
  const [activeService, setActiveService] = useState<number | null>(null);

  const selected =
    activeService === null ? null : services[activeService];

  return (
    <section
      id="ai-automation-services"
      aria-labelledby="ai-automation-services-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[250px]
          top-[110px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#EFF6FC]
          opacity-65
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[250px]
          top-[120px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#FBF3E8]
          opacity-60
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1540px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            TOP INTRO
        ===================================================== */}

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.58fr_0.42fr]
            lg:items-center
            lg:gap-14
          "
        >
          {/* LEFT */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -24,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease,
            }}
          >
            <div className="flex items-center gap-4">
              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.34em]
                  text-[#B18458]
                  sm:text-[10px]
                "
              >
                AI Automation Services
              </span>

              <span className="h-px w-14 bg-[#C6A77A]" />
            </div>

            <h2
              id="ai-automation-services-heading"
              style={newYorkFont}
              className="
                mt-7
                max-w-[760px]

                text-[2.1rem]
                font-light
                leading-[0.96]
                tracking-[-0.055em]
                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Connect the Work That Happens{" "}
              <span className="text-[#B18458]">
                Between Your Systems.
              </span>
            </h2>

            <p
              style={newYorkFont}
              className="
                mt-6
                max-w-[700px]
                text-[15px]
                leading-[1.65]
                text-[#4E6982]
                sm:text-[16px]
              "
            >
              AI automation can support different parts of a business depending
              on where repetitive work, delays or disconnected information
              exist.
            </p>

            {/* ACTIONS */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("automation-service-grid")
                    ?.scrollIntoView({
                      behavior: reduceMotion ? "auto" : "smooth",
                    })
                }
                className="
                  group
                  flex
                  h-[54px]
                  items-center
                  gap-5
                  rounded-full
                  bg-[#0B2A52]
                  pl-6
                  pr-2
                  text-white
                  shadow-[0_12px_30px_rgba(11,42,82,0.14)]
                "
              >
                <span
                  style={newYorkFont}
                  className="text-[12px]"
                >
                  Explore Automation Services
                </span>

                <span
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                  "
                >
                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </button>

              <button
                type="button"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-[#0B2A52]
                "
              >
                <span
                  className="
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0B2A52]/30
                  "
                >
                  <Play size={15} />
                </span>

                <span
                  style={newYorkFont}
                  className="
                    text-[11px]
                    leading-[1.15]
                  "
                >
                  See How
                  <br />
                  It Works
                </span>
              </button>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT EDITORIAL VISUAL
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 25,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease,
            }}
            className="
              relative
              mx-auto
              min-h-[390px]
              w-full
              max-w-[600px]
            "
          >
            {/* ARCH */}

            <div
              className="
                absolute
                bottom-0
                right-0
                h-[355px]
                w-[76%]
                overflow-hidden
                rounded-t-[190px]
                bg-[#F4EEE5]
              "
            >
              <div
                className="
                  absolute
                  bottom-[60px]
                  left-[30px]
                  h-[160px]
                  w-[105px]
                  rounded-t-[65px]
                  bg-[#E8DDCC]
                "
              />

              {/* TABLE */}

              <div
                className="
                  absolute
                  bottom-[54px]
                  left-[12%]
                  right-[6%]
                  h-[14px]
                  rounded-full
                  bg-[#E1D2BD]
                "
              />

              {/* LAPTOP */}

              <div
                className="
                  absolute
                  bottom-[68px]
                  left-[34%]
                  h-[105px]
                  w-[175px]
                  -skew-x-[3deg]
                  rounded-[8px]
                  border-[5px]
                  border-[#3B3F44]
                  bg-[#202429]
                  shadow-[0_18px_25px_rgba(11,42,82,0.14)]
                "
              />

              {/* PLANT */}

              <div
                className="
                  absolute
                  bottom-[70px]
                  left-[17%]
                  h-[72px]
                  w-[34px]
                  rounded-[8px_8px_14px_14px]
                  bg-white
                "
              />

              <div
                className="
                  absolute
                  bottom-[135px]
                  left-[19%]
                  h-[100px]
                  w-[3px]
                  rotate-[-8deg]
                  bg-[#6F805D]
                "
              />

              {/* BOOKS */}

              <div className="absolute bottom-[70px] right-[7%]">
                {["Automate", "Smarter", "Growth"].map((text, i) => (
                  <div
                    key={text}
                    className="
                      flex
                      h-[26px]
                      w-[112px]
                      items-center
                      justify-center
                      border
                      border-[#D6CDBF]
                      bg-white
                    "
                    style={{
                      transform: `translateX(${i * -4}px)`,
                    }}
                  >
                    <span
                      style={newYorkFont}
                      className="text-[9px] text-[#473B2E]"
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* LEFT TEXT */}

            <div
              className="
                absolute
                left-0
                top-[85px]
                z-20
              "
            >
              <span
                style={newYorkFont}
                className="
                  block
                  text-[7px]
                  uppercase
                  leading-[1.6]
                  tracking-[0.3em]
                  text-[#0B2A52]
                "
              >
                FROM
                <br />
                MANUAL WORK
                <br />
                TO MEANINGFUL
                <br />
                PROGRESS.
              </span>

              <span className="mt-4 block h-px w-10 bg-[#C6A77A]" />

              <p
                style={newYorkFont}
                className="
                  mt-8
                  text-[13px]
                  leading-[1.35]
                  text-[#65809A]
                "
              >
                Automate
                <br />
                Simplify
                <br />
                Scale
              </p>
            </div>

            {/* HANDWRITTEN NOTE */}

            <p
              style={newYorkFont}
              className="
                absolute
                right-[15px]
                top-[75px]
                z-20
                rotate-[-7deg]
                text-right
                text-[19px]
                italic
                leading-[1.15]
                text-[#0B2A52]
              "
            >
              Less
              <br />
              Manual Work.
              <br />
              More
              <br />
              Possibilities.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <div
          id="automation-service-grid"
          className="
            mt-16
            grid
            gap-4

            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-6
          "
        >
          {/* FIRST 6 */}

          {services.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              reduceMotion={reduceMotion}
              onOpen={() => setActiveService(index)}
            />
          ))}

          {/* SECOND 5 */}

          {services.slice(6).map((service, secondIndex) => {
            const realIndex = secondIndex + 6;

            return (
              <ServiceCard
                key={service.number}
                service={service}
                index={realIndex}
                reduceMotion={reduceMotion}
                onOpen={() => setActiveService(realIndex)}
              />
            );
          })}

          {/* =================================================
              BIGGER PICTURE CTA
          ================================================= */}

          <motion.article
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 28,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.2,
              ease,
            }}
            className="
              relative
              flex
              min-h-[430px]
              flex-col
              overflow-hidden
              rounded-[54px]
              bg-[#0B2A52]
              p-6
              text-white
              shadow-[0_18px_40px_rgba(11,42,82,0.16)]
            "
          >
            <Sparkles
              size={27}
              strokeWidth={1.3}
              className="text-[#9CC8EB]"
            />

            <span
              style={newYorkFont}
              className="
                mt-8
                text-[7px]
                uppercase
                tracking-[0.33em]
                text-white/55
              "
            >
              THE BIGGER PICTURE
            </span>

            <span className="mt-5 h-px w-9 bg-[#C6A77A]" />

            <h3
              style={newYorkFont}
              className="
                mt-5
                text-[1.75rem]
                font-light
                leading-[0.98]
                tracking-[-0.05em]
              "
            >
              A More
              <br />
              Connected
              <br />
              Business.
            </h3>

            <button
              type="button"
              className="
                group
                mt-auto
                flex
                items-center
                justify-between
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                p-2
                pl-4
              "
            >
              <span
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#0B2A52]
                "
              >
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>

              <span
                style={newYorkFont}
                className="
                  pr-4
                  text-[10px]
                  text-white/85
                "
              >
                Let&apos;s Talk
              </span>
            </button>
          </motion.article>
        </div>

        {/* =====================================================
            EXPANDED SERVICE
        ===================================================== */}

        <AnimatePresence mode="wait">
          {selected && activeService !== null && (
            <motion.div
              key={selected.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                ease,
              }}
              className="
                mt-8
                rounded-[34px]
                border
                border-[#D7E4ED]
                bg-white
                p-6
                shadow-[0_18px_44px_rgba(11,42,82,0.05)]

                sm:p-8

                lg:grid
                lg:grid-cols-[0.75fr_1.25fr]
                lg:gap-12
                lg:p-10
              "
            >
              {/* LEFT */}

              <div>
                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-[#B18458]
                  "
                >
                  {selected.number} · {selected.title}
                </span>

                <h3
                  style={newYorkFont}
                  className="
                    mt-4
                    max-w-[500px]
                    text-[1.8rem]
                    font-light
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-[#0B2A52]

                    sm:text-[2rem]
                  "
                >
                  {selected.short}
                </h3>

                {selected.intro && (
                  <p
                    style={newYorkFont}
                    className="
                      mt-5
                      max-w-[500px]
                      text-[13px]
                      leading-[1.65]
                      text-[#526D85]
                    "
                  >
                    {selected.intro}
                  </p>
                )}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      flex
                      h-[40px]
                      w-[40px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D5E3ED]
                      bg-[#F4F8FB]
                      text-[#0B2A52]
                    "
                  >
                    <Route
                      size={16}
                      strokeWidth={1.4}
                    />
                  </span>

                  <span className="h-px w-12 bg-[#C6A77A]" />

                  <span
                    style={newYorkFont}
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.25em]
                      text-[#0B2A52]/45
                    "
                  >
                    CONNECT · AUTOMATE · REVIEW
                  </span>
                </div>
              </div>

              {/* RIGHT */}

              <div
                className="
                  mt-8
                  border-t
                  border-[#0B2A52]/10
                  pt-7

                  lg:mt-0
                  lg:border-l
                  lg:border-t-0
                  lg:pl-10
                  lg:pt-0
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.27em]
                    text-[#0B2A52]/45
                  "
                >
                  {selected.listLabel}
                </span>

                <div
                  className="
                    mt-5
                    grid
                    gap-x-8
                    gap-y-2.5

                    sm:grid-cols-2
                  "
                >
                  {selected.items.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                        border-b
                        border-[#0B2A52]/[0.07]
                        pb-2.5
                      "
                    >
                      <span
                        className="
                          mt-[7px]
                          h-[5px]
                          w-[5px]
                          shrink-0
                          rounded-full
                          bg-[#B18458]
                        "
                      />

                      <span
                        style={newYorkFont}
                        className="
                          text-[11px]
                          leading-[1.45]
                          text-[#405F7B]
                        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="
                    mt-7
                    border-l
                    border-[#C6A77A]
                    pl-5
                  "
                >
                  <p
                    style={newYorkFont}
                    className="
                      text-[12px]
                      leading-[1.65]
                      text-[#0B2A52]
                    "
                  >
                    {selected.closing}
                  </p>

                  {selected.emphasis && (
                    <p
                      style={newYorkFont}
                      className="
                        mt-2
                        text-[13px]
                        text-[#B18458]
                      "
                    >
                      {selected.emphasis}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-[#0B2A52]/55
                  "
                >
                  Close details
                  <ChevronDown
                    size={13}
                    className="rotate-180"
                  />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            BOTTOM REAL GOAL
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
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            mt-10
            grid
            gap-7
            rounded-[40px]
            border
            border-[#D6E4ED]
            bg-[#F7FAFC]
            px-7
            py-8

            lg:grid-cols-[0.4fr_0.6fr_auto]
            lg:items-center
            lg:gap-10
            lg:px-10
          "
        >
          <div>
            <span
              style={newYorkFont}
              className="
                text-[7px]
                uppercase
                tracking-[0.32em]
                text-[#B18458]
              "
            >
              THE REAL GOAL
            </span>

            <h3
              style={newYorkFont}
              className="
                mt-3
                text-[1.7rem]
                font-light
                leading-[1.05]
                tracking-[-0.04em]
                text-[#0B2A52]

                sm:text-[2rem]
              "
            >
              Work Smarter.{" "}
              <span className="text-[#B18458]">
                Move Faster.
              </span>
            </h3>
          </div>

          <p
            style={newYorkFont}
            className="
              max-w-[570px]
              border-l
              border-[#0B2A52]/10
              pl-7
              text-[11px]
              leading-[1.6]
              text-[#536D85]
            "
          >
            When your systems, information and people work together, your
            business stays organized and creates more time for the work that
            actually matters.
          </p>

          <button
            type="button"
            className="
              group
              flex
              h-[50px]
              items-center
              gap-5
              rounded-full
              bg-[#0B2A52]
              pl-5
              pr-2
              text-white
            "
          >
            <span
              style={newYorkFont}
              className="text-[10px]"
            >
              Talk About Automation
            </span>

            <span
              className="
                flex
                h-[36px]
                w-[36px]
                items-center
                justify-center
                rounded-full
                bg-white/10
              "
            >
              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}