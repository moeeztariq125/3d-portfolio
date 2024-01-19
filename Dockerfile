# Use an official Node.js runtime as a parent image
FROM node:20

COPY . /app
# Set the working directory in the container
WORKDIR /app

# Expose the port used by the Angular development server
EXPOSE 4200
RUN npm i
CMD ['/bin/bash']