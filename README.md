# Wilson Speed Academy - Technical Documentation & Architecture Guide

> **Elite speed training website built with Next.js 14** - A comprehensive reference for all development, architecture decisions, and best practices.

## 🏗️ **Project Overview**

Wilson Speed Academy is a modern, high-performance website for elite speed training services by Tyriq Wilson, built using Next.js 14 with TypeScript. This documentation serves as the complete reference for all architectural decisions, improvements, and development guidelines.

### **Key Features**
- 🎯 **Performance-First**: Optimized for Core Web Vitals and user experience
- 🔍 **SEO-Optimized**: Structured data, meta tags, and search engine optimization
- ♿ **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- 📱 **Mobile-First**: Responsive design with mobile sticky CTA
- 🎨 **Design System**: Consistent WSA brand colors and typography
- ⚡ **Error Handling**: Comprehensive error boundaries and loading states

---

## 🏛️ **Architecture & Tech Stack**

### **Core Technologies**
```
Next.js 14 (App Router)     → React framework with latest features
TypeScript                  → Type safety and better developer experience
Tailwind CSS               → Utility-first styling with custom design system
Framer Motion              → Smooth animations and transitions
shadcn/ui                  → High-quality, accessible UI components
```

### **Project Structure**
```
wilson-speed-academy/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Homepage with hero, stats, testimonials
│   ├── globals.css              # Global styles and design system
│   ├── about/page.tsx           # About Tyriq Wilson
│   ├── programs/page.tsx        # Training programs and pricing
│   └── book/page.tsx            # Booking system with Calendly
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui base components
│   ├── Header.tsx               # Sticky navigation with mobile menu
│   ├── Footer.tsx               # Site footer with contact info
│   ├── Hero.tsx                 # Video hero section with animations
│   ├── ErrorBoundary.tsx        # Error handling with fallback UI
│   ├── Loading.tsx              # Reusable loading states
│   ├── StructuredData.tsx       # SEO structured data components
│   └── [other components]       # Feature-specific components
├── lib/                         # Utility functions and configurations
│   ├── utils.ts                 # Common utilities (cn, etc.)
│   └── env.ts                   # Environment variable validation
├── public/                      # Static assets
│   ├── images/                  # Optimized images and logos
│   ├── robots.txt               # Search engine crawling rules
│   └── sitemap.xml              # Auto-generated sitemap
└── [config files]               # Next.js, Tailwind, ESLint, etc.
```

---

## 🎨 **Design System & Brand Guidelines**

### **Color Palette**
```css
/* Primary Brand Colors */
--wsa-black: #151515        /* Headlines, primary text */
--wsa-blue: #5DA5C8         /* Primary accent, CTAs */
--wsa-light-blue: #87CEEB   /* Secondary accent */
--wsa-white: #FEFEFE        /* Background, contrast text */

/* Usage Guidelines */
- Primary CTAs: wsa-blue background with white text
- Headlines: wsa-black in light mode, wsa-white in dark mode
- Accent elements: wsa-blue for highlights and active states
```

### **Typography System**
```css
/* Fonts */
--font-headline: Montserrat (700 weight, 0.05em letter-spacing)
--font-body: Open Sans (400 weight, normal spacing)

/* Usage */
- All headings (h1-h6): font-headline class
- Body text: font-body class (default)
- Headlines: High contrast, clear hierarchy
```

### **Spacing & Layout**
```css
/* Key Spacing */
pt-16: Top padding for non-home pages (header spacing)
py-16: Standard section padding
container mx-auto max-w-screen-xl px-4: Standard container
```

---

## 🚀 **Performance Optimizations**

### **Image Optimization**
```javascript
// next.config.js optimizations
images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

### **CSS Performance**
```css
/* Key optimizations in globals.css */
font-feature-settings: 'rlig' 1, 'calt' 1;  /* Better font rendering */
content-visibility: auto;                     /* Optimized image loading */
scroll-behavior: smooth;                      /* Smooth page navigation */
text-rendering: optimizeLegibility;           /* Enhanced text quality */
```

### **Bundle Optimization**
- **Homepage**: 9.88 kB (148 kB First Load JS)
- **About**: 291 B (92.4 kB First Load JS)
- **Programs**: 184 B (99.1 kB First Load JS)
- **Book**: 1.42 kB (95.2 kB First Load JS)

---

## 🔍 **SEO & Structured Data**

### **Structured Data Implementation**
```typescript
// businessStructuredData in components/StructuredData.tsx
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wilson Speed Academy",
    "founder": {
        "@type": "Person",
        "name": "Tyriq Wilson",
        "alumniOf": "St. Edwards University"
    },
    "serviceType": "Athletic Training",
    "priceRange": "$75-$500"
}
```

### **Meta Tags Strategy**
```typescript
// Page-specific metadata pattern
export const metadata: Metadata = {
    title: 'Page Title | Wilson Speed Academy',
    description: 'Specific page description for SEO',
    keywords: 'relevant, keywords, for, page',
    openGraph: { /* Social sharing optimization */ }
}
```

### **Sitemap Configuration**
```javascript
// Custom priorities in next-sitemap.config.js
'/': 1.0,           // Homepage - highest priority
'/programs': 0.9,   // Programs - high priority
'/book': 0.9,       // Booking - high priority
'/about': 0.8,      // About - medium-high priority
```

---

## 🛠️ **Component Architecture**

### **Error Handling Pattern**
```typescript
// ErrorBoundary.tsx - Comprehensive error handling
class ErrorBoundary extends React.Component {
    // Catches JavaScript errors anywhere in child component tree
    // Provides fallback UI with refresh option
    // Logs errors appropriately based on environment
}
```

### **Loading States Pattern**
```typescript
// Loading.tsx - Reusable loading component
interface LoadingProps {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'spinner' | 'pulse' | 'dots'
    className?: string
}
```

### **Page Layout Pattern**
```typescript
// Standard page structure
<div className="min-h-screen">
    {/* Hero Section */}
    <section className="pt-16 pb-16">  {/* Note: pt-16 for header spacing */}
        <div className="container mx-auto max-w-screen-xl px-4">
            {/* Page content */}
        </div>
    </section>
</div>
```

---

## ♿ **Accessibility Guidelines**

### **Focus Management**
```css
/* Enhanced focus states */
:focus-visible {
    @apply outline-2 outline-offset-2 outline-wsa-blue;
}
```

### **ARIA Implementation**
```typescript
// Required ARIA attributes
aria-label="Descriptive label for screen readers"
role="button" | "navigation" | "main" | etc.
```

### **Keyboard Navigation**
- All interactive elements must be keyboard accessible
- Focus indicators clearly visible
- Logical tab order maintained

---

## 🔧 **Development Guidelines**

### **Component Creation Standards**
```typescript
// Component template
interface ComponentNameProps {
    // Define props with TypeScript
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
    // Component logic
    return (
        <div className="semantic-css-classes">
            {/* JSX content */}
        </div>
    )
}

export default ComponentName
```

### **CSS Class Organization**
```css
/* Tailwind class order */
1. Layout (flex, grid, block, etc.)
2. Positioning (absolute, relative, etc.)
3. Spacing (p-, m-, space-)
4. Sizing (w-, h-, max-)
5. Typography (text-, font-)
6. Visual (bg-, border-, shadow-)
7. Interactive (hover:, focus:, etc.)
```

### **Environment Variables**
```typescript
// lib/env.ts - Environment validation pattern
export const env = {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    CALENDLY_USERNAME: process.env.NEXT_PUBLIC_CALENDLY_USERNAME || 'wilsonspeedacademy',
}
```

---

## 📝 **Recent Improvements & Features**

### **✅ Completed Enhancements**

#### **Code Quality**
- ✅ **ErrorBoundary**: Comprehensive error handling with fallback UI
- ✅ **Loading Component**: Reusable loading states (spinner, pulse, dots)
- ✅ **TypeScript**: Clean types, no unused variables
- ✅ **ESLint**: All warnings resolved

#### **User Experience**
- ✅ **Header Spacing**: Fixed spacing issues on all non-home pages with `pt-16`
- ✅ **Calendly Integration**: Updated to use `/consultation` slug
- ✅ **Loading States**: Smooth transitions and error handling for Calendly
- ✅ **Mobile Optimization**: Responsive design with sticky CTA

#### **SEO & Performance**
- ✅ **Structured Data**: JSON-LD business schema implemented
- ✅ **Meta Tags**: Page-specific SEO optimization
- ✅ **Sitemap**: Custom priorities and improved configuration
- ✅ **Image Optimization**: WebP/AVIF support, multiple device sizes
- ✅ **Compression**: Gzip enabled, bundle optimization

#### **Accessibility**
- ✅ **Focus States**: Enhanced keyboard navigation
- ✅ **ARIA Labels**: Screen reader optimization
- ✅ **Color Contrast**: WCAG compliant color combinations

---

## 🚦 **Development Commands**

### **Essential Commands**
```bash
# Development
npm run dev                 # Start development server
npm run build              # Production build
npm run start              # Start production server

# Quality Assurance
npm run lint               # ESLint checking
npm run lint:fix           # Auto-fix ESLint issues
npm run type-check         # TypeScript validation
npm run format             # Prettier formatting

# Testing & Analysis
npm run test               # Run test suite
npm run build:prod         # Full production build with checks
```

### **Git Workflow**
```bash
# Before committing
npm run build:prod         # Ensure everything builds correctly
git add .                  # Stage all changes
git commit -m "feat: descriptive commit message"
git push origin main       # Push to remote
```

---

## 🎯 **Performance Benchmarks**

### **Core Web Vitals Targets**
- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **FID (First Input Delay)**: < 100ms ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅

### **Bundle Size Monitoring**
- Monitor First Load JS sizes in build output
- Aim to keep individual pages under 100kB compressed
- Use dynamic imports for heavy components

---

## 🔮 **Future Enhancement Roadmap**

### **Priority 1 (Immediate)**
- [ ] **Analytics Integration**: Google Analytics 4 setup
- [ ] **Contact Form**: Backend integration for contact submissions
- [ ] **Blog System**: MDX-powered content management
- [ ] **Payment Integration**: Stripe for session bookings

### **Priority 2 (Next Quarter)**
- [ ] **Progressive Web App**: Service worker and offline capabilities
- [ ] **Advanced Analytics**: Heat mapping and user behavior tracking
- [ ] **A/B Testing**: Conversion optimization experiments
- [ ] **Internationalization**: Multi-language support

### **Priority 3 (Future)**
- [ ] **Admin Dashboard**: Content management system
- [ ] **Client Portal**: Logged-in user experience
- [ ] **Advanced Booking**: Calendar integration and scheduling
- [ ] **Video Integration**: Training video streaming

---

## 🐛 **Common Issues & Solutions**

### **Build Issues**
```bash
# TypeScript errors
npm run type-check          # Identify type issues
# Fix imports and type definitions

# ESLint warnings
npm run lint:fix            # Auto-fix formatting issues
# Manually resolve logical issues

# Build failures
rm -rf .next node_modules   # Clean build cache
npm install                 # Reinstall dependencies
npm run build              # Rebuild
```

### **Performance Issues**
```bash
# Bundle analysis
npm run analyze            # Analyze bundle size
# Identify large dependencies and optimize

# Image optimization
# Ensure all images use Next.js Image component
# Check image formats (WebP/AVIF preferred)
```

---

## 📞 **Contact & Deployment**

### **Environment Configuration**
```bash
# Required environment variables
NEXT_PUBLIC_SITE_URL=https://wilsonspeedacademy.com
NEXT_PUBLIC_CALENDLY_USERNAME=wilsonspeedacademy

# Optional variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics
NEXT_PUBLIC_SITE_NAME="Wilson Speed Academy"
```

### **Deployment Checklist**
- [ ] Environment variables configured
- [ ] Domain DNS properly configured
- [ ] SSL certificate active
- [ ] Analytics tracking verified
- [ ] Search Console submitted
- [ ] Social media integration tested

---

## 📚 **Technical References**

### **Key Documentation**
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Reference](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [Schema.org Markup](https://schema.org/LocalBusiness)

### **Tools & Extensions**
- **VS Code Extensions**: Tailwind IntelliSense, TypeScript Hero
- **Browser Tools**: React DevTools, Lighthouse
- **Performance**: WebPageTest, PageSpeed Insights

---

**Last Updated**: December 2024
**Version**: 2.0.0
**Maintainer**: Development Team

> This README serves as the complete reference for Wilson Speed Academy development. Keep it updated with all architectural decisions and improvements for future efficiency.

## 🛠️ 2024 UI/UX & Mobile Hotfixes (Session Summary)

- **Mobile Menu:**
  - Full viewport, z-[60], scroll-locked, closes on Esc/link/close, smooth slide-down animation.
  - Drawer is robust, premium, and bug-free on all devices.

- **Header:**
  - Three-column grid for perfect centering: logo (left), nav links (center), theme toggle + Book Session button (right).
  - Logo switches: `WSA logo2.png` (light), `WSA_logo_white.png` (dark).
  - Book Session is a styled button on desktop and mobile.
  - ThemeToggle (dark/light mode) restored for both desktop and mobile.
  - Premium nav link hover/click animations for a modern feel.

- **Home Page:**
  - "What Athletes Say" (Testimonials) section removed on all screen sizes for a cleaner look.

- **General:**
  - All changes are mobile-first, accessible, and tested for no regressions on desktop.
  - All code is committed and pushed to git after each major fix.

---