import mongoose from 'mongoose';

const StockSchema = new mongoose.Schema({
    name: String,
    date: Date,
    price: Number
})

// 이렇게 만든게 컬렉션이다~ ↓ Schema는 구조!
export const Stock = mongoose.model("Stock", StockSchema);