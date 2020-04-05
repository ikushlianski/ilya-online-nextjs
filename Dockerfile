ARG myworkdir=ilya-online-react

FROM node:12
WORKDIR /$myworkdir
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
