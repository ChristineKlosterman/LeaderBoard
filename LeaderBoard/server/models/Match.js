import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const MatchSchema = new Schema({
    gameId: { type: ObjectId, required: true, ref: 'Game' },
    playerIds: [{ type: ObjectId, required: true, ref: 'Account' }],
    winnerId: { type: ObjectId, required: true, ref: 'Account' },
    groupId: { type: ObjectId },
},
    { timestamps: true, toJSON: { virtuals: true } }
)
MatchSchema.virtual('players', {
    localField: 'playerIds',
    foreignField: '_id',
    ref: 'Account'
})

MatchSchema.virtual('game', {
    localField: 'gameId',
    foreignField: '_id',
    ref: 'Game',
    justOne: true
})