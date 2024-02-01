#/bin/bash
set -e
DOJS_URL=https://github.com/SuperIlu/DOjS/releases/download/v1.121/dojs-1.12.1.zip

echo Run NPM install
# npm install
mkdir -p dist/dojs
cd dist
echo "Downloading $DOJS_URL..."
wget -O dojs.zip $DOJS_URL 
echo Extracting...
cd dojs
unzip ../dojs.zip
echo Remove zip files
rm ../dojs.zip
echo "Everyhing is ready! :)"