const AuthService= require('../services/AuthService');

module.exports= {
    async login(req, res) {
        const {email, password, role} = req.body;

        try {
            const {token} = await AuthService.login(email, password, role);
            res.json({token});
        } catch (err) {
            res.status(401).json({message: err.message});
        }
    },

    async authenticate(req, res, next) {
        try {
            await AuthService.authenticate(req, ['etudiant', 'enseignant', 'admin']);
            next();
        } catch (err) {
            res.status(401).json({message: err.message});
        }
    }
}