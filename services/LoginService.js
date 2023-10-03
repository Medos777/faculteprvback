const loginRepo= require('../Repository/LoginRepository');

module.exports= {
    async loginUser(email, password) {
        try {
            const loggedInAdmin = await loginRepo.login(email, password);
            return loggedInAdmin;
        } catch (error) {
            throw error;
        }

    }
}