# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y el package-lock.json (si lo tienes)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que va a usar la aplicación (por defecto NestJS usa el puerto 3000)
EXPOSE 3000

# Compila el proyecto (en caso de que uses TypeScript)
RUN npm run build

# Define el comando que se ejecutará al iniciar el contenedor
CMD ["npm", "run", "start:prod"]