export const locales = {
  hr: {
    hero: {
      headline: "Vrhunski digitalni nastup koji ulijeva povjerenje i donosi rezultate.",
      subheadline: "Pomažemo hrvatskim poduzetnicima pretvoriti posjetitelje u klijente. Izrađujemo elegantne web stranice koje izgledaju premium, rade besprijekorno i zahtijevaju minimalno vašeg vremena.",
      primaryCta: "Zatražite neobvezujuću procjenu",
      secondaryCta: "Saznajte kako radimo",
      trustBullets: [
        "Fiksne i transparentne cijene bez iznenađenja",
        "Sve na jednom mjestu: dizajn, kod i domena",
        "Dugoročna i pouzdana tehnička podrška"
      ]
    },
    problems: [
      "Zastarjela web stranica tiho tjera klijente konkurenciji i narušava vašu profesionalnost.",
      "Visoke cijene agencija i skriveni troškovi čine modernizaciju weba nedostižnom i rizičnom.",
      "Nemate vremena za dugotrajne tehničke procese, polovična rješenja i testiranje strpljenja."
    ],
    solutions: [
      "Premium dizajn koji trenutačno gradi autoritet i izdvaja vas u vašoj lokalnoj industriji.",
      "Pristupačna investicija s jasnom strukturom – vi točno znate što dobivate i za koju cijenu.",
      "Proces bez trenja: vi samo odobravate vizualne smjerove, a mi preuzimamo apsolutno sve ostalo."
    ],
    packages: [
      {
        id: "izrada",
        name: "Starter Web",
        description: "Brz, elegantan i profesionalan temelj za vašu tvrtku.",
        bestFit: "Za obrtnike i lokalne usluge",
        turnaround: "Spreman u ~7 do 10 dana",
        price: "Od 490 €",
        features: [
          "Dizajn optimiziran za mobitele",
          "Integrirana kontakt i upit forma",
          "Postavljanje Google Analyticsa",
          "Osnovna SEO optimizacija"
        ],
        cta: "Zatražite ponudu",
        highlight: false
      },
      {
        id: "redizajn",
        name: "Pro Premium",
        description: "Moćna prodajna stranica dizajnirana za maksimalnu konverziju i vizualni autoritet.",
        bestFit: "Za tvrtke spremne na rast i izdvajanje",
        turnaround: "Spreman u ~14 do 21 dan",
        price: "Od 890 €",
        features: [
          "Sve što nudi Starter paket",
          "Dizajn više različitih podstranica",
          "Kopirajting – pomoć s tekstovima",
          "Premium animacije i dubinski SEO"
        ],
        cta: "Preporučeni izbor",
        highlight: true
      },
      {
        id: "odrzavanje",
        name: "Dugoročni Partner",
        description: "Potpuni mir uz redovno održavanje, sigurnosne nadogradnje i sitne izmjene.",
        bestFit: "Za kontinuiranu stabilnost i podršku",
        turnaround: "Stalna mjesečna tehnička zaštita",
        price: "Prema dogovoru",
        features: [
          "Redovne sigurnosne provjere",
          "Ažuriranja sadržaja i objava",
          "Prioritetni popravci i dodaci",
          "Savjeti za digitalni rast"
        ],
        cta: "Saznajte više",
        highlight: false
      }
    ],
    audiences: [
      "Lokalne Usluge i Obrti",
      "Terapeuti i Ordinacije",
      "Beauty centri i Saloni",
      "Turizam i Apartmani",
      "Agencije i Konzultanti"
    ],
    processSteps: [
      { title: "1. Strategija i ciljevi", description: "Slušamo o vašem poslovanju, ciljanoj publici i predlažemo idealnu strukturu weba." },
      { title: "2. Dizajn i usklađivanje", description: "Izrađujemo moderan dizajn. Vi pregledavate radnu verziju i odobravate ključne vizualne elemente." },
      { title: "3. Izrada i testiranje", description: "Programiramo dogovoreno te pomno testiramo sve funkcije na računalima i pametnim telefonima." },
      { title: "4. Lansiranje i podrška", description: "Stranica ide aktivno na vašu domenu. Ostajemo dostupni kao vaš tehnički oslonac za budućnost." }
    ],
    faqs: [
      { question: "Koliko mog vremena zahtijeva cijeli ovaj proces?", answer: "Vaš angažman je zaista minimalan. Nakon kratkog uvodnog sastanka i dostave radnih materijala (slike, usluge), mi preuzimamo sav teški posao. Dobivate gotov prijedlog dizajna na uvid." },
      { question: "Što ako nemam profesionalne fotografije i spremne tekstove?", answer: "Nema problema. Često pomažemo strukturirati tekstove tako da jasno naglašavaju vaše prednosti. Što se tiče slika, možemo koristiti licencirane premium fotografije dok ne osigurate vlastite." },
      { question: "Jesam li ja vlasnik svoje domene i nove web stranice nakon izrade?", answer: "Apsolutno. Vi ste jedini vlasnik domene, hostinga i cijele web stranice. Mi samo radimo u vaše ime. Nikada vas ne zaključavamo u ugovore iz kojih ne možete izaći." },
      { question: "Pomažete li i nakon što je web stranica napravljena i javno puštena?", answer: "Da, uz izradu nudimo pakete redovnog održavanja, sigurnosnih nadogradnji i osvježavanja sadržaja kako biste vi imali mir i fokusirali se isključivo na svoj posao." }
    ],
    contact: {
      title: "Spremni za ozbiljniji i moderniji digitalni nastup?",
      subtitle: "Ispunite formu ispod, a mi ćemo se javiti s konkretnim prijedlogom i potpuno besplatnom procjenom unutar 24 sata.",
      buttonText: "Pošaljite upit bez obaveza",
      microcopy: "Razgovor ne stvara nikakvu obvezu niti skriveni trošak. Čuvamo vašu privatnost."
    }
  },
  en: {
    hero: {
      headline: "A professional website that builds trust and drives inquiries.",
      subheadline: "We help small and medium businesses make a powerful first impression. No hidden costs, no technical jargon - we manage the entire process.",
      primaryCta: "Get a free quote",
      secondaryCta: "How we work",
      trustBullets: [
        "Focus on growing your inquiries",
        "Everything in one place - design & code",
        "Long-term support and maintenance"
      ]
    },
    problems: [],
    solutions: [],
    packages: [],
    audiences: [],
    processSteps: [],
    faqs: [],
    contact: {
      title: "Ready for a serious digital upgrade?",
      subtitle: "Fill out the short form below and we will get back to you with a proposal within 24 hours.",
      buttonText: "Send inquiry",
      microcopy: "Your data is 100% safe. No obligations attached."
    }
  }
};

export const siteContent = locales.hr;
