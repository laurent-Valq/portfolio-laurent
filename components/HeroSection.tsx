// components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section className="mx-auto flex min-h-[78vh] w-full max-w-[1200px] flex-col justify-between px-6 py-12 sm:px-10 md:px-14 lg:flex-row lg:px-20 lg:py-20">
        <div className="flex w-full flex-col justify-between lg:w-[55%]">
          <div className="flex flex-col gap-5">
            <p className="m-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[#D4A827] md:text-[11px]">
              ✦ Creative Frontend Developer
            </p>
  
            <h1 className="m-0 font-serif text-5xl font-bold leading-[0.92] tracking-tight text-[#F2EAD8] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px]">
              Laurent
              <br />
              <span className="font-normal italic text-[#E8C653]">Valquin</span>
            </h1>
  
            <p className="m-0 max-w-md font-mono text-sm leading-relaxed tracking-wide text-[#888] md:text-base">
              Next.js · TypeScript · Tailwind
              <br />
              <span className="text-[#aaa]">
                Building interfaces where design meets performance.
              </span>
            </p>
  
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-[#D4A827] px-6 py-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1e1e1e] no-underline md:text-[11px] lg:px-8"
              >
                View Projects
              </a>
  
              <a
                href="mailto:laurentvalquin81@gmail.com"
                className="inline-flex items-center justify-center border border-[#ffffff33] bg-transparent px-6 py-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#F2EAD8] no-underline md:text-[11px] lg:px-8"
              >
                Contact Me
              </a>
            </div>
          </div>
  
          <div className="mt-10 hidden items-center gap-4 lg:flex">
            <span className="h-px w-14 bg-[#5e5e5e]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666]">
              Scroll to explore
            </span>
          </div>
        </div>
  
        <div className="mt-12 flex w-full items-end justify-between lg:mt-0 lg:w-[45%] lg:flex-col lg:items-end lg:justify-center">
          <div className="hidden lg:flex flex-col gap-3 pt-10">
            <span className="ml-auto block h-px w-40 bg-[#5b5243]" />
            <span className="ml-auto block h-px w-32 bg-[#5b5243]" />
            <span className="ml-auto block h-px w-24 bg-[#5b5243]" />
            <span className="ml-auto block h-px w-40 bg-[#5b5243]" />
            <span className="ml-auto block h-px w-28 bg-[#5b5243]" />
          </div>
  
          <div className="mt-8 self-end font-mono text-sm tracking-[0.18em] text-[#666] lg:mt-20">
            01 / 05
          </div>
        </div>
      </section>
    );
  }