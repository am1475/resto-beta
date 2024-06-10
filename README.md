

---

# Restaurant Website

## Overview

This is a responsive multi-page restaurant website built with React, Tailwind CSS, and Firebase. The website includes features such as a homepage with hero sections, an about page, a menu page, a contact page, a login/signup page with Firebase authentication, and a landing page with today's special dishes. Additionally, users can add dishes to their cart and view the cart contents.

### Live Demo

Check out the live demo [here](https://resto-beta-puce.vercel.app/).

## Features

- **Responsive Design**: The website is fully responsive and works on all devices (mobile, tablet, desktop).
- **Firebase Authentication**: Users can log in and sign up using their email/password or Google account.
- **Cart Functionality**: Users can add dishes to the cart and view the cart contents.
- **EmailJS Integration**: The contact form is integrated with EmailJS to send messages directly to the restaurant's email.
- **Smooth Navigation**: The website has smooth scrolling navigation for a better user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Firebase**: For authentication and hosting.
- **EmailJS**: For handling contact form submissions.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase account.
- EmailJS account.

### Steps

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/restaurant-website.git
   cd restaurant-website
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Configure Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Set up Firebase Authentication and Hosting.
   - Replace the Firebase configuration in `src/firebase.js` with your own Firebase project credentials.

4. **Configure EmailJS**:
   - Create an account on [EmailJS](https://www.emailjs.com/).
   - Set up an email service and email template.
   - Note down your EmailJS Service ID, Template ID, and Public Key.
   - Replace the placeholders in the `Contact.jsx` component with your EmailJS credentials.

5. **Start the development server**:
   ```sh
   npm start
   ```

## Deployment

### Vercel Hosting

1. **Create a Vercel Account**:
   - Go to [Vercel](https://vercel.com/) and sign up for an account.

2. **Deploy the Project**:
   - Push your project to GitHub if it's not already there.
   - Import your project into Vercel by connecting your GitHub repository.
   - Follow the deployment instructions provided by Vercel.

3. **Live URL**:
   - Your project will be live at `https://resto-beta-puce.vercel.app/`.

## Usage

### Navigation

- **Home**: Introduction to the restaurant with a hero image.
- **About**: Information about the restaurant.
- **Menu**: Displays a list of available dishes.
- **Contact**: Contact form to send messages directly to the restaurant's email.
- **Login/Signup**: Authentication pages for user login and signup.
- **Landing**: Shows today's special dishes with an option to add them to the cart.

### Cart Functionality

- **Add to Cart**: Users can add dishes to their cart by clicking the "Add to Cart" button on the dish card.
- **View Cart**: Users can view their cart contents by clicking on the "Cart" link in the navbar.

## Project Structure

```
restaurant-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── contexts/
│   │   └── CartContext.js
│   ├── images/
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── firebase.js
├── .gitignore
├── firebase.json
├── package.json
└── README.md
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, please contact me at [amartyapaul760@gmail.com](mailto:amartyapaul760@gmail.com).

```

Feel free to copy this content and paste it into a `README.md` file in your GitHub repository. Make sure to replace the placeholder `your-username` with your actual GitHub username and update any other relevant project-specific details.
