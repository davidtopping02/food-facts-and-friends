# Step 1: Build the app
FROM node:18 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve the app using an HTTP server
FROM nginx:alpine

# Remove the default nginx index.html
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that nginx will use
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
