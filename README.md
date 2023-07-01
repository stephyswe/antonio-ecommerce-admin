This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Environment Setup (Admin)
npx create-next-app ecommerce-admin --typescript --tailwind --eslint
(no src, yes router, no customize)

npx shadcn-ui@latest init
(default, slate, Y, yes variables, Y, Y, Y, Y, yes server, Y)

npx shadcn-ui@latest add button

## Clerk Authentication (Admin)
https://dashboard.clerk.com/apps/new
Name: ecommerce-admin
create application - nextjs - copy env to env.local
npm i @clerk/nextjs
<mount clerk provider>
- sign-in and sign-up pages
add clerk env variables to .env.local
npm run dev - redirect to sign in page
- userbutton to homepage

## Clerk Authentication (Admin)