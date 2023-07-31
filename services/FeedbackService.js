const FeedbackRepository= require('../Repository/FeedbackRepository');
module.exports={
        async findAll() {
            return await FeedbackRepository.findAll();
        },
        async findById(id) {
            return await FeedbackRepository.findById(id);

        },
        async create(data) {
            return await FeedbackRepository.create(data);
        },
        async update(id, data) {
            return await FeedbackRepository.update(id, data);
        },
        async delete(id) {
            return await FeedbackRepository.delete(id);
        }
    }