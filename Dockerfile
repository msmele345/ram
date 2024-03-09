#docker build -t name/tag
FROM node:14.19.3 as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
COPY . .
RUN npm run build
# CMD ["npm","start"]            

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
# CMD ["nginx","-g","daemon off"]
