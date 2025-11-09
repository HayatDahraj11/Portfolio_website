# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## ✅ Step 1: Customize Basic Information (5 minutes)

### 1. Update Your Name
- Open `index.html` in a text editor
- Press Ctrl+H (Windows) or Cmd+H (Mac) to open Find & Replace
- Find: `Hayat Sikandar`
- Replace with: `Your Full Name`
- Click "Replace All"

### 2. Update Contact Information
Search for these in `index.html` and update:
- Email: Search for `hayat@example.com` → Replace with your email
- LinkedIn: Search for `linkedin.com/in/hayatsikandar` → Replace with your profile
- GitHub: Search for `github.com/hayatsikandar` → Replace with your username

### 3. Add Your Profile Photo
- Add a professional headshot to `assets/images/` folder
- Name it `profile.jpg` (or update the reference in HTML)
- Recommended size: 800x800px

## ✅ Step 2: Add Your Projects (10 minutes)

### Quick Method:
1. Add project images to `assets/images/` (name them `project-yourname.jpg`)
2. In `index.html`, find an existing project card
3. Copy and modify it with your project details:
   - Change image source
   - Update title and description
   - Add your tech stack tags
   - Update demo and GitHub links

## ✅ Step 3: View Your Website

### Option A: Simple (Just to Preview)
Double-click `index.html` to open in your browser

### Option B: Local Server (Recommended)
**Windows (PowerShell)**:
```powershell
# Navigate to project folder
cd "C:\Users\BilalShakeel\OneDrive - Greybeard Corporate Solutions\Desktop\Hayat_portfolio"

# Start Python server (if Python installed)
python -m http.server 8000

# OR use PHP (if PHP installed)
php -S localhost:8000

# OR install http-server via Node.js
npx http-server
```

Then open: http://localhost:8000

## ✅ Step 4: Deploy Online (15 minutes)

### Easiest Method - Netlify:

1. **Create GitHub Account** (if you don't have one)
   - Go to github.com and sign up

2. **Create New Repository**
   - Click "+" → "New repository"
   - Name: `portfolio` or `yourname-portfolio`
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

3. **Upload Your Code** (via GitHub Desktop or Web)
   
   **Via GitHub Web Interface** (simplest):
   - In your repository, click "uploading an existing file"
   - Drag and drop ALL your portfolio files
   - Click "Commit changes"

   **Via Command Line** (if Git installed):
   ```powershell
   cd "C:\Users\BilalShakeel\OneDrive - Greybeard Corporate Solutions\Desktop\Hayat_portfolio"
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOURUSERNAME/YOURREPO.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up (use GitHub)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your portfolio repository
   - Click "Deploy site"
   - **Done!** Your site is live at `yoursite.netlify.app`

## ✅ Step 5: Final Touches

### Essential Updates:
- [ ] Update About section bio
- [ ] Add 3-6 of your best projects
- [ ] Update skills to match yours
- [ ] Add your resume PDF (or remove the button)
- [ ] Test contact form (integrate with Formspree)
- [ ] Update meta description for SEO

### Nice to Have:
- [ ] Add testimonials (if you have any)
- [ ] Optimize all images
- [ ] Set up custom domain
- [ ] Add Google Analytics
- [ ] Test on mobile device

## 📱 Testing Checklist

Before sharing your portfolio:
- [ ] All links work (especially external ones)
- [ ] Images load correctly
- [ ] Mobile view looks good (resize browser)
- [ ] Contact form validates correctly
- [ ] Dark/light mode toggle works
- [ ] No placeholder text remains
- [ ] All personal info is updated

## 🆘 Common Issues

**Issue**: Images not showing
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- File names must match exactly (case-sensitive)

**Issue**: Styles not loading
- Make sure `css/styles.css` exists
- Check the file path in `index.html` is correct

**Issue**: Website looks broken
- Open browser console (F12) to check for errors
- Verify all files are uploaded
- Clear browser cache

**Issue**: Can't deploy to Netlify
- Make sure all files are in repository
- Check repository is public
- Try refreshing Netlify page

## 📚 Next Steps

After basic setup:
1. Read `CUSTOMIZATION.md` for detailed customization
2. Read `DEPLOYMENT.md` for advanced deployment options
3. Read `README.md` for full documentation

## 💡 Pro Tips

1. **Start Simple**: Get the basics working first, customize later
2. **Test Often**: Preview changes in browser frequently
3. **Backup**: Keep a copy of original files before making changes
4. **Mobile First**: Always test on mobile view
5. **Ask for Feedback**: Share with friends before going public

## 🎯 Your 30-Minute Launch Plan

| Time | Task |
|------|------|
| 0-5 min | Update name and contact info |
| 5-15 min | Add 3 projects and profile photo |
| 15-20 min | Quick review and test |
| 20-30 min | Deploy to Netlify |

**That's it! You now have a professional portfolio live on the internet!** 🎉

---

## 🤝 Need Help?

- **Can't figure something out?** Check the full `README.md`
- **Want to customize more?** Read `CUSTOMIZATION.md`
- **Ready to deploy?** Follow `DEPLOYMENT.md`
- **Technical issues?** Check browser console (F12) for errors

**Good luck with your portfolio!** You've got this! 💪
