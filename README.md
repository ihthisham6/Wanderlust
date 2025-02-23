Wanderlust - Full-Stack Web Application for Discovering Accommodations

Wanderlust is a full-stack web application that allows users to discover and list unique accommodations from around the world. The platform is designed to offer a simple and effective way for hosts to share their
properties and for travelers to explore various accommodation options.

🌟Key Features

User Authentication: Secure sign-up, login, and account management functionalities for both travelers and hosts.

Accommodation Listings: Hosts can list their properties, complete with details such as location, price, and amenities.

User Reviews & Ratings: Travelers can leave reviews and rate their accommodations after staying.

Tech Stack

Frontend:

🖥️ EJS for templating

🎨 HTML, CSS for responsive and interactive UI

⚡ JavaScript for front-end logic and dynamic page updates

Backend:

🔥 Node.js and Express for server-side logic and routing

💾 MongoDB for data storage

Cloud Storage: 

☁️ Integration with Cloudinary for image uploads

Authentication:

🔐JWT-based user authentication for secure sessions

🗂️ Project Structure

controllers: Contains logic for managing routes and handling requests

models: Defines data models for users, accommodation listings, and reviews

routes: Manages API routing for various user actions

utils: Utility functions to assist with common tasks like validation

views: Contains all views rendered via EJS templates

public: Stores static files like images, CSS, and JavaScript

app.js: Main application file to initialize the server and middleware

🚀Getting Started

1.Clone the repository:

git clone https://github.com/ihthisham6/Wanderlust.git

cd Wanderlust

2.Install dependencies:

npm install

3.Set up environment variables (e.g., database URI, JWT secret key, Cloudinary API keys) in .env.

4.Start the application:

npm start

5.Navigate to http://localhost:3000 to access the platform locally.
