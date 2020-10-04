
FROM node:12


RUN mkdir -p /usr/src/counselor-service


WORKDIR /usr/src/counselor-service


COPY . /usr/src/counselor-service


RUN npm install


EXPOSE 5001


CMD npm start