# Muhammad Bhatti - Design Portfolio

A minimal, clean portfolio site built with Next.js, designed for deployment on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Adding Your Images

The portfolio is ready to go—you just need to add your images to the `/public/images/` folder.

### Required Images

| Filename | Where it appears | Recommended size | Notes |
|----------|------------------|------------------|-------|
| `shroomy-hero.png` | Homepage card | 1200×750px | App mockups on device frames |
| `shroomy-overview.png` | Case study | 1200×auto | Hero/overview image |
| `shroomy-research.png` | Case study | 1200×auto | Research insights visual |
| `shroomy-evolution.png` | Case study | 1200×auto | Before/after or design evolution |
| `shroomy-final.png` | Case study | 1200×auto | Final product screens |
| `bumble-hero.png` | Homepage card + Case study | 1200×750px | The yellow branded mockup you have |
| `bumble-analysis.png` | Case study | 1200×auto | Voting behavior analysis from your strategy doc |
| `bumble-strategy.png` | Case study | 1200×auto | Above/below fold strategy visual |
| `bumble-features.png` | Case study | 1200×auto | Interest badges, Spotify integration |
| `boyfriend-hero.png` | Homepage card + Case study | 1200×750px | Landing page or brand overview |
| `boyfriend-marketing.png` | Case study | 1200×auto | Your poster designs (Monogamy, Grindr) |
| `boyfriend-product.png` | Case study | 1200×auto | App interface screenshots |

### Image Tips

1. **Device mockups**: Use a tool like [Shots](https://shots.so), [Mockuphone](https://mockuphone.com), or Figma templates to place your screenshots in device frames

2. **Consistent backgrounds**: The site uses `#f5f5f5` for card backgrounds—your mockup images can have transparent backgrounds or match this grey

3. **The Bumble image you shared** (the yellow one with Spotify integration) is perfect for `bumble-hero.png` and `bumble-features.png`

4. **For the strategy slides**: You could screenshot the relevant slides from your strategy doc, or recreate cleaner versions

## Customisation

### Personal Info
Edit `src/app/page.tsx` to update:
- Your intro text
- Email address
- Social links in the footer

### Case Study Content
Each case study is in `src/app/projects/[name]/page.tsx`. The content is structured as:
- Context (what & why)
- Problem (the challenge)
- Approach/Strategy (how you thought about it)
- Solution/Features (what you built)
- Outcome (results & metrics)

### Styling
Global styles are in `src/app/globals.css`. Key variables at the top control:
- Colors (background, text, accents)
- Typography (font family, sizes)
- Spacing (padding, margins)

## Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Vercel auto-detects Next.js—just click Deploy

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

## Project Structure

```
├── public/
│   └── images/          # Your portfolio images go here
├── src/
│   └── app/
│       ├── globals.css  # Global styles
│       ├── layout.tsx   # Root layout
│       ├── page.tsx     # Homepage
│       └── projects/
│           ├── shroomy/page.tsx
│           ├── bumble/page.tsx
│           └── boyfriend/page.tsx
├── next.config.js
├── package.json
└── README.md
```

## Notes

- The site uses static export (`output: 'export'` in next.config.js) for simple hosting
- Images are unoptimized to work with static export
- DM Sans font is loaded from Google Fonts
- Fully responsive for mobile

---

Built with Next.js 14 and deployed on Vercel.
