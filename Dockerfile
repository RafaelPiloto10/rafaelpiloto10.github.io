# ---------- Build stage ----------
FROM oven/bun:1.1-alpine AS builder

WORKDIR /app

# Install deps (fast, deterministic)
COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile

# Copy source and build
COPY . .
RUN bun run build

# ---------- Runtime stage ----------
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
