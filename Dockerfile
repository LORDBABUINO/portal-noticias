FROM node
EXPOSE 3000 5000
WORKDIR /home/app
COPY ./web .
RUN npm install -g --save-dev nodemon typescript browser-sync
RUN npm install
CMD npm run dev
