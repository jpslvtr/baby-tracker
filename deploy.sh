#!/bin/bash
set -e

echo "Building"
npm run build

echo "Committing and pushing to main"
git add .
git commit -m "updates"
git push origin main

echo "Deploying to GitHub Pages..."
git subtree push --prefix dist origin gh-pages

echo "Deployment complete! Pushed to both main and gh-pages."