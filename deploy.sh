#!/bin/bash
set -e

echo "Building"
npm run build

echo "Committing and pushing to main"
git add .
git commit -m "updates"
git push origin main

echo "Deploying to GitHub Pages..."
git push origin `git subtree split --prefix dist main`:gh-pages --force

echo "Deployment complete! Pushed to both main and gh-pages."