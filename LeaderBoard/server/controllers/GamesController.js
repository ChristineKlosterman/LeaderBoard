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
        } catch (error) {
            next(error)
        }
    }

}