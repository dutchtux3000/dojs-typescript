#/bin/bash
cd ..
rm -rf ./build
npm run build:tsc
npm run fix:main
npm run fix:require
# npm run package
npm run copy-to-dist
