# Stage 1: Use the official Shaka Packager image
FROM google/shaka-packager:latest AS shaka-packager

# Stage 2: Build the backend
FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Copy the Shaka Packager binary from the first stage
COPY --from=shaka-packager /usr/bin/packager /usr/local/bin/shaka

# Add Shaka Packager to the PATH
ENV PATH="/usr/local/bin:${PATH}"

# Expose backend port
EXPOSE 4000

# Start the backend server
CMD ["npm", "run","start-backend"]
