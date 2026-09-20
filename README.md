# 👑 Pratishtha's Royal Birthday Celebration

A bespoke, royal-themed interactive birthday celebration and digital invitation web application crafted for **Pratishtha Tiwari's birthday on October 16th in Kanpur**, designed with endless love by **Ranjeet Tiwari**.

---

## ✨ Key Features

- **Magical 3D Particle Atmosphere**: Implemented via [Three.js](https://threejs.org/) to render a sparkling ambient gold and rose starfield responding dynamically to cursor movement.
- **Ambient Balloon Universe**: 110+ floating festive balloons drifting across the viewport with staggered timings and multi-tone radial gradients.
- **Royal Photo Showcase**:
  - 13 curated portrait cards displaying Pratishtha's moments in royal attire.
  - Smooth lazy scroll-loading (`IntersectionObserver`) with subtle parallax and continuous ambient floating animations.
  - Built-in multi-tier fallback system: automatically resolves `.heic`/`.heif` references, inspects local browser storage for client-uploaded high-res images, alternates between her royal portraits, and falls back to a custom vector Royal Monogram Seal so no image is ever broken.
  - Full-screen **Royal Photo Lightbox** modal with zoom and caption display.
- **Live Countdown Timer**: Real-time royal clock counting down the days, hours, minutes, and seconds to October 16th in Kanpur.
- **Mandatory Guest RSVP & Royal Decree**:
  - Formal guest registration with required compliance checkbox (*"Mandatory Disclosure & Royal Decree"*).
  - Instant confirmation state with custom greetings for accepted and declined guests.
  - Celebratory golden confetti shower upon RSVP confirmation.
  - Persistent storage in the browser's `localStorage` (`pratishtha_guests_v2`).
- **Automated Calendar Reminders (.ICS Sync)**:
  - Instant download of standard `.ics` calendar events compatible with iOS Calendar, Google Calendar, and Outlook.
  - Configured with proactive alert alarms:
    - Daily reminders starting October 13th (-3 days, -2 days).
    - Every 6 hours on October 15th (-1 day).
- **Hidden Admin Management Console**:
  - Dedicated administrative dashboard accessible via secret routes.
  - Real-time guest response metrics (Total, Accepted, Declined).
  - One-click **Export to CSV** for easy guest list management.
  - Data purge tool and dynamic local image uploader for updating gallery portraits directly from the browser session.
- **Interactive Royal Chimes**: Web Audio API ambient celebration chime synthesizer with header toggle.

---

## 🚀 Getting Started

### Prerequisites
All dependencies (Tailwind CSS, Three.js, Font Awesome, and Google Fonts) are loaded via high-speed CDNs. No build toolchain or complex installation is required.

### Project Directory Structure
```text
pratishtha-birthday/
├── index.html                                          # Main application
├── README.md                                           # Project documentation
├── IMG_0530.jpg                                        # Primary Royal Portrait (Orange Saree)
├── 7e9e2bc5-a6b7-4f52-8288-6333b795118a-1_all_47630.jpg # Mint Green Saree Elegance
└── ... (additional gallery images)
```

### Running Locally

#### Method 1: Using Python (Recommended)
```bash
# In the project directory:
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

#### Method 2: Using Node.js
```bash
npx serve .
```

#### Method 3: Direct Browser Inspection
Double-click `index.html` to open directly in Chrome, Safari, Edge, or Firefox.

---

## 🛡️ Admin Dashboard & Secret Access

The application includes a secure internal control panel for managing RSVP records and updating gallery portraits:

### How to Access
- **Method 1 (URL Hash)**: Append `#admin` to the URL in your browser address bar:
  `http://localhost:8000/#admin`
- **Method 2 (Hidden Shortcut)**: Scroll down to the footer and double-click the pink heart icon (**💕**) next to Ranjeet's name.

### Royal Admin Credentials
Upon accessing the secret console, enter the authorized credentials:
- **Admin ID**: `admin@admin.com`
- **Password**: `Pratishtha@1610`

### Dashboard Capabilities
- **Acceptance Tracker**: Displays real-time count and full names of confirmed vs. declined guests.
- **Export to CSV**: Download `Pratishtha_Royal_Guest_List.csv` directly to your computer.
- **Device Photo Uplink**: Select multiple image files from your computer or phone to replace gallery images on the fly.
- **Data Purge**: Reset guest list entries from local storage when needed.
- **Lock Console**: Secure logout to return to the locked gate.

---

## 🎨 Design System & Color Palette

| Token | Hex Code | Description |
| :--- | :--- | :--- |
| **Royal Gold** | `#FFD700` | Accent borders, badges, crowns, and primary headings |
| **Royal Gold Dark** | `#B8860B` | Shading and secondary borders |
| **Fuchsia Darkest** | `#2B0418` | Deep backdrop gradient & contrast card interiors |
| **Fuchsia Deep** | `#4A0E2E` | Card base backgrounds with glassmorphism blur |
| **Fuchsia Main** | `#880E4F` | Accent highlights & rich floral tones |
| **Fuchsia Vibrant** | `#C2185B` | Gradient transitions |
| **Champagne** | `#FFF8DC` | Text highlights and luminous accents |

---

## 📱 Mobile Responsiveness
- Fully responsive layout utilizing Tailwind CSS flex and grid structures.
- Touch-friendly tap targets for calendar sync and RSVP decrees.
- Optimized Three.js pixel ratio scaling to preserve battery life and maintain 60 FPS on mobile devices.

---

## 📄 License & Attribution
Crafted exclusively for the birthday celebration of **Pratishtha Tiwari**. Built with endless love by **Ranjeet Tiwari** ❤️.
