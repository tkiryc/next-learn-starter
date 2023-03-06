# next-learn-starter
next-learn-starter tutorial 

https://nextjs.org/learn/basics/create-nextjs-app

## docker run
```
docker-compose up --build -d
docker-compose exec next bash
```
## Create a Next.js app
```
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```
## Fast Refresh setting for Docker
ref: https://jameschambers.co.uk/nextjs-hot-reload-docker-development
```
touch nextjs-blog/next.config.js
```
## Run the development server
```
cd nextjs-blog
npm run dev
```

![スクリーンショット 2023-03-06 164251](https://user-images.githubusercontent.com/15275153/223051296-905df1b3-21af-493d-ac7e-9d7d2cdad265.jpg)
