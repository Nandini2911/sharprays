"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Play,
  Plus,
  Send,
  Sparkles,
  Users,
} from "lucide-react";

const problems = [
  {
    id: "01",
    title: "You’re Posting",
    description:
      "But there is no clear social media strategy connecting one post to the next.",
    metric: "No Clear",
    label: "SOCIAL MEDIA STRATEGY",
    progress: "22%",
  },
  {
    id: "02",
    title: "You’re Getting Views",
    description:
      "But that attention disappears without creating stronger brand recognition.",
    metric: "Views",
    label: "BRAND RECOGNITION",
    progress: "42%",
  },
  {
    id: "03",
    title: "You’re Gaining Followers",
    description:
      "But audience growth is not turning into meaningful engagement or business conversations.",
    metric: "Followers",
    label: "MEANINGFUL ENGAGEMENT",
    progress: "34%",
  },
  {
    id: "04",
    title: "You’re Creating Content",
    description:
      "But your feed feels busy rather than intentional.",
    metric: "Busy",
    label: "CONTENT DIRECTION",
    progress: "28%",
  },
];

const highlights = [
  {
    label: "Strategy",
    icon: <Sparkles size={15} strokeWidth={1.5} />,
  },
  {
    label: "Content",
    icon: <Play size={14} strokeWidth={1.5} />,
  },
  {
    label: "Clients",
    icon: <Users size={15} strokeWidth={1.5} />,
  },
  {
    label: "Growth",
    icon: <ArrowRight size={15} strokeWidth={1.5} />,
  },
  {
    label: "Behind",
    icon: <Heart size={15} strokeWidth={1.5} />,
  },
];

const posts = [
  "/services/insta/insta1.png",
  "/services/insta/insta2.png",
  "/services/insta/insta3.png",
  "/services/insta/insta4.png",
  "/services/insta/insta5.png",
  "/services/insta/insta6.png",
];

export default function SocialMediaMarketingProblem() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeProblem, setActiveProblem] = useState(0);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"grid" | "reels">("grid");

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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const currentProblem = problems[activeProblem];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* =========================================================
          VERY SUBTLE BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#B79A72]/[0.035] blur-[100px]" />

        <div className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#0B2A52]/[0.025] blur-[120px]" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* =======================================================
            TOP INTRO
        ======================================================== */}

        <div className="mx-auto max-w-[720px] text-center">
          <div
            className={`flex items-center justify-center gap-3 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
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

            <span className="text-[9px]  tracking-[0.28em] text-[#B79A72] sm:text-[10px]">
              THE PROBLEM
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
          </div>

          <h2
            className={`mt-5 text-[2rem] font-medium leading-[1.18] tracking-[-0.035em] transition-all duration-[1100ms] sm:text-[2.35rem] md:text-[2.65rem] lg:text-[2.85rem] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }`}
          >
            Posting Regularly Is Not the Same as{" "}
            <span className="text-[#B79A72]">
              Growing Strategically.
            </span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-[580px] text-[13px] leading-6 text-[#0B2A52]/50 transition-all delay-150 duration-[1100ms] sm:text-[14px] sm:leading-7 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Your business can publish content every week and still struggle to
            build a social media presence that people recognize, trust or act
            on.
          </p>
        </div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:mt-16 xl:grid-cols-[0.88fr_1.12fr]">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div
            className={`relative z-20 max-w-[580px] transition-all duration-[1300ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            {/* CHALLENGE COPY */}

            <div className="mb-6">
              <p className="text-[11px] leading-5 text-[#0B2A52]/50">
                The challenge is rarely just producing more content.
              </p>

              <div className="mt-3 flex items-start gap-2">
                <span className="mt-2 h-px w-7 shrink-0 bg-[#B79A72]" />

                <p className="text-[12px] leading-6 text-[#0B2A52]/55">
                  The challenge is creating the{" "}
                  <strong className="font-medium text-[#0B2A52]">
                    right content, for the right audience, with a clear reason
                    behind it.
                  </strong>
                </p>
              </div>
            </div>

            {/* =================================================
                PROBLEM LIST
            ================================================== */}

            <div className="overflow-hidden rounded-[22px] border border-[#0B2A52]/[0.07] bg-white shadow-[0_20px_60px_rgba(11,42,82,0.045)]">
              {problems.map((problem, index) => {
                const isActive = activeProblem === index;

                return (
                  <button
                    key={problem.id}
                    type="button"
                    onMouseEnter={() => setActiveProblem(index)}
                    onFocus={() => setActiveProblem(index)}
                    onClick={() => setActiveProblem(index)}
                    className={`group relative flex w-full items-center gap-4 border-b border-[#0B2A52]/[0.055] px-5 py-5 text-left transition-all duration-500 last:border-b-0 sm:px-6 ${
                      isActive
                        ? "bg-[#FBFAF7]"
                        : "bg-white hover:bg-[#FCFBF9]"
                    }`}
                  >
                    {/* ACTIVE LINE */}

                    <span
                      className={`absolute bottom-0 left-0 top-0 w-[3px] origin-center bg-[#B79A72] transition-transform duration-500 ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    {/* NUMBER */}

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold transition-all duration-500 ${
                        isActive
                          ? "bg-[#0B2A52] text-white"
                          : "bg-[#0B2A52]/[0.045] text-[#0B2A52]/30"
                      }`}
                    >
                      {problem.id}
                    </span>

                    {/* CONTENT */}

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[14px] font-medium transition-colors duration-300 sm:text-[15px] ${
                          isActive
                            ? "text-[#0B2A52]"
                            : "text-[#0B2A52]/55"
                        }`}
                      >
                        {problem.title}
                      </span>

                      <span
                        className={`block overflow-hidden text-[11px] leading-5 text-[#0B2A52]/45 transition-all duration-500 sm:text-[12px] ${
                          isActive
                            ? "mt-1 max-h-16 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {problem.description}
                      </span>
                    </span>

                    {/* ARROW */}

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                        isActive
                          ? "translate-x-0 bg-[#0B2A52] text-white"
                          : "translate-x-1 bg-[#0B2A52]/[0.035] text-[#0B2A52]/25"
                      }`}
                    >
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* =================================================
                ACTIVE INSIGHT
            ================================================== */}

            <div
              className={`mt-5 rounded-2xl border border-[#B79A72]/15 bg-[#FBFAF7] px-5 py-4 transition-all duration-700 sm:px-6 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-[8px] font-semibold tracking-[0.2em] text-[#B79A72]">
                    {currentProblem.label}
                  </p>

                  <p className="mt-1 text-[18px] font-medium text-[#0B2A52]">
                    {currentProblem.metric}
                  </p>
                </div>

                <div className="w-[150px]">
                  <div className="mb-2 flex justify-between">
                    <span className="text-[8px] text-[#0B2A52]/30">
                      ACTIVITY
                    </span>

                    <span className="text-[8px] text-[#0B2A52]/30">
                      STRATEGY
                    </span>
                  </div>

                  <div className="h-[3px] overflow-hidden rounded-full bg-[#0B2A52]/[0.07]">
                    <div
                      className="h-full rounded-full bg-[#B79A72] transition-all duration-700"
                      style={{
                        width: currentProblem.progress,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                LEFT BOTTOM STATEMENT
            ================================================== */}

            <div className="mt-7 flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B79A72]" />

              <p className="max-w-[470px] text-[13px] font-medium leading-6 text-[#0B2A52]/60">
                The challenge is creating the right content, for the right
                audience, with a clear reason behind it.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE — INSTAGRAM VISUAL
          ====================================================== */}

          <div
            className={`relative flex min-h-[650px] items-center justify-center transition-all duration-[1500ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* SOFT BACKGROUND LIGHT */}

            <div className="pointer-events-none absolute h-[470px] w-[470px] rounded-full bg-[#F7F3EB] blur-[70px] sm:h-[540px] sm:w-[540px]" />

            {/* SUBTLE ORBITS */}

            <div className="pointer-events-none absolute h-[430px] w-[430px] rounded-full border border-[#B79A72]/10 sm:h-[570px] sm:w-[570px]" />

            <div className="pointer-events-none absolute h-[350px] w-[350px] rounded-full border border-[#0B2A52]/[0.035] sm:h-[460px] sm:w-[460px]" />

            {/* TOP STATUS CARD */}

            <div className="absolute left-1/2 top-2 z-40 -translate-x-1/2 rounded-full border border-white bg-white/95 px-5 py-2.5 shadow-[0_15px_35px_rgba(11,42,82,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#B79A72]/50" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#B79A72]" />
                </span>

                <span className="text-[8px] font-semibold tracking-[0.16em] text-[#0B2A52]/45">
                  SOCIAL PRESENCE IN MOTION
                </span>
              </div>
            </div>

            {/* =================================================
                PHONE
            ================================================== */}

            <div className="relative z-30 w-[280px] sm:w-[330px]">
              <div className="relative rounded-[42px] border-[7px] border-[#0B2A52] bg-[#0B2A52] p-1 shadow-[0_45px_100px_rgba(11,42,82,0.18)]">
                <div className="absolute -right-[11px] top-[145px] h-16 w-[5px] rounded-r-full bg-[#0B2A52]" />

                <div className="overflow-hidden rounded-[32px] bg-white">
                  {/* STATUS */}

                  <div className="relative h-8 bg-white">
                    <div className="absolute left-1/2 top-1.5 h-5 w-[86px] -translate-x-1/2 rounded-full bg-[#0B2A52]" />

                    <span className="absolute left-4 top-2 text-[7px] font-semibold text-[#0B2A52]">
                      9:41
                    </span>

                    <div className="absolute right-4 top-2 flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-[#0B2A52]" />
                      <span className="h-2 w-3 rounded-full bg-[#0B2A52]/60" />
                    </div>
                  </div>

                  {/* INSTAGRAM HEADER */}

                  <div className="flex items-center justify-between px-4 pb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-[12px] font-semibold text-[#0B2A52]">
                        yourbrand
                      </span>

                      <span className="text-[8px] text-[#B79A72]">✓</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Plus
                        size={17}
                        strokeWidth={1.7}
                        className="text-[#0B2A52]"
                      />

                      <MoreHorizontal
                        size={17}
                        className="text-[#0B2A52]"
                      />
                    </div>
                  </div>

                  {/* PROFILE */}

                  <div className="px-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-[63px] w-[63px] shrink-0 rounded-full bg-gradient-to-tr from-[#B79A72] via-[#E7D4B4] to-[#0B2A52] p-[2px]">
                        <div className="h-full w-full rounded-full bg-white p-[2px]">
                          <img
                            src="/services/insta/instadp.png"
                            alt="Brand profile"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>

                        <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#0B2A52] text-white">
                          <Plus size={9} />
                        </div>
                      </div>

                      <div className="grid flex-1 grid-cols-3 text-center">
                        <div>
                          <p className="text-[13px] font-semibold text-[#0B2A52]">
                            48
                          </p>
                          <p className="text-[7px] text-[#0B2A52]/40">
                            posts
                          </p>
                        </div>

                        <div>
                          <p className="text-[13px] font-semibold text-[#0B2A52]">
                            12.8K
                          </p>
                          <p className="text-[7px] text-[#0B2A52]/40">
                            followers
                          </p>
                        </div>

                        <div>
                          <p className="text-[13px] font-semibold text-[#0B2A52]">
                            184
                          </p>
                          <p className="text-[7px] text-[#0B2A52]/40">
                            following
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* BIO */}

                    <div className="mt-3">
                      <p className="text-[10px] font-semibold text-[#0B2A52]">
                        Your Brand
                      </p>

                      <p className="mt-1 text-[8px] leading-4 text-[#0B2A52]/50">
                        Social Media Marketing
                        <br />
                        Strategy · Content · Community · Growth
                        <br />
                        Building a clearer, more intentional social presence.
                      </p>
                    </div>

                    {/* BUTTONS */}

                    <div className="mt-3 flex gap-2">
                      <button className="flex-1 rounded-lg bg-[#0B2A52] py-2 text-[8px] font-semibold text-white">
                        Follow
                      </button>

                      <button className="flex-1 rounded-lg bg-[#0B2A52]/[0.05] py-2 text-[8px] font-semibold text-[#0B2A52]">
                        Message
                      </button>

                      <button className="flex-1 rounded-lg bg-[#0B2A52]/[0.05] py-2 text-[8px] font-semibold text-[#0B2A52]">
                        Email
                      </button>
                    </div>

                    {/* HIGHLIGHTS */}

                    <div className="mt-4 flex gap-4 overflow-hidden">
                      {highlights.map((highlight) => (
                        <button
                          key={highlight.label}
                          type="button"
                          className="group shrink-0 text-center"
                        >
                          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#B79A72]/25 bg-[#F8F5EF] transition-all duration-300 group-hover:scale-105 group-hover:border-[#B79A72]/60 group-hover:bg-white">
                            <span className="text-[#B79A72] transition-transform duration-300 group-hover:scale-110">
                              {highlight.icon}
                            </span>
                          </div>

                          <p className="mt-1.5 text-[7px] text-[#0B2A52]/50">
                            {highlight.label}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* TABS */}

                  <div className="mt-4 flex border-b border-[#0B2A52]/8">
                    <button
                      type="button"
                      onClick={() => setActiveTab("grid")}
                      className="relative flex flex-1 items-center justify-center py-3"
                    >
                      {activeTab === "grid" && (
                        <span className="absolute bottom-0 h-[1.5px] w-12 bg-[#0B2A52]" />
                      )}

                      <div className="grid grid-cols-3 gap-1">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <span
                            key={item}
                            className="h-1.5 w-1.5 rounded-[1px] bg-[#0B2A52]"
                          />
                        ))}
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("reels")}
                      className="relative flex flex-1 items-center justify-center py-3"
                    >
                      {activeTab === "reels" && (
                        <span className="absolute bottom-0 h-[1.5px] w-12 bg-[#0B2A52]" />
                      )}

                      <Play
                        size={12}
                        strokeWidth={1.5}
                        className="text-[#0B2A52]/40"
                      />
                    </button>

                    <button className="flex flex-1 items-center justify-center py-3">
                      <Sparkles
                        size={12}
                        strokeWidth={1.5}
                        className="text-[#0B2A52]/40"
                      />
                    </button>
                  </div>

                  {/* IMAGE GRID */}

                  {activeTab === "grid" ? (
                    <div className="grid grid-cols-3 gap-[2px] bg-white">
                      {posts.map((post, index) => (
                        <button
                          key={post}
                          type="button"
                          className="group relative aspect-square overflow-hidden bg-[#ECE8E0]"
                        >
                          <img
                            src={post}
                            alt={`Instagram post ${index + 1}`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#0B2A52]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0B2A52]/45 group-hover:opacity-100">
                            <span className="flex items-center gap-1 text-[7px] font-semibold text-white">
                              <Heart size={10} fill="currentColor" />
                              1.2K
                            </span>

                            <span className="flex items-center gap-1 text-[7px] font-semibold text-white">
                              <MessageCircle size={10} />
                              48
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-[2px]">
                      {posts.map((post, index) => (
                        <div
                          key={`reel-${index}`}
                          className="relative aspect-square overflow-hidden"
                        >
                          <img
                            src={post}
                            alt={`Instagram reel ${index + 1}`}
                            className="h-full w-full object-cover"
                          />

                          <div className="absolute right-2 top-2 rounded-full bg-black/40 p-1">
                            <Play
                              size={8}
                              fill="white"
                              className="text-white"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* BOTTOM NAV */}

                  <div className="flex items-center justify-between px-5 py-3">
                    <div className="h-3 w-3 rounded-[3px] bg-[#0B2A52]" />

                    <Heart
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#0B2A52]/50"
                    />

                    <Plus
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#0B2A52]/50"
                    />

                    <Send
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#0B2A52]/50"
                    />

                    <div className="h-4 w-4 overflow-hidden rounded-full border border-[#0B2A52]/20">
                      <img
                        src="/services/insta/instadp.png"
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* LEFT FLOATING CARD */}

              <div
                className={`absolute -left-20 top-[39%] z-40 hidden w-[155px] rounded-2xl border border-[#0B2A52]/[0.06] bg-white p-4 shadow-[0_25px_60px_rgba(11,42,82,0.09)] transition-all duration-700 sm:block ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[7px] font-semibold tracking-[0.15em] text-[#0B2A52]/35">
                    {currentProblem.label}
                  </p>

                  <Sparkles size={11} className="text-[#B79A72]" />
                </div>

                <p className="mt-2 text-[19px] font-medium text-[#0B2A52]">
                  {currentProblem.metric}
                </p>

                <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-[#0B2A52]/[0.07]">
                  <div
                    className="h-full rounded-full bg-[#B79A72] transition-all duration-700"
                    style={{
                      width: currentProblem.progress,
                    }}
                  />
                </div>
              </div>

              {/* RIGHT FLOATING CARD */}

              <button
                type="button"
                onClick={() => setLiked(!liked)}
                className="absolute -right-16 bottom-[22%] z-40 hidden w-[158px] rounded-2xl bg-[#0B2A52] p-4 text-left shadow-[0_25px_60px_rgba(11,42,82,0.17)] transition-all duration-500 hover:-translate-y-2 sm:block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-semibold tracking-[0.15em] text-white/40">
                    ENGAGEMENT
                  </span>

                  <Heart
                    size={12}
                    fill={liked ? "currentColor" : "none"}
                    className={`transition-all duration-300 ${
                      liked
                        ? "scale-125 text-[#B79A72]"
                        : "text-white/40"
                    }`}
                  />
                </div>

                <p className="mt-2 text-[20px] font-medium text-white">
                  48.7K
                </p>

                <p className="mt-1 text-[8px] text-white/40">
                  audience interactions
                </p>

                <div className="mt-4 flex items-end gap-1">
                  {[20, 28, 24, 38, 33, 49, 43, 66].map(
                    (height, index) => (
                      <span
                        key={index}
                        className={`flex-1 rounded-sm ${
                          index === 7
                            ? "bg-[#B79A72]"
                            : "bg-white/15"
                        }`}
                        style={{
                          height: `${height * 0.45}px`,
                        }}
                      />
                    )
                  )}
                </div>
              </button>
            </div>

            {/* DECORATIVE DOTS */}

            <span className="absolute right-[9%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-[#B79A72]" />

            <span className="absolute bottom-[12%] left-[10%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#B79A72]/70" />
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

       {/* =========================================================
    BOTTOM STATEMENT + CTA
========================================================== */}

<div
  className={`
    mx-auto
    mt-14
    max-w-[820px]
    text-center

    transition-all
    delay-300
    duration-[1200ms]

    sm:mt-16

    ${
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-6 opacity-0"
    }
  `}
>
  {/* LABEL */}

  <div
    className="
      mx-auto
      mb-5

      flex
      items-center
      justify-center
      gap-3
    "
  >
    <span
      className="
        h-px
        w-8

        bg-gradient-to-r
        from-transparent
        to-[#B79A72]
      "
    />

    <span
      className="
        text-[8px]
        font-semibold
        uppercase
        tracking-[0.22em]
        text-[#0B2A52]/30
      "
    >
      THE REAL ISSUE?
    </span>

    <span
      className="
        h-px
        w-8

        bg-gradient-to-l
        from-transparent
        to-[#B79A72]
      "
    />
  </div>

  {/* STATEMENT */}

  <p
    className="
      text-[1.2rem]
      font-medium
      leading-[1.5]
      tracking-[-0.02em]
      text-[#0B2A52]

      sm:text-[1.45rem]

      md:text-[1.55rem]
    "
  >
    Without strategy, social media becomes an activity.

    <br className="hidden sm:block" />

    <span className="text-[#B79A72]">
      With strategy, it becomes a brand-building system.
    </span>
  </p>

  {/* CTA DIVIDER */}

  <div
    className="
      mx-auto
      mt-7
      h-px
      w-14
      bg-[#0B2A52]/10

      sm:mt-8
    "
  />

  {/* CTA COPY */}

  <div
    className="
      mx-auto
      mt-6
      max-w-[600px]

      sm:mt-7
    "
  >
    <p
      className="
        font-[var(--font-new-york)]

        text-[1.55rem]
        font-normal
        leading-[1.15]
        tracking-[-0.035em]
        text-[#0B2A52]

        sm:text-[1.8rem]

        md:text-[2rem]
      "
    >
      Ready to Make Social Media{" "}
      <span className="text-[#B79A72]">
        Work for Your Brand?
      </span>
    </p>

   
  </div>

  {/* CTA BUTTON */}

  <div
    className="
      mt-6
      flex
      justify-center

      sm:mt-7
    "
  >
    <Link
      href="/contact"
      className="
        group
        relative

        inline-flex

        min-h-[46px]

        items-center
        justify-center

        overflow-hidden

        rounded-[16px]

        border
        border-[#6285AD]/30

        bg-white/80

        px-5
        py-[11px]

        text-[13px]
        font-medium
        tracking-[-0.01em]

        text-[#0B2A52]

        shadow-[0_8px_30px_rgba(11,42,82,0.08)]

        backdrop-blur-[8px]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-[2px]
        hover:border-[#6285AD]/40
        hover:bg-white
        hover:shadow-[0_12px_38px_rgba(98,133,173,0.16)]

        active:translate-y-0
        active:scale-[0.98]

        sm:min-h-[48px]
        sm:px-6
        sm:py-3
        sm:text-[14px]

        md:px-7
        md:text-[15px]
      "
    >
      {/* SOFT INNER BORDER */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[2px]

          rounded-[13px]

          border
          border-white/60
        "
      />

      {/* TOP LIGHT */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-4
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      {/* TEXT */}

      <span
        className="
          relative
          z-10
          whitespace-nowrap
          text-[#0B2A52]
        "
      >
        Build My Social Presence
      </span>
    </Link>
  </div>

  {/* SMALL SUPPORTING TEXT */}

  
</div>
      </div>
    </section>
  );
}