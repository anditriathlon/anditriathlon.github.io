#!/bin/sh

rm -rf !(_site|deploy.sh)
cp -a _site/. .
