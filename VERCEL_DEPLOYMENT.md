# Vercel Deployment Guide

## Environment Variables Required

Add these environment variables in your Vercel dashboard:

### Sanity CMS Configuration

```
PUBLIC_SANITY_PROJECT_ID=xyzxsyqr
PUBLIC_SANITY_DATASET=production
```

### Site Configuration

```
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_CONTACT_EMAIL=info@atozbusiness.ae
PUBLIC_WHATSAPP=971XXXXXXXXX
```

## How to Add Environment Variables in Vercel

1. Go to your project on Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with its value
4. Select the environment (Production, Preview, Development)
5. Click **Save**

## Build Configuration

Your project is configured for **Static Site Generation (SSG)**:

- Output mode: `static`
- All pages are pre-rendered at build time
- No serverless functions needed for page rendering
- Faster performance and lower costs

## Build & Deploy Commands

```bash
# Build Command (default)
npm run build

# Install Command (default)
npm install
```

## Testing Locally Before Deploy

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Preview the build
npm run preview
```

## Common Issues & Solutions

### Issue 1: FUNCTION_INVOCATION_FAILED

**Cause:** Using `output: 'server'` with static page generation
**Solution:** Changed to `output: 'static'` ✅

### Issue 2: server:defer not working

**Cause:** server:defer only works in SSR mode
**Solution:** Updated GoogleMap component to use client-side loading with useEffect ✅

### Issue 3: Missing Sanity Data

**Cause:** Environment variables not set in Vercel
**Solution:** Add PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET in Vercel settings

### Issue 4: Build fails on dynamic routes

**Cause:** Sanity query errors during build
**Solution:** Ensure Sanity CMS is accessible and has data

## Deployment Checklist

- [x] Set `output: 'static'` in astro.config.mjs
- [ ] Add environment variables in Vercel dashboard
- [ ] Ensure Sanity CMS has content (locations, services)
- [ ] Test build locally: `npm run build`
- [ ] Deploy to Vercel
- [ ] Verify all pages load correctly
- [ ] Test dynamic routes (services, locations)

## Support

If you encounter issues:

1. Check Vercel build logs for specific errors
2. Verify environment variables are set correctly
3. Test the build locally first
4. Ensure Sanity CMS is accessible and has content
