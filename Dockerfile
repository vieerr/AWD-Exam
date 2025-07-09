# Etapa 1: Construcción
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

FROM nginx:alpine
COPY --from=build /app/dist/Paspuel_Olivier_Ex2_Contador/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

