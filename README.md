# InventoryHub - Modern Inventory Management System

A professional, full-featured inventory management web application built with Next.js 15, featuring real-time stock tracking, low stock alerts, and beautiful data visualizations.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma)

## Features

### Dashboard

- **Real-time Metrics**: Track total products, inventory value, and low stock items
- **Visual Analytics**: Weekly product addition trends with interactive charts
- **Stock Level Monitoring**: Color-coded status indicators for quick inventory assessment
- **Distribution Overview**: Visual breakdown of in-stock, low-stock, and out-of-stock items

### Inventory Management

- **Product CRUD Operations**: Add, view, update, and delete products
- **Low Stock Alerts**: Customizable threshold notifications
- **SKU Tracking**: Unique product identification
- **Price & Quantity Management**: Real-time inventory valuation

### Modern UI/UX

- **Responsive Design**: Seamless experience across all devices
- **Dark Theme Sidebar**: Professional slate-900 color scheme
- **Smooth Animations**: Framer Motion powered interactions
- **Accessible Components**: Built with shadcn/ui components

### Authentication

- **Secure Auth**: Powered by Stack Auth
- **User Management**: Built-in user profiles and sessions
- **Protected Routes**: Automatic authentication checks

## Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Recharts](https://recharts.org/)** - Data visualization
- **[Lucide React](https://lucide.dev/)** - Modern icon library

### Backend & Database

- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Reliable database (or your DB)
- **[Stack Auth](https://stack-auth.com/)** - Authentication solution

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **pnpm** or **yarn**
- **PostgreSQL** (or your preferred database)
- **Git**

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/devsafix/inventory-management-system
   cd inventory-management-system
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/inventory_db"

   # Stack Auth
   NEXT_PUBLIC_STACK_PROJECT_ID="your_stack_project_id"
   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your_publishable_key"
   STACK_SECRET_SERVER_KEY="your_secret_key"

   # App URL
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**

   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev

   # (Optional) Seed database
   npx prisma db seed
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
inventory-management/
├── app/                      # Next.js app directory
│   ├── (auth)/              # Authentication routes
│   ├── dashboard/           # Dashboard page
│   ├── inventory/           # Inventory management
│   ├── add-product/         # Add product form
│   ├── settings/            # Settings page
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── ProductsChart.tsx    # Chart component
│   └── ui/                  # shadcn/ui components
├── lib/                     # Utility functions
│   ├── actions/             # Server actions
│   ├── auth.ts              # Auth helpers
│   └── prisma.ts            # Prisma client
├── prisma/                  # Database schema
│   └── schema.prisma        # Prisma schema
├── public/                  # Static assets
└── package.json             # Dependencies
```

## Configuration

### Database Schema

The main `Product` model includes:

- `id` - Unique identifier
- `name` - Product name
- `quantity` - Stock quantity
- `price` - Product price
- `sku` - Stock Keeping Unit (optional)
- `lowStockAt` - Low stock threshold
- `userId` - Owner reference
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

### Customizing the Theme

Modify `tailwind.config.ts` to customize colors and styling:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
  },
}
```

## Features Breakdown

### Dashboard Analytics

- **Key Metrics Card**: Displays total products, inventory value, and low stock alerts
- **Weekly Trends Chart**: Visual representation of product additions over 12 weeks
- **Stock Levels List**: Recent products with color-coded status indicators
- **Distribution Chart**: Circular chart showing stock distribution percentages

### Product Management

- **Add Products**: Form with validation for name, quantity, price, SKU, and low stock threshold
- **View Inventory**: Searchable, sortable table of all products
- **Update Products**: Inline editing capabilities
- **Delete Products**: Confirmation dialog before deletion

### Responsive Design

- **Mobile**: Slide-in navigation menu with backdrop overlay
- **Tablet**: Optimized grid layouts
- **Desktop**: Full sidebar with all features visible

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy on Other Platforms

The app can be deployed on any platform that supports Next.js:

- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**
- **DigitalOcean App Platform**

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

---

<div align="center">
  <p>Made with ❤️ using Next.js and TypeScript</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
