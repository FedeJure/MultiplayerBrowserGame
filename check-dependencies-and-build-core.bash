if ! type "npm-check" > /dev/null; then
  npm install -g npm-check
fi

cd core/
npm-check -ys
npm run build
npm link
cd ..
cd client/
npm link multiplayer-game-core
cd ..