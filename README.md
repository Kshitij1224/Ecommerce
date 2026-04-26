# 🛍️ Ecommerce Platform

A full-stack ecommerce application built with React, Node.js, and MongoDB. This platform includes a customer-facing storefront, admin panel, and complete payment integration.

## 🚀 Features

### Customer Features
- **Product Browsing**: Browse products with categories, search, and filtering
- **Shopping Cart**: Add/remove items, update quantities
- **User Authentication**: Login, registration, and profile management
- **Payment Integration**: Stripe and Razorpay payment support
- **Order Management**: View order history and track orders
- **Responsive Design**: Mobile-friendly interface

### Admin Features
- **Product Management**: Add, edit, delete products with image upload
- **Order Management**: View and update order status
- **User Management**: Monitor customer accounts
- **Dashboard**: Analytics and sales overview

## 🛠️ Tech Stack

### Frontend (Client)
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Stripe** - Payment processing
- **Cloudinary** - Image storage

### Admin Panel
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling

## 📁 Project Structure

```
Ecommerce/
├── client/                 # Customer frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/       # React context
│   │   ├── pages/         # Page components
│   │   └── assets/        # Static assets
│   └── package.json
├── backend/               # API server
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── config/           # Configuration files
│   └── server.js         # Server entry point
├── admin/                # Admin panel
│   ├── src/
│   │   ├── components/   # Admin components
│   │   └── pages/        # Admin pages
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kshitij1224/Ecommerce.git
   cd Ecommerce
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../client
   npm install

   # Install admin panel dependencies
   cd ../admin
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` file in the `backend` directory:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ADMIN_EMAIL=your_admin_email
   ADMIN_PASSWORD=your_admin_password
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

   Create `.env` file in the `client` directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. **Start the application**
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend (in new terminal)
   cd client
   npm run dev

   # Start admin panel (in new terminal)
   cd admin
   npm run dev
   ```

### Access Points
- **Customer Frontend**: http://localhost:5173
- **Admin Panel**: http://localhost:5174
- **Backend API**: http://localhost:4000

## 📊 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

### Products
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (admin)
- `POST /api/product/remove` - Remove product (admin)

### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart quantity
- `POST /api/cart/get` - Get user cart

### Orders
- `POST /api/order/place` - Place order (COD)
- `POST /api/order/stripe` - Place order (Stripe)
- `POST /api/order/verifyStripe` - Verify Stripe payment
- `GET /api/order/userorders` - Get user orders

## 💳 Payment Integration

### Stripe Setup
1. Create a Stripe account
2. Get your API keys from Stripe Dashboard
3. Add `STRIPE_SECRET_KEY` to backend `.env`
4. Add your Stripe publishable key to frontend

### Razorpay Setup
1. Create a Razorpay account
2. Get your API keys
3. Add keys to environment variables

## 🔧 Configuration

### MongoDB Setup
- **Local**: Install MongoDB Community Server
- **Cloud**: Use MongoDB Atlas (recommended for production)

### Cloudinary Setup (for image uploads)
1. Create a Cloudinary account
2. Get your API credentials
3. Add them to backend `.env`



## 🙏 Acknowledgments

- React documentation and community
- Stripe and Razorpay for payment solutions
- Cloudinary for image hosting
- MongoDB for database solution
