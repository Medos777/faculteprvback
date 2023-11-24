const ChatRepository =require('../Repository/ChatRepository');
module.exports = {
    async findAll() {
        return await ChatRepository.findAll();
    },
    async findById(id){
        return   await ChatRepository.findById(id);

    },
    async create(data){
        return await ChatRepository.createChat(data);
    },
    async findByEmail(EmailSender, EmailReceiver){
        return await ChatRepository.findByEmail(EmailSender, EmailReceiver);
    },
    async delete(id){
        return await  ChatRepository.delete(id);
    }
}