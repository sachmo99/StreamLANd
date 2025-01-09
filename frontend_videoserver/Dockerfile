FROM node:18-alpine as builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build

# Use a lightweight server to serve static files
FROM tomcat:9.0.98-jdk21-corretto
COPY --from=builder /app/build $CATALINA_HOME/webapps/ROOT

# Expose frontend port
EXPOSE 8080
EXPOSE 8443
CMD ["catalina.sh", "run"]
