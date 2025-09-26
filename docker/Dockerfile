# -------- Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Use npm ci for reproducible builds; falls back to npm install if no lock
RUN npm ci || npm install

# -------- Builder
FROM node:18-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# If you use Next.js 12+/13+, enable standalone output (see next.config.js below)
RUN npm run build

# -------- Runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -G nodejs

# Copy the minimal standalone build output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
USER nextjs
CMD ["node", "server.js"]