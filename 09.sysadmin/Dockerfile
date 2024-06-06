# Use the official Ubuntu base image
FROM ubuntu:latest

# Update the package list and install dependencies
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get install -y gnupg && \
    apt-get install -y build-essential && \
    apt-get install -y git sqlite3

# Add NodeSource APT repository for Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh

# Install Node.js and npm
RUN apt-get install -y nodejs

# Verify installation
RUN node -v
RUN npm -v

# Set the working directory
# WORKDIR /app

# COPY package*.json .
# RUN npm install
# COPY . .
COPY "run.sh" .

# Change ownership of the working directory to the non-root user
# RUN chown -R ubuntu:ubuntu /app
USER ubuntu

# Expose the application port (if you have an application to run)
EXPOSE 8000

CMD ["bash", "./run.sh"]

# Command to run the application (if you have an application to run)
# CMD ["npm", "run", "start"]

# Specify the default command
# CMD ["bash"]




# #Build stage
# FROM node:16-alpine
# WORKDIR /app

# COPY package*.json .
# RUN npm install
# COPY . .

# CMD [npm run build]


# #Production stage
# FROM node:16-alpine AS production
# WORKDIR /app

# COPY package*.json .
# RUN npm ci --only=production
# COPY --from=build /app/dist ./dist

# CMD ["node", "dist/index.js"]