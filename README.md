# Fashion Shop Web Application

A full-featured fashion shop application built with **Next.js 15**, **NextAuth.js**, and a backend API using Next.js Route Handlers. Users can browse products, view product details, login with social or credentials, and add products (protected route).

---

## Table of Contents

1. [Features](#features)  
2. [Technologies Used](#technologies-used)  
3. [Project Structure](#project-structure)  
4. [Getting Started](#getting-started)  
5. [Available Pages](#available-pages)  
6. [Optional Enhancements](#optional-enhancements)  
7. [Environment Variables](#environment-variables)  

---

## Features

- **Landing Page** (`/`) with:
  - Navbar
  - Hero Section
  - Product Highlights
  - Footer
  - Navigation links to login and products

- **Login Page** (`/login`):
  - Credential login (username/password)
  - Social login (Google)
  - Redirects to `/products` after successful login

- **Product List Page** (`/products`):
  - Publicly accessible
  - Displays products fetched from a mock backend or database
  - Each product includes name, description, price, and a "Details" button

- **Product Details Page** (`/products/[id]`):
  - Publicly accessible
  - Shows full product details (images, description, sizes, price)

- **Protected Add Product Page** (`/dashboard/add-product`):
  - Only accessible when logged in
  - Form to add a new product to the database
  - Redirects unauthenticated users to `/login`

- **Optional Enhancements**:
  - Loading spinner when submitting forms
  - Toast notifications on successful product add
  - Light/Dark theme toggle

---

## Technologies Used

- **Frontend**: Next.js 15, React, Tailwind CSS  
- **Authentication**: NextAuth.js (Google + Credentials)  
- **Backend**: Next.js API Route Handlers or simple Express.js server  
- **Database**: MongoDB (or mock JSON file for product list)  
- **UI Enhancements**: react-hot-toast, loading spinners  

---

## Project Structure

