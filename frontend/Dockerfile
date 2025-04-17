FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Install dependencies early for cache efficiency
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose dev port
EXPOSE 3000

# Optional: Set NODE_ENV explicitly
ENV NODE_ENV=development

# Start dev server (Turbopack)
CMD ["npm", "run", "dev"]
