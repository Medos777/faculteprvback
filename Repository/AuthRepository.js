
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Etudiant = require('../model/etudiant');
const Enseignant = require('../model/Enseignant');
const Admin = require('../model/Admin');
module.exports={
    async login(email, password, role) {
        let user;

        switch (role) {
            case 'etudiant':
                user = await Etudiant.findOne({ email });
                break;
            case 'enseignant':
                user = await Enseignant.findOne({ email });
                break;
            case 'admin':
                user = await Admin.findOne({ email });
                break;
            default:
                throw new Error('Invalid role');
        }

        if (!user) {
            throw new Error('User not found');
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ userId: user._id, role }, 'your-secret-key');
        console.log("the token is"+token);
        return { token };
    },
    verifyToken(token) {
        try {
            const decoded = jwt.verify(token, 'your-secret-key');
            return decoded;
        } catch (err) {
            throw new Error('Invalid token');
        }
    },
    async authorize(req, roles) {
        const token = req.headers.authorization;

        if (!token) {
            throw new Error('Missing token');
        }

        const { role } = this.verifyToken(token);

        if (!roles.includes(role)) {
            throw new Error('Unauthorized');
        }
    }

}