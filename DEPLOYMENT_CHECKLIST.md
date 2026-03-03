# 🚀 Vercel Deployment Checklist

## Pre-Deployment Checklist

### Local Setup

- [ ] `npm install` - All dependencies installed
- [ ] Create `.env` file from `.env.example` (don't commit)
- [ ] Test locally: `npm run dev`
- [ ] Verify API works on `http://localhost:5000`
- [ ] All endpoints responding correctly

### MongoDB Setup

- [ ] MongoDB Atlas account created
- [ ] Cluster created with proper credentials
- [ ] Database user created with password
- [ ] Connection string ready
- [ ] IP whitelist includes `0.0.0.0/0` (allow all)

### Code Preparation

- [ ] No hardcoded secrets in code
- [ ] All credentials in `.env.example` template
- [ ] Code committed to Git
- [ ] GitHub repository created and pushed

## Deployment Steps

### Option 1: GitHub Integration (Recommended) ⭐

```bash
# Step 1: Push to GitHub
git add .
git commit -m "Setup Vercel deployment"
git push origin main

# Step 2: Go to https://vercel.com/dashboard
# Click "New Project"
# Select your GitHub repository
# Configure Environment Variables:
#   MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/job-board
#   JWT_SECRET=your-secret-key
#   BCRYPT_ROUNDS=10
#   NODE_ENV=production
# Click "Deploy"
```

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Add environment variables when prompted
```

## Post-Deployment

### Verification

- [ ] Deployment successful on Vercel dashboard
- [ ] Get production URL: `https://your-project.vercel.app`
- [ ] Test root endpoint: `curl https://your-project.vercel.app/`
- [ ] Test API endpoints with Postman
- [ ] Check logs in Vercel dashboard for errors

### Update Frontend

- [ ] Update API base URL in frontend:

  ```javascript
  // Old (local)
  const API_URL = "http://localhost:5000";

  // New (production)
  const API_URL = "https://your-project.vercel.app";
  ```

- [ ] Update CORS origins if needed
- [ ] Test all authentication flows
- [ ] Test all API calls

## Files to Remember

| File           | Purpose                         |
| -------------- | ------------------------------- |
| `api/index.js` | Vercel serverless entry point   |
| `vercel.json`  | Vercel configuration            |
| `.env`         | Local secrets (never commit)    |
| `.env.example` | Template for required variables |
| `server.js`    | For local development only      |
| `app.js`       | Express app definition          |

## Environment Variables Reference

```
# Required for Vercel Production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/job-board
JWT_SECRET=your-jwt-secret-key-here
BCRYPT_ROUNDS=10

# Optional
NODE_ENV=production
BASE_URL=https://your-project.vercel.app
ADMIN_SECRET=admin123
```

## Troubleshooting

### Issue: "Cannot find module"

```bash
# Solution
rm -rf node_modules
npm install
git add .
git commit -m "Update deps"
git push
```

### Issue: MongoDB connection failed

- Check MONGO_URI in Vercel environment variables
- Verify credentials are correct
- Check MongoDB Atlas IP whitelist
- Wait for connection string to propagate (~30 mins)

### Issue: 503 Service Unavailable

- Check Vercel deployment logs
- Verify all environment variables are set
- Ensure MongoDB is accessible
- Wait for deployment to fully complete

### Issue: CORS errors from frontend

- CORS is already enabled for all origins
- Check frontend is making requests to correct URL
- Verify request includes proper headers

## Useful Commands

```bash
# Local development
npm run dev

# View local API
curl http://localhost:5000/

# Test API endpoint
curl -X GET "http://localhost:5000/api/jobs"

# After Vercel deployment
curl https://your-project.vercel.app/

# View Vercel logs
vercel logs
```

## Important Notes

1. **Vercel Functions Timeout**: Default is 60 seconds
2. **Cold Start**: First request after deployment may take 1-2 seconds
3. **Serverless**: No persistent file system between requests
4. **Connection Pooling**: Configured for 5 max connections
5. **Auto Deploy**: Every push to main automatically deploys

## Getting Help

- Vercel Support: https://vercel.com/support
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Help: https://docs.atlas.mongodb.com
- Read `VERCEL_DEPLOYMENT.md` for detailed guide

---

✅ **Your backend is ready for Vercel deployment!**

Next steps:

1. Set up MongoDB Atlas cluster
2. Push code to GitHub
3. Deploy from Vercel dashboard
4. Update frontend API URL
5. Test thoroughly
