import NextAuth from 'next-auth'
import TwitterProvider  from 'next-auth/providers/twitter'
import config from '../../../config.json'

export default NextAuth({
    providers: [
        TwitterProvider({
            clientId: config.auth.clientId,
            clientSecret: config.auth.clientSecret,
            version: '2.0',
        })
    ]
})
