# front/Dockerfile
FROM node:15

# Set working directory
WORKDIR /app

# Set environment variable
ENV PORT=3001

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Start the React app
CMD ["npm", "start"]
