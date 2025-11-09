# Hayat Sikandar - Portfolio Website

A premium, minimalistic portfolio website showcasing AI automation and full-stack development projects. Built with modern web technologies and optimized for performance, accessibility, and SEO.

![Portfolio Preview](assets/images/preview.png)

## 🌟 Features

- **Modern Minimalistic Design**: Clean, elegant interface with generous white space and subtle sophistication
- **Dark/Light Mode**: Seamless theme switching with user preference persistence
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop, large screens)
- **Interactive Project Gallery**: Filterable portfolio with detailed case study modals
- **Contact Form**: Validated contact form ready for backend integration
- **Performance Optimized**: Fast loading times, lazy loading images, minified assets
- **SEO Ready**: Comprehensive meta tags, schema markup, and semantic HTML
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository to your local machine

2. **Open the project** in your preferred code editor

3. **Launch the website**:
   - Simply open `index.html` in a web browser, or
   - Use a local development server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **View in browser**: Navigate to `http://localhost:8000`

## 📁 Project Structure

```
Hayat_portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles (variables, components, responsive)
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   ├── images/             # Image files
│   │   ├── profile.jpg     # Professional headshot
│   │   ├── favicon.svg     # Site favicon
│   │   ├── project-*.jpg   # Project thumbnails
│   │   └── preview.png     # Portfolio preview image
│   └── Hayat_Sikandar_Resume.pdf  # Resume PDF
└── README.md               # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**Update Your Details** in `index.html`:

- **Name & Title**: Search for "Hayat Sikandar" and replace with your name
- **Bio**: Update the About section (`<section id="about">`)
- **Contact Info**: Update email, LinkedIn, GitHub links in the Contact section
- **Resume**: Replace `assets/Hayat_Sikandar_Resume.pdf` with your own resume

### 2. Profile Image

Replace `assets/images/profile.jpg` with your professional headshot:
- Recommended size: 800x800px
- Format: JPG or WebP
- Keep file size under 500KB for optimal performance

### 3. Projects

**To modify projects**, edit the project cards in `index.html` (search for `<article class="project-card">`):

```html
<article class="project-card" data-category="ai">
    <div class="project-image">
        <img src="assets/images/your-project.jpg" alt="Your Project">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Brief description...</p>
        <div class="project-tags">
            <span class="tag">Tech1</span>
            <span class="tag">Tech2</span>
        </div>
        <div class="project-links">
            <a href="your-demo-url">Live Demo</a>
            <a href="your-github-url">GitHub</a>
        </div>
    </div>
</article>
```

**Project Images**: Add images to `assets/images/` (recommended size: 1200x750px)

**Project Details**: Update project details in `js/main.js` (search for `projectDetails` object)

### 4. Skills

Update skills in the Skills section of `index.html`:

```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Your Skill</span>
        <span class="skill-level">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### 5. Testimonials

Add or modify testimonials in `index.html`:

```html
<article class="testimonial-card">
    <div class="testimonial-content">
        <svg class="quote-icon">...</svg>
        <p class="testimonial-text">"Your testimonial text here..."</p>
    </div>
    <div class="testimonial-author">
        <div class="author-info">
            <div class="author-name">Client Name</div>
            <div class="author-title">Position, Company</div>
        </div>
    </div>
</article>
```

### 6. Color Scheme

Customize colors in `css/styles.css` (`:root` section):

```css
:root {
    --bg-primary: #121212;        /* Main background */
    --accent-primary: #00A8A8;    /* Primary accent color */
    --text-primary: #ffffff;      /* Main text color */
    /* Modify other variables as needed */
}
```

### 7. Typography

Change fonts in `css/styles.css`:

```css
:root {
    --font-heading: 'Your Font', sans-serif;
    --font-body: 'Your Font', sans-serif;
}
```

Update Google Fonts link in `index.html` (`<head>` section)

## 📧 Contact Form Integration

The contact form is currently set up with client-side validation. To make it functional, integrate with one of these services:

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io/)
2. Update the form in `js/main.js`:

```javascript
function submitForm(form) {
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show success message
            document.getElementById('formSuccess').classList.add('visible');
            form.reset();
        }
    });
}
```

### Option 2: Netlify Forms

If deploying to Netlify, simply add `netlify` attribute to the form:

```html
<form class="contact-form" id="contactForm" netlify>
```

### Option 3: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add EmailJS SDK to `index.html`
3. Update form submission in `js/main.js`

### Option 4: Custom Backend

Build your own API endpoint using Node.js, Python, or PHP and update the form submission accordingly.

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Sign up at [netlify.com](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy site"

**Custom Domain**: Configure in Netlify settings

### Deploy to Vercel

1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com/)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (usually `main`) and folder (`root`)
4. Save and wait for deployment

**Access at**: `https://yourusername.github.io/repository-name`

### Traditional Web Hosting

1. Export all files
2. Upload to your hosting provider via FTP/SFTP
3. Ensure `index.html` is in the root directory

## ⚡ Performance Optimization

### Image Optimization

**Compress images** before adding them:
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Convert to WebP format for better compression
- Recommended sizes:
  - Profile: 800x800px
  - Projects: 1200x750px
  - Hero background: 1920x1080px

### Minification (Production)

Minify CSS and JavaScript for production:

```bash
# Using online tools:
# - CSS: https://cssminifier.com/
# - JS: https://javascript-minifier.com/

# Or using build tools:
npm install -g clean-css-cli uglify-js
cleancss -o css/styles.min.css css/styles.css
uglifyjs js/main.js -o js/main.min.js
```

Then update references in `index.html`

## 🔍 SEO Checklist

- [x] Semantic HTML structure
- [x] Meta description and keywords
- [x] Open Graph tags for social sharing
- [x] Schema.org JSON-LD markup
- [x] Descriptive alt text for images
- [x] Sitemap (create `sitemap.xml` for larger sites)
- [x] Robots.txt (add if needed)
- [ ] Google Analytics integration (add your tracking ID)
- [ ] Google Search Console verification

### Adding Google Analytics

Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast ratios (WCAG AA compliant)
- Screen reader friendly
- Reduced motion support

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: Vanilla JS (no frameworks)
- **Google Fonts**: Inter, Roboto
- **SVG**: For icons and graphics

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

For questions or issues:
- Email: hayat@example.com
- GitHub: [@hayatsikandar](https://github.com/hayatsikandar)
- LinkedIn: [Hayat Sikandar](https://linkedin.com/in/hayatsikandar)

## 🙏 Acknowledgments

- Design inspiration from leading tech portfolios
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by Hayat Sikandar**

*Last Updated: October 2025*
