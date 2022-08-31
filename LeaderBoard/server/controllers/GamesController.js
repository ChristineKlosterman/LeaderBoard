import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountService } from "../services/AccountService.js";
import { gamesService } from "../services/GamesService.js";
import BaseController from "../utils/BaseController.js";


export class GamesController extends BaseController{
    constructor(){
        super('/api/games')
        this.router
        .get('', this.getAll)
        .get('/:id', this.getById)
        .get('/:id/profiles', this.getProfiles)
        .get('/:id/matches', this.getRecentMatches)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('',this.create)
        .delete(':/id', this.delete)
        
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
            const games = await gamesService.getById(req.params.id)
            return res.send(games)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next){
        try {
            const games = await gamesService.delete(req.params.id, req.userInfo.id)
            return res.send(games)
        } catch (error) {
            next(error)
        }
    }
    async getProfiles(req, res, next){
        try {
            const players = await accountService.getAccount
            return res.send(players)
        } catch (error) {
            next(error)
        }
    }
    async getRecentMatches(req, res, next){
        try {
            const matches = await gamesService.getMatchesByGameId(req.params.id)
            return res.send(matches)
        } catch (error) {
            next(error)
        }
    }
}