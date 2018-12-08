FROM node
WORKDIR /home/app
COPY . .
RUN npm install -g --save-dev nodemon typescript browser-sync
RUN npm install
CMD npm run dev
