# E-Commerce Platform with Admin Dashboard

A modern, full-featured e-commerce platform built with Next.js 15, TypeScript, TailwindCSS, ShadCN UI, and MongoDB.

## Features

### Admin Dashboard
- **Store Settings Management** - Configure store name, tagline, contact info, social media links
- **Theme Customization** - Switch between Blue, Pink, Green, and Black themes
- **Product Management** - Full CRUD operations with variants, images, and inventory
- **Order Management** - View and manage customer orders
- **Banner Management** - Create and manage hero sections and promotional banners
- **Promo Code Management** - Create discount codes (percentage or fixed)
- **Flash Sale System** - Time-limited sales with countdown timers

### Frontend Features
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Powered by Framer Motion
- **Product Catalog** - Browse products by category
- **Shopping Cart** - Add to cart functionality
- **Checkout Flow** - Complete checkout with Stripe integration
- **SEO Optimized** - Meta tags and structured data

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Animations**: Framer Motion
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Upload**: Cloudinary
- **Payment**: Stripe
- **State Management**: Zustand

## Project Structure

```
ecommerce/
├── app/
│   ├── admin/              # Admin dashboard pages
│   │   ├── dashboard/      # Dashboard overview
│   │   ├── store/          # Store settings
│   │   ├── products/       # Product management
│   │   ├── orders/         # Order management
│   │   ├── banners/        # Banner management
│   │   └── promos/         # Promo code management
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── store/          # Store CRUD
│   │   ├── products/       # Product CRUD
│   │   ├── orders/         # Order CRUD
│   │   ├── banners/        # Banner CRUD
│   │   └── promos/         # Promo CRUD
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # Reusable UI components
│   └── providers/          # Context providers
├── models/                 # MongoDB models
│   ├── User.ts
│   ├── Store.ts
│   ├── Product.ts
│   ├── Order.ts
│   ├── Banner.ts
│   ├── Promo.ts
│   └── FlashSale.ts
├── lib/
│   ├── mongodb.ts          # Database connection
│   ├── auth.ts             # JWT utilities
│   ├── cloudinary.ts       # Image upload utilities
│   └── utils.ts            # Helper functions
└── hooks/                  # Custom React hooks
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)
- Cloudinary account (for image uploads)
- Stripe account (for payments)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/ecommerce

# JWT Secret (change this!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Stripe
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to `http://localhost:3000`

## Database Models

### User
- Email, password, name, role (admin/customer)
- JWT authentication

### Store
- Store name, tagline, contact information
- Social media links (Facebook, Instagram, TikTok, Twitter, YouTube, WhatsApp)
- Theme selection (Blue, Pink, Green, Black)
- Logo and favicon

### Product
- Name, slug, description, category
- Multiple images
- Price and compare-at price
- Variants (size, color, etc.)
- Stock quantity, SKU
- Tags, visibility settings

### Order
- Order number, user ID
- Items with product details and variants
- Shipping details
- Payment information (Stripe)
- Order status tracking

### Banner
- Type (hero, homepage, sidebar, promotional)
- Title, subtitle, CTA text and link
- Image, active status

### Promo
- Code, type (percentage/fixed)
- Value, description
- Valid date range
- Usage limits

### FlashSale
- Title, description
- Discount percentage
- Product IDs
- Start and end dates
- Banner image

## API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Store
- `GET /api/store` - Get store settings
- `PUT /api/store` - Update store settings

### Products
- `GET /api/products` - List all products (with filters)
- `POST /api/products` - Create product
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Orders
- `GET /api/orders` - List all orders (with filters)
- `POST /api/orders` - Create order

### Banners
- `GET /api/banners` - List banners (with filters)
- `POST /api/banners` - Create banner

### Promos
- `GET /api/promos` - List promo codes
- `POST /api/promos` - Create promo code

## Admin Dashboard

Access the admin dashboard at `/admin/dashboard`

### Store Settings (`/admin/store`)
- Configure general information (name, email, phone, address)
- Set tagline and about section
- Customize footer text
- Select theme color (Blue, Pink, Green, Black)
- Add social media links
- Upload logo and favicon

### Theme System

The platform supports 4 theme colors that apply globally:
- **Blue** (default) - Professional and trustworthy
- **Pink** - Modern and vibrant
- **Green** - Natural and eco-friendly
- **Black** - Elegant and sophisticated

Themes affect:
- Navbar colors
- Button colors
- Footer styling
- Card accents
- Icons and highlights

### Product Management (`/admin/products`)
- Add products with multiple images
- Create product variants (size, color, weight, etc.)
- Set pricing and compare-at price
- Manage inventory and SKU
- Add tags for better searchability
- Toggle product visibility

### Order Management (`/admin/orders`)
- View all orders with filtering
- Update order status
- View customer details
- Track payment status
- Export order data

### Banner Management (`/admin/banners`)
- Create hero banners
- Design promotional banners
- Upload banner images
- Set CTA text and links
- Control banner visibility

### Promo Management (`/admin/promos`)
- Create discount codes
- Set percentage or fixed discounts
- Configure valid date ranges
- Set usage limits
- Track promo usage

## Development Guidelines

### Adding New Features

1. Create database model in `models/`
2. Add API routes in `app/api/`
3. Create admin page in `app/admin/`
4. Add frontend components in `components/`

### Code Style

- Use TypeScript for type safety
- Follow Next.js App Router conventions
- Use ShadCN UI components
- Keep components small and reusable
- Use server components where possible

### Security Best Practices

- Never expose JWT_SECRET
- Hash passwords with bcrypt
- Validate all user input
- Use HTTPS in production
- Implement rate limiting for API routes
- Sanitize database queries

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Roadmap

- [ ] Customer authentication and accounts
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Advanced analytics dashboard
- [ ] Email notifications
- [ ] Multi-currency support
- [ ] Inventory alerts
- [ ] Bulk product import/export

## Support

For issues or questions, please open an issue on GitHub.

## License

MIT License - feel free to use this project for your own store!
