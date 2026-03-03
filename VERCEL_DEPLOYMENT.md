# Job Board Backend - Vercel Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Vercel account (https://vercel.com)
- MongoDB Atlas cluster (Cloud database)
- Git repository

## Folder Structure for Vercel

```
project-root/
├── api/
│   └── index.js                 # Vercel serverless function entry point
├── config/
│   └── db.js
├── controllers/
│   ├── applicationController.js
│   ├── authController.js
│   └── jobController.js
├── middleware/
│   ├── adminMiddleware.js
│   └── authMiddleware.js
├── models/
│   ├── Application.js
│   ├── Job.js
│   └── User.js
├── routes/
│   ├── applicationRoutes.js
│   ├── authRoutes.js
│   └── jobRoutes.js
├── app.js                       # Express app configuration
├── server.js                    # Local development only
├── package.json
├── vercel.json                  # Vercel configuration
├── .vercelignore               # Files to ignore on Vercel
├── .env.example                # Environment variables template
└── .gitignore
```

## Setup Instructions

### 1. Prepare Your Database

- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster
- Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/job-board`

### 2. Local Testing Before Deployment

```bash
# Install dependencies
npm install

# Create .env file based on .env.example
cp .env.example .env

# Update .env with your actual credentials
# MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/job-board
# JWT_SECRET=your-secret-key
# BCRYPT_ROUNDS=10

# Test locally
npm run dev
# Should run on http://localhost:5000
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

#### Option B: Using GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables in project settings
6. Click "Deploy"

### 4. Add Environment Variables in Vercel

In Vercel Dashboard → Project Settings → Environment Variables, add:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/job-board
JWT_SECRET=your_jwt_secret_key_here
BCRYPT_ROUNDS=10
NODE_ENV=production
```

### 5. Verify Deployment

After deployment, you'll get a URL like: `https://your-project.vercel.app`

Test the API:

```bash
curl https://your-project.vercel.app/
# Should return the API info JSON
```

## Key Changes for Vercel

1. **Entry Point**: `api/index.js` exports the Express app (instead of listening on a port)
2. **Database**: Must use MongoDB Atlas (cloud) instead of local MongoDB
3. **CORS**: Already configured in `app.js` for any origin
4. **Environment Variables**: Set in Vercel dashboard, not in `.env` file

## Important Notes

- **Development**: Use `npm run dev` with `server.js` locally
- **Production**: Vercel uses `api/index.js` automatically
- **Cold Starts**: Serverless functions may have slight delays on first request
- **Deployment Time**: Usually 30-60 seconds

## Troubleshooting

### Deployment fails with "Cannot find module"

- Make sure all dependencies are in `package.json`
- Reinstall: `rm -rf node_modules && npm install`

### MongoDB connection errors

- Verify MONGO_URI environment variable
- Check MongoDB Atlas IP whitelist (allow all IPs: 0.0.0.0/0)
- Ensure database credentials are correct

### CORS errors

- CORS is already enabled for all origins in `app.js`
- Frontend can make requests to your Vercel URL

## API Endpoints

After deployment, use these endpoints:

```
GET  https://your-project.vercel.app/               # Root
POST https://your-project.vercel.app/api/auth/register
POST https://your-project.vercel.app/api/auth/login
GET  https://your-project.vercel.app/api/jobs
POST https://your-project.vercel.app/api/jobs
GET  https://your-project.vercel.app/api/applications
POST https://your-project.vercel.app/api/applications
```

## Next Steps

1. Update your frontend API base URL to point to `https://your-project.vercel.app`
2. Test all endpoints in Postman or your frontend
3. Monitor logs in Vercel dashboard
