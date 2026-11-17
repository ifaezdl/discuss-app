# Discuss

A community discussion app where users can create topics, start posts, and comment on them.

**Status: work in progress** — core features are still being built.

## Tech stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Prisma 7 + SQLite
- NextAuth v5 (GitHub OAuth)
- HeroUI + Tailwind CSS 4

## Features

- [x] Project scaffolding and database schema
- [x] GitHub sign in / sign out
- [ ] Browse and create topics
- [ ] Create and view posts
- [ ] Comment on posts
- [ ] Search posts

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Create `.env`:

```env
DATABASE_URL="file:./dev.db"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
AUTH_SECRET="run: npx auth secret"
```

Create a GitHub OAuth app with callback URL
`http://localhost:3000/api/auth/callback/github`.

### 3. Set up the database

```bash
npx prisma migrate dev
```

### 4. Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/          routes and pages
  actions/      server actions
  components/   UI components
  db/           Prisma client
  auth.ts       NextAuth configuration
prisma/
  schema.prisma database schema
  migrations/   migration history
```
