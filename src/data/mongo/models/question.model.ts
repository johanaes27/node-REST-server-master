import mongoose from 'mongoose';


const questionSchema = new mongoose.Schema({
        question: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        correct: {
            type: String || Number,
            required: true,
        },
});

export const QuestionModel = mongoose.model('Question', questionSchema)