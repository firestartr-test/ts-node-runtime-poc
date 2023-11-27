FROM node:18.17-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Run app
CMD ["npm", "start"]
