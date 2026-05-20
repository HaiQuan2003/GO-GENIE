Set-Location 'c:\Users\VuHaiQuan\OneDrive\Desktop\test'
git rm --cached vercel.json 2>$null
git add -A
git commit -m "chore: remove vercel.json, use dashboard config only"
git push origin main
