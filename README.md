# Sauced Sourcing Hub

A modern marketing website for Sauced, a full-stack footwear and apparel sourcing company. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **Package Manager**: npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Routing**: React Router DOM 6.30.1
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.23.26
- **Data Fetching**: TanStack Query 5.83.0
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui component library
│   └── [Component].tsx # Feature components
├── pages/              # Route pages
│   ├── Index.tsx       # Homepage
│   ├── Portfolio.tsx   # Portfolio page
│   └── services/       # Service pages
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets (images, logos)
├── App.tsx             # Root component with routing
└── main.tsx            # Application entry point
```

## 🎨 Styling

The project uses Tailwind CSS with custom design tokens defined in `src/index.css`:

- **Brand Colors**: `sauce`, `carbon`, `quartz`, `slate`
- **Custom Animations**: `fade-in`, `fade-in-up`, `slide-in-left`, `scale-in`
- **Utilities**: Glassmorphism effects, glow effects, hover animations

## 🛣️ Routes

- `/` - Homepage
- `/portfolio` - Portfolio showcase
- `/services/footwear-development` - Footwear service page
- `/services/apparel-sourcing` - Apparel service page
- `/services/b2b-custom-gifting` - Custom gifting service page

## 🔧 Development

### Path Aliases

The project uses `@/` as an alias for `./src/`:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Component Development

- Follow shadcn/ui patterns for new components
- Use the `cn()` utility from `@/lib/utils` for className merging
- Components are located in `src/components/`

### TypeScript

The project uses TypeScript with relaxed settings for faster development. Consider gradually enabling stricter settings:
- `noImplicitAny: false`
- `strictNullChecks: false`

## 📦 Building for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

## 🚢 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy
- **Netlify**: Connect your repository and deploy
- **GitHub Pages**: Use GitHub Actions or deploy manually
- **Any static host**: Upload the `dist/` folder after building

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📝 Migration Notes

This project was migrated from Lovable.dev to work independently in Cursor. See `cursor-migration.md` for detailed migration information.
