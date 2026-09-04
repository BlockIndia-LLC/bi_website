# Technical Reference - BlocksIndia Website

Quick reference guide for developers working on this codebase.

---

## Common Code Patterns

### Data-Driven Components

All major sections use array-based data structures for maintainability:

```javascript
// Services.js pattern
const services = [
  {
    number: '01',
    title: 'Service Name',
    description: 'Brief description...',
    tags: ['Tech1', 'Tech2', 'Tech3']
  },
  // ... more items
];

return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {services.map((service, index) => (
      <div key={index} className="card-styles">
        {/* Render service */}
      </div>
    ))}
  </div>
);
```

### Navigation Links

```javascript
// Internal section (same page)
<HashLink smooth to="/#section-id">
  Link Text
</HashLink>

// External page
<HashLink to="/page-route">
  Link Text
</HashLink>

// External page with section
<HashLink smooth to="/page-route#section-id">
  Link Text
</HashLink>
```

**Note**: Avoid hash-only anchors on page navigation (`/contact#contact`) as it causes scroll issues. Use clean routes instead (`/contact`).

---

## Component Templates

### Section Container Template

```jsx
<section className="py-20 lg:py-28 bg-white" id="section-id">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section label */}
    <div className="text-center mb-16" data-aos="fade-up">
      <span className="section-label">Section Label</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900">
        Section <span className="gradient-text">Heading</span>
      </h2>
      <p className="text-lg text-surface-600 mt-4 max-w-2xl mx-auto">
        Optional subtitle text
      </p>
    </div>

    {/* Content */}
    <div data-aos="fade-up" data-aos-delay="100">
      {/* Your content grid/layout */}
    </div>
  </div>
</section>
```

### Card Component Template (Light Background)

```jsx
<div className="group relative bg-white rounded-2xl border border-surface-200 p-6
     hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5
     hover:-translate-y-1 transition-all duration-300">

  {/* Optional: Gradient accent bar */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r
       from-primary-500 to-accent-400 rounded-t-2xl opacity-0
       group-hover:opacity-100 transition-opacity duration-300" />

  {/* Card content */}
  <h4 className="font-bold text-xl text-surface-900 mb-3">
    Card Title
  </h4>
  <p className="text-surface-600 text-sm leading-relaxed">
    Card description text
  </p>
</div>
```

### Card Component Template (Dark Background)

```jsx
<div className="group relative rounded-2xl border border-white/10
     bg-white/5 hover:bg-white/[0.08] p-6 transition-all duration-300">

  {/* Card content */}
  <h4 className="font-bold text-lg text-white mb-3">
    Card Title
  </h4>
  <p className="text-surface-200/60 text-sm leading-relaxed">
    Card description text
  </p>
</div>
```

### Button Components

```jsx
// Primary button
<Link to="/route"
  className="inline-flex items-center justify-center px-8 py-4
  text-base font-semibold text-white bg-primary-600 hover:bg-primary-500
  rounded-2xl transition-all duration-300 shadow-lg shadow-primary-600/30
  hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 group">
  Button Text
  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
    {/* Arrow icon */}
  </svg>
</Link>

// Secondary button (outline)
<Link to="/route"
  className="inline-flex items-center justify-center px-8 py-4
  text-base font-semibold text-white border border-white/20
  hover:border-white/40 hover:bg-white/5 rounded-2xl
  transition-all duration-300">
  Button Text
</Link>

// Text link with arrow
<Link to="/route"
  className="inline-flex items-center text-sm font-semibold
  text-primary-600 hover:text-primary-700 group transition-colors">
  Link Text
  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform">
    {/* Arrow icon */}
  </svg>
</Link>
```

---

## Form Patterns

### Form Container

```jsx
<form onSubmit={handleSubmit} className="space-y-6">
  {/* Form fields */}
</form>
```

### Input Field

```jsx
<div>
  <label htmlFor="field-id"
    className="block text-sm font-medium text-surface-700 mb-2">
    Field Label
  </label>
  <input
    type="text"
    id="field-id"
    name="fieldName"
    value={formData.fieldName}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-xl border border-surface-200
    focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
    outline-none transition-all duration-200"
    placeholder="Enter text..."
  />
</div>
```

### Textarea Field

```jsx
<div>
  <label htmlFor="message"
    className="block text-sm font-medium text-surface-700 mb-2">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    rows="6"
    value={formData.message}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-xl border border-surface-200
    focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
    outline-none transition-all duration-200 resize-none"
    placeholder="Your message..."
  />
</div>
```

### Checkbox Card

```jsx
<label className="flex items-center gap-3 p-3 rounded-xl
  border border-surface-200 hover:border-primary-200
  hover:bg-primary-50/50 cursor-pointer transition-all duration-200">
  <input
    type="checkbox"
    value="option-value"
    onChange={handleChange}
    className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
  />
  <span className="text-sm font-medium text-surface-800">
    Option Label
  </span>
</label>
```

### Submit Button

```jsx
<button
  type="submit"
  className="w-full bg-primary-600 hover:bg-primary-500 text-white
  font-semibold py-4 px-8 rounded-xl transition-all duration-300
  shadow-lg shadow-primary-600/20 hover:shadow-xl
  hover:shadow-primary-500/30 hover:-translate-y-0.5">
  Submit Form
</button>
```

---

## Animation Patterns

### AOS Attributes

```jsx
// Basic fade-up (most common)
<div data-aos="fade-up">Content</div>

// With delay (use sparingly, max 200ms)
<div data-aos="fade-up" data-aos-delay="100">Content</div>

// Header + content stagger pattern
<div data-aos="fade-up">Header</div>
<div data-aos="fade-up" data-aos-delay="100">Content</div>
```

### Hover Animations

```jsx
// Icon slide/movement
<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform">

// Card lift
<div className="hover:-translate-y-1 transition-all duration-300">

// Opacity change
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">

// Background color
<div className="bg-white/5 hover:bg-white/[0.08] transition-all duration-300">
```

---

## Responsive Grid Patterns

### 2-Column → 4-Column

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Items */}
</div>
```

### 1-Column → 2-Column → 3-Column

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

### Two-Column Layout (50/50)

```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
  <div>{/* Left column */}</div>
  <div>{/* Right column */}</div>
</div>
```

### Form + Sidebar Layout

```jsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">
    {/* Form - takes 2/3 width */}
  </div>
  <div className="lg:col-span-1">
    {/* Sidebar - takes 1/3 width */}
  </div>
</div>
```

---

## Color Usage Guide

### Dark Sections
```jsx
// Background
className="bg-surface-950"  // Darkest (Hero, Footer)
className="bg-surface-900"  // Slightly lighter
className="bg-surface-800"  // Less dark (Services)

// Text
className="text-white"                    // Headings
className="text-surface-200/60"           // Body text (muted)
className="text-surface-300"              // Secondary text

// Section label (dark adapted)
className="section-label bg-primary-950/30 border-primary-800 text-primary-300"

// Borders & dividers
className="border-white/10"               // Subtle borders
className="border-white/20"               // Visible borders
```

### Light Sections
```jsx
// Background
className="bg-white"        // Pure white
className="bg-surface-50"   // Subtle gray

// Text
className="text-surface-900"              // Headings
className="text-surface-800"              // Subheadings
className="text-surface-600"              // Body text

// Section label (light)
className="section-label bg-primary-50 border-primary-200 text-primary-700"

// Borders & dividers
className="border-surface-200"            // Standard borders
className="border-surface-300"            // Visible borders
```

### Accent Colors
```jsx
// Gradient text
className="gradient-text"  // Pre-defined class

// Borders
className="border-primary-500"
className="hover:border-primary-200"

// Backgrounds
className="bg-primary-600 hover:bg-primary-500"  // Buttons
className="bg-primary-50"                        // Subtle backgrounds

// Shadows
className="shadow-primary-600/30"        // Button shadow
className="shadow-primary-500/5"         // Card hover shadow
```

---

## Icon Usage

### Arrow Icon (Heroicons)
```jsx
<svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform"
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd"
    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    clipRule="evenodd" />
</svg>
```

### Animated Pulse Dot
```jsx
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
```

---

## Gradient Patterns

### Gradient Text
```jsx
<span className="gradient-text">Text</span>
// or
<span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
  bg-clip-text text-transparent">
  Text
</span>
```

### Gradient Background
```jsx
<div className="bg-gradient-to-r from-primary-500 to-accent-400" />
<div className="bg-gradient-to-br from-primary-600/30 to-accent-400/20" />
```

### Gradient Border (via pseudo-element)
```jsx
<div className="relative">
  <div className="absolute inset-0 rounded-2xl
    bg-gradient-to-r from-primary-500 to-accent-400 opacity-20" />
  <div className="relative bg-white rounded-2xl p-6">
    Content
  </div>
</div>
```

### Gradient Orbs (Mesh Background)
```jsx
<div className="absolute inset-0">
  <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px]
    bg-primary-600/30 rounded-full blur-[128px]" />
  <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px]
    bg-accent-400/20 rounded-full blur-[128px]" />
</div>
```

---

## Feature Pills/Tags

```jsx
<div className="flex flex-wrap gap-1.5">
  {tags.map((tag, i) => (
    <span key={i} className="px-2.5 py-1 text-[11px] font-medium
      text-surface-600 bg-surface-50 rounded-full
      border border-surface-200">
      {tag}
    </span>
  ))}
</div>
```

For dark backgrounds:
```jsx
<span className="px-2.5 py-1 text-[11px] font-medium
  text-surface-300 bg-white/5 rounded-full
  border border-white/10">
  Tag
</span>
```

---

## Image Patterns

### Logo Image
```jsx
const imageStyle = {
  height: '3.5rem',
  width: 'auto',
  mixBlendMode: 'colorBurn'
};

<div style={imageStyle} className="overflow-hidden flex justify-center">
  <img src={logoSrc} alt="Company Name" />
</div>
```

### Hero/Feature Image with Glow
```jsx
<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-tr
    from-primary-500/20 to-accent-400/20 rounded-3xl blur-2xl" />
  <img alt="description"
    className="relative rounded-3xl w-full"
    src={imageSrc} />
</div>
```

### Client Logo Grid
```jsx
<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
  {logos.map((logo, index) => (
    <img
      key={index}
      src={logo.src}
      alt={logo.alt}
      className="h-12 w-auto grayscale opacity-40
        hover:grayscale-0 hover:opacity-100
        transition-all duration-300"
    />
  ))}
</div>
```

---

## API Integration Pattern

```javascript
import axios from 'axios';
import Notiflix from 'notiflix';

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/endpoint', formData);

    if (response.data.success) {
      Notiflix.Report.success(
        'Success',
        'Your message has been sent successfully!',
        'Okay'
      );
      // Reset form
      setFormData(initialState);
    }
  } catch (error) {
    console.error('Error:', error);
    Notiflix.Report.failure(
      'Error',
      'Something went wrong. Please try again.',
      'Okay'
    );
  }
};
```

---

## Tailwind Config Snippets

### Adding New Colors
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'custom-color': {
        50: '#...',
        // ... 100-900
        950: '#...'
      }
    }
  }
}
```

### Adding Custom Animations
```javascript
// tailwind.config.js
theme: {
  extend: {
    keyframes: {
      customAnimation: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      }
    },
    animation: {
      'custom': 'customAnimation 0.6s ease-out'
    }
  }
}
```

---

## Common Utilities

### Glassmorphism
```jsx
className="bg-white/80 backdrop-blur-xl"
className="bg-white/10 backdrop-blur-md"  // For dark backgrounds
```

### Text Truncation
```jsx
className="truncate"           // Single line
className="line-clamp-2"       // 2 lines
className="line-clamp-3"       // 3 lines
```

### Aspect Ratios
```jsx
className="aspect-video"       // 16:9
className="aspect-square"      // 1:1
```

### Z-Index Layers
```jsx
className="z-10"   // Above normal content
className="z-20"   // Overlays
className="z-30"   // Navbar (fixed)
className="z-40"   // Modals
className="z-50"   // Toasts/notifications
```

---

## Performance Tips

1. **Lazy Load Images**: Use `loading="lazy"` on img tags
2. **Memoize Data Arrays**: Use `useMemo` for large data sets
3. **Debounce Form Inputs**: For search/filter inputs
4. **Code Split Routes**: Already done with React Router
5. **Optimize Images**: Compress before adding to project

---

## Testing Checklist

Before pushing changes:

- [ ] `npm run build` completes without errors
- [ ] All routes render correctly
- [ ] Navigation links work (internal & external)
- [ ] Forms submit successfully
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] AOS animations trigger on scroll
- [ ] Hover states work on interactive elements
- [ ] No console errors in browser
- [ ] Images load properly
- [ ] Glassmorphism effects visible

---

## Quick Troubleshooting

### Build fails with JSX errors
- Check for unclosed tags
- Verify proper nesting of elements
- Ensure fragments `<>...</>` are properly closed

### Navigation not scrolling smoothly
- Use `HashLink` with `smooth` prop
- Ensure target has correct `id` attribute
- Check for hash anchor issues on page routes

### Styles not applying
- Verify Tailwind classes are spelled correctly
- Check if custom classes are in `src/index.css`
- Ensure content paths in `tailwind.config.js` are correct

### Forms not submitting
- Check API endpoint paths
- Verify Axios is imported
- Check network tab for CORS issues
- Ensure Notiflix is imported for notifications

---

**Document Version**: 1.0
**Last Updated**: February 16, 2026
