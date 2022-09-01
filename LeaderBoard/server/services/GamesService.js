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
        if (!game) {
            throw new BadRequest('No game with that id')
        }
        return game
    }
    async delete(gameId, userId) {
        const game = await this.getById(gameId)
        // @ts-ignore
        if (game.creatorId.toString() != userId) {
            throw new Forbidden('You dont have permission to delete this game')
        }
        await game.remove()
        return game
    }

    async editGame(id, gameData, userId) {
        let game = await this.getById(id)
        // @ts-ignore
        if (game.creatorId.toString() != userId) {
            throw new Forbidden('not authorized')
        }
        game.name = gameData.name || game.name
        game.description = gameData.description || game.description
        game.rules = gameData.rules || game.rules
        game.img = gameData.img || game.img
        game.coverImg = gameData.coverImg || game.coverImg
        game.minPlayer = gameData.minPlayer || game.minPlayer
        game.maxPlayer = gameData.maxPlayer || game.maxPlayer
        game.type = gameData.type || game.type

        await game.save()
        return game
    }

}

export const gamesService = new GamesService()