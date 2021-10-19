# ilya.online

## Deploying frontend to S3 bucket
Create `.env.development` and `.env.production` files, based on the `.env.dist` file.

> `.env.production` is vital for the production build, otherwise Next will likely give errors


- Make the deployment file executable if it isn't yet: `sudo chmod +x deploy.sh`
- Install `aws` CLI
- Ensure your AWS creds are correct
- __Ensure your node version is 14 or below__ 
- Launch `ilya-online-react-api` backend, should be running on `http//:localhost:3001`
- Run `npm run deploy`
