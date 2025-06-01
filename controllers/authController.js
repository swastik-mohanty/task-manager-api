const User = require('../models/User')
const jwt = require('jsonwebtoken')

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

exports.register = async (req, res) => {

    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        user = await User.create({ name, email, password });
        const token = createToken(user._id);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const isMatch = await user.matchedPassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = createToken(user._id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}