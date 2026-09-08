"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  Compass,
  CalendarDays,
  PenTool,
  Send,
  MessageCircle,
  BarChart3,
  Plus,
} from "lucide-react";

const deliverables = [
  {
    number: "01",
    cardColor: "bg-[#EEF3FA]",
    borderColor: "border-[#88A7CA]",
    iconColor: "bg-[#E1EAF6] border-[#C6D6E9] text-[#55779D]",
    numberColor: "text-[#B9CCE2]",
    accentColor: "bg-[#88A7CA]",
    title: "Social media strategy",
    description:
      "Audience priorities, platform selection, brand voice and content pillars.",
    icon: Compass,

    // ROW 1 — LEFT CARD → FROM LEFT
    revealFrom: "-translate-x-20 translate-y-0",

    delay: "delay-0",
  },
  {
    number: "02",
    cardColor: "bg-[#F2EFF9]",
    borderColor: "border-[#AC94C5]",
    iconColor: "bg-[#E9E2F5] border-[#D9CCE9] text-[#87709F]",
    numberColor: "text-[#D1C3E4]",
    accentColor: "bg-[#AC94C5]",
    title: "Content calendar",
    description:
      "An agreed publishing plan covering themes, formats and approval dates.",
    icon: CalendarDays,

    // ROW 1 — MIDDLE CARD → FROM TOP
    revealFrom: "translate-x-0 -translate-y-20",

    delay: "delay-75",
  },
  {
    number: "03",
    cardColor: "bg-[#FBF0E9]",
    borderColor: "border-[#CDA382]",
    iconColor: "bg-[#F6E4D7] border-[#E9CFBB] text-[#A57A58]",
    numberColor: "text-[#E6CBB6]",
    accentColor: "bg-[#CDA382]",
    title: "Content creation",
    description:
      "Captions, graphics, carousels and agreed short-form video content.",
    icon: PenTool,

    // ROW 1 — RIGHT CARD → FROM RIGHT
    revealFrom: "translate-x-20 translate-y-0",

    delay: "delay-100",
  },
  {
    number: "04",
    cardColor: "bg-[#EDF5EF]",
    borderColor: "border-[#8CAF97]",
    iconColor: "bg-[#DFEDE2] border-[#C6DDCD] text-[#648970]",
    numberColor: "text-[#BED8C6]",
    accentColor: "bg-[#8CAF97]",
    title: "Publishing and management",
    description:
      "Scheduling and management of your selected social media channels.",
    icon: Send,

    // ROW 2 — LEFT CARD → FROM LEFT
    revealFrom: "-translate-x-20 translate-y-0",

    delay: "delay-150",
  },
  {
    number: "05",
    cardColor: "bg-[#FAEFF2]",
    borderColor: "border-[#C698AA]",
    iconColor: "bg-[#F3E0E7] border-[#E7C9D4] text-[#A57587]",
    numberColor: "text-[#E4C3CF]",
    accentColor: "bg-[#C698AA]",
    title: "Community engagement",
    description:
      "Comment and message handling within agreed responsibilities.",
    icon: MessageCircle,

    // ROW 2 — MIDDLE CARD → FROM BOTTOM
    revealFrom: "translate-x-0 translate-y-20",

    delay: "delay-200",
  },
  {
    number: "06",
    cardColor: "bg-[#FAF6E8]",
    borderColor: "border-[#C2AE6C]",
    iconColor: "bg-[#F2EBCF] border-[#E3D6A7] text-[#96844D]",
    numberColor: "text-[#E1D5A7]",
    accentColor: "bg-[#C2AE6C]",
    title: "Performance reporting",
    description:
      "Relevant metrics, content insights and recommended next steps.",
    icon: BarChart3,

    // ROW 2 — RIGHT CARD → FROM RIGHT
    revealFrom: "translate-x-20 translate-y-0",

    delay: "delay-300",
  },
];

export default function SocialMediaPlanIncludes() {
  const id = useId();

  const sectionRef = useRef<HTMLElement>(null);

  const [revealed, setRevealed] = useState<string[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = Array.from(
      section.querySelectorAll<HTMLElement>("[data-plan-reveal]")
    );

    const showAll = () => {
      setRevealed(
        elements.map((element) => element.dataset.planReveal!)
      );
    };

    const motion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      motion.matches ||
      !("IntersectionObserver" in window)
    ) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (!entering.length) return;

        setRevealed((current) =>
          Array.from(
            new Set([
              ...current,
              ...entering.map(
                (entry) =>
                  (entry.target as HTMLElement).dataset
                    .planReveal!
              ),
            ])
          )
        );

        entering.forEach((entry) => {
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -24px 0px",
      }
    );

    /*
     * Two frames ensure the hidden position
     * paints before the reveal animation starts.
     */
    let secondFrame = 0;

    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        elements.forEach((element) => {
          observer.observe(element);
        });
      });
    });

    const onMotionChange = () => {
      if (motion.matches) {
        showAll();
        observer.disconnect();
      }
    };

    motion.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);

      observer.disconnect();

      motion.removeEventListener(
        "change",
        onMotionChange
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={`${id}-heading`}
      className="
        overflow-hidden
        bg-white
        py-16
        text-[#102D4D]
        antialiased
        sm:py-20
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          max-w-[1320px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =========================
            HEADER
        ========================== */}

        <header
          data-plan-reveal="heading"
          className={`
            mx-auto
            max-w-[840px]
            text-center

            transition-all
            duration-1000
        

            motion-reduce:translate-y-0
            motion-reduce:opacity-100
            motion-reduce:transition-none

            ${
              revealed.includes("heading")
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-3
       
         
              px-4
              py-2
            "
          >
             <span aria-hidden="true" className="h-px w-8 bg-[#B79A72] " />

          

            <span
              className="
                text-[10px]
            font-semibold
                uppercase
                tracking-[0.2em]
                text-[#B79A72]
              "
            >
              Inside your social media plan
            </span>
              <span aria-hidden="true" className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id={`${id}-heading`}
            className="
              text-[39px]
              font-medium
              leading-[1.07]
              tracking-[-0.05em]

              sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]
            "
          >
            Social Media Management.

            <span
              className="
                mt-1
                block
              
         
                text-[#B79A72] 
              "
            >
              Clear Deliverables.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[520px]
              text-[14px]
              leading-7
              text-[#657382]

              sm:text-[15px]
            "
          >
            The thinking. The making. The everyday
            management.
            <br className="hidden sm:block" /> A clear
            plan for every part of your social presence.
          </p>
        </header>

       

        {/* =========================
            CARDS
        ========================== */}

        <ol
          className="
            mt-7
            grid
            list-none
            gap-6
            p-0

            sm:grid-cols-2

            lg:grid-cols-3
            lg:gap-7
          "
        >
          {deliverables.map((item) => {
            const Icon = item.icon;

            const isVisible = revealed.includes(
              item.number
            );

            return (
              <li
                key={item.number}
                data-plan-reveal={item.number}
                className={`
                  min-w-0

                  transform-gpu

                  transition-all
                  duration-[900ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${item.delay}

                  motion-reduce:translate-x-0
                  motion-reduce:translate-y-0
                  motion-reduce:opacity-100
                  motion-reduce:transition-none

                  ${
                    isVisible
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : `${item.revealFrom} opacity-0`
                  }
                `}
              >
                <article
                  className={`
                    group
                    h-full

                    rounded-[22px]

                    border-2
                    bg-white

                    p-2

                    text-[#102D4D]

                    transition-shadow
                    duration-500

                    hover:shadow-[0_12px_30px_-18px_rgba(16,45,77,0.2)]

                    motion-reduce:transition-none

                    ${item.borderColor}
                  `}
                >
                  <div
                    className={`
                      relative

                      flex
                      h-full
                      min-h-[285px]
                      flex-col

                      overflow-hidden

                      rounded-[12px]

                      p-6

                      sm:min-h-[310px]
                      sm:p-7

                      lg:p-8

                      ${item.cardColor}
                    `}
                  >
                    {/* TOP */}

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-5
                      "
                    >
                      <span
                        className={`
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center

                          rounded-xl
                          border

                          transition-colors
                          duration-500

                          motion-reduce:transition-none

                          ${item.iconColor}
                        `}
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.35}
                          aria-hidden="true"
                        />
                      </span>

                      <span
                        aria-hidden="true"
                        className={`
                          -mt-3

                          select-none

                          font-serif
                          text-[72px]
                          font-normal
                          leading-none
                          tracking-[-0.07em]

                          transition-colors
                          duration-500

                          motion-reduce:transition-none

                          ${item.numberColor}
                        `}
                      >
                    
                      </span>
                    </div>

                    {/* CONTENT */}

                    <div
                      className="
                        mt-8
                        flex
                        flex-1
                        flex-col

                        sm:mt-9
                      "
                    >
                      <h3
                        className="
                          max-w-[245px]

                          text-[23px]
                          font-medium
                          leading-[1.22]
                          tracking-[-0.035em]

                          sm:text-[25px]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3

                          text-[13px]
                          leading-6
                          text-[#526477]

                          transition-colors
                          duration-500

                          motion-reduce:transition-none
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* ACCENT LINE */}

                    <span
                      aria-hidden="true"
                      className={`
                        mt-6

                        h-px
                        w-8

                        opacity-100

                        transition-[width]
                        duration-500

                        group-hover:w-16

                        motion-reduce:transition-none

                        ${item.accentColor}
                      `}
                    />
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        {/* =========================
            OPTIONAL PAID ADS
        ========================== */}

        <aside
          data-plan-reveal="optional"
          aria-label="Optional paid advertising"
          className={`
            mt-5

            overflow-hidden

            rounded-[18px]

            border
            border-[#E4DFD5]

            bg-[#F2EFE8]

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            motion-reduce:translate-y-0
            motion-reduce:opacity-100
            motion-reduce:transition-none

            ${
              revealed.includes("optional")
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }
          `}
        >
          <div
            className="
              grid
              gap-5
              p-6

              sm:p-7

              lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]
              lg:items-center
              lg:gap-10
              lg:px-8
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#CBB99D]

                  text-[#947448]
                "
              >
                <Plus
                  size={20}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              </span>

              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8B6E47]
                  "
                >
                  Optional addition
                </p>

                <h3
                  className="
                    mt-1
                    text-[22px]
                    font-medium
                    tracking-[-0.035em]
                  "
                >
                  Take your reach further.
                </h3>
              </div>
            </div>

            <p
              className="
                text-[13px]
                leading-6
                text-[#617080]

                lg:border-l
                lg:border-[#D7CDBE]
                lg:pl-10
              "
            >
              <span
                className="
                  font-medium
                  text-[#102D4D]
                "
              >
                Paid advertising
              </span>{" "}
              can be added to your plan. Campaign
              management, creative production scope and
              advertising spend are clarified in your
              proposal.
            </p>
          </div>
        </aside>

        {/* =========================
            BOTTOM NOTE
        ========================== */}

        <p
          className="
            mx-auto
            mt-6
            max-w-[720px]
            text-center

            text-[11px]
            leading-6
            text-[#6D7883]
          "
        >
          Your proposal defines the selected channels,
          content volumes, production scope and
          responsibilities.
        </p>
      </div>
    </section>
  );
}