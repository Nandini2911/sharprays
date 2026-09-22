"use client";

import { useEffect, useRef, useState } from "react";

export default function SocialMediaQuickAnswer() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="what-is-social-media-marketing"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-36
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND DETAILS
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[560px]
          w-[560px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#0B2A52]/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#B79A72]/[0.07]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[40%]
          h-[350px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-[#DCE8F6]/20
          blur-[120px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1100px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div
          className={`
            flex
            flex-col
            items-center
            text-center
            transition-all
            duration-[900ms]
            ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <div className="flex items-center gap-3">
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
                    whitespace-nowrap
                    text-[8px]
                  
                    uppercase
                    tracking-[0.22em]
                    text-[#B79A72]

                    sm:text-[10px]
                    sm:tracking-[0.30em]

                    md:text-xs
                  "
                >
              QUICK ANSWER
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

         
        </div>

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          className={`
            mt-9
            text-center
            transition-all
            delay-100
            duration-[1000ms]
            ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          <h2
            className="
              mx-auto
              max-w-[780px]
              text-[2.2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.04em]
              text-[#0B2A52]
              sm:text-[2.65rem]
              md:text-[3rem]
              lg:text-[3.25rem]
              xl:text-[3.5rem]
            "
          >
            What Is Social Media{" "}
            <span className="font-normal text-[#B79A72]">
              Marketing?
            </span>
          </h2>
        </div>

        {/* =====================================================
            QUICK ANSWER CARD
        ====================================================== */}

        <div
          className={`
            mx-auto
            mt-12
            max-w-[900px]
            transition-all
            delay-200
            duration-[1100ms]
            ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-14 opacity-0"
            }
          `}
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-[#0B2A52]/[0.07]
              bg-white/90
              shadow-[0_25px_80px_rgba(11,42,82,0.06)]
              backdrop-blur-xl
              sm:rounded-[34px]
            "
          >
            {/* TOP ACCENT */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-[3px]
                w-[180px]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#B79A72]
                to-transparent
              "
            />

            <div
              className="
                px-6
                py-9
                sm:px-9
                sm:py-11
                lg:px-14
                lg:py-12
              "
            >
              {/* PARAGRAPH 01 */}

              <p
                className="
                  mx-auto
                  max-w-[780px]
                  text-center
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/68
                  sm:text-[15px]
                  sm:leading-8
                "
              >
                Social media marketing is the strategic use of platforms such
                as Instagram, Facebook, LinkedIn and other relevant social
                channels to build brand awareness, engage audiences,
                distribute content and support business goals.
              </p>

              {/* DIVIDER */}

              <div
                className="
                  mx-auto
                  my-7
                  h-px
                  w-[120px]
                  bg-[#0B2A52]/10
                "
              />

              {/* PARAGRAPH 02 */}

              <p
                className="
                  mx-auto
                  max-w-[760px]
                  text-center
                  text-[14px]
                  leading-7
                  text-[#0B2A52]/62
                  sm:text-[15px]
                  sm:leading-8
                "
              >
                Effective social media marketing combines strategy, creative
                content, consistent publishing, community engagement and
                performance analysis.
              </p>

              {/* PARAGRAPH 03 */}

              <div
                className="
                  mx-auto
                  mt-7
                  max-w-[760px]
                  rounded-[20px]
                  border
                  border-[#B79A72]/15
                  bg-[#F8F4EE]/70
                  px-5
                  py-5
                  sm:px-7
                  sm:py-6
                "
              >
                <p
                  className="
                    text-center
                    text-[14px]
                    leading-7
                    text-[#0B2A52]/68
                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  At Sharp Rays, we focus on making those elements work
                  together instead of treating social media as a collection
                  of disconnected posts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DETAIL
        ====================================================== */}

        
      </div>
    </section>
  );
}