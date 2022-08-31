import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GameSchema } from '../models/Game';
import { MatchSchema } from '../models/Match';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Game = mongoose.model('Game', GameSchema);

  Match = mongoose.model('Match', MatchSchema);
}

export const dbContext = new DbContext()
