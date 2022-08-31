import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { matchesService } from '../services/MatchesService.js'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/:id/matches', this.getMatches)
  }
//test push
  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async getMatches(req, res, next){
    try {
      const matches = await matchesService.getMatchesByAccountId(req.userInfo)
      res.send(matches)
    } catch (error) {
      next(error)
    }
  }
}
