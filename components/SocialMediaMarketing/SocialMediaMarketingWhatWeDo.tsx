"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Compass,
  Megaphone,
  MessageCircle,
  PenTool,
} from "lucide-react";

type EngineStage = {
  number: string;
  title: string;
  short: string;
  eyebrow: string;
  description: string;
  items: string[];
  image: string;
  icon: React.ElementType;
};

const stages: EngineStage[] = [
  {
    number: "01",
    title: "Strategy",
    short: "THINK",
    eyebrow: "BUILD THE FOUNDATION",
    description:
      "We define the audience, positioning and content direction before anything goes live.",
    items: ["Audience", "Positioning", "Content pillars"],
    image: "/services/insta/meeting1.png",
    icon: Compass,
  },
  {
    number: "02",
    title: "Content",
    short: "CREATE",
    eyebrow: "MAKE THEM STOP",
    description:
      "We turn strategy into social creative designed to earn attention and create recognition.",
    items: ["Posts", "Carousels", "Reels", "Stories"],
    image: "/services/insta/meeting2.png",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Community",
    short: "CONNECT",
    eyebrow: "BUILD RELATIONSHIPS",
    description:
      "We turn attention into conversations and conversations into stronger relationships.",
    items: ["Comments", "Conversations", "Engagement"],
    image: "/services/insta/meeting3.png",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Distribution",
    short: "AMPLIFY",
    eyebrow: "REACH THE RIGHT PEOPLE",
    description:
      "We extend the reach of your best ideas through organic, paid and partnership channels.",
    items: ["Organic", "Paid", "Partnerships"],
    image: "/services/insta/meeting4.png",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Optimization",
    short: "IMPROVE",
    eyebrow: "LEARN & GET BETTER",
    description:
      "We measure what matters, test new possibilities and continuously improve performance.",
    items: ["Analytics", "Testing", "Improvement"],
    image: "/services/insta/meeting5.png",
    icon: BarChart3,
  },
];

export default function SocialMediaMarketingWhatWeDo() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isVisible, isPaused]);

  const active = stages[activeStage];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#B79A72]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#0B2A52]/10 to-transparent" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div
          className={`mx-auto max-w-[1200px] transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B79A72]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B79A72]">
                  04 / What We Actually Do
                </span>
              </div>

              <h2 className="max-w-[760px] text-[34px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[43px] lg:text-[50px]">
                From Strategy to
                <span className="text-[#0B2A52]/30"> Scroll-Stopping </span>
                Content.
              </h2>
            </div>

            <p className="max-w-[350px] text-[14px] leading-6 text-[#0B2A52]/45 lg:pb-1">
              Five disciplines working together to turn social media
              from a posting routine into a growth engine.
            </p>
          </div>
        </div>

        {/* =======================================================
            ENGINE
        ======================================================= */}

        <div
          className={`relative mx-auto mt-12 max-w-[1200px] transition-all delay-150 duration-1000 sm:mt-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* =====================================================
              DESKTOP ENGINE
          ===================================================== */}

          <div className="relative hidden min-h-[680px] lg:block">
            {/* Outer technical ring */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0B2A52]/[0.055]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[455px] w-[455px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B79A72]/[0.12]" />

            {/* Rotating dashed ring */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[525px] w-[525px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#B79A72]/20 animate-spin"
              style={{ animationDuration: "35s" }}
            />

            {/* =================================================
                CONNECTION DOTS
            ================================================= */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[455px] w-[455px] -translate-x-1/2 -translate-y-1/2">
              <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B79A72]" />

              <span className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#B79A72]" />

              <span className="absolute bottom-[-4px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#B79A72]" />

              <span className="absolute left-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#B79A72]" />
            </div>

            {/* =================================================
                CENTRAL BRAND ENGINE
            ================================================= */}

            <div className="absolute left-1/2 top-1/2 z-20 h-[335px] w-[335px] -translate-x-1/2 -translate-y-1/2">
              {/* Outer glow */}
              <div className="absolute inset-[-20px] rounded-full bg-[#B79A72]/[0.045] blur-2xl" />

              {/* Image */}
              <div className="absolute inset-0 overflow-hidden rounded-full border-[8px] border-white shadow-[0_25px_80px_rgba(11,42,82,0.18)]">
                {stages.map((stage, index) => (
                  <img
                    key={stage.image}
                    src={stage.image}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ${
                      index === activeStage
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-[#0B2A52]/35" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06182d]/85 via-[#0B2A52]/20 to-transparent" />

                {/* Center information */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-10 text-center">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                    <ActiveIcon
                      size={16}
                      strokeWidth={1.5}
                      className="text-white"
                    />
                  </div>

                  <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#E0CFB2]">
                    {active.eyebrow}
                  </span>

                  <h3 className="mt-2 text-[30px] font-medium tracking-[-0.04em] text-white">
                    {active.title}
                  </h3>

                  <p className="mt-2 max-w-[235px] text-[11px] leading-5 text-white/60">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Center pulse */}
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B79A72] shadow-[0_0_0_10px_rgba(183,154,114,0.10)] animate-pulse" />
            </div>

            {/* =================================================
                ORBIT STAGE 01
            ================================================= */}

            <button
              type="button"
              onClick={() => setActiveStage(0)}
              className={`absolute left-1/2 top-0 z-30 -translate-x-1/2 transition-all duration-500 ${
                activeStage === 0
                  ? "scale-105"
                  : "hover:scale-105"
              }`}
            >
              <EngineNode
                stage={stages[0]}
                active={activeStage === 0}
                position="top"
              />
            </button>

            {/* =================================================
                ORBIT STAGE 02
            ================================================= */}

            <button
              type="button"
              onClick={() => setActiveStage(1)}
              className={`absolute right-[7%] top-[22%] z-30 transition-all duration-500 ${
                activeStage === 1
                  ? "scale-105"
                  : "hover:scale-105"
              }`}
            >
              <EngineNode
                stage={stages[1]}
                active={activeStage === 1}
                position="right"
              />
            </button>

            {/* =================================================
                ORBIT STAGE 03
            ================================================= */}

            <button
              type="button"
              onClick={() => setActiveStage(2)}
              className={`absolute bottom-[3%] right-[14%] z-30 transition-all duration-500 ${
                activeStage === 2
                  ? "scale-105"
                  : "hover:scale-105"
              }`}
            >
              <EngineNode
                stage={stages[2]}
                active={activeStage === 2}
                position="bottom"
              />
            </button>

            {/* =================================================
                ORBIT STAGE 04
            ================================================= */}

            <button
              type="button"
              onClick={() => setActiveStage(3)}
              className={`absolute bottom-[3%] left-[14%] z-30 transition-all duration-500 ${
                activeStage === 3
                  ? "scale-105"
                  : "hover:scale-105"
              }`}
            >
              <EngineNode
                stage={stages[3]}
                active={activeStage === 3}
                position="bottom"
              />
            </button>

            {/* =================================================
                ORBIT STAGE 05
            ================================================= */}

            <button
              type="button"
              onClick={() => setActiveStage(4)}
              className={`absolute left-[7%] top-[22%] z-30 transition-all duration-500 ${
                activeStage === 4
                  ? "scale-105"
                  : "hover:scale-105"
              }`}
            >
              <EngineNode
                stage={stages[4]}
                active={activeStage === 4}
                position="left"
              />
            </button>

            {/* =================================================
                CENTER LABEL
            ================================================= */}

            <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 translate-y-[175px]">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#0B2A52]/35">
                  SOCIAL GROWTH ENGINE
                </span>

                <span className="h-px w-8 bg-[#B79A72]" />
              </div>
            </div>

            {/* =================================================
                ACTIVE STAGE COUNTER
            ================================================= */}

            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#0B2A52]/25">
                Current focus
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-[25px] font-medium tracking-[-0.04em]">
                  {active.number}
                </span>

                <span className="h-px w-7 bg-[#B79A72]" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B2A52]/40">
                  {active.short}
                </span>
              </div>
            </div>

            {/* =================================================
                SYSTEM LABEL
            ================================================= */}

            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#0B2A52]/25">
                Built to
              </p>

              <p className="mt-1 text-[17px] font-medium tracking-[-0.02em]">
                compound.
              </p>

              <div className="mt-3 flex justify-end gap-1">
                {stages.map((stage, index) => (
                  <span
                    key={stage.number}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === activeStage
                        ? "w-7 bg-[#B79A72]"
                        : "w-1.5 bg-[#0B2A52]/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              MOBILE VERSION
          ===================================================== */}

          <div className="lg:hidden">
            {/* Central visual */}
            <div className="relative mx-auto h-[390px] w-[390px] max-w-full">
              {/* Rings */}
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0B2A52]/[0.06]" />

              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] max-w-[76vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#B79A72]/20 animate-spin"
                style={{ animationDuration: "35s" }}
              />

              {/* Image */}
              <div className="absolute left-1/2 top-1/2 h-[265px] w-[265px] max-w-[68vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] border-white shadow-[0_20px_60px_rgba(11,42,82,0.16)]">
                {stages.map((stage, index) => (
                  <img
                    key={stage.image}
                    src={stage.image}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                      index === activeStage
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-[#0B2A52]/40" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06182d] via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                  <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#E0CFB2]">
                    {active.eyebrow}
                  </span>

                  <h3 className="mt-2 text-[27px] font-medium tracking-[-0.04em] text-white">
                    {active.title}
                  </h3>
                </div>
              </div>

              {/* Floating number */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[155px]">
                <span className="text-[10px] font-semibold tracking-[0.25em] text-[#0B2A52]/30">
                  {active.number} / 05
                </span>
              </div>
            </div>

            {/* Stage selector */}
            <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-2">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = index === activeStage;

                return (
                  <button
                    key={stage.number}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 transition-all duration-300 ${
                      isActive
                        ? "border-[#B79A72] bg-[#B79A72] text-white"
                        : "border-[#0B2A52]/10 bg-white text-[#0B2A52]/40"
                    }`}
                  >
                    <Icon size={10} />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.16em]">
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Description */}
            <div className="mt-7 border-t border-[#0B2A52]/8 pt-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#B79A72]">
                  {active.eyebrow}
                </span>
              </div>

              <p className="mt-4 text-[14px] leading-6 text-[#0B2A52]/50">
                {active.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {active.items.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 rounded-full bg-[#F7F5F1] px-3 py-2 text-[8px] text-[#0B2A52]/45"
                  >
                    <Check size={9} className="text-[#B79A72]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <div
          className={`mx-auto mt-8 max-w-[1200px] border-t border-[#0B2A52]/8 pt-6 transition-all delay-300 duration-1000 sm:mt-10 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B79A72]">
                The idea
              </p>

              <p className="mt-2 max-w-[620px] text-[13px] leading-5 text-[#0B2A52]/40">
                Every part feeds the next. The result is a social
                presence that becomes stronger with every cycle.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {stages.map((stage, index) => (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === activeStage
                      ? "w-10 bg-[#B79A72]"
                      : "w-1.5 bg-[#0B2A52]/10"
                  }`}
                  aria-label={`Go to ${stage.title}`}
                />
              ))}

              <ArrowUpRight
                size={14}
                className="ml-2 text-[#B79A72]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   ENGINE NODE
=============================================================== */

function EngineNode({
  stage,
  active,
  position,
}: {
  stage: EngineStage;
  active: boolean;
  position: "top" | "right" | "bottom" | "left";
}) {
  const Icon = stage.icon;

  return (
    <div
      className={`relative flex items-center gap-3 transition-all duration-500 ${
        position === "right"
          ? "flex-row"
          : position === "left"
            ? "flex-row-reverse"
            : "flex-row"
      }`}
    >
      {/* Node */}
      <div
        className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
          active
            ? "border-[#B79A72] bg-[#B79A72] text-white shadow-[0_0_0_8px_rgba(183,154,114,0.10),0_12px_30px_rgba(183,154,114,0.18)]"
            : "border-[#0B2A52]/10 bg-white text-[#0B2A52]/35 shadow-[0_8px_30px_rgba(11,42,82,0.06)] hover:border-[#B79A72]/50 hover:text-[#B79A72]"
        }`}
      >
        <Icon size={17} strokeWidth={1.5} />

        {active && (
          <span className="absolute inset-[-6px] rounded-full border border-[#B79A72]/20 animate-pulse" />
        )}
      </div>

      {/* Label */}
      <div
        className={`text-left ${
          position === "left" ? "text-right" : ""
        }`}
      >
        <span
          className={`text-[8px] font-semibold tracking-[0.22em] ${
            active ? "text-[#B79A72]" : "text-[#0B2A52]/25"
          }`}
        >
          {stage.number}
        </span>

        <p
          className={`mt-1 whitespace-nowrap text-[13px] font-medium tracking-[-0.02em] ${
            active ? "text-[#0B2A52]" : "text-[#0B2A52]/45"
          }`}
        >
          {stage.title}
        </p>

        <p
          className={`mt-0.5 text-[7px] uppercase tracking-[0.2em] ${
            active ? "text-[#0B2A52]/45" : "text-[#0B2A52]/20"
          }`}
        >
          {stage.short}
        </p>
      </div>
    </div>
  );
}