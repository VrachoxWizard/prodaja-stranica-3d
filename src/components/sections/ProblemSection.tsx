import { siteContent } from "@/data/siteContent"


export function ProblemSection() {
  return (
    <section id="problemi" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-end mb-20">
          <div className="max-w-xl">
            <div className="inline-block text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Analiza Trenutnog Stanja</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1] font-serif transition-all">
              Zašto vaša web stranica <span className="text-primary italic">tiho gubi</span> klijente?
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light">
              Dizajn iz 2018. godine šalje jasnu, ali pogrešnu poruku: da vaše poslovanje više nije relevantno. Prvi dojam se ne popravlja — on se ili kapitalizira ili gubi.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-2xl">
          {siteContent.problems.map((problem, i) => (
            <div key={i} className="bg-background p-10 lg:p-14 flex flex-col gap-8 group hover:bg-surface/50 transition-all duration-500">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-text-dim font-bold group-hover:border-primary/40 group-hover:text-primary transition-colors">
                0{i + 1}
              </div>
              <p className="text-xl text-text-main leading-tight font-medium tracking-tight">
                {problem}
              </p>
              <div className="mt-auto h-0.5 w-12 bg-white/5 group-hover:w-full group-hover:bg-primary/20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
