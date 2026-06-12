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

The enquiry form is prepared for this Google Sheet:
`https://docs.google.com/spreadsheets/d/1tEFe6kZZ0-Kgx-2eNuruDHDe2Vk0Rx7G6pN9uVNMshw/edit?usp=sharing`

1. Open that Sheet, then go to Extensions > Apps Script.
2. Paste the contents of `google-apps-script.gs` into the Apps Script editor.
3. Deploy the script as a Web App.
4. Set "Execute as" to yourself and "Who has access" to anyone.
5. Copy the Web App URL.
6. Paste that URL into `GOOGLE_SHEET_WEB_APP_URL` near the bottom of `index.html`.

The script creates an `Enquiries` tab if it does not already exist and writes columns for `submittedAt`, `name`, `email`, `city`, `state`, `lampType`, and `service`.

## Preview

Open `index.html` in a browser, or serve the folder with any static server.
