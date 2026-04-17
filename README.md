# KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a responsive friendship management web app built to help users maintain meaningful relationships. Users can browse friend profiles, view detailed information, log interactions like calls, texts, and video chats, explore a timeline of activity, and view friendship analytics through a clean and modern interface.

## Live Site
https://keen-keeper-a7-two.vercel.app/

## Project Purpose
This project is designed to make relationship tracking simple and engaging. It helps users stay connected with their friends by organizing contact history, showing relationship status, and highlighting who may need attention.

## Technologies Used
- React.js
- Vite
- React Router
- Tailwind CSS
- Recharts
- React Icons
- React Toastify

## Key Features
1. **Friend Management Dashboard**  
   View all friends in a clean card layout with picture, tags, status, and days since last contact.

2. **Interaction Timeline Tracking**  
   Log Call, Text, and Video interactions directly from the friend details page and view them later in the Timeline page with filtering options.

3. **Friendship Analytics**  
   Visualize interaction activity using a Pie Chart on the Stats page to better understand communication patterns.

## Completed Requirements
- Responsive design for mobile, tablet, and desktop
- Navbar with logo, icons, and active route highlighting
- Banner section with title, subtitle, action button, and summary cards
- JSON-based friend data with meaningful profile information
- Friend cards displayed in a 4-column layout on large screens
- Friend details page with two-column layout
- Stats cards and relationship goal section
- Quick Check-In buttons for Call, Text, and Video
- Timeline entry creation with current date and interaction title
- Toast notifications on interaction logging
- Timeline page with icons and interaction history
- Footer section matching the design
- 404 page for invalid routes
- Loading spinner while fetching friends data
- Reload-safe routing after deployment
- Friendship Analytics page with Recharts Pie Chart
- Timeline filter by Call, Text, and Video
- Well-structured README file

## Pages Included
- Home
- Friend Details
- Timeline
- Stats
- 404 Not Found

## Challenges Implemented
- Friendship Analytics Pie Chart
- Timeline filtering by interaction type
- Custom project README

## Future Improvements
- Search timeline by friend name
- Sort timeline by newest or oldest
- Edit friendship goals dynamically
- Store interactions in local storage or database

## Installation and Setup
To run this project locally:

```bash
git clone [repository-link]
cd keen-keeper-React-router-Website
npm install
npm run dev