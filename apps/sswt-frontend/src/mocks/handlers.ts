import { graphql } from 'msw'

export const handlers = [
    graphql.mutation('Login', (req, res, ctx) => {
        const { username } = req.variables
        sessionStorage.setItem('is-authenticated', username)
        return res(
            ctx.data({
                login: {
                    username,
                },
            }),
        )
    }),
]