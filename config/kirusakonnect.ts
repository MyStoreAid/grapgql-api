export const SMSconfig: { accountId?: String, apiToken?: String, senderMask?: String, id?: String} = { 
  accountId : process.env.KIRUSA_KONNECT_ACCOUNT_ID, 
  apiToken: process.env.KIRUSA_KONNECT_API_TOKEN,
  senderMask: process.env.KIRUSA_KONNECT_SENDER_MASK,
  id: process.env.KIRUSA_KONNECT_ID,
}
