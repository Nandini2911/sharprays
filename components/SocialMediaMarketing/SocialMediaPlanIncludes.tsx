"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  Check,
  Compass,
  MessageCircle,
  PenTool,
  Send,
} from "lucide-react";

const deliverables = [
  {
    number: "01",
    title: "Social Media Strategy",
    description:
      "Audience priorities, platform recommendations, brand voice, positioning and content pillars.",
    icon: Compass,

    cardColor: "bg-[#EEF4FC]",
    borderColor: "border-[#6D8FB9]",
    iconBg: "bg-[#DDE9F7]",
    iconBorder: "border-[#BCD0E8]",
    iconColor: "text-[#52759F]",
    numberColor: "text-[#C7D7E9]",
    accentColor: "bg-[#6D8FB9]",
    glowColor: "bg-[#8DB1DD]/20",
  },

  {
    number: "02",
    title: "Content Calendar",
    description:
      "A structured publishing plan covering themes, formats, priorities and approval dates.",
    icon: CalendarDays,

    cardColor: "bg-[#F3EFFB]",
    borderColor: "border-[#8B70AA]",
    iconBg: "bg-[#E9E1F5]",
    iconBorder: "border-[#D5C6E7]",
    iconColor: "text-[#7D639A]",
    numberColor: "text-[#D8CBE8]",
    accentColor: "bg-[#8B70AA]",
    glowColor: "bg-[#A68BC5]/20",
  },

  {
    number: "03",
    title: "Content Creation",
    description:
      "Agreed social media graphics, captions, carousels, stories and short-form video content.",
    icon: PenTool,

    cardColor: "bg-[#FCF1EA]",
    borderColor: "border-[#B77B55]",
    iconBg: "bg-[#F6E3D7]",
    iconBorder: "border-[#EACBB7]",
    iconColor: "text-[#A46D4B]",
    numberColor: "text-[#E9CEBC]",
    accentColor: "bg-[#B77B55]",
    glowColor: "bg-[#D69B77]/20",
  },

  {
    number: "04",
    title: "Publishing & Management",
    description:
      "Scheduling and management of your selected social media platforms.",
    icon: Send,

    cardColor: "bg-[#EDF7F1]",
    borderColor: "border-[#649070]",
    iconBg: "bg-[#DCEDE2]",
    iconBorder: "border-[#BDD9C5]",
    iconColor: "text-[#557D61]",
    numberColor: "text-[#C5DDCB]",
    accentColor: "bg-[#649070]",
    glowColor: "bg-[#7DA989]/20",
  },

  {
    number: "05",
    title: "Community Engagement",
    description:
      "Comment and message management according to the responsibilities agreed for your account.",
    icon: MessageCircle,

    cardColor: "bg-[#FCF0F4]",
    borderColor: "border-[#B46883]",
    iconBg: "bg-[#F3DFE7]",
    iconBorder: "border-[#E5C4D0]",
    iconColor: "text-[#A15C76]",
    numberColor: "text-[#E7C7D3]",
    accentColor: "bg-[#B46883]",
    glowColor: "bg-[#CE88A0]/20",
  },

  {
    number: "06",
    title: "Performance Reporting",
    description:
      "Relevant metrics, content insights, performance observations and recommended next steps.",
    icon: BarChart3,

    cardColor: "bg-[#FBF7E9]",
    borderColor: "border-[#A18A45]",
    iconBg: "bg-[#F1E9CC]",
    iconBorder: "border-[#DED09F]",
    iconColor: "text-[#8E783A]",
    numberColor: "text-[#E2D6AA]",
    accentColor: "bg-[#A18A45]",
    glowColor: "bg-[#C3AC66]/20",
  },
];

export default function SocialMediaPlanIncludes() {
  const id = useId();
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reduceMotion.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="social-media-management-services"
      aria-labelledby={`${id}-heading`}
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#102D4D]
        antialiased
        sm:py-24
        lg:py-32
      "
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-[240px]
            top-[140px]
            h-[520px]
            w-[520px]
            rounded-full
            border
            border-[#102D4D]/[0.035]
          "
        />

        <div
          className="
            absolute
            -left-[150px]
            top-[230px]
            h-[340px]
            w-[340px]
            rounded-full
            border
            border-[#B79A72]/10
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            bottom-[-150px]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#DCE8F6]/30
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[500px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#F4F6FA]
            blur-[140px]
          "
        />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1320px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <header
          className={`
            mx-auto
            max-w-[900px]
            text-center
            transition-all
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            motion-reduce:transform-none
            motion-reduce:opacity-100
            motion-reduce:transition-none
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* EYEBROW */}

          <div className="flex items-center justify-center gap-3">
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
                text-[9px]
              
                uppercase
                tracking-[0.26em]
                text-[#B79A72]
                sm:text-[10px]
              "
            >
              Social Media Management Services
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

          {/* HEADING */}

          <h2
            id={`${id}-heading`}
            className="
              mt-6
              text-[2.35rem]
              font-medium
              leading-[1.07]
              tracking-[-0.05em]
              text-[#102D4D]
              sm:text-[2.7rem]
              md:text-[3rem]
              lg:text-[3.25rem]
              xl:text-[3.45rem]
            "
          >
            Clear Deliverables.{" "}
            <span className="font-normal text-[#B79A72]">
              Clear Responsibilities.
            </span>
          </h2>

          {/* INTRO */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[670px]
              text-[14px]
              leading-7
              text-[#657382]
              sm:text-[15px]
            "
          >
            Your proposal defines exactly what is included in your social media
            marketing plan.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[620px]
              text-[12px]
              leading-6
              text-[#657382]/75
              sm:text-[13px]
            "
          >
            Depending on the selected scope, your service may include:
          </p>
        </header>

        {/* =======================================================
            SMALL TOP DETAIL
        ======================================================== */}

        <div
          className={`
            mx-auto
            mt-10
            flex
            max-w-[900px]
            items-center
            justify-center
            gap-4
            transition-all
            delay-150
            duration-[900ms]
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
        >
          <span className="h-px flex-1 bg-[#102D4D]/[0.07]" />

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#102D4D]/30
            "
          >
            Six Core Deliverables
          </span>

          <span className="h-px flex-1 bg-[#102D4D]/[0.07]" />
        </div>

        {/* =======================================================
            DELIVERABLE CARDS
        ======================================================== */}

        <ol
          className="
            mt-8
            grid
            list-none
            gap-5
            p-0
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {deliverables.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={item.number}
                className={`
                  min-w-0
                  transform-gpu
                  transition-all
                  duration-[950ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transform-none
                  motion-reduce:opacity-100
                  motion-reduce:transition-none
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-14 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${180 + index * 90}ms`,
                }}
              >
                <article
                  className={`
                    group
                    relative
                    h-full
                    rounded-[27px]
                    border
                    bg-white
                    p-[7px]
                    shadow-[0_15px_45px_rgba(16,45,77,0.035)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_25px_65px_rgba(16,45,77,0.10)]
                    ${item.borderColor}
                  `}
                >
                  {/* =================================================
                      INNER COLOR CARD
                  ================================================== */}

                  <div
                    className={`
                      relative
                      flex
                      h-full
                      min-h-[315px]
                      flex-col
                      overflow-hidden
                      rounded-[20px]
                      p-6
                      sm:p-7
                      lg:min-h-[330px]
                      lg:p-8
                      ${item.cardColor}
                    `}
                  >
                    {/* HOVER GLOW */}

                    <div
                      className={`
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-[180px]
                        w-[180px]
                        rounded-full
                        opacity-0
                        blur-[45px]
                        transition-all
                        duration-700
                        group-hover:scale-125
                        group-hover:opacity-100
                        ${item.glowColor}
                      `}
                    />

                    {/* DECORATIVE CIRCLE */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-[70px]
                        -top-[70px]
                        h-[180px]
                        w-[180px]
                        rounded-full
                        border
                        border-white/50
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* TOP */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      {/* ICON */}

                      <span
                        className={`
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-[15px]
                          border
                          shadow-[0_8px_20px_rgba(16,45,77,0.04)]
                          transition-all
                          duration-500
                          group-hover:-rotate-3
                          group-hover:scale-105
                          ${item.iconBg}
                          ${item.iconBorder}
                          ${item.iconColor}
                        `}
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                      </span>

                      {/* BIG NUMBER */}

                     
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10
                        mt-10
                        flex
                        flex-1
                        flex-col
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`
                            h-[2px]
                            w-6
                            rounded-full
                            transition-all
                            duration-500
                            group-hover:w-10
                            ${item.accentColor}
                          `}
                        />

                       
                      </div>

                      <h3
                        className="
                          mt-4
                          max-w-[270px]
                          text-[22px]
                          font-medium
                          leading-[1.2]
                          tracking-[-0.035em]
                          text-[#102D4D]
                          sm:text-[24px]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          text-[13px]
                          leading-6
                          text-[#526477]
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* BOTTOM */}

                    <div
                      className="
                        relative
                        z-10
                        mt-7
                        flex
                        items-center
                        justify-between
                       
                        pt-4
                      "
                    >
                     

                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-white/60
                          transition-transform
                          duration-500
                          group-hover:rotate-[-8deg]
                          ${item.iconBorder}
                          ${item.iconColor}
                        `}
                      >
                        <Check
                          size={11}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        {/* =======================================================
            FINAL PROPOSAL STATEMENT
        ======================================================== */}

        <div
          className={`
            relative
            mx-auto
            mt-10
            max-w-[1100px]
            transition-all
            delay-700
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-6
              rounded-[40px]
              bg-[#102D4D]/[0.04]
              blur-[50px]
            "
          />

          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              bg-[#102D4D]
              px-6
              py-7
              shadow-[0_25px_70px_rgba(16,45,77,0.14)]
              sm:px-8
              sm:py-8
              lg:px-10
            "
          >
            {/* INNER DETAIL */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-r
                from-white/[0.04]
                via-transparent
                to-[#B79A72]/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-[220px]
                w-[220px]
                rounded-full
                border
                border-white/[0.05]
              "
            />

            <div
              className="
                relative
                z-10
                grid
                items-center
                gap-5
                lg:grid-cols-[auto_1fr]
                lg:gap-7
              "
            >
              {/* ICON */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B79A72]/25
                  bg-[#B79A72]/10
                  text-[#D4B98D]
                "
              >
                <Check
                  size={17}
                  strokeWidth={1.6}
                />
              </div>

              {/* CONTENT */}

              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.21em]
                    text-[#D4B98D]
                  "
                >
                  Your Final Proposal
                </p>

                <p
                  className="
                    mt-2
                    max-w-[930px]
                    text-[13px]
                    leading-7
                    text-white/68
                    sm:text-[14px]
                  "
                >
                  Your final proposal confirms selected platforms, monthly
                  content volume, production requirements, responsibilities,
                  timelines and commercial scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}