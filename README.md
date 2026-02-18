# Arrivo — Estatein Real Estate Discovery Platform

Arrivo (Estatein) is a modern real estate discovery web app that helps users browse and explore properties to find the right home. Whether it’s a luxury villa, a city apartment, or a countryside retreat, the platform focuses on a smooth property browsing experience with filtering, responsive layouts, and a clean UI.

---

## Features

- **Property Browsing**: View a curated set of properties with key details such as price, bedrooms, bathrooms, and total area.
- **Search & Filter**: Narrow results using simple search and filtering controls to match user preferences.
- **Responsive Design**: Optimized layouts for desktop, tablet, and mobile screens.
- **Interactive UI**: Modern interface with subtle animations and micro-interactions.
- **Testimonials**: Customer feedback section to add credibility and trust.
- **FAQ**: Frequently asked questions to help users quickly find common answers.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms & Validation**: React Hook Form + Zod
- **Package Manager**: npm

---

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

- Node.js (18+ recommended)
- npm (included with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/estatein.git

Move into the project directory:

cd estatein

Install dependencies:

npm install
Development

Start the development server:

npm run dev

Open your browser at:
http://localhost:3000

Production

Build the project for production:

npm run build

Start the production server:

npm start
Project Structure

app/ — Application routes, layouts, and global styles (App Router)

components/ — Reusable UI components

features/ — Feature-specific modules (e.g., properties logic)

lib/ — Shared utilities and helper functions

public/ — Static assets (images, fonts)

styles/ — Global styles and configuration

Scripts

npm run dev — Run development server (TurboPack)

npm run build — Generate an optimized production build

npm run start — Start the production server

npm run lint — Run ESLint checks