const loginService = require('../services/LoginService');

module.exports={
    async loginUser(req, res) {
        const { email, password } = req.body;

        try {
            const loggedInAdmin = await loginService.loginUser(email, password);
            res.json({ message: 'Login successful', user: loggedInAdmin });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

}