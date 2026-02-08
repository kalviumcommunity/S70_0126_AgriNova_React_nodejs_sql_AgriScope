# 🌾 AgriScope

> **A farmer-friendly web platform for real-time mandi prices and buyer demand insights**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Problem Statement](#-problem-statement)
- [Solution Overview](#-solution-overview)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Rendering Strategies](#-rendering-strategies)
- [Team & Responsibilities](#-team--responsibilities)
- [Sprint Timeline](#-sprint-timeline)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)

---

## ❌ Problem Statement

Small and marginal farmers lack transparent, real-time access to mandi pricing and buyer demand insights, forcing dependence on intermediaries and resulting in:

- **Unfair price realization**
- **Unsold produce**
- **Information asymmetry**

### Why This Matters

In India, despite digital adoption in payments and commerce, farm-level price and demand intelligence remains:
- Fragmented
- Unstandardized
- Largely inaccessible in a farmer-friendly format

### Target Users

| User Type | Description |
|-----------|-------------|
| 👨‍🌾 Farmers | Small and marginal farmers seeking fair prices |
| 🏪 Buyers | Local produce buyers & wholesalers |
| 🤝 FPOs | Farmer cooperatives and producer organizations |

---

## ✅ Solution Overview

A **minimal web platform** that aggregates live mandi prices and buyer-submitted demand signals, presenting them through:

- 📊 **Clear Dashboard** - Easy-to-read price displays
- 🔔 **Smart Alerts** - Notifications for price rise or demand spikes
- 📝 **Demand Submission** - Buyers can post their requirements

### Value Provided

| Benefit | Description |
|---------|-------------|
| 💰 Fairer Price Discovery | Know market rates before negotiating |
| 📈 Demand Visibility | See buyer needs before harvest/dispatch |
| ⚡ Low-Cost & Scalable | Uses caching and open data |
| 🎯 Simple to Use | No complexity, farmer-friendly UI |

---

## 📁 Project Structure

```
S70_0126_AgriNova_React_nodejs_sql_AgriScope/
├── agriscope/                    # Main AgriScope Frontend
│   ├── src/app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx        # Global navigation
│   │   │   └── Footer.tsx        # Global footer
│   │   ├── page.tsx              # Home (SSG)
│   │   ├── about/page.tsx        # About (SSG)
│   │   ├── prices/page.tsx       # Mandi Prices (ISR)
│   │   ├── dashboard/page.tsx    # Dashboard (SSR)
│   │   ├── demand/page.tsx       # Demand Form (Client)
│   │   └── alerts/page.tsx       # Alerts (SSR)
│   ├── package.json
│   └── next.config.ts
│
├── rendering-demo/               # Rendering Concepts Demo
│   ├── app/
│   │   ├── about/page.tsx        # SSG Example
│   │   ├── dashboard/page.tsx    # SSR Example
│   │   └── prices/page.tsx       # ISR Example
│   └── package.json
│
└── README.md
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Backend** | Node.js, REST APIs |
| **Database** | PostgreSQL |
| **Caching** | Redis |
| **Deployment** | Docker, Cloud (Render/AWS/Azure) |

---

## ✨ Features

### 📄 Pages Implemented

| Page | Route | Rendering | Description |
|------|-------|-----------|-------------|
| **Home** | `/` | SSG | Hero section with CTAs |
| **About** | `/about` | SSG | Mission & team info |
| **Prices** | `/prices` | ISR (60s) | Live mandi price table |
| **Dashboard** | `/dashboard` | SSR | Real-time market overview |
| **Demand** | `/demand` | Client | Buyer demand submission form |
| **Alerts** | `/alerts` | SSR | Price & demand alerts |

### 🎨 UI Components

- ✅ Global Navbar with navigation links
- ✅ Responsive Footer
- ✅ Loading skeletons for all dynamic pages
- ✅ Form validation with error states
- ✅ Success/error feedback messages

---

## 🔄 Rendering Strategies

This project demonstrates **three rendering modes** using Next.js App Router:

### 1️⃣ Static Rendering (SSG)

```typescript
// pages: /, /about
export const revalidate = false;
```

- ✅ Built at build time
- ✅ Fastest load times
- ✅ Best for static content
- ⚠️ Content may be stale

### 2️⃣ Dynamic Rendering (SSR)

```typescript
// pages: /dashboard, /alerts
export const dynamic = 'force-dynamic';

// In fetch calls:
fetch(url, { cache: 'no-store' });
```

- ✅ Fresh data on every request
- ✅ Personalized content possible
- ⚠️ Higher server cost
- ⚠️ Slower than cached responses

### 3️⃣ Incremental Static Regeneration (ISR)

```typescript
// page: /prices
export const revalidate = 60; // Regenerate every 60 seconds
```

- ✅ Balance of speed and freshness
- ✅ Scales well with CDN caching
- ✅ Ideal for semi-dynamic content

### 📊 Trade-offs Summary

| Mode | Speed | Freshness | Scalability | Best For |
|------|-------|-----------|-------------|----------|
| **SSG** | ⚡⚡⚡ | ⭐ | ⚡⚡⚡ | Static pages |
| **SSR** | ⚡ | ⭐⭐⭐ | ⚡ | Real-time dashboards |
| **ISR** | ⚡⚡ | ⭐⭐ | ⚡⚡ | Frequently updated content |

---

## 👥 Team & Responsibilities

| Role | Team Member | Key Responsibilities |
|------|-------------|---------------------|
| **Frontend + UX** | Zavian Alam | React UI, API integration, dashboards, responsiveness |
| **Backend + Data** | Rithvik Krishna D K | DB schema, REST APIs, alert rules, caching |
| **DevOps + Testing** | Koushik Reddy | Docker, deployment, API testing, E2E validation |

---

## 📅 Sprint Timeline (4 Weeks)

| Week | Focus Area | Deliverables |
|------|------------|--------------|
| **Week 1** | Setup & Design | Repo setup, DB schema, UI wireframes, alert thresholds |
| **Week 2** | Backend Build | Price API, demand API, alerts, Redis |
| **Week 3** | Frontend + Integration | Dashboard UI, API integration |
| **Week 4** | Deployment & Demo | Docker, cloud deploy, testing |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rithvik-krishna/S70_0126_AgriNova_React_nodejs_sql_AgriScope.git
   cd S70_0126_AgriNova_React_nodejs_sql_AgriScope
   ```

2. **Install dependencies for AgriScope**
   ```bash
   cd agriscope
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Running the Rendering Demo

```bash
cd rendering-demo
npm install
npm run dev -- -p 3001
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/prices` | Fetch live mandi prices |
| `GET` | `/api/demand` | Get buyer demand summary |
| `GET` | `/api/alerts` | List price/demand alerts |
| `POST` | `/api/demand` | Submit buyer demand |

---

## 📦 Deployment

### Docker

```bash
docker build -t agriscope .
docker run -p 3000:3000 agriscope
```

### Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=https://api.agriscope.in
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
```

### Cloud Platforms

- **Render** - Easy deployment with Docker
- **AWS** - EC2 + RDS + ElastiCache
- **Azure** - App Service + PostgreSQL + Redis

---

## 📊 Success Metrics

- [x] All MVP features working
- [x] Cloud deployment completed
- [x] Dashboard meets latency targets (<300ms)
- [x] Demo approved
- [x] Delivered in 4 weeks

---

## ⚠️ Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Price API unstable | Wrong data displayed | Fallback to mock data |
| Incorrect buyer input | False alerts triggered | Admin tagging system |
| Deployment issues | Project delay | Early Docker testing |
| Limited time | Scope creep | Strict MVP adherence |

---

## 📝 Conclusion

**AgriScope** is a cost-efficient, impact-focused platform that empowers farmers with transparent price and demand insights while avoiding unnecessary complexity.

> *"Bridging the information gap between farmers and markets."*

---

## 📄 License

This project is part of an academic initiative. All rights reserved.

---

<p align="center">
  Made with ❤️ for Indian Farmers
  <br>
  <strong>Team AgriNova</strong> • 2026
</p>