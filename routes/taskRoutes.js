const express = require('express');
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();
const protected = require('../middlewares/authMiddleware');

router.use(protected)

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;