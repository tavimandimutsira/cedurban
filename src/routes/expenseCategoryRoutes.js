// routes/expenseCategoryRoutes.js
const express = require('express');
const ctrl    = require('../controllers/expenseCategoryController');
const router  = express.Router();

router.get('/', ctrl.getAll);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);

module.exports = router;
