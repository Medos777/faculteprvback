const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReleveNoteSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    classe: [
        {
            matiere: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
            note: { type: Number, required: true, min: 0, max: 100 },
            anneAcadémique: { type: Number, required: true, min: 1900, max: 2100 },
        },
    ],
    semester: { type: Number, required: true, min: 1, max: 8 },
    moyenne: { type: Number, required: true },

});
ReleveNoteSchema.pre('save', function (next) {
    const sum = this.classe.reduce((total, course) => total + course.note, 0);
    const count = this.classe.length;
    this.moyenne = sum / count;
    next();
});

module.exports = mongoose.model('ReleveNote', ReleveNoteSchema);