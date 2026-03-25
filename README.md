# Cats Luv Us — Payload CMS Home 3 Page

This repository contains the **Home 3** page data for Payload CMS, fully formatted for the **Lexical rich-text editor**.

---

## Files

| File | Description |
|------|-------------|
| `src/seed/home3-lexical.json` | ✅ **The complete Lexical editor state** — paste directly into any Payload CMS page's `content` field via the API or admin UI |
| `src/seed/home3-page.ts` | TypeScript seed module — import and call `seedHome3Page(payload)` from your Payload seed script |
| `src/seed/seed-via-api.mjs` | Standalone Node.js script — seeds the page via Payload's REST API |
| `src/collections/Pages.ts` | Example Payload `pages` collection config with Lexical editor |

---

## Quick Start

### Option A — REST API Seed Script (Recommended)

```bash
node src/seed/seed-via-api.mjs \
  --url http://localhost:3000 \
  --email admin@example.com \
  --password yourpassword
```

Or via environment variables:

```bash
PAYLOAD_URL=http://localhost:3000 \
PAYLOAD_EMAIL=admin@example.com \
PAYLOAD_PASSWORD=yourpassword \
node src/seed/seed-via-api.mjs
```

### Option B — TypeScript Seed Function

In your Payload seed script:

```ts
import { seedHome3Page } from './src/seed/home3-page'

// Inside your seed function:
await seedHome3Page(payload)
```

### Option C — Manual Admin UI Import

1. Open your Payload admin panel (`/admin`)
2. Go to **Pages** → **Create New**
3. Set **Title** to `Home 3`
4. Switch the `content` field to **JSON mode**
5. Paste the contents of `src/seed/home3-lexical.json`
6. Save

---

## Page Structure

The **Home 3** page contains the full content for the Cats Luv Us Boarding Hotel & Grooming website, including:

- **H1** hero title with business name
- **H2** tagline and subtitle
- **H3** sub-sections throughout
- **Paragraphs** with bold/italic inline formatting
- **Bullet lists** for services, features, use cases, grooming services
- **Horizontal rules** between major sections
- **All sections:**
  - Hero / Introduction
  - First Night Free promotion
  - A Different Kind of Cat Hotel
  - Suite options (Single / Double / Family — with image placeholders)
  - Play Areas, Cat TV, Daily Updates
  - 100% Satisfaction Guarantee
  - Testimonials (Yelp reviews)
  - When You Need Us
  - Specialized Medical Care
  - Full Services list (Boarding, Day Care, Long-Term, Medical, Grooming, etc.)
  - Why Choose Us / Feature List
  - How It Works (3-step process)
  - Personal Tours CTA
  - 30-Year Legacy / Trust section
  - Contact / Phone
  - Hours of Operation
  - Footer address block

---

## Lexical Format Reference

Text node `format` values (bitmask):
- `0` = normal
- `1` = bold
- `2` = italic
- `3` = bold + italic

---

## Location

**Cats Luv Us Boarding Hotel & Grooming**  
27601 Forbes Rd, Suite 25  
Laguna Niguel, CA 92677  
(949) 582-1732  
_Located in the Three Flags Center near Costco on Cabot Road at Crown Valley_
