const ClasseRepository =require('../Repository/ClasseRepository');
module.exports = {
    async findAll() {
        return await ClasseRepository.findAll();
    },
    async findById(id){
        return   await ClasseRepository.findById(id);

    },
    async create(data){
        return await ClasseRepository.create(data);
    },
    async update(id, data){
        return await ClasseRepository.update(id, data);
    },
    async delete(id){
        return await  ClasseRepository.delete(id);
    },
    async findByEtudiant(classeId, etudiantId){
        return await ClasseRepository.finByEtudiant(classeId, etudiantId);
    }
   /* async getEtudiantsByClasse(classeid){
        return await  ClasseRepository.getEtudiantsByClasse(classeid);
    }*/

}