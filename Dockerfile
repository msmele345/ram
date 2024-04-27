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

#build the image with local dockerfile and push to acr 
# az acr build --image ram:v2 --registry mm2932acr --file Dockerfile .
# az acr repository list --name <myContainerRegistry> --output table
# az acr repository show-tags --name <myContainerRegistry> \
#     --repository sample/hello-world --output table

#create container instance using acr image. az container create .. (from portal ??)
# az container show --resource-group mmci2932 --name ram --query "{FQDN:ipAddress.fqdn,ProvisioningState:provisioningState}" --out table

#mmacr2932.azurecr.io/ram:v2

# az container create --resource-group az204-aci-rg \
#     --name mycontainer \
#     --image mmacr2932.azurecr.io/ram:v2 \
#     --ports 80 \
#     --dns-name-label ram-dev --location westus