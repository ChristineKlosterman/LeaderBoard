import { dbContext } from "../db/DbContext"


class MatchService {


    async createMatch(newMatch) {
        const match = await dbContext.Match.create(newMatch)
        await match.populate('player', 'name picture')

    }
}



export const matchSchema = new MatchService()