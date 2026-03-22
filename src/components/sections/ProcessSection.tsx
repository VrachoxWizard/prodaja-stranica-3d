import { siteContent } from "@/data/siteContent"

export function ProcessSection() {
  return (
    <section id="proces" className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Jednostavan proces do novog weba.
          </h2>
          <p className="text-lg text-text-muted">
            Zaboravite na beskrajne sastanke i čekanja. Ovako radimo:
          </p>
        </div>

        <div className="space-y-8">
          {siteContent.processSteps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface/30 backdrop-blur-md text-primary font-bold text-lg group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                {i + 1}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
