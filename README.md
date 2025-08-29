# Star Wars Characters App

A Next.js application that displays Star Wars characters with search and sorting functionality. Built with TypeScript, Apollo Client, and Tailwind CSS.

## Features

- Browse Star Wars characters
- Search characters by name
- Sort characters alphabetically (A-Z, Z-A)
- Responsive design
- Error handling with error boundaries

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── character/        # Character route
│   ├── error.tsx         # Global error boundary
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page (SSR)
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (Input, SortSelect)
│   ├── CharacterCard/   # Character card component
│   └── CharacterGrid/   # Character grid with search/sort
├── hooks/               # Custom React hooks
│   ├── useCharacterSearch.ts
│   └── useCharacterSort.ts
├── lib/                 # Utilities and configurations
│   ├── apollo/          # Apollo Client setup and queries
│   └── utils/           # Utility functions
└── types/               # TypeScript type definitions
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **GraphQL**: Apollo Client
- **Data**: Star Wars GraphQL API
