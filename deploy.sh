#!/bin/bash
set -e

# todo: fail when .env.production does not exist

DISTRIBUTION_ID=$(grep CF_DISTRIBUTION_ID .env.production | cut -d '=' -f2)

npx next build
npx next export

pages=("about" "cv" "skills" "works")

for i in "${pages[@]}"
do
	mkdir out/$i
	mv out/$i.html out/$i/index.html
done

mv out/front-page.html out/index.html

aws s3 rm s3://ilya.online --recursive
aws s3 sync out s3://ilya.online
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"

