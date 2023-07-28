const AuthRepository= require('../Repository/AuthRepository');
module.exports={
    async login(email, password, role) {
        try {
            const { token } = await AuthRepository.login(email, password, role);
            console.log(token);
            return { token };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    async authenticate(req, roles) {
        try {
            await AuthRepository.authorize(req, roles);
        } catch (err) {
            throw new Error(err.message);
        }
    }

}