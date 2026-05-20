# mechatronics-portal
Mechatronics Course Submission Portal — Alexandria University Faculty of Engineering

🏛️ Mechatronics Submission Portal

Alexandria University — Faculty of Engineering

A streamlined document submission portal for the Mechatronics course, allowing students to upload required documents and photos with real-time validation and progress tracking.
✨ Features

    🎬 Auto-playing Welcome Video — YouTube Shorts video with autoplay and skip button
    📸 Image Upload & Compression — Client-side image compression before upload (max 1200px, 70% quality)
    ✅ Real-time Progress Tracking — 3-step visual progress indicator
    🖼️ Image Preview Grid — Visual preview of all uploaded images with remove option
    📋 Form Validation — Required field checks with animated error states
    🔔 Toast Notifications — User-friendly feedback messages
    📱 Fully Responsive — Works on mobile, tablet, and desktop
    🎨 Modern UI — Clean design with smooth animations

🛠️ Tech Stack
Technology	Purpose
HTML5	Structure
CSS3	Styling & Animations
Vanilla JavaScript	Logic & Interactions
Google Apps Script	Backend form processing
YouTube Embed	Welcome video
🚀 Setup
1. Clone the repositorybash

git clone https://github.com/USERNAME/mechatronics-portal.git cd mechatronics-portal


### 2. Open `index.html` in a browser
```bash
# Or use a local server
npx serve .

3. Deploy to GitHub Pages

    Go to Settings → Pages
    Source: Deploy from a branch
    Branch: main → / (root)
    Save

⚙️ Configuration
Change the Welcome Video

Find this line in index.html and replace the video ID:

src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&rel=0&modestbranding=1"

Change Required Images Count

Modify this constant in the JavaScript:

const REQUIRED_IMAGES = 7; // Change to your desired number

Change Image Compression Settings

const MAX_SIZE = 1200;  // Max width/height in pixels
const QUALITY = 0.7;     // JPEG quality (0.0 - 1.0)

Connect to Google Apps Script Backend

The form uses google.script.run.processSubmission() — make sure your Google Apps Script deployment matches the expected payload:

{
  name: "Student Name",
  id: "Student ID",
  dept: "Department",
  year: "Academic Year",
  images: [{ dataUrl: "base64...", name: "filename.jpg" }, ...]
}

📁 Project Structure

mechatronics-portal/
├── index.html      # Main application (HTML + CSS + JS)
└── README.md       # This file

📸 Screenshots
Welcome Video Overlay

Submission Form

Success Screen

📄 License

This project is for educational use at Alexandria University.
👤 Author

Eslam Nawar — GitHub

Alexandria University — Faculty of Engineering — Mechatronics Course Portal © 2026
``` 
