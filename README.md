# Next 9.4.0 dotenv bug

Having the `dotenv` package installed as a package breaks the automatic .env features of Next.js

```bash
npm run dev
# or
yarn dev
```

-> NEXT_PUBLIC_YAY is undefined
