# BlocksIndia Website - Project Documentation

## Project Overview
A modern blockchain validator website for BlocksIndia, built with React and Tailwind CSS. The site features a dark/light theme system with glassmorphism effects, gradient accents, and smooth animations.

**Live URL**: TBD (Vercel deployment)
**Repository**: BlockIndia-LLC/bi_website
**Last Updated**: February 2026

---

## Tech Stack

### Core Technologies
- **React**: 17.x
- **React Router**: v6 (with react-router-hash-link for smooth scrolling)
- **Tailwind CSS**: 3.x
- **Node.js**: 24.x (required for Vercel deployment)

### Key Dependencies
- `axios` - API calls for contact/demo forms
- `notiflix` - Toast notifications
- `aos` (Animate On Scroll) - Scroll animations
- `react-router-hash-link` - Smooth scrolling to sections

### Fonts
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif

---

## Design System

### Color Palette
```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',  // Main indigo
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  surface: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',  // Darkest
  },
  accent: {
    400: '#38bdf8',  // Sky blue
    500: '#0ea5e9',
  }
}
```

### Typography
- **Headings**: font-bold to font-black (700-900)
- **Body**: font-medium (500)
- **Small text**: font-medium to font-semibold
- **Sizes**:
  - Hero H1: `text-4xl md:text-5xl lg:text-6xl`
  - Section H2: `text-3xl md:text-4xl`
  - Card H3/H4: `text-lg` to `text-xl`

### Spacing System
- **Section Padding**: `py-20 lg:py-28`
- **Container**: `max-w-7xl mx-auto px-6`
- **Card Padding**: `p-6` to `p-8`
- **Gaps**: `gap-6` to `gap-16` (depending on context)

### Effects
- **Glassmorphism**: `bg-white/80 backdrop-blur-xl`
- **Shadows**: `shadow-lg` to `shadow-xl`
- **Hover Lift**: `hover:-translate-y-1`
- **Border Radius**: `rounded-xl` to `rounded-3xl`

### Custom CSS Classes (src/index.css)
```css
.gradient-text {
  @apply bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 bg-clip-text text-transparent;
}

.section-label {
  @apply inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-xs font-semibold text-primary-700 uppercase tracking-wider mb-4;
}

.glass {
  @apply bg-white/80 backdrop-blur-xl;
}
```

---

## Site Structure

### Routes
1. **/** - Home page (Hero, Intro, Services, Portfolio, Clients, CTA)
2. **/contact** - Contact form page
3. **/get-demo** - Product demo request page

### Component Architecture
```
src/
├── components/
│   ├── Navbar/
│   │   ├── NavBar.js       # Main navigation with glassmorphism
│   │   └── NavLinks.js     # Navigation links (About, Services, Portfolio, Contact Us, Demo)
│   ├── Hero.js             # Dark hero with gradient mesh
│   ├── Intro.js            # About section
│   ├── Services.js         # 4-column service cards
│   ├── Portfolio.js        # Product showcase
│   ├── Clients.js          # Logo bar
│   ├── Cta.js              # Call-to-action section
│   └── Footer.js           # Dark footer with links
├── pages/
│   ├── Contact.js          # Contact form + info sidebar
│   └── DemoProduct.js      # Demo request form
├── images/
│   ├── clients/            # Client logos
│   └── *.png/svg           # Various images
├── App.js                  # Main routing + AOS config
└── index.css               # Global styles + Tailwind
```

---

## Component Details

### Navbar (NavBar.js)
- **Background**: Fixed `bg-white/80 backdrop-blur-xl shadow-lg` (always visible)
- **Logo**: BlocksIndia image (3.5rem height) + gradient text + subtitle
- **Links**: About, Services, Portfolio, Contact Us, Demo button
- **Mobile**: Hamburger menu with slide-down panel
- **Styling**: Animated underline on hover using `after:` pseudo-elements

### Hero (Hero.js)
- **Background**: `bg-surface-950` with gradient orbs (blurred colored divs)
- **Layout**: Text column + image column
- **Content**: Status badge, H1, animated pills (Safe/Authentic/Trusted), subtitle, 2 CTAs
- **Image**: Hero illustration with gradient glow

### Services (Services.js)
- **Background**: `bg-surface-800` (dark)
- **Layout**: 4-column grid (responsive: 1 → 2 → 4 cols)
- **Data-driven**: Array of 4 services with number, title, description, feature tags
- **Cards**: Dark glass effect, white text, hover lift effect
- **Features**: Pill-style tags for tech stack

```javascript
const services = [
  {
    number: '01',
    title: 'Blockchain Development',
    description: 'From protocol design to mainnet deployment...',
    tags: ['Solidity', 'Rust', 'EVM', 'Layer 1/2']
  },
  // ... 3 more
];
```

### Portfolio (Portfolio.js)
- **Background**: `bg-white` (light)
- **Layout**: 4-column grid
- **Data-driven**: Array of 4 products with title, tagline, description, features
- **Cards**: White with border, gradient top bar on hover, feature pills
- **CTA**: "Schedule Demo" text link with arrow

### Contact (Contact.js)
- **Layout**: Dark hero strip + 2-column grid (form + sidebar)
- **Form**: Modern inputs with `focus:ring-2` effects
- **Sidebar**: Dark `bg-surface-950` with contact info
- **Submission**: Axios POST to API endpoint

### DemoProduct (DemoProduct.js)
- **Layout**: Similar to Contact page
- **Checkboxes**: 2x2 grid of product selection cards
- **Products**: DeFi, NFT, Gaming, Smart Contracts

---

## Key Design Patterns

### Dark Sections
- Background: `bg-surface-950` or `bg-surface-800`
- Text: `text-white`, `text-surface-200/60` (muted)
- Section labels: Adapted with `text-primary-300 bg-primary-950/30`

### Light Sections
- Background: `bg-white` or `bg-surface-50`
- Text: `text-surface-900`, `text-surface-800/60` (muted)
- Section labels: `bg-primary-50 text-primary-700`

### Card Hover States
- Border: `border-surface-200 hover:border-primary-200`
- Shadow: No shadow → `hover:shadow-xl hover:shadow-primary-500/5`
- Transform: `hover:-translate-y-1`
- Background: `bg-white hover:bg-primary-50/30`

### Button System
1. **Primary**: `bg-primary-600 hover:bg-primary-500 text-white rounded-2xl`
2. **Secondary**: `border border-white/20 hover:bg-white/5 text-white`
3. **Ghost**: Text link with arrow icon animation

---

## Animation Configuration

### AOS (Animate On Scroll)
```javascript
// App.js
AOS.init({
  duration: 600,        // Fast animations
  easing: 'ease-out',   // Smooth easing
  once: true,           // Animate only once
  mirror: false,
});
```

**Usage Pattern**:
- `data-aos="fade-up"` - Primary animation
- `data-aos-delay="100"` to `"200"` - Stagger delays (max 200ms)

### Custom Keyframe Animations
```css
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Build & Deployment

### Local Development
```bash
npm start              # Dev server at localhost:3000
npm run build          # Production build
npm test               # Run tests
```

### Vercel Deployment
**Requirements**: Node.js 24.x

**Configuration Files**:

1. **package.json** - Add engines field:
```json
"engines": {
  "node": "24.x"
}
```

2. **vercel.json** - Deployment config:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start",
  "installCommand": "npm install"
}
```

3. **Vercel Dashboard**: Also set Node.js version to 24.x in Project Settings

### Build Verification
Production build has been tested and confirmed working:
```bash
npm run build
# ✓ Build completed successfully
# Output: build/ directory ready for deployment
```

---

## Navigation Links

All navigation links use `react-router-hash-link` for smooth scrolling:

```javascript
// Internal section links (same page)
<HashLink smooth to="/#about">About</HashLink>
<HashLink smooth to="/#services">Services</HashLink>
<HashLink smooth to="/#portfolio">Portfolio</HashLink>

// Page links (different routes)
<HashLink to="/contact">Contact Us</HashLink>
<HashLink smooth to="/get-demo#demo">Demo our products</HashLink>
```

**Important**: Remove hash anchors on page navigation to avoid incorrect scrolling behavior.

---

## Recent Changes & Fixes

### Session Work (February 2026)

1. **Services Section** - Redesigned to compact 4-column vertical layout with dark background
2. **Portfolio Section** - Modernized text layout with taglines and feature pills
3. **Navbar Logo** - Reduced size by 30% (5rem → 3.5rem), added gradient text styling
4. **Hero Section** - Fixed duplicate content rendering issue
5. **Navigation** - Fixed Portfolio and Contact Us link scrolling behavior
6. **Build Errors** - Fixed JSX syntax errors in Contact.js and DemoProduct.js
7. **Node.js Version** - Updated to 24.x for Vercel compatibility

### Build Error Fixes
- **Contact.js**: Rewrote with proper JSX structure, fixed unclosed tags
- **DemoProduct.js**: Fixed malformed checkbox structure with clean grid layout

---

## Form Submission

### Contact Form
**Endpoint**: `/api/contact` (POST)
**Fields**:
- Name, Email, Subject, Message
- Validation required on all fields

### Demo Form
**Endpoint**: `/api/demo` (POST)
**Fields**:
- Name, Email, Company Name, Message
- Product checkboxes (DeFi, NFT, Gaming, Smart Contracts)

Both forms use:
- Axios for API calls
- Notiflix for success/error notifications
- Form state management with React hooks

---

## Assets & Images

### Logo
- **File**: `src/images/clients/blocksindia.png`
- **Style**: `height: 3.5rem, width: auto, mixBlendMode: colorBurn`

### Hero Image
- **File**: `src/images/block-dev.png`
- **Usage**: Hero section illustration

### Client Logos
- Location: `src/images/clients/`
- Display: Grayscale with hover color effect

---

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid & Flexbox
- Backdrop-filter (for glassmorphism)

---

## Development Guidelines

### When Adding New Components
1. Use data-driven patterns (arrays of objects)
2. Follow existing color schemes (dark or light sections)
3. Add AOS animations: `data-aos="fade-up"`
4. Use consistent spacing: `py-20 lg:py-28`
5. Include hover states on interactive elements

### Styling Conventions
- Prefer Tailwind utility classes over custom CSS
- Use `gradient-text` class for special headings
- Use `section-label` class for section tags
- Card borders: `border border-surface-200` (light) or `border-white/10` (dark)

### Testing Checklist
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] All navigation links work correctly
- [ ] Forms submit successfully
- [ ] AOS animations trigger on scroll
- [ ] Build completes without errors
- [ ] Navbar glassmorphism effect works
- [ ] Smooth scrolling to sections functions

---

## Known Configuration

### Tailwind Config Highlights
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { /* custom palette */ },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  }
}
```

### React Router Setup
```javascript
// App.js
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/get-demo" element={<DemoProduct />} />
  </Routes>
</Router>
```

---

## Future Considerations

### Potential Enhancements
- Add blog/articles section
- Implement dark mode toggle
- Add team member profiles
- Create case studies page
- Add testimonials section
- Implement search functionality
- Add internationalization (i18n)

### Performance Optimizations
- Image lazy loading
- Code splitting by route
- Optimize bundle size
- Add service worker for PWA

---

## Contact & Support

For questions about this codebase, refer to:
- This documentation file
- Inline code comments
- Git commit history
- Original design plan: `~/.claude/plans/bubbly-snacking-flurry.md`

---

**Document Version**: 1.0
**Last Maintained**: February 16, 2026
