# Build stage
FROM --platform=linux/amd64 node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM --platform=linux/amd64 nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
RUN chmod -R 755 /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]