export default function HeroSection() {
    return (
        <section className="relative flex min-h-[78vh] w-full flex-col lg:min-h-[82vh] lg:flex-row lg:justify-end py-12 lg:py-16">
  
        {/* Colonne gauche — contenu */}
        <div 
          className="flex flex-col justify-between lg:h-full lg:w-[55%]" 
          style={{paddingLeft: 'clamp(1rem, 5vw, 7rem)', paddingTop: '7rem'}}
        >
  
          <div className="flex flex-col gap-6">
            <p className="m-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4A827] md:text-[11px]">
              ✦ Creative Frontend Developer
            </p>
  
            <h1 className="m-0 font-serif text-6xl font-bold leading-[0.9] tracking-tight text-[#F2EAD8] sm:text-7xl md:text-8xl lg:text-[92px] xl:text-[104px]">
              Laurent
              <br />
              <span className="font-normal italic text-[#E8C653]">Valquin</span>
            </h1>
  
            <p className="m-0 max-w-[480px] font-mono text-sm leading-relaxed tracking-wide text-[#8d8d8d] md:text-base">
              Next.js · TypeScript · UI/UX
              <br />
              <span className="text-[#a3a3a3]">
                Building interfaces where design meets performance.
              </span>
            </p>
  
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-w-[200px] items-center justify-center bg-[#D4A827] px-8 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1e1e1e] no-underline"
              >
                View Projects
              </a>
              <a
                href="mailto:laurentvalquin81@gmail.com"
                className="inline-flex min-w-[200px] items-center justify-center border border-[#ffffff33] bg-transparent px-8 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F2EAD8] no-underline"
              >
                Contact Me
              </a>
            </div>
          </div>
  
          <div className="mt-16 flex items-center gap-4 lg:mt-0">
            <span className="h-px w-16 bg-[#5f5f5f]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#666]">
              Scroll to explore
            </span>
          </div>
  
        </div>
  
        {/* Colonne droite — décoratif */}
        <div className="hidden lg:flex lg:w-[45%] lg:flex-col lg:items-end lg:justify-between">
  
          <div className="flex flex-col gap-3 pt-2">
            <span className="ml-auto block h-px w-44 bg-[#5b5243]" />
            <span className="ml-auto block h-px w-32 bg-[#5b5243]" />
            <span className="ml-auto block h-px w-24 bg-[#5b5243]" />
            <span className="ml-auto block h-px w-44 bg-[#5b5243]" />
            <span className="ml-auto block h-px w-28 bg-[#5b5243]" />
          </div>
  
          <div className="font-mono text-sm tracking-[0.18em] text-[#666]">
            01 / 05
          </div>
  
        </div>
  
      </section>
    );
  }