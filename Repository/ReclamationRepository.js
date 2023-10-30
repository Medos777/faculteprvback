const Reclamation = require('../model/Reclamation');
const crypto = require('crypto');

const secretKey = "abcdefghijklmnopqrstuvwxyz012345";

module.exports = {
    async findAll() {
        const encryptedReclamations = await Reclamation.find();

        // Log the encrypted data for debugging
        console.log('Encrypted Reclamations:', encryptedReclamations);

        // Decrypt only the ReclamationText field for each reclamation.
        const decryptedReclamations = encryptedReclamations.map(reclamation => {
            console.log('Reclamation:', reclamation);

            try {
                if (reclamation.ReclamationText && typeof reclamation.ReclamationText === 'string') {
                    const iv = Buffer.from(reclamation.iv, 'hex');
                    const authTag = Buffer.from(reclamation.authTag, 'hex');
                    const decipher = crypto.createDecipheriv('aes-256-gcm', secretKey, iv);
                    decipher.setAuthTag(authTag);

                    let decryptedData = decipher.update(reclamation.ReclamationText, 'hex', 'utf-8');
                    decryptedData += decipher.final('utf-8');

                    return {
                        ...reclamation.toObject(),
                        ReclamationText: decryptedData
                    };
                } else {
                    console.error('Invalid data for decryption:', reclamation);
                }
            } catch (error) {
                console.error('Error decrypting reclamation:', error);
            }

            return null;
        }).filter(Boolean); // Filter out any null results

        return decryptedReclamations;
    },



    async create(data) {
        const iv = crypto.randomBytes(16); // Generate a new IV for each encryption
        const cipher = crypto.createCipheriv('aes-256-gcm', secretKey, iv);
        let encryptedData = cipher.update(data.ReclamationText, 'utf-8', 'hex');
        encryptedData += cipher.final('hex');
        const authTag = cipher.getAuthTag();

        const reclamation = new Reclamation({
            ...data,
            ReclamationText: encryptedData,
            iv: iv.toString('hex'),
            authTag: authTag.toString('hex') // Convert authTag to a hexadecimal string for storage
        });

        return await reclamation.save();
    },
    async findByIdForUser(reclamationId, userId) {
        try {
            const reclamation = await Reclamation.findById(reclamationId);

            if (!reclamation) {
                return null; // Reclamation not found
            }

            if (reclamation.admin.toString() !== userId) {
                return null; // Unauthorized access
            }

            // Decryptage ReclamationText
            const iv = Buffer.from(reclamation.iv, 'hex');
            const authTag = Buffer.from(reclamation.authTag, 'hex');
            const decipher = crypto.createDecipheriv('aes-256-gcm', secretKey, iv);
            decipher.setAuthTag(authTag);

            let decryptedData = decipher.update(reclamation.ReclamationText, 'hex', 'utf-8');
            decryptedData += decipher.final('utf-8');

            // Return  reclamation data
            return {
                ...reclamation.toObject(),
                ReclamationText: decryptedData
            };
        } catch (error) {
            throw error;
        }
    },
    async delete(id){
        return await Reclamation.findByIdAndRemove(id);
    }};
