# Quick Start - Vercel Deployment

## For Mac/Linux:

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel
```

## For Windows PowerShell:

```powershell
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel
```

## Configuration Checklist

✅ `vercel.json` - Configured  
✅ `api/index.js` - Entry point created  
✅ `.env.example` - Template with all variables  
✅ `.gitignore` - Updated with .vercel  
✅ `package.json` - Updated with build scripts

## Environment Variables to Set in Vercel

Before deploying, add these in Vercel Dashboard:

| Variable      | Example                                               |
| ------------- | ----------------------------------------------------- |
| MONGO_URI     | mongodb+srv://user:pass@cluster.mongodb.net/job-board |
| JWT_SECRET    | your-secret-key-min-32-chars                          |
| BCRYPT_ROUNDS | 10                                                    |
| NODE_ENV      | production                                            |
| BASE_URL      | https://your-project.vercel.app                       |

## Deploy in 3 Steps

1. **GitHub Integration** (Recommended)
   - Push code to GitHub
   - Import repo in Vercel Dashboard
   - Add env variables
   - Auto-deploys on every push

2. **Or use Vercel CLI**

   ```bash
   vercel --prod
   ```

3. **Test your API**
   ```bash
   curl https://your-project.vercel.app/
   ```

For detailed instructions, see **VERCEL_DEPLOYMENT.md**
