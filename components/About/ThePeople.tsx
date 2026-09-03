import React from "react";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Nandini",
    role: "Co-Founder / Strategy",
    description: "Turns complicated problems into clear directions.",
    image: "/images/team/nandini.jpg",
  },
  {
    name: "Aman",
    role: "Growth",
    description: "Finds the numbers behind the opportunity.",
    image: "/images/team/aman.jpg",
  },
  {
    name: "Riya",
    role: "Creative",
    description: "Turns ideas into things people remember.",
    image: "/images/team/riya.jpg",
  },
  {
    name: "Kunal",
    role: "Performance",
    description: "Tests, learns and keeps pushing the numbers.",
    image: "/images/team/kunal.jpg",
  },
];

export default function ThePeople() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* Header */}
        <div className="relative z-10">

          {/* Section Label */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
           

            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-xs  tracking-[0.18em] text-[#B79A72] sm:text-sm">
              THE PEOPLE
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[1100px] text-[40px]  leading-[1.05] tracking-[-0.04em] text-[#0B2A52] sm:text-[39px] md:text-[41px] lg:text-[54px]">
            The People Behind SHARPRAYS
              <span className="absolute -right-5 bottom-1 h-2 w-2 rounded-full bg-[#B79A72] sm:-right-7 sm:h-3 sm:w-3" />
           
          
          </h2>

          {/* Supporting Text */}
          <div className="mt-5 flex items-center gap-4 sm:mt-6">
            <span className="h-[2px] w-10 bg-[#B79A72]" />

            <p className="text-base leading-7 text-[#0B2A52]/65 sm:text-lg">
              Different skills. One obsession: making the work matter.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-[2px] border border-[#0B2A52]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#B79A72]/50 hover:shadow-[0_25px_60px_rgba(11,42,82,0.10)]"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-[#F5F5F3]">

                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden">

                  {/* Navy block */}
                  <div
                    className={`absolute bottom-0 h-[43%] w-[82%] bg-[#0B2A52]/95 transition-transform duration-700 group-hover:translate-x-2 ${
                      index % 2 === 0
                        ? "left-0"
                        : "right-0"
                    }`}
                  />

                  {/* Gold circle */}
                  <div
                    className={`absolute bottom-[27%] h-24 w-24 rounded-full bg-[#B79A72]/80 transition-transform duration-700 group-hover:scale-110 sm:h-28 sm:w-28 ${
                      index % 2 === 0
                        ? "-left-10"
                        : "-right-10"
                    }`}
                  />

                  {/* Dot Pattern */}
                  <div
                    className={`absolute top-8 grid grid-cols-3 gap-2 opacity-70 ${
                      index % 2 === 0
                        ? "right-7"
                        : "left-7"
                    }`}
                  >
                    {Array.from({ length: 18 }).map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className="h-1 w-1 rounded-full bg-[#B79A72]"
                      />
                    ))}
                  </div>

                  {/* Decorative line */}
                  <div className="absolute left-6 top-7 h-px w-16 bg-[#B79A72]/60 transition-all duration-500 group-hover:w-24" />
                </div>

                {/* Real Team Image */}
                <div className="absolute inset-x-[8%] bottom-0 top-[8%] flex items-end justify-center">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="relative z-10 h-full w-full object-contain object-bottom grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#0B2A52]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute bottom-4 right-5 z-30 text-xs font-semibold tracking-[0.15em] text-white/70">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-7">

                {/* Name */}
                <h3 className="text-[25px] font-semibold tracking-[-0.025em] text-[#0B2A52]">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm font-semibold tracking-[0.02em] text-[#B79A72]">
                  {member.role}
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-[#0B2A52]/10">
                  <div className="h-full w-8 bg-[#B79A72] transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Description */}
                <p className="max-w-[240px] text-sm leading-6 text-[#0B2A52]/70">
                  {member.description}
                </p>

                {/* Bottom Arrow */}
                <div className="mt-7 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B2A52]/35">
                    SHARPRAYS
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B79A72]/60 transition-all duration-500 group-hover:bg-[#0B2A52] group-hover:border-[#0B2A52]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-500 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M3 7.5H11.5"
                        stroke="#B79A72"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8.5 4.5L11.5 7.5L8.5 10.5"
                        stroke="#B79A72"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 border-t border-[#0B2A52]/10 pt-7 sm:mt-16 sm:flex sm:items-end sm:justify-between sm:pt-8">
          <p className="max-w-[620px] text-sm leading-6 text-[#0B2A52]/55 sm:text-base">
            Different perspectives. Different strengths. One team working
            toward the same thing — making the work matter.
          </p>

          <div className="mt-5 flex items-center gap-3 sm:mt-0">
            <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
            <span className="text-[10px] font-semibold tracking-[0.18em] text-[#0B2A52] sm:text-xs">
              PEOPLE MAKE THE DIFFERENCE.
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full border border-[#B79A72]/10" />
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full border border-[#0B2A52]/5" />
    </section>
  );
}