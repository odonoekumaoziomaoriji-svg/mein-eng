# Mein Engineering & Construction Limited Website

This is a complete multi-page static website based on the approved mockup and the supplied Mein Engineering brand assets.

## Folder structure

mein-engineering-website/
├── index.html
├── about.html
├── services.html
├── industries.html
├── projects.html
├── insights.html
├── contact.html
├── service-civil-engineering.html
├── service-building-construction.html
├── service-project-management.html
├── service-procurement-supply.html
├── service-structural-engineering.html
├── service-renovation-maintenance.html
└── assets/
    ├── style.css
    ├── script.js
    ├── hero.jpg
    ├── about.jpg
    ├── ...all supplied website images...
    └── logo-light.png / logo-dark-bg.png

## Brand colours used

- Primary red: #FB2105
- Charcoal: #2A323F
- Grey: #606062
- Cream added to balance the dark theme: #F7F1E8

## Scroll animation

Every page uses the shared `data-animate` attributes and IntersectionObserver code in `assets/script.js`.

Examples:
- `data-animate` = fade up
- `data-animate="left"` = slide in from left
- `data-animate="right"` = slide in from right
- `data-animate="zoom"` = subtle scale reveal

## Forms

The contact and newsletter forms are front-end demos only.
Before launch, connect them to:
- your own backend/API,
- PHP,
- Formspree,
- EmailJS,
- or another form handling service.

## Run locally

You can open `index.html` directly, but for best results run a simple local server.

Example with Python:

python -m http.server 8000

Then open:
http://localhost:8000

## Editing contact details

Search the HTML files for:
- +234 801 234 5678
- info@meinengineering.com
- 123 Development Drive, Lagos, Nigeria

Replace them with the actual company details.

## Important note

The Projects page intentionally presents project capabilities rather than fake completed projects because the company is a startup with no previous portfolio.
