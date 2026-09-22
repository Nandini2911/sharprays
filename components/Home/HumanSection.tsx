"use client";

import Image from "next/image";
import {
  ArrowRight,
  Target,
  Users,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Small Team",
    text: "Direct access to the people doing the work.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    text: "Quick decisions, rapid testing, better execution.",
  },
  {
    icon: Target,
    title: "Stay Focused",
    text: "Everything we do is tied to meaningful growth.",
  },
];

export default function HumanSection() {
  return (
    <section
      id="human"
      className="
        w-full
        overflow-hidden
        bg-white
        text-[#0B2A52]
      "
    >
      {/* =========================================================
          MAIN SECTION
      ========================================================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-14
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center

            gap-9
            py-12

            sm:gap-10
            sm:py-14

            md:gap-12
            md:py-16

            lg:min-h-[650px]
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-8
            lg:py-16

            xl:min-h-[680px]
            xl:gap-12
            xl:py-20

            2xl:min-h-[720px]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div
            className="
              relative
              z-10
              w-full
              max-w-[650px]

              lg:pr-4
              xl:pr-6
            "
          >
            {/* LABEL */}

            <div
              className="
                mb-5
                flex
                items-center
                gap-2.5

                sm:mb-6
                sm:gap-3

                lg:mb-7
              "
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

              <span
                className="
                  whitespace-nowrap
                  text-[9px]
               
                  uppercase
                  tracking-[0.16em]
                  text-[#B79A72]

                  sm:text-[11px]
                  sm:tracking-[0.2em]
                "
              >
                The Human Section
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

            {/* =====================================================
                HEADING
            ===================================================== */}

            <h2
              className="
                font-[var(--font-new-york)]

                text-[2.15rem]
                font-normal
                leading-[0.96]
                tracking-[-0.045em]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              We&apos;re Not Here
              <br />
              to Be{" "}
              <span className="text-[#B79A72]">
                Another Agency.
              </span>
            </h2>

            {/* DIVIDER */}

            

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}

            <p
              className="
                mt-5
                max-w-[570px]

                text-[14px]
                leading-[1.7]
                text-[#0B2A52]/70

                sm:mt-6
                sm:text-[15px]

                md:text-base

                lg:mt-7
                lg:text-[17px]

                xl:text-[18px]
              "
            >
              We&apos;re building a different kind of digital growth
              partner—small enough to care, sharp enough to move fast, and
              obsessed with making the work matter.
            </p>

            {/* =====================================================
                VALUES
            ===================================================== */}

            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-5

                sm:mt-8
                sm:grid-cols-3
                sm:gap-4

                md:gap-5

                lg:mt-9

                xl:mt-10
              "
            >
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-3

                      sm:block
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full

                        bg-[#F3F6F9]
                        text-[#0B2A52]

                        sm:h-10
                        sm:w-10
                      "
                    >
                      <Icon
                        className="
                          h-4
                          w-4

                          sm:h-[18px]
                          sm:w-[18px]
                        "
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* TEXT */}

                    <div
                      className="
                        min-w-0

                        sm:mt-3
                      "
                    >
                      <h3
                        className="
                          font-[var(--font-new-york)]

                          text-[18px]
                          font-semibold
                          leading-[1.2]

                          sm:text-[19px]
                          md:text-xl
                          lg:text-[21px]
                          xl:text-[22px]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          max-w-[190px]

                          text-[12px]
                          leading-[1.55]
                          text-[#0B2A52]/55

                          sm:max-w-[160px]
                          sm:text-[12px]

                          md:text-[13px]

                          lg:text-[14px]
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center

              lg:min-h-[520px]
              lg:justify-end

              xl:min-h-[620px]
            "
          >
            <div
              className="
                relative
                w-full

                h-[270px]
                max-w-[360px]

                sm:h-[390px]
                sm:max-w-[530px]

                md:h-[470px]
                md:max-w-[620px]

                lg:h-[520px]
                lg:max-w-[620px]

                xl:h-[600px]
                xl:max-w-[680px]

                2xl:h-[640px]
                2xl:max-w-[720px]
              "
            >
              <Image
                src="/about.png"
                alt="Our team working together"
                fill
                sizes="(max-width: 639px) 92vw, (max-width: 767px) 85vw, (max-width: 1023px) 75vw, (max-width: 1279px) 48vw, 680px"
                className="
                  object-contain
                  object-center
                  lg:object-right
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM STATEMENT
      ========================================================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]

          px-4
          pb-12

          sm:px-6
          sm:pb-14

          md:px-8
          md:pb-16

          lg:px-10
          lg:pb-20

          xl:px-12

          2xl:px-14
        "
      >
        <div
          className="
            relative
            flex
            flex-col
            gap-4

            rounded-[18px]

            bg-[#F7F8F9]

            px-5
            py-5

            sm:rounded-[20px]
            sm:px-6
            sm:py-6

            md:flex-row
            md:items-center
            md:gap-5
            md:px-7

            lg:px-8
            lg:py-6

            xl:gap-6
          "
        >
          {/* ICON */}

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full

              bg-[#0B2A52]
              text-white

              sm:h-10
              sm:w-10
            "
          >
            <Users
              className="
                h-4
                w-4

                sm:h-[17px]
                sm:w-[17px]
              "
              strokeWidth={1.6}
            />
          </div>

          {/* PRIMARY TEXT */}

          <p
            className="
              max-w-[520px]

              text-[14px]
              font-semibold
              leading-[1.6]

              sm:text-[15px]

              md:text-base

              lg:text-[17px]

              xl:text-[18px]
            "
          >
            We work best with teams who value honesty, collaboration and
            growth.
          </p>

          {/* DIVIDER */}

          <span
            className="
              hidden
              h-8
              w-px
              shrink-0
              bg-[#0B2A52]/15

              md:block
            "
          />

          {/* SECONDARY TEXT */}

          <p
            className="
              max-w-[430px]

              text-[13px]
              leading-[1.6]
              text-[#0B2A52]/50

              sm:text-[14px]

              md:text-[15px]

              lg:text-base

              xl:text-[17px]
            "
          >
            If that&apos;s you, we&apos;ll get along just fine.
          </p>

          {/* ARROW */}

          <ArrowRight
            className="
              hidden
              h-[18px]
              w-[18px]
              shrink-0
              text-[#D59A52]

              md:ml-auto
              md:block
            "
            strokeWidth={1.5}
          />
        </div>
      </div>
    </section>
  );
}