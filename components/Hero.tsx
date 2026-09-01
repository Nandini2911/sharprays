
import Link from "next/link";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#6285AD]
        sm:min-h-[105svh]
        lg:min-h-[110svh]
        xl:min-h-[115svh]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <img
        src="/hero1.png"
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          sm:object-center
        "
      />

      {/* Very subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white/[0.04]" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <main
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1440px]
          items-start
          px-5
          pb-14
          pt-[105px]
          sm:px-8
          sm:pb-20
          sm:pt-[125px]
          md:px-10
          md:pt-[135px]
          lg:px-14
          lg:pb-24
          lg:pt-[145px]
          xl:px-16
          xl:pt-[155px]
          2xl:px-20
        "
      >
        <div className="w-full">
          {/* =================================================
              MAIN HERO GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-10
              md:gap-12
              lg:grid-cols-[1.04fr_0.96fr]
              lg:gap-8
              xl:gap-12
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="
                w-full
                max-w-[720px]
              "
            >
              {/* =================================================
                  EYEBROW
              ================================================= */}

              <div
                className="
                  mb-5
                  flex
                  w-fit
                  max-w-full
                  items-center
                  gap-2.5
                  sm:mb-7
                  sm:gap-4
                "
              >
                <span className="h-px w-6 shrink-0 bg-[#B79A72]/70 sm:w-10" />

                <span
                  style={newYorkFont}
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[#B79A72]
                    sm:text-[10px]
                    sm:tracking-[0.30em]
                    md:text-xs
                  "
                >
                 Turning Attention Into Growth

                </span>

                <span className="h-px w-6 shrink-0 bg-[#B79A72]/70 sm:w-10" />
              </div>

              {/* =================================================
                  HEADLINE
              ================================================= */}
{/* =================================================
    SEO H1
================================================= */}

<h1
  className="
    mb-4
    text-[14px]
    font-medium
    tracking-[-0.01em]
    text-[#0B2A52]
    sm:mb-5
    sm:text-[16px]
    md:text-[18px]
  "
>
  Digital Marketing Agency for Brands Ready to Grow
</h1>

{/* =================================================
    EXISTING HEADLINE
================================================= */}

<h2
  style={newYorkFont}
  className="
    max-w-[720px]
    text-balance
    text-[42px]
    font-light
    leading-[0.96]
    tracking-[-0.045em]
    text-[#0B2A52]
    sm:text-[44px]
    sm:leading-[0.95]
    sm:tracking-[-0.05em]
    md:text-[50px]
    lg:text-[66px]
    lg:leading-[0.94]
    xl:text-[75px]
    2xl:text-[80px]
  "
>
  Make Your Brand

  <br />

  <span className="text-[#C6A77A]">
    Impossible to Ignore.
  </span>
</h2>
              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                style={newYorkFont}
                className="
                  mt-6
                  max-w-[570px]
                  text-[14px]
                  leading-[1.65]
                  text-[#344054]
                  sm:mt-7
                  sm:text-[16px]
                  sm:leading-[1.7]
                  md:text-[17px]
                  lg:mt-8
                  lg:text-[18px]
                "
              >
                We build search visibility, powerful digital experiences,
                and performance-driven campaigns that turn attention
                into measurable business growth.
              </p>

              {/* =================================================
                  CTA BUTTONS
              ================================================= */}

              <div
                className="
                  mt-7
                  flex
                  w-full
                  flex-col
                  gap-3
                  sm:mt-8
                  sm:flex-row
                  sm:flex-wrap
                  lg:mt-9
                "
              >
                {/* =================================================
                    PRIMARY CTA
                ================================================= */}

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-h-[54px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#0B2A52]
                    px-5
                    py-3.5
                    text-[14px]
                    font-medium
                    text-white
                    shadow-[0_18px_40px_rgba(11,42,82,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#092341]
                    sm:w-auto
                    sm:min-h-[56px]
                    sm:gap-4
                    sm:px-6
                    sm:py-[17px]
                    sm:text-[15px]
                    md:px-7
                  "
                >
                  <span className="text-white">
                    Get Your Free Growth Audit
                  </span>

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C6A77A]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                {/* =================================================
                    SECONDARY CTA
                ================================================= */}

                <Link
                  href="/work"
                  className="
                    group
                    inline-flex
                    min-h-[54px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#0B2A52]/20
                    bg-white/30
                    px-5
                    py-3.5
                    text-[14px]
                    font-medium
                    text-[#0B2A52]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#0B2A52]/30
                    hover:bg-white/45
                    sm:w-auto
                    sm:min-h-[56px]
                    sm:px-6
                    sm:py-[17px]
                    sm:text-[15px]
                    md:px-7
                  "
                >
                  View Our Work

                  <span
                    className="
                      text-[#C6A77A]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* =================================================
                  TRUST ROW
              ================================================= */}

              <div
                className="
                  mt-8
                  flex
                  w-full
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-3
                  sm:mt-9
                  sm:gap-x-6
                  lg:mt-10
                "
              >
                {/* CLIENT STACK */}

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <span
                      className="
                        h-7
                        w-7
                        rounded-full
                        border-2
                        border-white/70
                        bg-[#0B2A52]/80
                        sm:h-8
                        sm:w-8
                      "
                    />

                    <span
                      className="
                        h-7
                        w-7
                        rounded-full
                        border-2
                        border-white/70
                        bg-[#6285AD]
                        sm:h-8
                        sm:w-8
                      "
                    />

                    <span
                      className="
                        h-7
                        w-7
                        rounded-full
                        border-2
                        border-white/70
                        bg-[#C6A77A]
                        sm:h-8
                        sm:w-8
                      "
                    />

                    <span
                      className="
                        h-7
                        w-7
                        rounded-full
                        border-2
                        border-white/70
                        bg-[#344054]/70
                        sm:h-8
                        sm:w-8
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[11px]
                      text-[#344054]
                      sm:text-[12px]
                    "
                  >
                    Built for ambitious brands
                  </span>
                </div>

                {/* DIVIDER */}

                <span
                  className="
                    hidden
                    h-5
                    w-px
                    bg-[#0B2A52]/20
                    sm:block
                  "
                />

                {/* ROI */}

                <span
                  className="
                    text-[11px]
                    font-medium
                    text-[#0B2A52]
                    sm:text-[12px]
                  "
                >
                  ROI Focused
                </span>

                {/* DIVIDER */}

                <span
                  className="
                    hidden
                    h-5
                    w-px
                    bg-[#0B2A52]/20
                    sm:block
                  "
                />

                {/* STRATEGY */}

                <span
                  className="
                    text-[11px]
                    text-[#344054]/75
                    sm:text-[12px]
                  "
                >
                  Strategy · Creative · Performance
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT — VISUAL AREA
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[300px]
                w-full
                items-center
                justify-center
                pt-2
                sm:min-h-[360px]
                sm:pt-4
                md:min-h-[440px]
                md:pt-6
                lg:min-h-[570px]
                lg:pt-0
              "
            >
              {/* =================================================
                  RIGHT SIDE IMAGE
                  Put your image at: /hero-right.png
              ================================================= */}

            <div
              className="
                relative
                z-10
                flex
                w-full
                items-center
                justify-center
                px-0
                sm:px-2
                md:px-4
                lg:px-0
              "
            >
              <img
                src="/hero2.png"
                alt=""
                className="
                  block
                  h-auto
                  w-full
                  max-w-[430px]
                  object-contain
                  object-center
                  sm:max-w-[520px]
                  md:max-w-[620px]
                  lg:max-w-[650px]
                  xl:max-w-[720px]
                  2xl:max-w-[780px]
                "
              />
            </div>
            </div>

              {/* =================================================
                  FLOATING DOT
              ================================================= */}

             
          </div>
        </div>
      </main>
    </section>
  );
}