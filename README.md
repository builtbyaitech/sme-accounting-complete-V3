# SME Accounting System

A comprehensive accounting system designed for Small and Medium Enterprises (SMEs) built with the MERN stack.

## Version 3 Updates

### New Features
- Enhanced Account Management
  - Bulk operations for account status updates
  - Excel import/export functionality
  - Account template download
  - Improved data validation
- Advanced Reporting
  - Income Statement report
  - Balance Sheet report
  - Account Balances report
  - Interactive charts and visualizations
- TypeScript Integration
  - Full TypeScript support
  - Enhanced type safety
  - Better development experience

### Technical Improvements
- Modern UI Components
  - Material-UI integration
  - Responsive layouts
  - Interactive data grids
  - Form validation
- Data Management
  - React Query for data fetching
  - Real-time updates
  - Optimistic updates
  - Error handling
- Development Features
  - TypeScript configuration
  - ESLint and Prettier setup
  - Path aliases
  - Development proxy

## Project Structure

```
sme-accounting-complete/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                 # Node.js backend application
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   └── package.json        # Backend dependencies
└── README.md               # Project documentation
```

## Features

### Account Management
- Create, read, update, and delete accounts
- Bulk operations for account status
- Excel import/export functionality
- Account templates
- Data validation
- Search and filter capabilities

### Financial Reports
- Income Statement
- Balance Sheet
- Account Balances
- Interactive charts
- Export to Excel
- Custom date ranges

### User Interface
- Modern Material-UI design
- Responsive layout
- Interactive data grids
- Form validation
- Real-time updates
- Error handling

## Technology Stack

### Frontend
- React 18
- TypeScript
- Material-UI
- React Query
- React Router
- Recharts
- Formik & Yup
- XLSX

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- TypeScript
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sme-accounting-complete.git
cd sme-accounting-complete
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Create a `.env` file in the backend directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the development servers:

Frontend:
```bash
cd frontend
npm run dev
```

Backend:
```bash
cd backend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Development

### Frontend Development
- TypeScript for type safety
- ESLint and Prettier for code formatting
- React Query for data management
- Material-UI for components
- Path aliases for clean imports

### Backend Development
- TypeScript for type safety
- MongoDB with Mongoose
- JWT authentication
- Error handling middleware
- API documentation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@example.com or create an issue in the repository.