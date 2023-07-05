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
create application - nextjs - copy env to .env
npm i @clerk/nextjs
<mount clerk provider>
- sign-in and sign-up pages
add clerk env variables to .env
npm run dev - redirect to sign in page
- userbutton to homepage

## Modal components (Admin)
npx shadcn-ui@latest add dialog
npm i zustand

## Form components (Admin)
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input

## Prisma, PlanetScale, MySQL setup (Admin)
npm i -D prisma
npm i @prisma/client
npx prisma init

https://app.planetscale.com/ - create database - connect to your database - create password - connect with prisma
- copy database url to .env
- copy schema to prisma/schema.prisma + modal Store
npx prisma generate

npm i axios
npm i react-hot-toast

### Reset Database
npx prisma migrate reset
npx prisma generate
npx prisma db push

## Navigation bar (Admin)
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add command

## Settings page (Admin)
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add alert
npx shadcn-ui@latest add badge

## Billboards Entity (Admin)

npx prisma generate
npx prisma db push

Create two billboards

### Cloudinary setup
https://console.cloudinary.com/console/ - Dashboard - copy cloud name

https://next-cloudinary.spacejelly.dev/installation - add Configuration to .env - add cloud name

npm i next-cloudinary

image-upload.tsx
<CldUploadWidget onUpload={onUpload} uploadPreset="...">
https://console.cloudinary.com/console/ - Settings - Upload
- Add upload preset - copy name to uploadPreset - signing mode: unsigned - save

## Data Table (Admin)
npx shadcn-ui@latest add table
npm i @tanstack/react-table
npm i date-fns
npx shadcn-ui@latest add dropdown-menu

## Categories Entity (Admin)
npx prisma generate - Categories
npx prisma db push
npx shadcn-ui@latest add select

Create one category

## Sizes Entity (Admin)
npx prisma generate - Sizes
npx prisma db push

Create Small S & Medium - M sizes

## Colors Entity (Admin)
npx prisma generate - Colors
npx prisma db push

Create Black #000000