import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
    writer: String,
    title: String,
    contents: String
})

// 이렇게 만든게 컬렉션이다~ ↓ Schema는 구조!
export const Board = mongoose.model("Board", BoardSchema);