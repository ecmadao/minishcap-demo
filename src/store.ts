import 'es6-promise/auto'
import { createStore } from 'vuex'
import { convertToShortURL, IShortenURL } from './api'

export interface IState {
    url: string
    shortUrl?: IShortenURL
}

export const MUTATION_TYPES = {
    SET_SHORT_LINK: 'setShortLink',
    SET_URL: 'setUrl'
}

export const ACTION_TYPES = {
    SHORTEN: 'shorten'
}

export const store = createStore<IState>({
    state: {
        url: '',
    },
    actions: {
        async [ACTION_TYPES.SHORTEN] (context) {
            if (!context.state.url) return
            try {
                const res = await convertToShortURL(context.state.url)
                context.commit(MUTATION_TYPES.SET_SHORT_LINK, res.result?.pop())
            } catch (err) {
                console.error(err)
            }
        }
    },
    mutations: {
        [MUTATION_TYPES.SET_SHORT_LINK] (state: IState, shortUrl?: IShortenURL) {
            if (shortUrl) {
                state.shortUrl = shortUrl
            }
        },
        [MUTATION_TYPES.SET_URL] (state: IState, url: string) {
            state.url = url
        }
    }
})