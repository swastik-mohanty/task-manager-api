const Task = require('../models/Task');

//create Task

exports.createTask = async(req, res) => {
    const { title, description, status, date, priority } = req.body;
    
    try {
        let task = await Task.findOne({ title });
        if (task) {
            return res.status(400).json({ error: 'Task already exists' });
        }
        task = await Task.create({ user: req.user.id ,title, description, status, date, priority });
        res.status(201).json({ task });
    } catch (error) {
        res.status(400).json({ error: 'Internal Error Occured. Try again after some time' });
    }
}

//get all tasks

exports.getTasks = async(req, res) => {
    try {
        const query = { user: req.user.id };

        if (req.query.status) query.status = req.query.status;
        if (req.query.date) query.dueDate = req.query.date;
        if (req.query.priority) query.priority = req.query.priority;

        const tasks = await Task.find(query).sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: 'Internal Error Occured. Try again after some time' });
    }
}

//get single task

exports.getTask = async(req, res) => {
    try {
        const task = await Task.findById(req.params.id, { user: req.user.id });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: 'Internal Error Occured. Try again after some time' });
    }
}

//update task 

exports.updateTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id, { user: req.user.id });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: 'Internal Error Occured. Try again after some time' });
    }
}

//delete task

exports.deleteTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id, { user: req.user.id });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Internal Error Occured. Try again after some time' });
    }
}