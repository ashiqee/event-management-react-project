# TecH.e

## [ Live Website Link](https://tech-e-auth.web.app/)

Also Click here : [https://tech-e-auth.web.app/](https://tech-e-auth.web.app/)

## New Feature: THREE.js View in Event Details Page and firestore impliment - 13-12-2023

### Overview

The Event Details page now features an immersive THREE.js view related to the specific event. This view provides an interactive and visually engaging experience for users.

### Implementation Steps

1. **Event Details Page:**
   - The Event Details page has been enhanced to include a dedicated section for the THREE.js view.

2. **Integration with THREE.js:**
   - The THREE.js library has been integrated into the project. (`"@react-spring/three": "^9.7.3",
    "@react-three/drei": "^9.92.1",
    "@react-three/fiber": "^8.15.12",
    "@react-three/postprocessing": "^2.15.11",
    "@use-gesture/react": "^10.3.0",`)

3. **Loading 3D Model:**
   - The THREE.js view loads a 3D model associated with the event using loaders provided by THREE.js.

4. **Interactive Controls:**
   - Users can interact with the 3D view through controls, including panning, zooming, and rotating.

5. **Annotations or Information Overlay:**
   - Relevant information or annotations are overlaid on the 3D view to provide additional context about the event.

6. **Event-specific Customization:**
   - The THREE.js view is customized based on event-specific data, adjusting colors, textures, or lighting as needed.

7. **Responsive Design:**
   - The 3D view is designed to be responsive, ensuring a seamless experience on various screen sizes.

8. **Error Handling:**
   - Robust error handling is implemented to handle cases where the 3D model or resources fail to load.

9. **Performance Optimization:**
   - The performance of the 3D view is optimized, including handling large models and implementing LOD where necessary.

10. **Testing:**
    - Thorough testing has been conducted on different browsers and devices to ensure a consistent user experience.

11. **Documentation:**
    - Project documentation has been updated to include information on using the new THREE.js feature.

12. **User Feedback:**
    - User feedback is encouraged to make iterative improvements to the THREE.js view.

13. **Deployment:**
    - The project, featuring the new THREE.js view, is deployed to the hosting environment.

14. **User Education:**
    - Tooltips and user education materials are provided to guide users on interacting with the THREE.js view.

# Firebase project set up with Firestore
- Firestore Integration
 - getDoc Implementation
 - addDoc Implementation

### uses page: Event Details Get Ticket add Doc and Payment report page getDoc.

### 🧮 Website Feature: Five Feature and functionalities in this Website.

- This website is tech event management related.
- In this website Home page have navbar there some menu and login, profile option. when Profile image click show user name and logout button.
- Home page also have banner with event date, after welcome , event list show 6 card from json data. event schedule 6 speaker with schedule time from json data. some sponsor and footer.
- Events Details+Schedule is private route if user is not login they can't see this feature.
- user sign up with google and register by user some information also has password validation.after user can login.



# Tech Event Management Website

Welcome to the Tech Event Management Website! This project is designed to help you manage and organize tech events seamlessly. The website is built using React, Material Tailwind, AOS (Animate on Scroll), Firebase for authentication and hosting, React Toasty for notifications, Tailwind CSS, and Vite for efficient development.

## Table of Contents

- [Features](#features)
- [Development Stack](#development-stack)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Private Routes](#private-routes)
- [JSON Data](#json-data)
- [Dependencies](#dependencies)


## Features

- **Navbar:** Navigation bar for easy access to different sections.
- **Menu and Login:** User-friendly menu and login options.
- **Profile:** Clicking on the profile image displays the user name and a logout button.
- **Banner:** Displays the event date along with a welcome message.
- **Event List:** Shows 6 event cards from JSON data.
- **Speaker Schedule:** Features 6 speakers with scheduled times from JSON data.
- **Sponsors:** Showcases sponsors supporting the event.
- **Footer:** Includes essential information and links.

## Development Stack

- **React:** Front-end library for building user interfaces.
- **Material Tailwind:** UI component library for React based on Tailwind CSS.
- **AOS (Animate on Scroll):** Adds animations when scrolling.
- **Firebase Auth and Hosting:** For user authentication and hosting the application.
- **React Toasty:** Provides toast notifications for user feedback.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Vite:** Fast and efficient development setup for React.


## Project Structure

The project adheres to a standard React application layout:

- **src/components:** Reusable React components.
- **src/components/pages:** Different pages of the application (Home, EventDetails, etc.).
- **src/Router/routes:** Route configurations, including private routes.

## Authentication

Users can sign up and log in using their Google accounts. Firebase Authentication is seamlessly integrated to ensure a secure authentication process.

## Private Routes

The "Events Details+Schedule" page is a private route, allowing access only to authenticated users. Unauthorized users attempting to access this page will be redirected to the login page.

## JSON Data

Event cards and speaker information are dynamically loaded from JSON data, providing an efficient and easily manageable way to update event details.

## Dependencies

For a comprehensive list of project dependencies, please refer to the `package.json` file.

