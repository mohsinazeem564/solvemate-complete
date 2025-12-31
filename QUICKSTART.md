# 🚀 Quick Start Guide

## Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **Git** installed ([Download here](https://git-scm.com/))
- **MongoDB Atlas account** (free tier) - [Sign up here](https://www.mongodb.com/cloud/atlas)
- **OpenAI API key** - [Get it here](https://platform.openai.com/api-keys)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/mohsinazeem564/solvemate-complete.git
cd solvemate-complete
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- MongoDB/Mongoose
- OpenAI SDK
- Framer Motion
- Lucide React (icons)

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your credentials:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/solvemate?retryWrites=true&w=majority

# OpenAI API Key
OPENAI_API_KEY=sk-YOUR_OPENAI_API_KEY_HERE

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Getting MongoDB URI:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

#### Getting OpenAI API Key:

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the SolveMate homepage! 🎉

### 5. Generate Content (Optional)

To populate the database with AI-generated educational content:

```bash
npm run generate:content
```

This will:
- Connect to your MongoDB database
- Use OpenAI to generate content for all topics
- Save everything to the database
- Take 30-60 minutes depending on API speed

**Note:** This will use OpenAI API credits. Start with a few subjects first to test.

## Project Structure

```
solvemate-complete/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── api/               # API routes
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── home/             # Homepage sections
│   └── chat/             # AI Assistant
├── lib/                  # Core logic
│   ├── db/              # Database models
│   ├── constants/       # Static data
│   └── ai/              # AI integration
├── .env.local           # Environment variables
└── package.json         # Dependencies
```

## Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"

**Solution:**
- Check your MongoDB URI is correct
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify your database password

### Issue: "OpenAI API error"

**Solution:**
- Verify your API key is correct
- Check you have credits in your OpenAI account
- Ensure the key starts with `sk-`

### Issue: "Module not found"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Port 3000 already in use"

**Solution:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

## Next Steps

1. **Customize Branding**
   - Edit `components/layout/Header.tsx` for logo/name
   - Modify colors in `tailwind.config.ts`

2. **Add More Subjects**
   - Edit `lib/constants/subjects.ts`
   - Run content generation script

3. **Deploy to Production**
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for instructions
   - Recommended: Vercel (free tier)

## Need Help?

- 📖 Check the [full documentation](./README.md)
- 🐛 [Report issues](https://github.com/mohsinazeem564/solvemate-complete/issues)
- 💬 Ask questions in discussions

## What's Next?

- [ ] Explore the homepage
- [ ] Try the AI chat assistant
- [ ] Browse subjects and topics
- [ ] Generate content for your subjects
- [ ] Customize the design
- [ ] Deploy to production

Happy learning! 🎓