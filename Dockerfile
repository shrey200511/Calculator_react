# --------------------
# Stage 1: Build stage
# --------------------
FROM node:20 AS builder

WORKDIR /calculator

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build


# --------------------
# Stage 2: Production stage
# --------------------
FROM node:20-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy only build output
COPY --from=builder /calculator/dist ./dist

# Expose port for serve
EXPOSE 5173

# Serve the dist folder
CMD ["serve", "-s", "dist", "-l", "5173"]
