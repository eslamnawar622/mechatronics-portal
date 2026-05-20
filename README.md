🏛️ Mechatronics Submission Portal

Alexandria University — Faculty of Engineering — Electrical Power Department

A digital submission portal for the Mechatronics course. Students can submit their information and required documents through a streamlined web form featuring an auto-playing welcome video, real-time image validation, and visual progress tracking.
✨ Features

    🎬 Auto-playing Welcome Video — Embedded YouTube Shorts with autoplay & skip option
    📸 Image Upload & Compression — Client-side compression before submission (max 1200px, 70% quality)
    ✅ Real-time Progress Tracker — 3-step visual progress indicator
    🖼️ Image Preview Grid — Live preview with numbering and remove option
    📋 Form Validation — Required fields with animated error states
    🔔 Toast Notifications — User-friendly status messages
    📱 Fully Responsive — Optimized for mobile and desktop
    🎨 Modern UI — Clean design with smooth animations

🛠️ Tech Stack
Technology	Purpose
HTML5	Page structure
CSS3	Styling & animations
Vanilla JavaScript	Form logic & interactions
Google Apps Script	Backend submission handler
YouTube Embed API	Welcome video overlay
🚀 Quick Start
Clone the repositorybash

git clone https://github.com/eslamnawar622/mechatronics-portal.git cd mechatronics-portal


### Open locally
Simply open `index.html` in your browser, or use a local server:
```bash
npx serve .

Deploy on GitHub Pages

    Go to Settings → Pages
    Source: Deploy from a branch
    Branch: main → / (root)
    Click Save

Your site will be live at:

https://eslamnawar622.github.io/mechatronics-portal/

⚙️ Configuration
Change the Welcome Video

In index.html, locate the iframe and replace the video ID:

src="https://www.youtube.com/embed/-ubIyfHnUEg?autoplay=1&mute=1&loop=1&playlist=-ubIyfHnUEg&controls=0&rel=0&modestbranding=1"

Adjust Required Images

Change this constant in the JavaScript section:

const REQUIRED_IMAGES = 7; // Set your desired number

Image Compression Settings

const MAX_SIZE = 1200;  // Max width/height in pixels
const QUALITY = 0.7;     // JPEG quality (0.0 - 1.0)

📁 File Structure

mechatronics-portal/
├── index.html      # Main application (HTML + CSS + JS)
└── README.md       # Documentation

📤 Backend Integration

The form submits to Google Apps Script via google.script.run.processSubmission().

Expected payload:

{
  name: "Student Name",
  id: "Student ID",
  dept: "Department",
  year: "Academic Year",
  images: [
    { dataUrl: "base64encoded...", name: "filename.jpg" }
  ]
}

👤 Author

Eslam Nawar — GitHub

Alexandria University — Faculty of Engineering — Mechatronics Course Portal © 2026
``` 
