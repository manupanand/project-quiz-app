# Base image node 20 in alpine linux
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to take advantage of Docker's caching mechanism
COPY package*.json ./

# Copy the Go module files to the container
#COPY go.mod go.sum ./
# Install dependencies
#RUN go mod tidy
#install dependencies-commands to run to build applications dont start application
RUN npm install
#RUN npx prisma generate


# Copy files - . mean all files, . mean to working directory
COPY  . .

#RUN npm run build




# Build the Go program
#RUN go build -o main .

# expose port
EXPOSE 2500

#Run application
# CMD ["npm ","run","server"]
#or 
CMD ["node","./src/index.js"]

# Command to run the Go binary
#CMD ["./main"]
