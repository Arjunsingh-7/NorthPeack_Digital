HOW TO ADD LIGHTHOUSE SCREENSHOTS
==================================

To complete the GitHub repository, add these image files to this folder:

1. lighthouse-desktop.png
   - Screenshot of Lighthouse audit on desktop
   - Should show: Performance 88, Accessibility 92, Best Practices 100, SEO 100

2. lighthouse-mobile.png
   - Screenshot of Lighthouse audit on mobile
   - Should show: Performance 82, Accessibility 92, Best Practices 100, SEO 100

3. preview.png (optional)
   - Full-page screenshot of the NorthPeak Digital website
   - Shows the complete landing page

HOW TO CAPTURE SCREENSHOTS
==========================

DESKTOP LIGHTHOUSE:
1. Open http://localhost:4173 in Chrome
2. Press F12 (Open DevTools)
3. Click "Lighthouse" tab
4. Click "Analyze page load"
5. Wait for audit to complete
6. Take screenshot of the results
7. Save as: lighthouse-desktop.png

MOBILE LIGHTHOUSE:
1. Open http://localhost:4173 in Chrome
2. Press F12 (Open DevTools)
3. Click the device toggle (mobile icon)
4. Click "Lighthouse" tab
5. Click "Analyze page load"
6. Wait for audit to complete
7. Take screenshot of the results
8. Save as: lighthouse-mobile.png

Then push to GitHub:
git add docs/lighthouse-desktop.png docs/lighthouse-mobile.png
git commit -m "Add Lighthouse audit screenshots"
git push
