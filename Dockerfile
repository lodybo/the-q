# Choose base
FROM node:8.6.0

# Setup folders
RUN mkdir /app
WORKDIR /app
RUN cd /app

RUN mkdir /dist

# Copy package.json and install
COPY package.json .
RUN npm install

# Copy source
ADD . .