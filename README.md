### README for University Booking System aka Fin

---

## University Booking System

This is a university booking system developed with a React frontend and a Node.js backend. The system allows different users (Admin, Housekeeper, Matron, and Students) to manage and apply for hostel accommodations.

### Features

- **User Authentication**: Secure login for Admin, Housekeeper, Matron, and Students.
- **Student Registration**: Students can register and receive a unique registration number.
- **Application Form**: Students can apply for hostels by filling out a detailed application form.
- **Application Review**: Admin and Housekeeper can review applications and accept or reject them.
- **Room Allocation**: Matron allocates rooms to students from a list of available rooms.
- **View Details**: Admin can view details of all users.

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Project Structure

```
/Fin
  /backend
    /controllers
    /middleware
    /models
    /routes
    .env
    server.js
    package.json
  /frontend
    /src
      /components
      /pages
      App.js
      index.js
    .env
    package.json
```

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Westlee95/Fin
   cd Fin/backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create Environment Variables**:
   Create a `.env` file in the `backend` directory with the following content:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the Backend Server**:
   ```bash
   npm start
   ```

The backend server should now be running on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create Environment Variables**:
   Create a `.env` file in the `frontend` directory with the following content:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Proxy Configuration**:
   Ensure that the proxy setting in `package.json` of the React app is set correctly:
   ```json
   {
     "proxy": "http://localhost:5000"
   }
   ```

5. **Start the Frontend Server**:
   ```bash
   npm start
   ```

The frontend application should now be running on `http://localhost:3000`.

### Usage

1. **Access the Application**: Open your web browser and go to `http://localhost:3000`.

2. **Register Users**: Register different types of users (Admin, Housekeeper, Matron, and Students).

3. **Login**: Use the login page to authenticate users.

4. **Perform Actions**: Test the different functionalities (e.g., students applying for hostels, admin reviewing applications, matron allocating rooms).

### API Endpoints

- **Auth Routes**:
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Login a user.

- **Application Routes**:
  - `POST /api/application/apply`: Submit a new application.
  - `GET /api/application/review`: Review all applications (Admin and Housekeeper).
  - `POST /api/application/accept/:id`: Accept an application (Admin and Housekeeper).
  - `POST /api/application/reject/:id`: Reject an application (Admin and Housekeeper).

- **Room Allocation Routes**:
  - `POST /api/allocation/allocate`: Allocate a room to a student (Matron).
  - `GET /api/allocation/view`: View allocated rooms.

- **Admin Routes**:
  - `GET /api/admin/users`: View all users.

### Important Notes

- **Security**: Ensure that JWT tokens are stored securely and that endpoints are protected.
- **Environment Variables**: Keep your environment variables secure and do not expose them in your code.
- **Testing**: Test the application thoroughly to ensure all functionalities work as expected.

### Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)

---

Feel free to reach out if you have any questions or need further assistance!