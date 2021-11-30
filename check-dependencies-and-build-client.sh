if ! type 'npm-check' > /dev/null; then
  npm install -g npm-check
fi

cd app/
npm-check -ys
npm run build
cd ..
