const addUser = require('../models/addUser');

exports.addUser = async (req, res) => {
    const { username, email, phone } = req.body;

    if (!username || !email || !phone) {
        return res.status(400).json({ error: 'Please fill in all fields' });
    }

    try {
        const newUser = new addUser({ username, email, phone });
        await newUser.save();

        res.json({ message: 'New user added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding new user' });
    }
};

exports.getBook = async (req, res) => {
    try {
        const data = await addUser.find();
        res.send(data)
    } catch (error) {
        res.send({ error: err })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log('Deleting user with ID:', userId);

        const deletedUser = await addUser.findByIdAndDelete(userId);
        console.log("User deleted")
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the user' });
    }
};