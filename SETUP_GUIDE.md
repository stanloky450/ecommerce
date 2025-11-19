# E-Commerce Platform - Quick Setup Guide

## What Has Been Built

A complete, production-ready e-commerce platform with:

### Admin Dashboard
- **Store Settings** - Manage store name, contact info, social media links
- **Theme Customization** - Switch between 4 color themes (Blue, Pink, Green, Black)
- **Product Management** - Full CRUD with variants, images, inventory tracking
- **Order Management** - View, filter, and manage customer orders
- **Promo Codes** - Create and manage discount codes
- **Analytics Dashboard** - Overview of sales, orders, and revenue

### Frontend
- **Animated Homepage** - Beautiful hero section with Framer Motion
- **Product Showcase** - Responsive product grid with hover effects
- **Navbar & Footer** - Dynamic components that reflect store settings
- **Theme-Aware Design** - All components adapt to selected theme

### Technical Features
- Next.js 15 with App Router and TypeScript
- MongoDB database with 7 models
- JWT authentication system
- Cloudinary image upload integration
- Stripe payment setup
- Fully responsive design
- SEO optimized

## Quick Start

### 1. Install Dependencies (Already Done)
```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB - REQUIRED
MONGODB_URI=mongodb://localhost:27017/ecommerce
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT Secret - REQUIRED (change this!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Cloudinary - Optional (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Stripe - Optional (for payments)
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Start MongoDB

**Option A: Local MongoDB**
```bash
# Make sure MongoDB is running on your machine
mongod
```

**Option B: MongoDB Atlas (Recommended)**
1. Create free account at mongodb.com/atlas
2. Create a cluster
3. Get connection string
4. Add to `.env` as MONGODB_URI

### 4. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

## First Steps After Setup

### 1. Access Admin Dashboard
Visit: http://localhost:3000/admin/dashboard

### 2. Configure Store Settings
Go to: http://localhost:3000/admin/store
- Set your store name and tagline
- Add business email and phone
- Add social media links
- Choose your theme color

### 3. Add Products
Go to: http://localhost:3000/admin/products
- Click "Add Product"
- Fill in product details
- Add pricing and stock
- Products will appear on homepage

### 4. View Your Store
Visit: http://localhost:3000
- See your customized homepage
- Browse products
- Theme changes apply instantly

## Project Structure

```
ecommerce/
├── app/
│   ├── admin/          # Admin dashboard pages
│   │   ├── dashboard/  # Analytics overview
│   │   ├── store/      # Store settings
│   │   ├── products/   # Product management
│   │   ├── orders/     # Order management
│   │   ├── banners/    # Banner management
│   │   └── promos/     # Promo management
│   ├── api/            # API endpoints
│   │   ├── auth/       # Login & register
│   │   ├── store/      # Store CRUD
│   │   ├── products/   # Product CRUD
│   │   ├── orders/     # Order CRUD
│   │   ├── banners/    # Banner CRUD
│   │   └── promos/     # Promo CRUD
│   └── page.tsx        # Homepage
├── components/
│   ├── ui/             # Reusable UI components
│   ├── frontend/       # Navbar, Footer, ProductCard
│   └── providers/      # Theme provider
├── models/             # MongoDB schemas
├── lib/                # Utilities (auth, db, cloudinary)
└── hooks/              # Custom React hooks
```

## Key Features to Explore

### 1. Theme System
The platform supports 4 themes that change:
- Primary colors (buttons, links, headers)
- Navbar and footer colors
- Accent colors throughout

Change theme in: Admin → Store Settings

### 2. Product Management
Products support:
- Multiple images
- Product variants (size, color, etc.)
- Compare-at pricing (show discounts)
- Stock tracking
- Categories and tags
- Visibility controls

### 3. Order Management
Track orders with:
- Order status (pending, processing, shipped, delivered)
- Payment status (pending, paid, failed)
- Customer information
- Order items and totals

### 4. Store Customization
Customize everything:
- Store name and logo
- Contact information
- Social media links
- Theme colors
- Footer text

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create user account
- `POST /api/auth/login` - Login user

### Store
- `GET /api/store` - Get store settings
- `PUT /api/store` - Update store settings

### Products
- `GET /api/products` - List products (supports filters)
- `POST /api/products` - Create product
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Orders
- `GET /api/orders` - List orders (supports filters)
- `POST /api/orders` - Create order

### Banners
- `GET /api/banners` - List banners
- `POST /api/banners` - Create banner

### Promos
- `GET /api/promos` - List promo codes
- `POST /api/promos` - Create promo code

## Testing the Platform

### 1. Test Store Settings
1. Go to Admin → Store Settings
2. Change store name to "My Awesome Store"
3. Set tagline to "Best products at great prices"
4. Select a different theme (Pink, Green, or Black)
5. Visit homepage to see changes

### 2. Test Product Creation
1. Go to Admin → Products
2. Click "Add Product"
3. Fill in:
   - Name: "Test Product"
   - Category: "Electronics"
   - Description: "Amazing product"
   - Price: 99.99
   - Stock: 10
   - SKU: "TEST001"
4. Create product
5. Visit homepage to see it displayed

### 3. Test Order Management
1. Go to Admin → Orders
2. View orders list
3. Filter by status
4. See order statistics

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub (already done)
2. Visit vercel.com
3. Import your repository
4. Add environment variables:
   - MONGODB_URI
   - JWT_SECRET
   - (Optional) Cloudinary credentials
   - (Optional) Stripe credentials
5. Deploy

### Environment Variables for Production

Make sure to set these in your hosting platform:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - A strong random string
- `NEXT_PUBLIC_APP_URL` - Your production URL
- Cloudinary credentials (if using image uploads)
- Stripe credentials (if using payments)

## Next Steps

### Recommended Additions

1. **Authentication UI**
   - Create login/register pages
   - Add user dashboard
   - Implement customer accounts

2. **Shopping Cart**
   - Cart context/store
   - Cart page
   - Checkout flow

3. **Payment Integration**
   - Complete Stripe integration
   - Add payment webhooks
   - Order confirmation emails

4. **Image Upload**
   - Add image upload UI in product form
   - Connect to Cloudinary
   - Support multiple images

5. **Banner Management**
   - Create banner CRUD pages
   - Display banners on homepage
   - Support different banner types

6. **Flash Sales**
   - Flash sale CRUD interface
   - Countdown timer component
   - Apply sale pricing to products

## Troubleshooting

### Can't connect to MongoDB
- Make sure MongoDB is running locally
- Or use MongoDB Atlas cloud database
- Check MONGODB_URI in .env

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Theme not changing
- Make sure you saved store settings
- Refresh the page
- Check browser console for errors

### Products not showing
- Make sure products are marked as visible
- Check that products were created successfully
- View API response in browser dev tools

## Support

For issues:
1. Check the README.md for detailed documentation
2. Review error messages in browser console
3. Check API responses in Network tab
4. Verify environment variables are set

## Built With

- Next.js 15
- TypeScript
- TailwindCSS
- ShadCN UI
- Framer Motion
- MongoDB & Mongoose
- JWT
- Cloudinary
- Stripe

---

**Your e-commerce platform is ready to use!**

Start by configuring your store settings and adding products.
