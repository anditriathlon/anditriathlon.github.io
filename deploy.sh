#!/bin/bash

git checkout master
git rebase gh-pages
shopt -s extglob
rm -r !(_site|deploy.sh)
cp -a _site/. .
git add --all
git commit  -am "publish"
git push origin master --force
