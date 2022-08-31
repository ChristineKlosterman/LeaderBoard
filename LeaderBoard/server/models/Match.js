import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const MatchSchema = new Schema({
    gameId: { type: ObjectId, required: true },
    playerId: { type: [{}], required: true },
    winnerId: { type: ObjectId, required: true },
    groupId: { type: ObjectId },
},
    { timestamps: true, toJSON: { virtuals: true } }
)
MatchSchema.virtual('player', {
    localField: 'playerId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

MatchSchema.virtual('game', {
    localField: 'gameId',
    foreignField: '_id',
    ref: 'Game',
    justOne: true
})