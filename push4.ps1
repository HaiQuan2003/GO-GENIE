Set-Location 'c:\Users\VuHaiQuan\OneDrive\Desktop\test'
git add FE/vercel.json
git rm --cached vercel.json 2>$null
git add -A
git commit -m "fix: move vercel.json into FE/, add SPA rewrites for Vue Router"
git push origin main
