# Xeno Mini CRM - Backend

This is the backend service for the Xeno Mini CRM application, built with Node.js and Express.js.

## 🚀 Features

- RESTful API architecture
- MongoDB database integration
- JWT authentication
- Google OAuth integration
- Swagger API documentation
- Input validation
- Error handling middleware
- CORS enabled

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository
```bash
git clone <repository-url>
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## 📁 Project Structure

```
backend/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── index.js        # Application entry point
└── swagger.json    # API documentation
```

## 🔑 API Documentation

The API documentation is available through Swagger UI. Once the server is running, visit:
```
http://localhost:5000/api-docs
```

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```

## 🛡️ Security

- Password hashing using bcrypt
- JWT for secure authentication
- Input validation using express-validator
- CORS protection
- Environment variables for sensitive data

## 📦 Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- jsonwebtoken: JWT authentication
- bcrypt: Password hashing
- cors: Cross-origin resource sharing
- dotenv: Environment variables
- express-validator: Input validation
- passport: Authentication middleware
- swagger-ui-express: API documentation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
