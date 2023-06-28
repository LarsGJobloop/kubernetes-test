FROM node:20-alpine AS build-base
RUN npm install --global pnpm
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
WORKDIR /app
COPY ../../package*.json .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .

# Divide into steps based on frequency of change
# Seldom to often

# Install dependencies
FROM build-base AS install-build-dependencies
RUN pnpm fetch
RUN pnpm install

# Build the application
FROM install-build-dependencies AS build
COPY src ./src
COPY index.html .
COPY public .
COPY .env .
RUN pnpm build

# Copy into the webserver
FROM lipanski/docker-static-website:latest
WORKDIR /app
COPY --from=build /app/dist .
CMD ["/busybox", "httpd", "-f", "-v", "-p", "80"]