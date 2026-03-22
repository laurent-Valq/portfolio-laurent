export default function HeroSection() {
    return (
        <section className="relative flex min-h-[78vh] w-full flex-col lg:min-h-[82vh] lg:flex-row lg:justify-end py-12 lg:py-16"
        style={{paddingBottom: '4rem'}}>
  
        {/* Colonne gauche — contenu */}
        <div 
          className="flex flex-col justify-between lg:h-full lg:w-[55%]" 
          style={{paddingLeft: 'clamp(1rem, 5vw, 7rem)', paddingTop: '7rem'}}
        >
  
          <div className="flex flex-col gap-6">
            <p className="m-0 font-mono text-[19px] uppercase tracking-[0.22em] text-[#D4A827] md:text-[21px]">
              ✦ Creative Frontend Developer
            </p>
  
            <h1 className="m-0 font-serif text-6xl font-bold leading-[0.9] text-[#F2EAD8] sm:text-7xl md:text-8xl lg:text-[92px] xl:text-[104px]">
              Laurent
              <br />
              <span className="font-bold italic text-[#E8C653] tracking-tighter">Valquin</span>
            </h1>
  
            <p className="m-0 max-w-[480px] font-mono text-[20px] leading-relaxed tracking-wide text-[#c8c6c6]">
              Next.js · TypeScript · UI/UX
              <br />
              <span className="text-[#8d8d8d]">
                Building interfaces where design meets performance.
              </span>
            </p>
  
            <div className="flex flex-col gap-4 sm:flex-row"
            style={{marginTop: '5rem'}}
            >
              <a
                href="#projects"
                className="inline-flex min-w-[240px] h-[56px] items-center justify-center bg-[#D4A827] px-10 py-5 font-mono text-[14px] font-semibold uppercase tracking-[0.16em] text-[#1e1e1e] no-underline"
              >
                View Projects
              </a>
              <a
                href="mailto:laurentvalquin81@gmail.com"
                className="inline-flex min-w-[220px] h-[56px] items-center justify-center border border-[#ffffff33] bg-transparent px-10 py-5 font-mono text-[14px] uppercase tracking-[0.16em] text-[#F2EAD8] no-underline"
              >
                Contact Me
              </a>
            </div>
          </div>
  
          <div className="mt-16 flex items-center gap-4 lg:mt-0"
          style={{marginTop: '7rem'}}>
            <span className="h-px w-16 bg-[#5f5f5f]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#666]">
              Scroll to explore
            </span>
          </div>
  
        </div>
  
        {/* Colonne droite — décoratif */}
        <div className="hidden lg:flex lg:w-[45%] lg:flex-col lg:items-end lg:justify-between">
  
          <div className="flex flex-col gap-3 pt-2"
          style={{paddingRight: '15rem', paddingTop: '25rem'}}
          >
            <span className="block h-px w-90 self-end bg-[#5b5243]" />
            <span className="block h-px w-70 self-end bg-[#5b5243]" />
            <span className="block h-px w-100 self-end bg-[#5b5243]" />
            <span className="block h-px w-55 self-end bg-[#5b5243]" />
            <span className="block h-px w-80 self-end bg-[#5b5243]" />
          </div>
  
          <div className="font-mono text-sm tracking-[0.18em] text-[#626262]"
          style={{paddingRight: '15rem', paddingBottom: '4rem'}}
          >
            01 / 05
          </div>
  
        </div>
  
      </section>
    );
  }