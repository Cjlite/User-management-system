const User = require('../models/user');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Please fill in all fields' });
    }

    const user = new User({ name, email, password });

    try {
        await user.save();
        res.json({ message: 'Signup successful' });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while signing up' });
    }
};

exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        res.json({ message: 'Sign-in successful' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while signing in' });
    }
};