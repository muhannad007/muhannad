# Use the official Node.js image from the Docker Hub
FROM node:14

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Set environment variables (if needed)
ENV NODE_ENV=production

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
