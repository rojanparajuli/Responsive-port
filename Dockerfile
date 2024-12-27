# Step 1: Use official Node.js image as a base
FROM node:18-alpine

# Step 2: Set working directory in the container
WORKDIR /app

# Step 3: Copy package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Step 4: Install project dependencies using Yarn
RUN yarn install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose the port that Vite will run on (default is 5173)
EXPOSE 9090

# Step 7: Start the Vite development server
CMD ["yarn", "dev"]
