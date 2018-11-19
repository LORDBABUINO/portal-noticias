FROM node
EXPOSE 3000 9229
WORKDIR /home/app
COPY . .
RUN npm install
CMD npm run dev
