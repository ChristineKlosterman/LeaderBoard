import { Auth0Provider } from "@bcwdev/auth0provider";
import { matchesService } from "../services/MatchesService";
import BaseController from "../utils/BaseController";


export class MatchesController extends BaseController {
    constructor() {
        super('api/matches')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createMatch)

    }
    async createMatch(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            let match = await matchesService.createMatch(req.body)
            return res.send(match)
        } catch (error) {
            next(error)
        }
    }
}