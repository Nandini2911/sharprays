"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function ReadyToBeRemembered() {
  const id = useId();

  const sectionRef = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);

        observer.disconnect();
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={`${id}-heading`}
      className="
        relative
        overflow-hidden

        bg-white

        py-24

        text-[#0B2A52]

        sm:py-28
        lg:py-36
        xl:py-40
      "
    >
      {/* =====================================================
          BRAND ATMOSPHERE
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
        {/* LARGE NAVY GLOW — LEFT */}

        <div
          className="
            absolute

            -left-[380px]
            top-[-180px]

            h-[900px]
            w-[900px]

            rounded-full

            bg-[#0B2A52]/[0.08]

            blur-[210px]
          "
        />

        {/* LARGE NAVY GLOW — RIGHT */}

        <div
          className="
            absolute

            -right-[400px]
            bottom-[-300px]

            h-[930px]
            w-[930px]

            rounded-full

            bg-[#0B2A52]/[0.07]

            blur-[220px]
          "
        />

        {/* CENTER NAVY ATMOSPHERE */}

        <div
          className="
            absolute

            left-1/2
            top-[46%]

            h-[650px]
            w-[1150px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#0B2A52]/[0.04]

            blur-[190px]
          "
        />

        {/* GOLD GLOW — TOP RIGHT */}

        <div
          className="
            absolute

            right-[13%]
            top-[10%]

            h-[360px]
            w-[360px]

            rounded-full

            bg-[#B79A72]/[0.12]

            blur-[130px]
          "
        />

        {/* GOLD GLOW — LOWER LEFT */}

        <div
          className="
            absolute

            left-[12%]
            bottom-[5%]

            h-[320px]
            w-[320px]

            rounded-full

            bg-[#B79A72]/[0.07]

            blur-[125px]
          "
        />

        {/* WHITE CENTER WASH */}

        <div
          className="
            absolute

            left-1/2
            top-[42%]

            h-[440px]
            w-[760px]

            -translate-x-1/2

            rounded-full

            bg-white/75

            blur-[125px]
          "
        />

        {/* GIANT 08 */}

        

        {/* TOP FINE LINE */}

        <div
          className="
            absolute

            left-[5%]
            right-[5%]
            top-0

            h-px

            bg-gradient-to-r

            from-transparent

            via-[#B79A72]/35

            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
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
        <div
          className="
            mx-auto

            max-w-[1080px]

            text-center
          "
        >
          {/* =================================================
              LABEL
          ================================================== */}

          <div
            className={`
              mx-auto

              flex

              w-fit

              items-center

              gap-3

              transition-all

              duration-1000

              ease-[cubic-bezier(0.22,1,0.36,1)]

              motion-reduce:translate-y-0
              motion-reduce:opacity-100

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
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
                text-[9px]
                font-semibold

                uppercase

                tracking-[0.23em]

                text-[#B79A72]
              "
            >
            Your next move
            </span>

            <span
              className="
                h-px
                w-9

                bg-[#B79A72]
              "
            />
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h2
            id={`${id}-heading`}
            className={`
              mx-auto

              mt-8

              max-w-[1080px]

              text-[48px]
              font-medium

              leading-[0.98]

              tracking-[-0.06em]

              text-[#0B2A52]

              transition-all

              delay-100
              duration-[1100ms]

              ease-[cubic-bezier(0.22,1,0.36,1)]

              sm:text-[64px]
              md:text-[76px]
              lg:text-[90px]
              xl:text-[100px]

              motion-reduce:translate-y-0
              motion-reduce:opacity-100

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            Ready to be

            <span
              className="
                mt-1
                block

                font-serif
                font-normal

                text-[#B79A72]
              "
            >
              remembered?
            </span>
          </h2>

          {/* =================================================
              SMALL ACCENT
          ================================================== */}

          <div
            className={`
              mx-auto

              mt-7

              flex
              w-fit

              items-center

              gap-3

              transition-all

              delay-150
              duration-1000

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <span
              className="
                h-px
                w-10

                bg-[#B79A72]/65
              "
            />

            <Sparkles
              size={13}
              strokeWidth={1.3}
              className="text-[#B79A72]"
              aria-hidden="true"
            />

            <span
              className="
                h-px
                w-10

                bg-[#B79A72]/65
              "
            />
          </div>

          {/* =================================================
              INVITATION
          ================================================== */}

          <p
            className={`
              mx-auto

              mt-7

              max-w-[610px]

              text-[14px]
              leading-7

              text-[#0B2A52]/58

              transition-all

              delay-200
              duration-1000

              ease-[cubic-bezier(0.22,1,0.36,1)]

              sm:text-[15px]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }
            `}
          >
            If you&apos;re ready for a social presence
            that feels clear, distinctive and considered,
            let&apos;s start with a conversation about your
            brand.
          </p>

          {/* =================================================
              PRIMARY CTA
          ================================================== */}

          <div
            className={`
              mt-11

              flex

              justify-center

              transition-all

              delay-300
              duration-1000

              ease-[cubic-bezier(0.22,1,0.36,1)]

              sm:mt-12

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <a
              href="#contact"
              className="
                group

                relative

                inline-flex

                min-h-[64px]

                items-center

                gap-5

                overflow-hidden

                rounded-full

                border
                border-[#0B2A52]/[0.14]

                bg-white/75

                py-2
                pl-7
                pr-2

                text-[10px]
                font-semibold

                uppercase

                tracking-[0.15em]

                text-[#0B2A52]

                shadow-[0_24px_60px_-36px_rgba(11,42,82,0.38)]

                backdrop-blur-xl

                transition-all

                duration-500

                hover:-translate-y-1

                hover:border-[#B79A72]/70

                hover:bg-white

                hover:shadow-[0_30px_70px_-34px_rgba(11,42,82,0.45)]

                sm:pl-8
              "
            >
              {/* GOLD HOVER WASH */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute

                  inset-y-0
                  left-0

                  w-0

                  bg-[#B79A72]/[0.10]

                  transition-[width]

                  duration-500

                  group-hover:w-full
                "
              />

              {/* CTA TEXT */}

              <span
                className="
                  relative
                  z-10
                "
              >
                Let&apos;s Talk About Your Brand
              </span>

              {/* CTA CIRCLE */}

              <span
                className="
                  relative
                  z-10

                  flex

                  h-12
                  w-12

                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-[#0B2A52]

                  text-white

                  shadow-[0_12px_28px_-18px_rgba(11,42,82,0.55)]

                  transition-all

                  duration-500

                  group-hover:rotate-45

                  group-hover:bg-[#B79A72]

                  group-hover:shadow-[0_16px_30px_-16px_rgba(183,154,114,0.55)]
                "
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>

          {/* =================================================
              BOTTOM DETAIL
          ================================================== */}

          <div
            className={`
              mx-auto

              mt-16

              flex

              max-w-[760px]

              items-center

              gap-4

              transition-all

              delay-[400ms]
              duration-1000

              ${
                visible
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          >
            <span
              className="
                h-px
                flex-1

                bg-gradient-to-r

                from-transparent

                to-[#B79A72]/55
              "
            />

            <span
              className="
                shrink-0

                text-[8px]
                font-semibold

                uppercase

                tracking-[0.19em]

                text-[#0B2A52]/40
              "
            >
              Create · Connect · Be remembered
            </span>

            <span
              className="
                h-px
                flex-1

                bg-gradient-to-l

                from-transparent

                to-[#B79A72]/55
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}