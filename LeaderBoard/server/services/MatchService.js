import { dbContext } from "../db/DbContext"


class MatchService {


    async createMatch(newMatch) {

        const game = await dbContext.Game.findById(newMatch.gameId)

        const match = await dbContext.Match.create(newMatch)
        await match.populate('player', 'name picture')
        await match.populate('game')
        // @ts-ignore
        await game.save()
        return match
    }

    async getMatchesByGameId(gameId) {
        const matches = await dbContext.Match.find({ gameId }).populate('profile', 'name picture')
        return matches
    }
}



export const matchSchema = new MatchService()