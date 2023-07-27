const EtudiantRepository =require('../Repository/EtudiantRepository');
module.exports = {
    async findAll() {
        return await EtudiantRepository.findAll();
    },
    async findById(id){
      return   await EtudiantRepository.findById(id);

    },
    async createEtudiant(data, classeId){
        return await EtudiantRepository.createEtudiant(data, classeId);
    },
    async update(id, data){
        return await EtudiantRepository.update(id, data);
    },
    async delete(id){
        return await  EtudiantRepository.delete(id);
    },
    async getEtudiantsByClasse(classeId){
        return await EtudiantRepository.getEtudiantsByClasse(classeId);
    }
}