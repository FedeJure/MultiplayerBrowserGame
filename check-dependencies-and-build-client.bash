if ! type "npm-check" > /dev/null; then
  npm install -g npm-check
fi

cd client/
npm-check -ys
npm run build
npm link multiplayer-game-core
cd ..
