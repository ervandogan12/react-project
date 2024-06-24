# Stephen King Universe

Welcome to the Stephen King Universe project, an immersive web application designed for fans of Stephen King's novels. This project aims to provide detailed information about Stephen King's books, shorts, and villains through a user-friendly interface. By leveraging data from `https://stephen-king-api.onrender.com`, we offer fans a comprehensive and engaging experience.

## Features

### Must-Have Features

- **Project Structure**: Organized and modular codebase for easy navigation and maintenance.
- **Landing Page**: A welcoming first view that introduces users to the application.
- **Dynamic Endpoints**: Utilize API endpoints to fetch and display data for books, shorts, and villains.
- **Books Page**: Dedicated section for browsing books with options to view detailed information.
- **Shorts Page**: Explore short stories with detailed views for each entry.
- **Villains Page**: Discover the antagonists within Stephen King's universe with detailed descriptions.
- **Pagination**: Navigate through the data efficiently with pagination.
- **Search Functionality**: Allows users to search for specific books, shorts, or villains.
- **Favorites**: Users can add or remove items to a favorites list using local storage.

### Nice-to-Have Features

- **Filtering**: Sort books by year to find older or newer publications.
- **Dark/Light Mode**: A settings option to toggle between dark and light themes for user comfort.

## Design Inspiration

The design of this project is inspired by the sleek and user-friendly interface of [Adyen](https://www.adyen.com). We aim to create an engaging and intuitive user experience, similar to Adyen's approach, focusing on ease of navigation and aesthetic appeal.

## Development

This project is developed with React (using Vite) for the frontend and Node.js for the backend. It connects to a MongoDB NoSQL cloud database to store user data securely.

### Core Dependencies

- **axios**: For making HTTP requests to the API.
- **jwt-decode**: To decode JWT tokens for authentication.
- **open**: To open URLs or files across different platforms.
- **react**: The core library for building the UI.
- **react-dom**: For DOM-specific rendering methods.
- **react-router-dom**: To handle routing within the application.

## Getting Started

To get started with this project:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies with `npm install`.
3. Start the development server with `npm start`. This will launch the application in your default web browser.

## Contribution

Contributions to the Stephen King Universe project are welcome. Whether it's adding new features, fixing bugs, or improving documentation, your help is appreciated. Please feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Structure

The structure of the project is like;
project-root
│
├── README.md
│
├── backend
│   ├── models
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── Routes.jsx
│   ├── assets
│   │   ├── heart-regular.svg
│   │   ├── heart-solid.svg
│   │   ├── landing_img.png
│   │   ├── shortImg.png
│   │   ├── stepking.png
│   │   └── villains.png
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Login
│   │   │   ├── AuthForm.jsx
│   │   │   └── AuthPage.jsx
│   │   ├── Nav.jsx
│   │   ├── UserProfile.jsx
│   │   └── pages
│   │       ├── Books
│   │       │   ├── Book.jsx
│   │       │   ├── BookDetail.jsx
│   │       │   └── Books.jsx
│   │       ├── Favourites.jsx
│   │       ├── Filter
│   │       │   ├── FilterResults.jsx
│   │       │   └── FilterSection.jsx
│   │       ├── LandingPage.jsx
│   │       ├── Search
│   │       │   ├── SearchResults.jsx
│   │       │   └── SearchSection.jsx
│   │       ├── Shorts
│   │       │   ├── Short.jsx
│   │       │   ├── ShortDetail.jsx
│   │       │   └── Shorts.jsx
│   │       └── Villains
│   │           ├── Villain.jsx
│   │           ├── VillainDetails.jsx
│   │           └── Villains.jsx
│   ├── context
│   │   ├── AuthContext.jsx
│   │   ├── Data.jsx
│   │   ├── DataContext.jsx
│   │   └── FavoritesContext.jsx
│   ├── index.css
│   └── main.jsx
│
└── vite.config.js


# Goals and Backlog
## Must-Have Features

- [X] Project structure setup.
- [X] Landing page development.
- [X] Implementation of data-fetching endpoints.
- [X] Detailed views for Books, Shorts, and Villains.
- [X] Pagination.
- [X] Favorites list functionality.
- [X] Search functionality.

## Nice-to-Have Features

- [X] Filter books by year.
- [X] Log in/Register and Log Out.
- [ ] Toggle between dark and light modes.


For design inspiration and functionality, the project draws from various sources, aiming to create a user-friendly and engaging platform for Stephen King fans. 