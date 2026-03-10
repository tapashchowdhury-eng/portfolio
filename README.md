# Tapash Chowdhury — Portfolio Website

> Cloud & Security Engineer Portfolio | Built with Next.js 14, Tailwind CSS, Framer Motion

## ⚡ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Fonts | Syne + JetBrains Mono |
| Blog | Markdown (built-in) |
| Deployment | Vercel |

---

## 🗂 Project Structure

```
tapash-portfolio/
├── app/
│   ├── globals.css          # Global styles + cyber theme
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Main page (all sections)
│   └── blog/
│       ├── page.tsx         # Blog listing page
│       └── [slug]/
│           └── page.tsx     # Blog post page
├── components/
│   ├── Nav.tsx              # Navigation bar
│   ├── Hero.tsx             # Hero + particle canvas
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills with animated bars
│   ├── Projects.tsx         # Project cards with filtering
│   ├── BlogSection.tsx      # Blog preview + search
│   ├── Certifications.tsx   # Cert cards
│   ├── Timeline.tsx         # Experience timeline
│   ├── Contact.tsx          # Contact form + social links
│   └── Footer.tsx           # Minimal footer
├── posts/                   # Markdown blog posts
│   └── *.md
├── public/                  # Static assets
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# 1. Navigate to project
cd tapash-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 📝 Adding Blog Posts

Blog posts are written in Markdown. To add a new article:

1. Add the article content to `app/blog/[slug]/page.tsx` in the `articles` object:

```typescript
'your-article-slug': {
  title: 'Your Article Title',
  date: '2026-03-01',
  readTime: '8 min',
  tags: ['Tag1', 'Tag2'],
  content: `
## Introduction
Your content here...
  `,
},
```

2. Add the article to the `articles` array in `components/BlogSection.tsx` for the homepage preview.

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy from project root
cd tapash-portfolio
vercel

# 4. Follow prompts:
#    - Set up and deploy: Y
#    - Which scope: (your account)
#    - Link to existing project: N
#    - Project name: tapash-portfolio
#    - Directory: ./
#    - Override settings: N

# 5. Production deploy
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/tapash-portfolio.git
git push -u origin main
```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://tapash-portfolio.vercel.app`

### Option 3: Custom Domain

After deploying to Vercel:
1. Go to your project settings → Domains
2. Add `tapash.dev` (or your domain)
3. Add the provided DNS records to your domain registrar
4. SSL is automatically provisioned

---

## 🎨 Customization

### Colors (tailwind.config.js)
```js
colors: {
  'cyber-black': '#050810',    // Background
  'electric-blue': '#00a8ff',  // Primary accent
  'cyber-green': '#00ff9d',    // Secondary accent
}
```

### Personal Info
Update these files with your actual information:
- `components/Hero.tsx` — Name, tagline
- `components/About.tsx` — Bio, specialties
- `components/Skills.tsx` — Skills and proficiency levels
- `components/Projects.tsx` — Your projects
- `components/Timeline.tsx` — Work experience
- `components/Certifications.tsx` — Your certifications
- `components/Contact.tsx` — Social links, email

### Profile Photo
Replace the photo placeholder in `components/About.tsx`:
```tsx
// Replace the placeholder div with:
<Image
  src="/photo.jpg"
  alt="Tapash Chowdhury"
  fill
  className="object-cover"
/>
```
Add your photo as `public/photo.jpg`.

---

## 📊 Performance

The site is optimized for:
- **Lighthouse score**: 95+
- **Core Web Vitals**: All green
- **Mobile responsive**: Full support
- **SEO**: Metadata, OpenGraph, Twitter cards

---

## 📄 License

MIT — Feel free to use as a template.

---

Built by Tapash Chowdhury | [LinkedIn](https://www.linkedin.com/in/tapash-chowdhury75/)
