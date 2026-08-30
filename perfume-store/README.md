# 🧴 Perfume Store — Premium Fragrance E-Commerce

A full-featured e-commerce platform for premium fragrances with a Django REST Framework backend and MySQL database.

## Tech Stack
- **Backend:** Django 4.2, Django REST Framework
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)
- **API Documentation:** DRF Browsable API

## Project Structure
```text
perfume-store/
├── backend/
│   ├── manage.py
│   ├── perfume_store/    # Main project settings
│   ├── products/         # Perfume catalog app
│   ├── orders/           # Order management app
│   └── users/            # User authentication app
├── database/
│   ├── init.sql          # DB schema
│   └── seed.sql          # Initial data
├── requirements.txt
└── README.md
```

## Setup Instructions

### 1. Database Setup
Ensure you have MySQL installed and running.
```bash
# Log into MySQL and run the initialization scripts
mysql -u root -p < database/init.sql
mysql -u root -p < database/seed.sql
```

### 2. Backend Setup
```bash
# Create and activate virtual environment (optional but recommended)
python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Navigate to backend directory
cd backend

# Apply migrations
python manage.py makemigrations users products orders
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Run the development server
python manage.py runserver
```

### 3. Frontend Setup (If applicable)
```bash
npm install
npm start
```

## API Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/users/register/` | POST | Register new user | No |
| `/api/users/login/` | POST | Get JWT tokens | No |
| `/api/users/login/refresh/` | POST | Refresh access token | No |
| `/api/users/profile/` | GET, PUT | Get/Update profile | Yes |
| `/api/products/` | GET | List products (w/ search/filter) | No |
| `/api/products/<id>/` | GET | Get product details | No |
| `/api/orders/` | GET, POST | List/Create orders | Yes |
| `/api/orders/<id>/` | GET | Get order details | Yes |

## Features
- **User Authentication:** Registration, Login, JWT Authentication
- **Product Catalog:** List perfumes, search by name/brand, filter by category
- **Order Management:** Create orders, view order history
- **Admin Dashboard:** Manage users, products, and orders

## Screenshots
*(Add screenshots of your application here)*

## License
MIT License
