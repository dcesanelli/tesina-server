FROM node:12

COPY ./ ./

RUN npm install

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]