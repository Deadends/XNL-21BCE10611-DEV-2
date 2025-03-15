FROM node:18-alpine
FROM golang:1.20 as backend-builder

WORKDIR /app
COPY backend/. .

RUN go build -o backend main.go
# Install build dependencies needed by many npm packages
RUN apk add --no-cache python3 make g++ 

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies with verbose logging
RUN npm install --verbose

# Fix esbuild version mismatch by rebuilding it
RUN npm rebuild esbuild

# Install serve globally
RUN npm i -g serve

# Copy the rest of the application code
COPY . .

COPY --from=backend-builder /app/backend .

# Print build info and run build with extensive error reporting
RUN echo "Node version: $(node -v)" && \
    echo "NPM version: $(npm -v)" && \
    echo "esbuild version: $(npx esbuild --version)" && \
    npm run build

# Expose the correct port
EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
