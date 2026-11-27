# DigiInvite

Website for the DigiInvite wedding invitation website business. Plain HTML, CSS and JavaScript, with nothing to install or build.

## 1. Open it in VS Code
1. Unzip `digiinvite.zip`.
2. In VS Code choose **File > Open Folder** and select the `digiinvite` folder (the one containing `index.html`).
3. Open the Extensions panel (Ctrl+Shift+X), search **Live Server** (by Ritwick Dey) and install it.
4. Right-click `index.html` and choose **Open with Live Server**.

Without the extension, you can double-click `index.html`.

To check the phone layout: press F12 in the browser, then Ctrl+Shift+M.

## 2. Files
| File | What it holds |
|---|---|
| index.html | Home page with demos and pricing |
| templates.html | All live demos with filters |
| demo.html | The invitation website demo (`demo.html?d=rose`) |
| pricing.html, about.html, contact.html | Other pages |
| js/data.js | Contacts, prices and the text of all demos |
| js/main.js | Header, footer, demo list, pricing, enquiry form |
| js/demo.js | Opening screen, countdown, events, falling flowers |
| css/style.css, css/covers.css | Business website design |
| css/themes.css | Colours of the five invitation designs |
| css/demo.css | Layout of the invitation demos |

Demos: `rose`, `nikah`, `blossom`, `midnight`, `marigold`.

## 3. Common changes
- **Prices and package features:** edit `PLANS` in `js/data.js`. The "3 months online" line is in `index.html` and `pricing.html`.
- **Demo names, dates, events, families:** edit `DEMOS` in `js/data.js`. Keep demo dates in the future so the countdown runs.
- **Contacts:** edit `BUSINESS` in `js/data.js`, and also the links written in `contact.html`.
- **Invitation colours:** edit `css/themes.css`.

## Making a customer's invitation
The demos show all sections and animation. They do not automatically limit features by package, and `demo.html` carries a DigiInvite order bar. For each customer, make a separate copy containing `demo.html`, `js/data.js`, `js/demo.js`, `css/demo.css` and `css/themes.css`. Then:
1. In `js/data.js`, set the customer's names, date, events and families, and keep only their entry in `DEMOS`.
2. Set `BUSINESS.whatsapp` to the family's number, so RSVPs reach them (not you).
3. In `js/demo.js`, remove "(Demo RSVP)", delete the line that fills `.demobar`, and change the "View map" link to the exact venue's Google Maps link.
4. Remove the `<nav class="demobar">` line in `demo.html`, change its title and description, and rename it `index.html`.
5. For Classic, keep one event and remove the families section and falling flowers.

Publish only with the family's permission: anyone with the link can see it.

## 4. Upload to GitHub
First, create a free account at github.com and install Git from git-scm.com. Restart VS Code afterwards.

1. On github.com click **+ > New repository**. Name it `digiinvite`, choose **Public**, and do not add a README. Click **Create repository**.
2. In VS Code open **Terminal > New Terminal**.
3. Set your name once (use your own details; the email becomes visible in public commits):

        git config --global user.name "Your Name"
        git config --global user.email "your-email@example.com"

4. Run these one by one, replacing YOUR-USERNAME:

        git init
        git add .
        git commit -m "DigiInvite website"
        git branch -M main
        git remote add origin https://github.com/YOUR-USERNAME/digiinvite.git
        git push -u origin main

5. Sign in to GitHub when asked.

No terminal? On the new repository page, click **uploading an existing file** and drag in everything *inside* the folder (keep the `css` and `js` folders), then click **Commit changes**.

## 5. Put it online free (GitHub Pages)
1. In the repository open **Settings > Pages**.
2. Source: **Deploy from a branch**. Branch: **main**, folder: **/ (root)**. Click **Save**.
3. After a few minutes the site is at `https://YOUR-USERNAME.github.io/digiinvite/`.

GitHub Pages has usage limits and is not meant to run as an online shop or payment system. Read GitHub's current Pages terms for business use; if needed, hosts such as Netlify or Cloudflare Pages can serve the same files.

## 6. Updating later
        git add .
        git commit -m "Describe your change"
        git push

## Before you launch
- Agree on the prices and the 3-month period. They are suggestions.
- Test every phone, WhatsApp, email and Instagram link on a real phone.
- Check that the About text and ordering steps match how you work.
- Your phone numbers will be visible to everyone.
- The site takes no payments and has no RSVP dashboard. RSVPs are WhatsApp messages.
- Demo map buttons open the city only, because the venues are made up.
