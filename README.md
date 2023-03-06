# next-learn-starter
next-learn-starter tutorial 

## docker run
docker-compose up --build -d
docker-compose exec next bash

## Create a Next.js app
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"

## Fast Refresh setting for Docker
ref: https://jameschambers.co.uk/nextjs-hot-reload-docker-development
touch nextjs-blog/next.config.js

## Run the development server
cd nextjs-blog
npm run dev