FROM node:12

COPY ./ ./

RUN npm install

RUN npm run build

EXPOSE 80 443

#CMD ["npm", "start"]
CMD ["node", "server.js"]