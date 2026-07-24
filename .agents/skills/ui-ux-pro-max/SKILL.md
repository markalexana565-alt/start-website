---
name: ui-ux-pro-max
description: Ultimate UI/UX skill for AI agents presentation. Focus on responsive design, clean blocks, whitespace, smooth micro-interactions, and spring animations. Component-based approach for perfect code.
---

# UI/UX Pro Max: AI Agents Presentation Skill

> For high-tech, premium presentations about AI agents. Every rule is contextual. Read the brief first, then apply what fits.

---

## 0. PROJECT CONTEXT (Read First)

Before any code, understand:
1. **Presentation type:** AI agents demo, pitch deck, product showcase, or educational material.
2. **Audience:** Tech-savvy viewers, potential clients, investors, or developers.
3. **Vibe:** Futuristic, clean, professional, innovative.
4. **Tech stack:** Pure HTML/CSS/JS or React/Next.js.
5. **Brand constraints:** Colors, fonts, logos if provided.

### 0.A Output a one-line "Design Read"
Before code, state: **"Reading this as: AI agents presentation for [audience], with a [vibe] language, leaning toward [design direction]."**

Example: *"Reading this as: AI agents pitch for investors, with a futuristic-clean language, leaning toward dark mode + neon accents + GSAP scroll animations."*

---

## 1. CORE PRINCIPLES

### 1.1 Responsive Design (Mandatory)
- **Mobile-first approach.** Start with `sm:` breakpoints, then scale up.
- **Fluid typography.** Use `clamp()` for font sizes: `font-size: clamp(1rem, 2.5vw, 1.5rem)`.
- **Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`.
- **No fixed widths on containers.** Use `max-w-[1400px] mx-auto` or `max-w-7xl`.
- **Test on real devices.** Never assume "it'll work."

### 1.2 Clean Block Structure
- **Component-based architecture.** Every section is an independent, reusable block.
- **Clear visual hierarchy.** Use spacing, size, and color to guide the eye.
- **Minimalist containers.** Avoid heavy borders; use whitespace and subtle dividers.
- **Grid over Flex-Math.** Use CSS Grid for complex layouts: `grid grid-cols-1 md:grid-cols-3 gap-6`.

### 1.3 Whitespace (Breathing Room)
- **Generous padding.** Section padding: `py-16 md:py-24 lg:py-32`.
- **Line height.** Body text: `leading-relaxed` (1.625). Headlines: `leading-tight` (1.25).
- **Max content width.** Body copy: `max-w-[65ch]` for readability.
- **Negative space as design element.** Empty areas are intentional, not accidental.

---

## 2. ANIMATION & MICRO-INTERACTIONS

### 2.1 Animation Strategy
- **Pure HTML/CSS/JS projects:** Use **GSAP** via CDN.
- **React/Next.js projects:** Use **Framer Motion** (or `motion/react`).
- **No mixed libraries.** Pick one per project.

### 2.2 Micro-Interactions (Smooth & Premium)
- **Hover effects:** Subtle scale (`scale-[1.02]`), color shift, or shadow elevation.
- **Click feedback:** `active:scale-[0.98]` for tactile feel.
- **Focus states:** Visible focus rings for accessibility.
- **Loading states:** Skeleton loaders matching final layout shape.

### 2.3 Spring Animations (Physics-Based)
- **Spring physics for natural motion.** Use `type: "spring"` with:
  - `stiffness: 100` (default), `damping: 20` (default) for smooth entrances.
  - `stiffness: 300`, `damping: 30` for snappy interactions.
- **Scroll-triggered reveals.** Elements animate in as they enter viewport.
- **Staggered entrances.** Sequential reveals for lists/grids: `delay: i * 0.1`.
- **Reduced motion support.** Honor `prefers-reduced-motion: reduce` by disabling animations.

### 2.4 GSAP Implementation (for HTML projects)
```html
<!-- Include GSAP via CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<script>
gsap.registerPlugin(ScrollTrigger);

// Example: Fade-in on scroll
gsap.from(".fade-in", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",
  }
});

// Example: Spring animation
gsap.from(".spring-element", {
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.3)",
});
</script>
```

### 2.5 Framer Motion Implementation (for React)
```tsx
"use client";
import { motion, useReducedMotion } from "motion/react";

export function FadeIn({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SpringCard({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? {} : { scale: 1.02 }}
      whileTap={reduce ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 3. COMPONENT APPROACH

### 3.1 Independent Blocks
- **Every section is a self-contained component.** No side effects, no global state.
- **Props for content.** Headlines, images, CTAs passed as props.
- **Theme variants.** Light/dark mode via props or CSS variables.
- **Reusable across pages.** Design components to work in different contexts.

### 3.2 Component Structure
```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Section.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Demo.tsx
│   └── Contact.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Badge.tsx
└── animations/
    ├── FadeIn.tsx
    └── SpringHover.tsx
```

### 3.3 Code Quality
- **TypeScript for type safety.** Props interfaces for all components.
- **No inline styles.** Use Tailwind utilities or CSS modules.
- **Accessibility first.** ARIA labels, semantic HTML, keyboard navigation.
- **Performance lazy-load.** Images with `loading="lazy"`, components with `dynamic()`.

---

## 4. DESIGN DIRECTION FOR AI AGENTS

### 4.1 Visual Language
- **Dark mode default.** Tech/futuristic vibe: `bg-zinc-950` or `bg-gray-900`.
- **Accent colors:** Neon cyan (`#00f0ff`), electric blue (`#3b82f6`), or vibrant purple (`#8b5cf6`).
- **Gradients:** Subtle, not overwhelming. `bg-gradient-to-br from-cyan-500/10 to-blue-500/10`.
- **Glassmorphism:** Use `backdrop-blur-md` with `bg-white/5` for cards.
- **Monospace for tech feel:** `font-mono` for code snippets, labels, or stats.

### 4.2 Typography
- **Display font:** Inter, Geist, or Satoshi for clean modern look.
- **Mono font:** JetBrains Mono or Fira Code for code/tech elements.
- **Hierarchy:** Large headlines (`text-5xl md:text-7xl`), concise subheads, body text.

### 4.3 Layout Patterns
- **Hero:** Full viewport height (`min-h-[100dvh]`), centered or split layout.
- **Features:** Grid of cards with icons, minimal text.
- **Demo:** Interactive showcase with live previews or screenshots.
- **Stats:** Large numbers with labels, animated counters on scroll.

---

## 5. PERFORMANCE & ACCESSIBILITY

### 5.1 Performance
- **Core Web Vitals targets:**
  - LCP < 2.5s (hero image optimized)
  - INP < 200ms (heavy work off main thread)
  - CLS < 0.1 (reserve space for images)
- **Image optimization:** Use `next/image` or `<picture>` with WebP.
- **Code splitting:** Lazy-load non-critical components.

### 5.2 Accessibility
- **WCAG AA contrast.** Minimum 4.5:1 for body text.
- **Keyboard navigation.** All interactive elements focusable.
- **Screen reader support.** ARIA labels, alt text, semantic HTML.
- **Reduced motion.** Disable animations for users who prefer it.

---

## 6. ANTI-DEFAULT DISCIPLINE

### 6.1 Avoid AI Tells
- **No neon glows by default.** Use inner borders or subtle shadows.
- **No pure black/white.** Use off-black (`zinc-950`) and off-white (`zinc-50`).
- **No generic gradients.** Keep them subtle and brand-aligned.
- **No excessive animations.** Motion must communicate, not distract.

### 6.2 Premium Touches
- **Micro-interactions on every interactive element.** Buttons, cards, links.
- **Scroll-reveal for key sections.** Hero, features, demo.
- **Consistent spacing rhythm.** 8px grid system for padding/margins.
- **Pixel-perfect details.** Alignment, consistency, no visual glitches.

---

## 7. CHECKLIST BEFORE SHIP

- [ ] Responsive on mobile, tablet, desktop
- [ ] All animations smooth (60fps)
- [ ] Reduced motion supported
- [ ] Contrast ratios pass WCAG AA
- [ ] Keyboard navigation works
- [ ] Images optimized and lazy-loaded
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Component reusability verified
- [ ] Dark/light mode consistency

---

## 8. TOOLS & RESOURCES

### 8.1 Recommended Libraries
- **Animation:** GSAP (HTML), Framer Motion (React)
- **Icons:** Phosphor Icons, Radix Icons
- **Fonts:** Google Fonts (self-hosted), Fontsource
- **CSS:** Tailwind CSS v4

### 8.2 CDN Links (for HTML projects)
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

**Remember:** Every animation must have a purpose. Every component must be reusable. Every pixel must be intentional. This is a premium AI presentation — it should feel like the future.