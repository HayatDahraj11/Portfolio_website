# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 🌐 Deployment Options

### 1. Netlify (Recommended - Easiest)

**Netlify** offers free hosting with continuous deployment, custom domains, and automatic HTTPS.

#### Steps:

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```

2. **Sign up** at [netlify.com](https://www.netlify.com/)

3. **Deploy**:
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize Netlify
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/` (root)
   - Click "Deploy site"

4. **Custom domain** (optional):
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records as instructed

5. **Enable contact form**:
   - Add `netlify` attribute to form in `index.html`:
     ```html
     <form class="contact-form" id="contactForm" netlify>
     ```
   - Redeploy for changes to take effect

**Your site will be live at**: `https://yoursite.netlify.app`

---

### 2. Vercel

**Vercel** is similar to Netlify, with excellent performance and free tier.

#### Steps:

1. **Push to GitHub** (same as Netlify step 1)

2. **Sign up** at [vercel.com](https://vercel.com/)

3. **Deploy**:
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: Other
   - Click "Deploy"

4. **Custom domain**:
   - Go to Project Settings → Domains
   - Add your domain and configure DNS

**Your site will be live at**: `https://yoursite.vercel.app`

---

### 3. GitHub Pages (Free)

**GitHub Pages** is completely free for public repositories.

#### Steps:

1. **Create repository** on GitHub named `yourusername.github.io`

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` and `/root`
   - Click Save

4. **Wait** 2-5 minutes for deployment

**Your site will be live at**: `https://yourusername.github.io`

**Custom domain**:
- Add a `CNAME` file to root with your domain
- Configure DNS to point to GitHub Pages

---

### 4. Traditional Web Hosting (cPanel/FTP)

For traditional hosting providers like Bluehost, HostGator, etc.

#### Steps:

1. **Access your hosting account**

2. **Upload files**:
   - Via FTP client (FileZilla, Cyberduck):
     - Connect to your host
     - Upload all files to `public_html` or `www` directory
   - Via cPanel File Manager:
     - Navigate to `public_html`
     - Upload all files

3. **Ensure structure**:
   ```
   public_html/
   ├── index.html
   ├── css/
   ├── js/
   └── assets/
   ```

4. **Test**: Visit your domain

---

### 5. Firebase Hosting

**Firebase** offers free hosting with custom domains and CDN.

#### Steps:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**:
   ```bash
   firebase login
   ```

3. **Initialize**:
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `.` (current directory)
   - Configure as single-page app: No
   - Set up automatic builds: No

4. **Deploy**:
   ```bash
   firebase deploy
   ```

**Your site will be live at**: `https://yourproject.web.app`

---

## 🔒 Custom Domain Setup

### Netlify/Vercel DNS Configuration

1. **Add domain** in platform settings
2. **Update DNS** at your domain registrar:
   - For Netlify: Point to Netlify's name servers
   - For Vercel: Add A record to `76.76.21.21`
3. **Wait** for DNS propagation (up to 48 hours)

### GitHub Pages DNS

Add these records at your domain registrar:
```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  yourusername.github.io
```

---

## 📧 Contact Form Configuration

### For Netlify:
Already covered above - just add `netlify` attribute.

### For Other Platforms (Formspree):

1. **Sign up** at [formspree.io](https://formspree.io/)

2. **Create a form** and get your form ID

3. **Update `js/main.js`**:
   ```javascript
   function submitForm(form) {
       const formData = new FormData(form);
       
       fetch('https://formspree.io/f/YOUR_FORM_ID', {
           method: 'POST',
           body: formData,
           headers: {
               'Accept': 'application/json'
           }
       })
       .then(response => {
           if (response.ok) {
               document.getElementById('formSuccess').classList.add('visible');
               form.reset();
           } else {
               alert('Error sending message. Please try again.');
           }
       })
       .catch(error => {
           console.error('Error:', error);
           alert('Error sending message. Please try again.');
       });
   }
   ```

---

## 🚀 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information updated (name, email, links)
- [ ] Profile photo added and optimized
- [ ] Project images added and optimized
- [ ] Resume PDF uploaded
- [ ] Contact form integrated
- [ ] All placeholder text replaced
- [ ] Links tested (internal and external)
- [ ] Responsive design tested on mobile
- [ ] Browser compatibility tested
- [ ] Images compressed and optimized
- [ ] Meta tags and SEO information updated
- [ ] Google Analytics added (optional)
- [ ] Social media preview image added

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Sign up** at [analytics.google.com](https://analytics.google.com/)

2. **Create property** for your website

3. **Add tracking code** to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Alternative: Plausible Analytics (Privacy-focused)

1. **Sign up** at [plausible.io](https://plausible.io/)
2. **Add script** to `index.html`:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

---

## 🔧 Troubleshooting

### Site not loading
- Check file paths (should be relative)
- Ensure `index.html` is in root directory
- Clear browser cache

### Images not displaying
- Verify image paths are correct
- Ensure images are uploaded to `assets/images/`
- Check file extensions match (case-sensitive on some servers)

### Contact form not working
- Ensure form integration is complete
- Check browser console for errors
- Verify API keys/form IDs are correct

### CSS not loading
- Check `<link>` tag in HTML
- Verify CSS file path
- Check for syntax errors in CSS

---

## 📞 Support

If you encounter issues:
1. Check the platform's documentation
2. Search for error messages online
3. Contact the hosting provider's support

---

**Good luck with your deployment!** 🎉

Your portfolio will be live and showcasing your amazing work in no time.
