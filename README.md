# Boilerplate for React, Node Express

### To install and run

``` bash

#install packages
npm install

#start server
npm run server
```

# dockerchamp
Notes on Docker commands

## 1. Installation, bash config & vaidation for docker on Ubuntu
```sh
sudo apt install docker.io
sudo docker version
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
docker run hello-world
```
## 2. Create Dockerfile to define an image
```dockerfile
FROM node:7.7.2-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```
## 3. Build a docker image and verify
```bash
docker build --tag cloudchamp/nodeapp:latest .
docker images
```
## 4. Run the containeer and verify
```bash
docker run -p 3000:3000 --name nodeapp amol/nodeapp:latest
docker ps
```
## 5. Container exploring
```bash
docker logs 03abec8b5ea0
docker exec -it 03abec8b5ea ls /usr/app
```
## 6. Container lifecycle
```bash
#remove container
docker stop 03abec8b5ea0
docker rm 03abec8b5ea0