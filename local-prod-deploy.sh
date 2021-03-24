git pull origin main
(cd hbd; git pull origin main)
git add hbd
git commit -m "Локальное развертывание актуальные версии контента"
git push origin main
npm run deploy
