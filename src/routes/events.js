const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventsController');

// Create a new event
router.post('/', eventController.create);

// Get all events
router.get('/', eventController.list);

// ⚠️ Specific routes FIRST
router.get('/member/:memberId/upcoming', eventController.getUpcomingWithoutRegistered);
router.get('/member/:memberId', eventController.getByMemberId);

// ✅ Generic catch-all route LAST
router.get('/:id', eventController.get);

// Update an event by ID
router.put('/:id', eventController.update);

// Delete an event by ID
router.delete('/:id', eventController.remove);

// Register a member for an event
router.post('/register', eventController.registerForEvent);

module.exports = router;
