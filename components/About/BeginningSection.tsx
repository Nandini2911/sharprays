import React from "react";

export default function BeginningSection() {
  return (
    <section className="relative overflow-hidden bg-white text-[#0B2A52]">
      {/* Main Content */}
      <div className="relative mx-auto max-w-[1500px] px-6 pt-6 pb-8 sm:px-10 sm:pt-8 sm:pb-10 md:px-14 lg:px-20 lg:pt-10 lg:pb-12">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 xl:gap-28">
          
          {/* LEFT */}
          <div className="relative">
            {/* Section Label */}
            <div className="mb-8 flex items-center gap-5">
              <span className="h-px w-16 bg-[#C99752]" />

              <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C99752]">
                The Beginning
              </span>
            </div>

            {/* Heading */}
            <h2 className="relative z-10 max-w-[850px] font-serif text-[clamp(2.8rem,4.2vw,4rem)] font-medium leading-[0.91] tracking-[-0.045em] text-[#0B2A52]">
              It Started With
              <br />
              A Simple Question
              <span className="text-[#C99752]">.</span>
            </h2>

            {/* Decorative Origin Graphic */}
            <div className="relative mt-10 h-[260px] overflow-hidden sm:h-[300px] lg:mt-12 lg:h-[320px]">
              {/* Vertical line */}
              <div className="absolute left-[34%] top-0 z-20 flex flex-col items-center">
                <span className="h-3 w-3 rounded-full bg-[#C99752]" />
                <span className="h-[150px] w-px bg-[#C99752]" />
              </div>

              {/* Concentric circles */}
              <div className="absolute bottom-[-250px] left-[-5%] aspect-square w-[650px] sm:left-0 sm:w-[700px] lg:left-[-4%] lg:w-[760px]">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0B2A52]/[0.065]"
                    style={{
                      width: `${100 - i * 9.5}%`,
                      height: `${100 - i * 9.5}%`,
                    }}
                  />
                ))}

                {/* Center glow */}
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C99752]/[0.035] blur-2xl" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative lg:pt-[45px]">
            {/* Quote mark */}
            <div className="mb-6 font-serif text-[72px] leading-[0.5] text-[#C99752]">
              “
            </div>

            {/* Question */}
            <h3 className="max-w-[560px] text-[clamp(1.4rem,2vw,2rem)] font-semibold leading-[1.35] tracking-[-0.025em] text-[#0B2A52]">
              Why does so much marketing
              <br className="hidden sm:block" />
              look busy—but accomplish so little?
            </h3>

            {/* Small divider */}
            <div className="my-7 h-px w-14 bg-[#C99752]" />

            {/* Story */}
            <div className="max-w-[560px] space-y-6">
              <p className="text-[15px] leading-[1.75] tracking-[0.005em] text-[#0B2A52]/85 sm:text-[16px]">
                We saw businesses spending time creating content, running
                campaigns and chasing numbers without always having a clear
                reason behind what they were doing.
              </p>

              <div className="h-px w-14 bg-[#C99752]/70" />

              <p className="text-[15px] leading-[1.75] tracking-[0.005em] text-[#0B2A52]/85 sm:text-[16px]">
                We believed there had to be a better way.
              </p>

              <div className="h-px w-14 bg-[#C99752]/70" />

              <p className="text-[15px] leading-[1.75] tracking-[0.005em] text-[#0B2A52]/85 sm:text-[16px]">
                So we started{" "}
                <span className="font-bold tracking-[0.02em] text-[#0B2A52]">
                  SHARPRAYS.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom subtle transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-white/50 to-transparent" />
    </section>
  );
}