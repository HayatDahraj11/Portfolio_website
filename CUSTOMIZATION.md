# Customization Guide

Complete guide to personalizing your portfolio website.

## 📝 Table of Contents

1. [Basic Information](#basic-information)
2. [Visual Customization](#visual-customization)
3. [Content Updates](#content-updates)
4. [Advanced Customization](#advanced-customization)
5. [Performance Optimization](#performance-optimization)

---

## Basic Information

### Step 1: Update Personal Details

**File**: `index.html`

Replace all instances of "Hayat Sikandar" with your name:
- Use Find & Replace (Ctrl+H / Cmd+H) in your code editor
- Search for: `Hayat Sikandar`
- Replace with: `Your Name`

**Update these specific sections**:

#### Meta Tags (in `<head>`)
```html
<meta name="author" content="Your Name">
<title>Your Name - AI Automation & Full-Stack Developer</title>
```

#### Hero Section
```html
<span class="hero-name">Your Name</span>
```

#### Footer
```html
<p class="footer-copyright">&copy; 2025 Your Name. All rights reserved.</p>
```

---

### Step 2: Update Contact Information

**Email Address**:
```html
<!-- In contact section -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

**Social Media Links**:
```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile">

<!-- GitHub -->
<a href="https://github.com/yourusername">

<!-- Twitter/X -->
<a href="https://twitter.com/yourhandle">
```

**Update in multiple places**:
- Contact section (main links)
- Footer (social icons)
- Schema.org markup (in `<head>`)

---

### Step 3: Update URL References

**File**: Multiple files

Update domain references:
- `index.html`: Open Graph tags, canonical URLs
- `sitemap.xml`: All URL entries
- `robots.txt`: Sitemap URL
- `README.md`: Example URLs

Search and replace `hayatsikandar.com` with your actual domain.

---

## Visual Customization

### Color Scheme

**File**: `css/styles.css`

Find the `:root` section and modify:

```css
:root {
    /* Main Background */
    --bg-primary: #121212;        /* Dark charcoal */
    
    /* Accent Color */
    --accent-primary: #00A8A8;    /* Teal-blue */
    --accent-secondary: #008888;
    --accent-hover: #00c9c9;
    
    /* Text Colors */
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    
    /* Borders */
    --border-color: #333333;
}
```

**Color Scheme Ideas**:

**Professional Blue**:
```css
--accent-primary: #2563eb;
--accent-secondary: #1e40af;
--accent-hover: #3b82f6;
```

**Vibrant Purple**:
```css
--accent-primary: #8b5cf6;
--accent-secondary: #7c3aed;
--accent-hover: #a78bfa;
```

**Modern Orange**:
```css
--accent-primary: #f97316;
--accent-secondary: #ea580c;
--accent-hover: #fb923c;
```

**Elegant Green**:
```css
--accent-primary: #10b981;
--accent-secondary: #059669;
--accent-hover: #34d399;
```

---

### Typography

**Change Fonts**:

1. **Choose fonts** from [Google Fonts](https://fonts.google.com/)

2. **Update the Google Fonts link** in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourHeadingFont:wght@300;400;600;700&family=YourBodyFont:wght@300;400;500&display=swap" rel="stylesheet">
```

3. **Update CSS variables** in `css/styles.css`:
```css
:root {
    --font-heading: 'YourHeadingFont', sans-serif;
    --font-body: 'YourBodyFont', sans-serif;
}
```

**Popular Font Combinations**:
- **Modern**: Inter + Roboto (default)
- **Elegant**: Playfair Display + Source Sans Pro
- **Tech**: Space Grotesk + Work Sans
- **Classic**: Merriweather + Open Sans

---

### Layout & Spacing

**Adjust section padding** in `css/styles.css`:
```css
:root {
    --section-padding: 120px;  /* Increase/decrease vertical spacing */
    --container-padding: 24px; /* Adjust horizontal padding */
}
```

**Change maximum content width**:
```css
.container {
    max-width: 1200px;  /* Change to 1400px for wider, 1000px for narrower */
}
```

---

## Content Updates

### About Section

**File**: `index.html`

Update your bio (search for `<section id="about">`):

```html
<p>Your first paragraph introducing yourself...</p>
<p>Your second paragraph about your expertise...</p>
<p>Your third paragraph about your approach...</p>
```

**Update Statistics**:
```html
<div class="stat-item">
    <div class="stat-number">X+</div>
    <div class="stat-label">Your Metric</div>
</div>
```

**Value Proposition**:
```html
<p><strong>Your unique value proposition here.</strong></p>
```

---

### Projects

#### Adding a New Project

**HTML** (`index.html`):
```html
<article class="project-card" data-category="ai">
    <div class="project-image">
        <img src="assets/images/your-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <button class="btn-icon" onclick="openProjectModal('projectX')">
                <!-- Icon SVG -->
            </button>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Brief description (2-3 sentences)</p>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
        </div>
        <div class="project-links">
            <a href="demo-url" target="_blank">Live Demo</a>
            <a href="github-url" target="_blank">GitHub</a>
        </div>
    </div>
</article>
```

**JavaScript** (`js/main.js`):

Add project details to the `projectDetails` object:
```javascript
const projectDetails = {
    // ... existing projects
    projectX: {
        title: 'Your Project Title',
        image: 'assets/images/your-project.jpg',
        description: 'Detailed description...',
        problem: 'The problem it solves...',
        solution: 'How you solved it...',
        technologies: ['Tech1', 'Tech2', 'Tech3'],
        results: [
            'Result 1',
            'Result 2',
            'Result 3'
        ],
        links: {
            demo: 'https://demo-url.com',
            github: 'https://github.com/...'
        }
    }
};
```

#### Removing a Project

1. Delete the `<article class="project-card">` element in HTML
2. Remove corresponding entry from `projectDetails` in JavaScript

---

### Skills Section

**Update skill categories and items**:

```html
<div class="skill-category">
    <h3 class="skill-category-title">
        <!-- Icon SVG -->
        Your Category Name
    </h3>
    <div class="skills-list">
        <div class="skill-item">
            <div class="skill-info">
                <span class="skill-name">Your Skill</span>
                <span class="skill-level">90%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
            </div>
        </div>
        <!-- More skills -->
    </div>
</div>
```

**Tips**:
- Be honest with skill levels
- Group related skills together
- Focus on your strongest skills
- Update as you learn new technologies

---

### Testimonials

**Add/modify testimonials**:

```html
<article class="testimonial-card">
    <div class="testimonial-content">
        <svg class="quote-icon">...</svg>
        <p class="testimonial-text">"The testimonial quote goes here. Keep it concise and impactful."</p>
    </div>
    <div class="testimonial-author">
        <div class="author-info">
            <div class="author-name">Client Name</div>
            <div class="author-title">Position, Company Name</div>
        </div>
    </div>
</article>
```

**Best Practices**:
- Get permission before publishing
- Use real testimonials when possible
- Include full name and position
- Keep quotes under 150 words
- Highlight specific achievements

---

## Advanced Customization

### Adding New Sections

To add a new section (e.g., "Blog", "Certifications"):

1. **Create HTML structure**:
```html
<section id="yoursection" class="yoursection section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <p class="section-subtitle">Subtitle here</p>
        
        <!-- Your content -->
        
    </div>
</section>
```

2. **Add to navigation**:
```html
<li><a href="#yoursection" class="nav-link">Section Name</a></li>
```

3. **Style with CSS** in `css/styles.css`:
```css
.yoursection {
    background: var(--bg-secondary);
}

/* Additional styles */
```

---

### Animations

**Add custom animations** in `css/styles.css`:

```css
@keyframes yourAnimation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.your-element {
    animation: yourAnimation 0.6s ease;
}
```

**Use sparingly** - maintain the minimalist aesthetic.

---

### Changing the Hero Background

**Option 1: Gradient (current)**
```css
.hero-background {
    background: radial-gradient(...);
}
```

**Option 2: Image**
```css
.hero-background {
    background-image: url('../assets/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
}
```

**Option 3: Animated Gradient**
```css
.hero-background {
    background: linear-gradient(45deg, #121212, #1a1a1a, #242424);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}
```

---

## Performance Optimization

### Image Optimization

**Before uploading images**:

1. **Resize** to appropriate dimensions
2. **Compress** using:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
3. **Convert** to WebP for better compression
4. **Lazy load** (already implemented)

### Minification

**For production**, minify CSS and JavaScript:

```bash
# Install tools
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o css/styles.min.css css/styles.css

# Minify JS
uglifyjs js/main.js -o js/main.min.js -c -m
```

**Update references** in `index.html`:
```html
<link rel="stylesheet" href="css/styles.min.css">
<script src="js/main.min.js"></script>
```

### CDN for Fonts

Already using Google Fonts CDN for optimal performance.

---

## Testing Your Changes

After customization:

1. **Visual Check**: Open in browser, check all sections
2. **Responsive Test**: Resize browser, test mobile view
3. **Link Testing**: Click all links, ensure they work
4. **Form Testing**: Submit contact form
5. **Cross-Browser**: Test in Chrome, Firefox, Safari
6. **Performance**: Run Lighthouse audit in Chrome DevTools
7. **Accessibility**: Check contrast ratios, keyboard navigation

---

## Common Issues & Solutions

### Issue: Colors look different in light mode
**Solution**: Update both `:root` and `[data-theme="light"]` sections

### Issue: Images not displaying
**Solution**: Check file paths are correct and images exist

### Issue: Layout breaks on mobile
**Solution**: Test responsive breakpoints, adjust media queries

### Issue: Font not loading
**Solution**: Verify Google Fonts link and font names match

---

## Need Help?

- **Documentation**: Read `README.md` and `DEPLOYMENT.md`
- **Troubleshooting**: Check browser console for errors
- **Community**: Search on Stack Overflow
- **Professional Help**: Consider hiring a developer for complex changes

---

**Remember**: Make small changes and test frequently. Keep backups before major modifications!

Happy customizing! 🎨
