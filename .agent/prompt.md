# ROLE
You are a principal frontend engineer, design systems architect, and elite landing-page UI designer.

# OBJECTIVE
Build a **premium Landing Page Theme Gallery**: a single Next.js app that lets users switch between **4–5 radically different landing page themes**, where the entire page identity changes with each theme.

This project is a **visual design and front-end architecture showcase**, not a business app.

# STACK
Use exactly:
- Next.js 16 + App Router + TypeScript
- React 19
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Motion for React (Framer Motion)

Optional:
- decorative section patterns inspired by Magic UI / Aceternity UI
- Lucide icons
- theme-aware local mock data only

No backend. No database. No auth. No API dependency required.

# PRIMARY SUCCESS CRITERIA
The final result must look like a **premium front-end portfolio piece**.

It must:
- be mobile-first
- support dark mode
- feel polished on mobile, tablet, and desktop
- use strong visual hierarchy
- have smooth, tasteful motion
- keep excellent spacing discipline
- have accessible contrast and keyboard-friendly interactions
- make each theme feel like a different brand, not a recolor

# THEMES TO IMPLEMENT
Implement at least 4 themes, preferably 5:

1. Fintech SaaS
2. Local Café
3. Fitness Coach
4. AI Startup
5. Photographer Portfolio

# HARD RULE
Do **not** create one shared landing page and only swap colors/text.  
Each theme must also differ in:
- typography mood
- background treatment
- card style
- hero composition
- imagery direction
- CTA styling
- copy tone
- section pacing
- decorative effects

# OUTPUT FORMAT
Return a complete project with:
- clear file/folder structure
- all core source files
- reusable typed theme config
- reusable section components
- theme provider
- responsive styling
- polished mock content

# REQUIRED FILE STRUCTURE
Use a structure close to this:

- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/layout/navbar.tsx`
- `components/theme/theme-provider.tsx`
- `components/theme/theme-switcher.tsx`
- `components/theme/theme-preview.tsx`
- `components/sections/hero.tsx`
- `components/sections/logo-strip.tsx`
- `components/sections/features.tsx`
- `components/sections/showcase.tsx`
- `components/sections/pricing.tsx`
- `components/sections/faq.tsx`
- `components/sections/final-cta.tsx`
- `components/command/theme-command.tsx` (optional)
- `lib/themes.ts`
- `lib/theme-content.ts`
- `lib/types.ts`
- `lib/utils.ts`

You may adapt names slightly, but preserve this architecture.

# THEME SYSTEM
Create a strongly typed theme system in `lib/themes.ts`.

Each theme object must include:
- metadata: `id`, `name`, `description`, `tagline`
- colors: `primary`, `secondary`, `accent`, `background`, `surface`, `border`, `text`
- gradients / glow settings
- radius + shadow tokens
- font pairing
- button variant styling
- card styling rules
- badge styling rules
- section-specific visual mood
- hero media direction
- showcase layout style
- pricing emphasis style
- faq tone
- final CTA treatment

Also create theme-specific content in `lib/theme-content.ts`:
- hero headline/subheadline/CTAs
- logo strip items
- features
- showcase items
- pricing tiers
- FAQ items
- final CTA copy

# PROVIDER + CSS VARIABLES
Create a `ThemeProvider` and `useTheme()` hook.

Requirements:
- store active theme in state
- expose `setTheme(themeId)`
- apply CSS variables to the root wrapper or body
- enable theme-aware styling through CSS variables and Tailwind utility composition
- make theme switching instant but visually smoothed by motion

# PAGE SHELL
The `/` page must contain:
- sticky or semi-sticky navbar
- project title
- theme switcher
- theme description
- landing page preview area
- optional command palette trigger
- smooth scrolling between sections

# NAVBAR
Include:
- “Landing Page Theme Gallery” branding
- theme switcher using shadcn Tabs or Select
- optional dark mode toggle
- optional “About this project” dialog

# MOTION DIRECTION
Use Motion for React tastefully and consistently.

Required:
- `AnimatePresence` for switching theme content
- enter/exit animations using fade + slight Y translation
- section reveal animations using `whileInView`
- hover/tap interactions on buttons/cards
- staggered child animations in hero/features/pricing/showcase

Optional:
- scroll-linked parallax using `useScroll`
- animated spotlight / gradient halos
- cursor-reactive background accents

Important:
- keep motion premium, not noisy
- prefer transform/opacity-based animation
- avoid over-animating every element

# GLOBAL PAGE SECTIONS
All themes must render these sections in this order:

1. Hero
2. Social Proof / Logo Strip
3. Features
4. Showcase / Gallery
5. Pricing / Offer
6. FAQ
7. Final CTA

# SECTION REQUIREMENTS

## 1. Hero
Must include:
- large premium headline
- supporting paragraph
- two CTAs
- theme-specific visual asset or mockup treatment
- layered visual background
- staggered text/media entrance animation

## 2. Social Proof / Logo Strip
- muted fake brand logos
- hover refinement only
- restrained and premium

## 3. Features
- 3 or 4 feature cards
- icon + title + description
- hover lift / glow / tilt depending on theme
- no generic repeated card treatment across all themes

## 4. Showcase / Gallery
This is the key differentiation section.

Per theme:
- Fintech: dashboard/product/device frames
- Café: menu cards, drinks, interior, editorial food blocks
- Fitness: training snapshots, transformation-style cards, performance blocks
- AI Startup: futuristic interface previews, workflow cards, glowing panels
- Photographer: masonry/editorial photo grid with elegant hover captions

## 5. Pricing / Offer
- 2 or 3 pricing cards
- one featured tier
- bold CTA hierarchy
- visually distinctive per theme

## 6. FAQ
- use shadcn Accordion
- keep answers concise and believable
- styling must match theme mood

## 7. Final CTA
- strong closing strip
- premium background treatment
- one main CTA
- one secondary supporting line

# VISUAL DIRECTION PER THEME

## Fintech SaaS
- deep navy base
- mint / teal accents
- trustworthy and modern
- product-led design
- subtle glass or soft dashboard surfaces

## Local Café
- warm cream background
- brown / terracotta / amber accents
- cozy editorial style
- handcrafted, welcoming atmosphere
- softer edges and warmer shadows

## Fitness Coach
- dark performance aesthetic
- neon green or electric accent
- bold contrast
- athletic energy
- sharper geometry and stronger CTA emphasis

## AI Startup
- dark blue/purple gradient environment
- cyan glow accents
- futuristic glass panels
- sharp, intelligent, premium product feel

## Photographer Portfolio
- minimalist editorial layout
- restrained accent palette
- image-first composition
- elegant typography
- quieter, more luxurious motion

# DESIGN STANDARDS
Use modern typography through Next.js font imports.  
Define and apply a real type scale.  
Maintain disciplined spacing and alignment.  
Use visual restraint.  
Avoid clutter.  
Avoid generic “template” vibes.  
Avoid placeholder lorem ipsum feel.  
Write concise, believable branded copy.

# COMPONENT USAGE
Use shadcn/ui where appropriate:
- Button
- Card
- Badge
- Tabs or Select
- Accordion
- Dialog
- Command (optional)

Restyle them aggressively so they feel native to each theme.

# OPTIONAL PREMIUM EXTRAS
If time allows, add:
- command palette with Cmd/Ctrl+K
- theme thumbnails in switcher
- about modal
- subtle grain, glow, orbit, or spotlight effects
- image quick-view dialog
- theme transition progress hint

# DO NOT
- do not add backend logic
- do not add auth
- do not add unnecessary libraries
- do not make all themes share the same layout styling
- do not overuse glassmorphism everywhere
- do not create messy gradients
- do not sacrifice mobile polish for desktop visuals

# FINAL ACCEPTANCE CHECK
Before finishing, ensure:
- theme switching feels dramatic and premium
- every theme has a distinct identity
- motion is smooth and intentional
- mobile layout is excellent
- code is typed and organized
- the result looks like a real showcase project worthy of a portfolio

Now generate the complete project.