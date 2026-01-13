# Cursor Migration Guide - Sauced Sourcing Hub

## Project Overview

**Sauced Sourcing Hub** is a modern React-based marketing website for a footwear and apparel sourcing company. The project was originally built in Lovable.dev and has been migrated to work independently in Cursor.

### Tech Stack
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Routing**: React Router DOM 6.30.1
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.23.26
- **Data Fetching**: TanStack Query 5.83.0
- **Form Handling**: React Hook Form 7.61.1 + Zod 3.25.76
- **Icons**: Lucide React 0.462.0

### Project Structure
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

## Architecture

### Application Flow
1. **Entry Point** (`main.tsx`): Initializes React root and renders `<App />`
2. **App Component** (`App.tsx`): Sets up providers (QueryClient, TooltipProvider) and React Router
3. **Pages**: Route-based components that compose feature components
4. **Components**: Reusable UI elements following shadcn/ui patterns

### Key Patterns
- **Component Composition**: Feature components (Navbar, HeroSection, etc.) are composed in pages
- **Path Aliases**: `@/` maps to `./src/` for cleaner imports
- **CSS Variables**: Custom design tokens defined in `index.css` for theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Routing Structure
- `/` - Homepage (Index)
- `/portfolio` - Portfolio showcase
- `/services/footwear-development` - Footwear service page
- `/services/apparel-sourcing` - Apparel service page
- `/services/b2b-custom-gifting` - Custom gifting service page
- `*` - 404 Not Found page

## Setup Instructions

### Prerequisites
- **Node.js**: v18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **Package Manager**: npm, yarn, pnpm, or bun (project includes both `package-lock.json` and `bun.lockb`)

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:8080` (configured in `vite.config.ts`)

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

5. **Run Linter**
   ```bash
   npm run lint
   ```

## Key Dependencies

### Core Dependencies
- `react` & `react-dom`: React framework
- `react-router-dom`: Client-side routing
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library

### UI Framework
- `@radix-ui/*`: Headless UI primitives (used by shadcn/ui)
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority`: Component variant management
- `clsx` & `tailwind-merge`: Conditional className utilities

### Form & Validation
- `react-hook-form`: Form state management
- `@hookform/resolvers`: Form validation resolvers
- `zod`: Schema validation

### Utilities
- `lucide-react`: Icon library
- `date-fns`: Date manipulation
- `sonner`: Toast notifications
- `next-themes`: Theme management (dark mode support)

## Migration Steps

### ✅ Completed Changes

1. **Removed Lovable Tagger**
   - Removed `lovable-tagger` import from `vite.config.ts`
   - The package remains in `devDependencies` but is no longer used
   - **Action**: Can be safely removed from `package.json` if desired

2. **Vite Configuration**
   - Updated `vite.config.ts` to remove `componentTagger()` plugin
   - Configuration now uses standard Vite + React SWC setup

### 🔧 Optional Cleanup

1. **Remove Lovable Tagger Package**
   ```bash
   npm uninstall lovable-tagger
   ```

2. **Update README.md**
   - Replace Lovable-specific instructions with standard development workflow
   - Remove references to Lovable.dev URLs

3. **Environment Variables** (if needed)
   - Create `.env` file for any API keys or environment-specific configs
   - Add `.env` to `.gitignore` if not already present

## Known Issues & Assumptions

### Assumptions
1. **No Backend API**: The project appears to be a frontend-only marketing site
2. **External Assets**: Some assets are loaded from external URLs (Supabase storage, Google Cloud Storage)
3. **No Environment Variables**: No `.env` file detected - all config appears to be hardcoded

### Potential Issues
1. **External Asset Dependencies**
   - Logo URL in `Navbar.tsx` points to Supabase storage
   - Social media images in `index.html` point to Google Cloud Storage
   - **Impact**: If these URLs become unavailable, assets will fail to load
   - **Solution**: Consider downloading and hosting assets locally

2. **TypeScript Configuration**
   - `noImplicitAny: false` - Less strict type checking
   - `strictNullChecks: false` - Null safety disabled
   - **Impact**: Potential runtime errors from type mismatches
   - **Recommendation**: Gradually enable stricter TypeScript settings

3. **Port Configuration**
   - Development server runs on port 8080 (non-standard)
   - **Note**: This is intentional based on `vite.config.ts` configuration

4. **Missing Environment Setup**
   - No `.env.example` file found
   - No environment variable documentation
   - **Action**: Document any required environment variables if backend integration is added

## Development Workflow

### Recommended Workflow in Cursor
1. Use Cursor's built-in terminal for running commands
2. Leverage Cursor's AI features for component development
3. Use the file explorer to navigate the component structure
4. Take advantage of TypeScript IntelliSense for type safety

### Component Development
- New components should follow shadcn/ui patterns
- Use the `cn()` utility from `@/lib/utils` for className merging
- Follow existing component structure in `src/components/`

### Styling Guidelines
- Use Tailwind utility classes for styling
- Custom design tokens are defined in `src/index.css`
- Brand colors: `sauce`, `carbon`, `quartz`, `slate`
- Custom animations: `fade-in`, `fade-in-up`, `slide-in-left`, `scale-in`

## Next Steps

1. ✅ Project is ready for development in Cursor
2. 🔄 Consider removing `lovable-tagger` from `package.json`
3. 🔄 Update `README.md` with Cursor-specific instructions
4. 🔄 Add `.env.example` if environment variables are needed
5. 🔄 Consider downloading external assets for local hosting
6. 🔄 Gradually enable stricter TypeScript settings

## Support

For issues or questions:
- Check component documentation in `src/components/`
- Review shadcn/ui docs: https://ui.shadcn.com
- Vite documentation: https://vitejs.dev
- React Router docs: https://reactrouter.com
