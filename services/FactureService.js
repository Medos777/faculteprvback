const FactureRepository =require('../Repository/FactureRepository');
module.exports = {
    async findAll() {
        return await FactureRepository.findAll();
    },
    async findById(id){
        return   await FactureRepository.findById(id);

    },
    async create(data){
        return await FactureRepository.create(data);
    },
    async update(id, data){
        return await FactureRepository.update(id, data);
    },
    async delete(id){
        return await  FactureRepository.delete(id);
    },
    async getFactureByEtudiant(EtudiantId){
        return await FactureRepository.getFactureByEtudiant(EtudiantId);
    }
}