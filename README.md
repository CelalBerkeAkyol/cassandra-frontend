# Data Science Blog Frontend

This web platform is designed for data scientists and researchers to showcase their Python notebook projects. Users can easily convert their Jupyter Notebook (.ipynb) files into a clean, readable format (.md and images) and upload them to create a shareable online portfolio post. Our system handles the rest, turning your research into a polished, web-friendly article.

## Screenshots

### A Example blog post

![Post Page](./screenshots/Screenshot%202025-09-28%20at%2020.27.08.png)
![Post Page 3](./screenshots/Screenshot%202025-09-28%20at%2020.28.29.png)

### Dashboard Pages

![Blogs Page](./screenshots/Screenshot%202025-09-28%20at%2021.01.48.png)
![Blogs Page](./screenshots/Screenshot%202025-09-28%20at%2021.01.56.png)
![Blogs Page](./screenshots/Screenshot%202025-09-28%20at%2021.02.05.png)
![Blogs Page](./screenshots/Screenshot%202025-09-28%20at%2021.02.31.png)
![Blogs Page](./screenshots/Screenshot%202025-09-28%20at%2021.02.39.png)

## Features List

Here’s a reorganized and corrected list of your project's features, grouped by category for clarity.

#### User Authentication & Management

- **User Registration:** Sign up using an email and password.
- **Authentication:** Secure login and logout functionality.
- **Password Management:** Reset forgotten passwords via email.
- **Protected Routes:** Secure access to user-specific pages.
- **Profile Management:** Create and edit personal user profiles.
- **Account Deletion:** Users can permanently delete their own accounts.
- **Admin Controls:**
  - Manage user roles (e.g., admin, user).
  - Delete user accounts.

#### Post & Content Management

- **Create & Edit Posts:** Write new posts or modify existing ones.
- **Jupyter Notebook Importer:** Easily upload `.ipynb` files, which are automatically converted to a post with markdown and images.
- **Post Deletion:** Remove posts permanently.
- **Post Discovery:**
  - View a feed of the latest posts.
  - Browse posts by category.
  - Search for specific posts.
- **User Engagement:**
  - Like and dislike posts.
  - Share posts on social media platforms.
- **UI/UX:**
  - **Loading Skeletons:** Modern loading indicators while content is being fetched.

#### Media Management

- **Image Uploads:** Upload images directly to the platform.
- **Image Library:** View, select, and delete uploaded images from a personal gallery.

## Tech Stack

- **Frontend Framework:** React.js
- **State Management:** Redux, Context API
- **Styling:** Tailwind CSS, NextUI
- **Build Tool:** Vite
- **Backend Integration:** RESTful API (Node.js, Express.js)
- **Database:** MongoDB

## Installation & Usage

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/CelalBerkeAkyol/cassandra-frontend
   cd finance-blog-frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and configure it as follows:

   ```env
   NODE_ENV=development
   VITE_API_URL=http://localhost:3000/api
   VITE_ENABLE_LOGGING=true
   VITE_LOG_LEVEL=debug
   VITE_APP_NAME=DataScienceBlog
   VITE_APP_VERSION=1.0.0
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

5. **Access the Application**

   Open your browser and navigate to `http://localhost:5173` to view the application.

## 📝 License

This project is distributed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)** license. This license prohibits **commercial use** and **derivative works**. For more details, refer to the [LICENSE](LICENSE) file.

## 👨‍💻 Contributing

If you want to contribute to this project, please create an **Issue** before opening a **Pull Request**.

```bash
git checkout -b feature/new-feature
git commit -m "Added a new feature"
git push origin feature/new-feature
```

## **📩 Contact**

**Email:** [celalberke@cassandra.com.tr](mailto:celalberke@cassandra.com.tr)  
**Github:** [Github](https://github.com/CelalBerkeAkyol)  
**LinkedIn:** [LinkedIn](https://www.linkedin.com/in/celal-berke-akyol-389a3a216/)

---

### **🔗 Additional Links**

- 📌 **[Backend Repo](https://github.com/CelalBerkeAkyol/cassandra-backend)**

---

Feel free to reach out for any feedback or suggestions! 🚀
