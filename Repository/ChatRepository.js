const Chat = require('../model/chat');
const crypto = require("crypto");
const secretKey = "abcdefghijklmnopqrstuvwxyz012345";

module.exports = {
    async findAll() {
        try {
            return await Chat.find().populate('sender', 'email').populate('receiver', 'email');
        } catch (error) {
            console.error(error);
        }
    },
    async findByEmail(senderEmail, receiverEmail) {
        try {
            return await Chat.find({ $or: [{ senderEmail: senderEmail, receiverEmail: receiverEmail }, { senderEmail: receiverEmail, receiverEmail: senderEmail }] });
        } catch (error) {
            console.error(error);
        }
    },
    async findById(id) {
        return await Chat.findById(id);

    },


    async delete(id) {
        return await Cours.findByIdAndRemove(id);
    },

    async createChat(ChatData) {
        const iv = crypto.randomBytes(16); // Generate a new IV for each encryption
        const cipher = crypto.createCipheriv('aes-256-gcm', secretKey, iv);
       let encryptedData = cipher.update(ChatData.Chatdetails, 'utf-8', 'hex');
       let encryptedDataObject = cipher.update(ChatData.object, 'utf-8', 'hex');
        encryptedData += cipher.final('hex');
      encryptedDataObject += cipher.final('hex');
        const authTag = cipher.getAuthTag();
        ChatData.Chatdetails = encryptedChatDetails;
        ChatData.object = encryptedObject;
        ChatData.iv = iv.toString('hex');
        ChatData.authTag = cipher.getAuthTag().toString('hex');
        try {
            const chat = new Chat({
                ...ChatData

            });
            await chat.save();
        } catch (error) {
            console.error(error);
        }
    }


}