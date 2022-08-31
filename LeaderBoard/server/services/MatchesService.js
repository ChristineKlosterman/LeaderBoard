import { dbContext } from "../db/DbContext"


class MatchesService {


    async createMatch(newMatch) {

        const game = await dbContext.Games.findById(newMatch.gameId)

        const match = await dbContext.Matches.create(newMatch)
        await match.populate('players', 'name picture')
        await match.populate('game')
        // @ts-ignore
        await game.save()
        return match
    }

    async getMatchesByGameId(gameId) {
        const matches = await dbContext.Matches.find({ gameId }).populate('players', 'name picture')
        return matches
    }

    async getMatchesByAccountId(accountId) {
        let matches = await dbContext.Matches.find({ accountId: accountId }).populate('game')
        return matches
    }
}



export const matchesService = new MatchesService()