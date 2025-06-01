const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protected = async (req, res, next) => {
    try {
        let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return res.status(400).json({ error: 'Not authorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Not authorized' });
    }
    } catch (error) {
        return res.status(400).json({ error: 'Not authorized' });
    }
}

module.exports = protected;