# Dockerfile (Production)
FROM node:22-bookworm-slim AS builder

WORKDIR /app

# Copier les fichiers de package
COPY package*.json ./
RUN npm ci

# Copier le code source
COPY . .

# Installer les dépendances manquantes si nécessaire
RUN npm install --save-dev autoprefixer postcss tailwindcss

# Build de l'application
RUN npm run build

# Étape de production avec Nginx
FROM nginx:alpine

# Copier la configuration Nginx personnalisée
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]