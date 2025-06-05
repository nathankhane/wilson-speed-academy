# Wilson Speed Academy

Elite speed training for track athletes in New Orleans, LA. Transform your athletic performance with personalized coaching by Tyriq Wilson, St. Edwards University track athlete.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
wilson-speed-academy/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage with hero, stats, testimonials
│   ├── programs/          # Training programs page
│   ├── about/             # About Tyriq Wilson
│   ├── book/              # Booking system with Calendly
│   ├── results/           # Client results showcase
│   ├── resources/         # Blog/resources (MDX powered)
│   └── contact/           # Contact form with map
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Sticky navigation
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Video hero section
│   ├── StatBar.tsx       # Animated statistics
│   ├── TestimonialsSlider.tsx # Client testimonials
│   └── ThemeToggle.tsx   # Dark/light mode switch
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── logo-*.svg        # Brand assets
│   ├── bolt.svg          # Logo mark
│   └── hero.mp4          # Hero video (to be added)
└── content/              # MDX blog posts
    └── posts/            # Blog articles
```

## 🎨 Design System

### Colors
- **WSA Black**: `#151515`
- **WSA Blue**: `#5DA5C8`
- **WSA White**: `#FEFEFE`

### Typography
- **Headlines**: Montserrat, 700 weight, 0.05em letter-spacing
- **Body**: Open Sans, 400 weight

## 🔧 Configuration

### Calendly Integration
Update Calendly URLs in `/app/book/page.tsx`:

```typescript
const programs = [
  {
    calendlyUrl: 'https://calendly.com/your-actual-link/assessment'
  }
]
```

### Stripe Integration (Future)
For paid bookings, configure Stripe in environment variables:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
```

## 📝 Adding Blog Posts

Create new MDX files in `/content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
description: "Post description for SEO"
author: "Tyriq Wilson"
tags: ["speed training", "tips"]
---

Your post content here...
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Environment Variables
```env
SITE_URL=https://wilsonspeedacademy.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 Performance

- **Lighthouse Score Target**: ≥90 for all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Comprehensive meta tags and structured data

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Type checking
pnpm type-check

# Linting
pnpm lint

# Format code
pnpm format
```

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/light mode support
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Accessible (WCAG compliant)
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ Framer Motion animations
- ✅ MDX blog system
- ✅ Calendly integration ready
- ✅ Mobile sticky CTA

## 🎯 Key Pages

1. **Homepage** (`/`) - Hero video, features, stats, testimonials
2. **Programs** (`/programs`) - Training program options with pricing
3. **About** (`/about`) - Tyriq's background and certifications
4. **Book** (`/book`) - Session booking with Calendly integration
5. **Results** (`