# 🚀 Deployment Guide

This guide covers deploying SolveMate to production using various platforms.

## Recommended: Vercel (Easiest & Free)

### Prerequisites
- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- MongoDB Atlas database
- OpenAI API key

### Steps

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**

- Go to [vercel.com/new](https://vercel.com/new)
- Click "Import Project"
- Select your GitHub repository
- Click "Import"

3. **Configure Environment Variables**

In Vercel dashboard, add these environment variables:

```
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

4. **Deploy**

- Click "Deploy"
- Wait 2-3 minutes
- Your site is live! 🎉

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

## Alternative: Railway

### Steps

1. **Install Railway CLI**

```bash
npm i -g @railway/cli
```

2. **Login**

```bash
railway login
```

3. **Initialize Project**

```bash
railway init
```

4. **Add Environment Variables**

```bash
railway variables set MONGODB_URI="your_mongodb_uri"
railway variables set OPENAI_API_KEY="your_openai_key"
```

5. **Deploy**

```bash
railway up
```

---

## Alternative: Netlify

### Steps

1. **Install Netlify CLI**

```bash
npm i -g netlify-cli
```

2. **Build the Project**

```bash
npm run build
```

3. **Deploy**

```bash
netlify deploy --prod
```

4. **Set Environment Variables**

Go to Netlify dashboard → Site settings → Environment variables

---

## Database Setup (MongoDB Atlas)

### Free Tier Setup

1. **Create Cluster**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Click "Build a Database"
   - Choose "Free" tier (M0)
   - Select a region close to your users
   - Click "Create Cluster"

2. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Set username and password
   - Grant "Read and write to any database"

3. **Whitelist IP Addresses**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - Or add specific IPs for better security

4. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

---

## Environment Variables Reference

### Required

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/solvemate
OPENAI_API_KEY=sk-your-api-key-here
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Optional

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Rate Limiting
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=900000

# Sentry Error Tracking
SENTRY_DSN=your-sentry-dsn
```

---

## Performance Optimization

### 1. Enable Caching

Add to `next.config.js`:

```javascript
module.exports = {
  // ... existing config
  headers: async () => [
    {
      source: '/api/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      ],
    },
  ],
}
```

### 2. Image Optimization

Images are automatically optimized by Next.js. Ensure you're using the `next/image` component.

### 3. Database Indexing

Run this in MongoDB:

```javascript
db.topics.createIndex({ title: "text", "content.whatItIs": "text" })
db.topics.createIndex({ subjectId: 1, letter: 1 })
```

### 4. API Rate Limiting

Implement rate limiting to protect your OpenAI API costs:

```typescript
// lib/rateLimit.ts
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
})
```

---

## Monitoring & Analytics

### Google Analytics

1. Get GA4 tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

// In the component
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Error Tracking (Sentry)

1. Sign up at [sentry.io](https://sentry.io)
2. Install Sentry:
   ```bash
   npm install @sentry/nextjs
   ```
3. Initialize:
   ```bash
   npx @sentry/wizard -i nextjs
   ```

---

## Security Checklist

- [ ] Environment variables are set correctly
- [ ] MongoDB IP whitelist is configured
- [ ] API rate limiting is enabled
- [ ] CORS is properly configured
- [ ] Input validation is implemented
- [ ] Error messages don't expose sensitive data
- [ ] HTTPS is enabled (automatic on Vercel)

---

## Cost Estimation

### Free Tier (Getting Started)

- **Vercel**: Free (Hobby plan)
- **MongoDB Atlas**: Free (512MB storage)
- **OpenAI API**: ~$10-50/month (pay-as-you-go)
- **Total**: ~$10-50/month

### Production (1000+ users/day)

- **Vercel**: $20/month (Pro plan)
- **MongoDB Atlas**: $25/month (M10 cluster)
- **OpenAI API**: $100-500/month (depends on usage)
- **CDN**: Included with Vercel
- **Total**: ~$145-545/month

---

## Scaling Tips

1. **Implement Caching**
   - Use Redis for API response caching
   - Cache frequently accessed topics

2. **Optimize Database Queries**
   - Add proper indexes
   - Use projection to limit returned fields
   - Implement pagination

3. **CDN for Static Assets**
   - Vercel includes CDN automatically
   - Or use Cloudflare

4. **Load Balancing**
   - Vercel handles this automatically
   - For custom setups, use AWS ELB or similar

5. **Database Replication**
   - Upgrade to MongoDB Atlas M10+ for replica sets
   - Improves read performance

---

## Troubleshooting

### Build Fails

**Check:**
- All environment variables are set
- Dependencies are installed correctly
- TypeScript errors are resolved

**Solution:**
```bash
npm run build
# Fix any errors shown
```

### API Errors in Production

**Check:**
- Environment variables are set in hosting platform
- MongoDB connection string is correct
- OpenAI API key is valid

### Slow Performance

**Solutions:**
- Enable caching
- Optimize database queries
- Use CDN for static assets
- Upgrade hosting plan

---

## Backup Strategy

### Database Backups

MongoDB Atlas provides automatic backups on paid tiers.

For manual backups:

```bash
mongodump --uri="your_mongodb_uri" --out=./backup
```

### Code Backups

- Use Git for version control
- Push to GitHub regularly
- Tag releases: `git tag v1.0.0`

---

## Rollback Procedure

### Vercel

1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Railway

```bash
railway rollback
```

---

## Support

- 📖 [Full Documentation](./README.md)
- 🐛 [Report Issues](https://github.com/mohsinazeem564/solvemate-complete/issues)
- 💬 [Discussions](https://github.com/mohsinazeem564/solvemate-complete/discussions)

---

**Your SolveMate platform is ready for the world! 🚀**