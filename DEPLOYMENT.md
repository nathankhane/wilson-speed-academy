# Wilson Speed Academy - Deployment Guide

This guide will walk you through deploying the Wilson Speed Academy website to Vercel with GitHub integration for continuous deployment.

## 🔧 Pre-Deployment Checklist

### 1. Code Optimization ✅
- [x] Fixed deprecated Next.js image configuration
- [x] Added metadataBase to prevent warnings
- [x] Optimized Hero component with proper fallbacks
- [x] Added placeholder for missing assets
- [x] Enhanced security headers
- [x] Optimized sitemap configuration
- [x] Added production-ready scripts

### 2. Required Assets (To Add Later)
- [ ] Hero video (`/public/hero.mp4`) - Optional, fallback works
- [ ] Professional headshot (`/public/tariq-headshot.jpg`) - Has placeholder
- [ ] High-quality images for testimonials and results

## 🚀 GitHub Setup

### 1. Initialize Git Repository
```bash
# If not already initialized
git init
git add .
git commit -m "Initial commit: Wilson Speed Academy website"
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `wilson-speed-academy`
3. Keep it public or private (your choice)
4. Don't initialize with README (we have one)

### 3. Connect Local to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/wilson-speed-academy.git
git branch -M main
git push -u origin main
```

## 📦 Vercel Deployment

### 1. Connect GitHub to Vercel
1. Visit [Vercel](https://vercel.com)
2. Sign up/in with your GitHub account
3. Click "New Project"
4. Import your `wilson-speed-academy` repository

### 2. Configure Project Settings
**Framework Preset:** Next.js
**Root Directory:** `./` (default)
**Build Command:** `npm run build:prod` (includes type-checking and linting)
**Output Directory:** `.next` (default)
**Install Command:** `npm install`

### 3. Environment Variables
Add these in Vercel dashboard under Settings > Environment Variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NODE_ENV=production
```

Optional (add later when ready):
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CALENDLY_USERNAME=tyriq-wsa
```

### 4. Custom Domain (Optional)
1. Purchase domain (e.g., `wilsonspeedacademy.com`)
2. In Vercel project settings, go to Domains
3. Add your domain and follow DNS configuration instructions

## 🔄 Continuous Deployment Setup

Once connected, every push to the `main` branch will automatically:
1. Run type checking
2. Run linting
3. Build the application
4. Deploy to Vercel
5. Generate sitemap
6. Update live site

### Branch Protection (Recommended)
1. Go to GitHub repository Settings > Branches
2. Add rule for `main` branch
3. Enable "Require status checks to pass before merging"
4. Enable "Require pull request reviews before merging"

## 📊 Performance Monitoring

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor Core Web Vitals automatically

### Google Analytics (Optional)
1. Create GA4 property
2. Add tracking ID to environment variables
3. Update metadata in `app/layout.tsx` if needed

## 🛠️ Development Workflow

### Local Development
```bash
npm run dev
```

### Production Testing
```bash
npm run build:prod
npm start
```

### Code Quality
```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Lint and fix
npm run lint:fix

# Run tests
npm run test
```

## 🔍 SEO & Performance

### Automatic Features
- ✅ Sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Metadata optimization
- ✅ Image optimization
- ✅ Core Web Vitals optimization

### Manual Optimization Tasks
- [ ] Add real images with proper alt tags
- [ ] Optimize image sizes (WebP format)
- [ ] Add structured data (JSON-LD)
- [ ] Set up Google Search Console
- [ ] Configure CDN for assets

## 🚨 Troubleshooting

### Build Failures
1. Check Vercel build logs
2. Run `npm run build:prod` locally to debug
3. Ensure all TypeScript errors are fixed

### Missing Assets
- Hero video: Falls back to gradient background
- Headshot: Shows professional placeholder
- Other images: Will show broken image icons

### Environment Variables
- Always prefix public variables with `NEXT_PUBLIC_`
- Update in both local `.env.local` and Vercel dashboard

## 📞 Support Checklist

Before going live, ensure:
- [ ] Contact information is accurate
- [ ] Calendly URLs are updated with real booking links
- [ ] Social media links are correct
- [ ] Phone numbers and emails are working
- [ ] Legal pages are complete (if needed)

## 🎯 Post-Deployment Tasks

1. **Test everything on live site**
2. **Set up monitoring alerts**
3. **Configure backup strategy**
4. **Update DNS if using custom domain**
5. **Submit sitemap to Google Search Console**
6. **Set up Google My Business (if applicable)**

Your site will be live at: `https://wilson-speed-academy-[random].vercel.app` or your custom domain! 