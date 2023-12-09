# TecH.e

## [ Live Website Link](https://tech-e-auth.web.app/)

Also Click here : [https://tech-e-auth.web.app/](https://tech-e-auth.web.app/)

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

