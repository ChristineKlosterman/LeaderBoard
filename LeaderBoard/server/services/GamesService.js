import { dbContext } from "../db/DbContext.js";

class GamesService {
    async create(newGame) {
        const game = await dbContext.Games.create(newGame)
        await game.populate('match',)
        return game
    } 
    delete() {
        throw new Error("Method not implemented.");
    }
    getById() {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    
}

export const gamesService = new GamesService()