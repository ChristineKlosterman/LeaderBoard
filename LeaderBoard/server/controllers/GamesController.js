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
         const game = await gamesService.create()   
         return res.send(game)
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next){
        try {
            const games = await gamesService.getAll()
            
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