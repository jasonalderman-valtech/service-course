import { Clients } from '../clients/index'
import { EventContext } from '@vtex/api'

export async function updateLiveUsers(ctx: EventContext<Clients>) {
  const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
  console.log('LIVE USERS: ', liveUsersProducts)
  // console.log('EVENT HANDLER: received event')
  return true;
}