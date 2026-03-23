# Goal Description
Transform the existing React/Vite landing page into a highly optimized, conversion-driven backend focused on lead generation for a Croatian digital services business. This involves removing placeholder logic (like the fake contact form), fixing UX bugs (broken anchors), upgrading sections (Hero, Pricing, Portfolio) to provide concrete proof and faster decision-making, and refining the 3D aesthetic to ensure premium feel without sacrificing mobile performance. SEO-related tasks are explicitly excluded as requested.

## User Review Required
> [!IMPORTANT]
> **Contact Form Provider:** This plan proposes using **Web3Forms** (or a similar no-backend provider like Formspree) for the real contact submission path, as it requires zero backend infrastructure and aligns perfectly with the current static/Vite stack.
> **Language Focus:** All English localization logic will be stripped or hidden, prioritizing a single, polished Croatian experience to prevent any "half-finished" appearance.

## Proposed Changes

---

### Phase 0: Immediate Blockers

#### [MODIFY] `src/components/sections/ContactSection.tsx` // Or similar depending on exact path
- Replace `setTimeout` fake submission with an actual `fetch` call to Web3Forms/Formspree.
- Add real loading, success, and error states.
- Capture intents (e.g., specific package selection).
- Add direct WhatsApp/Email contact alternatives near the form.

#### [MODIFY] `src/components/sections/HeroSection.tsx`
- Fix the broken anchor link (`#process` -> `#proces`).
- Sharpen the Croatian headline and adjust CTAs for immediate clarity.

---

### Phase 1: Conversion Uplift

#### [MODIFY] `src/components/sections/PricingSection.tsx`
- Upgrade pricing cards into a buying tool with clear "best fit for" lines, turnaround estimates, and strong CTA hierarchy.

#### [MODIFY] `src/components/sections/PortfolioSection.tsx` // Remapping to a concrete proof section
- Rename and redesign as a concrete proof section (e.g., "Primjeri projekata").
- Present mock cases or placeholder before/after transformations rather than abstract principles.

---

### Phase 2: Trust and Polish

#### [MODIFY] `src/components/layout/Footer.tsx`
- Enhance the footer with a strong positioning statement, direct contact methods, and trust links.

#### [MODIFY] `src/components/canvas/Environment.tsx` // Or similar 3D root component
- Refine 3D elements for performance. Ensure they don't overpower the CTAs or negatively impact mobile LCP. Use `Suspense` and eager loading adjustments.

#### [MODIFY] `src/App.tsx` & Layout files
- Ensure section rhythm is optimal with intentional vertical spacing.
- Include a sticky mobile CTA if feasible without cluttering the screen.

## Verification Plan

### Automated Tests
- Run `npm run lint` to catch any TypeScript errors.
- Run `npm run build` to verify that Vite bundles correctly without issues.

### Manual Verification
- **Lead Capture:** Submit a test inquiry through the Contact form and verify the success state and payload delivery.
- **Navigation:** Click all internal anchors (especially the Hero secondary CTA) to verify smooth scrolling is functional.
- **Responsiveness & Performance:** Test on mobile viewports (via DevTools) to ensure the 3D background degrades or simplifies gracefully, and that spacing remains clean and readable.
