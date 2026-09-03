"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    number: "01",
    text: "Don’t create just because you can.",
  },
  {
    number: "02",
    text: "Don’t chase numbers that don’t matter.",
  },
  {
    number: "03",
    text: "Don’t confuse attention with impact.",
  },
  {
    number: "04",
    text: "Don’t stop learning because something worked once.",
  },
  {
    number: "05",
    text: "And never be afraid to ask, “Why?”",
  },
];

export default function TheWayWeThink() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">

      <div className="grid w-full grid-cols-1 lg:grid-cols-[40%_60%]">

        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-[520px]
            overflow-hidden
   
            sm:h-[620px]
            md:h-[700px]
            lg:h-[760px]
            xl:h-[800px]
          "
        >

          <motion.img
            src="/about/theway.png"
            alt="The way we think"
            initial={{
              scale: 1.035,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

        

         

        </motion.div>


        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}

        <div className="flex items-center bg-white">

          <div className="
            w-full
            px-7
            py-16
            sm:px-10
            sm:py-20
            md:px-12
            md:py-24
            lg:px-14
            lg:py-20
            xl:px-[5.5vw]
            xl:py-24
          ">

            {/* =================================================
                SECTION LABEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex items-center gap-3"
            >

              <span className="
                font-serif
                text-[12px]
                tracking-[0.12em]
                text-[#B8945B]
              ">
                # 08
              </span>

              <span className="
                h-px
                w-9
                bg-[#B8945B]
              " />

              <span className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#0B2A52]/65
              ">
                The Way We Think
              </span>

            </motion.div>


            {/* =================================================
                HEADING
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.75,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7
                max-w-[700px]
                font-serif
                text-[clamp(2.55rem,3.7vw,4.4rem)]
                font-normal
                leading-[0.96]
                tracking-[-0.045em]
              "
            >
              A Few Things We’ll
              <br />
              Always Believe
              <span className="text-[#B8945B]">
                .
              </span>
            </motion.h2>


            {/* =================================================
                GOLD LINE
            ================================================= */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7
                h-[2px]
                bg-[#B8945B]
              "
            />


            {/* =================================================
                BELIEFS
            ================================================= */}

            <div className="
              mt-7
              border-t
              border-[#0B2A52]/10
            ">

              {beliefs.map((belief, index) => (

                <motion.div
                  key={belief.number}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + index * 0.065,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    grid
                    grid-cols-[52px_1fr]
                    gap-4
                    border-b
                    border-[#0B2A52]/10
                    py-[19px]
                    sm:grid-cols-[65px_1fr]
                    sm:gap-5
                    sm:py-[22px]
                  "
                >

                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <div className="
                    relative
                    flex
                    items-center
                  ">

                    <span className="
                      font-serif
                      text-[14px]
                      font-normal
                      tracking-[0.02em]
                      text-[#B8945B]
                    ">
                      {belief.number}
                    </span>

                    {/* Vertical divider */}

                    <span className="
                      absolute
                      right-0
                      top-0
                      h-full
                      w-px
                      bg-[#0B2A52]/10
                    " />

                  </div>


                  {/* =================================================
                      TEXT
                  ================================================= */}

                  <div className="
                    flex
                    items-center
                    overflow-hidden
                  ">

                    <motion.p
                      whileHover={{
                        x: 4,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        max-w-[620px]
                        font-serif
                        text-[clamp(1.2rem,1.65vw,1.75rem)]
                        font-normal
                        leading-[1.16]
                        tracking-[-0.02em]
                        text-[#0B2A52]
                      "
                    >
                      {belief.text}
                    </motion.p>

                  </div>

                </motion.div>

              ))}

            </div>


            {/* =================================================
                BOTTOM MICRO COPY
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-6
                flex
                items-center
                justify-between
                gap-5
              "
            >

              <span className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[#0B2A52]/25
              ">
                Principles over trends
              </span>

              <span className="
                font-serif
                text-[11px]
                italic
                text-[#B8945B]
              ">
                Always ask why.
              </span>

            </motion.div>

          </div>

        </div>

      </div>


      {/* =====================================================
          MOBILE IMAGE / CONTENT SEPARATOR
      ===================================================== */}

      <div className="
        pointer-events-none
        absolute
        left-0
        right-0
        top-[520px]
        h-px
        bg-white/20
        sm:top-[620px]
        md:top-[700px]
        lg:hidden
      " />

    </section>
  );
}