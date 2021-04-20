git pull origin main
(cd hbd; git pull origin main)
(cd iclude/lazyeco; git pull origin main)
(cd iclude/pggy; git pull origin main)
git add hbd
git add iclude/lazyeco
git add iclude/pggy
git commit -m "Локальное развертывание актуальные версии контента"
git push origin main
npm run deploy
