# Usa la imagen oficial de Node.js 20
FROM node:20.14.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación en el contenedor
COPY . .

# Expon el puerto que utilizará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]