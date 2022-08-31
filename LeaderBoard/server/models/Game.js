import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId


export const GameSchema = new Schema ({
name:{type: String, required: true},
creatorId:{type: ObjectId, required: true},
description:{type: String, required: true, maxlength: 200},
rules:{type: String, required: true, maxlength: 300},
img:{type: String, required: true},
coverImg:{type: String, required: true},
minPlayer:{type: Number, required: true},
maxPlayer:{type: Number, required: true},
type:{type: String, enum :[
    'card game', 'board game', 'video game', 'sport'
], required: true},
})

GameSchema.virtual('creator',{
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true 
})