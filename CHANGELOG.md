# Changelog

All notable changes to the BlocksIndia website project.

## [2.0.1] - February 16, 2026

### Added
- Created comprehensive project documentation (`PROJECT_DOCUMENTATION.md`)
- Created this changelog file
- Added `vercel.json` configuration for deployment
- Added Node.js 24.x engine specification in `package.json`

### Changed - Services Section
- Redesigned to compact 4-column vertical grid layout
- Changed background from light to dark (`bg-surface-800`)
- Converted to data-driven pattern with services array
- Updated text colors to light theme for dark background readability
- Added numbered service cards (01, 02, 03, 04)
- Added feature tags as pill-style elements
- Improved hover effects with subtle background changes

### Changed - Portfolio Section
- Completely rewrote text layout for modern design
- Added tagline labels above each product title
- Rewrote product descriptions with technical, concise copy
- Added feature tags (Smart Contracts, Minting, Token Rewards, etc.)
- Changed CTA from buttons to text links with arrows
- Added gradient top bar that appears on hover
- Maintained 4-column responsive grid

### Changed - Navbar
- Fixed background to always show glassmorphism effect
- Changed from conditional `bg-white/80` to fixed visibility
- Modernized logo section with gradient text
- Reduced logo image size by 30% (5rem → 3.5rem)
- Added subtitle "Blockchain Validator" under main logo text
- Restored BlocksIndia logo image alongside modern text design

### Changed - Hero Section
- Fixed duplicate hero content rendering issue
- Removed old hero code that was causing skewed layout
- Maintained modern version with gradient mesh background

### Changed - Navigation Links
- Fixed Portfolio link to scroll smoothly to `#portfolio` section
- Changed Contact Us link from `/contact#contact` to `/contact`
- Updated Contact Us styling to match other nav links
- Added animated underline effect to Contact Us link
- Removed hash anchor to fix incorrect auto-scrolling behavior

### Fixed
- **Build Error in Contact.js**: Completely rewrote with proper JSX structure
  - Fixed unterminated JSX contents error
  - Properly closed all div tags and fragments
  - Corrected social media links placement
  - Fixed form grid layout structure

- **Build Error in DemoProduct.js**: Fixed malformed checkbox structure
  - Removed mixed old/new implementations
  - Created clean 2x2 grid of checkbox cards
  - Properly structured label+input pairs
  - Fixed unclosed label tag issues

- **Vercel Deployment**: Resolved Node.js version incompatibility
  - Updated from 18.x to 24.x in package.json
  - Added vercel.json configuration
  - Documented Vercel dashboard settings requirement

- **Hero Section Layout**: Fixed "swewed and ugly" appearance
  - Identified duplicate hero sections rendering
  - Removed old hero content (lines 24-45)
  - Kept only modern single hero structure

- **Services Section Readability**: Iteratively fixed through user feedback
  - Iteration 1: Changed to light background
  - Iteration 2: Changed to `bg-surface-50` for differentiation
  - Final: Changed to `bg-surface-800` with light text colors

### Verified
- Production build completes successfully (`npm run build`)
- Dev server runs without errors at localhost:3000
- All navigation links function correctly
- Smooth scrolling to sections works properly
- Forms submission logic intact
- Responsive design across mobile, tablet, desktop

---

## [2.0.0] - January 2026

### Added
- Complete UI redesign with modern dark theme
- Glassmorphism effects on navbar
- Gradient mesh backgrounds
- AOS scroll animations
- Custom Tailwind theme with primary/surface/accent colors
- Inter font family via Google Fonts
- Data-driven component patterns

### Changed
- Migrated from Lato to Inter font
- Updated color palette from blue-900 to indigo/sky-blue scheme
- Redesigned all major sections (Hero, Intro, Services, Portfolio, Clients, CTA, Footer)
- Updated card hover effects from gray transitions to subtle lifts
- Modernized form inputs with rounded corners and focus states

### Removed
- Old background images and SVG patterns
- Heavy shadow effects
- Dated blue-900 color scheme
- Aggressive hover state transitions

---

## [1.0.0] - 2024

### Initial Release
- Basic React website structure
- Contact and demo request forms
- Portfolio showcase
- Services listing
- Client logos section
- Responsive design with Tailwind CSS
- React Router navigation

---

## Version Notes

**Versioning Scheme**: MAJOR.MINOR.PATCH
- MAJOR: Complete redesigns or breaking changes
- MINOR: New features or significant component updates
- PATCH: Bug fixes, small tweaks, documentation updates

**Branch Strategy**:
- `main`: Production-ready code
- `2.0_dev`: Feature development branch
- Feature branches merged via pull requests
