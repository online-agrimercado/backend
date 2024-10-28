# Online Agrimercado Backend

This repository contains the backend code for the **Online Agrimercado** project. It uses Node.js, Express, and MySQL to serve APIs for frontend data requirements.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MySQL](https://www.mysql.com/)

### Project Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/online-agrimercado.git
   cd online-agrimercado/backend
Install Dependencies: Inside the backend folder, run:

bash
Copy code
npm install
Database Configuration: In server.js, configure the database connection:

javascript
Copy code
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '201199201199',
    database: 'agrimercado'
});
Ensure that your MySQL database matches this setup or modify it according to your environment.

Run the Server:

bash
Copy code
node server.js
The backend server should now be running on http://localhost:5000.

API Endpoints
GET /api/products: Retrieve all products from the database.
Deployment
To redeploy changes to GitHub, follow these steps:

Make Your Changes: Edit or add new files as needed.

Stage and Commit Changes:

bash
Copy code
git add .
git commit -m "Describe your changes"
Push to GitHub:

bash
Copy code
git push origin main
License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements
Express - Fast, unopinionated, minimalist web framework for Node.js
MySQL - The world's most popular open source database
markdown
Copy code

### Instructions to Use
- Replace `yourusername` in the cloning URL with your actual GitHub username.
- Save this content in a file named `README.md` at the root of your project directory.

Let me know if you need any more help!
