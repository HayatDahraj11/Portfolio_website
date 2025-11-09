# Testing Guide - Mobile Navigation

## Quick Test Checklist

### 🔧 Setup
1. Open `index.html` in a web browser
2. Open Developer Tools (F12)
3. Toggle Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M)
4. Select a mobile device (iPhone 12 Pro, Galaxy S20, etc.)

---

## ✅ Mobile Menu Tests

### Test 1: Hamburger Menu Opens
**Steps:**
1. Click the hamburger icon (three horizontal lines)
2. Verify menu slides down smoothly
3. Verify nav links appear with staggered animation
4. Verify overlay appears with blur effect

**Expected Result:**
- ✅ Menu slides down from top
- ✅ Each nav link animates in sequentially (50ms apart)
- ✅ Dark overlay appears behind menu
- ✅ Hamburger transforms to X icon

---

### Test 2: Overlay Click Closes Menu
**Steps:**
1. Open mobile menu
2. Click on the dark overlay area (not the menu itself)

**Expected Result:**
- ✅ Menu closes smoothly
- ✅ Overlay fades out
- ✅ X icon transforms back to hamburger
- ✅ Page scroll is restored

---

### Test 3: Escape Key Closes Menu
**Steps:**
1. Open mobile menu
2. Press the Escape key

**Expected Result:**
- ✅ Menu closes immediately
- ✅ All animations reverse properly

---

### Test 4: Nav Link Click
**Steps:**
1. Open mobile menu
2. Click any navigation link (e.g., "About")

**Expected Result:**
- ✅ Menu closes
- ✅ Page scrolls to selected section
- ✅ Smooth scroll animation

---

### Test 5: Body Scroll Lock
**Steps:**
1. Scroll down the page slightly
2. Open mobile menu
3. Try to scroll the page background

**Expected Result:**
- ✅ Background page does not scroll
- ✅ Only menu content scrolls (if menu is taller than viewport)
- ✅ When menu closes, scroll is restored to previous position

---

## 🌓 Theme Toggle Tests

### Test 6: Theme Toggle is Clickable
**Steps:**
1. Click the sun/moon icon in the top right

**Expected Result:**
- ✅ Theme switches immediately
- ✅ Colors change smoothly
- ✅ Preference saved to localStorage

**Try in different scenarios:**
- [ ] With menu closed
- [ ] With menu open
- [ ] While scrolling
- [ ] On small screens (< 480px)

---

### Test 7: Theme Persists on Refresh
**Steps:**
1. Switch to light mode
2. Refresh the page

**Expected Result:**
- ✅ Light mode is still active
- ✅ No flashing between themes

---

## 📱 Responsive Tests

### Test 8: Different Screen Sizes
**Test on these viewports:**
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] iPad Mini (768px)
- [ ] iPad Air (820px)
- [ ] iPad Pro (1024px)

**Verify:**
- ✅ Mobile menu appears on screens < 768px
- ✅ Desktop menu appears on screens ≥ 768px
- ✅ All buttons are clickable (no overlap)
- ✅ Text is readable
- ✅ No horizontal scrolling

---

## 🎨 Animation Tests

### Test 9: Nav Link Stagger Animation
**Steps:**
1. Open mobile menu slowly
2. Watch the nav links

**Expected Result:**
- ✅ Link 1 appears first
- ✅ Link 2 appears 50ms later
- ✅ Link 3 appears 50ms after that
- ✅ And so on...

---

### Test 10: Smooth Transitions
**Verify these elements have smooth transitions:**
- [ ] Mobile menu slide (0.3s)
- [ ] Overlay fade (0.3s)
- [ ] Hamburger to X transformation
- [ ] Nav link opacity and transform
- [ ] Back-to-top button fade

---

## ⌨️ Keyboard Navigation Tests

### Test 11: Tab Navigation
**Steps:**
1. Press Tab repeatedly
2. Navigate through all interactive elements

**Expected Result:**
- ✅ Focus outlines are visible (2px teal)
- ✅ Tab order is logical (logo → nav links → theme toggle → resume → hamburger)
- ✅ Can open menu with Enter/Space on hamburger
- ✅ Can close menu with Escape

---

### Test 12: Focus Management
**Steps:**
1. Open menu via keyboard (Tab to hamburger, press Enter)
2. Press Tab

**Expected Result:**
- ✅ Focus moves to first nav link
- ✅ Can navigate through menu with Tab
- ✅ Pressing Escape closes menu and returns focus to hamburger

---

## 🚀 Performance Tests

### Test 13: Scroll Performance
**Steps:**
1. Open mobile menu
2. Scroll up and down rapidly

**Expected Result:**
- ✅ Animations stay smooth (60fps)
- ✅ No lag or jank
- ✅ Overlay remains in place

---

### Test 14: Multiple Rapid Toggles
**Steps:**
1. Click hamburger menu very quickly 10 times

**Expected Result:**
- ✅ Menu toggles correctly each time
- ✅ No animation glitches
- ✅ State remains consistent

---

## 🎯 Edge Cases

### Test 15: Orientation Change
**Steps:**
1. Open menu in portrait
2. Rotate to landscape
3. Rotate back to portrait

**Expected Result:**
- ✅ Menu still works
- ✅ Layout adjusts properly
- ✅ No visual glitches

---

### Test 16: Long Menu Content
**Steps:**
1. Add more nav items (or use small viewport)
2. Open menu

**Expected Result:**
- ✅ Menu is scrollable if taller than viewport
- ✅ Overlay covers entire page
- ✅ Background scroll still locked

---

### Test 17: Fast Network / Slow Network
**Steps:**
1. Open DevTools → Network
2. Throttle to "Slow 3G"
3. Test mobile menu

**Expected Result:**
- ✅ Menu works even if CSS/JS loads slowly
- ✅ No broken styling
- ✅ No console errors

---

## 🐛 Common Issues to Check

### Issue Checklist:
- [ ] Theme toggle not clickable → Check z-index (should be 1003)
- [ ] Menu doesn't open → Check JavaScript console for errors
- [ ] Overlay doesn't appear → Check #mobileMenuOverlay element exists
- [ ] Background scrolls when menu open → Check body scroll lock in JS
- [ ] Hamburger doesn't animate → Check .active class is being toggled
- [ ] Menu stays open after clicking link → Check closeMobileMenu() is called

---

## 🌐 Browser Testing

### Desktop Browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers:
- [ ] iOS Safari
- [ ] Chrome Mobile (Android)
- [ ] Samsung Internet
- [ ] Firefox Mobile

---

## 📊 Lighthouse Audit

### Run Lighthouse Test:
1. Open DevTools → Lighthouse tab
2. Select "Mobile"
3. Run audit

**Target Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Check specifically:**
- [ ] Touch targets are large enough (48x48px minimum)
- [ ] Focus indicators are visible
- [ ] Color contrast is sufficient
- [ ] Tap targets don't overlap

---

## ✨ Manual Visual Inspection

### Check These Visual Details:
- [ ] Hamburger icon is centered and visible
- [ ] Theme toggle icon is clear (sun/moon)
- [ ] Menu animation is smooth, not jerky
- [ ] Overlay has blur effect (glassmorphism)
- [ ] Nav links have proper spacing
- [ ] Focus outlines are 2px solid teal
- [ ] Active states are clear
- [ ] No layout shifts when menu opens/closes

---

## 🎬 Quick Test Script

**Copy-paste this into browser console for quick testing:**

```javascript
// Test mobile menu programmatically
const menuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('mobileMenuOverlay');

console.log('=== Mobile Menu Test ===');
console.log('Menu Toggle:', menuToggle ? '✓' : '✗');
console.log('Nav Menu:', navMenu ? '✓' : '✗');
console.log('Overlay:', overlay ? '✓' : '✗');

// Check z-index values
const menuToggleZ = window.getComputedStyle(menuToggle).zIndex;
const overlayZ = window.getComputedStyle(overlay).zIndex;
console.log('Menu Toggle z-index:', menuToggleZ, menuToggleZ === '1003' ? '✓' : '✗ Should be 1003');
console.log('Overlay z-index:', overlayZ, overlayZ === '999' ? '✓' : '✗ Should be 999');

// Test menu toggle
menuToggle.click();
setTimeout(() => {
    const isActive = navMenu.classList.contains('active');
    console.log('Menu opened:', isActive ? '✓' : '✗');
    
    // Close it
    menuToggle.click();
    setTimeout(() => {
        const isClosed = !navMenu.classList.contains('active');
        console.log('Menu closed:', isClosed ? '✓' : '✗');
    }, 500);
}, 500);
```

---

## 📝 Report Template

**If you find a bug, report it like this:**

```
## Bug Report

**Issue:** [Brief description]
**Browser:** [Chrome/Firefox/Safari + version]
**Device:** [iPhone 12 Pro / Desktop / etc.]
**Viewport:** [375px x 667px]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected:** [What should happen]
**Actual:** [What actually happened]

**Screenshot:** [Attach if possible]
**Console Errors:** [Any JavaScript errors]
```

---

## ✅ All Tests Passed?

If all tests pass:
1. ✅ Mobile navigation is fully functional
2. ✅ Theme toggle works on all devices
3. ✅ Animations are smooth
4. ✅ Accessibility is ensured
5. ✅ Ready for production!

---

**Happy Testing! 🚀**
