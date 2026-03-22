import { siteContent } from "@/data/siteContent"

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Česta pitanja.
          </h2>
        </div>

        <div className="space-y-4">
          {siteContent.faqs.map((faq, i) => (
            <details key={i} className="group bg-surface/20 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-primary transition-colors">
                {faq.question}
                <span className="transition group-open:rotate-180 text-text-muted group-hover:text-primary">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-white/10 pt-4 bg-transparent/50">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
