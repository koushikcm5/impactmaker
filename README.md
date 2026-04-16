# Personal Brand Website

A modern, professional personal brand website focused on authority and lead generation.

## Features

- **Hero Section**: Large headline with value proposition and dual CTAs
- **Trust Section**: Key metrics and social proof
- **Services Section**: Grid-based service cards with icons
- **About Section**: Personal storytelling and positioning
- **Value Proposition**: Results-focused benefits
- **Testimonials**: Client success stories
- **Insights**: Blog/thought leadership content
- **CTA Section**: Strong conversion-focused call-to-action
- **Footer**: Navigation, contact info, and social links

## Design Principles

- Clean and minimal layout
- Strong visual hierarchy
- Grid-based responsive design
- Reusable component architecture
- Clear spacing and alignment
- Conversion-optimized

## Tech Stack

- React 18
- Vite
- Lucide React (icons)
- CSS3 with custom properties

## Project Structure

```
/src
  /components
    Button.jsx
    ServiceCard.jsx
    TestimonialCard.jsx
    InsightCard.jsx
  /sections
    Hero.jsx
    Trust.jsx
    Services.jsx
    About.jsx
    ValueProposition.jsx
    Testimonials.jsx
    Insights.jsx
    CTA.jsx
    Footer.jsx
  /data
    siteData.js
```

## Getting Started

1. Navigate to project:
```bash
cd personal-brand-website
```

2. Start development server:
```bash
npm run dev
```

3. Open browser at http://localhost:5173

## Build for Production

```bash
npm run build
```

## Customization

Edit `/src/data/siteData.js` to update:
- Hero content
- Services
- Testimonials
- Insights/blog posts
- Contact information

## Color Scheme

- Primary: #1a1a2e (Dark navy)
- Highlight: #e94560 (Vibrant red)
- Text: #1a1a2e / #6b7280
- Background: #ffffff / #f9fafb

## Components

All components are reusable and accept props for easy customization:
- `Button`: Primary, secondary, and outline variants
- `ServiceCard`: Icon, title, description, CTA
- `TestimonialCard`: Quote, author, position
- `InsightCard`: Category, title, excerpt, link
