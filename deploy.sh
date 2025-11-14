#!/bin/bash
set -e

npm run build
git add .
git commit -m "updates"
git push