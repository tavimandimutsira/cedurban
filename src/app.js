const express = require('express');
const cors    = require('cors');
require('dotenv').config();
const path    = require('path');

const app = express();

// ✅ CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://cedurbanmain-zeed.onrender.com', // Replace with your real frontend URL(s)
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy: Not allowed by CORS'));
  },
  credentials: true,
}));

// Accept JSON and plain text for fetch
app.use(express.json({ type: ['application/json', 'text/plain'] }));

// Static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ ROUTE LOGGING SECTION
try {
  // Auth & RBAC
  // console.log('Loading /api/auth');        app.use('/api/auth', require('./routes/authRoutes'));
  // console.log('Loading /api/users');       app.use('/api/users', require('./routes/userRoutes'));
  // console.log('Loading /api/roles');       app.use('/api/roles', require('./routes/roleRoutes'));
  console.log('Loading /api/permissions');    app.use('/api/permissions', require('./routes/permissionRoutes'));

  // Membership System
  // console.log('Loading /api/members');                app.use('/api/members', require('./routes/memberRoutes'));
  // console.log('Loading /api/next-of-kin');            app.use('/api/next-of-kin', require('./routes/nextOfKinRoutes'));
  // console.log('Loading /api/member-family');          app.use('/api/member-family', require('./routes/memberFamilyRoutes'));
  // console.log('Loading /api/cell-groups');            app.use('/api/cell-groups', require('./routes/cellGroupRoutes'));
  // console.log('Loading /api/member-cell-groups');     app.use('/api/member-cell-groups', require('./routes/memberCellGroupRoutes'));
  // console.log('Loading /api/departments');            app.use('/api/departments', require('./routes/departmentRoutes'));
  // console.log('Loading /api/member-departments');     app.use('/api/member-departments', require('./routes/memberDepartmentRoutes'));
  // console.log('Loading /api/first-timers');           app.use('/api/first-timers', require('./routes/firstTimerRoutes'));
  // console.log('Loading /api/new-converts');           app.use('/api/new-converts', require('./routes/newConvertRoutes'));
  // console.log('Loading /api/admin');                  app.use('/api/admin', require('./routes/adminRoutes'));
  // console.log('Loading /api/milestone-templates');    app.use('/api/milestone-templates', require('./routes/milestoneTemplateRoutes'));
  // console.log('Loading /api/milestones');             app.use('/api/milestones', require('./routes/milestoneRecordRoutes'));
  // console.log('Loading /api/counseling');             app.use('/api/counseling', require('./routes/counselingRoutes'));
  // console.log('Loading /api/prayer-requests');        app.use('/api/prayer-requests', require('./routes/prayerRequestRoutes'));
  // console.log('Loading /api/member-counseling');      app.use('/api/member-counseling', require('./routes/memberCounselingRoutes'));
  // console.log('Loading /api/member-prayer-requests'); app.use('/api/member-prayer-requests', require('./routes/memberPrayerRequestRoutes')); // ✅ FIXED COMMENT

  // console.log('Loading /api/notifications');          app.use('/api/notifications', require('./routes/notificationRoutes'));
  // console.log('Loading /api/cell-group-rules');       app.use('/api/cell-group-rules', require('./routes/rulesRoutes'));
  // console.log('Loading /api/designations');           app.use('/api/designations', require('./routes/designationRoutes'));
  // console.log('Loading /api/cell-group-promotion-rules'); app.use('/api/cell-group-promotion-rules', require('./routes/promotionRuleRoutes'));
  // console.log('Loading /api/attendances');            app.use('/api/attendances', require('./routes/attendanceRoutes'));
  // console.log('Loading /api/events');                 app.use('/api/events', require('./routes/events'));

  // Finance Module
  // console.log('Loading /api/income');                app.use('/api/income', require('./routes/incomeRoutes'));
  // console.log('Loading /api/expenses');              app.use('/api/expenses', require('./routes/expenseRoutes'));
  // console.log('Loading /api/accounts');              app.use('/api/accounts', require('./routes/accountRoutes'));
  // console.log('Loading /api/account-transactions');  app.use('/api/account-transactions', require('./routes/accountTransactionRoutes'));
  // console.log('Loading /api/budgets');               app.use('/api/budgets', require('./routes/budgetRoutes'));
  // console.log('Loading /api/donations');             app.use('/api/donations', require('./routes/donationRoutes'));
  // console.log('Loading /api/pledges');               app.use('/api/pledges', require('./routes/pledgeRoutes'));

  // Settings lookups
  // console.log('Loading /api/settings/account-types');             app.use('/api/settings/account-types', require('./routes/accountTypeRoutes'));
  // console.log('Loading /api/settings/expense-categories');        app.use('/api/settings/expense-categories', require('./routes/expenseCategoryRoutes'));
  // console.log('Loading /api/settings/payment-methods');           app.use('/api/settings/payment-methods', require('./routes/paymentMethodRoutes'));
  // console.log('Loading /api/settings/account-transaction-types'); app.use('/api/settings/account-transaction-types', require('./routes/accountTransactionTypeRoutes'));
  // console.log('Loading /api/settings/currencies');                app.use('/api/settings/currencies', require('./routes/currencyRoutes'));
  // console.log('Loading /api/settings/banks');                     app.use('/api/settings/banks', require('./routes/bankRoutes'));
  // console.log('Loading /api/settings');                           app.use('/api/settings', require('./routes/settingRoutes'));
  // console.log('Loading /api/settings/income-categories');         app.use('/api/settings/income-categories', require('./routes/incomeCategoryRoutes'));
  // console.log('Loading /api/settings/badges');                    app.use('/api/settings/badges', require('./routes/badgeRoutes'));
  // console.log('Loading /api/settings/member-badges');             app.use('/api/settings/member-badges', require('./routes/memberBadgeRoutes'));

  // Misc
  // console.log('Loading /api/import-columns'); app.use('/api/import-columns', require('./routes/importColumnRoutes'));

  // console.log('Loading /api/contributions'); app.use('/api/contributions', require('./routes/contributionRoutes'));
} catch (error) {
  console.error('❌ Route load error:', error.message);
  process.exit(1);
}

// Health check
app.get('/', (req, res) => res.send('RBAC + Membership Backend Running ✅'));

// Serve React static files
app.use(express.static(path.join(__dirname, '../client/build')));

// SPA Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
