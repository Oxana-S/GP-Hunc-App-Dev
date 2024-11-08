# Build stage
FROM node:20 as builder
WORKDIR /app
RUN npm i -g bun
COPY package.json bun.lockb ./
RUN bun install
COPY . .
RUN bun run build

# Production stage
FROM node:20 as release
WORKDIR /app
RUN npm i -g bun
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/postcss.config.mjs ./
COPY --from=builder /app/tailwind.config.ts ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["bun", "run", "start"]
