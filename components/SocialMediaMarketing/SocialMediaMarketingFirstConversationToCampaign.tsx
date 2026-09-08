"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import {
  MessageSquareText,
  ClipboardCheck,
  ScanSearch,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Discover",
    title: "Tell us about your business",
    description:
      "Share your goals, audience and current challenges so we can understand where you are and what you want to achieve.",
    icon: MessageSquareText,
    reveal: "-translate-x-8 translate-y-6",
  },
  {
    number: "02",
    label: "Plan",
    title: "Agree on the plan",
    description:
      "Confirm platforms, deliverables, responsibilities and scope so everything is clear before work begins.",
    icon: ClipboardCheck,
    reveal: "translate-y-8",
  },
  {
    number: "03",
    label: "Review",
    title: "Review your content",
    description:
      "Approve the creative direction and initial content before anything is published, with a clear opportunity for feedback.",
    icon: ScanSearch,
    reveal: "translate-y-8",
  },
  {
    number: "04",
    label: "Launch",
    title: "Launch and improve",
    description:
      "Publish, monitor and refine based on the agreed objectives so your social presence keeps moving forward.",
    icon: Rocket,
    reveal: "translate-x-8 translate-y-6",
  },
];

export default function FirstConversationToCampaign() {
  const id = useId();

  const sectionRef = useRef<HTMLElement>(null);

  const [revealed, setRevealed] = useState<
    string[]
  >([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = Array.from(
      section.querySelectorAll<HTMLElement>(
        "[data-process-reveal]"
      )
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const showAll = () => {
      setRevealed(
        elements.map(
          (element) =>
            element.dataset.processReveal!
        )
      );
    };

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (!visibleEntries.length) return;

        setRevealed((current) =>
          Array.from(
            new Set([
              ...current,
              ...visibleEntries.map(
                (entry) =>
                  (entry.target as HTMLElement)
                    .dataset.processReveal!
              ),
            ])
          )
        );

        visibleEntries.forEach((entry) => {
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    let secondFrame = 0;

    const firstFrame = requestAnimationFrame(
      () => {
        secondFrame = requestAnimationFrame(
          () => {
            elements.forEach((element) => {
              observer.observe(element);
            });
          }
        );
      }
    );

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);

      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={`${id}-heading`}
      className="
        relative
        overflow-hidden

        bg-white

        py-20

        text-[#0B2A52]

        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BRAND ATMOSPHERE
          NAVY DOMINANT + RESTRAINED GOLD
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-0

          overflow-hidden
        "
      >
        {/* LARGE NAVY GLOW — TOP RIGHT */}

        <div
          className="
            absolute

            -right-[360px]
            top-[-160px]

            h-[900px]
            w-[900px]

            rounded-full

            bg-[#0B2A52]/[0.09]

            blur-[210px]
          "
        />

        {/* NAVY GLOW — LEFT */}

        <div
          className="
            absolute

            -left-[390px]
            top-[350px]

            h-[850px]
            w-[850px]

            rounded-full

            bg-[#0B2A52]/[0.055]

            blur-[220px]
          "
        />

        {/* CENTER NAVY ATMOSPHERE */}

        <div
          className="
            absolute

            left-1/2
            top-[51%]

            h-[600px]
            w-[1100px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#0B2A52]/[0.045]

            blur-[180px]
          "
        />

        {/* RESTRAINED GOLD GLOW */}

        <div
          className="
            absolute

            right-[12%]
            top-[31%]

            h-[360px]
            w-[360px]

            rounded-full

            bg-[#B79A72]/[0.12]

            blur-[130px]
          "
        />

        {/* SMALL SECOND GOLD LIGHT */}

        <div
          className="
            absolute

            left-[14%]
            bottom-[4%]

            h-[320px]
            w-[320px]

            rounded-full

            bg-[#B79A72]/[0.07]

            blur-[120px]
          "
        />

        {/* WHITE WASH */}

        <div
          className="
            absolute

            left-1/2
            top-[44%]

            h-[480px]
            w-[760px]

            -translate-x-1/2

            rounded-full

            bg-white/70

            blur-[130px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
        {/* ===================================================
            HEADER
        ==================================================== */}

        <header
          data-process-reveal="heading"
          className={`
            mx-auto

            max-w-[820px]

            text-center

            transition-all

            duration-1000

            ease-[cubic-bezier(0.22,1,0.36,1)]

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
          {/* LABEL */}

          <div
            className="
              mb-6

              inline-flex

              items-center

              gap-3
            "
          >
            <span
              className="
                h-px
                w-9

                bg-[#B79A72]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold

                uppercase

                tracking-[0.22em]

                text-[#B79A72]
              "
            >
             Your experience
            </span>

            <span
              className="
                h-px
                w-9

                bg-[#B79A72]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            id={`${id}-heading`}
            className="
              text-[39px]
              font-medium

              leading-[1.05]

              tracking-[-0.05em]

              text-[#0B2A52]

              sm:text-[46px]

              md:text-[52px]

              lg:text-[58px]
            "
          >
            From First Conversation

            <span
              className="
                mt-1
                block

                text-[#B79A72]
              "
            >
              to First Campaign.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto

              mt-6

              max-w-[560px]

              text-[14px]
              leading-7

              text-[#0B2A52]/60

              sm:text-[15px]
            "
          >
            A simple, considered process that keeps
            everything clear from our first conversation
            through to launch.
          </p>
        </header>

        {/* ===================================================
            PROCESS LINE
        ==================================================== */}

        <div
          data-process-reveal="process-line"
          className={`
            relative

            mx-auto

            mt-14

            hidden

            max-w-[1020px]

            transition-all

            delay-150
            duration-1000

            lg:block

            ${
              revealed.includes("process-line")
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          {/* LINE */}

          <div
            className="
              absolute

              left-[12.5%]
              right-[12.5%]
              top-[5px]

              h-px

              bg-gradient-to-r

              from-[#0B2A52]/10

              via-[#B79A72]

              to-[#0B2A52]/10
            "
          />

          {/* POINTS */}

          <div
            className="
              relative

              grid
              grid-cols-4
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  flex

                  justify-center
                "
              >
                <span
                  className="
                    h-[11px]
                    w-[11px]

                    rounded-full

                    border-[3px]
                    border-white

                    bg-[#B79A72]

                    shadow-[0_0_0_1px_rgba(183,154,114,0.35)]
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            CARDS
        ==================================================== */}

        <ol
          className="
            mt-10

            grid
            list-none

            gap-5

            p-0

            sm:grid-cols-2

            lg:mt-8
            lg:grid-cols-4
            lg:gap-5

            xl:gap-6
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            const isVisible =
              revealed.includes(step.number);

            return (
              <li
                key={step.number}
                data-process-reveal={step.number}
                className={`
                  min-w-0

                  transform-gpu

                  transition-all

                  duration-[850ms]

                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  motion-reduce:translate-x-0
                  motion-reduce:translate-y-0
                  motion-reduce:opacity-100
                  motion-reduce:transition-none

                  ${
                    isVisible
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : `${step.reveal} opacity-0`
                  }
                `}
                style={{
                  transitionDelay: `${
                    index * 90
                  }ms`,
                }}
              >
                <article
                  className="
                    group

                    relative

                    flex
                    h-full

                    min-h-[390px]

                    flex-col

                    overflow-hidden

                    rounded-[24px]

                    border
                    border-[#0B2A52]/[0.12]

                    bg-white/80

                    p-7

                    shadow-[0_22px_55px_-40px_rgba(11,42,82,0.28)]

                    backdrop-blur-xl

                    transition-all

                    duration-500

                    hover:-translate-y-2

                    hover:border-[#B79A72]/70

                    hover:bg-white

                    hover:shadow-[0_32px_70px_-38px_rgba(11,42,82,0.34)]

                    sm:p-8
                  "
                >
                  {/* =========================================
                      NAVY CARD GLOW
                  ========================================== */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none

                      absolute

                      -right-[100px]
                      -top-[110px]

                      h-[250px]
                      w-[250px]

                      rounded-full

                      bg-[#0B2A52]/[0.07]

                      blur-[70px]

                      transition-all

                      duration-700

                      group-hover:scale-125

                      group-hover:bg-[#0B2A52]/[0.10]
                    "
                  />

                  {/* GOLD CARD GLOW */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none

                      absolute

                      -left-[100px]
                      bottom-[-110px]

                      h-[220px]
                      w-[220px]

                      rounded-full

                      bg-[#B79A72]/[0.08]

                      blur-[75px]

                      transition-all

                      duration-700

                      group-hover:bg-[#B79A72]/[0.12]
                    "
                  />

                  {/* =========================================
                      TOP GOLD ACCENT
                  ========================================== */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute

                      left-7
                      top-0

                      h-[2px]
                      w-12

                      bg-[#B79A72]

                      transition-[width]

                      duration-500

                      group-hover:w-24

                      sm:left-8
                    "
                  />

                  {/* =========================================
                      LARGE BACKGROUND NUMBER
                  ========================================== */}

                 

                  {/* =========================================
                      TOP CONTENT
                  ========================================== */}

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
                      className="
                        flex

                        h-12
                        w-12

                        items-center
                        justify-center

                        rounded-[15px]

                        border
                        border-[#0B2A52]/[0.12]

                        bg-[#0B2A52]/[0.045]

                        text-[#0B2A52]

                        shadow-[0_12px_28px_-20px_rgba(11,42,82,0.30)]

                        transition-all

                        duration-500

                        group-hover:-translate-y-1

                        group-hover:rotate-[3deg]

                        group-hover:border-[#B79A72]/60

                        group-hover:bg-[#B79A72]/[0.10]

                        group-hover:text-[#B79A72]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.35}
                        aria-hidden="true"
                      />
                    </span>

                    {/* NUMBER */}

                   
                  </div>

                  {/* =========================================
                      LABEL
                  ========================================== */}

                  <div
                    className="
                      relative
                      z-10

                      mt-10

                      flex

                      items-center

                      gap-2
                    "
                  >
                    <span
                      className="
                        h-px
                        w-5

                        bg-[#B79A72]
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        font-semibold

                        uppercase

                        tracking-[0.2em]

                        text-[#B79A72]
                      "
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* =========================================
                      CONTENT
                  ========================================== */}

                  <div
                    className="
                      relative
                      z-10

                      mt-4
                    "
                  >
                    <h3
                      className="
                        max-w-[250px]

                        text-[23px]
                        font-medium

                        leading-[1.16]

                        tracking-[-0.035em]

                        text-[#0B2A52]

                        lg:text-[22px]

                        xl:text-[24px]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4

                        text-[13px]
                        leading-6

                        text-[#0B2A52]/58
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* =========================================
                      FOOTER
                  ========================================== */}

                  <div
                    className="
                      relative
                      z-10

                      mt-auto

                      pt-8
                    "
                  >
                    <div
                      className="
                        flex

                        items-center

                        justify-between

                        border-t
                        border-[#0B2A52]/[0.08]

                        pt-5
                      "
                    >
                      {/* STEP TEXT */}

                      <span
                        className="
                          text-[8px]
                          font-medium

                          uppercase

                          tracking-[0.16em]

                          text-[#0B2A52]/40
                        "
                      >
                        Step {index + 1} of 4
                      </span>

                      {/* ARROW */}

                      <span
                        className="
                          flex

                          h-9
                          w-9

                          items-center
                          justify-center

                          rounded-full

                          border
                          border-[#0B2A52]/[0.12]

                          bg-white

                          text-[#0B2A52]

                          shadow-[0_10px_22px_-18px_rgba(11,42,82,0.32)]

                          transition-all

                          duration-500

                          group-hover:rotate-45

                          group-hover:border-[#B79A72]

                          group-hover:bg-[#0B2A52]

                          group-hover:text-white

                          group-hover:shadow-[0_14px_28px_-17px_rgba(11,42,82,0.40)]
                        "
                      >
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.4}
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

        {/* ===================================================
            BOTTOM MESSAGE
        ==================================================== */}

        <div
          data-process-reveal="bottom"
          className={`
            mx-auto

            mt-9

            flex

            max-w-[700px]

            items-center

            gap-4

            transition-all

            duration-1000

            ${
              revealed.includes("bottom")
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <span
            className="
              h-px
              flex-1

              bg-gradient-to-r

              from-transparent

              to-[#B79A72]/65
            "
          />

          <p
            className="
              shrink-0

              text-center

              text-[9px]
              font-semibold

              uppercase

              tracking-[0.17em]

              text-[#0B2A52]/48
            "
          >
            Clear at every step
          </p>

          <span
            className="
              h-px
              flex-1

              bg-gradient-to-l

              from-transparent

              to-[#B79A72]/65
            "
          />
        </div>
      </div>
    </section>
  );
}