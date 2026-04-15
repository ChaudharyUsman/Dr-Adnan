# Dr Adnan Saleem Portfolio

A responsive, single-page doctor portfolio website built with HTML, CSS, JavaScript, Bootstrap, jQuery, and Owl Carousel.

This project presents Dr. Adnan Saleem's profile, timeline, achievements, testimonials, booking link, and contact details in a clean medical-themed interface.

## Project Analysis

### What This Project Is
- A static frontend website (no backend required).
- A personal/medical portfolio with a one-page scroll experience.
- Designed for fast loading and easy deployment on any static host.

### Core Sections in the Page
- `Home (Hero)`: intro text, animated words, and carousel image.
- `About`: profile summary and auto-calculated years of experience.
- `Gallery`: image cards with reveal animations and hover effects.
- `Timeline`: education, house job, service, and current focus milestones.
- `Achievements`: certification cards with links/images.
- `Testimonials`: carousel-based patient reviews.
- `Booking`: Google Calendar booking CTA.
- `Footer/Contact`: clinic info, hours, social links, and dynamic year.

### Key Dynamic Behaviors
Defined in `js/custom.js`:
- Auto-updates footer year (`#currentYear`).
- Auto-calculates experience years from `data-experience-start`.
- Smooth scrolling for anchor links.
- Responsive Owl Carousel for testimonials.
- Hero carousel autoplay via Bootstrap.
- Collapses mobile navbar after clicking a nav link.

### Design and Styling Notes
Defined in `css/dp.css`:
- CSS variables for theme tokens (colors, font sizes, weights).
- Medical-professional visual style with white/blue palette.
- Section-level animations (gallery cards, timeline cards).
- Responsive breakpoints for tablets and mobile.
- Enhanced footer design with gradient background and social icon states.

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES5-style + jQuery)
- Bootstrap 5
- Bootstrap Icons
- Owl Carousel 2
- ScrollSpy plugin (`js/scrollspy.min.js`)

## Folder Structure

```text
Doctor-Portfolio/
  index.html
  LICENSE
  README.md
  css/
    bootstrap-icons.css
    bootstrap.min.css
    dp.css
    owl.carousel.min.css
    owl.theme.default.min.css
  fonts/
  images/
    gallery/
    reviews/
    slider/
  js/
    bootstrap.bundle.min.js
    custom.js
    jquery.min.js
    owl.carousel.min.js
    scrollspy.min.js
```

## Run Locally

Because this is a static website, you can run it with any local server.

### Option 1: VS Code Five Server / Live Server
1. Open the `Doctor-Portfolio` folder in VS Code.
2. Start Five Server or Live Server on `index.html`.
3. Open the generated local URL in browser.

### Option 2: Python HTTP Server
From project root:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Customization Guide

### Personal Information
Edit content directly in `index.html`:
- Name and designation in navbar/hero.
- About text and timeline entries.
- Testimonials and achievements.
- Contact details and social links.

### Experience Counter
In `index.html`, update:

```html
<span id="experienceValue" data-experience-start="2024-06-06">1.50</span>
```

Only change `data-experience-start`; JavaScript updates the numeric years automatically.

### Booking Link
Update the anchor in the Booking section:

```html
<a href="https://calendar.app.google/CxcskMzqerKP2PWp7" ...>Book Now</a>
```

### Theme Colors and Spacing
Edit CSS variables in `css/dp.css` under `:root`.

## SEO and Metadata
Current metadata is in the `<head>` of `index.html`:
- Title and favicon
- Open Graph image/title
- Twitter card image

Recommended improvements:
- Add a meaningful `meta description`.
- Add canonical URL once domain is finalized.
- Add structured data (JSON-LD) for doctor profile.

## Accessibility Notes
Already present:
- Most images include `alt` text.
- Button/link interactions are clear.

Suggested improvements:
- Ensure color contrast for all footer links on smaller screens.
- Add `aria-label` where icon-only links appear.
- Verify heading order for screen readers.

## Deployment
You can deploy this project on any static host:
- GitHub Pages
- Netlify
- Vercel (static mode)
- Firebase Hosting

Deployment is straightforward because there is no backend build step.

## License
This project is licensed under the MIT License. See `LICENSE`.

## Author Credit
Designed and developed by Usman Saleem (already credited in footer of `index.html`).
