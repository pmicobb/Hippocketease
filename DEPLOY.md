# Deploying Hippocketease 🚀

Two options, both free. Pick one — or do Netlify first to test right away, then GitHub Pages for a permanent URL.

---

## Option 1: Netlify Drop (Fastest — ~30 seconds)

**Best for:** Quick test of your own. Sharing a temporary link with one or two people.

### Steps

1. Open [**app.netlify.com/drop**](https://app.netlify.com/drop) in your browser.
2. **Drag this entire `hippocketease-deploy` folder** onto the drop zone.
3. Wait ~15 seconds. You'll see a URL like `https://gleeful-otter-a1b2c3.netlify.app`.
4. **Open that URL on your phone.** Tap the Share button (iPhone) or three-dot menu (Android) → "Add to Home Screen."
5. Done. The app is live.

### To get a better URL (optional)

- Click "Claim this site" on the Netlify page.
- Sign up for a free account (use GitHub or email).
- Go to Site Settings → Change site name → rename to `hippocketease-test` (or similar).
- Your URL becomes `https://hippocketease-test.netlify.app`.

### To update after dragging

Netlify Drop without an account **can't be updated** — you'd drag a new folder and get a new URL. If you want to keep the same URL and push updates, either:
- Claim the site (above) and then re-deploy by dragging again, OR
- Switch to GitHub Pages (Option 2) — updates become automatic on every push.

---

## Option 2: GitHub Pages (Durable — ~15 minutes)

**Best for:** Permanent URL. Sharing with Dr. Fritz and testers. Showing on your resume.

### Prerequisites

- A free [GitHub account](https://github.com/signup)
- [Git installed](https://git-scm.com/downloads) on your computer (or use the GitHub web uploader)

### Steps using the GitHub web uploader (no terminal required)

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `hippocketease`
3. Set to **Public** (required for free GitHub Pages).
4. Check ✅ "Add a README file."
5. Click **Create repository**.
6. On the repo page, click **Add file → Upload files**.
7. Drag **every file inside the `hippocketease-deploy` folder** (not the folder itself — the files inside it) into the upload zone.
8. Click **Commit changes**.
9. Go to **Settings → Pages** (in the left sidebar).
10. Under "Build and deployment," set:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root** (`/`)
11. Click **Save**.
12. Wait ~2 minutes. GitHub will publish a URL like:
    **`https://yourusername.github.io/hippocketease/`**
13. Open that URL on your phone and install it.

### Steps using the command line (faster once you've done it once)

```bash
# From inside the hippocketease-deploy folder:
git init
git add .
git commit -m "Initial Hippocketease testing build"
git branch -M main
git remote add origin https://github.com/yourusername/hippocketease.git
git push -u origin main
```

Then enable Pages in Settings → Pages as above.

### Updating after you make changes

1. Edit your local files.
2. `git add . && git commit -m "Your change message" && git push`
3. GitHub Pages auto-deploys in ~1 minute.

---

## Option 3: Custom domain (e.g. `hippocketease.com`)

**Best for:** Long-term use, professional presentation.

1. **Buy a domain** from Namecheap, Cloudflare, or Google Domains (~$10–15/year). `hippocketease.com` appears to be available as of this writing — check the registrar.
2. **Point it at GitHub Pages or Netlify:**
   - In your registrar's DNS settings, add a CNAME record pointing to your Netlify/GitHub Pages URL.
   - In GitHub Pages settings (or Netlify domain settings), add your custom domain.
3. Enable HTTPS (both Netlify and GitHub Pages provide free SSL certificates automatically).
4. Done — `https://hippocketease.com` now serves the app.

---

## After it's deployed — what to tell testers

Email template:

> **Subject: Please help test Hippocketease — pediatric FB triage tool**
>
> Hi [Name],
>
> I built a web app as a follow-up to my CS 5001 final project — a pediatric foreign body ingestion triage aid based on the 2015 NASPGHAN algorithms. Dr. Julia Fritz has been advising on the clinical side.
>
> Would you spend 10 minutes trying it out on your phone? Here's how:
>
> **Link:** https://your-url-here.com
>
> **To install:**
> - **iPhone:** Open the link in Safari → tap Share → "Add to Home Screen"
> - **Android:** Open the link in Chrome → tap "Install" when prompted, or Menu → "Install app"
>
> **Please try these 5 test cases and let me know if anything looks wrong:**
> 1. 2-year-old, 25mm button battery in esophagus, stable → should be EMERGENT
> 2. 7-year-old, 15mm button battery in stomach, no symptoms → should be ELECTIVE
> 3. 4-year-old, multiple magnets in stomach, <12h since ingestion → should be EMERGENT
> 4. 3-year-old, food impaction, not tolerating secretions → should be EMERGENT
> 5. 5-year-old, asymptomatic coin in stomach → should be ELECTIVE, repeat x-ray at 2 weeks
>
> Feedback goes right from the app's menu (☰ → Send feedback) to your email.
>
> **Important:** This is a testing build — please don't use for actual clinical decisions yet.
>
> Thanks!
> Patrick

---

## Troubleshooting

**"The URL doesn't work on my phone."**
- Make sure you're using HTTPS (https://), not HTTP. PWAs won't install over plain HTTP.
- Try refreshing, or clear your browser cache.

**"The 'Add to Home Screen' option isn't showing up."**
- **iPhone:** Must use Safari, not Chrome. Tap the Share button (square with up arrow at the bottom), then scroll down to "Add to Home Screen."
- **Android:** Must use Chrome or Edge. If no install prompt appears, tap the three-dot menu → "Install app" or "Add to Home Screen."

**"I updated the code but the app still shows the old version."**
- Service workers cache aggressively. To force an update:
  1. In `sw.js`, change `'hippocketease-test-v1'` to `'hippocketease-test-v2'`.
  2. Redeploy.
  3. Users will get the new version the next time they open the app.

**"I get a security warning in the browser."**
- The site needs HTTPS. Both Netlify and GitHub Pages enable this automatically — if you're hitting a warning, double-check the URL starts with `https://`.

---

## Quick reference

| Task | Netlify Drop | GitHub Pages |
|---|---|---|
| Time to first deploy | 30 seconds | 15 minutes |
| Cost | Free | Free |
| Permanent URL | No (unless you claim) | Yes |
| Custom URL name | Rename after claiming | `yourusername.github.io/hippocketease` |
| How to update | Re-drag (new URL) or claim + re-drag | Git push (same URL) |
| Shows your code | No | Yes (public repo) |

For a class project / portfolio / real testing: **GitHub Pages.** For a 2-minute smoke test: **Netlify Drop.**
