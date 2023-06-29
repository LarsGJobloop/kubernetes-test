FROM node:20-alpine3.18 AS build-base
# Install pnpm
RUN npm install --global pnpm
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
WORKDIR /app
# Copy in config files
COPY ./package*.json .
COPY tsconfig.json .

# Create a layer with just production dependencies
FROM build-base AS install-build-dependencies
RUN pnpm fetch
RUN pnpm install --prod

# Build the application
FROM build-base AS build
# These are the environment variables we use
ARG PORT
ENV PORT=PORT

COPY src ./src
RUN pnpm install
RUN pnpm build

# Combine
FROM node:20-alpine3.18
WORKDIR /app
COPY --from=install-build-dependencies /app/node_modules .
COPY --from=build /app/dist .

# Start the application
CMD [ "node", "main.js" ]
