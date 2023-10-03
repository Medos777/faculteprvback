const Admin= require('../model/Admin');

module.exports={
    async login(email, password) {
        try {
            // Find the admin user by email
            const admin = await Admin.findOne({ email });

            if (!admin) {
                throw new Error('Invalid email or password');
            }

            // Compare the provided password with the hashed password in the database
            const isPasswordMatch = await bcrypt.compare(password, admin.password);

            if (!isPasswordMatch) {
                throw new Error('Invalid email or password');
            }

            // If both email and password are valid, return the admin object
            return console.log("s7i7");
        } catch (error) {
            throw error;
        }
    }
}