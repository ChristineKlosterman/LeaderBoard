import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";

class GamesService {
    async create(newGame) {
        const game = await dbContext.Games.create(newGame)
        return game
    }
    async getAll() {
        const games = await dbContext.Games.find().sort({ createAt: -1 })
        return games
    }
    async getById(id) {
        const game = await dbContext.Games.findById(id)
        if (!game){
            throw new BadRequest('No game with that id')
        }
        return game 
    }
    async delete(gameId, userId) {
        const game = await this.getById(gameId)
        // @ts-ignore
        if(game.creatorId.toString() != userId){
            throw new Forbidden('You dont have permission to delete this game')
        }
        await game.remove()
        return game
    }

}

export const gamesService = new GamesService()