# ARSHH

ARSHH is a brochure-style landing page for a 3D printed lamps business. The page presents real product imagery, a priced catalogue, the custom design process, material options, and a direct enquiry call to action.

## Highlights

- Premium editorial landing page for 3D printed lamps
- Responsive single-file static site
- Product catalogue with floor, table, wall-mounted, and ceiling lamp images
- Category pricing: floor stand lamps, table lamps, wall-mounted lamps, and ceiling lamps
- Sections for collection, process, customization, materials, and contact
- Animated 3D lamp hero with a CSS fallback
- Enquiry form for name, email, city, state, lamp type, and service interest
- Ready for GitHub Pages hosting from `index.html`

## Google Sheets enquiry setup

1. Create a Google Sheet with columns for `submittedAt`, `name`, `email`, `city`, `state`, `lampType`, and `service`.
2. In Extensions > Apps Script, add a `doPost(e)` script that appends those values to the active sheet.
3. Deploy the script as a Web App with access set to anyone.
4. Paste the Web App URL into `GOOGLE_SHEET_WEB_APP_URL` near the bottom of `index.html`.

## Preview

Open `index.html` in a browser, or serve the folder with any static server.
