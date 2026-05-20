Set-Location 'c:\Users\VuHaiQuan\OneDrive\Desktop\test'
git add vercel.json
git add FE/package.json
git rm --cached FE/vercel.json 2>$null
git add -A
git commit -m "fix: proper vercel.json at root with builds config, add vercel-build script"
git push origin main
