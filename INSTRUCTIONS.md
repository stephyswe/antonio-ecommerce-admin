## Intro 
```
$ npx create-next-app@latest ecommerce-admin --typescript --tailwind --eslint

√ Would you like to use `src/` directory with this project? ... No
√ Use App Router (recommended)? ... Yes
√ Would you like to customize the default import alias? ... No
```

$ npx shadcn-ui@latest init
```
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... app/globals.css
√ Do you want to use CSS variables for colors? ... yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... yes
√ Write configuration to components.json. Proceed? ... yes
```

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
npx prisma generate
npx prisma db push
npx shadcn-ui@latest add select

Create one category

## Sizes Entity (Admin)
npx prisma generate
npx prisma db push

Create Small S & Medium - M sizes

## Colors Entity (Admin)
npx prisma generate
npx prisma db push

Create Black #000000

## Products Entity (Admin)
npx prisma generate
npx prisma db push
npx shadcn-ui@latest add checkbox

## Orders Entity (Admin)
npx prisma generate
npx prisma db push

## Stripe Setup & Checkout finalization (Admin, Store)
npm i stripe
FRONTEND_STORE_URL=http://localhost:3000
https://dashboard.stripe.com/test/dashboard - copy secret key to .env STRIPE_API_KEY
https://dashboard.stripe.com/test/webhooks - download stripe cli
- stripe login
- stripe listen --forward-to localhost:3000/api/webhook
- copy webhook secret to .env STRIPE_WEBHOOK_SECRET
- checkout an item in store

## Dashboard page (Admin)
npx shadcn-ui@latest add card
npm i recharts

## Dark Mode (Admin)
npm i next-themes

## Deployment to Vercel (Admin, Store)

create repo (admin, store)
create vercel app (admin, store)
- env variables (admin, store)

strip webhook:
listen to events:
checkout.session.completed

stripe webhook: https://dashboard.stripe.com/test/webhooks
- add endpoint: https://ecommerce-admin.vercel.app/api/webhook
- reveal signing secret - copy webhook to vercel env (admin)
