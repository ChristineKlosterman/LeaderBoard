import { accountService } from "../services/AccountService.js";
import { gamesService } from "../services/GamesService.js";
import BaseController from "../utils/BaseController.js";


export class GamesController extends BaseController{
    constructor(){
        super('/api/games')
        this.router
    }
    async create(req, res, next){
        try {
            req.body.creatorId = req.userInfo.id
         const game = await gamesService.create(req.body)   
         return res.send(game)
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next){
        try {
            const games = await gamesService.getAll()
            return res.send(games)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next){
        try {
            const games = await gamesService.getById()
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next){
        try {
            const games = await gamesService.delete()
        } catch (error) {
            next(error)
        }
    }
    async getMatches(req, res, next){
        try {
            const matches = await gamesService.getAll
        } catch (error) {
            next(error)
        }
    }
    async getProfiles(req, res, next){
        try {
            const players = await accountService.getAccount
        } catch (error) {
            next(error)
        }
    }
}