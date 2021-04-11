# ilya.online

## Static export - S3 bucket
Create .env.development and .env.production files, according to `.env.dist` file.

Launch `ilya-online-react-api` backend, should be running on `http:localhost:3001`

> `.env.production` is vital for the production build, otherwise Next will likely give errors 

Run `npx next build && npx next export`

After export, for each `.html` file create a folder, move each `.html` file into corresponding folder and rename each file to `index.html`.
