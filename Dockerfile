FROM node
EXPOSE 3000 9229
WORKDIR /home/app
COPY ./web .
RUN npm install -g nodemon typescript --save-dev
RUN npm install
RUN npm cache clean --force
CMD npm run dev
